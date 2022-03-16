const {getLatestRelease, deleteRelease, createRelease} = require('./helpers');

(async () => {
    try {
        let latestRelease = await getLatestRelease();
        if (latestRelease && latestRelease.prerelease) {
            if (latestRelease && latestRelease.prerelease) {
                await deleteRelease(latestRelease.id.toString());
            }

            latestRelease.name = latestRelease.name
                .replace('minor', '')
                .replace('minor', '')
                .trim();

            await createRelease(latestRelease);
        }
    }
    catch(err) {
        console.error(err);
    }
})();