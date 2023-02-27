export const initialState = {
    token: 'BQCli84q8lxKGP2yHNGQcsxq1z1_SVegPesK_jNf6cYPnsvFJSjuZZ-C9mAWkuRPzgiDrXsw6lo7MrYX_eIuBQanbjGWqdKGtzjw6xxS4QcnqBN-7JPx6rcDiIpGhXFsbxUBWPJMh1mqloThTPLFgGCH1lryvMvUsirrQB_Jr9HBAT4iiaj6muANr--Mc7Yh4jB4v2E',
    user: null,
    playlists: [],
    playing: false,
    item: null,
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default: 
        return state
    }

}

export default reducer