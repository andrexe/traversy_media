<template>
    <footer>
        <p>
            Copyright &copy; {{ this.getYearFromDate(new Date()) }}
        </p>
        <a href="/about">About</a>
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

a {
    color: #333;
}
</style>