const { google } = require('googleapis')
const

require('dotenv').config();

const CLIENT_ID = `${process.env.OAUTH_CLIENT_ID}.apps.googleusercontent.com`;
const SCOPES = 'https://www.googleapis.com/auth/classroom.coursework.me.readonly';

let tokenClient;
let accessToken;

document.getElementById('authBtn').addEventListener('click', () => {
    if (!tokenClient) {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: async (tokenResponse) => {
                accessToken = tokenResponse.access_token;
                await listCourseWork()
            }
        })
    }
    tokenClient.requestAccessToken();
})

async function listCourseWork() {
    const courseId = ""
}