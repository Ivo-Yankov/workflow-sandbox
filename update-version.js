const fs = require('fs');
const path = require('path');

try {

    console.log(process.argv);
    let data = fs.readFileSync(path.resolve(__dirname, 'version.txt'), 'utf8')
    console.log(data);
    let versions = data.split['.'];
    let patch = parseInt(versions[2]);
    patch++;
    let version = `0.0.${patch}`;

    fs.writeFileSync( path.resolve(__dirname, 'version.txt'), version );
} catch (err) {
    console.error(err)
}