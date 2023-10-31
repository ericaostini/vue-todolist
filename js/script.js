const {createApp} = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    text: "Fare i compiti",
                    done: true
                },
                {
                    id: 2,
                    text: "Fare la spesa",
                    done: false
                },
                {
                    id: 3,
                    text: "Ritirare la posta",
                    done: false
                },
                {
                    id: 4,
                    text: "Svuotare la lavatrice",
                    done: true
                }
            ]
            
        }
    },
    methods: {
        
    },
}).mount("#app");