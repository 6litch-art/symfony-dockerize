#!/bin/sh
set -e

# Default to production if NODE_ENV is not set

echo "Running in $APP_ENV mode."

echo "Building production assets..."
yarn install
if [[ "$APP_ENV" =~ ^dev* ]]; then
  yarn watch
fi

if [ ! -L node_modules ]; then (rm -rf var/modules); fi
if [ ! -L node_modules ]; then (mv node_modules var/modules); fi
if [ ! -L node_modules ]; then (ln -s var/modules node_modules); fi

# Keep the container running
tail -f /dev/null