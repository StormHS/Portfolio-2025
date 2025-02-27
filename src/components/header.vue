<template>
    <header class="header">
      <nav>
        <!-- <img src="@/assets/logo.svg" alt="Logo" class="logo" /> -->
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#video">Intro Video</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 10%;
    background: #111;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }
  
  .logo {
    width: 120px;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
  
  nav ul li a:hover {
    color: #ff004f;
  }
  </style>
  