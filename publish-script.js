const {publish} = require("libnpmpublish");


(async function () {

    console.log(process.argv);

    const json = {
        "name": "ivo-totally-different-package",
        "version": "0.0.1",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
    };

    const options = {
        // access: "public",
        tag: 'latest',
        npmVersion: 'ivo-totally-different-package@0.0.1',
        // token: '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'
        token: process.argv[3]
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
