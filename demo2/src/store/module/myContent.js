const contentlist = {
    state: {
        list: [{
            id: 0,
            status: false,
            title: '抽烟'
        },
        {
            id: 1,
            status: false,
            title: '喝酒'
        },
        {
            id: 2,
            title: '烫头'
        }]
    },
    actions: {

    },
    mutations: {
        adds(state, text) {
            if (text != '') {
                state.list.push({
                    id: new Date().getTime(),
                    status: false,
                    title: text
                })
            } else {
                alert('空')
            }

        },
        del(state, text) {
            var index = state.list.findIndex((item) => {
                return item.id == text
            })
            state.list.splice(index, 1)
        },
        allcheck(state, checkAll) {
            state.list.forEach(i => {
                i.status = checkAll
                console.log(checkAll);
            });
        },
        clear(state) {
            state.list = state.list.filter(i => {
                return i.status != true
            })
        }
    }
}

export default contentlist