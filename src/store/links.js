export default {
    state: {
        links: [],
    },
    getters: {
        getLinks: (state) => {
            return state.links;
        },
    },
    mutations: {
        setLinks(state, payload) {
            state.links = [...payload]
        },
        setAddNewLink(state, payload) {
            state.links.push({ ...payload })
            localStorage.setItem('links', JSON.stringify(state.links))
        },
        setVote(state, payload) {
            state.links.map(el => {
                if (el.createdAt.valueOf() == payload.link.createdAt.valueOf()) {
                    el.point += payload.vote
                    el.updatedAt = new Date().toISOString();
                }
            })
            localStorage.setItem('links', JSON.stringify(state.links))
        },
        setRemoveLink(state, payload) {
            state.links = state.links.filter(el => el.createdAt.valueOf() != payload.createdAt.valueOf())
            localStorage.setItem('links', JSON.stringify(state.links))
        },

    },
    actions: {}
}