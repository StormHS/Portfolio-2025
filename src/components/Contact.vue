<template>
  <section id="contact" class="contact">
    <h2>Contact Me</h2>
    <hr class="line" />

    <div class="contact-info">
      <p>📧 storm.harris.studdart@gmail.com</p>
      <p>📞 Whatsapp +64 22 616 6313</p>
      <!-- <p><a href="https://github.com/StormHS" target="_blank">GitHub</a></p>
      <p>
        <a
          href="https://www.linkedin.com/in/storm-harris-studdart-803930208/"
          target="_blank"
          >LinkedIn</a
        >
      </p> -->
    </div>

    <a href="mailto:storm.harris.studdart@gmail.com" class="contact-btn"
      >Send Me an Email</a
    >
  </section>
</template>

<style scoped lang="scss">
.contact {
  padding: 5rem 10%;
  text-align: center;
  background: #000;
  color: #fff;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #ff004f;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  opacity: 0.8;
}

.contact-info {
  margin: 2rem 0;
}

.contact-info p {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.line {
  width: 70%;
  border: none;
height: 3px;
background: #3a33ff;
}
// font-awesome-icon {
//   color: #ff004f;
//   font-size: 1.5rem;
// }

/* Contact Button */
.contact-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background: #ff004f;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  transition: 0.3s ease;
}

.contact-btn:hover {
  background: #e60046;
}
</style>
