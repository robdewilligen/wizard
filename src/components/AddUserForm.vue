<template>
    <form @submit.prevent="onSubmit" name="userInput">
        <div>
            <input type="text" id="new-user-input" ref="new-user" name="new-user"
                   autocomplete="off" v-model.trim.lazy="username" placeholder="Add Player"
            />
            <h5 style="margin-left: 10px">Max players for a game: {{maxPlayers || "error"}}</h5>
        </div>
        <button type="submit">Add Players</button>
    </form>
</template>

<script>
    export default {
        methods: {
            onSubmit() {
                if (this.username === ""){
                    return console.log("No name provided. Please enter name");
                }
                this.$emit('user-added', this.username);
                this.$refs["new-user"].value="";
            },
        },

        data() {
            return{
                username: "",
                maxPlayers: 6,
            };
        },

    };
</script>