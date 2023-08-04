<template>
    <div>
      <div class="d-flex flex-column align-items-center">
        <form class="w-25 mt-4 text-center">
          <img :src="logo" alt="Logo" width="72">
          <h1 class="mb-3 fw-normal">Register</h1>
          <Validation v-if="validation"  :validation="validation"/>
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
  import { Validation } from "../components";
  
  export default {
    name: 'Register',
    components: {
      Validation,  
    },
    data() {
      return {
        logo,
        user: {
          username: "", 
          email: "",
          password: "",
        }
      }
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
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
          };
  
          await this.$store.dispatch('register', data);
          this.$router.push({ name: 'home' });
        } catch (error) {
          // Handle the error
          console.error("Error during registration:", error);
        }
      },
    },
  }
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  