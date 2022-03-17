const {getLatestRelease, deleteRelease, createRelease} = require('./helpers');

const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    try {
        let latestRelease = await getLatestRelease();
        if (latestRelease && latestRelease.prerelease) {
            if (latestRelease && latestRelease.prerelease) {
                await deleteRelease(latestRelease.id.toString());
            }

            latestRelease.name = latestRelease.name
                .replace('minor', '')
                .replace('major', '')
                .trim();

            await sleep(5000);
            await createRelease(latestRelease);

        }
    }
    catch(err) {
        console.error(err);
    }
})();