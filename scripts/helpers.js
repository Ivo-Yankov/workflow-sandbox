const axios = require('axios');
const githubRepo = 'Ivo-Yankov/workflow-sandbox';

const timeout = 5000;

async function getLatestRelease() {
    const res = await axios.get(`https://api.github.com/repos/${githubRepo}/releases`, {
        timeout,
        headers: {'authorization': `Bearer ${process.env.GITHUB_TOKEN}`}
    });

    return res.data[0];
}

async function deleteRelease(releaseId) {
    return await axios.delete(`https://api.github.com/repos/${githubRepo}/releases/${releaseId}`, {
        timeout,
        headers: {'authorization': `Bearer ${process.env.GITHUB_TOKEN}`}
    });
}

async function createRelease(data) {
    const {tag_name, target_commitish, name, body} = data;
    return await axios({
        method: 'post',
        url: `https://api.github.com/repos/${githubRepo}/releases`,
        data: {
            tag_name,
            target_commitish,
            name,
            body,
            draft: false,
            prerelease: false
        },
        // timeout,
        headers: {'authorization': `Bearer ${process.env.GITHUB_TOKEN}`}
    });
}

module.exports = {getLatestRelease, deleteRelease, createRelease};