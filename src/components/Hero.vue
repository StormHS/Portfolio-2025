<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Kia ora, welcome! I'm <span>Storm</span>.</h1>
        <p>Software Engineer | Creative Technologist | Problem Solver</p>
      </div>
    </section>
  </template>
  
  <style scoped lang="scss">
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background: black;
    color: white;
    padding: 0 2rem;
  }
  
  .hero-content {
    max-width: 800px;
  }
  
  h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 700;
    line-height: 1.2;
  }
  
  h1 span {
    color: #ff004f;
  }
  
  p {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    margin-top: 1rem;
    font-weight: 300;
    opacity: 0.8;
  }
  </style>
  