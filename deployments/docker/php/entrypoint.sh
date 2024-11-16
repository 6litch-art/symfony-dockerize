#!/bin/sh
set -e

echo "Running in $APP_ENV mode."

# Install dependencies based on environment
mkdir -p var/cache var/log

if [[ "$APP_ENV" =~ ^dev* ]]; then
  echo "Installing development dependencies with Composer..."
  composer install
else
  echo "Installing production dependencies with Composer..."
  composer install --prefer-dist --no-dev --no-progress --no-scripts --no-interaction
  composer dump-autoload --classmap-authoritative --no-dev
  composer run-script --no-dev post-install-cmd
fi

chmod +x bin/console; sync

# Start PHP-FPM
echo "Starting PHP-FPM..."
exec php-fpm