const {publish} = require("libnpmpublish");
const fs = require('fs');
const path = require('path');


(async function () {
    let version = fs.readFileSync(path.resolve(__dirname, 'version.txt'), 'utf8')


    console.log(`Version: ${version}`);

    const json = {
        "name": "ivo-totally-different-package",
        "version": version,
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
    };

    const options = {
        tag: 'latest',
        npmVersion: `ivo-totally-different-package@${version}`,
        token: process.argv[2]
    };

    console.log("Publishing Wooo Hooo");
    try {
        // await publish(manifest, tarData, {
        //     // access: "private",
        //     tag: 'latest',
        //     npmVersion: 'ivo-totally-different-package@0.0.2',
        //     token: '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'
        // });


        await publish('ivo-totally-different-package', json, options);
    }
    catch (err) {
        console.error(err);
    }
    // await publish(manifest, tarData, {token: process.argv[3]});
})();
