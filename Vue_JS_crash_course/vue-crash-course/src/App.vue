<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task tracker" :showAddTask="showAddTask" />
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
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
