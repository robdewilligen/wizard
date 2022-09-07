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
//Imports

//JavaScript
export default {

    props: {

    },
  data(){
    return {

    }
  },

  methods: {
    newGame() {
      return console.log("New Game Started")
    }
  },

  mounted() {

  }

}

</script>

<!-- Css -->
<style>
@import "style.css";
</style>