<template>
    <div class="task" :class="{ 'reminder' : task.reminder }">
        <h3>{{ task.text }} 
        <i class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object,
    }
}
</script>

<style scoped>
.fa-times {
    color: red;
}
.task {
    background: whitesmoke;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.2rem;
}

.task.reminder {
    border-left: 5px solid green;
}

.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>