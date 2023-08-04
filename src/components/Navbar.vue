<template>
    <div>
        <div class="d-flex flex-column flex-md-row align-items-center border-bottom">

            <a class="d-flex align-items-center text-dark text-decoration-none">
                <RouterLink class="nav-link gap-3" :to="name = '/'">
                    <img :src="logo" width="70" alt="" srcset="">
                    <span class="fs-4">{{ '</AnonymDev>' }}</span>
                </RouterLink>
            </a>
            <!-- Logout template  -->
            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto gap-3"  v-if="isLoggedIn">
                <RouterLink @click="logOut" class="me-3  btn  btn-outline-danger" :to="{ name: 'home'}">Logout</RouterLink>
                <div class="username">{{ currentUser.username }}</div>
            </nav> 
            <!-- login template -->
            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto gap-3" v-if="isHiden">
                <RouterLink class="nav-link me-3" :to="name = 'Login'">Login</RouterLink>
                <RouterLink class="nav-link me-3" :to="name = 'Register'">Register</RouterLink>
            </nav>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import logo from '../assets/logo/my-logo.png';
import { gettersTypes } from "@/modules/types"
export default {
    data() {
        return {
            logo,
        }
    },
    computed: {
        currentUser(){
            return this.$store.getters[gettersTypes.currentUser]
        },
        isHiden(){
            return this.$store.getters[gettersTypes.isHiden];
        },
        isLoggedIn(){
            return this.$store.getters[gettersTypes.isLoggedIn];
        }
    },
    methods: {
        logOut(){
            this.$store.dispatch('logOut');
        }
    }
}
</script>
<style></style>