<template>
    <div class="Home">
        <h1>Welcome to my Wizard application</h1>

        <router-link @click="newGame" to="/newGame" class="button"
        > Start new Game </router-link>

        <router-view></router-view>
    </div>
</template>

<script>
//JavaScript
export default {
methods: {
        newGame() {
            return console.log("New Game Started")
        }
    },
}

</script>
