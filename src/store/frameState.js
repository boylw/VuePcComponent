const state = {
    selectFrameId : 1
}

const mutations = {
    updateSelectFrameId(state, payload) {
        state.selectFrameId = payload;
    }
}

const actions = {
    updateFrameId({commit}, payload) {
        console.log('====================================');
        console.log(payload);
        console.log('====================================');
        commit('updateSelectFrameId', payload);
    }
}


export default {
    state,
    mutations,
    actions
}