<template>
    <div class="container mt-2 d-flex justify-content-center align-items-center flex-column align-items-center gap-3">
        <div class="w-75">
            {{ data }}
        </div>
    </div>
</template>

<script>
// Import the Button component (assuming it's a custom component)
import { mapState } from "vuex"
export default {
    name: 'Home',
    computed:{
    ...mapState({
      data: state => state.articles.data,
      isLoading : state => state.articles.isLoading,
      errors : state => state.articles.errors,
    })
  },
  mounted(){
   this.$store.dispatch('articles')
  }
};
</script>

<style>
/* Your styles go here */
</style>
