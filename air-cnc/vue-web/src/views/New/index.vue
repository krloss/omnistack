<template>
  <app-content>
    <form @submit.prevent="handleSubmit">
      <label id="thumbnail" :style="{backgroundImage:`url(${preview})`}" :class="thumbnail ? 'has-thumbnail' : ''">
        <input type="file" @change="setThumbnail" />
        <img src="@/assets/camera.svg" alt="Selecione uma imagem." />
      </label>

      <label>EMPRESA *</label>
      <input placeholder="Sua empresa incrível" v-model="company" />

      <label>TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
      <input placeholder="Quais tecnologias usam?" v-model="techs" />

      <label>VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
      <input placeholder="Valor cobrado por dia" v-model="price" />

      <button type="submit" class="btn">Cadastrar</button>
    </form>
  </app-content>
</template>

<script src="./scripts.js"></script>
<style scoped src="./styles.css"></style>
