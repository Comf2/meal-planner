<template>
  <div class=" w-3/4 min-h-max bg-slate-200 border-slate-300 border-2 rounded-xl my-auto mx-5 p-3">
    <DietForm
    @onMealSubmit="handleMealSubmit"/>

    <div
        class="flex justify-center items-center"
        v-if="loading">
      <div class=" w-5 aspect-square border-slate-500 border-2 border-t-2 border-t-slate-900 rounded-full animate-spin"></div>
    </div>
    <div
        v-else
        class="bg-slate-50 h-fit max-h-[60vh] w-full overflow-y-scroll mt-3 rounded-xl p-3">
      <div
          class="mb-3 "
          v-for="meal in this.mealResults">
        <mealItem :meal="meal"/>
      </div>
    </div>
  </div>

</template>

<script>
import DietForm from "./DietForm.vue";
import axios from "axios";
import mealItem from "../diet-output/mealItem.vue";

export default {
  name: "DietFormContainer",
  components: {
    DietForm,
    mealItem,
  },
  data(){
    return {
      mealResults: [],
      loading: false,
    }
  },
  methods: {
    handleMealSubmit(meal) {
      this.mealResults = [];
      this.loading = true;
      axios.get('https://api.edamam.com/search', {
        params: {
          q:meal.name,
          app_id:'9f11df44',
          app_key: '2dfa2472b9cde9a205f0bc0e15f72289'
        }
      })
          .then(res => {
            this.loading = false;

            this.setMeal(res.data["hits"]);
          })
    },
    setMeal(meals){
      meals.forEach((meal) => {
        console.log(meal)
        this.mealResults.push(meal)
        })
      }
    }
}
</script>

<style scoped>

</style>