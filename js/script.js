console.log('Vue ok', Vue);
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        newTask: '',
        tasksToDO: [
            { text: 'tagliare i capelli', done: false, },
            { text: 'tagliare il prato', done: false, },
            { text: 'fare la spesa', done: false, },
        ],
    },
    methods: {
        cancelObject(index) {
            this.tasksToDO = this.tasksToDO.filter((item, i) => index !== i);
        },
        addNewTask() {
            if (this.newTask) {
                const newTask = this.newTask.trim()
                const newObject = { text: newTask, done: false };
                this.tasksToDO = [...this.tasksToDO, newObject];
            }
            this.newTask = '';
        },
    },
});