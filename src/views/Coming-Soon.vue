<template>
    <div class="coming-soon">
      <div class="sign">
        <span>Coming Soon</span>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped lang="scss">
  .coming-soon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
    position: relative;
  }
  
  .sign {
    background: red;
    padding: 1rem 2rem;
    font-size: 3rem;
    text-transform: uppercase;
    color: #ffce0c;
    border: 8px solid #ffce0c;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    text-align: center;
    position: relative;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    transform-origin: top center;
    animation: swing 2.5s ease-in-out infinite;
  }
  
  @keyframes swing {
    0% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(5deg);
    }
  }
  </style>
  