<template>
  <section id="contact" class="contact">
    <h2>Contact Me</h2>
    <hr class="line" />

    <div class="contact-info">
      <div class="contact-item">📧 storm.harris.studdart@gmail.com</div>
      <div class="contact-item">📞 Whatsapp +64 22 616 6313</div>
    </div>

    <a href="mailto:storm.harris.studdart@gmail.com" class="contact-btn"
      >Send Me an Email</a
    >
  </section>
</template>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  padding: 5rem 10%;
  text-align: center;
  background: #000;
  color: #fff;
  font-size: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #00ff00;
  margin-bottom: 1rem;
}

.contact-info {
  margin: 2rem 0;
}

.line {
  width: 50%;
  border: none;
  height: 3px;
  background: #3a33ff;
}

.contact-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background: #00ff00;
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  transition: 0.3s ease;
}

.contact-btn:hover {
  background: #fff700;
}
</style>
