const fs = require('fs');
const path = require('path');

try {
    const data = fs.readFileSync(path.resolve(__dirname, 'version.txt'), 'utf8')
    console.log(data);
    let version = parseInt(data.trim());
    version++;

    version = process.argv[2];

    fs.writeFileSync( path.resolve(__dirname, 'version.txt'), version );
} catch (err) {
    console.error(err)
}