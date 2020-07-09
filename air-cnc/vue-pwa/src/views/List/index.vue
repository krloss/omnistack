<template>
  <app-content>
    <img alt="AirCnc" class="logo" src="@/assets/logo.png" />

    <spot-list v-for="it in techList" :key="it.tech"
      @navigate="handleNavigate" :tech="it.tech" :spots="it.spots" />
  </app-content>
</template>

<script src="./scripts.js"></script>
<style scoped src="./styles.css"></style>
