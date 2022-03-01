const {publish} = require("libnpmpublish");
const pacote = require('pacote') // see: http://npm.im/pacote
const path = require('path');

const packagePath = path.resolve(__dirname)

const manifest = await pacote.manifest(packagePath)
const tarData = await pacote.tarball(packagePath)


(async function () {
    console.log("Publishing Wooo Hooo");
    console.log(process.env);
    console.log(process.argv);
    await publish(manifest, tarData, {token: process.argv[3]});
})();
