<template>
  <div>
    <div class="container">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { Navbar } from "@/components"
import "bootstrap/dist/css/bootstrap.min.css"
export default {
  components: {
    Navbar,
  },
 mounted() {
   this.$store.dispatch('getUser')
 }
}
</script>

<style>
body {
  font-family: monospace;
  font-size: 20px;
}
</style>