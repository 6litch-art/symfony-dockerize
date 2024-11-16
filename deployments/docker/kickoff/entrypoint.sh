#! /bin/sh

apk add --no-cache rsync
sleep 5

# Check if FORCE_REFRESH is set to true
if [ "$APP_REFRESH" = "true" ]; then
  echo "APP_REFRESH is true. Clearing /srv/app directory..."
  rm -rf /srv/app/*  # Clear the app directory to force refresh
fi

# Sync /srv/local to /srv/app
echo "Syncing /srv/local to /srv/app..."
rsync -a /srv/local/ /srv/app/ --exclude var/cache --exclude var/log --exclude node_modules --exclude .git

sed -i "/APP_ENV=/d" /srv/app/.env
sed -i "/APP_DEBUG=/d" /srv/app/.env
if [ "$APP_DEBUG" = "true" ]; then
  echo "Development mode enabled."
  echo "APP_ENV=dev" >> /srv/app/.env
  echo "APP_DEBUG=1" >> /srv/app/.env
else
  echo "Production mode enabled."
  echo "APP_ENV=prod" >> /srv/app/.env
  echo "APP_DEBUG=0"  >> /srv/app/.env
fi

echo "App directory synced successfully."
