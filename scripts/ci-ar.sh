#!/bin/bash

# exit when any command fails
set -e

# TEST: Add 'failing' grep to ensure we don't bail out
test="$(echo "test" | { grep -v 'dotcom-rendering' || :; })"
echo $test

git fetch origin main

gitBranches="$(git branch -r)"
echo "git branches: $gitBranches"

currentBranch="$(git rev-parse --abbrev-ref HEAD)"
echo "current branch: $currentBranch"

# files that were changed between current branch and main
files="$(git diff --name-only $currentBranch origin/main)"
echo "git diff files: $files"

# files that are not within dotcom-rendering sub directory
filteredFiles="$(echo "$files" | { grep -v 'dotcom-rendering' || :; })"
echo "files that are not in dotcom-rendering: $filteredFiles"

# run the ci steps if either of the followings is true
# - filteredFiles is empty (all changes were in dotcom-rendering)
# - we are in the main branch
if [[ $currentBranch != "main" ]] && [ -z "$filteredFiles" ]
then
    printf "Skipping AR ci build because AR file changes is empty and branch is $currentBranch\n\n"
else
    printf "Running AR ci build because AR file changes contains $filteredFiles and branch is $currentBranch\n\n"

    source ~/.nvm/nvm.sh
    nvm install
    nvm use

    npm i -g yarn@1.x
    yarn --silent

    cd apps-rendering

    npm ci
    npm run test
    npm run build:client:prod
    npm run build:server:prod
    npm run copy-manifest
    npm run copy-fonts
    npm run upload

fi
