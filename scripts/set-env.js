#!/bin/node

// https://medium.com/cwi-software/how-to-setup-multiple-environments-for-react-native-786005a360fc

const fs = require('fs');
const path = require('path');
const { argv } = require('yargs');

const { env } = argv;

const acceptedEnvs = ['mock', 'local', 'dev', 'test', 'prod'];

function writeFile(file, string) {
    if (fs.existsSync(file)) {
        fs.writeFileSync(file, string);
        return true;
    }

    console.log(`File "${file}" not found.`);
    process.exit(1);
}

function validateParams() {
    console.log(`Validating params...`);
    if (!env || !acceptedEnvs.includes(env)) {
        console.log(
            `Error. Please use a valid environment: ${acceptedEnvs.join(', ')}.`
        );
        process.exit(1);
    }
}

function setEnvironment() {
    console.log(`Setting environment to ${env}...`);

    const importerSring = `export { env } from "./${env}";\n`;

    const envIndexFileLocation = path.resolve(
        __dirname,
        '..',
        'src',
        'config',
        'env',
        'index.ts'
    );

    writeFile(envIndexFileLocation, importerSring);
    console.log(`Environment successfully set to ${env}.`);
    process.exit(0);
}

validateParams();
setEnvironment();
