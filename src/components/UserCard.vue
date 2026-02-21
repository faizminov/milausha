<script setup>
import userPhoto from "/public/Я директор.jpg";
// Объявляем входные параметры (Props)
defineProps({
  userName: String,
  jobTitle: String,
});
</script>

<template>
  <div class="user-card">
    <img src="my-vue-app/public/Я директор.jpg" alt="Моё фото" class="avatar" />
    <h3>User: {{ userName }}</h3>
    <p>Position: {{ jobTitle }}</p>
    <div class="skills">
      <span class="badge">FIGMA</span>
      <span class="badge">UI/UX</span>
      <span class="badge">Web Design</span>
      <span class="badge">Create Card WB</span>
    </div>
    <p class="skills-label">Development Stack:</p>
    /*
    <button class="contact-btn">Contact Me</button>
  </div>
</template>

<style scoped>
.user-card {
  width: 25%;
  height: 20%;
  border: 2px solid #42b883;
  border-radius: 12px;
  padding: 20px;
  margin: 10px;
  background-color: #ffffff;
  color: white;
  text-align: center;
}
.contact-btn {
  background-color: #646cff;
  color: white;
  border: 2px solid #42и833;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
/* Фото с изумрудной рамкой */
.avatar {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #42b883 !important; /* !important заставит цвет быть зеленым */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  margin: 0 auto 15px; /* Центрируем фото */
  display: block;
}

/* Навыки (Badges) */
.badge {
  /* Твои дизайнерские настройки */
  background-color: rgba(135, 206, 235, 0.3) !important; /* SkyBlue 0.3 */
  color: #a0f0ff !important; /* Светло-голубой текст */
  border: 1px solid rgba(135, 206, 235, 0.6) !important;

  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 5px;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Тень для объема */

  /* 2. Styling (Стилизация) */
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 800; /* Делаем текст жирнее для лучшей читаемости */
  text-transform: uppercase;
  letter-spacing: 0.05em; /* Добавим «воздуха» между буквами (kerning) */

  /* 3. Layout (Расположение) */
  display: inline-block;
  margin: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.skills-label {
  font-size: 0.9rem;
  color: #888;
  margin-top: 15px;
  text-align: left;
}

.badge.dev {
  background-color: rgba(
    66,
    184,
    131,
    0.2
  ) !important; /* Зеленоватый оттенок Vue */
  color: #42b883 !important;
  border-color: #42b883 !important;
}

.badge:hover {
  background-color: rgba(
    135,
    206,
    235,
    0.5
  ) !important; /* Уплотняем при наведении */
  transform: scale(1.05); /* Легкий зум-эффект */
  box-shadow: 0 0 15px rgba(0, 229, 255, 0.3); /* Дизайнерское свечение (Glow) */
}

/* Кнопка "Contact Me" - делаем её ЯРКО-СИНИЙ */
.contact-btn {
  background-color: #2563eb !important; /* Тот самый Royal Blue */
  color: #ffffff !important;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-color: #1d4ed8 !important; /* Темнее при наведении */
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}
</style>
