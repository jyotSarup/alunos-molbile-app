<template>
    <q-expansion-item
        expand-icon-toggle
        expand-separator
        icon="perm_identity"
        :label="houseIssueDetail.title"
        :caption="houseIssueDetail.dateCreated"

      >
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
</template>

<script>
export default {
    name:"HouseIssueItem",
    data(){},
    props: {
        houseIssueDetail: {
            type: Object,
            required: true,
        }
        }
}
</script>

<style>

.q-expansion-item {
    background: white;
    color: black;
    margin:1em auto;
    padding: 1em;
    border-radius: 20px;
    box-shadow: 3px 3px 7px grey;
}
    
</style>