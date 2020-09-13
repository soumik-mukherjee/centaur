const camelCase = require('camelcase');
const fs = require('fs');

module.exports.amplifyEnvAdd = function (args) {
    const [subCommand, ...restOfArgs] = args
    const [githubOrg, githubOrgRepo, runNumber, region, awsAccessKeyId, awsSecretAccessKey, envName, centaurCachePath] = args
    const githubRepo = githubOrgRepo.substr(githubOrgRepo.indexOf('/') + 1, githubOrgRepo.length - 1)
    const projectName = camelCase(githubRepo, { pascalCase: true });

    console.log('githubOrg: ', githubOrg);
    console.log('githubOrgRepo: ', githubOrgRepo);
    console.log('githubRepo: ', githubRepo);
    console.log('projectName: ', projectName);

    // Load & setup amplify config template
    let amplifyCfgTemplateFile = fs.readFileSync('./.centaur/templates/amplify-headless-params/amplify.json');
    let amplifyConfig = JSON.parse(amplifyCfgTemplateFile);
    amplifyConfig.projectName = projectName;
    amplifyConfig.envName = envName;

    fs.writeFileSync(`${centaurCachePath}/amplify.json`, JSON.stringify(amplifyConfig));

    // Load & setup aws cloudformation config template
    let awsCloudformationCfgTemplateFile = fs.readFileSync('./.centaur/templates/amplify-headless-params/awsCloudformationConfig.json');
    let awsCloudformationConfig = JSON.parse(awsCloudformationCfgTemplateFile);
    awsCloudformationConfig.accessKeyId = awsAccessKeyId;
    awsCloudformationConfig.secretAccessKey = awsSecretAccessKey;
    awsCloudformationConfig.region = region;

    fs.writeFileSync(`${centaurCachePath}/awsCloudformationConfig.json`, JSON.stringify(awsCloudformationConfig));

    // Setup providers 
    let providers = {awscloudformation: awsCloudformationConfig}
    fs.writeFileSync(`${centaurCachePath}/providers.json`, JSON.stringify(providers));

}