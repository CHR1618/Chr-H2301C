const Footerlist = {
    state: {
        checkAll: false,
        list:[]
    },
    actions: {

    },
    mutations: {
        checkone(state) {
            // console.log(list);
            state.checkAll = state.list.every((i) => {
                return i.status == true
            })
        }
    }
}

export default Footerlist