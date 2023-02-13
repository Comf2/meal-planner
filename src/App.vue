<template>
  <div class="w-full min-h-screen bg-slate-100 flex flex-col items-center text-center">
    <h1 class="text-slate-700 text-5xl"> Meal Planning Made Easy</h1>
    <dietFormContainer/>
  </div>
</template>
<script>
  import {defineComponent} from "vue";
  import DietFormContainer from "./components/DietInput/DietFormContainer.vue";

  export default defineComponent({
    components: {DietFormContainer}
  })
</script>
