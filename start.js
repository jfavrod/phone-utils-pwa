const approot = require('app-root-path');
const { execSync } = require('child_process');

const PORT = process.env.PORT || 3000;

try {
    let cmd = `${approot.path}/node_modules/serve/bin/serve.js `;
    cmd += `-p ${PORT} `;
    cmd += `-s ${approot.path}/build`;
    console.log(`starting serve on port ${PORT}`);
    execSync(cmd);
}
catch (err) {
    console.log(`error! ${err.message}`);
}
