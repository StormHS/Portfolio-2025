<template>
    <section id="education" class="education">
      <div class="education-content">
        <h2>Education</h2>
  
        <div class="education-list">
          <div class="education-item">
            <h3>💻 Dev Academy</h3>
            <p>Certificate in Applied Software Development</p>
            <p class="duration">2023</p>
          </div>
  
          <div class="education-item">
            <h3>📚 NorthTec</h3>
            <p>Bachelor of Social Work</p>
            <p>Certificate in Mental Health & Addiction</p>
            <p class="duration">2018 - 2021</p>
          </div>
  
          <div class="education-item">
            <h3>🎓 Additional Certifications</h3>
            <ul>
              <li>ASSIST Suicide Prevention Training (2022)</li>
              <li>Puawaitahi Sexual Harm Training (2022)</li>
              <li>Te Tiriti & Cultural Safety Training (2022)</li>
              <li>BE Accessible - Accessibility Training (2021)</li>
              <li>Sign Language 3-Month Course (2020)</li>
              <li>Gender & Sexuality 101 Training (2020)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped lang="scss">
  .education {
    padding: 5rem 10%;
    background: #000;
    color: #fff;
    text-align: center;
  }
  
  .education-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: #ff004f;
    margin-bottom: 2rem;
  }
  
  /* Education List */
  .education-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .education-item {
    background: #111;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(255, 0, 79, 0.2);
  }
  
  h3 {
    font-size: 1.5rem;
    color: #ff004f;
  }
  
  p, li {
    font-size: 1.1rem;
    opacity: 0.8;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  .duration {
    font-style: italic;
    color: #ff004f;
    margin-top: 0.5rem;
  }
  </style>
  