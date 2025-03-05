<template>
  <section id="projects" class="projects">
    <div class="header">Projects</div>

    <!-- Projects List (Carousel on Mobile, Grid on Desktop) -->
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

    <!-- Carousel Navigation Buttons (Only visible on mobile) -->
    <div class="carousel-buttons">
      <button @click="scrollLeft">←</button>
      <button @click="scrollRight">→</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

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
    description: "Placeholder description for Paw Print Petition.",
  },
  {
    id: 2,
    title: "Fruju Frenzy",
    video: "https://www.youtube.com/embed/v4j6kG1ys9c?si=8K1lO75HPuaDh8ZX",
    description: "Placeholder description for Fruju Frenzy.",
  },
  {
    id: 3,
    title: "Cadbury Unwrap the Thrill",
    video: "https://www.youtube.com/embed/BcD08RJL3XA?si=Eh_e1j4b2rsGcJVa",
    description: "Placeholder description for Cadbury Unwrap the Thrill.",
  },
  {
    id: 4,
    title: "JDE Recipes",
    video: "https://www.youtube.com/embed/4QdMAXHRGG8?si=hAQGQLbC1gynr_Lr",
    description: "Placeholder description for JDE Recipes.",
  },
  {
    id: 5,
    title: "To Do To Day",
    video: "https://www.youtube.com/embed/KeNulF84yxE?si=VAYXO5Q8n7oxohlU",
    description: "Placeholder description for To Do To Day.",
  },
  {
    id: 6,
    title: "Apprendre Le Français",
    video: "https://www.youtube.com/embed/jmThDo7qdas?si=69Y1kv6CFKVTvZg7",
    description: "Placeholder description for Apprendre Le Français.",
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
  color: #ff004f;
  margin-bottom: 2rem;
}

/* Mobile: Horizontal Scroll Carousel */
.projects-list {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding-bottom: 1rem;
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  -ms-overflow-style: none; /* Hide scrollbar in IE */
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
  padding: 1.5rem;
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

/* Desktop: Grid Layout */
@media (min-width: 768px) {
  .projects-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    overflow-x: visible; /* Remove scrolling effect */
  }

  .project {
    flex: none;
  }

  /* Hide Carousel Buttons on Desktop */
  .carousel-buttons {
    display: none !important;
  }
}

/* Text */
h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #ff004f;
}

p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

/* Carousel Buttons (Only show on mobile) */
.carousel-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    display: none; /* Hide on desktop */
  }
}

.carousel-buttons button {
  background: #ff004f;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
}

.carousel-buttons button:hover {
  background: #ff3366;
}
</style>
