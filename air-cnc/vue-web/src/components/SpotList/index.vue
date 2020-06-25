<template>
  <ul class="spot-list">
    <li v-for="it in spots" :key="it._id">
      <header :style="{backgroundImage:`url(${it.thumbnail_url})`}" />
      <strong>{{it.company}}</strong>
      <span>{{it.price ? `R$ ${it.price}/dia` : 'GRATUITO'}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props:['spots']
}
</script>
<style scoped src="./styles.css"></style>
