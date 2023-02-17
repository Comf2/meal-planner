<template>
  <div class="flex gap-3 flex-wrap justify-center md:justify-start">
    <mealImage
        :image="meal['recipe']['image']"
        />
    <p class="text-3xl md:text-xl sm:text-lg">{{meal['recipe']['label']}}</p>
    <p class="text-3xl md:text-xl sm:text-lg">{{Math.floor(meal['recipe']['calories'])}}</p>
    <router-link :to="{name:'meal'}">See More Info...</router-link>
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