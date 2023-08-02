<template>
    <div class="form-floating mt-4">
        <input  :type="type" :value="modelValue" @input="updateInputValue" class="form-control" id="floatingInput" :placeholder="label">
        <label style="" for="floatingInput">{{label}}</label>
    </div>
</template>
<script>
export default {
    name:"Input",
    props:{
        label:String,
        type:String,
        modelValue:[String,Number],
        // forid:"floating"+this.label, 
    },
    methods:{
        updateInputValue(e){
            this?.$emit("update:modelValue",e.target.value)
        }
    }
}
</script>
<style scoped>
    label::after{
        position: static!important;
    }
</style>