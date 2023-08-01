<template>
    <div class="form-floating mt-4">
        <input  :type="type" class="form-control" id="floatingInput" :placeholder="label">
        <label style="" for="floatingInput">{{label}}</label>
    </div>
</template>
<script>
export default {
    name:"Input",
    props:{
        label:String,
        type:String,
        // forid:"floating"+this.label, 
    }
}
</script>
<style scoped>
    label::after{
        position: static!important;
    }
</style>