<template>
  <div class="spot-list">
    <span class="title">Empresas que usam <strong>{{tech}}</strong></span>
    
    <ul>
      <li v-for="it in spots" :key="it._id">
        <div>
          <header :style="{backgroundImage:`url(${it.thumbnail_url})`}" />
          <span class="company">{{it.company}}</span>
          <span class="price">{{it.price ? `R$ ${it.price}/dia` : 'GRATUITO'}}</span>
          <button @click="$emit('navigate',{spotId:it._id})">Solicitar Reserva</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['tech','spots']
}
</script>
<style scoped src="./styles.css"></style>
