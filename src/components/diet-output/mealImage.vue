<template>
  <div
      v-if="loading"
      class=" w-5 aspect-square border-slate-500 border-2 border-t-2 border-t-slate-900 rounded-full animate-spin"></div>
  <img
      :src="image"
      alt="image of meal"
      aria-hidden="true"
      class="max-h-52 rounded-xl"
      @load="loading = false">
</template>

<script>
export default {
  name: "mealImage",
  props: {
    image: {
      type: String,
    },
  },
  data() {
    return {
     loading:true,
   }
  }
}
</script>

<style scoped>

</style>