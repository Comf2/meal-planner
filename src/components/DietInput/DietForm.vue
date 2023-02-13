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
  },
}
</script>

<style scoped>

</style>