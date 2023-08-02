<template>
    <div>
        <div class="d-flex flex-column align-items-center">
        <form class="w-25 mt-4 text-center">
            <img  :src="logo" alt="Logo" width="72">
            <h1 class="mb-3 fw-normal">Register</h1>
            <Input type="text" :label="'Name'" v-model="user.username" />
            <Input type="email" :label="'Email address'" v-model="user.email"/>
            <Input type="password" :label="'Password'" v-model="user.password"/>
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
            user:{
                username:"", 
                email:"",
                password:"",
            }
        }
    },
    computed:{
        isLoading(){
            return this.$store.state.auth.isLoading;
        }
    },
    methods: {
        async submit() {
            // Update data with example values
            const data = {
                username:this.user.username,
                email: this.user.email,
                password: this.user.password,
            };
            await this.$store.dispatch('register', data).then(res=>{
                this.$router.push({name:'home'});
                console.log(res?.user);
            }).catch(err=>console.log(err))
             // Dispatch the 'register' action with the 'data' object
        },
    },
}
</script>
<style>
    
</style>