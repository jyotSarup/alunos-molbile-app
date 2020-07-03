<template>
    <div v-if="houseIssueItems" class="q-pa-md expansionListContainer" style="width:90%">
                  
                <HouseIssueItem
                v-for="(houseIssueDetail, index) in houseIssueItems"
                    :key="index"
                    :houseIssueDetail="houseIssueDetail"
                ></HouseIssueItem>
            
    </div>
</template>

<script>
import HouseIssueItem from '../components/HouseIssueItem'
export default {
    components: {
        HouseIssueItem
    },
    data() {},
    created() {
        this.$emit("updateTitle", "HouseIssues");
    },
    computed: {
        houseIssueItems() {
            return [
                {
                    title: "House Issue 1",
                    dateCreated: "2days ago",
                    subject: "subject 1",
                    description: "description 1",
                    imgUrl: ["https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
                    "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"]
                        
                },
                {
                    title: "House Issue 2",
                    dateCreated: "2days ago",
                    subject: "subject 2",
                    description: "description 2",
                    imgUrl: ["https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
                    "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"]
                        
                },
                {
                    title: "House Issue 3",
                    dateCreated: "2days ago",
                    subject: "subject 3",
                    description: "description 3",
                    imgUrl:["https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
                    "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"]
                },
                {
                    title: "House Issue 4",
                    dateCreated: "2days ago",
                    subject: "subject 4",
                    description: "description 4",
                    imgUrl:["https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
                    "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"]
                }
            ];
        }
    }
};
</script>

<style>
    .expansionList {
        width:100%;
        margin:auto;
        background:none;
        box-shadow: none;
    }
   .expansionListContainer {
    margin: auto;
    width: 95%;
    padding: 0;
   }
</style>
