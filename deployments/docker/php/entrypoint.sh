#!/bin/sh
set -e

echo "Running in $APP_ENV mode."

# Install dependencies based on environment
mkdir -p var/cache var/log

if [[ "$APP_ENV" =~ ^dev* ]]; then
  echo "Installing development dependencies with Composer..."
  composer install
else

  apk add --no-cache rsync
  sleep 5

  if [ "$APP_REFRESH" = "true" ]; then
    echo "APP_REFRESH is true. Clearing /srv/app directory..."
    rm -rf /srv/app/*  # Clear the app directory to force refresh

    echo "Syncing /srv/local to /srv/app..."
    rsync -a /srv/local /srv/app --exclude var/cache --exclude var/log --exclude node_modules --exclude .git --exclude "*.lock"
  fi

  echo "Installing production dependencies with Composer..."
  composer install --prefer-dist --no-dev --no-progress --no-scripts --no-interaction
  composer dump-autoload --classmap-authoritative --no-dev
  composer run-script --no-dev post-install-cmd
fi

chmod +x bin/console; sync

# Start PHP-FPM
echo "Starting PHP-FPM..."
exec php-fpm --nodaemonize