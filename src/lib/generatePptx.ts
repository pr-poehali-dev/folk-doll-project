import pptxgen from "pptxgenjs";

const CRIMSON = "8B1A1A";
const GOLD = "C8860A";
const GOLD_LIGHT = "E8A820";
const CREAM = "F5EDD8";
const CREAM_DARK = "EDE0C0";
const BROWN = "4A2C0A";
const BROWN_MID = "7A4A1A";
const WHITE = "FFFFFF";
const RF_BLUE = "003DA5";
const RF_RED = "CC0000";

const DOLL_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/4c3688ec-ab56-48c4-af21-db0dc79b878f.jpg";
const MATERIALS_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/aec4ec33-2922-432a-8e88-6484145c9ae5.jpg";
const GALLERY_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/36cdff6d-f1d8-4e0e-9117-ff58122d783e.jpg";
const PEOPLES_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/8c12a248-1111-4844-bf9e-75e6dd025fb8.jpg";
const COSTUMES_IMG = "https://cdn.poehali.dev/projects/65662e75-10e8-4905-861c-946e0cb35e0d/files/13bfaed5-752a-4593-afcd-301c7d7b518c.jpg";

function addBackground(slide: pptxgen.Slide) {
  slide.background = { color: "FBF4E3" };
}

function addRfFlag(slide: pptxgen.Slide, x: number, y: number, w = 0.6, h = 0.4) {
  const stripe = h / 3;
  slide.addShape("rect", { x, y, w, h: stripe, fill: { color: WHITE }, line: { color: "CCCCCC", width: 0.3 } });
  slide.addShape("rect", { x, y: y + stripe, w, h: stripe, fill: { color: RF_BLUE }, line: { color: RF_BLUE, width: 0 } });
  slide.addShape("rect", { x, y: y + stripe * 2, w, h: stripe, fill: { color: RF_RED }, line: { color: RF_RED, width: 0 } });
}

function addGoldDivider(slide: pptxgen.Slide, y: number) {
  slide.addShape("line", { x: 1.5, y, w: 7, h: 0, line: { color: GOLD, width: 1.5 } });
  slide.addText("✦", { x: 4.6, y: y - 0.12, w: 0.3, h: 0.25, fontSize: 10, color: GOLD, align: "center" });
}

function addHeader(slide: pptxgen.Slide) {
  slide.addShape("rect", { x: 0, y: 0, w: 10, h: 0.55, fill: { color: CRIMSON } });
  slide.addShape("rect", { x: 0, y: 0.55, w: 10, h: 0.04, fill: { color: GOLD } });
  addRfFlag(slide, 0.2, 0.07, 0.55, 0.37);
  addRfFlag(slide, 9.25, 0.07, 0.55, 0.37);
  slide.addText("ГОД НАРОДНОГО ЕДИНСТВА", { x: 1, y: 0.1, w: 8, h: 0.22, fontSize: 11, bold: true, color: GOLD_LIGHT, align: "center", charSpacing: 3 });
  slide.addText("Народы России — единая семья", { x: 1, y: 0.32, w: 8, h: 0.18, fontSize: 9, color: CREAM, align: "center", italic: true });
}

function addFooterLine(slide: pptxgen.Slide) {
  slide.addShape("rect", { x: 0, y: 7.12, w: 10, h: 0.04, fill: { color: GOLD } });
  slide.addShape("rect", { x: 0, y: 7.16, w: 10, h: 0.34, fill: { color: CREAM_DARK } });
}

function addSlideTitle(slide: pptxgen.Slide, num: string, title: string) {
  slide.addText(num, { x: 0.4, y: 0.65, w: 9.2, h: 0.45, fontSize: 30, color: GOLD, align: "center", bold: false, transparency: 60 });
  slide.addText(title, { x: 0.4, y: 0.95, w: 9.2, h: 0.5, fontSize: 28, bold: true, color: CRIMSON, align: "center" });
  addGoldDivider(slide, 1.52);
}

export async function generatePptx() {
  const prs = new pptxgen();
  prs.layout = "LAYOUT_WIDE";
  prs.title = "Кукла из липового лыка — народное ремесло";
  prs.subject = "Мастер-класс для начальной школы. Год народного единства.";

  // ─── СЛАЙД 1: ВВЕДЕНИЕ ───────────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    s.addText("Мастер-класс для учеников начальной школы", {
      x: 0.5, y: 0.7, w: 5, h: 0.3, fontSize: 10, color: BROWN_MID, bold: true, charSpacing: 2,
    });
    s.addText("Кукла", { x: 0.5, y: 1.0, w: 5, h: 0.65, fontSize: 52, bold: true, color: CRIMSON });
    s.addText("из липового", { x: 0.5, y: 1.62, w: 5, h: 0.55, fontSize: 42, italic: true, color: BROWN_MID });
    s.addText("лыка", { x: 0.5, y: 2.14, w: 5, h: 0.65, fontSize: 52, bold: true, color: CRIMSON });
    addGoldDivider(s, 2.88);
    s.addText("Народное ремесло как живая нить между поколениями.\nПрикоснись к мудрости предков — свяжи собственную куклу-оберег.", {
      x: 0.5, y: 3.0, w: 4.8, h: 0.8, fontSize: 13, color: BROWN, lineSpacingMultiple: 1.4,
    });
    s.addShape("rect", { x: 0.5, y: 3.9, w: 4.8, h: 0.55, fill: { color: CRIMSON } });
    s.addShape("rect", { x: 0.5, y: 3.9, w: 0.08, h: 0.55, fill: { color: GOLD } });
    s.addText("🤝  Народное единство — в традициях и ремёслах", {
      x: 0.7, y: 3.95, w: 4.5, h: 0.44, fontSize: 12, color: CREAM, bold: true,
    });
    s.addImage({ path: DOLL_IMG, x: 5.6, y: 0.75, w: 3.9, h: 3.9 });
    s.addShape("rect", { x: 5.55, y: 0.7, w: 4, h: 4, fill: { type: "none" }, line: { color: GOLD, width: 1.5 } });
  }

  // ─── СЛАЙД 2: ИСТОРИЯ ────────────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "01", "История ремесла");
    const cards = [
      { icon: "🌿", title: "Древние корни", text: "Куклы из лыка появились на Руси более 2000 лет назад. Липовое лыко — кора молодой липы — было доступно каждой семье." },
      { icon: "🏠", title: "Семейное дело", text: "Куклу делали сообща — бабушки, матери, дети. Передавая умения из рук в руки, хранили память о предках." },
      { icon: "🛡️", title: "Кукла-оберег", text: "Народная кукла — это не игрушка, а защитница дома. В неё вкладывали добрые пожелания, дарили на свадьбу." },
      { icon: "🇷🇺", title: "Единство народов", text: "Традиция плетения кукол объединяла разные народы России — от мещёрских лесов до сибирских просторов." },
    ];
    cards.forEach((c, i) => {
      const x = i % 2 === 0 ? 0.4 : 5.2;
      const y = i < 2 ? 1.7 : 4.1;
      s.addShape("rect", { x, y, w: 4.5, h: 2.2, fill: { color: CREAM }, line: { color: GOLD, width: 0.8 } });
      s.addShape("rect", { x, y, w: 4.5, h: 0.08, fill: { color: CRIMSON } });
      s.addText(c.icon, { x: x + 0.15, y: y + 0.2, w: 0.6, h: 0.6, fontSize: 26 });
      s.addText(c.title, { x: x + 0.2, y: y + 0.85, w: 4.1, h: 0.35, fontSize: 16, bold: true, color: CRIMSON });
      s.addText(c.text, { x: x + 0.2, y: y + 1.2, w: 4.1, h: 0.85, fontSize: 12, color: BROWN, lineSpacingMultiple: 1.35 });
    });
  }

  // ─── СЛАЙД 3: МАТЕРИАЛЫ ──────────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "02", "Материалы и инструменты");
    s.addImage({ path: MATERIALS_IMG, x: 0.4, y: 1.7, w: 3.5, h: 3.5 });
    s.addShape("rect", { x: 0.35, y: 1.65, w: 3.6, h: 3.6, fill: { type: "none" }, line: { color: GOLD, width: 1.5 } });
    const matTitle = (text: string, y: number) =>
      s.addText(text, { x: 4.2, y, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: CRIMSON });
    const matItem = (text: string, y: number) =>
      s.addText("◆  " + text, { x: 4.3, y, w: 5.3, h: 0.3, fontSize: 12, color: BROWN });

    matTitle("🌳 Основные материалы", 1.72);
    matItem("Липовое лыко — полоски коры шириной 1–2 см", 2.08);
    matItem("Льняные нити — для связывания частей куклы", 2.38);
    matItem("Лоскут ткани — для наряда (ситец, холст)", 2.68);
    matItem("Солома или вата — для набивки тела", 2.98);

    matTitle("🔧 Инструменты", 3.35);
    matItem("Ножницы, шило или игла, тазик с водой", 3.72);
    matItem("Прищепки — для фиксации при сушке", 4.02);

    s.addShape("rect", { x: 4.2, y: 4.45, w: 5.4, h: 0.8, fill: { color: "FFF8E8" }, line: { color: GOLD, width: 0.8 } });
    s.addText("💡  Лыко нужно замочить в тёплой воде на 20–30 минут перед работой — тогда оно станет гибким!", {
      x: 4.35, y: 4.52, w: 5.1, h: 0.65, fontSize: 11.5, color: BROWN, lineSpacingMultiple: 1.35,
    });
  }

  // ─── СЛАЙД 4: МАСТЕР-КЛАСС ───────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "03", "Пошаговая инструкция");
    const steps = [
      { n: "1", icon: "💧", title: "Подготовка лыка", text: "Замочите полоски в тёплой воде 20–30 мин. Отберите ровные полоски — они должны легко гнуться." },
      { n: "2", icon: "⭕", title: "Формирование головы", text: "Сложите пучок пополам. Место сгиба туго обмотайте нитью — это шея. Верх формирует голову." },
      { n: "3", icon: "🤲", title: "Руки куклы", text: "Отдельный пучок лыка сложите вдвое — это руки. Вставьте под шеей и зафиксируйте нитью." },
      { n: "4", icon: "🧶", title: "Туловище и косы", text: "Нижнюю часть разделите на пряди. Заплетите косичку или перетяните нитью для юбки." },
      { n: "5", icon: "🎀", title: "Наряд куклы", text: "Нарядите в лоскут ткани, пояском обвяжите талию. Можно вышить красным узором по рубашке." },
      { n: "6", icon: "✨", title: "Сушка и оберег", text: "Дайте высохнуть 2–3 часа. Готового оберега можно подарить близким или повесить у порога." },
    ];
    steps.forEach((st, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 0.3 + col * 3.22;
      const y = 1.72 + row * 2.65;
      s.addShape("rect", { x, y, w: 3.05, h: 2.45, fill: { color: CREAM }, line: { color: CREAM_DARK, width: 0.8 } });
      s.addShape("rect", { x, y, w: 3.05, h: 0.06, fill: { color: CRIMSON } });
      s.addShape("rect", { x: x + 0.15, y: y + 0.2, w: 0.45, h: 0.45, fill: { color: CRIMSON } });
      s.addText(st.n, { x: x + 0.15, y: y + 0.2, w: 0.45, h: 0.45, fontSize: 16, bold: true, color: CREAM, align: "center", valign: "middle" });
      s.addText(st.icon, { x: x + 2.4, y: y + 0.2, w: 0.5, h: 0.45, fontSize: 20, align: "center" });
      s.addText(st.title, { x: x + 0.15, y: y + 0.75, w: 2.8, h: 0.35, fontSize: 13.5, bold: true, color: CRIMSON });
      s.addText(st.text, { x: x + 0.15, y: y + 1.12, w: 2.8, h: 1.2, fontSize: 11, color: BROWN, lineSpacingMultiple: 1.35 });
    });
  }

  // ─── СЛАЙД 5: ГАЛЕРЕЯ ────────────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "04", "Галерея работ");
    s.addImage({ path: GALLERY_IMG, x: 0.4, y: 1.72, w: 5.5, h: 3.5 });
    s.addShape("rect", { x: 0.35, y: 1.67, w: 5.6, h: 3.6, fill: { type: "none" }, line: { color: GOLD, width: 1.5 } });
    s.addText("Традиционные народные куклы России", { x: 0.35, y: 5.3, w: 5.6, h: 0.3, fontSize: 10, italic: true, color: BROWN_MID, align: "center" });
    s.addImage({ path: DOLL_IMG, x: 6.2, y: 1.72, w: 3.4, h: 1.9 });
    s.addShape("rect", { x: 6.15, y: 1.67, w: 3.5, h: 1.95, fill: { type: "none" }, line: { color: GOLD, width: 1 } });
    s.addImage({ path: MATERIALS_IMG, x: 6.2, y: 3.75, w: 3.4, h: 1.45 });
    s.addShape("rect", { x: 6.15, y: 3.7, w: 3.5, h: 1.5, fill: { type: "none" }, line: { color: GOLD, width: 1 } });
    s.addShape("rect", { x: 6.15, y: 5.28, w: 3.5, h: 0.88, fill: { color: CRIMSON }, line: { color: GOLD, width: 1 } });
    s.addShape("rect", { x: 6.15, y: 5.28, w: 0.08, h: 0.88, fill: { color: GOLD } });
    s.addText("«В каждой кукле — душа мастера\nи любовь к родной земле»", {
      x: 6.3, y: 5.32, w: 3.25, h: 0.8, fontSize: 11, italic: true, color: CREAM, lineSpacingMultiple: 1.3,
    });
  }

  // ─── СЛАЙД 6: НАРОДЫ РОССИИ ──────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "05", "Народы России");
    s.addImage({ path: PEOPLES_IMG, x: 0.4, y: 1.72, w: 3.0, h: 2.1 });
    s.addShape("rect", { x: 0.35, y: 1.67, w: 3.1, h: 2.15, fill: { type: "none" }, line: { color: GOLD, width: 1.2 } });
    s.addImage({ path: COSTUMES_IMG, x: 0.4, y: 3.95, w: 3.0, h: 1.8 });
    s.addShape("rect", { x: 0.35, y: 3.9, w: 3.1, h: 1.85, fill: { type: "none" }, line: { color: GOLD, width: 1.2 } });
    s.addShape("rect", { x: 0.35, y: 5.85, w: 3.1, h: 0.75, fill: { color: CRIMSON }, line: { color: GOLD, width: 1 } });
    addRfFlag(s, 0.48, 5.95, 0.5, 0.33);
    s.addText("В России — более 190 народов!\nВсе вместе создают великую страну.", {
      x: 1.1, y: 5.9, w: 2.25, h: 0.65, fontSize: 9.5, color: CREAM, lineSpacingMultiple: 1.3,
    });
    const peoples = [
      { name: "Русские", region: "Центральная Россия", fact: "Кукла без лица и без узлов — традиция русского оберега" },
      { name: "Татары", region: "Татарстан, Поволжье", fact: "Плели кукол из камыша, дарили на Навруз" },
      { name: "Башкиры", region: "Республика Башкортостан", fact: "Куклу из берёзового лыка вешали у колыбели" },
      { name: "Чуваши", region: "Чувашская Республика", fact: "Кукла из льна хранит тепло домашнего очага" },
      { name: "Якуты", region: "Республика Саха", fact: "Куклы из берёсты и меха — защита от духов тайги" },
      { name: "Буряты", region: "Бурятия, Забайкалье", fact: "Куклу-«эхэ» бабушка дарила внучке при рождении" },
      { name: "Чеченцы", region: "Чеченская Республика", fact: "На свадьбу невеста дарила жениху куклу своих рук" },
      { name: "Мордва", region: "Республика Мордовия", fact: "Куклу из крапивы клали в колыбель до рождения ребёнка" },
    ];
    peoples.forEach((p, i) => {
      const y = 1.72 + i * 0.62;
      s.addShape("rect", { x: 3.65, y, w: 6.0, h: 0.56, fill: { color: CREAM }, line: { color: CREAM_DARK, width: 0.5 } });
      s.addShape("rect", { x: 3.65, y, w: 0.06, h: 0.56, fill: { color: CRIMSON } });
      s.addText(p.name, { x: 3.8, y: y + 0.04, w: 1.5, h: 0.24, fontSize: 13, bold: true, color: CRIMSON });
      s.addText(p.region, { x: 5.35, y: y + 0.04, w: 2.2, h: 0.24, fontSize: 9, italic: true, color: BROWN_MID, align: "right" });
      s.addText("🪆 " + p.fact, { x: 3.8, y: y + 0.28, w: 5.7, h: 0.22, fontSize: 10, italic: true, color: BROWN_MID });
    });
  }

  // ─── СЛАЙД 7: ЗНАЧЕНИЕ ───────────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "06", "Культурное значение");
    const symbols = [
      { icon: "🌾", title: "Связь с природой", text: "Лыко — живой материал земли. Работая с ним, мы учимся беречь природу и понимать её мудрость." },
      { icon: "👨‍👩‍👧", title: "Семейные традиции", text: "Народная кукла — символ дома, семьи и преемственности поколений. Это нить из прошлого в будущее." },
      { icon: "🇷🇺", title: "Народное единство", text: "Ремёсла объединяли все народы нашей страны. Общий труд и общие традиции — основа единой России." },
      { icon: "✋", title: "Живая культура", text: "Когда мы создаём куклу своими руками, традиция оживает. Каждый из нас — хранитель культуры." },
    ];
    symbols.forEach((sym, i) => {
      const x = 0.3 + i * 2.37;
      s.addShape("rect", { x, y: 1.72, w: 2.2, h: 2.5, fill: { color: CREAM }, line: { color: CREAM_DARK, width: 0.8 } });
      s.addShape("rect", { x, y: 4.22, w: 2.2, h: 0.06, fill: { color: CRIMSON } });
      s.addText(sym.icon, { x: x + 0.2, y: 1.85, w: 1.8, h: 0.6, fontSize: 30, align: "center" });
      s.addText(sym.title, { x: x + 0.15, y: 2.55, w: 1.9, h: 0.4, fontSize: 13.5, bold: true, color: CRIMSON, align: "center" });
      s.addText(sym.text, { x: x + 0.15, y: 3.0, w: 1.9, h: 1.15, fontSize: 11, color: BROWN, lineSpacingMultiple: 1.35, align: "center" });
    });
    s.addShape("rect", { x: 0.3, y: 4.42, w: 9.4, h: 1.65, fill: { color: CRIMSON }, line: { color: GOLD, width: 1.5 } });
    s.addShape("rect", { x: 0.42, y: 4.54, w: 9.16, h: 1.41, fill: { type: "none" }, line: { color: GOLD + "66", width: 0.8 } });
    s.addText("✦  Мы — хранители традиций!  ✦", { x: 0.5, y: 4.52, w: 9.1, h: 0.45, fontSize: 20, bold: true, color: GOLD_LIGHT, align: "center" });
    s.addText("Создавая народную куклу, каждый ученик прикасается к многовековой истории России.", {
      x: 0.8, y: 4.98, w: 8.4, h: 0.55, fontSize: 12.5, color: CREAM, align: "center", lineSpacingMultiple: 1.35,
    });
    addRfFlag(s, 4.7, 5.55, 0.6, 0.4);
  }

  // ─── СЛАЙД 8: ЦИФРОВОЙ ОБЕРЕГ ────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "07", "Цифровой оберег");
    s.addShape("rect", { x: 0.3, y: 1.72, w: 5.3, h: 1.5, fill: { color: CRIMSON }, line: { color: GOLD, width: 1.2 } });
    s.addText("🪆", { x: 0.45, y: 1.82, w: 0.8, h: 0.8, fontSize: 38 });
    s.addText("Кукла — оберег дома.\nЗнания — оберег в цифровом мире.", {
      x: 1.3, y: 1.82, w: 4.1, h: 0.6, fontSize: 14, bold: true, color: GOLD_LIGHT, lineSpacingMultiple: 1.3,
    });
    s.addText("Наши предки создавали куклу-оберег, чтобы защитить дом.\nСегодня наш цифровой дом тоже нуждается в защите.", {
      x: 1.3, y: 2.42, w: 4.1, h: 0.65, fontSize: 11, color: CREAM, lineSpacingMultiple: 1.3,
    });
    s.addShape("rect", { x: 0.3, y: 3.32, w: 5.3, h: 1.5, fill: { color: CREAM }, line: { color: CREAM_DARK, width: 0.8 } });
    s.addShape("rect", { x: 0.3, y: 3.32, w: 0.07, h: 1.5, fill: { color: GOLD } });
    s.addText("Что такое информационная безопасность?", { x: 0.5, y: 3.4, w: 5.0, h: 0.35, fontSize: 14, bold: true, color: CRIMSON });
    s.addText("Это защита информации и цифровых устройств от несанкционированного\nдоступа, кражи и других угроз. Так же, как народная кукла охраняла дом,\nзнания об инфобезопасности охраняют наши данные.", {
      x: 0.5, y: 3.78, w: 5.0, h: 0.95, fontSize: 11.5, color: BROWN, lineSpacingMultiple: 1.35,
    });
    const pillars = [
      { icon: "🔒", title: "Конфиденциальность", text: "Информация доступна только тем, кому разрешено — как секрет плетения куклы в семье." },
      { icon: "🛡️", title: "Целостность", text: "Данные не изменяются без разрешения — как узор на кукле, каждая нить на месте." },
      { icon: "🌐", title: "Доступность", text: "Нужная информация доступна законному пользователю — как знания о ремесле передаются дальше." },
    ];
    pillars.forEach((p, i) => {
      const y = 1.72 + i * 1.82;
      s.addShape("rect", { x: 5.9, y, w: 3.8, h: 1.65, fill: { color: CREAM }, line: { color: CREAM_DARK, width: 0.8 } });
      s.addShape("rect", { x: 5.9, y, w: 3.8, h: 0.07, fill: { color: GOLD } });
      s.addText(p.icon, { x: 6.0, y: y + 0.15, w: 0.55, h: 0.55, fontSize: 24 });
      s.addText(p.title, { x: 6.6, y: y + 0.18, w: 2.95, h: 0.32, fontSize: 13.5, bold: true, color: CRIMSON });
      s.addText(p.text, { x: 6.0, y: y + 0.58, w: 3.55, h: 0.95, fontSize: 11, color: BROWN, lineSpacingMultiple: 1.35 });
    });
  }

  // ─── СЛАЙД 9: УГРОЗЫ В СЕТИ ──────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "08", "Угрозы в сети");
    s.addShape("rect", { x: 0.3, y: 1.67, w: 9.4, h: 0.45, fill: { color: CREAM }, line: { color: GOLD, width: 0.8 } });
    s.addShape("rect", { x: 0.3, y: 1.67, w: 0.07, h: 0.45, fill: { color: GOLD } });
    s.addShape("rect", { x: 9.63, y: 1.67, w: 0.07, h: 0.45, fill: { color: GOLD } });
    s.addText("Как злые духи в народных сказаниях угрожали дому, так и в цифровом мире существуют реальные угрозы.", {
      x: 0.5, y: 1.72, w: 9.1, h: 0.35, fontSize: 11.5, italic: true, color: BROWN_MID, align: "center",
    });
    const threats = [
      { icon: "🎣", name: "Фишинг", level: "Высокий риск", color: CRIMSON, text: "Мошенники притворяются знакомыми сайтами, чтобы выманить пароли. Как лиса из сказки — говорит ласково, а сама хитрит." },
      { icon: "🦠", name: "Вирусы", level: "Высокий риск", color: CRIMSON, text: "Программы, которые тайно воруют данные или блокируют устройство. Невидимый враг, как в народных поверьях." },
      { icon: "🕵️", name: "Слежка", level: "Средний риск", color: "8B5A00", text: "Сбор данных без ведома пользователя — история поиска, геолокация, переписка." },
      { icon: "💣", name: "DDoS-атаки", level: "Средний риск", color: "8B5A00", text: "Перегрузка сервиса тысячами запросов. Как нашествие вредителей на урожай — всё сминают разом." },
      { icon: "🎭", name: "Соц. инженерия", level: "Высокий риск", color: CRIMSON, text: "Манипуляции людьми, чтобы они сами раскрыли секреты. Хитрее любого вируса — бьёт по доверию." },
      { icon: "🔓", name: "Слабые пароли", level: "Легко исправить", color: "2D5016", text: "Простые пароли — открытые ворота. Народная мудрость: «береги честь смолоду» — и пароль тоже." },
    ];
    threats.forEach((t, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 0.3 + col * 3.22;
      const y = 2.22 + row * 2.42;
      s.addShape("rect", { x, y, w: 3.05, h: 2.25, fill: { color: CREAM }, line: { color: CREAM_DARK, width: 0.8 } });
      s.addShape("rect", { x, y, w: 3.05, h: 0.07, fill: { color: t.color } });
      s.addText(t.icon, { x: x + 0.15, y: y + 0.18, w: 0.55, h: 0.55, fontSize: 26 });
      s.addText(t.name, { x: x + 0.75, y: y + 0.18, w: 2.15, h: 0.32, fontSize: 14, bold: true, color: BROWN });
      s.addText("⚠ " + t.level, { x: x + 0.75, y: y + 0.5, w: 2.15, h: 0.22, fontSize: 10, color: t.color, bold: true });
      s.addText(t.text, { x: x + 0.15, y: y + 0.78, w: 2.8, h: 1.1, fontSize: 11, color: BROWN, lineSpacingMultiple: 1.3 });
    });
  }

  // ─── СЛАЙД 10: ПРАВИЛА ЗАЩИТЫ ────────────────────────────────────────
  {
    const s = prs.addSlide();
    addBackground(s);
    addHeader(s);
    addFooterLine(s);
    addSlideTitle(s, "09", "Правила защиты");
    const rules = [
      { n: "1", icon: "🔑", title: "Надёжные пароли", rule: "Длинные пароли из букв, цифр и символов. Разные для каждого сервиса.", folk: "Как у куклы — каждый узел на своём месте." },
      { n: "2", icon: "🔄", title: "Обновляй программы", rule: "Регулярно обновляй ОС и приложения — в обновлениях закрываются уязвимости.", folk: "Как мастер подновляет куклу, чтобы она служила долго." },
      { n: "3", icon: "🧐", title: "Проверяй источники", rule: "Не переходи по подозрительным ссылкам. Проверяй адрес сайта.", folk: "«Не всё то золото, что блестит» — и в сети тоже." },
      { n: "4", icon: "🛡️", title: "Антивирус", rule: "Установи надёжный антивирус и не отключай файрвол устройства.", folk: "Как оберег у порога — стоит на страже и не пускает злое." },
      { n: "5", icon: "🤫", title: "Береги личное", rule: "Не публикуй адрес, телефон, данные документов в открытом доступе.", folk: "Мастера хранили секреты ремесла в семье — так и данные." },
      { n: "6", icon: "💾", title: "Резервные копии", rule: "Регулярно сохраняй важные файлы на внешнем носителе или в облаке.", folk: "Как передача мастерства из поколения в поколение." },
    ];
    rules.forEach((r, i) => {
      const row = Math.floor(i / 2);
      const col = i % 2;
      const x = 0.3 + col * 4.85;
      const y = 1.72 + row * 1.75;
      s.addShape("rect", { x, y, w: 4.65, h: 1.58, fill: { color: CREAM }, line: { color: CREAM_DARK, width: 0.8 } });
      s.addShape("rect", { x, y, w: 4.65, h: 0.06, fill: { color: CRIMSON } });
      s.addShape("rect", { x: x + 0.12, y: y + 0.16, w: 0.38, h: 0.38, fill: { color: CRIMSON } });
      s.addText(r.n, { x: x + 0.12, y: y + 0.16, w: 0.38, h: 0.38, fontSize: 14, bold: true, color: CREAM, align: "center", valign: "middle" });
      s.addText(r.icon, { x: x + 0.55, y: y + 0.14, w: 0.45, h: 0.42, fontSize: 20 });
      s.addText(r.title, { x: x + 1.05, y: y + 0.18, w: 3.48, h: 0.3, fontSize: 13.5, bold: true, color: CRIMSON });
      s.addText(r.rule, { x: x + 0.18, y: y + 0.58, w: 4.3, h: 0.38, fontSize: 11, color: BROWN, lineSpacingMultiple: 1.3 });
      s.addText("✦ " + r.folk, { x: x + 0.18, y: y + 0.96, w: 4.3, h: 0.5, fontSize: 10.5, italic: true, color: BROWN_MID, lineSpacingMultiple: 1.3 });
    });
    s.addShape("rect", { x: 0.3, y: 6.98, w: 9.4, h: 0, line: { color: GOLD, width: 0.5 } });
  }

  prs.writeFile({ fileName: "Кукла-из-липового-лыка.pptx" });
}
