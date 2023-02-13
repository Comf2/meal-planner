<template>
  <div class="flex gap-3 flex-wrap justify-center md:justify-start">
    <mealImage
        :image="meal['recipe']['image']"
        />
    <p class="text-3xl md:text-xl sm:text-lg">{{meal['recipe']['label']}}</p>
  </div>

</template>

<script>
import mealImage from "./mealImage.vue";
export default {
  name: "meal-item",
  components: {
    mealImage,
  },
  props: {
    meal: {
      type: Object,
    },
  },
}
</script>

<style scoped>

</style>