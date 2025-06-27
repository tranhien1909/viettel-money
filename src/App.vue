<template>
  <div id="app" class="min-h-screen bg-gray-100 font-sans">
    <router-view />
  </div>

</template>

<script setup></script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
}
#app {
  max-width: 800px;
  margin: 0 auto;
  background-color: #f4f4f4;
  display: block;
  padding: 0;
}

input,
button {
  border: none;
  outline: none;
}

router-link, router-link a, a.router-link-active {
  text-decoration: none;
}

.btn-close-modal {
  background-color: white;
  color: #f0f0f0;
  font-size: 30px;
}
</style>
