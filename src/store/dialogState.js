const state = {
    showDialog : false
}

const mutations = {
    updateDialog(state, payload) {
        state.showDialog = payload;
    }
}

const actions = {
    updateDialog({commit}, payload) {
        commit('updateDialog', payload);
    }
}


export default {
    state,
    mutations,
    actions
}