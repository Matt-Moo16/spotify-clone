export const authEndpoint = 'https://accounts.spotify.com/authorize'

const redirectUri = 'http://localhost:3000/'
const clientId = '0cf99cc0cb9c44678b34b5a20f066c39'

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]

export const getCodeFromUrl = () => {
    return window.location.href
        .split('?')
        .reduce((initial, item) => {
            let parts = item.split('=')
            console.log('this is parts', parts)
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`