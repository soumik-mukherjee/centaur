#!/bin/bash

DIFF=$(git diff --raw)
if [ -z "$DIFF" ] 
then
	echo "No changes to commit. Nothing to do"
else
  echo "Diff found. Ready to commit"
  git add .
  git commit -m "centaur: $COMMIT_MESSAGE"
fi
