#!/bin/bash
set -e
IFS='|'

# Pseudo change; the unix file descriptor was changed to add executable permissions on this script. 
# To force a git diffthis comment is being added

AMPLIFYDEV="$(cat $CENTAUR_CACHE_PATH/amplify-dev.json)"
AMPLIFYSANDBOX="$(cat $CENTAUR_CACHE_PATH/amplify-sandbox.json)"
PROVIDERS="$(cat $CENTAUR_CACHE_PATH/providers.json)"

echo $AMPLIFYDEV
echo $AMPLIFYSANDBOX
echo $ENVNAME

amplify init \
--amplify $AMPLIFYDEV \
--providers $PROVIDERS \
--yes


amplify env checkout \
--amplify $AMPLIFYSANDBOX \
--providers $PROVIDERS \
--yes

amplify env checkout dev

amplify env remove $ENVNAME --force