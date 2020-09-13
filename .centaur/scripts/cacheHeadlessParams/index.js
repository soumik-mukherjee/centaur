const camelCase = require('camelcase');
const fs = require('fs');
const { amplifyInit } = require('./amplifyInit');
const { amplifyEnvAdd } = require('./amplifyEnvAdd');

module.exports.cacheHeadlessParams = function (args) {
    const [subCommand, ...restOfArgs] = args

    switch(subCommand){
        case "amplifyInit":
            amplifyInit(restOfArgs);
            break;
        case "amplifyEnvAdd":
            amplifyEnvAdd(restOfArgs);
            break;
        default:
            throw new Error('Un-indentified sub-command');
    }
}