<template>
  <div class="container">
    <Header title="Task tracker" />
    <Tasks @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue"

export default {
  name: "App",
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    deleteTask(id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Meeting',
        day: 'July 1st at 2:30pm',
        reminder: false,
      },
      {
        id: 2,
        text: 'Dentist visit',
        day: 'July 4th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Shopping',
        day: 'July 5th at 4:30pm',
        reminder: true,
      },
    ]
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 150ms;
}

body {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 30rem;
  margin: 2rem auto;
  min-height: 20rem;
  border: 1px solid steelblue;
  padding: 2rem;
  border-radius: 0.2rem;
}

.btn {
  display: inline-block;
  background-color: darkslategray;
  color: beige;
  border: none;
  padding: 0.8rem 1.6rem;
  margin: 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
}

.btn:hover {
  background-color: cadetblue;
}
</style>
