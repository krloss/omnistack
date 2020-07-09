<template>
  <app-content>
    <form @submit.prevent="handleSubmit">
      <label>DATA DE INTERESSE *</label>
      <input placeholder="Qual data você quer reservar?" v-model="date" />

      <button type="submit">Solicitar Reserva</button>
      <button @click="handleCancel" class="cancelButton">Cancelar</button>
    </form>
  </app-content>
</template>

<script src="./scripts.js"></script>
<style scoped src="./styles.css"></style>
