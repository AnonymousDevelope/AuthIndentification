<template>
    <div class="d-flex flex-column align-items-center">
        <form class="w-25 mt-4 text-center">
            <img  :src="logo" alt="Logo" width="72">
            <h1 class="mb-3 fw-normal">Login</h1>
            <Input type="email" :label="'Email writes'" />
            <Input type="password" :label="'Password'" />
            <Button>Login</Button>
        </form>
    </div>
</template>
<script>
import logo from "@/assets/logo/my-logo.png"
export default {
    name: 'Login',
    data(){
        return{
            logo,
        }
    }
}
</script>
<style></style>