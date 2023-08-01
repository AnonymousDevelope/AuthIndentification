<template>
    <div>
        <div class="d-flex flex-column align-items-center">
        <form class="w-25 mt-4 text-center">
            <img  :src="logo" alt="Logo" width="72">
            <h1 class="mb-3 fw-normal">Register</h1>
           <Input type="text" :label="'Name'" />
           <Input type="email" :label="'Email address'" />
           <Input type="password" :label="'Password'" />
            <Button @click="submit" :disabled="isLoading">Register</Button>
        </form>
    </div>
    </div>
</template>
<script>
import logo from "@/assets/logo/my-logo.png"
export default {
    name: 'Register',
    data(){
        return{
            logo,
            ismi:"Marufjon",
        }
    },
    computed:{
        isLoading(){
            return this.$store.state.auth.isLoading;
        }
    },
    methods: {
        submit() {
            // Update data with example values
            const data = {
                username: this?.$data?.ismi,
                email: this?.$data?.ismi+"@gmail.com",
                password: "example_password",
            };
            this.$store.dispatch('register', data); // Dispatch the 'register' action with the 'data' object
        },
    },
}
</script>
<style>
    
</style>