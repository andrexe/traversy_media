<template>
    <form @submit="onSubmit" action="" class="add-form">
        <div class="form-control">
            <label for="text">Task</label>
            <input v-model="text" type="text" name="text" id="text" placeholder="Add task">
        </div>
        <div class="form-control">
            <label for="day">Day & time</label>
            <input v-model="day" type="text" name="day" id="day" placeholder="Add day & time">
        </div>
        <div class="form-control form-control-check">
            <label for="reminder">Set reminder</label>
            <input v-model="reminder" type="checkbox" name="reminder" id="reminder">
        </div>
        <input type="submit" value="Save task" class="btn btn-block">
    </form>
</template>

<script>
import { toHandlers } from 'vue'

export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false,
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if (!this.text) {
                alert('Please add a task')
                return
            }

            const newTask = {
                id: Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

            this.$emit('add-task', newTask)

            this.text = ''
            this.day = ''
            this.reminder = false
        }
    }
}
</script>

<style scoped>
.add-form {
    margin-bottom: 2rem;
}

.form-control {
    margin: 0.5rem 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    font-size: 0.8rem;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px;
}
</style>