<script setup>
import { ref, computed } from "vue";

// 1. Сначала создаем список языков
const languages = [
  { name: "Русский", code: "RU", dir: "ltr" },
  { name: "Башҡортса", code: "BA", dir: "ltr" },
  { name: "English", code: "EN", dir: "ltr" },
  { name: "中文", code: "ZH", dir: "ltr" },
  { name: "العربية", code: "AR", dir: "rtl" },
  { name: "Türkçe", code: "TR", dir: "ltr" },
  { name: "日本語", code: "JA", dir: "ltr" },
];

const currentLang = ref("RU");
const isLangOpen = ref(false);

// 2. Затем создаем словарь (добавил 'card' во все языки)
const translations = {
  RU: {
    title: "ИМЕННО ТО, ЧТО ТЕБЕ НУЖНО",
    sidebar: "МЕНЮ",
    card: "КАРТОЧКА",
    send: "ОТПРАВИТЬ",
  },
  BA: {
    title: "НӘҠ ҺИҢӘ КӘРӘКЛЕ НӘМӘ",
    sidebar: "МЕНЮ",
    card: "КАРТОЧКА",
    send: "ЕБӘРЕРГӘ",
  },
  EN: {
    title: "EXACTLY WHAT YOU NEED",
    sidebar: "MENU",
    card: "USER CARD",
    send: "SEND",
  },
  ZH: { title: "正是你需要的", sidebar: "菜单", card: "用户卡", send: "发送" },
  AR: {
    title: "بالظبط ما تحتاجه",
    sidebar: "قائمة",
    card: "بطاقة المستخدم",
    send: "إرسال",
  },
  TR: {
    title: "TAM İHTİYACINIZ OLAN ŞEY",
    sidebar: "MENÜ",
    card: "KART",
    send: "GÖNDER",
  },
  JA: {
    title: "まさにあなたが必要としているもの",
    sidebar: "メニュー",
    card: "カード",
    send: "送信",
  },
};

// 3. И только в самом конце создаем "переводчик" t
const t = computed(() => translations[currentLang.value]);

const selectLang = (code) => {
  currentLang.value = code;
  isLangOpen.value = false;
};
</script>

<template>
  <!-- Главный контейнер (цвет aqua #00ffff) -->
  <div
    class="min-h-screen bg-[#00ffff] flex flex-col font-sans text-white overflow-x-hidden"
  >
    <!-- 1. HEADER (40px, 12 колонок) -->
    <header
      class="fixed top-0 w-full h-[40px] bg-black/20 backdrop-blur-md border-b border-white/20 z-50 flex justify-center"
    >
      <div class="w-[1200px] grid grid-cols-12 gap-x-[20px] items-center px-4">
        <div class="col-span-2 flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            class="h-[24px] w-auto brightness-125 drop-shadow-md"
          />
        </div>
        <nav class="col-span-8 flex justify-center gap-8">
          <a
            v-for="item in [
              'HOME',
              'CONTACT',
              'RESUME',
              'PORTFOLIO',
              'VUE',
              'VITE',
            ]"
            :key="item"
            href="#footer"
            class="text-[10px] font-black tracking-widest hover:text-blue-700 transition-colors uppercase whitespace-nowrap"
            >{{ item }}</a
          >
        </nav>
        <div
          class="col-span-2 text-right font-black text-blue-700 text-[12px] drop-shadow-sm uppercase italic"
        >
          {{ currentLang }}
        </div>
      </div>
    </header>

    <!-- 2. ЛЕНТА ЯЗЫКОВ (30px, 12 колонок) -->
    <div
      class="fixed top-[40px] w-full h-[30px] bg-white/10 backdrop-blur-sm border-b border-black/10 z-50 flex justify-center"
    >
      <div class="w-[1200px] grid grid-cols-12 gap-x-[20px] px-4 items-center">
        <div
          class="col-span-12 flex justify-center gap-8 overflow-x-auto no-scrollbar"
        >
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLang(lang.code)"
            :class="[
              'uppercase tracking-widest px-2 text-[10px] font-bold transition-all',
              currentLang === lang.code
                ? 'text-blue-700 scale-125 border-b-2 border-blue-700'
                : 'text-black/40 hover:text-black',
            ]"
          >
            {{ lang.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- 3. ОСНОВНОЙ КОНТЕНТ (mt-[70px]) -->
    <main
      class="mt-[70px] w-[1200px] mx-auto grid grid-cols-12 gap-x-[20px] py-10 items-start flex-1"
    >
      <!-- Заголовок с руками -->
      <div
        class="col-span-12 flex items-center justify-center gap-16 mb-8 h-[80px]"
      >
        <span
          class="text-7xl transform -rotate-[45deg] -scale-x-100 animate-pulse drop-shadow-xl"
          >👉</span
        >
        <h1
          class="text-4xl font-black uppercase tracking-tighter text-center drop-shadow-2xl"
        >
          {{ t.title }}
        </h1>
        <span
          class="text-7xl transform rotate-[45deg] animate-pulse drop-shadow-xl"
          >👉</span
        >
      </div>

      <!-- SideBar (2) -->
      <aside
        class="col-span-2 h-[400px] bg-blue-600/60 rounded-3xl border-2 border-white/30 flex items-center justify-center shadow-2xl font-black uppercase italic"
      >
        {{ t.sidebar }}
      </aside>

      <!-- Центральная область на 8 колонок -->
      <div class="col-span-8 flex items-center justify-center p-4">
        <img
          src="/maket.jpg"
          alt="Devices"
          class="w-full h-auto object-contain mix-blend-multiply drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform hover:scale-105 duration-500"
        />
      </div>

      <!-- Card (2) -->
      <section
        class="col-span-2 h-[400px] bg-blue-600/60 rounded-3xl border-2 border-white/30 flex items-center justify-center shadow-2xl font-black uppercase italic"
      >
        {{ t.card }}
      </section>

      <!-- 4. ОПИСАНИЕ (Вытащено наверх, z-10) -->
      <div
        class="col-span-12 mt-16 p-12 bg-white/20 backdrop-blur-xl rounded-[50px] border-2 border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative z-10"
      >
        <h2
          class="text-4xl font-black mb-6 uppercase italic text-blue-900 tracking-tighter drop-shadow-sm"
        >
          Description Area
        </h2>
        <div
          class="h-[250px] w-full border-4 border-dashed border-blue-800/20 rounded-[30px] flex items-center justify-center font-black text-blue-900/30 text-3xl uppercase italic"
        >
          12 Columns Content Layer
        </div>
      </div>
    </main>

    <!-- 5. ФУТЕР (Непрозрачность 40%, 12 колонок) -->
    <footer
      id="footer"
      class="w-full bg-black/40 py-12 mt-20 border-t border-white/10 flex justify-center"
    >
      <div
        class="w-[1200px] grid grid-cols-12 gap-x-[20px] px-4 text-[11px] font-black uppercase tracking-[0.5em] text-white/50"
      >
        <div class="col-span-4 text-left">About: Miniahmet Faizov</div>
        <div class="col-span-4 text-center">Geoloc: Ufa / Sverdlovsk</div>
        <div class="col-span-4 text-right">Contact: +7 (917) 416-32-06</div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
/* Скрываем стандартный скроллбар, но оставляем возможность прокрутки */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Анимация появления */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Плавный скролл для всего сайта */
html {
  scroll-behavior: smooth;
}
</style>
