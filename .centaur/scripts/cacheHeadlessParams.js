const camelCase = require('camelcase');
const fs = require('fs');

module.exports.cacheHeadlessParams = function (args) {
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

    // Load & setup react config template
    let reactConfigTemplateFile = fs.readFileSync('./.centaur/templates/amplify-headless-params/reactConfig.json');
    let reactConfig = JSON.parse(reactConfigTemplateFile);
    fs.writeFileSync(`${centaurCachePath}/reactConfig.json`, JSON.stringify(reactConfig));

    // Load & setup aws frontend config template
    let frontendCfgTemplateFile = fs.readFileSync('./.centaur/templates/amplify-headless-params/frontend.json');
    let frontendConfig = JSON.parse(frontendCfgTemplateFile);
    frontendConfig.config = reactConfig;
    fs.writeFileSync(`${centaurCachePath}/frontend.json`, JSON.stringify(frontendConfig));

    // Setup providers 
    let providers = {awscloudformation: awsCloudformationConfig}
    fs.writeFileSync(`${centaurCachePath}/providers.json`, JSON.stringify(providers));

}