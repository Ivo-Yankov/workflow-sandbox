const {getLatestRelease, deleteRelease, createRelease} = require('./helpers');

(async function() {
    try {
        let latestRelease = await getLatestRelease();
        if (latestRelease && latestRelease.prerelease) {
            if (latestRelease && latestRelease.prerelease) {
                await deleteRelease(latestRelease.id.toString());
            }

            await createRelease(latestRelease);
        }
    }
    catch(err) {
        console.error(err);
    }
})();