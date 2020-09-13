const { amplifyInit } = require('./amplifyInit');
const { amplifyEnvAdd } = require('./amplifyEnvAdd');
const { amplifyEnvRemove } = require('./amplifyEnvRemove');

module.exports.cacheHeadlessParams = function (args) {
    const [subCommand, ...restOfArgs] = args

    switch (subCommand) {
        case "amplifyInit":
            amplifyInit(restOfArgs);
            break;
        case "amplifyEnvAdd":
            amplifyEnvAdd(restOfArgs);
            break;
        case "amplifyEnvRemove":
            amplifyEnvRemove(restOfArgs);
            break;
        default:
            throw new Error('Un-indentified sub-command');
    }
}