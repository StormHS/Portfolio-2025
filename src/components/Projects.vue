<template>
  <section id="projects" class="projects">
    <h2>Projects</h2>
    <div class="projects-grid">
      <div class="project" v-for="project in projects" :key="project.id">
        <iframe
          :src="project.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
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

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #ff004f;
  margin-bottom: 2rem;
}

/* Grid Layout */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.project {
  background: #111;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(255, 0, 79, 0.2);
  text-align: center;
}

.project iframe {
  width: 100%;
  height: 300px;
  border-radius: 8px;
}

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
</style>
