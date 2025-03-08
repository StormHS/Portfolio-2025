<template>
  <section id="education" class="education">
    <div class="education-content">
      <h2>Education</h2>
      <hr class="line" />

      <div class="education-list" ref="carousel">
        <div
          class="education-item"
          v-for="(item, index) in educationData"
          :key="index"
        >
          <h3>{{ item.title }}</h3>
          <p v-if="item.certification">{{ item.certification }}</p>
          <p v-if="item.duration" class="duration">{{ item.duration }}</p>
          <ul v-if="item.additional">
            <li v-for="(cert, i) in item.additional" :key="i">{{ cert }}</li>
          </ul>
        </div>
      </div>

      <!-- Navigation Buttons for Carousel (Only visible on mobile) -->
      <div class="carousel-buttons">
        <button @click="scrollLeft">←</button>
        <button @click="scrollRight">→</button>
      </div>
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

const educationData = [
  {
    title: "💻 Dev Academy",
    certification: "Certificate in Applied Software Development",
    duration: "2023",
  },
  {
    title: "✨ Curious Refuge",
    certification: "AI - Marketing and Advertisement",
    duration: "2024 - Ongoing",
  },
  {
    title: "📚 NorthTec",
    certification:
      "Bachelor of Social Work | Cert in Mental Health & Addiction",
    duration: "2018 - 2021",
  },
  {
    title: "🎓 Additional Certifications",
    additional: [
      "ASSIST Suicide Prevention (2022)",
      "Puawaitahi Sexual Harm (2022)",
      "Te Tiriti & Cultural Safety (2022)",
      "BE Accessible's, Accessibility (2021)",
      "Sign Language 3-Month (2018 & 2020)",
      "Gender & Sexuality 101 (2020)",
    ],
  },
];
</script>

<style scoped lang="scss">
.education {
  padding: 5rem 10%;
  background: #000;
  color: #fff;
  text-align: center;
}

/* Mobile: Horizontal Scroll Carousel */
.education-list {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding-bottom: 1rem;
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  -ms-overflow-style: none; /* Hide scrollbar in IE */
}

/* Hide scrollbar in Webkit (Chrome, Safari) */
.education-list::-webkit-scrollbar {
  display: none;
}

/* Each education item */
.education-item {
  flex: 0 0 80%;
  scroll-snap-align: center;
  background: #111;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(255, 0, 79, 0.2);
}

/* Desktop: Grid Layout */
@media (min-width: 768px) {
  .education-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    overflow-x: visible; /* Remove scrolling effect */
  }

  .education-item {
    flex: none;
  }

  /* Hide Carousel Buttons on Desktop */
  .carousel-buttons {
    display: none !important;
  }
}

/* Title & Text */
h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #00ff00;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.5rem;
  color: #ff004f;
}

p,
li {
  font-size: 1.1rem;
  opacity: 0.8;
}

ul {
  list-style: none;
  padding: 0;
}
.line {
border: none;
height: 3px;
width: 50%;
background: #3a33ff;
}

.duration {
  font-style: italic;
  color: #ff004f;
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
  background: #2b00ff;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
}

.carousel-buttons button:hover {
  background: #ff0084;
}
</style>
