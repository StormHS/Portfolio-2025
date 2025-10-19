<template>
  <section class="storm-terminal">
    <!-- Blinking "LOG IN" effect before terminal starts -->
    <div v-if="showLogin" class="login-screen">
      <p>LOG IN<span class="blink">█</span></p>
    </div>

    <div v-else class="terminal">
      <div class="terminal-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="title">stormstuddart: ~</span>
      </div>
      <div class="terminal-body">
        <div v-for="(line, index) in output" :key="index" class="terminal-line">
          {{ line }}
        </div>

        <!-- Profile Picture Displayed on "picture" Command -->
        <div v-if="showProfilePicture" class="profile-container">
          <img :src="profileImage" alt="Storm Profile" class="profile-pic" />
        </div>

        <div class="terminal-input">
          <span class="prompt">$</span>
          <input
            v-model="command"
            @keydown.enter="executeCommand"
            autofocus
            ref="inputField"
          />
        </div>
      </div>
    </div>

    <!-- ⬇️ Neon Green Down Arrow -->
    <div class="scroll-indicator">
      <span>▼</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import profileImage from "@/assets/images/profile-picture.png"; // Import profile picture

const output = ref([]);
const command = ref("");
const inputField = ref(null);
const showProfilePicture = ref(false);
const showLogin = ref(true);

// Predefined commands
const commands = {
  help: [
    "Available commands:",
    "about - Learn about Storm",
    "skills - Show skills",
    "projects - List projects",
    "joke - Tell a coding joke",
    "picture - Show profile picture",
    "clear - Clear terminal",
  ],
  about: [
    "Storm is a Vue & Nuxt developer, problem solver, and loves building sleek UI/UX experiences.",
  ],
  skills: [
    "Vue 3 | Nuxt | Firebase",
    "OpenAI | Full-Stack Development | SCSS Wizardry 🧙‍♂️",
  ],
  projects: [
    "1. Paw Print Petition",
    "2. Fruju Frenzy",
    "3. Cadbury Unwrap the Thrill",
    "4. JDE Recipes",
    "5. To Do To Day",
    "6. Apprendre Le Français",
  ],
  joke: [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "How many developers does it take to change a light bulb? None. It’s a hardware issue.",
  ],
  picture: ["Loading profile picture..."],
  clear: [],
};

// Execute command
const executeCommand = () => {
  const cmd = command.value.toLowerCase().trim();
  if (cmd) {
    output.value.push(`$ ${cmd}`);
    if (cmd === "clear") {
      output.value = []; // Completely clears the terminal
      showProfilePicture.value = false;
    } else if (cmd === "picture") {
      showProfilePicture.value = true;
      output.value.push(...commands[cmd]);
    } else if (commands[cmd]) {
      output.value.push(...commands[cmd]);
      showProfilePicture.value = false;
    } else {
      output.value.push(
        "Command not found. Type 'help' for a list of commands."
      );
      showProfilePicture.value = false;
    }
  }
  command.value = "";
  setTimeout(() => inputField.value?.focus(), 10);
};

// Auto-typing intro message after login
const typeEffect = (text, index = 0) => {
  if (index < text.length) {
    output.value.push(text[index]);
    setTimeout(() => typeEffect(text, index + 1), 50);
  }
};

onMounted(() => {
  // Delay terminal appearance after "LOG IN" effect
  setTimeout(() => {
    showLogin.value = false;
    typeEffect([
      "Welcome to Storm's Terminal!",
      "Type 'help' then enter to see available commands.",
    ]);
    inputField.value?.focus();
  }, 1000); // 3 seconds before terminal appears
});
</script>

<style scoped lang="scss">
/* Adjust height to account for navbar */
.storm-terminal {
  height: calc(100vh - 70px); /* Adjust 70px if navbar is different height */
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: #00ff00;
  font-family: "Courier New", monospace;
  position: relative;
  overflow: hidden;
}

/* Blinking "LOG IN" Effect */
.login-screen {
  font-size: 2rem;
  color: #00ff00;
  font-weight: bold;
}

.blink {
  animation: blink 0.8s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* Terminal Window */
.terminal {
  width: 80%;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
  overflow: hidden;
  padding-bottom: 10px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

/* Flicker effect on hover */
.terminal:hover {
  animation: flicker 0.2s infinite alternate;
}

@keyframes flicker {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.95;
  }
}

/* Terminal Header */
.terminal-header {
  display: flex;
  align-items: center;
  padding: 8px;
  background: #222;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
}

.red {
  background: #ff4d4d;
}
.yellow {
  background: #ffd700;
}
.green {
  background: #4caf50;
}

.title {
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  color: white;
}

/* Terminal Body */
.terminal-body {
  padding: 15px;
  min-height: 250px;
  max-height: 400px;
  overflow-y: auto;
}

/* Terminal Line */
.terminal-line {
  margin-bottom: 5px;
}

/* Terminal Input */
.terminal-input {
  display: flex;
  align-items: center;
}

.prompt {
  color: #00ff00;
  margin-right: 5px;
}

input {
  background: transparent;
  border: none;
  color: #00ff00;
  font-family: "Courier New", monospace;
  font-size: 16px;
  width: 100%;
  outline: none;
}

/* Profile Picture */
.profile-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #00ff00;
}

/* SCROLL INDICATOR */
.scroll-indicator {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: #00ff00;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}
</style>
