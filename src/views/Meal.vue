<template>
  <div class="min-h-screen w-full bg-slate-900">

    <h1>Meal^^</h1>
    <p>{{meal['recipe']['label']}}</p>
    <router-link :to="{name:'home'}">Home</router-link>
  </div>
</template>

<script>
//TODO: import vuex
//use it to pass current meal to meal.vue
//profit
//add more filtering
export default {
  name: "Meal.vue",
  props: {

  },
  data(){
    return {
      meal: history.state,
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>