<template>
    <header>
        <router-link to="/">Home</router-link>  |
        <router-link @click="newGame" to="/newGame">New Game</router-link>
    </header>
    <br>
    <div>
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

<!-- Css -->
<style>
@import "style.css";
</style>