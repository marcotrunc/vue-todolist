console.log('Vue ok', Vue);
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        tasksToDO: [
            { text: 'tagliare i capelli', done: true, },
            { text: 'tagliare il prato', done: true, },
            { text: 'fare la spesa', done: true, }
        ],
    },
    methods: {
        cancelObject(index) {
            this.tasksToDO = this.tasksToDO.filter((item, i) => index !== i);
        },
    },
});