<template>
  <div class="flex gap-3 flex-wrap justify-center md:justify-start">
    <mealImage
        :image="meal['recipe']['image']"
        />
    <p class="text-3xl md:text-xl sm:text-lg">{{meal['recipe']['label']}}</p>
    <p class="text-3xl md:text-xl sm:text-lg">{{Math.floor(meal['recipe']['calories'])}}</p>
      <p
          @click="routeMeal"
          class="text-slate-700 underline pointer hover:text-slate-500 transition-all">
          See More Info...
      </p>
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
      required:true,
    },
  },
  methods: {
    routeMeal() {
      this.$store.commit('addMeal', this.meal);
      this.$router.push( {
        name:'meal',
      })
    }
  },
}
</script>

<style scoped>

</style>