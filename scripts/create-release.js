const {getLatestRelease, deleteRelease, createRelease} = require('./helpers');

(async () => {
    try {
        let latestRelease = await getLatestRelease();
        if (latestRelease && latestRelease.prerelease) {
            if (latestRelease && latestRelease.prerelease) {
                await deleteRelease(latestRelease.id.toString());
            }

            latestRelease.name = "This is the new name";

            await createRelease(latestRelease);
        }
    }
    catch(err) {
        console.error(err);
    }
})();