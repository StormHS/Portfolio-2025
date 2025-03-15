<template>
  <section id="projects" class="projects">
    <div class="header">Projects</div>
    <hr class="line" />

    <!-- Projects List (Carousel on ALL screen sizes) -->
    <div class="projects-container">
      <div class="projects-list" ref="carousel">
        <div class="project" v-for="project in projects" :key="project.id">
          <div class="video-container">
            <iframe
              :src="project.video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>

    <!-- Carousel Navigation Buttons (Now visible on desktop too) -->
    <div class="carousel-buttons">
      <button @click="scrollLeft">←</button>
      <button @click="scrollRight">→</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const carousel = ref(null);

const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -300, behavior: "smooth" });
  }
};

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 300, behavior: "smooth" });
  }
};

const projects = [
  {
    id: 1,
    title: "Paw Print Petition",
    video: "https://www.youtube.com/embed/KgxpTjTQ06A?si=CMtR8b8JrzKwCOax",
    description:
      "A Vue 3, Nuxt 3 Firebase web app where users can sign a petition with their pets paw to ban the public sale of fireworks. This petition reached over 100,000 votes and will be sent to parliment.",
  },
  {
    id: 2,
    title: "Fruju Frenzy",
    video: "https://www.youtube.com/embed/v4j6kG1ys9c?si=8K1lO75HPuaDh8ZX",
    description: "An interactive Vue 3 game, where players try to tap falling fruit to earn points. Built with Matter.js for physics, animated effects for juice splashes, and a dynamic scoring system",
  },
  {
    id: 3,
    title: "Cadbury Unwrap the Thrill",
    video: "https://www.youtube.com/embed/BcD08RJL3XA?si=Eh_e1j4b2rsGcJVa",
    description: "A promotional Vue 3 Progressive Web App (PWA) where users enter a unique code from Cadbury packaging to reveal if they win a prize. ",
  },
  {
    id: 4,
    title: "JDE Recipes",
    video: "https://www.youtube.com/embed/4QdMAXHRGG8?si=hAQGQLbC1gynr_Lr",
    description: "A Vue 3, Nuxt 3 recipe platform for JDE coffee brands, displaying curated recipes. Created a Firebase CMS and utalised Tailwind CSS for styling.",
  },
  {
    id: 5,
    title: "To Do To Day",
    video: "https://www.youtube.com/embed/KeNulF84yxE?si=VAYXO5Q8n7oxohlU",
    description: "A Javascript task manager web app designed for neurodiverse users, offering customizable task flows, progress tracking, and a distraction-free UI. Personal project during studies, chosen as a final presentation project for Dev Academy",
  },
  {
    id: 6,
    title: "Apprendre Le Français",
    video: "https://www.youtube.com/embed/jmThDo7qdas?si=69Y1kv6CFKVTvZg7",
    description: "My first personal project designed to help me learn french 🇫🇷",
  },
];
</script>

<style scoped lang="scss">
.projects {
  padding: 5rem 10%;
  text-align: center;
  background: #000;
  color: #fff;
}

.header {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #00ff00;
  margin-bottom: 2rem;
}

.line {
  border: none;
  height: 3px;
  background: #3a33ff;
  width: 50%;
}

/* Carousel for all screen sizes */
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
}

.projects-list {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding-bottom: 1rem;
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  -ms-overflow-style: none; /* Hide scrollbar in IE */
  width: 80%;
  max-width: 1200px;
}

/* Hide scrollbar in Webkit (Chrome, Safari) */
.projects-list::-webkit-scrollbar {
  display: none;
}

/* Each project item */
.project {
  flex: 0 0 80%;
  scroll-snap-align: center;
  background: #111;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(255, 0, 79, 0.2);
  text-align: center;
}

/* VIDEO CONTAINER (Maintains 16:9 Ratio) */
.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  border-radius: 8px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Keep carousel layout on desktop */
@media (min-width: 768px) {
  .projects-list {
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
  }

  .project {
    flex: 0 0 60%; /* Show two at a time on larger screens */
  }
}

/* Text */
h3 {
  font-size: 1rem;
  margin-top: 1rem;
  color: #ff004f;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

/* Carousel Buttons (Now visible on desktop too) */
.carousel-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.carousel-buttons button {
  background: #ff0084;
  color: black;
  border: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
}

.carousel-buttons button:hover {
  background: #2b00ff;
}
</style>
