<template>
  <section id="video" class="video-section">
    <h2>Introduction Video</h2>
    <hr class="line"/>

    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/Vmieko8ZaRI?si=s3c6bdPki0qeSQpp"
        title="Introduction Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style scoped lang="scss">
.video-section {
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

.line {
  border: none;
height: 3px;
background: #3a33ff;
}

/* Responsive Video Container */
.video-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  margin-top: 2rem;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
