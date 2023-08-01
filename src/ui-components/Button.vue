<template>
    <button @click="$event.preventDefault()" class="btn mt-4 btn-primary w-100 py-2"><slot></slot></button>
</template>
<script>
export default {
    name:"Button"
}
</script>
<style>
    
</style>