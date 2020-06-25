<template>
  <app-content>
    <book-list :books="books" @approvals="handleApproved" />
    <spot-list :spots="spots" />
    <router-link :to="`/new/${userId}`">
      <button class="btn">Cadastrar novo Spot</button>
    </router-link>
  </app-content>
</template>

<script src="./scripts.js"></script>
