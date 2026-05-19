const dailyLesson = [
  {
    id: "reading",
    title: "1. Lezen - Huisarts",
    time: "05 min",
    text: "Beste mevrouw Bonenkamp, uw afspraak bij de huisarts is op dinsdag 19 mei om 09.20 uur. Neem uw identiteitsbewijs en uw medicijnlijst mee. Kunt u niet komen? Bel dan minimaal 24 uur van tevoren met de assistente.",
    questions: [
      "Wanneer is de afspraak?",
      "Wat moet u meenemen?",
      "Wat moet u doen als u niet kunt komen?"
    ],
    answer: "De afspraak is op dinsdag 19 mei om 09.20 uur.\nIk moet mijn identiteitsbewijs en mijn medicijnlijst meenemen.\nIk moet minimaal 24 uur van tevoren met de assistente bellen."
  },
  {
    id: "listening",
    title: "2. Luisteren - Fietsenmaker",
    time: "07 min",
    audio: "audio/2026-05-14_luisteren-fietsenmaker.mp3",
    text: "Luister eerst naar de audio. Lees de tekst pas na het luisteren.",
    questions: [
      "Wat is klaar?",
      "Hoeveel kost de reparatie?",
      "Wanneer kunt u de fiets ophalen?"
    ],
    answer: "Mijn fiets is klaar.\nDe reparatie kost vijfendertig euro.\nIk kan de fiets vandaag tot zes uur ophalen of morgen vanaf negen uur.\n\nLuistertekst: Goedemiddag mevrouw Bonenkamp. Uw fiets is klaar. De reparatie kost vijfendertig euro. U kunt de fiets vandaag tot zes uur ophalen of morgen vanaf negen uur."
  },
  {
    id: "writing",
    title: "3. Schrijven - E-mail aan school",
    time: "08 min",
    text: "Uw dochter heeft morgen een afspraak bij de tandarts. Zij komt een uur later op school. Schrijf een korte e-mail aan school. Zeg wie uw dochter is, waarom zij later komt en hoe laat zij komt.",
    writing: true,
    checklist: [
      "Heb ik een begroeting gebruikt?",
      "Heb ik de naam van mijn dochter genoemd?",
      "Heb ik gezegd waarom zij later komt?",
      "Heb ik gezegd hoe laat zij komt?",
      "Heb ik netjes afgesloten?"
    ],
    answer: "Beste meneer/mevrouw,\n\nMijn dochter Anna komt morgen een uur later op school. Zij heeft om 08.30 uur een afspraak bij de tandarts. Zij is rond 10.00 uur op school.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
  },
  {
    id: "speaking",
    title: "4. Spreken - Gezond eten en koken",
    time: "07 min",
    image: "images/2026-05-14_spreken-gezond-eten.jpg",
    imageAlt: "Boodschappen met groenten en vlees voor een spreekoefening over gezond eten",
    text: "Kijk naar de afbeelding en geef antwoord in eenvoudige Nederlandse zinnen.",
    questions: [
      "Wat ziet u op de foto?",
      "Wat kunt u met deze boodschappen koken?",
      "Kookt u doordeweeks vaak thuis?",
      "Wat eet u graag gezond?"
    ],
    answer: "Ik zie boodschappen, zoals groenten en vlees.\nIk kan vlees met groenten koken.\nJa, ik kook vaak thuis voor mijn gezin.\nIk eet graag groenten, fruit, vis, vlees en salades."
  },
  {
    id: "knm",
    title: "5. KNM - Kies A, B of C",
    time: "06 min",
    questions: [
      "U heeft koorts, maar het is geen spoed. Wat doet u meestal eerst?\nA. U belt de huisarts\nB. U belt meteen 112\nC. U gaat naar het gemeentehuis",
      "Uw kind komt later op school door een afspraak. Wat doet u?\nA. U informeert de school\nB. U informeert de supermarkt\nC. U doet niets",
      "Uw buren maken vaak harde muziek in de nacht. Wat doet u eerst?\nA. U praat rustig met de buren\nB. U stopt met wonen in uw huis\nC. U belt direct de brandweer",
      "U fietst en wilt links afslaan. Wat doet u?\nA. U kijkt goed en steekt uw hand uit\nB. U sluit uw ogen\nC. U fietst op de stoep"
    ],
    answer: "1. A. U belt de huisarts.\n2. A. U informeert de school.\n3. A. U praat rustig met de buren.\n4. A. U kijkt goed en steekt uw hand uit."
  },
  {
    id: "grammar",
    title: "6. Grammatica - Modale werkwoorden",
    time: "07 min",
    text: "Regel: Met moeten, kunnen, willen en mogen staat het tweede werkwoord meestal aan het einde van de zin.",
    questions: [
      "Maak de zin af: Ik moet morgen de huisarts ___.",
      "Maak de zin af: Mijn dochter kan om 10.00 uur naar school ___.",
      "Maak de zin af: Wij willen vanavond gezond ___.",
      "Maak de zin af: Mag ik mijn fiets vandaag ___?",
      "Zet in de goede volgorde: mijn fiets / ophalen / ik / moet",
      "Zet in de goede volgorde: na het werk / wandelen / wij / kunnen"
    ],
    answer: "Ik moet morgen de huisarts bellen.\nMijn dochter kan om 10.00 uur naar school komen.\nWij willen vanavond gezond eten.\nMag ik mijn fiets vandaag ophalen?\nIk moet mijn fiets ophalen.\nWij kunnen na het werk wandelen."
  },
  {
    id: "repeat",
    title: "7. Herhaling",
    time: "03 min",
    text: "Zeg deze zinnen drie keer hardop.",
    questions: [
      "Ik moet mijn identiteitsbewijs meenemen.",
      "Mijn dochter komt morgen later op school.",
      "Mag ik mijn fiets vandaag ophalen?"
    ],
    answer: "Klaar? Herhaal morgen opnieuw met nieuwe zinnen."
  }
];

const lessonRoot = document.querySelector("#dailyLesson");
const answerMode = document.querySelector("#answerMode");
const printLesson = document.querySelector("#printLesson");
const writingStorageKey = "v3-daily-writing-2026-05-14";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatText(value) {
  return escapeHtml(value || "").replaceAll("\n", "<br>");
}

function renderQuestions(items) {
  if (!items || !items.length) return "";
  return `<ol class="exercise-list">${items.map((item) => `<li>${formatText(item)}</li>`).join("")}</ol>`;
}

function renderChecklist(items) {
  if (!items || !items.length) return "";
  return `
    <div class="checklist">
      <strong>Checklist</strong>
      <ul>
        ${items.map((item, index) => `
          <li>
            <label>
              <input type="checkbox" data-check="${index}">
              <span>${escapeHtml(item)}</span>
            </label>
          </li>
        `).join("")}
      </ul>
    </div>
  `;
}

function renderWritingBox(card) {
  if (!card.writing) return "";
  let saved = "";
  try {
    saved = localStorage.getItem(writingStorageKey) || "";
  } catch {
    saved = "";
  }
  return `
    <label class="writing-box">
      <span>Uw antwoord</span>
      <textarea id="writingAnswer" rows="8" placeholder="Schrijf hier uw antwoord in het Nederlands...">${escapeHtml(saved)}</textarea>
    </label>
  `;
}

function renderCard(card) {
  return `
    <article class="daily-card" id="${escapeHtml(card.id)}">
      <header class="card-head">
        <h2>${escapeHtml(card.title)}</h2>
        <span class="chip">${escapeHtml(card.time)}</span>
      </header>
      <div class="card-body">
        ${card.audio ? `<div class="audio-box"><strong>Luister eerst</strong><audio controls preload="metadata" src="${escapeHtml(card.audio)}"></audio></div>` : ""}
        ${card.image ? `<figure class="speaking-image"><img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.imageAlt || "Spreekoefening")}"></figure>` : ""}
        ${card.text ? `<p class="text-box">${formatText(card.text)}</p>` : ""}
        ${renderQuestions(card.questions)}
        ${renderChecklist(card.checklist)}
        ${renderWritingBox(card)}
        <button class="answer-toggle" type="button" aria-label="Toon antwoord">
          <strong>${card.writing ? "Modelantwoord" : "Antwoord"}</strong>
          <span>${formatText(card.answer)}</span>
        </button>
      </div>
    </article>
  `;
}

lessonRoot.innerHTML = dailyLesson.map(renderCard).join("");

lessonRoot.addEventListener("input", (event) => {
  if (event.target.id !== "writingAnswer") return;
  try {
    localStorage.setItem(writingStorageKey, event.target.value);
  } catch {
    // Saving is optional. The textarea still works without local storage.
  }
});

lessonRoot.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-toggle");
  if (!button) return;
  button.classList.toggle("is-open");
});

answerMode.addEventListener("click", () => {
  document.body.classList.toggle("answers-hidden");
  const hidden = document.body.classList.contains("answers-hidden");
  answerMode.textContent = hidden ? "Toon antwoorden" : "Verberg antwoorden";
});

printLesson.addEventListener("click", () => {
  window.print();
});
