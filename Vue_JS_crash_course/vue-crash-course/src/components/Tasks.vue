<template>
    <div :key="task.id" v-for="task in tasks">
        <!-- when this catches the emit from the task below it also emits it upwards to the app level where the data is -->
        <!-- because we are passing it up the way we are, we need to list the emits below, in the export-->
        <Task @delete-task="$emit('delete-task', task.id)" :task="task" />
    </div>
</template>

<script>
import Task from './Task.vue'

export default {
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    components: {
        Task,
    },
    // because we are passing it up the way we are, we need to list the emits in here
    emits: ['delete-task'],
}
</script>