console.log('Vue ok', Vue);
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        thingsToDO: [
            { text: 'tagliare i capelli', done: true, },
            { text: 'tagliare i capelli', done: true, },
            { text: 'tagliare i capelli', done: true, }
        ],
    },
});