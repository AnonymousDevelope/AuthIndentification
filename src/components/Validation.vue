<template>
    <div class="container">
      <ul class="d-flex flex-column list-group">
        <li v-for="errorMessage in errorMessages" :key="errorMessage" class="list-group-item list-group-item-danger">{{ errorMessage }}</li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    props: {
      validation: {
        type: Object,
        required: true,
      },
    },
    computed: {
      errorMessages() {
        return Object.keys(this.validation).map((name) => {
          const error = this.validation[name].join(',');
          return `${name} : ${error}`;
        });
      },
    },
  }
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  