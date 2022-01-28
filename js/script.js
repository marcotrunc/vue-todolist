console.log('Vue ok', Vue);
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        newTask: '',
        isDone: 'false',
        tasksToDO: [
            { text: 'tagliare i capelli', done: false, },
            { text: 'tagliare il prato', done: false, },
            { text: 'fare la spesa', done: true, },
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
        markAsDoneOrNot(index) {
            this.tasksToDO.map((item, i) => {
                if (index === i) this.tasksToDO[i].done = !this.tasksToDO[i].done;
            });
        }

    },
});