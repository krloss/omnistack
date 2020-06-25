<template>
  <app-content>
    <p>
      Ofereça
      <strong> spots </strong>para programadores e econtre
      <strong> talentos </strong>para sua empresa.
    </p>
    <form @submit.prevent="login">
      <label for="email">E-MAIL *</label>
      <input type="email" placeholder="Seu melhor e-mail." v-model="email" />

      <button class="btn" type="submit">Entrar</button>
    </form>
  </app-content>
</template>

<script src="./scripts.js"></script>
