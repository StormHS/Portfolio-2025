<template>
  <section id="about" class="about">
    <div class="about-content">
      <h2>About Me</h2>
      <div class="about-container">
        <img
          src="@/assets/images/profile-picture.png"
          alt="Profile Picture"
          class="profile-img"
        />

        <p>
          I'm a Web Developer specializing in building clean and intuitive
          applications. I focus on performance, usability, and modern design,
          turning ideas into seamless digital experiences. Whether you need a
          dynamic web app, support with marketing & search engine optimization
          or a minimalist, high-performing site, I bring technical expertise and
          creative problem-solving to every project. Let’s think big and create
          something amazing.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding: 5rem 10%;
  background: #111;
  color: #fff;
  display: flex;
  justify-content: center;
}

.about-container {
  display: flex;
  align-items: center;
  max-width: 1100px;
  gap: 2rem;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff004f;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #ff004f;
}

p {
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.8;
  text-align: justify;
}
</style>
