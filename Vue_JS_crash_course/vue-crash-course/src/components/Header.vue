<template>
    <header>
        <h1>{{ title }}</h1>
        <Button v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask? 'Close' : 'Add Task'" :color="showAddTask? 'red' : 'green'" />
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'Hello world',
        },
        showAddTask: Boolean,
    },
    components: {
        Button,
    },
    computed: {
        homePage() {
            return this.$route.path === '/'
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}
</style>