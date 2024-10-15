<template>
  <div class="main-container">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create" class="link-to-create">&#43;</RouterLink>
    </nav>
    <RouterView /> 
  </div>
</template>

<style scoped>
  .main-container {
    min-width: 360px;
    max-width: 360px;
    margin: 40px auto;
    border: 1px solid #58c3ca;
    border-radius: 8px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    padding: 8px 10px 0 10px;
  }

  a {
    color: #58c3ca;
    text-transform: uppercase;
  }

  .link-to-create {
    font-weight: 900;
  }
</style>