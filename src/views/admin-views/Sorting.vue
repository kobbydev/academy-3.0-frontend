<template lang="">
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="key of columns">{{key}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "entry in filteredFilms">
                    <td v-for = "key of columns">
                        {{entry[key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            column: ['title', 'rating'],
            ratingInfo: [
                {title: Malcolm, rating: 94},
                {title: Kwabena, rating: 93},
                {title: Edem, rating: 90},
            ],
            filterText: ''
        }
    },
    methods: {
        sortLowest(){
            this.ratingInfo.sort((a,b)=>a.rating > b.rating? 1: -1
            );
        },
            sortHighest(){
            this.ratingInfo.sort((a,b)=>a.rating < b.rating? 1: -1
            );
        }
    },
    computed:{
        filteredFilms(){
            let film = new RegExp(this.filterText, 'i')
            return this.ratingInfo.filter(el=>el.title.match(filter))
        }
    }
 }
</script>
<style lang="">
    
</style>