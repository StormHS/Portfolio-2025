<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="fade-in">Welcome! I'm <span>Storm</span>.</h1>
      <p class="fade-in">Web Development | Tech Specialist | Problem Solver</p>
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
  overflow: hidden;
}

/* Text Animation */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1.5s ease-out forwards;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Delayed animation for a staggered effect */
p {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  margin-top: 1rem;
  font-weight: 300;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1.5s ease-out forwards;
  animation-delay: 0.5s;
}

/* Styled Heading */
h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  color: white;
}

h1 span {
  color: #ff004f;
}
</style>
