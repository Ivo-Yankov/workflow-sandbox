const {getLatestRelease, deleteRelease, createRelease} = require('./helpers');

(async function() {
    let latestRelease = await getLatestRelease();
    if (latestRelease && latestRelease.prerelease) {
        if (latestRelease && latestRelease.prerelease) {
            await deleteRelease(latestRelease.id.toString());
        }

        await createRelease(latestRelease);
    }
})();