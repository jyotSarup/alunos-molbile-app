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
                <q-avatar class="avatarGrad" text-color="white">J</q-avatar>
            </q-item-section>

            <q-item-section>
                <span style="font-weight:500">{{
                    houseIssueDetail.title
                }}
                <div class="subtitle">By Lucy Lee</div>
                </span>
                <span>{{ houseIssueDetail.dateCreated }}</span>
            </q-item-section>
        </template>

        <q-card>
            <q-card-section>
                <div class="text-subtitle2">{{ houseIssueDetail.subject }}</div>
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
                        <img :src="img" />
                    </q-avatar>
            </q-card-section>
            <div v-if="houseIssueDetail.solved_at">STATUS: Resolved   
            </div>
            <div v-else>
                <q-toolbar>
                    <div>STATUS: Pending</div>
                    <q-space />
                    <q-btn outline rounded label="Resolve" @click="resolveIssue"/>
                </q-toolbar>
            </div>
          
        </q-card>
    </q-expansion-item>
</template>

<script>
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
           const issueId =  houseIssueDetail.id 
             try {    
                await this.$store.dispatch(
                    MUTATE_SOLVEISSUE,
                    issueId
                );
                
                // this.dialog = true
            } catch (error) {
                console.log(error);
            }
        }
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
.subtitle{
    color: #757575;
    font-size: 12px;
}
</style>
