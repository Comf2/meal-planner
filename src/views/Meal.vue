<template>
  <div class="min-h-screen w-full bg-slate-200">

    <h1
        @click="logMeal"
        class="text-3xl">Meal^^</h1>
    <h2 class="text-5xl"> {{this.meal['recipe']['label']}}</h2>
    <router-link :to="{name:'home'}">Home</router-link>
  </div>
</template>

<script>
//profit
//add more filtering
export default {
  name: "Meal.vue",
  props: {

  },
  data() {
    return {
      meal: this.$store.state.meal,
    }
  },
  methods: {
    logMeal() {
      console.log(this.meal);
    }
  },
}
</script>

<style scoped>

</style>