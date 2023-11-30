<template>
  <div class="container">
    <!-- 3. then use the component in your template -->
    <Header title="Task Tracker" />
  </div>
</template>

<script>
// 1. first import the component
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    // 2. then register the component in the App export
    Header
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        "id": 1,
        "text": "Meeting",
        "day": "July 1st at 2:30pm",
        "reminder": false
      },
      {
        "id": 2,
        "text": "Dentist visit",
        "day": "July 4th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Shopping",
        "day": "July 5th at 4:30pm",
        "reminder": true
      }
    ]
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,700&display=swap');

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
