<template>
  <section class="hero">
    <!-- Background GIF -->
    <div class="hero-bg"></div>

    <!-- Hero Content -->
    <div class="hero-content">
      <div class="fade-in header"><span>W</span>elcome!</div>
      <div class="fade-in glow-effect">Web Development | Tech Specialist | Creative Solutions</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
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

/* Background GIF */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/hero-background.gif") no-repeat center center/cover;
  z-index: 100;

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

/* Styled Heading */
.header {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  color: white;
  position: relative;
}

.header span {
  color: #ff004f;
}

/* Glow Effect */
.glow-effect {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  margin-top: 1rem;
  font-weight: 300;
  opacity: 0.8;
  transition: text-shadow 0.3s ease-in-out;
}

.glow-effect:hover {
  text-shadow: 0 0 10px rgba(255, 0, 79, 0.8), 0 0 20px rgba(255, 0, 79, 0.5);
}
</style>
