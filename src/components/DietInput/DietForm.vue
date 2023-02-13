<template>
  <form
      class="mt-3 flex flex-col gap-3 px-3 items-center"
      @submit="submit">
    <input
        v-model="mealName"
        class=" max-w-xl bg-slate-300 text-slate-800 border-2 rounded-lg border-slate-300"
        type="search"
        name="search-food"
        placeholder="Meal Name">
    <button
        class="bg-slate-300 mx-auto px-3 py-1 rounded-full transition-all hover:bg-blue-500 active:scale-110"
        type="submit">Find A Meal</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: "DietForm",
  data(){
    return {
      mealName:'',
    }
  },
  methods: {
    //bind input to a variable to be emitted then port all methods to the container
    //itl make it easier to add loading screens before we start to add filtering and shizz
    submit(event) {
      event.preventDefault()
      this.$emit('onMealSubmit', {
        name:this.mealName,
      });
    },
    getMeal(event) {
      event.preventDefault();
      axios.get('https://api.edamam.com/search', {
        params: {
          q:'chicken',
          app_id:'9f11df44',
          app_key: '2dfa2472b9cde9a205f0bc0e15f72289'
        }
      })
          .then(res => {
            this.setMeal(res.data["hits"]);
          })
      // this.$emit('onGetMeal', {
      //   message:'woah a meal',
      // })
    },
    setMeal(meals){
      meals.forEach((meal) => {
        this.$emit('onGetMeal', {
          message:meal['recipe']['label'],
        })
      })
    }
  },
}
</script>

<style scoped>

</style>