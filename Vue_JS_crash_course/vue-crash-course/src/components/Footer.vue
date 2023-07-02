<template>
    <footer>
        <p>
            Copyright &copy; {{ this.getYearFromDate(new Date()) }}
        </p>
        <nav class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        getYearFromDate(date) {
            return new Date(date).getFullYear();
        },
    },
}
</script>

<style scoped>
footer {
    margin-top: 2rem;
    text-align: center;
}

nav {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
}

a {
    color: #333;
}
</style>