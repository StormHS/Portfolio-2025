<template>
  <section id="about" class="about">
    <div class="about-content">
      <h2>About Me</h2>
      <p>
        I'm a software engineer passionate about building **intuitive, scalable,
        and efficient applications**. I specialize in **Vue 3, Nuxt 3, Firebase,
        and Tailwind CSS**, creating user-friendly and high-performing web
        solutions.
      </p>

      <!-- Tabs for Skills / Experience -->
      <div class="tabs">
        <button
          @click="activeTab = 'skills'"
          :class="{ active: activeTab === 'skills' }"
        >
          Skills
        </button>
        <button
          @click="activeTab = 'experience'"
          :class="{ active: activeTab === 'experience' }"
        >
          Experience
        </button>
      </div>

      <!-- Tab Content -->
      <div v-if="activeTab === 'skills'" class="tab-content">
        <ul>
          <li>🚀 Vue 3, Nuxt 3, JavaScript (ES6+), Firebase</li>
          <li>🎨 Tailwind CSS, SCSS, UI/UX design principles</li>
          <li>🛠 Git, GitHub, Agile development, Pair programming</li>
          <li>🔧 Problem-solving & system architecture</li>
        </ul>
      </div>

      <div v-if="activeTab === 'experience'" class="tab-content">
        <ul>
          <li>
            💼 **Intern at PixelWorld** – Developed interactive web apps,
            integrated Open Graph metadata, and built reusable components.
          </li>
          <li>
            📌 **Dev Academy Graduate** – Built full-stack projects in
            JavaScript & Vue, collaborating in remote teams.
          </li>
          <li>
            🌍 **Freelance Web Development** – Worked on dynamic, multi-language
            Webflow sites for businesses.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const activeTab = ref("skills");
</script>

<style scoped lang="scss">
.about {
  padding: 5rem 10%;
  text-align: center;
  background: #111;
  color: #fff;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #ff004f;
}

p {
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.8;
}

/* Tabs */
.tabs {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  background: transparent;
  border: 2px solid #ff004f;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  transition: 0.3s ease;
}

button.active,
button:hover {
  background: #ff004f;
}

/* Tab Content */
.tab-content {
  margin-top: 1.5rem;
  text-align: left;
}

.tab-content ul {
  list-style: none;
  padding: 0;
}

.tab-content li {
  font-size: 1.1rem;
  padding: 0.5rem 0;
}
</style>
