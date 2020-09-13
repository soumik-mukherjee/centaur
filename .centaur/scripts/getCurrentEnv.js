#!/usr/bin/env node

'use strict';

const fs = require('fs');

const [, , pathToTeamProviderInfo, ...rest] = process.argv

const teamProviderInfoFile = fs.readFileSync(`${pathToTeamProviderInfo}`);
const teamProvider = JSON.parse(teamProviderInfoFile);

const [, env2name, ...restEnvs] = Object.keys(teamProvider);

// The following console log will ensure a (additional) behaviour similar to return.
// While return will work in javascript environments, the console will work 
// when this script is being invoked by a shell evironment, and where it is required 
// to do some further work with this return value (presumably store it in an environment variable)
// e.g. usage with shell scripts, say you need the retrun value in an env var called ENVNAME;
// ENVNAME=$(node ./.centaur/scripts/getCurrentEnv.js /path/to/team-provider-info.json)

console.log(env2name);

return env2name;

return env2name; 