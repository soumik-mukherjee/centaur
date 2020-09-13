#!/bin/bash
git add .
DIFF=$(git diff --raw)
if [ -z "$DIFF" ] 
then
	echo "Diff found. Ready to commit"
  git commit -m "centaur: $COMMIT_MESSAGE"
  git push origin master   
else
	echo "No changes to commit"
fi
