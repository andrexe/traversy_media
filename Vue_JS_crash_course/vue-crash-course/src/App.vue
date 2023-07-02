<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task tracker" :showAddTask="showAddTask" />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async addTask(task) {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      // we look through tasks and use find to find the first task with an id that matches the one we provided above, then use the text in that task to display the name of the task in the confirmation
      if (confirm(`Are you sure you want to delete ${this.tasks.find(task => task.id === id).text}?`)) {
        const res = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE'
        })

        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting tasks')

      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)

      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task)
    },
    async fetchTasks() {
      const res = await fetch('api/tasks')

      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks()
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

.btn-block {
  display: block;
  width: 100%;
}

.btn:hover {
  background-color: cadetblue;
}
</style>
