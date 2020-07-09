<template>
  <app-content>
    <img alt="AirCnc" src="@/assets/logo.png" />
    
    <form @submit.prevent="handleSubmit">
      <label>SEU E-MAIL *</label>
      <input placeholder="Seu e-mail" v-model="email" />

      <label>TECNOLOGIAS *</label>
      <input placeholder="Tecnologias de interesse" v-model="techs" />

      <button type="submit">Encontrar Spots</button>
    </form>
  </app-content>
</template>

<script src="./scripts.js"></script>
<style scoped src="./styles.css"></style>
