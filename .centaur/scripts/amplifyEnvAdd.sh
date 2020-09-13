#!/bin/bash
set -e
IFS='|'

AMPLIFY="$(cat $CENTAUR_CACHE_PATH/amplify.json)"
PROVIDERS="$(cat $CENTAUR_CACHE_PATH/providers.json)"

amplify env add \
--amplify $AMPLIFY \
--providers $PROVIDERS \
--yes