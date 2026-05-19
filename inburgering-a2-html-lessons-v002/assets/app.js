const lessons = [
  {
    id: "reading",
    number: "01",
    category: "Examen",
    title: "Lezen",
    goal: "Lees korte berichten, websites, formulieren en mededelingen. Let op tijden, datums, plaatsen, prijzen en belangrijke werkwoorden.",
    meta: ["A2 examen", "Praktische teksten", "Belangrijke informatie"],
    exercises: [
      {
        title: "Bericht van de apotheek",
        prompt: "Apotheek Sterksel is vandaag open tot 17.30 uur. Medicijnen die na 16.00 uur worden besteld, kunt u morgen ophalen.",
        questions: ["Tot hoe laat is de apotheek vandaag open?", "Wanneer kunt u medicijnen ophalen die na 16.00 uur zijn besteld?"],
        answer: "De apotheek is open tot 17.30 uur. Medicijnen die na 16.00 uur zijn besteld, kunt u morgen ophalen."
      },
      {
        title: "Zwembad",
        prompt: "Banenzwemmen is op dinsdag en donderdag van 07.00 tot 09.00 uur. U hoeft niet te reserveren.",
        questions: ["Op welke dagen kunt u banenzwemmen?", "Moet u reserveren?"],
        answer: "U kunt banenzwemmen op dinsdag en donderdag van 07.00 tot 09.00 uur. Nee, u hoeft niet te reserveren."
      },
      {
        title: "Wijziging bus",
        prompt: "Let op: bus 318 rijdt deze week niet via Heeze station. Er is een extra halte bij het gemeentehuis.",
        questions: ["Waar rijdt bus 318 deze week niet langs?", "Waar is de extra halte?"],
        answer: "Bus 318 rijdt deze week niet via Heeze station. De extra halte is bij het gemeentehuis."
      },
      {
        title: "Bericht van school",
        prompt: "Vrijdag om 14.00 uur begint de oudermiddag. Neem het rapport van uw kind mee.",
        questions: ["Wat begint vrijdag om 14.00 uur?", "Wat moeten ouders meenemen?"],
        answer: "De oudermiddag begint vrijdag om 14.00 uur. Ouders moeten het rapport van hun kind meenemen."
      },
      {
        title: "E-mail van de tandarts",
        prompt: "Beste mevrouw Bonenkamp, u heeft maandag 3 juni om 10.15 uur een afspraak bij de tandarts. Kunt u niet komen? Bel ons dan minimaal 24 uur van tevoren.",
        questions: ["Hoe laat is de afspraak?", "Wat moet mevrouw Bonenkamp doen als zij niet kan komen?"],
        answer: "De afspraak is om 10.15 uur. Als zij niet kan komen, moet zij minimaal 24 uur van tevoren bellen."
      },
      {
        title: "Pakketbezorging",
        prompt: "Uw pakket is bezorgd bij de buren op nummer 18. U kunt het pakket vandaag tot 21.00 uur ophalen. Neem uw identiteitsbewijs mee.",
        questions: ["Waar is het pakket bezorgd?", "Tot hoe laat kunt u het pakket ophalen?", "Wat moet u meenemen?"],
        answer: "Het pakket is bezorgd bij de buren op nummer 18. U kunt het pakket tot 21.00 uur ophalen. U moet uw identiteitsbewijs meenemen."
      },
      {
        title: "Website van de bibliotheek",
        prompt: "Volwassenen betalen 48 euro per jaar. Kinderen tot 18 jaar zijn gratis lid. U kunt online inschrijven of langskomen met een geldig identiteitsbewijs.",
        questions: ["Hoeveel betalen volwassenen per jaar?", "Wie kan gratis lid worden?", "Wat heeft u nodig als u langskomt?"],
        answer: "Volwassenen betalen 48 euro per jaar. Kinderen tot 18 jaar zijn gratis lid. U heeft een geldig identiteitsbewijs nodig."
      },
      {
        title: "Mini-examen",
        prompt: "De markt is elke vrijdag van 09.00 tot 13.00 uur op het plein. Bij slecht weer gaat de markt gewoon door.",
        questions: ["Kies het goede antwoord: A. De markt is alleen open bij mooi weer. B. De markt is op vrijdagochtend. C. De markt begint om 13.00 uur."],
        answer: "B. De markt is op vrijdagochtend."
      }
    ]
  },
  {
    id: "writing",
    number: "02",
    category: "Examen",
    title: "Schrijven",
    goal: "Schrijf korte praktische teksten: formulieren, e-mails, berichten aan school en eenvoudige klachten.",
    meta: ["Schriftelijk examen", "Praktische opdrachten", "Kort en duidelijk"],
    exercises: [
      {
        title: "Formulier: zwemles",
        prompt: "Vul een formulier in voor zwemles. Schrijf uw naam, woonplaats, e-mailadres, gewenste dag en zwemervaring op.",
        answer: "Voornaam: Violetta\nAchternaam: Bonenkamp\nWoonplaats: Sterksel\nE-mail: violetta@example.com\nGewenste dag: dinsdag\nErvaring: Ik kan zwemmen, maar ik wil beter worden."
      },
      {
        title: "E-mail: afspraak tandarts afzeggen",
        prompt: "U heeft een afspraak bij de tandarts, maar u kunt niet komen. Vraag om een nieuwe afspraak volgende week.",
        answer: "Beste meneer/mevrouw,\n\nIk heb morgen een afspraak bij de tandarts, maar ik kan helaas niet komen. Kunt u een nieuwe afspraak maken voor volgende week?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        title: "Bericht aan school",
        prompt: "Uw dochter is ziek. Schrijf een kort bericht aan school.",
        answer: "Beste juf,\n\nMijn dochter is vandaag ziek. Zij blijft thuis. Morgen laat ik weten hoe het met haar gaat.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        title: "Antwoord aan de buurvrouw",
        prompt: "Uw buurvrouw nodigt u zaterdag uit voor koffie. U kunt niet komen, want u gaat fietsen met uw gezin.",
        answer: "Beste buurvrouw,\n\nBedankt voor de uitnodiging. Zaterdag kan ik helaas niet komen. Ik ga fietsen met mijn gezin. Misschien kan ik volgende week koffie drinken.\n\nGroetjes,\nVioletta"
      },
      {
        title: "Vraag aan de gemeente",
        prompt: "U heeft een brief van de gemeente gekregen, maar u begrijpt de brief niet. Vraag om hulp.",
        answer: "Beste meneer/mevrouw,\n\nIk heb een brief van de gemeente gekregen. Ik begrijp de brief niet helemaal. Kunt u mij uitleggen wat ik moet doen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        title: "Klacht over bezorging",
        prompt: "Uw online boodschappen zijn te laat bezorgd en het vlees ontbreekt. Schrijf een klacht.",
        answer: "Beste meneer/mevrouw,\n\nMijn boodschappen zijn vandaag te laat bezorgd. Ook ontbreekt het vlees. Kunt u het bedrag terugbetalen of het vlees morgen bezorgen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        title: "E-mail over Nederlandse les",
        prompt: "Vraag informatie over een Nederlandse cursus in de avond. Vraag naar de dagen, de prijs en de startdatum.",
        answer: "Beste meneer/mevrouw,\n\nIk wil graag een Nederlandse cursus in de avond volgen. Op welke dagen is de cursus? Wat kost de cursus? Wanneer begint de cursus?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        title: "Tekst over het weekend",
        prompt: "Schrijf vijf korte zinnen over uw weekend.",
        answer: "In het weekend ben ik thuis met mijn gezin. Soms ga ik wandelen of fietsen. Ik luister graag naar een podcast. Ik kook vaak vlees met groenten. In de avond kijk ik soms een film met mijn man."
      }
    ]
  },
  {
    id: "speaking",
    number: "03",
    category: "Examen",
    title: "Spreken",
    goal: "Oefen korte gesproken antwoorden die passen bij uw leven. Gebruik eenvoudige volledige zinnen.",
    meta: ["Computerexamen", "Duidelijk spreken", "Persoonlijke antwoorden"],
    exercises: [
      {
        title: "AI-spreekprompt",
        prompt: "Kopieer deze tekst naar een AI-spraaktool voordat u oefent.",
        answer: "U bent mijn examinator voor het Nederlandse A2-inburgeringsexamen spreken. Stel mij steeds één vraag in langzaam Nederlands. Wacht op mijn antwoord. Corrigeer mij kort en duidelijk. Geef daarna een beter A2-antwoord in het Nederlands en ga verder."
      },
      {
        title: "Persoonlijke gegevens",
        questions: ["Hoe heet u?", "Waar komt u vandaan?", "Waar woont u?"],
        answer: "Ik heet Violetta Bonenkamp.\nIk kom uit Rusland.\nIk woon in Sterksel, in Noord-Brabant."
      },
      {
        title: "Gezin",
        questions: ["Bent u getrouwd?", "Heeft u kinderen?"],
        answer: "Ja, ik ben getrouwd met een Nederlandse man.\nJa, ik heb twee dochters."
      },
      {
        title: "Werk",
        questions: ["Wat voor werk doet u?", "Werkt u thuis?"],
        answer: "Ik ben ondernemer en oprichter van startups. Ik werk meestal vanuit huis."
      },
      {
        title: "Vrije tijd",
        questions: ["Wat doet u graag in uw vrije tijd?", "Wat kookt u graag?"],
        answer: "Ik zwem, fiets en wandel graag. Ik luister ook graag naar podcasts. Ik kook graag vlees met groenten."
      },
      {
        title: "Bij de huisarts",
        prompt: "U bent ziek en u wilt een afspraak maken. Wat zegt u?",
        answer: "Ik ben ziek en ik wil graag een afspraak maken."
      },
      {
        title: "Afbeelding: keuken",
        image: "images/speaking/kitchen-cooking-v15.jpg",
        prompt: "Kijk naar de afbeelding en geef antwoord in eenvoudig Nederlands.",
        questions: ["Wat ziet u op de foto?", "Wat doet de vrouw?"],
        answer: "Ik zie een keuken. Een vrouw kookt vlees en groenten. Zij maakt eten voor haar gezin."
      },
      {
        title: "Afbeelding: fietsen",
        image: "images/speaking/cycling-village-v15.jpg",
        prompt: "Kijk naar de afbeelding en geef antwoord in eenvoudig Nederlands.",
        questions: ["Waar is de vrouw?", "Wat doet zij?", "Fietst u graag?"],
        answer: "Zij is op een fietspad. Zij fietst. Ja, ik fiets graag, vooral in het weekend."
      },
      {
        title: "Afbeelding: huisarts",
        image: "images/speaking/gp-waiting-room-v15.jpg",
        prompt: "Kijk naar de afbeelding en geef antwoord in eenvoudig Nederlands.",
        questions: ["Waar is deze persoon?", "Waarom is zij daar?", "Wat zegt u als u ziek bent?"],
        answer: "Zij is bij de huisarts. Misschien heeft zij een afspraak of is zij ziek. Ik zeg: ik ben ziek en ik wil graag een afspraak maken."
      },
      {
        title: "Afbeelding: school",
        image: "images/speaking/school-entrance-v15.jpg",
        prompt: "Kijk naar de afbeelding en geef antwoord in eenvoudig Nederlands.",
        questions: ["Wat ziet u?", "Wat doet de moeder?", "Wat zegt u als uw kind ziek is?"],
        answer: "Ik zie een school, kinderen en ouders. De moeder praat met de juf of meester. Mijn dochter is ziek. Zij komt vandaag niet naar school."
      },
      {
        title: "Afbeelding: thuis werken",
        image: "images/speaking/home-office-v15.jpg",
        prompt: "Kijk naar de afbeelding en geef antwoord in eenvoudig Nederlands.",
        questions: ["Wat ziet u op de foto?", "Wat doet de vrouw?", "Werkt u thuis?"],
        answer: "Ik zie een werkplek thuis met een laptop. De vrouw werkt thuis. Ja, ik werk meestal thuis als ondernemer."
      },
      {
        title: "Afbeelding: supermarkt",
        image: "images/speaking/supermarket-groceries-v15.jpg",
        prompt: "Kijk naar de afbeelding en geef antwoord in eenvoudig Nederlands.",
        questions: ["Waar is de vrouw?", "Wat koopt zij?", "Wat koopt u vaak?"],
        answer: "Zij is in de supermarkt. Zij koopt groenten en vlees. Ik koop vaak vlees, groenten, fruit en koffie."
      }
    ]
  },
  {
    id: "listening",
    number: "04",
    category: "Examen",
    title: "Luisteren",
    goal: "Luister eerst naar de audio en beantwoord daarna de vragen. Lees de tekst pas nadat u heeft geluisterd.",
    meta: ["Computerexamen", "MP3-audio", "Eerst luisteren"],
    exercises: [
      {
        title: "AI-luisterprompt",
        prompt: "Kopieer deze tekst naar een AI-spraaktool voordat u oefent.",
        answer: "U bent mijn oefenpartner voor het Nederlandse A2-inburgeringsexamen luisteren. Lees één luistertekst langzaam in het Nederlands. Laat de tekst niet eerst zien. Stel de vragen één voor één. Corrigeer mij kort en duidelijk in eenvoudig Nederlands."
      },
      {
        title: "Voicemail van de tandarts",
        audio: "audio/listening-01-dentist.mp3",
        prompt: "Goedemorgen mevrouw Bonenkamp. U heeft morgen om half elf een afspraak bij de tandarts. Neem uw verzekeringspas mee. Als u niet kunt komen, bel ons dan vandaag voor vijf uur.",
        questions: ["Hoe laat is de afspraak?", "Wat moet mevrouw Bonenkamp meenemen?", "Wanneer moet zij bellen als zij niet kan komen?"],
        answer: "De afspraak is om 10.30 uur. Zij moet haar verzekeringspas meenemen. Zij moet vandaag voor 17.00 uur bellen."
      },
      {
        title: "Bericht in het zwembad",
        audio: "audio/listening-02-pool.mp3",
        prompt: "Beste bezoekers, het diepe bad is vandaag gesloten door een technisch probleem. Het instructiebad is wel open. U kunt bij de kassa uw geld terugvragen.",
        questions: ["Wat is vandaag gesloten?", "Waarom is het gesloten?", "Waar kunnen bezoekers hun geld terugvragen?"],
        answer: "Het diepe bad is vandaag gesloten door een technisch probleem. Bezoekers kunnen bij de kassa hun geld terugvragen."
      },
      {
        title: "Bericht van school",
        audio: "audio/listening-03-school.mp3",
        prompt: "Beste ouders, morgen heeft groep zes een excursie naar het museum. De kinderen moeten om kwart over acht op school zijn. Geef uw kind een lunch en een fles water mee.",
        questions: ["Waar gaat groep zes naartoe?", "Hoe laat moeten de kinderen op school zijn?", "Wat moeten ouders meegeven?"],
        answer: "Groep zes gaat naar het museum. De kinderen moeten om 08.15 uur op school zijn. Ouders moeten lunch en water meegeven."
      },
      {
        title: "Gesprek in de supermarkt",
        audio: "audio/listening-04-supermarket.mp3",
        prompt: "Klant: Goedemiddag, waar kan ik kipfilet vinden? Medewerker: De kipfilet ligt achterin, naast de vis. Vandaag is er ook korting op paprika en courgette. Klant: Dank u wel.",
        questions: ["Wat zoekt de klant?", "Waar ligt de kipfilet?", "Welke groenten hebben korting?"],
        answer: "De klant zoekt kipfilet. De kipfilet ligt achterin, naast de vis. Paprika en courgette hebben korting."
      },
      {
        title: "Bericht in de trein",
        audio: "audio/listening-05-train.mp3",
        prompt: "Dames en heren, de trein naar Eindhoven vertrekt vandaag van spoor drie. De trein heeft tien minuten vertraging. Reizigers naar Helmond kunnen overstappen in Eindhoven.",
        questions: ["Van welk spoor vertrekt de trein?", "Hoeveel vertraging heeft de trein?", "Waar kunnen reizigers naar Helmond overstappen?"],
        answer: "De trein vertrekt van spoor drie. De trein heeft tien minuten vertraging. Reizigers naar Helmond kunnen overstappen in Eindhoven."
      },
      {
        title: "Gesprek met de buurvrouw",
        audio: "audio/listening-06-neighbor.mp3",
        prompt: "Buurvrouw: Hoi Violetta, kom je zaterdag koffie drinken? Violetta: Dank je, maar zaterdag ga ik fietsen met mijn gezin. Kan het zondagmiddag? Buurvrouw: Ja, zondag om drie uur is goed.",
        questions: ["Waarvoor nodigt de buurvrouw Violetta uit?", "Waarom kan Violetta zaterdag niet komen?", "Wanneer spreken zij af?"],
        answer: "De buurvrouw nodigt Violetta uit voor koffie. Violetta kan zaterdag niet komen, want zij gaat fietsen met haar gezin. Zij spreken zondag om 15.00 uur af."
      },
      {
        title: "Assistente van de huisarts",
        audio: "audio/listening-07-gp.mp3",
        prompt: "Huisartsassistente: Huisartsenpraktijk De Linde, goedemorgen. Violetta: Goedemorgen, ik heb pijn in mijn rug. Kan ik vandaag langskomen? Huisartsassistente: De huisarts heeft om half drie tijd. Neem uw medicijnlijst mee.",
        questions: ["Welke klacht heeft Violetta?", "Hoe laat kan zij komen?", "Wat moet zij meenemen?"],
        answer: "Violetta heeft pijn in haar rug. Zij kan om 14.30 uur komen. Zij moet haar medicijnlijst meenemen."
      },
      {
        title: "Bericht van de gemeente",
        audio: "audio/listening-08-municipality.mp3",
        prompt: "U spreekt met de gemeente. Uw nieuwe afvalpas ligt klaar bij de balie. U kunt de pas ophalen van maandag tot en met vrijdag tussen negen uur en vier uur. Neem een geldig identiteitsbewijs mee.",
        questions: ["Wat ligt klaar bij de balie?", "Wanneer kunt u de pas ophalen?", "Wat moet u meenemen?"],
        answer: "De nieuwe afvalpas ligt klaar bij de balie. U kunt de pas van maandag tot en met vrijdag tussen 09.00 en 16.00 uur ophalen. U moet een geldig identiteitsbewijs meenemen."
      },
      {
        title: "Nederlandse les",
        audio: "audio/listening-09-course.mp3",
        prompt: "De Nederlandse les begint volgende week dinsdag. De les is van zeven tot negen uur in de avond. Het boek kost vijfentwintig euro. U betaalt het boek op de eerste lesdag.",
        questions: ["Wanneer begint de Nederlandse les?", "Hoe laat is de les?", "Hoeveel kost het boek?"],
        answer: "De Nederlandse les begint volgende week dinsdag. De les is van 19.00 tot 21.00 uur. Het boek kost 25 euro."
      },
      {
        title: "Sportles",
        audio: "audio/listening-10-sports.mp3",
        prompt: "Trainer: Morgen is er geen fitnessles om tien uur. De trainer is ziek. De les van donderdag om elf uur gaat wel door. U hoeft zich niet opnieuw aan te melden.",
        questions: ["Welke les gaat niet door?", "Waarom gaat de les niet door?", "Moeten mensen zich opnieuw aanmelden?"],
        answer: "De fitnessles van morgen om 10.00 uur gaat niet door. De trainer is ziek. Mensen hoeven zich niet opnieuw aan te melden."
      }
    ]
  },
  {
    id: "knm",
    number: "05",
    category: "Examen",
    title: "KNM",
    goal: "Oefen KNM in het Nederlands. Lees de vraag, kies A, B of C en controleer daarna het antwoord.",
    meta: ["Computerexamen", "Nederlandse vragen", "Samenleving"],
    exercises: [
      {
        title: "Verhuizen",
        prompt: "U verhuist naar een ander adres. Waar moet u uw nieuwe adres doorgeven?",
        questions: ["A. Bij de supermarkt", "B. Bij de gemeente", "C. Bij de tandarts"],
        answer: "B. Bij de gemeente."
      },
      {
        title: "112 bellen",
        prompt: "Wanneer belt u 112?",
        questions: ["A. Bij spoed en gevaar", "B. Voor een nieuw paspoort", "C. Voor een afspraak bij de tandarts"],
        answer: "A. Bij spoed en gevaar."
      },
      {
        title: "Zorgverzekering",
        prompt: "Is een basiszorgverzekering verplicht in Nederland?",
        questions: ["A. Ja", "B. Nee", "C. Alleen voor kinderen"],
        answer: "A. Ja."
      },
      {
        title: "Kind ziek",
        prompt: "Uw kind heeft koorts en kan niet naar school. Wat doet u?",
        questions: ["A. U meldt uw kind ziek bij school", "B. U doet niets", "C. U stuurt uw kind toch naar school"],
        answer: "A. U meldt uw kind ziek bij school."
      },
      {
        title: "DigiD",
        prompt: "Waarvoor gebruikt u DigiD?",
        questions: ["A. Om in te loggen bij websites van de overheid", "B. Om uw voordeur te openen", "C. Om groenten te kopen"],
        answer: "A. Om in te loggen bij websites van de overheid."
      },
      {
        title: "Geldig identiteitsbewijs",
        prompt: "Waarom heeft u een geldig identiteitsbewijs nodig bij het examen?",
        questions: ["A. U moet laten zien wie u bent", "B. U heeft het nodig om koffie te kopen", "C. U kiest daarmee thuis uw stoel"],
        answer: "A. U moet laten zien wie u bent."
      },
      {
        title: "Fietsverlichting",
        prompt: "U fietst in het donker. Wat heeft u nodig?",
        questions: ["A. Werkende fietsverlichting", "B. Een paspoort in uw hand", "C. Een treinkaartje"],
        answer: "A. Werkende fietsverlichting."
      },
      {
        title: "Nederlandse regering",
        prompt: "Waar zit de Nederlandse regering vooral?",
        questions: ["A. In Den Haag", "B. In Sterksel", "C. In Parijs"],
        answer: "A. In Den Haag."
      },
      {
        title: "Huur betalen",
        prompt: "U huurt een woning. Aan wie betaalt u meestal de huur?",
        questions: ["A. Aan de verhuurder of woningcorporatie", "B. Aan de politie", "C. Aan de school"],
        answer: "A. Aan de verhuurder of woningcorporatie."
      },
      {
        title: "Huisarts",
        prompt: "U bent ziek, maar het is geen spoed. Wie belt u meestal eerst?",
        questions: ["A. De huisarts", "B. De brandweer", "C. De burgemeester"],
        answer: "A. De huisarts."
      },
      {
        title: "Werk zoeken",
        prompt: "Waarvoor gebruikt u een cv?",
        questions: ["A. Om uw werkervaring en opleiding te laten zien", "B. Om met de trein te reizen", "C. Om afval weg te brengen"],
        answer: "A. Om uw werkervaring en opleiding te laten zien."
      },
      {
        title: "Leerplicht",
        prompt: "Kinderen moeten in Nederland naar school. Hoe heet dit?",
        questions: ["A. Leerplicht", "B. Huurtoeslag", "C. Zorgpremie"],
        answer: "A. Leerplicht."
      }
    ]
  },
  {
    id: "word-order",
    number: "06",
    category: "Grammar",
    title: "Word order and questions",
    goal: "Make clear A2 sentences. Remember: in a normal sentence, the verb is usually in position 2.",
    meta: ["Sentence order", "Questions", "Omdat / als / dat"],
    exercises: [
      {
        title: "Basic order",
        prompt: "Put the words in order: woon / ik / in Sterksel",
        answer: "Ik woon in Sterksel."
      },
      {
        title: "Time in a sentence",
        prompt: "Put the words in order: thuis / vandaag / ik / werk",
        answer: "Vandaag werk ik thuis."
      },
      {
        title: "Question word",
        prompt: "Ask where someone lives.",
        answer: "Waar woont u?"
      },
      {
        title: "Yes/no question",
        prompt: "Change to a question: U heeft twee dochters.",
        answer: "Heeft u twee dochters?"
      },
      {
        title: "Two verbs",
        prompt: "Complete: Ik wil beter Nederlands _____.",
        answer: "Ik wil beter Nederlands spreken."
      },
      {
        title: "Omdat",
        prompt: "Choose correct: A. Ik leer Nederlands omdat ik woon in Nederland. B. Ik leer Nederlands omdat ik in Nederland woon.",
        answer: "B. Ik leer Nederlands omdat ik in Nederland woon."
      },
      {
        title: "Practical sentence",
        prompt: "Translate: We cycle in the village on Sunday.",
        answer: "Wij fietsen zondag in het dorp."
      }
    ]
  },
  {
    id: "verbs",
    number: "07",
    category: "Grammar",
    title: "Verbs: present, perfect, future",
    goal: "Use common Dutch verbs for daily life, appointments, and exam answers.",
    meta: ["Present tense", "Hebben / zijn", "Future with gaan"],
    exercises: [
      {
        title: "Present tense",
        prompt: "Choose: Ik ___ in Sterksel. (woon / woont)",
        answer: "Ik woon in Sterksel."
      },
      {
        title: "Irregular verb: zijn",
        prompt: "Fill in: Ik ___ 44 jaar.",
        answer: "Ik ben 44 jaar."
      },
      {
        title: "Irregular verb: hebben",
        prompt: "Fill in: Wij ___ twee dochters.",
        answer: "Wij hebben twee dochters."
      },
      {
        title: "Perfect with hebben",
        prompt: "Translate: I cooked yesterday.",
        answer: "Ik heb gisteren gekookt."
      },
      {
        title: "Perfect with zijn",
        prompt: "Fill in: Ik ___ naar de winkel gegaan.",
        answer: "Ik ben naar de winkel gegaan."
      },
      {
        title: "Future with gaan",
        prompt: "Translate: Tomorrow I will swim.",
        answer: "Morgen ga ik zwemmen."
      },
      {
        title: "Polite request",
        prompt: "Translate: Can you help me?",
        answer: "Kunt u mij helpen?"
      }
    ]
  },
  {
    id: "modal",
    number: "08",
    category: "Grammar",
    title: "Modal, separable, reflexive verbs",
    goal: "Use verbs like kan, moet, wil, meenemen, invullen, ophalen, and zich inschrijven.",
    meta: ["Modal verbs", "Separable verbs", "Reflexive verbs"],
    exercises: [
      {
        title: "Modal verb",
        prompt: "Complete: Ik moet de huisarts _____.",
        answer: "Ik moet de huisarts bellen."
      },
      {
        title: "Polite modal question",
        prompt: "Ask: Must I bring my ID?",
        answer: "Moet ik mijn identiteitsbewijs meenemen?"
      },
      {
        title: "Separable verb",
        prompt: "Translate: I fill in the form.",
        answer: "Ik vul het formulier in."
      },
      {
        title: "Separable with modal",
        prompt: "Translate: I must fill in the form.",
        answer: "Ik moet het formulier invullen."
      },
      {
        title: "Perfect separable verb",
        prompt: "Translate: I picked up the package.",
        answer: "Ik heb het pakket opgehaald."
      },
      {
        title: "Reflexive verb",
        prompt: "Fill in: Ik voel ___ goed.",
        answer: "Ik voel me goed."
      },
      {
        title: "Register for a course",
        prompt: "Translate: I have to register for the Dutch course.",
        answer: "Ik moet me inschrijven voor de Nederlandse cursus."
      }
    ]
  },
  {
    id: "nouns",
    number: "09",
    category: "Grammar",
    title: "Nouns, articles, adjectives, pronouns",
    goal: "Use de, het, een, plurals, adjectives, and small pronouns clearly enough for A2.",
    meta: ["De / het", "Pronouns", "Adjectives"],
    exercises: [
      {
        title: "Article",
        prompt: "Choose de or het: ___ formulier",
        answer: "het formulier"
      },
      {
        title: "Article",
        prompt: "Choose de or het: ___ afspraak",
        answer: "de afspraak"
      },
      {
        title: "Een and de",
        prompt: "Translate: I received a letter. The letter is important.",
        answer: "Ik heb een brief gekregen. De brief is belangrijk."
      },
      {
        title: "Plural",
        prompt: "Make plural: kind",
        answer: "kinderen"
      },
      {
        title: "Adjective",
        prompt: "Choose: een ___ huis (nieuw / nieuwe)",
        answer: "een nieuw huis"
      },
      {
        title: "Object pronoun",
        prompt: "Translate: Can you help me with the form?",
        answer: "Kunt u mij helpen met het formulier?"
      },
      {
        title: "Possessive",
        prompt: "Translate: Our house is in Sterksel.",
        answer: "Ons huis is in Sterksel."
      }
    ]
  },
  {
    id: "negation",
    number: "10",
    category: "Grammar",
    title: "Negation, prepositions, connectors",
    goal: "Use niet, geen, common prepositions, and connectors like maar, want, dus, omdat, als, and dat.",
    meta: ["Niet / geen", "Prepositions", "Connectors"],
    exercises: [
      {
        title: "Geen",
        prompt: "Complete: Ik heb ___ afspraak.",
        answer: "Ik heb geen afspraak."
      },
      {
        title: "Niet",
        prompt: "Complete: Ik kom morgen ___.",
        answer: "Ik kom morgen niet."
      },
      {
        title: "Preposition",
        prompt: "Complete: Ik woon ___ Sterksel.",
        answer: "Ik woon in Sterksel."
      },
      {
        title: "Preposition",
        prompt: "Complete: Ik luister ___ een podcast.",
        answer: "Ik luister naar een podcast."
      },
      {
        title: "Maar",
        prompt: "Complete: Ik wil zwemmen, ___ het zwembad is gesloten.",
        answer: "Ik wil zwemmen, maar het zwembad is gesloten."
      },
      {
        title: "Dus",
        prompt: "Complete: Mijn dochter is ziek, ___ ik bel de school.",
        answer: "Mijn dochter is ziek, dus ik bel de school."
      },
      {
        title: "Omdat",
        prompt: "Translate: I cannot come because I am sick.",
        answer: "Ik kan niet komen omdat ik ziek ben."
      },
      {
        title: "Er is",
        prompt: "Translate: There is a problem with my package.",
        answer: "Er is een probleem met mijn pakket."
      }
    ]
  }
];

const supplementalPractice = {
  reading: [
    {
      title: "Brief van de gemeente",
      prompt: "U heeft op woensdag 12 juni om 09.30 uur een afspraak bij de gemeente. Neem uw paspoort en de brief mee. Kunt u niet komen? Verplaats de afspraak online.",
      questions: ["Op welke datum is de afspraak?", "Wat moet u meenemen?", "Hoe kunt u de afspraak verplaatsen?"],
      answer: "De afspraak is op woensdag 12 juni om 09.30 uur. U moet uw paspoort en de brief meenemen. U kunt de afspraak online verplaatsen."
    },
    {
      title: "Openingstijden sportschool",
      prompt: "De sportschool is maandag tot en met vrijdag open van 08.00 tot 22.00 uur. In het weekend is de sportschool open van 09.00 tot 14.00 uur. Op feestdagen is de sportschool gesloten.",
      questions: ["Hoe laat sluit de sportschool op dinsdag?", "Wanneer is de sportschool open in het weekend?", "Wanneer is de sportschool gesloten?"],
      answer: "Op dinsdag sluit de sportschool om 22.00 uur. In het weekend is de sportschool open van 09.00 tot 14.00 uur. Op feestdagen is de sportschool gesloten."
    },
    {
      title: "Afvalpas",
      prompt: "Uw nieuwe afvalpas ligt klaar bij de balie van het gemeentehuis. U kunt de pas ophalen van maandag tot en met vrijdag tussen 09.00 en 16.00 uur. Neem een geldig identiteitsbewijs mee.",
      questions: ["Waar ligt de afvalpas klaar?", "Wanneer kunt u de pas ophalen?", "Wat moet u meenemen?"],
      answer: "De afvalpas ligt klaar bij de balie van het gemeentehuis. U kunt de pas ophalen van maandag tot en met vrijdag tussen 09.00 en 16.00 uur. U moet een geldig identiteitsbewijs meenemen."
    },
    {
      title: "Bericht van de huisarts",
      prompt: "Beste mevrouw Bonenkamp, uw bloedonderzoek is normaal. U hoeft niet naar de praktijk te komen. Heeft u nog klachten? Bel dan de assistente voor een afspraak.",
      questions: ["Hoe is het bloedonderzoek?", "Moet mevrouw Bonenkamp naar de praktijk komen?", "Wat moet zij doen als zij nog klachten heeft?"],
      answer: "Het bloedonderzoek is normaal. Zij hoeft niet naar de praktijk te komen. Als zij nog klachten heeft, moet zij de assistente bellen voor een afspraak."
    },
    {
      title: "Cursus Nederlands",
      prompt: "De cursus Nederlands A2 begint op dinsdag 3 september. De lessen zijn elke dinsdag en donderdag van 19.00 tot 21.00 uur. Het boek kost 25 euro.",
      questions: ["Wanneer begint de cursus?", "Op welke dagen zijn de lessen?", "Hoeveel kost het boek?"],
      answer: "De cursus begint op dinsdag 3 september. De lessen zijn op dinsdag en donderdag van 19.00 tot 21.00 uur. Het boek kost 25 euro."
    },
    {
      title: "Treinbericht",
      prompt: "Door werkzaamheden rijden er zondag geen treinen tussen Eindhoven en Weert. Er rijden stopbussen. De reis duurt ongeveer 30 minuten langer.",
      questions: ["Wanneer rijden er geen treinen?", "Tussen welke plaatsen rijden er geen treinen?", "Hoeveel langer duurt de reis ongeveer?"],
      answer: "Zondag rijden er geen treinen tussen Eindhoven en Weert. Er rijden stopbussen. De reis duurt ongeveer 30 minuten langer."
    },
    {
      title: "Retourneren in de winkel",
      prompt: "U kunt een artikel binnen 14 dagen terugbrengen. Neem de bon mee. Artikelen zonder bon kunnen niet worden teruggenomen.",
      questions: ["Binnen hoeveel dagen kunt u een artikel terugbrengen?", "Wat moet u meenemen?", "Kan een artikel zonder bon terug?"],
      answer: "U kunt een artikel binnen 14 dagen terugbrengen. U moet de bon meenemen. Nee, zonder bon kan het artikel niet terug."
    },
    {
      title: "Schoolreis",
      prompt: "De schoolreis is op vrijdag 21 juni. De kinderen vertrekken om 08.45 uur en zijn om 15.30 uur terug. Geef uw kind lunch, drinken en een regenjas mee.",
      questions: ["Wanneer is de schoolreis?", "Hoe laat zijn de kinderen terug?", "Wat moet uw kind meenemen?"],
      answer: "De schoolreis is op vrijdag 21 juni. De kinderen zijn om 15.30 uur terug. Uw kind moet lunch, drinken en een regenjas meenemen."
    },
    {
      title: "Bibliotheek",
      prompt: "De bibliotheek organiseert elke woensdag een taalcafe van 10.00 tot 11.30 uur. Deelname is gratis. U hoeft zich niet aan te melden.",
      questions: ["Wanneer is het taalcafe?", "Hoeveel kost deelname?", "Moet u zich aanmelden?"],
      answer: "Het taalcafe is elke woensdag van 10.00 tot 11.30 uur. Deelname is gratis. Nee, u hoeft zich niet aan te melden."
    },
    {
      title: "Online bestelling",
      prompt: "Uw bestelling wordt morgen tussen 18.00 en 20.00 uur bezorgd. Bent u niet thuis? Dan brengen wij het pakket naar een afhaalpunt in de buurt.",
      questions: ["Wanneer wordt de bestelling bezorgd?", "Hoe laat wordt de bestelling bezorgd?", "Wat gebeurt er als u niet thuis bent?"],
      answer: "De bestelling wordt morgen tussen 18.00 en 20.00 uur bezorgd. Als u niet thuis bent, gaat het pakket naar een afhaalpunt in de buurt."
    }
  ],
  writing: [
    {
      title: "Afspraak bij de huisarts",
      prompt: "U heeft pijn in uw rug. Schrijf een bericht aan de huisarts en vraag om een afspraak.",
      answer: "Beste assistente,\n\nIk heb pijn in mijn rug. Ik wil graag een afspraak maken met de huisarts. Kan ik deze week langskomen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
    },
    {
      title: "Afspraak verplaatsen",
      prompt: "U heeft een afspraak bij de gemeente, maar u kunt niet komen. Vraag om een nieuwe afspraak op vrijdag.",
      answer: "Beste meneer/mevrouw,\n\nIk heb een afspraak bij de gemeente, maar ik kan helaas niet komen. Kan ik een nieuwe afspraak maken op vrijdag?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
    },
    {
      title: "Zwemles afzeggen",
      prompt: "U kunt vandaag niet naar zwemles. Schrijf een kort bericht aan de zwemschool.",
      answer: "Beste meneer/mevrouw,\n\nIk kan vandaag helaas niet naar zwemles komen. Ik ben ziek. Volgende week ben ik er weer.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
    },
    {
      title: "Vraag over sportles",
      prompt: "Vraag aan de sportschool of er een les in de avond is. Vraag ook naar de prijs.",
      answer: "Beste meneer/mevrouw,\n\nIk wil graag sporten in de avond. Heeft u lessen na 19.00 uur? Wat kost een abonnement?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
    },
    {
      title: "Pakket ophalen",
      prompt: "Uw pakket ligt bij de buren. Schrijf een kort bericht aan de buurvrouw en vraag wanneer u het pakket kunt ophalen.",
      answer: "Beste buurvrouw,\n\nMijn pakket ligt bij u. Wanneer kan ik het pakket ophalen? Ik ben vanavond thuis.\n\nGroetjes,\nVioletta"
    },
    {
      title: "Brief niet begrijpen",
      prompt: "U begrijpt een brief van school niet. Schrijf een bericht en vraag om uitleg.",
      answer: "Beste juf,\n\nIk heb de brief van school gelezen, maar ik begrijp niet alles. Kunt u mij uitleggen wat ik moet doen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
    },
    {
      title: "Taalcafe",
      prompt: "Schrijf een e-mail aan de bibliotheek. Vraag wanneer het taalcafe is en of u zich moet aanmelden.",
      answer: "Beste meneer/mevrouw,\n\nIk wil graag naar het taalcafe komen. Wanneer is het taalcafe? Moet ik mij aanmelden?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
    },
    {
      title: "Werk thuis",
      prompt: "Schrijf vijf korte zinnen over uw werk thuis.",
      answer: "Ik werk meestal thuis. Ik ben ondernemer. Ik werk vaak met technologie en AI. Ik schrijf ook artikelen. Ik vind thuis werken prettig."
    },
    {
      title: "Uitnodiging weigeren",
      prompt: "Een vriendin vraagt of u zaterdag komt eten. U kunt niet komen. Schrijf een vriendelijk antwoord.",
      answer: "Hoi,\n\nBedankt voor de uitnodiging. Zaterdag kan ik helaas niet komen. Ik heb plannen met mijn gezin. Misschien kan ik volgende week komen.\n\nGroetjes,\nVioletta"
    },
    {
      title: "Klacht over eten",
      prompt: "U heeft eten besteld, maar de bestelling is koud. Schrijf een korte klacht.",
      answer: "Beste meneer/mevrouw,\n\nMijn bestelling is net bezorgd, maar het eten is koud. Ik ben niet tevreden. Kunt u mij helpen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
    }
  ],
  speaking: [
    {
      title: "Extra persoonlijk",
      questions: ["Hoe oud bent u?", "Waarom leert u Nederlands?", "Hoe lang woont u al in Nederland?"],
      answer: "Ik ben 44 jaar. Ik leer Nederlands omdat ik in Nederland woon. Ik wil beter praten met mensen."
    },
    {
      title: "Dagindeling",
      questions: ["Hoe laat staat u meestal op?", "Wat doet u in de ochtend?", "Werkt u liever thuis of op kantoor?"],
      answer: "Ik sta meestal niet heel vroeg op. In de ochtend drink ik koffie en begin ik rustig met werken. Ik werk liever thuis."
    },
    {
      title: "Gezond leven",
      questions: ["Wat doet u om gezond te blijven?", "Wat eet u graag?", "Sport u vaak?"],
      answer: "Ik beweeg graag. Ik zwem, fiets en wandel. Ik eet graag vlees met groenten en ik probeer gezond te eten."
    },
    {
      title: "Nederland",
      questions: ["Wat vindt u mooi aan Nederland?", "Fietst u graag in Nederland?", "Wat vindt u moeilijk aan Nederlands?"],
      answer: "Ik vind Nederland veilig en mooi. Ik fiets graag in Nederland. De uitspraak en de woordvolgorde vind ik soms moeilijk."
    },
    {
      title: "Technologie",
      questions: ["Houdt u van technologie?", "Gebruikt u AI?", "Waarvoor gebruikt u de computer?"],
      answer: "Ja, ik houd van technologie. Ik gebruik AI voor mijn werk. Ik gebruik de computer om te schrijven, te leren en te werken."
    },
    {
      title: "Bij de apotheek",
      prompt: "U wilt weten wanneer u uw medicijnen kunt ophalen. Wat zegt u?",
      answer: "Goedemiddag, wanneer kan ik mijn medicijnen ophalen?"
    },
    {
      title: "Te laat",
      prompt: "U bent te laat voor een afspraak. Wat zegt u?",
      answer: "Sorry, ik ben te laat. De bus had vertraging."
    },
    {
      title: "In de winkel",
      prompt: "U wilt een artikel terugbrengen. Wat zegt u?",
      answer: "Goedemiddag, ik wil dit artikel graag terugbrengen. Het werkt niet goed."
    },
    {
      title: "Restaurant reserveren",
      prompt: "U wilt een tafel reserveren voor vier personen. Wat zegt u?",
      answer: "Goedemiddag, ik wil graag een tafel reserveren voor vier personen."
    },
    {
      title: "Wachtwoord kwijt",
      prompt: "U bent uw wachtwoord kwijt. Wat zegt u?",
      answer: "Ik ben mijn wachtwoord kwijt. Ik wil graag een nieuw wachtwoord aanvragen."
    },
    {
      title: "Mening: reizen",
      questions: ["Houdt u van reizen?", "Waarom reist u graag?"],
      answer: "Ja, ik houd van reizen. Ik leer graag nieuwe plaatsen kennen."
    },
    {
      title: "Mening: leren",
      questions: ["Vindt u Nederlands leren moeilijk?", "Hoe oefent u Nederlands?"],
      answer: "Ja, soms vind ik Nederlands moeilijk. Ik oefen met lessen, audio en korte zinnen."
    },
    {
      title: "Mening: sporten",
      questions: ["Wat vindt u leuker: zwemmen of fietsen?", "Waarom?"],
      answer: "Ik vind allebei leuk. Zwemmen is goed voor mijn lichaam en fietsen is fijn buiten."
    },
    {
      title: "School bellen",
      prompt: "Uw kind is ziek. Wat zegt u tegen school?",
      answer: "Goedemorgen, mijn dochter is ziek. Zij komt vandaag niet naar school."
    },
    {
      title: "Gemeente bellen",
      prompt: "U begrijpt een brief niet. Wat zegt u aan de telefoon?",
      answer: "Goedemorgen, ik heb een brief gekregen, maar ik begrijp de brief niet. Kunt u mij helpen?"
    },
    {
      title: "Buurvrouw uitnodiging",
      prompt: "Uw buurvrouw nodigt u uit voor koffie, maar u kunt niet. Wat zegt u?",
      answer: "Bedankt voor de uitnodiging, maar vandaag kan ik niet. Misschien volgende week?"
    }
  ],
  listening: [
    {
      title: "Fietsenmaker",
      audio: "audio/listening-11-bike.mp3",
      prompt: "Goedemiddag mevrouw Bonenkamp. Uw fiets is klaar. De reparatie kost vijfendertig euro. U kunt de fiets vandaag tot zes uur ophalen of morgen vanaf negen uur.",
      questions: ["Wat is klaar?", "Hoeveel kost de reparatie?", "Wanneer kan mevrouw Bonenkamp de fiets ophalen?"],
      answer: "De fiets is klaar. De reparatie kost 35 euro. Zij kan de fiets vandaag tot 18.00 uur ophalen of morgen vanaf 09.00 uur."
    },
    {
      title: "Taalcafe",
      audio: "audio/listening-12-taalcafe.mp3",
      prompt: "Welkom bij het taalcafe. Vandaag oefenen we praten over familie en werk. De pauze is om half elf. Koffie en thee staan op de tafel bij het raam.",
      questions: ["Waarover oefenen de mensen vandaag?", "Hoe laat is de pauze?", "Waar staan koffie en thee?"],
      answer: "Vandaag oefenen zij praten over familie en werk. De pauze is om 10.30 uur. Koffie en thee staan op de tafel bij het raam."
    },
    {
      title: "Schooltas vergeten",
      audio: "audio/listening-13-schoolbag.mp3",
      prompt: "Beste mevrouw Bonenkamp, uw dochter is haar schooltas vergeten. De tas ligt bij de administratie. U kunt de tas vandaag tot vier uur ophalen.",
      questions: ["Wat is de dochter vergeten?", "Waar ligt de tas?", "Tot hoe laat kan de tas worden opgehaald?"],
      answer: "De dochter is haar schooltas vergeten. De tas ligt bij de administratie. De tas kan tot 16.00 uur worden opgehaald."
    },
    {
      title: "Afspraak gemeente",
      audio: "audio/listening-14-municipality-appointment.mp3",
      prompt: "U heeft morgen om kwart voor tien een afspraak bij de gemeente. Meld u eerst bij de balie. Neem uw paspoort en uw DigiD-gegevens mee.",
      questions: ["Hoe laat is de afspraak?", "Waar moet u zich eerst melden?", "Wat moet u meenemen?"],
      answer: "De afspraak is om 09.45 uur. U moet zich eerst bij de balie melden. U moet uw paspoort en uw DigiD-gegevens meenemen."
    },
    {
      title: "Sportles gewijzigd",
      audio: "audio/listening-15-gym-change.mp3",
      prompt: "Let op, de zwemles van donderdagavond gaat niet door. De leraar is ziek. U kunt de les inhalen op zaterdag om tien uur.",
      questions: ["Welke les gaat niet door?", "Waarom gaat de les niet door?", "Wanneer kunt u de les inhalen?"],
      answer: "De zwemles van donderdagavond gaat niet door. De leraar is ziek. U kunt de les zaterdag om 10.00 uur inhalen."
    },
    {
      title: "Bezorging boodschappen",
      audio: "audio/listening-16-groceries-delivery.mp3",
      prompt: "Goedemiddag, uw boodschappen worden vandaag iets later bezorgd. De bezorger komt tussen half acht en acht uur. Het vlees is niet op voorraad en wordt terugbetaald.",
      questions: ["Wat wordt later bezorgd?", "Hoe laat komt de bezorger?", "Wat gebeurt er met het vlees?"],
      answer: "De boodschappen worden later bezorgd. De bezorger komt tussen 19.30 en 20.00 uur. Het vlees is niet op voorraad en wordt terugbetaald."
    }
  ],
  knm: [
    {
      title: "Stemmen",
      prompt: "Wat doet u bij verkiezingen?",
      questions: ["A. U kunt stemmen", "B. U moet de trein nemen", "C. U koopt een paspoort"],
      answer: "A. U kunt stemmen."
    },
    {
      title: "Belasting",
      prompt: "Waarom betalen mensen belasting?",
      questions: ["A. Voor publieke voorzieningen", "B. Voor gratis vakantie", "C. Voor de supermarkt"],
      answer: "A. Voor publieke voorzieningen."
    },
    {
      title: "Werkloos",
      prompt: "U zoekt werk. Waar kunt u vacatures vinden?",
      questions: ["A. Op websites en bij het UWV", "B. Alleen bij de tandarts", "C. In uw paspoort"],
      answer: "A. Op websites en bij het UWV."
    },
    {
      title: "Schoolgesprek",
      prompt: "De school nodigt u uit voor een gesprek over uw kind. Wat doet u?",
      questions: ["A. U gaat naar het gesprek", "B. U stuurt het kind alleen", "C. U belt 112"],
      answer: "A. U gaat naar het gesprek."
    },
    {
      title: "Spoed huisarts",
      prompt: "Het is avond en u heeft dringend medische hulp nodig, maar het is geen levensgevaar. Wie belt u?",
      questions: ["A. De huisartsenpost", "B. De bibliotheek", "C. De fietsenmaker"],
      answer: "A. De huisartsenpost."
    },
    {
      title: "Afval scheiden",
      prompt: "Waarom scheiden mensen afval?",
      questions: ["A. Dat is beter voor het milieu", "B. Dan rijdt de bus sneller", "C. Dan krijgt u een paspoort"],
      answer: "A. Dat is beter voor het milieu."
    },
    {
      title: "Rijbewijs",
      prompt: "Wat heeft u nodig om auto te rijden?",
      questions: ["A. Een geldig rijbewijs", "B. Alleen een fiets", "C. Een bibliotheekpas"],
      answer: "A. Een geldig rijbewijs."
    },
    {
      title: "Huurcontract",
      prompt: "Waarom leest u een huurcontract goed?",
      questions: ["A. Daarin staan afspraken over de woning", "B. Daarin staan recepten", "C. Daarin staat het weerbericht"],
      answer: "A. Daarin staan afspraken over de woning."
    },
    {
      title: "Openbaar vervoer",
      prompt: "Waarmee kunt u reizen met bus, tram, metro en trein?",
      questions: ["A. Met een OV-chipkaart of betaalpas", "B. Met een zorgpas", "C. Met een zwempas"],
      answer: "A. Met een OV-chipkaart of betaalpas."
    },
    {
      title: "Identificatieplicht",
      prompt: "Vanaf welke leeftijd moet u in Nederland een identiteitsbewijs kunnen laten zien?",
      questions: ["A. Vanaf 14 jaar", "B. Vanaf 3 jaar", "C. Vanaf 30 jaar"],
      answer: "A. Vanaf 14 jaar."
    },
    {
      title: "Sollicitatie",
      prompt: "U solliciteert naar werk. Wat stuurt u meestal mee?",
      questions: ["A. Een cv en motivatiebrief", "B. Een boodschappenlijst", "C. Een treinkaartje"],
      answer: "A. Een cv en motivatiebrief."
    },
    {
      title: "Zorgtoeslag",
      prompt: "Waarvoor is zorgtoeslag bedoeld?",
      questions: ["A. Om te helpen met de zorgverzekering", "B. Om een fiets te kopen", "C. Om vakantie te betalen"],
      answer: "A. Om te helpen met de zorgverzekering."
    },
    {
      title: "Kinderopvang",
      prompt: "Waar gaan jonge kinderen soms heen als ouders werken?",
      questions: ["A. Naar de kinderopvang", "B. Naar de rechtbank", "C. Naar het gemeentehuis om te werken"],
      answer: "A. Naar de kinderopvang."
    },
    {
      title: "Politie",
      prompt: "Wanneer belt u de politie zonder spoed?",
      questions: ["A. Als er geen direct gevaar is", "B. Als u brood wilt kopen", "C. Als u les wilt volgen"],
      answer: "A. Als er geen direct gevaar is."
    },
    {
      title: "Apotheek",
      prompt: "Waar haalt u meestal medicijnen op?",
      questions: ["A. Bij de apotheek", "B. Bij de school", "C. Bij de bibliotheek"],
      answer: "A. Bij de apotheek."
    },
    {
      title: "Gemeenteraad",
      prompt: "Wie neemt besluiten over veel zaken in de gemeente?",
      questions: ["A. De gemeenteraad", "B. De tandarts", "C. De buschauffeur"],
      answer: "A. De gemeenteraad."
    }
  ],
  "word-order": [
    { title: "Zinsvolgorde", prompt: "Zet in de goede volgorde: fiets / ik / naar school", answer: "Ik fiets naar school." },
    { title: "Zinsvolgorde", prompt: "Zet in de goede volgorde: kook / ik / graag / groenten", answer: "Ik kook graag groenten." },
    { title: "Begin met tijd", prompt: "Begin met Morgen: ik / bel / de huisarts", answer: "Morgen bel ik de huisarts." },
    { title: "Begin met plaats", prompt: "Begin met In Sterksel: wij / wonen / rustig", answer: "In Sterksel wonen wij rustig." },
    { title: "Vraag maken", prompt: "Maak een vraag: U woont in Sterksel.", answer: "Woont u in Sterksel?" },
    { title: "Vraagwoord", prompt: "Vraag hoe laat de afspraak is.", answer: "Hoe laat is de afspraak?" },
    { title: "Omdat", prompt: "Maak de zin af: Ik blijf thuis omdat mijn dochter ziek ___.", answer: "Ik blijf thuis omdat mijn dochter ziek is." },
    { title: "Dat", prompt: "Maak de zin af: Ik denk dat de les morgen ___.", answer: "Ik denk dat de les morgen begint." },
    { title: "Als", prompt: "Maak de zin af: Ik bel als ik te laat ___.", answer: "Ik bel als ik te laat ben." },
    { title: "Twee werkwoorden", prompt: "Maak de zin af: Ik wil beter Nederlands ___.", answer: "Ik wil beter Nederlands spreken." }
  ],
  verbs: [
    { title: "Tegenwoordige tijd", prompt: "Kies: Mijn dochter ___ naar school. (gaan / gaat)", answer: "Mijn dochter gaat naar school." },
    { title: "Tegenwoordige tijd", prompt: "Kies: Wij ___ vaak groenten. (eten / eet)", answer: "Wij eten vaak groenten." },
    { title: "Tegenwoordige tijd", prompt: "Kies: U ___ Nederlands. (leer / leert)", answer: "U leert Nederlands." },
    { title: "Hebben of zijn", prompt: "Vul in: Mijn man ___ Nederlands.", answer: "Mijn man is Nederlands." },
    { title: "Hebben of zijn", prompt: "Vul in: U ___ een afspraak om tien uur.", answer: "U heeft een afspraak om tien uur." },
    { title: "Voltooid verleden", prompt: "Maak de zin: Wij / zaterdag / fietsen.", answer: "Wij hebben zaterdag gefietst." },
    { title: "Voltooid verleden", prompt: "Maak de zin: Ik / thuis / werken.", answer: "Ik heb thuis gewerkt." },
    { title: "Voltooid verleden", prompt: "Maak de zin: Zij / thuis / blijven.", answer: "Zij is thuis gebleven." },
    { title: "Toekomst", prompt: "Maak de zin: Vanavond / wij / thuis / eten.", answer: "Vanavond gaan wij thuis eten." },
    { title: "Toekomst", prompt: "Maak de zin: Ik / de school / bellen.", answer: "Ik ga de school bellen." }
  ],
  modal: [
    { title: "Kunnen", prompt: "Maak de zin af: Ik kan morgen niet ___.", answer: "Ik kan morgen niet komen." },
    { title: "Moeten", prompt: "Maak de zin af: Ik moet mijn identiteitsbewijs ___.", answer: "Ik moet mijn identiteitsbewijs meenemen." },
    { title: "Willen", prompt: "Maak de zin af: Ik wil graag een afspraak ___.", answer: "Ik wil graag een afspraak maken." },
    { title: "Mogen", prompt: "Vraag beleefd: Mag ik iets vragen?", answer: "Mag ik iets vragen?" },
    { title: "Scheidbaar werkwoord", prompt: "Maak de zin: Ik / de kinderen / ophalen.", answer: "Ik haal de kinderen op." },
    { title: "Scheidbaar werkwoord", prompt: "Maak de zin: Ik moet / het pakket / ophalen.", answer: "Ik moet het pakket ophalen." },
    { title: "Scheidbaar werkwoord", prompt: "Maak de zin: Ik / de afspraak / afzeggen.", answer: "Ik zeg de afspraak af." },
    { title: "Wederkerend werkwoord", prompt: "Vul in: Ik meld ___ aan voor de cursus.", answer: "Ik meld me aan voor de cursus." },
    { title: "Wederkerend werkwoord", prompt: "Vul in: Zij voelt ___ niet goed.", answer: "Zij voelt zich niet goed." },
    { title: "Praktische zin", prompt: "Maak de zin: Ik moet / mij / inschrijven / voor de Nederlandse les.", answer: "Ik moet me inschrijven voor de Nederlandse les." }
  ],
  nouns: [
    { title: "De of het", prompt: "Kies de of het: ___ paspoort", answer: "het paspoort" },
    { title: "De of het", prompt: "Kies de of het: ___ gemeente", answer: "de gemeente" },
    { title: "De of het", prompt: "Kies de of het: ___ pakket", answer: "het pakket" },
    { title: "Meervoud", prompt: "Maak meervoud: afspraak", answer: "afspraken" },
    { title: "Meervoud", prompt: "Maak meervoud: brief", answer: "brieven" },
    { title: "Meervoud", prompt: "Maak meervoud: vrouw", answer: "vrouwen" },
    { title: "Bijvoeglijk naamwoord", prompt: "Kies: een ___ afspraak (nieuw / nieuwe)", answer: "een nieuwe afspraak" },
    { title: "Bijvoeglijk naamwoord", prompt: "Kies: het ___ formulier (ingevuld / ingevulde)", answer: "het ingevulde formulier" },
    { title: "Bezittelijk", prompt: "Maak de zin: Mijn dochter heeft ___ tas.", answer: "Mijn dochter heeft haar tas." },
    { title: "Voornaamwoord", prompt: "Maak de zin: Kunt u ___ helpen?", answer: "Kunt u mij helpen?" }
  ],
  negation: [
    { title: "Geen", prompt: "Maak de zin af: Ik heb vandaag ___ les.", answer: "Ik heb vandaag geen les." },
    { title: "Geen", prompt: "Maak de zin af: Wij hebben ___ auto.", answer: "Wij hebben geen auto." },
    { title: "Niet", prompt: "Maak de zin af: Ik begrijp de brief ___.", answer: "Ik begrijp de brief niet." },
    { title: "Niet", prompt: "Maak de zin af: De afspraak gaat ___ door.", answer: "De afspraak gaat niet door." },
    { title: "Voorzetsel", prompt: "Maak de zin af: Ik ga ___ de gemeente.", answer: "Ik ga naar de gemeente." },
    { title: "Voorzetsel", prompt: "Maak de zin af: De afspraak is ___ maandag.", answer: "De afspraak is op maandag." },
    { title: "Tijd", prompt: "Vertaal naar het Nederlands: next week", answer: "volgende week" },
    { title: "Tijd", prompt: "Vertaal naar het Nederlands: from seven to nine", answer: "van zeven tot negen" },
    { title: "Omdat", prompt: "Maak de zin: Ik kan niet komen / ik ben ziek.", answer: "Ik kan niet komen omdat ik ziek ben." },
    { title: "Er is", prompt: "Maak de zin af: ___ een probleem met de trein.", answer: "Er is een probleem met de trein." }
  ]
};

for (const lesson of lessons) {
  const extra = supplementalPractice[lesson.id];
  if (extra) lesson.exercises.push(...extra);
}

const writingChecklist = [
  "Heb ik de opdracht beantwoord?",
  "Heb ik een duidelijke begroeting gebruikt als dat nodig is?",
  "Heb ik de belangrijke datum, tijd, reden of vraag genoemd?",
  "Heb ik korte Nederlandse zinnen gebruikt?",
  "Heb ik netjes afgesloten bij een e-mail of bericht?"
];

let activeLessonId = window.location.hash ? window.location.hash.replace("#", "") : lessons[0].id;
if (!lessons.some((lesson) => lesson.id === activeLessonId)) {
  activeLessonId = lessons[0].id;
}

const lessonTabs = document.querySelector("#lessonTabs");
const lessonPanel = document.querySelector("#lessonPanel");
const answerMode = document.querySelector("#answerMode");
const printLesson = document.querySelector("#printLesson");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatText(value) {
  return escapeHtml(value).replaceAll("\n", "<br>");
}

function renderList(items, ordered = false) {
  if (!items || !items.length) return "";
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</${tag}>`;
}

function renderWritingChecklist() {
  return `
    <section class="writing-checklist" aria-label="Checklist schrijven">
      <strong>Controleer uw antwoord voordat u het modelantwoord bekijkt</strong>
      <ul>
        ${writingChecklist.map((item, index) => `
          <li>
            <label>
              <input type="checkbox" data-check="${index}">
              <span>${escapeHtml(item)}</span>
            </label>
          </li>
        `).join("")}
      </ul>
    </section>
  `;
}

function renderWritingAnswerBox(exercise, index) {
  const key = `writing-answer-${index}-${exercise.title}`;
  let saved = "";
  try {
    saved = localStorage.getItem(key) || "";
  } catch {
    saved = "";
  }

  return `
    <label class="writing-box">
      <span>Uw antwoord</span>
      <textarea data-writing-key="${escapeHtml(key)}" rows="7" placeholder="Schrijf hier uw antwoord in het Nederlands...">${escapeHtml(saved)}</textarea>
    </label>
  `;
}

function renderTabs() {
  lessonTabs.innerHTML = lessons
    .map((lesson) => {
      const selected = lesson.id === activeLessonId ? "true" : "false";
      return `
        <button class="lesson-tab" type="button" data-lesson="${lesson.id}" aria-selected="${selected}">
          <span>${lesson.category} ${lesson.number}</span>
          <strong>${lesson.title}</strong>
        </button>
      `;
    })
    .join("");
}

function renderExercise(exercise, index, lesson) {
  const isWriting = lesson.id === "writing";
  return `
    <section class="exercise-card">
      <h4>${index + 1}. ${escapeHtml(exercise.title)}</h4>
      ${exercise.image ? `<figure class="speaking-image"><img src="${escapeHtml(exercise.image)}" alt="${escapeHtml(exercise.title)}"><figcaption>Afbeelding bij spreekopdracht</figcaption></figure>` : ""}
      ${exercise.audio ? `<div class="audio-box"><strong>Luister eerst</strong><audio controls preload="metadata" src="${escapeHtml(exercise.audio)}"></audio></div>` : ""}
      ${exercise.prompt ? `<p>${formatText(exercise.prompt)}</p>` : ""}
      ${renderList(exercise.questions, true)}
      ${isWriting ? renderWritingAnswerBox(exercise, index) : ""}
      <button class="answer-toggle" type="button" aria-label="Toon antwoord voor ${escapeHtml(exercise.title)}">
        <strong>${isWriting ? "Modelantwoord" : "Antwoord"}</strong>
        <span>${formatText(exercise.answer)}</span>
      </button>
    </section>
  `;
}

function renderPanel() {
  const lesson = lessons.find((item) => item.id === activeLessonId) || lessons[0];
  lessonPanel.innerHTML = `
    <header class="lesson-panel-head">
      <h3>${lesson.number} - ${escapeHtml(lesson.title)}</h3>
      <p>${escapeHtml(lesson.goal)}</p>
      <div class="lesson-meta">
        ${lesson.meta.map((item) => `<span class="meta-chip">${escapeHtml(item)}</span>`).join("")}
      </div>
    </header>
    <div class="lesson-content">
      ${lesson.id === "writing" ? renderWritingChecklist() : ""}
      ${lesson.exercises.map((exercise, index) => renderExercise(exercise, index, lesson)).join("")}
    </div>
  `;
}

function render() {
  renderTabs();
  renderPanel();
}

lessonTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (!button) return;
  activeLessonId = button.dataset.lesson;
  window.location.hash = activeLessonId;
  render();
  document.querySelector("#lessons").scrollIntoView({ behavior: "smooth", block: "start" });
});

lessonPanel.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-toggle");
  if (!button) return;
  button.classList.toggle("is-open");
});

lessonPanel.addEventListener("input", (event) => {
  const textarea = event.target.closest(".writing-box textarea");
  if (!textarea) return;
  try {
    localStorage.setItem(textarea.dataset.writingKey, textarea.value);
  } catch {
    // Local storage is optional; writing still works without saving.
  }
});

answerMode.addEventListener("click", () => {
  document.body.classList.toggle("answers-hidden");
  const hidden = document.body.classList.contains("answers-hidden");
  const answerModeLabel = hidden ? "Toon antwoorden" : "Verberg antwoorden";
  answerMode.textContent = answerModeLabel;
  answerMode.setAttribute("aria-label", answerModeLabel);
  answerMode.setAttribute("title", answerModeLabel);
});

printLesson.addEventListener("click", () => {
  window.print();
});

window.addEventListener("hashchange", () => {
  const id = window.location.hash.replace("#", "");
  if (!lessons.some((lesson) => lesson.id === id)) return;
  activeLessonId = id;
  render();
});

render();
