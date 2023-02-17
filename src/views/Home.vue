<template>
  <div class="w-full min-h-screen bg-slate-100 flex flex-col items-center text-center">
    <h1 class="text-slate-700 text-5xl"> Meal Planning Made Easy</h1>
    <dietFormContainer/>
  </div>
</template>

<script>
//todo: add filtering options in the form
//add additional information to the menu items
//style a bit more
//call it a day
import DietFormContainer from "@/components/DietInput/DietFormContainer.vue"

export default {
  name: "Home",
  components: {
    DietFormContainer
  },
}
</script>

<style scoped>

</style>