const {publish} = require("libnpmpublish");


(async function () {
    const json = {
        "name": "some-ivo-random-package",
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
        npmVersion: 'some-ivo-random-package@0.0.2',
        token: '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'
    };

    console.log("Publishing Wooo Hooo");
    try {
        // await publish(manifest, tarData, {
        //     // access: "private",
        //     tag: 'latest',
        //     npmVersion: 'some-ivo-random-package@0.0.2',
        //     token: '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'
        // });


        await publish('some-ivo-random-package', json, options);
    }
    catch (err) {
        console.error(err);
    }
    // await publish(manifest, tarData, {token: process.argv[3]});
})();
