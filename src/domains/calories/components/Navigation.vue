<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink 
      active-class="active activeHome" 
      to="/">Home
    </RouterLink>
    <RouterLink 
      active-class="active activeCreate"
      class="link-to-create" 
      to="/create">&#43;
    </RouterLink>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 8px 10px 0 10px;
  }

  a {
    color: #58c3ca;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
  }

  .link-to-create {
    font-weight: 900;
  }

  .active {
    color: #fb9f93;
    border-bottom: 1px solid #58c3ca;
  }
</style>