<template>
  <header class="header">
    <nav>
      <ul :class="{ 'nav-active': menuOpen }">
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#education" @click="closeMenu">Education</a></li>
        <li><a href="#video" @click="closeMenu">Intro Video</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>

      <!-- Move the hamburger menu to the right -->
      <div class="menu-icon" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped lang="scss">
/* Mobile First Navigation */
.header {
  background: #ff004f;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 768px) {
    padding: 0;
  }
}

nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Move the hamburger menu to the right */
.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  margin-left: auto; /* Pushes the menu icon to the right */

  .bar {
    width: 30px;
    height: 3px;
    background: #fff;
    transition: 0.3s ease;
  }

  @media (min-width: 768px) {
    display: none; /* Hide on desktop */
  }
}

/* Navigation Menu */
ul {
  list-style: none;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #111;
  flex-direction: column;
  text-align: center;
  display: none;
  transition: 0.3s ease-in-out;

  &.nav-active {
    display: flex;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }

  a:hover {
    color: #ff004f;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    position: static;
    background: none;
    width: auto;
  }
}
</style>
