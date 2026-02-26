d<script setup>
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
	<div class="min-h-screen bg-[#00ffff] flex flex-col font-sans text-white overflow-x-hidden">
	
	    <!-- 1. ЦЕНТРАЛЬНЫЙ МОБИЛЬНЫЙ ХЕДЕР -->
		<header class="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50 flex flex-col items-center pt-5 pb-3">
  
  <!-- ДЛИННЫЙ ЛОГОТИП (Теперь ему просторно) -->
  <div class="w-full flex justify-center px-6 mb-4">
    <div class="relative group">
      <!-- Твое длинное фото-лого или текст -->
      <img 
        src="/logo.png" 
        alt="Miniahmet Faizov" 
        class="h-7 md:h-9 w-auto brightness-125 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-500 group-hover:scale-105" 
      />
      <!-- Тонкая полоска под лого для стиля -->
      <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-cyan-400/50"></div>
    </div>
  </div>

  <!-- БУРГЕР-МЕНЮ (Аккуратная кнопка под лого) -->
  <button class="flex flex-col items-center gap-1.5 active:scale-90 transition-all duration-200 py-2">
    <span class="text-[8px] font-black tracking-[0.4em] uppercase text-cyan-400 mb-1 opacity-80">Menu</span>
    <div class="flex flex-col gap-1">
      <span class="block w-8 h-[2px] bg-white rounded-full"></span>
      <span class="block w-5 h-[2px] bg-cyan-400 rounded-full mx-auto"></span>
      <span class="block w-8 h-[2px] bg-white rounded-full"></span>
    </div>
  </button>
  
</header>

  
		<!-- 2. ЛЕНТА ЯЗЫКОВ (Выбор языка) -->
	    <div class="fixed top-[50px] w-full h-[40px] bg-white/10 backdrop-blur-md border-b border-black/5 z-40 flex items-center">
		  <div class="w-full overflow-x-auto no-scrollbar flex items-center gap-6 px-6">
		  <!-- Используем массив languages из вашего блока script -->
		    <button 
  v-for="lang in languages" 
  :key="lang.code"
  @click="selectLang(lang.code)"
  :class="[
    'text-[9px] font-bold tracking-widest whitespace-nowrap transition-all uppercase',
    currentLang === lang.code ? 'text-blue-700 scale-110' : 'text-black/50 hover:text-black'
          ]"
        >
  {{ lang.name }}
        </button>

		  </div>
	    </div>
  
	    <!-- 3. ОСНОВНОЙ КОНТЕНТ -->
	    <main class="mt-[100px] flex-1 flex flex-col items-center px-4 py-6 space-y-8">
		
		<!-- Заголовок (из t.title) -->
		<div class="text-center space-y-2">
		  <span class="text-4xl block animate-bounce">👉</span>
		  <h1 class="text-3xl font-black uppercase tracking-[0.1em] drop-shadow-xl text-white">
			{{ t.title }}
		  </h1>
		  <span class="text-4xl block animate-bounce">👈</span>
		</div>
  
		<!-- КАРТОЧКА С ФОТО -->
		<div class="w-full max-w-[320px] bg-white/10 backdrop-blur-sm rounded-[40px] p-6 border border-white/20 shadow-2xl flex flex-col items-center text-center">
		  
		  <h2 class="text-xl font-black text-gray-900 uppercase tracking-tighter">Miniahmet Faizov</h2>
		  <p class="text-[10px] font-bold text-blue-800 uppercase tracking-widest">Web Design & Frontend</p>
		</div>
  
		<!-- ДЕВАЙСЫ -->
		<div class="w-full max-w-[380px] py-4 drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
		  <img src="/maket.jpg" alt="Devices" class="w-full h-auto object-contain" />
		</div>
  
		<!-- НИЖНИЕ ПЛАШКИ (из t.sidebar или аналогов) -->
		<div class="w-full max-w-[320px] space-y-4 pb-10">
		  <div class="bg-blue-600 rounded-[24px] py-6 flex flex-col items-center justify-center shadow-xl border border-white/20 active:scale-95 transition-transform">
			<span class="text-lg font-bold">قائمة</span>
		  </div>
		  <div class="bg-blue-600 rounded-[24px] py-6 flex flex-col items-center justify-center shadow-xl border border-white/20 active:scale-95 transition-transform">
			<span class="text-lg font-bold">بطاقة المستخدم</span>
		  </div>
		</div>
	    </main>
        <footer id="footer" class="w-full py-8 mt-auto bg-black/10 backdrop-blur-md flex flex-col items-center gap-4 text-white/60 border-t border-white/10">
  
      <!-- Копирайт (Succinct & Clear) -->
      <div class="text-[10px] font-bold tracking-[0.2em] uppercase">
    © 2024 Miniahmet Faizov
      </div>

      <!-- Краткий список технологий (по желанию) -->
      <div class="flex gap-4 opacity-50">
        <span class="text-[8px] font-black italic">VUE 3</span>
        <span class="text-[8px] font-black italic">VITE</span>
        <span class="text-[8px] font-black italic">TAILWIND</span>
      </div>

       		 </footer>


    	<!-- Old Code --> 
    	<div v-if="false">
	    	<!-- Главный контейнер (цвет aqua #00ffff) -->
	    	<div class="min-h-screen bg-[#00ffff] flex flex-col font-sans text-white overflow-x-hidden">
				<!-- 1. HEADER (40px, 12 колонок) -->
        		<header class="fixed top-0 w-full h-[40px] bg-black/20 backdrop-blur-md border-b border-white/20 z-50 flex justify-center">
          <div class="w-[1200px] grid grid-cols-12 gap-x-[20px] items-center px-4">
        
            <!-- Logo -->
            <div class="col-span-2 flex items-center">
               <img src="/logo.png" alt="Logo" class="h-[24px] w-auto brightness-125 drop-shadow-md" />
            </div>

            <!-- Nav -->
            <nav class="col-span-8 flex justify-center gap-8">
                <a v-for="item in ['HOME', 'CONTACT', 'RESUME', 'PORTFOLIO', 'VUE', 'VITE']" 
               :key="item" href="#footer"
               class="text-[10px] font-black tracking-widest hover:text-blue-700 transition-colors uppercase whitespace-nowrap">
               {{ item }}
                </a>
            </nav>

            <!-- Lang -->
            <div class="col-span-2 text-right font-black text-blue-700 text-[12px] drop-shadow-sm uppercase italic">
            {{ currentLang }}
            </div>

          </div> <!-- Конец сетки -->
        		</header> <!-- Конец хедера -->


    	  		<!-- 2. ЛЕНТА ЯЗЫКОВ (30px, 12 колонок) -->
    	  		<div class="top-[40px] w-full h-[30px] bg-black/10 backdrop-blur-sm border-b border-black/10 z-50 flex justify-center grid grid-cols-12 gap-x-[20px] px-4 items-center">
        	<div class="col-span-12 flex justify-center gap-8 overflow-x-auto no-scrollbar">
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
			<main class="mt-[70px] max-w-7xl mx-auto grid grid-cols-12 gap-x-[20px] py-10 items-start flex-1">
  			


      		<!-- ГЛАВНЫЙ КОНТЕЙНЕР (На всю ширину экрана) -->
      		<div class="w-full min-h-screen bg-[#00ffff] flex flex-col items-center overflow-x-hidden">
 
        	<!-- МАРТОВСКОЕ НЕБО (Фрейм с анимацией) -->
    		<div class="relative w-full min-h-[500px] flex flex-col items-center justify-center bg-gradient-to-b from-[#020617] via-[#1e293b] to-[#fb923c]/20 py-16 px-4 overflow-hidden">
    
        	<!-- СЛОИ ФОНА (Сияние, Венера, Самолет) -->
        	<div class="absolute inset-0 opacity-30 blur-[100px] pointer-events-none">
        		<div class="absolute top-0 left-[-20%] w-[140%] h-full bg-emerald-500/10 skew-y-12"></div>
        	</div>
    
        	<!-- Венера (Сулпан Йондоҙо) -->
       		<div class="absolute top-12 right-[15%] w-3 h-3 bg-white rounded-full shadow-[0_0_25px_8px_white] animate-twinkle"></div>
    
       		 <!-- След самолета -->
        	<div div class="absolute top-1/3 -left-full w-full h-[1.5px] bg-white/40 rotate-[-8deg] animate-plane-trail shadow-[0_0_12px_white]"></div>

        	<!-- ЦЕНТРАЛЬНАЯ ГРУППА: Руки + Заголовок -->
        	<div class="relative z-50 flex flex-wrap items-center justify-center gap-6 md:gap-16 w-full max-w-7xl">
          		<span class="text-6xl md:text-9xl animate-bounce-slow drop-shadow-[0_0_15px_white]">👉</span>
      
          		<h1 class="text-3xl md:text-6xl font-white uppercase text-center tracking-[0.3em] text-white drop-shadow-[0_10px_25px_black] leading-tight max-w-[800px]">
        {{ t.title }}
          		</h1>
      
         		  <span class="text-6xl md:text-9xl animate-bounce-slow drop-shadow-[0_0_15px_white]">👈</span>
        	</div>
     
        	<!-- Заря (свет снизу) -->
        	<div class="absolute z-20 bottom-0 w-full h-32 bg-gradient-to-t from-orange-400/20 via-transparent to-transparent"></div>
        </div>
        <!-- SideBar (1) -->
        <aside class="col-span-2 h-[550px] bg-blue-600/40 rounded-3xl border-2 mt-0 border-white/30 flex items-center justify-center shadow-2xl font-black uppercase not italic font-normal">
        {{ t.sidebar }}
        	<div class="group cursor-pointer p-4 border-l-4 border-transparent hover:border-cyan-400 hover:bg-red/10 transition-all duration-300">
            	<!-- Заголовок ссылки -->
            	<h3 class="text-xl font-bold text-white group-hover:text-cyan-300">
            1. High-Speed Performance
            	</h3>
        	</div>
        </aside>
       <!-- Центральная область на 8 колонок -->
        <div class="col-span-8 flex items-center justify-center p-4">
        	<img src="/maket.jpg" alt="Devices" class="w-full h-auto object-contain mix-blend-multiply drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform hover:scale-105 duration-500" />
      	</div> 

        <!-- ОСНОВНОЙ КОНТЕНТ (Фото + Описание) -->
        < class="w-full max-w-[1200px] px-6 py-12 flex flex-col md:flex-row items-center md:items-start gap-12">
    
        <!-- КАРТОЧКА С ФОТО -->
        <div class="w-full md:w-1/3 flex flex-col items-center">
      		<div class="w-64 h-80 rounded-3xl border-4 border-white/30 overflow-hidden shadow-2xl">
        	<!-- Твое фото -->
        	<img src="/Я директор.jpg" alt="Miniahmet Faizov" class="w-full h-full object-cover" />
      	</div>
      	<div class="mt-4 text-center">
        	<h2 class="text-2xl font-bold text-gray-800 uppercase tracking-widest">Miniahmet Faizov</h2>
        	<p class="text-gray-600 font-medium">Webdesigner Frontend Developer</p>
      	</div>
        </div>

        <!-- БЛОК ОПИСАНИЯ -->
        	<div class="w-full md:w-2/3 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      			<h3 class="text-3xl font-black text-gray-900 mb-6 uppercase tracking-wider">About Me</h3>
      			<p class="text-gray-800 text-xl leading-relaxed">
        Привет! Я создаю современные веб-приложения на Vue 3 и Tailwind CSS. 
        Моя цель — делать сайты, которые не просто работают, а вызывают восторг. 
        В этом проекте я объединил техническую мощь и магию мартовского неба.
      						</p>
      					<!-- Сюда можешь дописать свой текст -->
        				</div>
					</div>
    			</main>

    			<!-- 5. ФУТЕР (Непрозрачность 40%, 12 колонок) -->
    			<footer id="footer" class="w-full bg-gray/40 py-12 mt-20 border-t border-white/10 flex justify-center">
        			<div class="w-[1200px] grid grid-cols-12 gap-x-[20px] px-4 text-[11px] font-black uppercase tracking-[0.5em] text-white/50">
        				<div class="col-span-4 text-left">About: Miniahmet Faizov</div>
        				<div class="col-span-4 text-center">Geoloc: Ufa / Sverdlovsk</div>
        				<div class="col-span-4 text-right">Contact: +7 (917) 416-32-06</div>
      				</div>
    			</footer>
  		</div>
	</div>
	
</template>


<style scoped>
  /* Убираем полосу прокрутки для лент, сохраняя возможность скролла */
.no-scrollbar::-webkit-scrollbar {
	display: none;
}
.no-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
  
  /* Плавный скролл для горизонтальных лент */
  nav, .overflow-x-auto {
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
  }
  /*<Стили Десктоп>*/
/* Бөтә проект өсөн курсивты Запрет */
* {
  font-style: normal !important;
}

/* Inter шрифты 400 (Regular) булыуын нығытыу */
body {
  font-family: "Inter", sans-serif;
  font-weight: 400;
}

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

/* Добавляем настройки анимации прямо здесь */
@theme {
  --animate-shimmer-pulse:
    shimmer 3s infinite linear, pulse-size 2s infinite ease-in-out;

  @keyframes shimmer {
    from {
      background-position: 0% 50%;
    }
    to {
      background-position: 200% 50%;
    }
  }
  @keyframes pulse-size {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
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
/* Мерцание Венеры */
/* Мерцание Венеры */
@keyframes twinkle {
  0%, 100% { transform: scale(1); opacity: 1; filter: brightness(1.2); }
  50% { transform: scale(0.8); opacity: 0.6; filter: brightness(0.8); }
}

/* Полёт самолёта */
@keyframes plane-trail {
  0% { transform: translateX(0) rotate(-8deg); }
  100% { transform: translateX(300%) rotate(-8deg); }
}

/* Плавное парение рук */
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-twinkle { 
  animation: twinkle 4s infinite ease-in-out; 
}

.animate-plane-trail { 
  animation: plane-trail 18s linear infinite; 
}

.animate-bounce-slow { 
  animation: bounce-slow 5s infinite ease-in-out; 
}
  </style>

 



  



