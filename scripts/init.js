#!/usr/bin/env node

'use strict';

const fs = require('fs');

const [ ,, ...args ] = process.argv
const [ githubOrg, githubOrgRepo ] = args
const githubRepo = githubOrgRepo.substr(githubOrgRepo.indexOf('/') + 1, githubOrgRepo.length - 1)

console.log('githubOrg: ', githubOrg);
console.log('githubOrgRepo: ', githubOrgRepo);
console.log('githubRepo: ', githubRepo);

let pkgTemplateFile = fs.readFileSync('../package.json');
let pkg = JSON.parse(pkgTemplateFile);


pkg.name = `@${githubOrgRepo}`;
pkg.main = `dist/${githubRepo}.js`;
pkg.module = `dist/${githubRepo}.esm.js`;

pkg.files = [`dist/${githubRepo}.js`, `dist/${githubRepo}.esm.js`];
pkg.repository = `https://github.com/${githubOrgRepo}`

fs.writeFileSync('../package.json',JSON.stringify(pkg));

