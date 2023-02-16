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
    <input
        v-model="calories"
        class="bg-slate-50 rounded-lg w-20"
        type="text"
        name="Calorie Amount"
        inputmode="numeric"
        placeholder="Calories..."
        title="please only but numbers"
        >
    <button
        class="bg-slate-300 mx-auto px-3 py-1 rounded-full transition-all hover:bg-blue-500 active:scale-110"
        type="submit">Find A Meal</button>
  </form>
</template>

<script>

export default {
  name: "DietForm",
  data(){
    return {
      mealName:'',
      calories: 0,
    }
  },
  methods: {
    //bind input to a variable to be emitted then port all methods to the container
    //itl make it easier to add loading screens before we start to add filtering and shizz
    submit(event) {
      event.preventDefault()
      let cal = this.calories;
      if(this.calories === 0) cal = 999999;
      this.$emit('onMealSubmit', {
        name:this.mealName,
        calories:cal,
      });
    },
  },
  watch: {
    calories(calorieAmount){

      if (!/^\d+$/.test(calorieAmount)) {
        this.calories = this.calories.substring(0,this.calories.length-1);
        console.log(this.calories.substring(0 , this.calories.length-1))
      }
    }
  }
}
</script>

<style scoped>

</style>