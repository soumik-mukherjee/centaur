#!/usr/bin/env node

'use strict';

const fs = require('fs');
const { initPkg } = require('./initPkg');
const { cacheHeadlessParams } = require('./cacheHeadlessParams');

const [, , ...args] = process.argv
const [command, ...restOfArgs] = args

switch(command){
    case "initPkg":
        initPkg(restOfArgs);
        break;
    case "cacheHeadlessParams":
        cacheHeadlessParams(restOfArgs);
        break;
    default:
        throw new Error('Un-indentified command');
}



