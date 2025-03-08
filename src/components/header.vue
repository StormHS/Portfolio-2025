<template>
  <header class="header">
    <nav>
    
      <!-- Hamburger / Close Menu Icon -->
      <div class="menu-icon" :class="{ 'open': menuOpen }" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <div class="content-container">
      <!-- Mobile Navigation (Slides in from the right) -->
        <!-- Logo -->
        <!-- <img src="@/assets/logo.png" alt="Logo" class="logo" /> -->

      <ul :class="{ 'nav-active': menuOpen }">
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#education" @click="closeMenu">Education</a></li>
        <li><a href="#video" @click="closeMenu">Intro Video</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
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
/* HEADER STYLING */
.header {
  background: #00ff00;
  width: 100%;
  max-width: 100vw;
  position: relative;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0;
  }
}

.content-container {
  display: flex;
}

// .logo {
//   height: 50px; /* Adjust as needed */
//   width: auto;
//   margin-right: auto; /* Pushes the nav menu to the right */
//   margin: 1rem;

//   @media (max-width: 768px) {
//     height: 40px; /* Slightly smaller on mobile */
//   }
// }

/* HAMBURGER MENU ICON */
.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1100; /* Keep above nav */
  margin-left: auto; /* Push to right */
  transition: transform 0.3s ease-in-out;

  .bar {
    width: 30px;
    height: 3px;
    background: black;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    display: none; /* Hide on desktop */
  }
}

/* HAMBURGER TO "X" ANIMATION */
.menu-icon.open {
  transform: rotate(180deg);
}

.menu-icon.open .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-icon.open .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.open .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* NAVIGATION MENU */
ul {
  list-style: none;
  position: fixed;
  right: -100%; /* Start hidden off-screen */
  width: 50%;
  height: 100vh;
  background: #ff0003;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  gap: 1rem;
  transition: right 0.4s ease-in-out;
  z-index: 1050; /* Ensure above content */

  @media (min-width: 768px) {
    padding-top: 0;
  }

  /* When active, slide in */
  &.nav-active {
    right: 0;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s;

    @media (min-width: 768px) {
      color: black;
      font-size: 0.8rem;
    }
  }

  @media (min-width: 768px) {
    position: static;
    width: auto;
    height: auto;
    background: none;
    flex-direction: row;
    gap: 1.5rem;
    transition: none;
  }
}

/* Prevent scrolling when menu is open */
body.nav-open {
  overflow: hidden;
}
</style>
