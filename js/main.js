const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: {
                text: "",
                done: false
            },
            todoList: [
                { text: "fare la spesa", done: false },
                { text: "pagare le tasse!", done: true },
                { text: "cucinare il pranzo", done: false },
            ]
        }
    },
    methods: {
        addTask() {
            let newTaskToPush = {...this.newTask};
            this.todoList.unshift( newTaskToPush );

            this.newTask.text = "";
        },
        changeTask(posizione) {
            this.todoList[posizione].done = !this.todoList[posizione].done;
        },
        removeTask(posizione) {
            this.todoList.splice(posizione, 1);
        },
        // getClass(i) {
        //     return ( this.todoList[i].done ) ? "done" : "notDone";
        // }
    }
}).mount('#app')
