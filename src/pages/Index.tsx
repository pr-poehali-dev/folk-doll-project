import { useState } from "react";

const DOLL_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/4c3688ec-ab56-48c4-af21-db0dc79b878f.jpg";
const MATERIALS_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/aec4ec33-2922-432a-8e88-6484145c9ae5.jpg";
const GALLERY_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/36cdff6d-f1d8-4e0e-9117-ff58122d783e.jpg";
const PEOPLES_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/8c12a248-1111-4844-bf9e-75e6dd025fb8.jpg";
const COSTUMES_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/13bfaed5-752a-4593-afcd-301c7d7b518c.jpg";

const slides = [
  { id: 0, label: "Введение" },
  { id: 1, label: "История" },
  { id: 2, label: "Материалы" },
  { id: 3, label: "Мастер-класс" },
  { id: 4, label: "Галерея" },
  { id: 5, label: "Народы России" },
  { id: 6, label: "Значение" },
  { id: 7, label: "Цифровой оберег" },
  { id: 8, label: "Угрозы в сети" },
  { id: 9, label: "Правила защиты" },
];

const PEOPLES = [
  { name: "Русские", region: "Центральная Россия", costume: "Сарафан, кокошник, рубаха с вышивкой", color: "#8B1A1A", dollFact: "Делали куклу из лыка и соломы без единого узла — узел считался плохой приметой. Лицо намеренно оставляли чистым, чтобы кукла не могла «сглазить»." },
  { name: "Татары", region: "Татарстан, Поволжье", costume: "Калфак, платье с позументом, читек", color: "#003DA5", dollFact: "Плели кукол из камыша и рогоза. Наряжали в миниатюрные тюбетейки и платочки с орнаментом, дарили на Навруз как символ удачи и плодородия." },
  { name: "Башкиры", region: "Республика Башкортостан", costume: "Елян, нагрудник хакал, тюбетейка", color: "#2D5016", dollFact: "Мастерили кукол из берёзового лыка, украшали монетками и бисером. Куклу вешали у колыбели младенца как оберег от злых духов." },
  { name: "Чуваши", region: "Чувашская Республика", costume: "Белое платье с красной вышивкой тевет", color: "#7A4A1A", dollFact: "Скручивали куклу из пучка льна, одевали в вышитую рубашку с красными узорами. Считалось, что такая кукла хранит тепло домашнего очага." },
  { name: "Якуты", region: "Республика Саха (Якутия)", costume: "Меховой кафтан, унты, расшитая шапка", color: "#4A2C8A", dollFact: "Делали кукол из берёсты и заячьего меха. Детские куклы-«абааhы» защищали от духов тайги, их передавали от матери к дочери." },
  { name: "Буряты", region: "Бурятия, Забайкалье", costume: "Дэгэл — халат из кожи и ткани с орнаментом", color: "#8B5A00", dollFact: "Шили кукол из войлока и кожи, набивали шерстью. Особую куклу-«эхэ» делала бабушка для внучки при рождении — как символ связи поколений." },
  { name: "Чеченцы", region: "Чеченская Республика", costume: "Папаха, черкеска, газыри на груди", color: "#1A4A1A", dollFact: "Плели кукол из кукурузных листьев и початков. На свадьбу невеста дарила жениху куклу, сшитую своими руками, как знак умения и трудолюбия." },
  { name: "Мордва", region: "Республика Мордовия", costume: "Панар — рубаха с богатой вышивкой пулай", color: "#8B1A5A", dollFact: "Скручивали куклу из крапивы и полотна. Такую куклу клали в колыбель до рождения ребёнка, чтобы «согреть» место и призвать здоровье." },
];

export default function Index() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <div className="presentation-root">
      {/* Фоновый орнамент */}
      <div className="bg-ornament" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="folk" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="none"/>
              <path d="M40 4 L44 20 L60 20 L47 30 L52 46 L40 36 L28 46 L33 30 L20 20 L36 20 Z" fill="none" stroke="#b5341e" strokeWidth="0.6" opacity="0.18"/>
              <circle cx="40" cy="40" r="2.5" fill="#b5341e" opacity="0.12"/>
              <path d="M0 40 Q10 30 20 40 Q30 50 40 40 Q50 30 60 40 Q70 50 80 40" fill="none" stroke="#c8860a" strokeWidth="0.5" opacity="0.15"/>
              <path d="M40 0 Q30 10 40 20 Q50 30 40 40 Q30 50 40 60 Q50 70 40 80" fill="none" stroke="#c8860a" strokeWidth="0.5" opacity="0.15"/>
              <rect x="2" y="2" width="8" height="8" fill="none" stroke="#b5341e" strokeWidth="0.5" opacity="0.1" transform="rotate(45 6 6)"/>
              <rect x="70" y="70" width="8" height="8" fill="none" stroke="#b5341e" strokeWidth="0.5" opacity="0.1" transform="rotate(45 74 74)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#folk)"/>
        </svg>
      </div>

      {/* Шапка */}
      <header className="pres-header">
        {/* Флаг РФ */}
        <div className="rf-flag" aria-label="Флаг России">
          <div className="rf-flag-white"/>
          <div className="rf-flag-blue"/>
          <div className="rf-flag-red"/>
        </div>
        <div className="header-ornament">
          <span className="ornament-line"/>
          <span className="ornament-diamond">◆</span>
          <span className="ornament-line"/>
        </div>
        <div className="header-center">
          <p className="header-year">Год народного единства</p>
          <p className="header-sub">Народы России — единая семья</p>
        </div>
        <div className="header-ornament">
          <span className="ornament-line"/>
          <span className="ornament-diamond">◆</span>
          <span className="ornament-line"/>
        </div>
        {/* Флаг РФ (правый) */}
        <div className="rf-flag" aria-hidden="true">
          <div className="rf-flag-white"/>
          <div className="rf-flag-blue"/>
          <div className="rf-flag-red"/>
        </div>
      </header>

      {/* Навигация по слайдам */}
      <nav className="slide-nav">
        {slides.map((s) => (
          <button
            key={s.id}
            className={`nav-dot ${current === s.id ? "active" : ""}`}
            onClick={() => setCurrent(s.id)}
            title={s.label}
          >
            <span className="nav-label">{s.label}</span>
          </button>
        ))}
      </nav>

      {/* Слайды */}
      <main className="slides-container">

        {/* СЛАЙД 0 — ВВЕДЕНИЕ */}
        {current === 0 && (
          <div className="slide slide-intro animate-slide-in">
            <div className="slide-border-top"/>
            <div className="intro-content">
              <div className="intro-left">
                <p className="slide-eyebrow">Мастер-класс для учеников начальной школы</p>
                <h1 className="intro-title">
                  Кукла<br/>
                  <em>из липового</em><br/>
                  лыка
                </h1>
                <div className="divider-folk">
                  <span>✦</span><span className="divider-line"/><span>✦</span>
                </div>
                <p className="intro-text">
                  Народное ремесло как живая нить между поколениями.
                  Прикоснись к мудрости предков — свяжи собственную куклу-оберег.
                </p>
                <div className="unity-badge">
                  <span className="unity-icon">🤝</span>
                  <span>Народное единство — в традициях и ремёслах</span>
                </div>
              </div>
              <div className="intro-right">
                <div className="intro-imgs-col">
                  <div className="intro-img-frame">
                    <img src={DOLL_IMG} alt="Кукла из лыка" className="intro-img"/>
                    <div className="img-corner img-corner-tl"/>
                    <div className="img-corner img-corner-tr"/>
                    <div className="img-corner img-corner-bl"/>
                    <div className="img-corner img-corner-br"/>
                  </div>
                  <div className="intro-img-frame">
                    <img src={PEOPLES_IMG} alt="Народы России в костюмах" className="intro-img intro-img-peoples"/>
                    <div className="img-corner img-corner-tl"/>
                    <div className="img-corner img-corner-tr"/>
                    <div className="img-corner img-corner-bl"/>
                    <div className="img-corner img-corner-br"/>
                    <div className="peoples-caption">Народы России в национальных костюмах</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 1 — ИСТОРИЯ */}
        {current === 1 && (
          <div className="slide slide-history animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">01</p>
              <h2 className="slide-title">История ремесла</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="history-grid">
              <div className="history-card">
                <div className="card-icon">🌿</div>
                <h3>Древние корни</h3>
                <p>Куклы из лыка появились на Руси более <strong>2000 лет назад</strong>. Липовое лыко — кора молодой липы — было доступно каждой семье и считалось «живым» материалом.</p>
              </div>
              <div className="history-card">
                <div className="card-icon">🏠</div>
                <h3>Семейное дело</h3>
                <p>Куклу делали <strong>сообща</strong> — бабушки, матери, дети. Передавая умения из рук в руки, хранили память о предках и укрепляли родовые связи.</p>
              </div>
              <div className="history-card">
                <div className="card-icon">🛡️</div>
                <h3>Кукла-оберег</h3>
                <p>Народная кукла — это не игрушка, а <strong>защитница</strong> дома. В неё вкладывали добрые пожелания, её дарили на свадьбу, рождение ребёнка, в дорогу.</p>
              </div>
              <div className="history-card">
                <div className="card-icon">🇷🇺</div>
                <h3>Единство народов</h3>
                <p>Традиция плетения кукол объединяла <strong>разные народы России</strong> — от мещёрских лесов до сибирских просторов. Общее ремесло — общая душа.</p>
              </div>
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 2 — МАТЕРИАЛЫ */}
        {current === 2 && (
          <div className="slide slide-materials animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">02</p>
              <h2 className="slide-title">Материалы и инструменты</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="materials-content">
              <div className="materials-left">
                <img src={MATERIALS_IMG} alt="Материалы" className="materials-img"/>
              </div>
              <div className="materials-right">
                <div className="materials-section">
                  <h3 className="materials-heading">🌳 Основные материалы</h3>
                  <ul className="materials-list">
                    <li><span className="mat-bullet">◆</span><strong>Липовое лыко</strong> — полоски коры шириной 1–2 см, предварительно замоченные в воде</li>
                    <li><span className="mat-bullet">◆</span><strong>Льняные нити</strong> — для связывания частей куклы</li>
                    <li><span className="mat-bullet">◆</span><strong>Лоскут ткани</strong> — для наряда (ситец, холст)</li>
                    <li><span className="mat-bullet">◆</span><strong>Солома или вата</strong> — для набивки тела</li>
                  </ul>
                </div>
                <div className="materials-section">
                  <h3 className="materials-heading">🔧 Инструменты</h3>
                  <ul className="materials-list">
                    <li><span className="mat-bullet">◆</span><strong>Ножницы</strong> — для обрезки лыка</li>
                    <li><span className="mat-bullet">◆</span><strong>Шило или игла</strong> — для протягивания нитей</li>
                    <li><span className="mat-bullet">◆</span><strong>Тазик с водой</strong> — для замачивания лыка</li>
                    <li><span className="mat-bullet">◆</span><strong>Прищепки</strong> — для фиксации при сушке</li>
                  </ul>
                </div>
                <div className="tip-box">
                  <span className="tip-icon">💡</span>
                  <p>Лыко нужно замочить в тёплой воде <strong>на 20–30 минут</strong> перед работой — тогда оно станет гибким и послушным!</p>
                </div>
              </div>
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 3 — ПОШАГОВАЯ ИНСТРУКЦИЯ */}
        {current === 3 && (
          <div className="slide slide-steps animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">03</p>
              <h2 className="slide-title">Пошаговая инструкция</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="steps-grid">
              {[
                { step: "1", title: "Подготовка лыка", desc: "Замочите полоски лыка в тёплой воде на 20–30 минут. Отберите ровные полоски одинаковой ширины — они должны легко гнуться.", icon: "💧" },
                { step: "2", title: "Формирование головы", desc: "Сложите пучок лыка пополам. Место сгиба туго обмотайте нитью — это будет шея. Верхняя часть пучка формирует голову.", icon: "⭕" },
                { step: "3", title: "Руки куклы", desc: "Отдельный пучок лыка сложите вдвое и переплетите — это руки. Вставьте их поперёк туловища под уровнем шеи и зафиксируйте нитью.", icon: "🤲" },
                { step: "4", title: "Туловище и косы", desc: "Нижнюю часть разделите на 2–3 пряди. Заплетите косичку или перетяните нитью для юбки. Хвосты подрежьте ровно.", icon: "🧶" },
                { step: "5", title: "Наряд куклы", desc: "Нарядите куклу в лоскут ткани — пояском обвяжите талию. Можно вышить крестиком красным узором по рубашке.", icon: "🎀" },
                { step: "6", title: "Сушка и оберег", desc: "Дайте кукле высохнуть 2–3 часа. Готового оберега можно подарить близким или повесить у порога дома.", icon: "✨" },
              ].map((item) => (
                <div key={item.step} className="step-card">
                  <div className="step-header">
                    <div className="step-num">{item.step}</div>
                    <span className="step-icon">{item.icon}</span>
                  </div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-desc">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 4 — ГАЛЕРЕЯ */}
        {current === 4 && (
          <div className="slide slide-gallery animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">04</p>
              <h2 className="slide-title">Галерея работ</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="gallery-layout">
              <div className="gallery-main">
                <div className="gallery-img-frame">
                  <img src={GALLERY_IMG} alt="Народные куклы" className="gallery-img-main"/>
                  <div className="gallery-caption">Традиционные народные куклы России</div>
                </div>
              </div>
              <div className="gallery-side">
                <div className="gallery-img-frame">
                  <img src={DOLL_IMG} alt="Кукла из лыка" className="gallery-img-side"/>
                  <div className="gallery-caption">Кукла-оберег из лыка</div>
                </div>
                <div className="gallery-img-frame">
                  <img src={MATERIALS_IMG} alt="Материалы" className="gallery-img-side"/>
                  <div className="gallery-caption">Натуральные материалы</div>
                </div>
                <div className="gallery-quote">
                  <p>«В каждой кукле — душа мастера и любовь к родной земле»</p>
                </div>
              </div>
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 5 — НАРОДЫ РОССИИ */}
        {current === 5 && (
          <div className="slide slide-peoples animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">05</p>
              <h2 className="slide-title">Народы России</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="peoples-layout">
              <div className="peoples-photo-col">
                <div className="gallery-img-frame">
                  <img src={PEOPLES_IMG} alt="Народы России" className="peoples-photo-main"/>
                  <div className="gallery-caption">Народы России в национальных костюмах</div>
                </div>
                <div className="gallery-img-frame">
                  <img src={COSTUMES_IMG} alt="Национальные костюмы" className="peoples-photo-main"/>
                  <div className="gallery-caption">Традиционные национальные костюмы</div>
                </div>
                <div className="peoples-unity-box">
                  <div className="rf-flag-lg">
                    <div className="rf-flag-white"/>
                    <div className="rf-flag-blue"/>
                    <div className="rf-flag-red"/>
                  </div>
                  <p>В России живут представители более <strong>190 народов</strong> — и все они вместе создают великую страну!</p>
                </div>
              </div>
              <div className="peoples-cards-col">
                {PEOPLES.map((p) => (
                  <div key={p.name} className="people-card" style={{ borderLeftColor: p.color }}>
                    <div className="people-card-header">
                      <span className="people-name" style={{ color: p.color }}>{p.name}</span>
                      <span className="people-region">{p.region}</span>
                    </div>
                    <p className="people-costume">👗 {p.costume}</p>
                    <p className="people-doll-fact">🪆 {p.dollFact}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 6 — ЗНАЧЕНИЕ */}
        {current === 6 && (
          <div className="slide slide-meaning animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">05</p>
              <h2 className="slide-title">Культурное значение</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="meaning-content">
              <div className="symbols-grid">
                <div className="symbol-card">
                  <div className="symbol-icon">🌾</div>
                  <h3>Связь с природой</h3>
                  <p>Лыко — живой материал земли. Работая с ним, мы учимся беречь природу и понимать её мудрость.</p>
                </div>
                <div className="symbol-card">
                  <div className="symbol-icon">👨‍👩‍👧</div>
                  <h3>Семейные традиции</h3>
                  <p>Народная кукла — символ дома, семьи и преемственности поколений. Это нить из прошлого в будущее.</p>
                </div>
                <div className="symbol-card">
                  <div className="symbol-icon">🇷🇺</div>
                  <h3>Народное единство</h3>
                  <p>Ремёсла объединяли все народы нашей страны. Общий труд и общие традиции — основа единой России.</p>
                </div>
                <div className="symbol-card">
                  <div className="symbol-icon">✋</div>
                  <h3>Живая культура</h3>
                  <p>Когда мы создаём куклу своими руками, традиция оживает. Каждый из нас становится хранителем культуры.</p>
                </div>
              </div>
              <div className="final-banner">
                <div className="final-banner-inner">
                  <div className="final-banner-text">
                    <div className="banner-ornament">✦ ✦ ✦</div>
                    <h3 className="banner-title">Мы — хранители традиций!</h3>
                    <p className="banner-text">
                      Создавая народную куклу, каждый ученик прикасается к многовековой истории России,
                      вносит свой вклад в сохранение живого культурного наследия нашей страны.
                    </p>
                    <div className="banner-flags">
                      <div className="rf-flag-lg" aria-label="Флаг России">
                        <div className="rf-flag-white"/>
                        <div className="rf-flag-blue"/>
                        <div className="rf-flag-red"/>
                      </div>
                      <span className="banner-flag-label">Россия — многонациональная страна</span>
                    </div>
                    <div className="banner-ornament">✦ ✦ ✦</div>
                  </div>
                  <div className="final-banner-img-wrap">
                    <img src={PEOPLES_IMG} alt="Народы России" className="final-banner-img"/>
                    <div className="final-banner-img-caption">Народы России в национальных костюмах</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 7 — ЦИФРОВОЙ ОБЕРЕГ */}
        {current === 7 && (
          <div className="slide slide-infosec animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">07</p>
              <h2 className="slide-title">Цифровой оберег</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="infosec-intro-layout">
              <div className="infosec-left">
                <div className="infosec-metaphor-box">
                  <div className="infosec-metaphor-icon">🪆</div>
                  <div>
                    <h3 className="infosec-metaphor-title">Кукла — оберег дома.<br/>Знания — оберег в цифровом мире.</h3>
                    <p className="infosec-metaphor-text">
                      Наши предки создавали куклу-оберег, чтобы защитить дом от бед. В современном мире
                      у каждого из нас есть цифровой дом — компьютер, телефон, аккаунты в сети.
                      И этот дом тоже нуждается в защите.
                    </p>
                  </div>
                </div>
                <div className="infosec-definition">
                  <h3 className="infosec-def-title">Что такое информационная безопасность?</h3>
                  <p className="infosec-def-text">
                    Это защита информации и цифровых устройств от несанкционированного доступа,
                    кражи, уничтожения и других угроз. Так же, как народная кукла охраняла дом,
                    знания об инфобезопасности охраняют наши данные.
                  </p>
                </div>
                <div className="infosec-stats-row">
                  <div className="infosec-stat">
                    <span className="infosec-stat-num">190+</span>
                    <span className="infosec-stat-label">народов в России — все нуждаются в защите данных</span>
                  </div>
                  <div className="infosec-stat">
                    <span className="infosec-stat-num">80%</span>
                    <span className="infosec-stat-label">кибератак можно предотвратить базовыми знаниями</span>
                  </div>
                  <div className="infosec-stat">
                    <span className="infosec-stat-num">2000</span>
                    <span className="infosec-stat-label">лет назад появился первый оберег — сегодня он цифровой</span>
                  </div>
                </div>
              </div>
              <div className="infosec-right">
                <div className="infosec-pillars">
                  <h3 className="infosec-pillars-title">Три кита инфобезопасности</h3>
                  {[
                    { icon: "🔒", title: "Конфиденциальность", desc: "Информация доступна только тем, кому разрешено. Как секрет плетения куклы, который хранили в семье." },
                    { icon: "🛡️", title: "Целостность", desc: "Данные не изменяются без разрешения. Как узор на кукле — каждая нить на своём месте." },
                    { icon: "🌐", title: "Доступность", desc: "Нужная информация всегда доступна законному пользователю. Как знания о ремесле — они должны передаваться дальше." },
                  ].map((item) => (
                    <div key={item.title} className="infosec-pillar-card">
                      <div className="infosec-pillar-icon">{item.icon}</div>
                      <div>
                        <h4 className="infosec-pillar-title">{item.title}</h4>
                        <p className="infosec-pillar-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 8 — УГРОЗЫ В СЕТИ */}
        {current === 8 && (
          <div className="slide slide-threats animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">08</p>
              <h2 className="slide-title">Угрозы в сети</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="threats-intro">
              <p className="threats-lead">
                Как злые духи в народных сказаниях угрожали дому, так и в цифровом мире существуют
                реальные угрозы, которые важно знать и уметь распознавать.
              </p>
            </div>
            <div className="threats-grid">
              {[
                { icon: "🎣", name: "Фишинг", level: "Высокий риск", color: "#8B1A1A", desc: "Мошенники притворяются знакомыми сайтами или людьми, чтобы выманить пароли и данные карты. Как лиса из сказки — говорит ласково, а сама хитрит.", signs: "Подозрительные ссылки, просьбы ввести пароль, странный адрес сайта" },
                { icon: "🦠", name: "Вирусы и вредоносные программы", level: "Высокий риск", color: "#8B1A1A", desc: "Программы, которые тайно проникают в устройство и воруют данные или блокируют его работу. Невидимый враг, как в народных поверьях.", signs: "Медленная работа, странные сообщения, самопроизвольные действия" },
                { icon: "🕵️", name: "Слежка и шпионаж", level: "Средний риск", color: "#8B5A00", desc: "Сбор данных о пользователе без его ведома — история поиска, геолокация, переписка. Как недобрый сосед, подглядывающий в щёлку.", signs: "Незнакомые приложения, странный расход батареи, доступ к камере" },
                { icon: "💣", name: "DDoS-атаки", level: "Средний риск", color: "#8B5A00", desc: "Перегрузка сервиса тысячами запросов, чтобы он перестал работать. Как нашествие вредителей на урожай — всё разом сминают.", signs: "Сайт недоступен, очень медленная загрузка, сбои в работе сервисов" },
                { icon: "🎭", name: "Социальная инженерия", level: "Высокий риск", color: "#8B1A1A", desc: "Манипуляции с людьми, чтобы они сами раскрыли секретную информацию. Хитрее любого вируса — бьёт по доверию.", signs: "Срочные просьбы, давление, слишком выгодные предложения" },
                { icon: "🔓", name: "Слабые пароли", level: "Легко исправить", color: "#2D5016", desc: "Простые пароли — открытые ворота для злоумышленников. Как замок без засова: знай — войдут. Народная мудрость: «береги честь смолоду».", signs: "Пароль «12345», имя или дата рождения, один пароль на все сервисы" },
              ].map((t) => (
                <div key={t.name} className="threat-card" style={{ borderTopColor: t.color }}>
                  <div className="threat-card-header">
                    <span className="threat-icon">{t.icon}</span>
                    <div>
                      <h3 className="threat-name">{t.name}</h3>
                      <span className="threat-level" style={{ color: t.color }}>⚠ {t.level}</span>
                    </div>
                  </div>
                  <p className="threat-desc">{t.desc}</p>
                  <div className="threat-signs">
                    <span className="threat-signs-label">Признаки:</span> {t.signs}
                  </div>
                </div>
              ))}
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

        {/* СЛАЙД 9 — ПРАВИЛА ЗАЩИТЫ */}
        {current === 9 && (
          <div className="slide slide-protection animate-slide-in">
            <div className="slide-border-top"/>
            <div className="slide-header-block">
              <p className="slide-number">09</p>
              <h2 className="slide-title">Правила защиты</h2>
              <div className="divider-folk"><span>✦</span><span className="divider-line"/><span>✦</span></div>
            </div>
            <div className="protection-layout">
              <div className="protection-rules">
                {[
                  { num: "1", icon: "🔑", title: "Надёжные пароли", rule: "Создавай длинные пароли из букв, цифр и символов. Разные пароли для разных сервисов. Используй менеджер паролей.", folk: "Как у куклы — каждый узел на своём месте, ни один нельзя пропустить." },
                  { num: "2", icon: "🔄", title: "Обновляй программы", rule: "Регулярно обновляй операционную систему и приложения. В обновлениях закрываются дыры безопасности.", folk: "Как мастер подновляет куклу — поправляет нити, чтобы она служила долго." },
                  { num: "3", icon: "🧐", title: "Проверяй источники", rule: "Не переходи по подозрительным ссылкам. Проверяй адрес сайта. Не открывай вложения от неизвестных.", folk: "Народная мудрость: «Не всё то золото, что блестит» — и в сети тоже." },
                  { num: "4", icon: "🛡️", title: "Антивирус и файрвол", rule: "Установи надёжный антивирус и не отключай файрвол. Это цифровая стена-защитница твоего устройства.", folk: "Как оберег-кукла у порога — стоит на страже и не пускает злое." },
                  { num: "5", icon: "🤫", title: "Не делись лишним", rule: "Не публикуй адрес, телефон, данные паспорта в открытом доступе. Личное — остаётся личным.", folk: "Мастера хранили секреты ремесла в семье — так и данные береги в кругу доверенных." },
                  { num: "6", icon: "💾", title: "Делай резервные копии", rule: "Регулярно сохраняй важные файлы на внешнем носителе или в надёжном облаке.", folk: "Как передача мастерства из поколения в поколение — чтобы знание не пропало." },
                ].map((r) => (
                  <div key={r.num} className="protection-card">
                    <div className="protection-card-left">
                      <div className="protection-num">{r.num}</div>
                      <div className="protection-icon">{r.icon}</div>
                    </div>
                    <div className="protection-card-right">
                      <h3 className="protection-title">{r.title}</h3>
                      <p className="protection-rule">{r.rule}</p>
                      <p className="protection-folk">✦ {r.folk}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="protection-final">
                <div className="banner-ornament" style={{ color: "var(--folk-gold)" }}>✦ ✦ ✦</div>
                <div className="protection-final-icon">🪆🔒</div>
                <h3 className="protection-final-title">Народная кукла и цифровой оберег</h3>
                <p className="protection-final-text">
                  Наши предки защищали дом куклой-оберегом, вложив в неё мудрость и любовь.
                  Мы защищаем цифровой мир знаниями и бережным отношением к информации.
                  <br/><br/>
                  <strong>Единство народов России — в общих ценностях: доверии, заботе и ответственности.</strong>
                  И в реальном, и в цифровом мире.
                </p>
                <div className="protection-flags">
                  <div className="rf-flag-lg">
                    <div className="rf-flag-white"/>
                    <div className="rf-flag-blue"/>
                    <div className="rf-flag-red"/>
                  </div>
                  <span style={{ color: "var(--folk-gold-light)", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "14px" }}>
                    Россия — безопасная и единая страна
                  </span>
                </div>
                <div className="banner-ornament" style={{ color: "var(--folk-gold)" }}>✦ ✦ ✦</div>
              </div>
            </div>
            <div className="slide-border-bottom"/>
          </div>
        )}

      </main>

      {/* Нижняя навигация */}
      <footer className="pres-footer">
        <button
          className="nav-btn"
          onClick={prev}
          disabled={current === 0}
        >
          ← Назад
        </button>
        <div className="slide-counter">
          {current + 1} / {slides.length}
        </div>
        <button
          className="nav-btn"
          onClick={next}
          disabled={current === slides.length - 1}
        >
          Вперёд →
        </button>
      </footer>
    </div>
  );
}