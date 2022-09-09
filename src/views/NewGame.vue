<template>
<!--    Title   -->
        <div class="newGame">
            <h1>New Game</h1>
            <p>
                add users for new game
            </p>
        </div>

<!--    Input use amount and names  -->
        <div>
                <div>
                    <add-user-form @user-added="addUser"></add-user-form>
                    <h3>Users available:</h3>
                    <h4 v-for="user of users.slice(0, 6)">
                        {{ user.name }}
                    </h4>
                    <h4 v-for="user of users.slice(6)">
                        Player: "{{ user.name }}" is not able to play. To many players.
                    </h4>
                </div>
            <br>
        </div>


<!--  Table    -->
<!--    Players  -->
    <table>
        <tr>
            <th v-for="(i, id) in users.slice(0, 6)" > {{id+1}} | {{ i.name }} </th>
        </tr>
    </table>


<!--    Scores   -->
<!--    Generate Score Cells    -->
    <div class="flex table" >
        <div class="table-cell" v-for="(round, i) in rounds.slice(0, 6)" v-bind:id="i">

<!--        Input Scores and Predictions-->
            <form @submit.prevent="submitScore(i)">
                <input class="table-input" type="number" v-bind:id="i+1" v-model="rounds[i].predictedScore" placeholder="Prediction" required>
                <input class="table-input" type="number" v-bind:id="i+1" v-model="rounds[i].achievedScore" placeholder="Rounds" required>
                <input @click="printToConsole(i)" type="submit" class="table-btn">
            </form>

<!--        Display Points and Total Score-->
            <div id="points" class="table-value"> Points : {{rounds[i].points}} </div>
            <div id="score" class="table-value"> Score : {{rounds[i].score}}</div>
        </div>
    </div>



</template>


<script>
//Imports
import AddUserForm from "../components/AddUserForm";

//JavaScript
export default {
    components: {
        AddUserForm,
    },

    data() {
        return {
            //Player and Score arrays
            users: [],
            rounds: [],
            userId: 1,

            //Scores Values
            predictedScore: null,
            achievedScore: null,
            points: null,
            score: null,
        }
    },

    methods: {
        //Add users to a new game
        addUser(username) {
            console.log(this.userId)
            this.users.push({id:this.userId, name: username})
            this.rounds.push({id: this.userId++, predictedScore: null, achievedScore: null, points: 0, score: 0});

            console.log('Added User: ', username)
            console.log('Players: ', this.users)
            console.log(this.rounds)
        },

        //Log Score Value's to the console
        printToConsole(round) {
            //Check if Prediction and Rounds fields are filled
            if (this.rounds[round].predictedScore !== null && this.rounds[round].achievedScore !== null) {

                //Check if player's Prediction was correct
                if (this.rounds[round].predictedScore === this.rounds[round].achievedScore){

                    //Calculate points to be rewarded and log both values
                    return console.log('Points: ', this.rounds[round].points = (this.rounds[round].predictedScore + 2) * 10), console.log("-----END OF LOG-----");
                } else {

                    //Calculate amount of points to reduce from score and log values
                    return console.log(this.rounds[round].points = Math.abs((this.rounds[round].predictedScore - this.rounds[round].achievedScore) * 10) * -1), console.log("-----END OF LOG-----");
                }
            }

        },

        //Submit Score Value's
        submitScore(round) {
            console.log(this.rounds)

            //Check if Prediction and Rounds fields are filled
            if (this.rounds[round].predictedScore !== null && this.rounds[round].achievedScore !== null) {

                //Check if player's prediction was correct
                if (this.rounds[round].predictedScore === this.rounds[round].achievedScore){
                    //Calculate amount of points to be rewarded
                    this.rounds[round].points = (this.rounds[round].predictedScore + 2) * 10

                    //Add amount of points to current score
                    this.rounds[round].score = this.rounds[round].score + this.rounds[round].points

                    //return calculated points and current score of player
                    return this.rounds[round].points, this.rounds[round].score , console.log("-----END OF ROUND-----");
                } else {
                    //Calculate amount to reduce from current score
                    this.rounds[round].points = Math.abs((this.rounds[round].predictedScore - this.rounds[round].achievedScore) * 10) * -1

                    //Reduce point amount from current score
                    this.rounds[round].score = this.rounds[round].score + this.rounds[round].points

                    //return calculated points and current score of player
                    return this.rounds[round].points, this.rounds[round].score , console.log("-----END OF ROUND-----");
                }
            }
        }

    //    end of methods
    },

}

</script>