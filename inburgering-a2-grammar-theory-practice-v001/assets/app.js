const toggleButton = document.querySelector("#toggleAnswers");
const printButton = document.querySelector("#printLesson");
const answers = Array.from(document.querySelectorAll(".answer-box"));
const tabs = Array.from(document.querySelectorAll(".lesson-tab"));
const sections = tabs
  .map((tab) => document.querySelector(tab.getAttribute("href")))
  .filter(Boolean);

function setAllAnswers(open) {
  answers.forEach((answer) => {
    answer.open = open;
  });
  if (toggleButton) {
    toggleButton.textContent = open ? "Hide answers" : "Show answers";
  }
}

function allAnswersOpen() {
  return answers.every((answer) => answer.open);
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    setAllAnswers(!allAnswersOpen());
  });
}

answers.forEach((answer) => {
  answer.addEventListener("toggle", () => {
    if (!toggleButton) return;
    toggleButton.textContent = allAnswersOpen() ? "Hide answers" : "Show answers";
  });
});

if (printButton) {
  printButton.addEventListener("click", () => window.print());
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    tabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-120px 0px -55% 0px",
    threshold: [0.2, 0.45, 0.7]
  }
);

sections.forEach((section) => observer.observe(section));
