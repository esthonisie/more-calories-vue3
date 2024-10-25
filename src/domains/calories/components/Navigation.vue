<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import { toggleInfo, getExtraInfo } from '@/helper/toggle-info'

const location = useRoute();
const isInfoActive = getExtraInfo;
</script>

<template>
  <nav>
    <div class="home-info-container">
      <RouterLink 
        active-class="active" 
        to="/">Home
      </RouterLink>
      <div 
        :style="{
          display: (location.path === '/' ? 'inline' : 'none' ), 
          opacity: (isInfoActive ? '1' : '0.5'),
        }"
        class="toggle-info-container" 
        @click="toggleInfo">
      </div>
    </div>
    <RouterLink 
      active-class="active"
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

  .home-info-container {
    display: flex;
    width: 85px;
    justify-content: space-between;
  }

  .toggle-info-container {
    background-image: url(@/assets/info-on.png);
    background-size: cover;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    cursor: pointer;
  }
</style>