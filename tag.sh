#!/bin/bash

COMPONENT=$(grep -m1 name package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')
VERSION=$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g' | sed 's/-.*//g')
TAG="v${VERSION}"

# Any subsequent(*) commands which fail will cause the shell script to exit immediately
set -e
set -o pipefail

git tag $TAG
git push --tags
