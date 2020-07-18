<!--template>
    <q-expansion-item
        expand-icon-toggle
        :label="houseIssueDetail.title"
        :caption="houseIssueDetail.dateCreated"
        
      >
        <q-item-section avatar>
            <q-avatar color="primary" text-color="white">J</q-avatar>
          </q-item-section>
        <q-card>
          
          <q-card-section>
            <div class="text-subtitle2">{{houseIssueDetail.subject}}</div>
            {{houseIssueDetail.description}}
          </q-card-section>
          <q-card-section v-if="houseIssueDetail.imgUrl">
            <div >
               <img  v-for= "(img, index) in houseIssueDetail.imgUrl"  :key="index" style="width: 20%; margin:2px" :src="img"/>
            </div>

          </q-card-section>
        </q-card>
      </q-expansion-item>
</template-->

<template>
    <q-expansion-item>
        <template v-slot:header>
            <q-item-section avatar>
                <q-avatar class="avatarGreenGrad" text-color="white" v-if="houseIssueDetail.solved_at">R</q-avatar>
                <q-avatar class="avatarGrad" text-color="white" v-else>P</q-avatar>
            </q-item-section>

            <q-item-section>
                <span style="font-weight:500" align="left">{{
                    houseIssueDetail.title
                }}
                <div class="subtitleIssue">By {{userInfo.user.first_name}} {{userInfo.user.last_name}}</div>
                </span>
                <span>{{ houseIssueDetail.dateCreated }}</span>
            </q-item-section>
        </template>

        <q-card>
            <q-card-section align="left">
                <div class="text-subtitle2" align="left">{{ houseIssueDetail.subject }}</div>
                {{ houseIssueDetail.description }}
                
            </q-card-section>
            <!-- <q-card-section v-if="houseIssueDetail.imgUrl">
                <div>
                    <img
                        v-for="(img, index) in houseIssueDetail.imgUrl"
                        :key="index"
                        style="width: 20%; margin:2px"
                        :src="img"
                    />
                </div>
            </q-card-section> -->
            <q-card-section>
                 <q-avatar
                        square
                        size="70px"
                        class="image q-ma-sm"
                        v-for="(img, index) in imageUrl"
                        :key="index"
                    >
                        <img class="imgborder" :src="img" />
                    </q-avatar>
            </q-card-section>
            <div v-if="houseIssueDetail.solved_at" align="left">STATUS: <span style="color:#757575">Resolved </span>  
            </div>
            <div v-else>
                <q-toolbar>
                    <div align="left">STATUS:<span style="color:#757575"> Pending</span></div>
                    <q-space />
                    <q-btn rounded label="Resolved" style="background-color: #f32887; color: white" @click="resolveIssue"/>
                </q-toolbar>
            </div>
          
        </q-card>
    </q-expansion-item>
</template>

<script>
import { MUTATE_SOLVEISSUE,GET_ISSUES } from '../constants';
import {mapActions, mapState} from 'vuex';
export default {
    name: 'HouseIssueItem',
    data() {
         return {
        imageUrl : [
            "../statics/img/profile.jpg",
            "../statics/img/profile.jpg",
            "../statics/img/profile.jpg"
        ]}
    },
    props: {
        houseIssueDetail: {
            type: Object,
            required: true
        }
    },
    methods :{
        async resolveIssue() {
           const householdId = this.household.household.id
        //    console.log(householdId)
           const issueId =  this.houseIssueDetail.id 
             try {    
                await this.$store.dispatch(
                    MUTATE_SOLVEISSUE,
                    issueId
                );
                await this.$store.dispatch(GET_ISSUES, this.household.household.id, 10, 1);
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        ...mapState({
            household: state => state.household,
            userInfo: state => state.auth
        })
    }
};
</script>

<style>
.q-expansion-item {
    background: white;
    color: black;
    margin: 1em auto;
    padding: 1em;
    border-radius: 20px;
    box-shadow: 3px 3px 7px grey;
    
}
.avatarGrad {
    background-image: linear-gradient(180deg, #01c0fb 30%, #01e8f8 90%);
}
.avatarGreenGrad {
    background-image: linear-gradient(180deg, #01fb54 30%, #01fb546d 90%);
}
.subtitleIssue{
    color: #757575;
    font-size: 12px;
}
.imgborder{
    border: 1px solid #757575 !important;
}
</style>
