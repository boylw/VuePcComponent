const state = {
    showDialog : {}
}

const mutations = {
    pushState(state, {name,payload}) {
        console.log('====================================');
        console.log('我新加了一个');
        console.log('====================================');
        state.showDialog[name] = payload;
        console.log(state.showDialog[name]);
    },
    updateDialog(state, {name,payload}) {
        console.log('====================================');
        console.log(name,payload);
        console.log('====================================');
        console.log(state.showDialog[name]);
        console.log('====================================');
        console.log('====================================');
        state.showDialog[name] = payload;
    }
}

const actions = {
    updateDialog({commit}, dialogInfo) {
        console.log('====================================');
        console.log(dialogInfo);
        console.log('====================================');
        commit('updateDialog', dialogInfo);
    }
}

const getters = {
    showDialog (item) {
        console.log('====================================');
        console.log('改变了');
        console.log('====================================');
        return item
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}