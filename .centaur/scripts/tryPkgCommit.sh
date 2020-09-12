#!/bin/bash
git add .
DIFF=$(git diff --raw)
if [ -z "$DIFF" ] 
then
	echo "package.json already initialized. No changes to commit"
else
	echo "Ready to commit tailored package.json"
  git commit -m "centaur: Tailoring your package.json"
  git push origin master   
fi
