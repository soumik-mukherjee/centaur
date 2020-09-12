#!/bin/bash
set -e
IFS='|'

AMPLIFY="$(cat $CENTAUR_CACHE_PATH/amplify.json)"
FRONTEND="$(cat $CENTAUR_CACHE_PATH/frontend.json)"
PROVIDERS="$(cat $CENTAUR_CACHE_PATH/providers.json)"

amplify init \
--amplify $AMPLIFY \
--frontend $FRONTEND \
--providers $PROVIDERS \
--yes