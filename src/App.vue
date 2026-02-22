<script setup>
import { ref, computed } from "vue";

// 1. Сначала создаем список языков
const languages = [
  { name: "Русский", code: "RU", dir: "ltr" },
  { name: "Башҡортса", code: "BA", dir: "ltr" },
  { name: "English", code: "EN", dir: "ltr" },
  { name: "中文", code: "ZH", dir: "ltr" },
  { name: "العربية", code: "AR", dir: "rtl" },
  { name: "Türkçe", code: "TR", dir: "ltr" }, // Турецкий
  { name: "日本語", code: "JA", dir: "ltr" }, // Японский
  { name: "한국어", code: "KO", dir: "ltr" }, // Корейский
  { name: "हिन्दी", code: "HI", dir: "ltr" }, // Хинди (Индия)
];

const currentLang = ref("EN");
const isLangOpen = ref(false);

// 2. Затем создаем словарь (добавил 'card' во все языки)
const translations = {
  RU: {
    title: "ИМЕННО ТО, ЧТО ТЕБЕ НУЖНО",
    sidebar: "СДЕЛАЙ ЗАКАЗ",
    card: "КАРТОЧКА",
    name: "ВАШЕ ИМЯ",
    email: "ВАША ПОЧТА",
    phone: "ТЕЛЕФОН",
    msg: "СОПРОВОДИТЕЛЬНОЕ ПИСЬМО",
    send: "ОТПРАВИТЬ",
    h: "ВЕРСТКА",
    c: "СТИЛИ",
    j: "ЛОГИКА",
    t: "ТИПЫ",
    v: "ЯДРО",
    vt: "СБОРКА",
    b: "СЕТКА",
    f: "МАКЕТ",
    vs: "КОД",
    skills: "МОЙ СТЕК",
  },
  BA: {
    title: "НӘҠ ҺИҢӘ КӘРӘКЛЕ НӘМӘ",
    sidebar: "ЗАКАЗ БИРЕГЕҘ",
    card: "КАРТОЧКА",
    name: "ИСЕМЕГЕҘ",
    email: "ЭЛЕКТРОН ПОЧТАҒЫҘ",
    phone: "ТЕЛЕФОН",
    msg: "ОҘАТЫУ ХАТЫ",
    send: "ЕБӘРЕРГӘ",
    h: "ҠОРОЛМА",
    c: "СТИЛЬДӘР",
    j: "ЛОГИКА",
    t: "ТИПТАР",
    v: "ҮҘӘК",
    vt: "ЙЫЙЫУ",
    b: "СЕТКА",
    f: "ДИЗАЙН",
    vs: "РЕДАКТОР",
    skills: "ОҪТАЛЫҠ",
  },
  EN: {
    title: "EXACTLY WHAT YOU NEED",
    sidebar: "MAKE AN ORDER",
    card: "USER CARD",
    name: "YOUR NAME",
    email: "YOUR EMAIL",
    phone: "PHONE",
    msg: "COVER LETTER",
    send: "SEND NOW",
    h: "LAYOUT",
    c: "STYLING",
    j: "LOGIC",
    t: "TYPES",
    v: "CORE",
    vt: "BUNDLING",
    b: "GRID",
    f: "DESIGN",
    vs: "EDITOR",
    skills: "MY STACK",
  },
  ZH: {
    title: "正是你需要的",
    sidebar: "下订单",
    card: "用户卡",
    name: "你的名字",
    email: "你的电子邮件",
    phone: "电话",
    msg: "求职信",
    send: "立即发送",
    h: "布局",
    c: "样式",
    j: "逻辑",
    t: "类型",
    v: "核心",
    vt: "打包",
    b: "网格",
    f: "设计",
    vs: "编辑器",
    skills: "我的技术栈",
  },
  AR: {
    title: "بالظبط ما تحتاجه",
    sidebar: "قدم طلبك",
    card: "بطاقة المستخدم",
    name: "اسمك",
    email: "بريدك الإلكتروني",
    phone: "رقم الهاتف",
    msg: "خطاب تغطية",
    send: "أرسل الآن",
    h: "تخطيط",
    c: "تنسيق",
    j: "منطق",
    t: "أنواع",
    v: "نواة",
    vt: "تجميع",
    b: "شبكة",
    f: "تصميم",
    vs: "محرر",
    skills: "تقنياتي",
  },
  TR: {
    title: "TAM İHTİYACINIZ OLAN ŞEY",
    sidebar: "SİPARİŞ VER",
    card: "KART",
    name: "ADINIZ",
    email: "E-POSTA",
    phone: "TELEFON",
    msg: "ÖN YAZI",
    send: "ŞİМДİ GÖNDER",
    h: "DÜZEN",
    c: "STİLLER",
    j: "MANTIK",
    t: "TİPLER",
    v: "ÇEKİRDEK",
    vt: "DERLEME",
    b: "IZGARA",
    f: "TASARIM",
    vs: "EDİTÖR",
    skills: "YETENEKLERİM",
  },
  JA: {
    title: "まさにあなたが必要としているもの",
    sidebar: "今すぐ注文",
    card: "カード",
    name: "お名前",
    email: "メール",
    phone: "電話番号",
    msg: "添え状",
    send: "今すぐ送信",
    h: "レイアウト",
    c: "スタイル",
    j: "ロジック",
    t: "型定義",
    v: "コア",
    vt: "ビルド",
    b: "グリッド",
    f: "デザイン",
    vs: "エディタ",
    skills: "スキル",
  },
  KO: {
    title: "당신에게 꼭 필요한 것",
    sidebar: "주문하기",
    card: "사용자 카드",
    name: "이름",
    email: "이메일",
    phone: "전화번호",
    msg: "자기소개서",
    send: "지금 보내기",
    h: "레이아웃",
    c: "스타일",
    j: "로직",
    t: "타입",
    v: "코어",
    vt: "빌드",
    b: "그리드",
    f: "디자인",
    vs: "편집기",
    skills: "기술 스택",
  },
  HI: {
    title: "बिल्कुल वही जो आपको चाहिए",
    sidebar: "ऑर्डर करें",
    card: "यूज़र कार्ड",
    name: "आपका नाम",
    email: "ईमेल",
    phone: "फ़ोन",
    msg: "कवर लेटर",
    send: "अभी भेजें",
    h: "लेआउट",
    c: "स्टाइल",
    j: "लॉजिक",
    t: "टाइप्स",
    v: "कोर",
    vt: "बंडलिंग",
    b: "ग्रिड",
    f: "डिज़ाइन",
    vs: "एडिटर",
    skills: "मेरा स्टैक",
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
          class="text-4xl font-black uppercase text-center tracking-widest drop-shadow-2xl"
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
        class="col-span-2 h-[500px] bg-blue-600/60 rounded-3xl border-2 border-white/30 flex items-center justify-center shadow-2xl font-black uppercase italic"
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
        class="col-span-2 h-[600px] bg-blue-600/60 rounded-3xl border-2 border-white/30 flex items-center justify-center shadow-2xl font-black uppercase italic"
      >
        <aside
          class="col-span-2 h-[500px] bg-blue-600/40 rounded-3xl border-2 border-white/30 flex flex-col items-center p-6 backdrop-blur-sm shadow-xl"
        >
          <!-- ТВОЁ ФОТО (Теперь оно чуть ниже и крупнее) -->
          <div
            class="w-24 h-24 rounded-full border-4 border-cyan-400 overflow-hidden mb-6 shadow-2xl shrink-0"
          >
            <img
              src="/Я директор.jpg"
              alt="My Photo"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- ФОРМА ОБРАТНОЙ СВЯЗИ (Теперь у неё больше места) -->
          <form
            class="w-full space-y-1.5 flex-1 flex flex-col justify-between px-1 pb-2"
          >
            <div class="space-y-1">
              <!-- ИМЯ: Хәтта оҙон исемдәр ҙә һыйырлыҡ итеп text-xs яһайбыҙ -->
              <input
                type="text"
                :placeholder="t.name"
                required
                class="w-full bg-cyan-300/40 px-3 py-1.5 rounded-none border border-white/30 text-[11px] font-normal text-cyan-950 placeholder:text-cyan-800/60 outline-none focus:bg-cyan-200/60 transition-all"
              />

              <!-- EMAIL -->
              <input
                type="email"
                :placeholder="t.email"
                required
                class="w-full bg-cyan-300/40 px-3 py-1.5 rounded-none border border-white/30 text-[11px] font-normal text-cyan-950 placeholder:text-cyan-800/60 outline-none focus:bg-cyan-200/60 transition-all"
              />

              <!-- ТЕЛЕФОН -->
              <input
                type="tel"
                :placeholder="t.phone"
                required
                class="w-full bg-cyan-300/40 px-3 py-1.5 rounded-none border border-white/30 text-[11px] font-normal text-cyan-950 placeholder:text-cyan-800/60 outline-none focus:bg-cyan-200/60 transition-all"
              />

              <!-- СООБЩЕНИЕ: Бейеклеген h-28-гә тиклем арттырҙыҡ һәм шрифтын бәләкәйләттек -->
              <textarea
                maxlength="250"
                :placeholder="t.msg"
                class="w-full bg-cyan-300/40 px-3 py-2 rounded-none border border-white/30 text-[11px] font-normal text-cyan-950 placeholder:text-cyan-800/60 h-28 resize-none outline-none focus:bg-cyan-200/60 transition-all leading-tight"
              ></textarea>
            </div>

            <!-- КНОПКА: Тексты бер аҙ бәләкәйерәк, әммә асыҡ -->
            <button
              type="submit"
              class="w-full bg-cyan-300 hover:bg-cyan-200 text-cyan-900 font-black py-2.5 rounded-2xl text-[10px] transition-all shadow-lg active:scale-95 uppercase tracking-[0.2em] border border-white/40 mt-1"
            >
              {{ t.send }}
            </button>
          </form>
        </aside>
      </section>

      <!-- 4. ОПИСАНИЕ (Вытащено наверх, z-10) -->
      <div
        class="col-span-12 mt-5 p-12 bg-white/20 backdrop-blur-xl rounded-[50px] border-2 border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative z-10"
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
