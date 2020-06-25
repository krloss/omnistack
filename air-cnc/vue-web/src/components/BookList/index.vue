<template>
  <ul class="book-list">
    <li v-for="it in books" :key="it._id">
      <p>
        <strong>{{it.user.email}} </strong>
        solicita uma reserva em
        <strong> {{it.spot.company}} </strong>
        para a data:
        <strong> {{it.date}}</strong>
      </p>
      <button class="accept" @click="$emit('approvals',{id:it._id, approved:true})">Aceitar</button>
      <button class="reject" @click="$emit('approvals',{id:it._id, approved:false})">Rejeitar</button>
    </li>
  </ul>
</template>

<script>
export default {
  props:['books']
}
</script>
<style scoped src="./styles.css"></style>
