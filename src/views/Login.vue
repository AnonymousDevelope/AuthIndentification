<template>
    <div class="d-flex flex-column align-items-center">
        <form class="w-25 mt-4 text-center">
            <img :src="logo" alt="Logo" width="72">
            <h1 class="mb-3 fw-normal">Login</h1>
            <Validation v-if="validation" :validation="validation" />
            <Input type="email" :label="'Email writes'" v-model="user.email"/>
            <Input type="password" :label="'Password'" v-model="user.password"/>
            <Button @click="submit" :disabled="isLoading">Login</Button>
        </form>
    </div>
</template>
<script>
import logo from "@/assets/logo/my-logo.png"
import { Validation } from "../components";
export default {
    name: 'Login',
    data() {
        return {
            logo,
            user: {
                email: "",
                password: "",
            }
        }
    },
    components: {
        Validation,
    },
    computed: {
        isLoading() {
            return this.$store.state.auth.isLoading;
        },
        validation() {
            return this.$store.state.auth.errors;
        }
    },
    methods: {
        async submit() {
            try {
                const data = {
                    email: this.user.email,
                    password: this.user.password,
                };

                await this.$store.dispatch('login', data);
                this.$router.push({ name: 'home' });
            } catch (error) {
                // Handle the error
                console.error("Error during loggin:", error);
            }
        },
    },
}
</script>
<style></style>