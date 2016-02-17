#!/bin/bash

export PATH=./node_modules/.bin/:$PATH;

readonly ARGS="$@"

main() {
    webpack --module-bind 'js=babel-loader' ./src/client/Upload.js ./public/Upload.js
}

main
