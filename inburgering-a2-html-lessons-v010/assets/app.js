const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte berichten uit het dagelijks leven. Zoek steeds de actie, tijd, plaats en reden.",
    "meta": [
      "A2 examen",
      "Praktische teksten",
      "Nieuwe v10-opgaven"
    ],
    "exercises": [
      {
        "title": "Verhuizing online doorgeven",
        "prompt": "Vanaf maandag kunt u een verhuizing online doorgeven bij de gemeente. Log in met DigiD en upload uw huurcontract. U krijgt binnen vijf werkdagen een bevestiging.",
        "questions": [
          "Vraag 1: Vanaf welke dag kunt u de verhuizing online doorgeven?",
          "Vraag 2: Waarmee logt u in voor de verhuizing?",
          "Vraag 3: Welk document uploadt u voor de gemeente?"
        ],
        "answer": "U kunt de verhuizing vanaf maandag online doorgeven. U logt in met DigiD. U uploadt uw huurcontract."
      },
      {
        "title": "Bloedprikken voor negen uur",
        "prompt": "De huisarts vraagt u morgen nuchter bloed te laten prikken. Kom voor 09.00 uur naar de prikpost. U mag wel water drinken, maar geen ontbijt eten.",
        "questions": [
          "Vraag 1: Wat vraagt de huisarts voor morgen?",
          "Vraag 2: Voor welk tijdstip gaat u naar de prikpost?",
          "Vraag 3: Wat mag u nog drinken voor het bloedprikken?"
        ],
        "answer": "De huisarts vraagt bloedprikken. U gaat voor 09.00 uur naar de prikpost. U mag water drinken."
      },
      {
        "title": "Sportdag op het schoolplein",
        "prompt": "De sportdag van groep 8 begint vrijdag om 08.45 uur op het schoolplein. Kinderen dragen sportschoenen en nemen lunch mee. Ouders mogen vanaf 11.30 uur komen kijken.",
        "questions": [
          "Vraag 1: Waar begint de sportdag van groep 8?",
          "Vraag 2: Welke schoenen dragen de kinderen?",
          "Vraag 3: Vanaf hoe laat mogen ouders komen kijken?"
        ],
        "answer": "De sportdag begint op het schoolplein. De kinderen dragen sportschoenen. Ouders mogen vanaf 11.30 uur komen kijken."
      },
      {
        "title": "Zelfscan met controlelampje",
        "prompt": "Bij de zelfscan bewaart u altijd de bon. Gaat het controlelampje rood branden? Wacht dan op een medewerker bij kassa 4. Leg uw tas open op de tafel.",
        "questions": [
          "Vraag 1: Wat bewaart u bij de zelfscan?",
          "Vraag 2: Bij welke kassa wacht u op een medewerker?",
          "Vraag 3: Wat doet u met uw tas tijdens de controle?"
        ],
        "answer": "U bewaart de bon. U wacht bij kassa 4. U legt uw tas open op de tafel."
      },
      {
        "title": "Buurtbus naar Heeze",
        "prompt": "De buurtbus naar Heeze vertrekt vanaf volgende week om 07.52 uur vanaf het Kerkplein in Sterksel. Op zondag rijdt deze bus niet. Een enkele rit kost drie euro.",
        "questions": [
          "Vraag 1: Naar welke plaats rijdt de buurtbus?",
          "Vraag 2: Vanaf welke halte vertrekt de buurtbus in Sterksel?",
          "Vraag 3: Op welke dag rijdt deze bus niet?"
        ],
        "answer": "De buurtbus rijdt naar Heeze. De bus vertrekt vanaf het Kerkplein. Op zondag rijdt deze bus niet."
      },
      {
        "title": "Factuur met betalingskenmerk",
        "prompt": "Uw klant ontvangt vandaag een herinnering voor factuur 248. Het bedrag moet uiterlijk 25 mei binnen zijn. Zet het factuurnummer in het betalingskenmerk.",
        "questions": [
          "Vraag 1: Welk nummer heeft de factuur?",
          "Vraag 2: Uiterlijk welke datum moet het bedrag binnen zijn?",
          "Vraag 3: Waar zet de klant het factuurnummer?"
        ],
        "answer": "De factuur heeft nummer 248. Het bedrag moet uiterlijk 25 mei binnen zijn. De klant zet het nummer in het betalingskenmerk."
      },
      {
        "title": "Zwembaan reserveren met QR-code",
        "prompt": "Voor banenzwemmen reserveert u vooraf online een plek. Toon bij de ingang uw QR-code. Annuleren kan gratis tot 20.00 uur op de avond ervoor.",
        "questions": [
          "Vraag 1: Waar reserveert u een plek voor banenzwemmen?",
          "Vraag 2: Wat toont u bij de ingang?",
          "Vraag 3: Tot wanneer kunt u gratis annuleren?"
        ],
        "answer": "U reserveert online een plek. U toont uw QR-code bij de ingang. U kunt gratis annuleren tot 20.00 uur op de avond ervoor."
      },
      {
        "title": "Groene container aan de weg",
        "prompt": "Dinsdag wordt de groene container geleegd. Zet de container maandagavond na 20.00 uur aan de weg. De handgreep moet naar de straatkant wijzen.",
        "questions": [
          "Vraag 1: Welke container wordt dinsdag geleegd?",
          "Vraag 2: Wanneer zet u de container buiten?",
          "Vraag 3: Welke kant moet de handgreep op wijzen?"
        ],
        "answer": "De groene container wordt geleegd. U zet de container maandagavond na 20.00 uur buiten. De handgreep wijst naar de straatkant."
      },
      {
        "title": "Onderhoud aan de cv-ketel",
        "prompt": "De monteur komt vrijdag tussen 12.00 en 14.00 uur voor onderhoud aan de cv-ketel. Maak de kast rond de ketel leeg. De monteur belt twintig minuten van tevoren.",
        "questions": [
          "Vraag 1: Waarvoor komt de monteur vrijdag?",
          "Vraag 2: Wat maakt u leeg voor het bezoek?",
          "Vraag 3: Wanneer belt de monteur?"
        ],
        "answer": "De monteur komt voor onderhoud aan de cv-ketel. U maakt de kast rond de ketel leeg. Hij belt twintig minuten van tevoren."
      },
      {
        "title": "Zorgpas met juni-datum",
        "prompt": "Uw zorgverzekeraar stuurt deze maand een nieuwe zorgpas. De oude pas blijft geldig tot 1 juni. Bel de klantenservice als de nieuwe pas niet op tijd komt.",
        "questions": [
          "Vraag 1: Wat stuurt de zorgverzekeraar deze maand?",
          "Vraag 2: Tot welke datum blijft de oude pas geldig?",
          "Vraag 3: Wanneer belt u de klantenservice?"
        ],
        "answer": "De zorgverzekeraar stuurt een nieuwe zorgpas. De oude pas blijft geldig tot 1 juni. U belt als de nieuwe pas niet op tijd komt."
      },
      {
        "title": "E-books hulp in de bibliotheek",
        "prompt": "In de bibliotheek is dinsdag inloophulp voor e-books van 14.00 tot 16.00 uur. Neem uw bibliotheekpas en telefoon mee. Aanmelden is niet nodig.",
        "questions": [
          "Vraag 1: Waar is dinsdag hulp voor e-books?",
          "Vraag 2: Welke spullen neemt u mee voor de e-bookhulp?",
          "Vraag 3: Moet u zich vooraf aanmelden?"
        ],
        "answer": "De hulp is in de bibliotheek. U neemt uw bibliotheekpas en telefoon mee. U hoeft zich niet vooraf aan te melden."
      },
      {
        "title": "Vragenlijst voor tandartscontrole",
        "prompt": "Voor uw tandartscontrole vult u eerst online een korte vragenlijst in. Kom vijf minuten voor de afspraak. Neem uw medicijnoverzicht mee als dat veranderd is.",
        "questions": [
          "Vraag 1: Wat vult u online in voor de tandartscontrole?",
          "Vraag 2: Hoeveel minuten eerder komt u naar de afspraak?",
          "Vraag 3: Wanneer neemt u uw medicijnoverzicht mee?"
        ],
        "answer": "U vult online een korte vragenlijst in. U komt vijf minuten eerder. U neemt uw medicijnoverzicht mee als dat veranderd is."
      },
      {
        "title": "Remmen laten controleren",
        "prompt": "De fietsenmaker controleert vrijdagochtend uw remmen. U kunt de fiets na 15.00 uur ophalen. Als de reparatie duurder wordt dan 40 euro, belt hij eerst.",
        "questions": [
          "Vraag 1: Wat controleert de fietsenmaker vrijdagochtend?",
          "Vraag 2: Vanaf welk tijdstip haalt u de fiets op?",
          "Vraag 3: Waarom belt de fietsenmaker eerst?"
        ],
        "answer": "Hij controleert uw remmen. U kunt de fiets na 15.00 uur ophalen. Hij belt eerst als de reparatie duurder wordt dan 40 euro."
      },
      {
        "title": "Gezinsdag met trein naar Utrecht",
        "prompt": "Voor de gezinsdag naar Utrecht koopt u een treinkaart voor vier personen. Vertrek om 09.18 uur vanaf Heeze. Neem snacks, regenjassen en opgeladen telefoons mee.",
        "questions": [
          "Vraag 1: Voor hoeveel personen koopt u een treinkaart?",
          "Vraag 2: Vanaf welk station vertrekt u om 09.18 uur?",
          "Vraag 3: Welke spullen neemt u mee voor de gezinsdag?"
        ],
        "answer": "U koopt een treinkaart voor vier personen. U vertrekt vanaf Heeze. U neemt snacks, regenjassen en opgeladen telefoons mee."
      },
      {
        "title": "Kookpakket van de boerderijwinkel",
        "prompt": "Uw kookpakket met rundvlees, courgette en wortels ligt vrijdag klaar bij de boerderijwinkel. Neem een koeltas mee. Betalen kan bij het ophalen.",
        "questions": [
          "Vraag 1: Waar ligt het kookpakket vrijdag klaar?",
          "Vraag 2: Welke drie producten zitten in het pakket?",
          "Vraag 3: Wat neemt u mee voor het kookpakket?"
        ],
        "answer": "Het pakket ligt klaar bij de boerderijwinkel. Er zit rundvlees, courgette en wortels in. U neemt een koeltas mee."
      },
      {
        "title": "Podcastwandeling vanaf dorpsplein",
        "prompt": "De wandelgroep vertrekt donderdag om 19.15 uur vanaf het dorpsplein. De route duurt ongeveer veertig minuten. U mag oortjes meenemen voor de podcastopdracht.",
        "questions": [
          "Vraag 1: Waar vertrekt de wandelgroep donderdag?",
          "Vraag 2: Hoe lang duurt de route ongeveer?",
          "Vraag 3: Waarom mag u oortjes meenemen?"
        ],
        "answer": "De groep vertrekt vanaf het dorpsplein. De route duurt ongeveer veertig minuten. U mag oortjes meenemen voor de podcastopdracht."
      },
      {
        "title": "Sleutel gevonden in buurtapp",
        "prompt": "In de buurtapp staat dat er een sleutel met een blauw label is gevonden bij de speeltuin. De sleutel ligt vanavond tot 21.00 uur op huisnummer 22.",
        "questions": [
          "Vraag 1: Wat is er bij de speeltuin gevonden?",
          "Vraag 2: Welke kleur heeft het label aan de sleutel?",
          "Vraag 3: Tot hoe laat ligt de sleutel op huisnummer 22?"
        ],
        "answer": "Er is een sleutel gevonden. Het label is blauw. De sleutel ligt tot 21.00 uur op huisnummer 22."
      },
      {
        "title": "Mini-examen loket burgerzaken",
        "prompt": "In het bericht staat: het loket burgerzaken is woensdag alleen open van 13.00 tot 17.00 uur. U moet eerst online een afspraak maken.",
        "questions": [
          "Vraag 1: Kies het goede antwoord: A. U kunt woensdag de hele dag zonder afspraak komen. B. U maakt online een afspraak voor het loket. C. Het loket burgerzaken is woensdag gesloten."
        ],
        "answer": "B. U maakt online een afspraak voor het loket."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf korte formulieren, e-mails en berichten met duidelijke A2-zinnen.",
    "meta": [
      "Schriftelijk examen",
      "Berichten en formulieren",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Formulier voor verhuizing",
        "prompt": "Vul een kort formulier in voor de gemeente. Schrijf uw naam, nieuwe straat, verhuisdatum en met hoeveel personen u verhuist.",
        "answer": "Naam: Violetta Bonenkamp\nNieuwe straat: De Heerlijkheid 12, Sterksel\nVerhuisdatum: 1 juni\nAantal personen: 4"
      },
      {
        "title": "Vraag over bloedprikken",
        "prompt": "Schrijf een bericht aan de huisarts. U wilt weten of u uw medicijnen mag nemen voor het nuchter bloedprikken.",
        "answer": "Beste huisarts,\n\nIk moet morgen nuchter bloed laten prikken. Mag ik mijn medicijnen wel nemen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Afmelden als hulpouder",
        "prompt": "Schrijf in de schoolapp. U kunt vrijdag niet helpen bij de sportdag en wenst de klas veel plezier.",
        "answer": "Beste leerkracht,\n\nIk kan vrijdag helaas niet helpen bij de sportdag. Ik wens de klas veel plezier.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Dubbele scan melden",
        "prompt": "Schrijf aan de supermarkt. Een product is twee keer gescand. Vraag hoe u geld terugkrijgt.",
        "answer": "Beste klantenservice,\n\nEen product is twee keer gescand bij de zelfscan. Hoe kan ik mijn geld terugkrijgen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over buurtbus op zondag",
        "prompt": "Schrijf aan de vervoerder. U wilt weten of er op zondag een andere bus naar Heeze rijdt.",
        "answer": "Beste medewerker,\n\nRijdt er op zondag een andere bus van Sterksel naar Heeze?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vriendelijke factuurherinnering",
        "prompt": "Schrijf een korte e-mail aan een klant. De factuur staat nog open en u vraagt om betaling voor 25 mei.",
        "answer": "Beste klant,\n\nFactuur 248 staat nog open. Kunt u het bedrag voor 25 mei betalen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Zwembaan reserveren",
        "prompt": "Schrijf aan het zwembad. U wilt woensdag om 07.30 uur banenzwemmen en vraagt of er nog plek is.",
        "answer": "Beste medewerker,\n\nIk wil woensdag om 07.30 uur banenzwemmen. Is er nog een plek vrij?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Bericht over container",
        "prompt": "Schrijf aan uw buurvrouw. Haar groene container staat nog op straat en morgen komt er veel wind.",
        "answer": "Hoi buurvrouw,\n\nUw groene container staat nog op straat. Morgen komt er veel wind. Zal ik hem naast uw huis zetten?\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Cv-afspraak verplaatsen",
        "prompt": "Schrijf aan de woningcorporatie. Vrijdag tussen 12.00 en 14.00 uur bent u niet thuis. Vraag om een nieuwe afspraak.",
        "answer": "Beste woningcorporatie,\n\nVrijdag tussen 12.00 en 14.00 uur ben ik niet thuis. Kunt u een nieuwe afspraak maken voor de cv-ketel?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Nieuwe zorgpas niet ontvangen",
        "prompt": "Schrijf aan de zorgverzekeraar. Uw nieuwe zorgpas is nog niet gekomen en u vraagt wat u moet doen.",
        "answer": "Beste meneer/mevrouw,\n\nMijn nieuwe zorgpas is nog niet gekomen. Wat moet ik nu doen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Aanmelden voor e-bookhulp",
        "prompt": "Schrijf aan de bibliotheek. U wilt dinsdag hulp met e-books en vraagt of u uw tablet moet meenemen.",
        "answer": "Beste bibliotheek,\n\nIk wil dinsdag graag hulp met e-books. Moet ik mijn tablet meenemen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Tandartscontrole uitstellen",
        "prompt": "Schrijf aan de tandarts. U kunt maandag niet komen en vraagt om een afspraak later in de week.",
        "answer": "Beste tandarts,\n\nIk kan maandag niet naar de controle komen. Heeft u later in de week een afspraak vrij?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Prijs voor fietsreparatie vragen",
        "prompt": "Schrijf aan de fietsenmaker. Uw remmen maken geluid en u wilt eerst weten wat de reparatie kost.",
        "answer": "Beste fietsenmaker,\n\nMijn remmen maken geluid. Kunt u eerst zeggen wat de reparatie ongeveer kost?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Gezinsdag bevestigen",
        "prompt": "Schrijf aan uw man. Vertel hoe laat de trein naar Utrecht vertrekt en wat iedereen moet meenemen.",
        "answer": "Hoi,\n\nDe trein naar Utrecht vertrekt om 09.18 uur vanaf Heeze. Neem snacks, regenjassen en opgeladen telefoons mee.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Kookpakket bestellen",
        "prompt": "Schrijf aan de boerderijwinkel. U wilt het kookpakket voor vrijdag bestellen en vraagt hoe laat u het kunt ophalen.",
        "answer": "Beste medewerker,\n\nIk wil graag het kookpakket voor vrijdag bestellen. Hoe laat kan ik het ophalen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Podcastwandeling afspreken",
        "prompt": "Schrijf een bericht aan een vriendin. U wilt donderdag wandelen en samen een podcast over AI luisteren.",
        "answer": "Hoi,\n\nZullen we donderdag wandelen en samen een podcast over AI luisteren? Ik kan om 19.15 uur bij het dorpsplein zijn.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Vier zinnen over gezonde werkdag",
        "prompt": "Schrijf vier korte zinnen over een gezonde werkdag thuis. Gebruik de woorden water, pauze, lunch en bewegen.",
        "answer": "Ik drink veel water. Om tien uur neem ik pauze. Mijn lunch is salade met kip. In de middag ga ik even bewegen."
      },
      {
        "title": "Vijf zinnen over dochters na school",
        "prompt": "Schrijf vijf korte zinnen over een middag met uw dochters na school. Gebruik korte A2-zinnen.",
        "answer": "Mijn dochters komen om drie uur thuis. We drinken thee aan tafel. Daarna maken zij huiswerk. Ik kook groenten en vlees. Later praten we over de dag."
      }
    ]
  },
  {
    "id": "speaking",
    "number": "03",
    "category": "Examen",
    "title": "Spreken",
    "goal": "Spreek hardop in korte zinnen. Oefen vragen stellen, uitleg geven en iets beschrijven.",
    "meta": [
      "Mondeling examen",
      "Korte antwoorden",
      "Met afbeeldingen"
    ],
    "exercises": [
      {
        "title": "AI-examenronde met korte reacties",
        "prompt": "Start een spraaktool en vraag om twaalf korte A2-vragen over wonen, zorg, school, vervoer en werk.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel twaalf korte vragen over wonen, zorg, school, vervoer, werk, boodschappen, sport, buren en familie. Wacht na elke vraag op mijn antwoord."
      },
      {
        "title": "Voorstellen bij een cursus",
        "prompt": "Vertel uw naam, woonplaats, gezin en waarom u Nederlands oefent.",
        "answer": "Hallo, ik ben Violetta Bonenkamp. Ik woon in Sterksel met mijn man en twee dochters. Ik oefen Nederlands voor mijn examen."
      },
      {
        "title": "Werkplek thuis beschrijven",
        "prompt": "Vertel hoe uw werkplek thuis eruitziet.",
        "answer": "Ik werk thuis aan een bureau. Op mijn bureau staan een laptop, een glas water en een lijst met taken."
      },
      {
        "title": "Vraag over verhuizing",
        "prompt": "U bent bij de gemeente. Vraag hoe u een verhuizing kunt doorgeven.",
        "answer": "Goedemorgen, hoe kan ik mijn verhuizing doorgeven bij de gemeente?"
      },
      {
        "title": "Bloedprikken uitleggen",
        "prompt": "Leg aan de assistente uit dat u nuchter bent voor bloedprikken.",
        "answer": "Goedemorgen, ik kom voor bloedprikken. Ik heb niet ontbeten en ik heb alleen water gedronken."
      },
      {
        "title": "Sportdagvraag aan leerkracht",
        "prompt": "Vraag aan de leerkracht waar uw dochter vrijdag moet verzamelen.",
        "answer": "Goedemorgen, waar moet mijn dochter vrijdag verzamelen voor de sportdag?"
      },
      {
        "title": "Hulp bij zelfscan vragen",
        "prompt": "Vraag in de supermarkt om hulp omdat het controlelampje rood is.",
        "answer": "Goedemiddag, het controlelampje is rood. Kunt u mij helpen bij de zelfscan?"
      },
      {
        "title": "Buurtbus controleren",
        "prompt": "Vraag aan de chauffeur of de bus bij het Kerkplein stopt.",
        "answer": "Goedemorgen, stopt deze bus ook bij het Kerkplein in Sterksel?"
      },
      {
        "title": "Factuur aan klant noemen",
        "prompt": "Vertel een klant kort dat u de factuur opnieuw heeft gestuurd.",
        "answer": "Ik heb de factuur vandaag opnieuw gestuurd. Kunt u het bedrag voor 25 mei betalen?"
      },
      {
        "title": "QR-code bij zwembad",
        "prompt": "Vraag bij het zwembad waar u de QR-code moet laten zien.",
        "answer": "Goedemorgen, ik heb online gereserveerd. Waar moet ik mijn QR-code laten zien?"
      },
      {
        "title": "Container voor buurvrouw",
        "prompt": "Vertel uw buurvrouw dat u haar container veilig naast het huis zet.",
        "answer": "Uw container staat nog aan de weg. Ik zet hem naast het huis, want morgen waait het hard."
      },
      {
        "title": "Cv-monteur ontvangen",
        "prompt": "Vertel aan de monteur waar de cv-ketel is.",
        "answer": "Goedemiddag, de cv-ketel hangt in de kast boven. Ik heb de spullen al weggehaald."
      },
      {
        "title": "Zorgpas navragen",
        "prompt": "Bel de zorgverzekeraar en vraag waar uw nieuwe zorgpas blijft.",
        "answer": "Goedemorgen, mijn nieuwe zorgpas is nog niet gekomen. Kunt u zien wanneer ik de pas krijg?"
      },
      {
        "title": "E-books in bibliotheek",
        "prompt": "Vraag in de bibliotheek om hulp met e-books op uw telefoon.",
        "answer": "Goedemiddag, ik wil e-books lezen op mijn telefoon. Kunt u mij daarbij helpen?"
      },
      {
        "title": "Tandartscontrole verzetten",
        "prompt": "Vraag de tandarts om een nieuwe controleafspraak.",
        "answer": "Goedemorgen, ik kan maandag niet komen. Heeft u later deze week een nieuwe afspraak?"
      },
      {
        "title": "Fietsremmen beschrijven",
        "prompt": "Vertel aan de fietsenmaker wat er mis is met uw fiets.",
        "answer": "Mijn remmen maken geluid en de fiets stopt niet snel genoeg. Kunt u ernaar kijken?"
      },
      {
        "title": "Plan voor dagje Utrecht",
        "prompt": "Vertel uw gezin wat u meeneemt voor het dagje Utrecht.",
        "answer": "Ik neem snacks, regenjassen, treinkaarten en opgeladen telefoons mee. We vertrekken om 09.18 uur."
      },
      {
        "title": "Kookpakket beschrijven",
        "prompt": "Vertel wat u vrijdag met het kookpakket gaat maken.",
        "answer": "Ik ga rundvlees bakken met courgette en wortels. We eten er aardappels uit de oven bij."
      },
      {
        "title": "Podcastwandeling voorstellen",
        "prompt": "Vraag aan een vriendin of zij donderdag wil wandelen en een podcast luisteren.",
        "answer": "Wil je donderdagavond met mij wandelen? We kunnen een podcast over AI luisteren."
      },
      {
        "title": "Afbeelding gemeente verhuisbalie",
        "prompt": "Kijk naar de afbeelding. Beschrijf waar u bent en welke vraag u stelt.",
        "image": "images/speaking/v010-speaking-municipality-moving-desk-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch municipal office. Scene: service desk for reporting a move, simple counter, waiting chairs, neutral documents, appointment screen intentionally unreadable, daylight. No readable text, no logos, no watermark.",
        "answer": "Ik ben bij de gemeente. Ik vraag hoe ik mijn verhuizing kan doorgeven."
      },
      {
        "title": "Afbeelding zelfscan in supermarkt",
        "prompt": "Kijk naar de afbeelding. Vertel wat u doet bij de zelfscan.",
        "image": "images/speaking/v010-speaking-supermarket-selfscan-help-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch supermarket self-checkout area. Scene: self-scan machine, basket with vegetables, receipt, helper station, no readable labels, bright practical light. No readable text, no logos, no watermark.",
        "answer": "Ik sta bij de zelfscan. Het lampje is rood en ik vraag een medewerker om hulp."
      },
      {
        "title": "Afbeelding fietsenmaker met remmen",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u bij de fietsenmaker bent.",
        "image": "images/speaking/v010-speaking-bike-repair-brakes-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style inside a Dutch bicycle repair shop. Scene: city bike on repair stand, mechanic checking brakes, tools on wall without readable brand names, calm daylight. No readable text, no logos, no watermark.",
        "answer": "Ik ben bij de fietsenmaker omdat mijn remmen geluid maken. Ik vraag wat de reparatie kost."
      },
      {
        "title": "Afbeelding bibliotheek met telefoon",
        "prompt": "Kijk naar de afbeelding. Vertel welke hulp u vraagt.",
        "image": "images/speaking/v010-speaking-library-ebook-help-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch public library. Scene: help desk with phone and tablet on table, shelves in background, library card, no readable book titles, soft indoor light. No readable text, no logos, no watermark.",
        "answer": "Ik ben in de bibliotheek. Ik vraag hulp om e-books op mijn telefoon te lezen."
      },
      {
        "title": "Afbeelding zwembadbaan met QR",
        "prompt": "Kijk naar de afbeelding. Vertel wat u bij het zwembad doet.",
        "image": "images/speaking/v010-speaking-pool-lane-qr-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style at a Dutch swimming pool entrance. Scene: lane swimming area in background, towel, goggles, phone showing an abstract QR-like square with no readable text, clean bright light. No readable text, no logos, no watermark.",
        "answer": "Ik kom banenzwemmen. Ik laat mijn QR-code zien en vraag naar mijn baan."
      },
      {
        "title": "Afbeelding kookpakket in keuken",
        "prompt": "Kijk naar de afbeelding. Beschrijf wat u gaat koken.",
        "image": "images/speaking/v010-speaking-kitchen-farmbox-dinner-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a tidy Dutch home kitchen. Scene: farm shop food box with beef, courgette, carrots, cutting board, pan, family dinner preparation, natural window light. No readable text, no logos, no watermark.",
        "answer": "Ik ga koken met rundvlees, courgette en wortels. Het wordt een gezonde maaltijd voor mijn gezin."
      },
      {
        "title": "Schooltas van dochter",
        "prompt": "Vertel wat uw dochter meeneemt naar school voor een lange dag.",
        "answer": "Zij neemt haar schooltas, lunch, water en sportschoenen mee. Na school komt zij direct naar huis."
      },
      {
        "title": "Gezond weekplan",
        "prompt": "Vertel welke gezonde dingen u deze week wilt doen.",
        "answer": "Deze week wil ik zwemmen, fietsen en wandelen. Ook wil ik veel groenten eten en op tijd pauze nemen."
      },
      {
        "title": "Kort antwoord bij loket",
        "prompt": "U komt bij een loket en de medewerker vraagt waarvoor u komt. Geef een kort antwoord.",
        "answer": "Ik kom voor mijn verhuizing. Ik wil weten welke gegevens de gemeente nodig heeft."
      }
    ]
  },
  {
    "id": "listening",
    "number": "04",
    "category": "Examen",
    "title": "Luisteren",
    "goal": "Luister naar korte berichten. Beantwoord vragen over tijd, plaats, persoon en actie.",
    "meta": [
      "A2 examen",
      "16 MP3-fragmenten",
      "Audio met transcript"
    ],
    "exercises": [
      {
        "title": "AI-luistercoach voor acties",
        "prompt": "Start een spraaktool en vraag om een kort A2-luisterbericht met een plaats, tijd, probleem en oplossing.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor met een plaats, een tijd, een probleem en een oplossing. Stel daarna drie vragen."
      },
      {
        "title": "Verhuizing doorgeven met DigiD",
        "audio": "audio/v010-listening-01-gemeente-verhuizing-digid.mp3",
        "questions": [
          "Vraag 1: Welke verandering kan mevrouw online doorgeven?",
          "Vraag 2: Waarmee moet zij inloggen?",
          "Vraag 3: Binnen hoeveel werkdagen krijgt zij bericht?"
        ],
        "answer": "Zij kan haar verhuizing online doorgeven. Zij logt in met DigiD. Zij krijgt binnen vijf werkdagen bericht."
      },
      {
        "title": "Nuchter naar de prikpost",
        "audio": "audio/v010-listening-02-huisarts-bloedprikken-nuchter.mp3",
        "questions": [
          "Vraag 1: Waar moet mevrouw morgen naartoe?",
          "Vraag 2: Voor welk tijdstip moet zij komen?",
          "Vraag 3: Wat mag zij wel drinken?"
        ],
        "answer": "Zij moet naar de prikpost. Zij moet voor negen uur komen. Zij mag water drinken."
      },
      {
        "title": "Sportdag van groep acht",
        "audio": "audio/v010-listening-03-school-sportdag-plein.mp3",
        "questions": [
          "Vraag 1: Welke groep heeft vrijdag sportdag?",
          "Vraag 2: Hoe laat verzamelen de kinderen?",
          "Vraag 3: Welke twee dingen nemen zij mee?"
        ],
        "answer": "Groep acht heeft sportdag. De kinderen verzamelen om kwart voor negen. Zij nemen sportschoenen en lunch mee."
      },
      {
        "title": "Controle bij zelfscan",
        "audio": "audio/v010-listening-04-supermarkt-zelfscan-controle.mp3",
        "questions": [
          "Vraag 1: Waar heeft mevrouw een controle?",
          "Vraag 2: Bij welke kassa wacht zij?",
          "Vraag 3: Waarin kijkt de medewerker?"
        ],
        "answer": "Zij heeft controle bij de zelfscan. Zij wacht bij kassa vier. De medewerker kijkt in haar tas."
      },
      {
        "title": "Buurtbus vanaf Kerkplein",
        "audio": "audio/v010-listening-05-buurtbus-heeze-kerkplein.mp3",
        "questions": [
          "Vraag 1: Naar welke plaats rijdt de buurtbus?",
          "Vraag 2: Vanaf welke halte vertrekt de buurtbus?",
          "Vraag 3: Op welke dag rijdt deze buurtbus niet?"
        ],
        "answer": "De bus rijdt naar Heeze. De bus vertrekt vanaf het Kerkplein. Op zondag rijdt de bus niet."
      },
      {
        "title": "Factuur opnieuw gestuurd",
        "audio": "audio/v010-listening-06-werk-factuur-herinnering.mp3",
        "questions": [
          "Vraag 1: Wat heeft de klant niet gevonden?",
          "Vraag 2: Welk factuurnummer noemt de klant?",
          "Vraag 3: Voor welke datum betaalt de klant?"
        ],
        "answer": "De klant heeft de factuur niet gevonden. Het nummer is 248. De klant betaalt voor 25 mei."
      },
      {
        "title": "Banenzwemmen reserveren",
        "audio": "audio/v010-listening-07-zwembad-baan-qr.mp3",
        "questions": [
          "Vraag 1: Voor welke activiteit is nog plek?",
          "Vraag 2: Op welke dag en tijd is de plek vrij?",
          "Vraag 3: Wat toont mevrouw bij de ingang?"
        ],
        "answer": "Er is plek voor banenzwemmen. De plek is woensdag om half acht. Zij toont haar QR-code."
      },
      {
        "title": "Groene container en wind",
        "audio": "audio/v010-listening-08-buren-container-wind.mp3",
        "questions": [
          "Vraag 1: Welke container staat nog buiten?",
          "Vraag 2: Waar moet de container staan?",
          "Vraag 3: Waarom is dat nodig voor morgen?"
        ],
        "answer": "De groene container staat buiten. De container moet naast het huis staan. Morgen gaat het hard waaien."
      },
      {
        "title": "Cv-ketel vrijmaken",
        "audio": "audio/v010-listening-09-woning-cv-ketel-service.mp3",
        "questions": [
          "Vraag 1: Wanneer komt de monteur voor de cv-ketel?",
          "Vraag 2: Wat moet mevrouw leegmaken?",
          "Vraag 3: Hoe lang van tevoren belt de monteur?"
        ],
        "answer": "Hij komt vrijdag tussen twaalf en twee. Zij maakt de kast rond de ketel leeg. Hij belt twintig minuten van tevoren."
      },
      {
        "title": "Zorgpas onderweg",
        "audio": "audio/v010-listening-10-zorgverzekering-nieuwe-pas.mp3",
        "questions": [
          "Vraag 1: Wanneer is de nieuwe zorgpas verstuurd?",
          "Vraag 2: Tot welke datum kan mevrouw de oude pas gebruiken?",
          "Vraag 3: Op welke dag neemt zij opnieuw contact op?"
        ],
        "answer": "De nieuwe zorgpas is maandag verstuurd. De oude pas kan tot 1 juni gebruikt worden. Zij belt terug als de post vrijdag nog niet is gekomen."
      },
      {
        "title": "E-bookhulp zonder aanmelding",
        "audio": "audio/v010-listening-11-bibliotheek-ebookhulp.mp3",
        "questions": [
          "Vraag 1: Wanneer is er e-bookhulp in de bibliotheek?",
          "Vraag 2: Moet mevrouw zich aanmelden?",
          "Vraag 3: Welke twee spullen neemt zij mee?"
        ],
        "answer": "De e-bookhulp is dinsdag van twee tot vier uur. Zij hoeft zich niet aan te melden. Zij neemt haar bibliotheekpas en telefoon mee."
      },
      {
        "title": "Vragenlijst tandarts",
        "audio": "audio/v010-listening-12-tandarts-vragenlijst.mp3",
        "questions": [
          "Vraag 1: Wat vult mevrouw vandaag online in?",
          "Vraag 2: Hoeveel minuten eerder komt zij maandag?",
          "Vraag 3: Welk overzicht neemt zij mee?"
        ],
        "answer": "Zij vult de online vragenlijst in. Zij komt vijf minuten eerder. Zij neemt een medicijnoverzicht mee."
      },
      {
        "title": "Fiets ophalen na reparatie",
        "audio": "audio/v010-listening-13-fiets-remmen-ophalen.mp3",
        "questions": [
          "Vraag 1: Welk onderdeel van de fiets is gecontroleerd?",
          "Vraag 2: Na hoe laat kan mevrouw de fiets ophalen?",
          "Vraag 3: Wat is het bedrag voor de reparatie?"
        ],
        "answer": "De remmen zijn gecontroleerd. Zij kan de fiets na drie uur ophalen. De reparatie kost 32 euro."
      },
      {
        "title": "Gezin vertrekt naar Utrecht",
        "audio": "audio/v010-listening-14-gezin-trein-utrecht.mp3",
        "questions": [
          "Vraag 1: Naar welke stad gaat het gezin?",
          "Vraag 2: Vanaf welk station vertrekt de trein?",
          "Vraag 3: In welk rijtuig zit het gezin?"
        ],
        "answer": "Het gezin gaat naar Utrecht. De trein vertrekt vanaf Heeze. Het gezin zit in het tweede rijtuig."
      },
      {
        "title": "Kookpakket vrijdag klaar",
        "audio": "audio/v010-listening-15-boerderijwinkel-kookpakket.mp3",
        "questions": [
          "Vraag 1: Vanaf hoe laat ligt het kookpakket klaar?",
          "Vraag 2: Welke drie producten zitten in het pakket?",
          "Vraag 3: Wat neemt mevrouw mee naar de boerderijwinkel?"
        ],
        "answer": "Het pakket ligt vanaf vier uur klaar. Er zit rundvlees, courgette en wortel in. Zij neemt een koeltas mee."
      },
      {
        "title": "Wandeling met podcast",
        "audio": "audio/v010-listening-16-podcastwandeling-dorpsplein.mp3",
        "questions": [
          "Vraag 1: Waar begint de podcastwandeling?",
          "Vraag 2: Hoe lang duurt de route?",
          "Vraag 3: Wat is handig maar niet verplicht?"
        ],
        "answer": "De wandeling begint op het dorpsplein. De route duurt veertig minuten. Oortjes zijn handig maar niet verplicht."
      }
    ]
  },
  {
    "id": "knm",
    "number": "05",
    "category": "Examen",
    "title": "KNM",
    "goal": "Oefen kennisvragen over wonen, zorg, school, werk, gemeente, rechten en dagelijkse regels.",
    "meta": [
      "KNM",
      "Meerkeuzevragen",
      "A/B/C verdeeld"
    ],
    "exercises": [
      {
        "title": "BRP bij de gemeente",
        "prompt": "Vraag: Wat staat er in de Basisregistratie Personen (BRP)?",
        "questions": [
          "A. Alle prijzen van winkels in uw buurt.",
          "B. Persoonsgegevens zoals adres, geboorte en gezin.",
          "C. Alle vrije banen in de provincie."
        ],
        "answer": "B. Persoonsgegevens zoals adres, geboorte en gezin."
      },
      {
        "title": "DigiD voor online regelen",
        "prompt": "Vraag: Waarvoor gebruikt u DigiD meestal?",
        "questions": [
          "A. Om contant geld te betalen in de supermarkt.",
          "B. Om gratis met de bus te reizen.",
          "C. Om veilig in te loggen bij overheid en zorg."
        ],
        "answer": "C. Om veilig in te loggen bij overheid en zorg."
      },
      {
        "title": "Afspraak bij gemeente",
        "prompt": "Vraag: Wat is verstandig als u een afspraak bij de gemeente heeft?",
        "questions": [
          "A. U neemt een geldig identiteitsbewijs mee en komt op tijd.",
          "B. U stuurt alleen een buurman met uw naam.",
          "C. U komt zonder afspraak wanneer het u uitkomt."
        ],
        "answer": "A. U neemt een geldig identiteitsbewijs mee en komt op tijd."
      },
      {
        "title": "Juiste container kiezen",
        "prompt": "Vraag: Wat hoort bij goed afvalgedrag in Nederland?",
        "questions": [
          "A. Alle soorten afval in dezelfde zak doen.",
          "B. Afval scheiden en de juiste containerdag gebruiken.",
          "C. Afval naast de container laten staan."
        ],
        "answer": "B. Afval scheiden en de juiste containerdag gebruiken."
      },
      {
        "title": "Huisarts als eerste stap",
        "prompt": "Vraag: Waar gaat u meestal eerst naartoe bij een gewone medische klacht?",
        "questions": [
          "A. Naar de huisarts of de huisartsenpraktijk.",
          "B. Direct naar de spoedeisende hulp.",
          "C. Naar de burgemeester."
        ],
        "answer": "A. Naar de huisarts of de huisartsenpraktijk."
      },
      {
        "title": "Spoednummer kennen",
        "prompt": "Vraag: Wanneer belt u 112?",
        "questions": [
          "A. Als u een afspraak wilt verzetten.",
          "B. Als de supermarktbon niet klopt.",
          "C. Bij direct gevaar voor leven, brand of ernstige politiehulp."
        ],
        "answer": "C. Bij direct gevaar voor leven, brand of ernstige politiehulp."
      },
      {
        "title": "Leerplicht voor kinderen",
        "prompt": "Vraag: Wat betekent leerplicht?",
        "questions": [
          "A. Kinderen mogen zelf kiezen of zij naar school gaan.",
          "B. Ouders hoeven school nooit te informeren.",
          "C. Kinderen moeten naar school en ouders zorgen daarvoor."
        ],
        "answer": "C. Kinderen moeten naar school en ouders zorgen daarvoor."
      },
      {
        "title": "Oudercontact met school",
        "prompt": "Vraag: Wat doet u als uw kind ziek is en niet naar school kan?",
        "questions": [
          "A. U wacht tot de school zelf belt.",
          "B. U meldt uw kind ziek volgens de regels van school.",
          "C. U stuurt uw kind toch altijd naar school."
        ],
        "answer": "B. U meldt uw kind ziek volgens de regels van school."
      },
      {
        "title": "Contractafspraken controleren",
        "prompt": "Vraag: Wat is belangrijk voordat u een arbeidscontract tekent?",
        "questions": [
          "A. U leest afspraken over loon, uren en functie goed.",
          "B. U tekent zonder te kijken omdat dat sneller is.",
          "C. U laat de werkgever uw DigiD gebruiken."
        ],
        "answer": "A. U leest afspraken over loon, uren en functie goed."
      },
      {
        "title": "Belastingaangifte",
        "prompt": "Vraag: Wat kan de Belastingdienst van inwoners vragen?",
        "questions": [
          "A. Dat iedereen elke dag op kantoor komt.",
          "B. Dat u uw fietsverzekering opzegt.",
          "C. Dat u op tijd belastingaangifte doet als dat nodig is."
        ],
        "answer": "C. Dat u op tijd belastingaangifte doet als dat nodig is."
      },
      {
        "title": "Stemrecht gemeente",
        "prompt": "Vraag: Waarover stemt u bij gemeenteraadsverkiezingen?",
        "questions": [
          "A. Over de gemeenteraad van uw woonplaats.",
          "B. Over de schoolcijfers van uw kind.",
          "C. Over de prijs van treinkaartjes."
        ],
        "answer": "B. Over de schoolcijfers van uw kind."
      },
      {
        "title": "Respect in het verkeer",
        "prompt": "Vraag: Wat doet u als fietser bij een rood verkeerslicht?",
        "questions": [
          "A. U stopt en wacht tot het groen wordt.",
          "B. U fietst snel door als niemand kijkt.",
          "C. U belt de gemeente voor toestemming."
        ],
        "answer": "A. U stopt en wacht tot het groen wordt."
      },
      {
        "title": "Huurwoning onderhoud",
        "prompt": "Vraag: Wat doet u bij een ernstige storing in een huurwoning?",
        "questions": [
          "A. U stopt met huur betalen zonder bericht.",
          "B. U negeert de storing maandenlang.",
          "C. U meldt de storing bij verhuurder of woningcorporatie."
        ],
        "answer": "C. U meldt de storing bij verhuurder of woningcorporatie."
      },
      {
        "title": "Zorgverzekering verplicht",
        "prompt": "Vraag: Wat geldt voor volwassen inwoners in Nederland?",
        "questions": [
          "A. Een basiszorgverzekering is meestal verplicht.",
          "B. Zorgverzekering is alleen voor mensen met kinderen.",
          "C. U mag nooit van zorgverzekeraar veranderen."
        ],
        "answer": "A. Een basiszorgverzekering is meestal verplicht."
      },
      {
        "title": "Wat de bibliotheek biedt",
        "prompt": "Vraag: Wat kunt u vaak doen in de openbare bibliotheek?",
        "questions": [
          "A. Alleen rijbewijzen aanvragen.",
          "B. Boeken lenen en hulp krijgen met taal of digitale zaken.",
          "C. Medicijnen ophalen zonder recept."
        ],
        "answer": "B. Boeken lenen en hulp krijgen met taal of digitale zaken."
      },
      {
        "title": "Bankzaken veilig",
        "prompt": "Vraag: Wat is veilig online bankieren?",
        "questions": [
          "A. Uw pincode aan een onbekende geven.",
          "B. Inloggen via een vreemde link in een bericht.",
          "C. Zelf naar de bankapp gaan en codes geheim houden."
        ],
        "answer": "C. Zelf naar de bankapp gaan en codes geheim houden."
      },
      {
        "title": "Buren en geluid",
        "prompt": "Vraag: Wat is meestal verstandig bij overlast van buren?",
        "questions": [
          "A. Eerst rustig praten of een bericht sturen.",
          "B. Meteen hun spullen weggooien.",
          "C. Zelf extra hard geluid maken."
        ],
        "answer": "A. Eerst rustig praten of een bericht sturen."
      },
      {
        "title": "Meehelpen zonder loon",
        "prompt": "Vraag: Waarom doen mensen vrijwilligerswerk?",
        "questions": [
          "A. Om nooit belasting te hoeven betalen.",
          "B. Om anderen te helpen en mee te doen in de samenleving.",
          "C. Omdat de gemeente iedereen verplicht dezelfde taak geeft."
        ],
        "answer": "B. Om anderen te helpen en mee te doen in de samenleving."
      },
      {
        "title": "Kostenhulp voor kinderopvang",
        "prompt": "Vraag: Waarvoor kan kinderopvangtoeslag bedoeld zijn?",
        "questions": [
          "A. Voor hulp bij kosten van erkende kinderopvang.",
          "B. Voor korting op boodschappen.",
          "C. Voor gratis vakanties buiten Nederland."
        ],
        "answer": "C. Voor gratis vakanties buiten Nederland."
      },
      {
        "title": "Rijbewijs gebruiken",
        "prompt": "Vraag: Wanneer mag u autorijden in Nederland?",
        "questions": [
          "A. Als u een geldig rijbewijs heeft en zich aan verkeersregels houdt.",
          "B. Als u alleen korte stukjes rijdt zonder rijbewijs.",
          "C. Als uw buurman toestemming geeft."
        ],
        "answer": "A. Als u een geldig rijbewijs heeft en zich aan verkeersregels houdt."
      },
      {
        "title": "Vrijheid van meningsuiting",
        "prompt": "Vraag: Wat betekent vrijheid van meningsuiting?",
        "questions": [
          "A. U mag uw mening geven binnen de grenzen van de wet.",
          "B. U mag altijd iemand bedreigen.",
          "C. U hoeft nooit naar anderen te luisteren."
        ],
        "answer": "B. U mag altijd iemand bedreigen."
      },
      {
        "title": "Iedereen gelijk behandelen",
        "prompt": "Vraag: Wat past bij gelijke behandeling?",
        "questions": [
          "A. Mannen krijgen altijd voorrang op vrouwen.",
          "B. Alleen rijke mensen mogen stemmen.",
          "C. Mensen worden niet gediscrimineerd om afkomst, geloof of geslacht."
        ],
        "answer": "C. Mensen worden niet gediscrimineerd om afkomst, geloof of geslacht."
      },
      {
        "title": "Informatie van overheid",
        "prompt": "Vraag: Waar vindt u betrouwbare persoonlijke informatie over uw inburgering?",
        "questions": [
          "A. In Mijn Inburgering of bij officiele informatie van DUO.",
          "B. Alleen in reclamefolders.",
          "C. Op willekeurige berichten in sociale media."
        ],
        "answer": "B. Alleen in reclamefolders."
      },
      {
        "title": "Openbaar vervoer kaart",
        "prompt": "Vraag: Wat doet u met een OV-chipkaart of betaalpas in het openbaar vervoer?",
        "questions": [
          "A. U checkt in en meestal ook weer uit.",
          "B. U geeft de kaart aan de chauffeur en loopt weg.",
          "C. U hoeft de kaart nooit te gebruiken."
        ],
        "answer": "A. U checkt in en meestal ook weer uit."
      },
      {
        "title": "Fit blijven in dagelijks leven",
        "prompt": "Vraag: Wat helpt bij gezond leven?",
        "questions": [
          "A. Alle afspraken met de huisarts overslaan.",
          "B. Nooit bewegen als u thuis werkt.",
          "C. Regelmatig bewegen, gezond eten en genoeg rust nemen."
        ],
        "answer": "C. Regelmatig bewegen, gezond eten en genoeg rust nemen."
      },
      {
        "title": "Politie bij diefstal",
        "prompt": "Vraag: Wat doet u als uw fiets gestolen is?",
        "questions": [
          "A. U kunt aangifte doen bij de politie.",
          "B. U pakt zomaar een andere fiets.",
          "C. U hoeft niemand iets te vertellen."
        ],
        "answer": "A. U kunt aangifte doen bij de politie."
      },
      {
        "title": "Gemeente en paspoort",
        "prompt": "Vraag: Wie geeft meestal een paspoort of identiteitskaart af?",
        "questions": [
          "A. De supermarkt bij de servicebalie.",
          "B. De gemeente waar u staat ingeschreven.",
          "C. De sportschool na betaling."
        ],
        "answer": "B. De gemeente waar u staat ingeschreven."
      },
      {
        "title": "Water en energie besparen",
        "prompt": "Vraag: Waarom besparen mensen water en energie?",
        "questions": [
          "A. Omdat douchen verboden is.",
          "B. Omdat elke woning anders onveilig is.",
          "C. Omdat het kosten kan verlagen en beter is voor het milieu."
        ],
        "answer": "C. Omdat het kosten kan verlagen en beter is voor het milieu."
      }
    ]
  },
  {
    "id": "wordorder",
    "number": "06",
    "category": "Grammatica",
    "title": "Grammatica: woordvolgorde en vragen",
    "goal": "Oefen hoofdzin, inversie, bijzin en vraagvormen.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Werkdag thuis",
        "prompt": "Opdracht: Zet in goede volgorde: werkt / Violetta / vandaag / thuis",
        "answer": "Violetta werkt vandaag thuis."
      },
      {
        "title": "Zinsvolgorde met tijd en plaats",
        "prompt": "Opdracht: Zet in goede volgorde: zij / naar de prikpost / morgen / gaat",
        "answer": "Morgen gaat zij naar de prikpost."
      },
      {
        "title": "Plaats na werkwoord",
        "prompt": "Opdracht: Maak een zin: vrijdag / naar ons huis / De monteur / komt",
        "answer": "De monteur komt vrijdag naar ons huis."
      },
      {
        "title": "Vraag met waar",
        "prompt": "Opdracht: Maak een vraag: het Kerkplein / waar / is",
        "answer": "Waar is het Kerkplein?"
      },
      {
        "title": "Vraag met wanneer",
        "prompt": "Opdracht: Maak een vraag: de trein / wanneer / vertrekt",
        "answer": "Wanneer vertrekt de trein?"
      },
      {
        "title": "Vraag met wat",
        "prompt": "Opdracht: Maak een vraag: ik / meenemen / wat / moet",
        "answer": "Wat moet ik meenemen?"
      },
      {
        "title": "Omdat bij bloedprikken",
        "prompt": "Opdracht: Maak een zin: Ik bel de huisarts. Ik moet bloedprikken.",
        "answer": "Ik bel de huisarts omdat ik bloed moet laten prikken."
      },
      {
        "title": "Als bij regenjassen",
        "prompt": "Opdracht: Maak een zin: Het regent morgen. We nemen regenjassen mee.",
        "answer": "Als het morgen regent, nemen we regenjassen mee."
      },
      {
        "title": "Eerst daarna",
        "prompt": "Opdracht: Maak een zin met daarna: Ik reserveer online. Ik toon de QR-code.",
        "answer": "Ik reserveer online. Daarna toon ik de QR-code."
      },
      {
        "title": "Niet voor persoonsvorm",
        "prompt": "Opdracht: Zet in goede volgorde: vandaag / niet / komen / ik / kan",
        "answer": "Ik kan vandaag niet komen."
      },
      {
        "title": "Werkwoord aan het eind",
        "prompt": "Opdracht: Maak af: Ik vraag of de bus op zondag ... (rijdt)",
        "answer": "Ik vraag of de bus op zondag rijdt."
      },
      {
        "title": "Hoe-laat-vraag sportdag",
        "prompt": "Opdracht: Maak een vraag: de sportdag / hoe laat / begint",
        "answer": "Hoe laat begint de sportdag?"
      },
      {
        "title": "Onderwerp na vraagwoord",
        "prompt": "Opdracht: Maak een vraag: bij de zelfscan / wie / helpt",
        "answer": "Wie helpt bij de zelfscan?"
      },
      {
        "title": "Twee zinsdelen",
        "prompt": "Opdracht: Maak een zin: ik / hulp / In de bibliotheek / krijg",
        "answer": "In de bibliotheek krijg ik hulp."
      },
      {
        "title": "Object op juiste plek",
        "prompt": "Opdracht: Zet in goede volgorde: vandaag / de factuur / ik / stuur",
        "answer": "Ik stuur de factuur vandaag."
      },
      {
        "title": "Vraag met welk",
        "prompt": "Opdracht: Maak een vraag: welk / document / upload / u",
        "answer": "Welk document uploadt u?"
      },
      {
        "title": "Dat-zin over zorgpas",
        "prompt": "Opdracht: Maak af: De medewerker zegt dat de pas morgen ... (komt)",
        "answer": "De medewerker zegt dat de pas morgen komt."
      },
      {
        "title": "Volgorde met familie",
        "prompt": "Opdracht: Zet in goede volgorde: naar Utrecht / zaterdag / wij / met de trein / gaan",
        "answer": "Wij gaan zaterdag met de trein naar Utrecht."
      }
    ]
  },
  {
    "id": "verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Grammatica: werkwoorden in tijden",
    "goal": "Oefen tegenwoordige tijd, perfectum en toekomst met A2-zinnen.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Ik werk thuis",
        "prompt": "Opdracht: Vul het werkwoord in: Ik ___ vandaag thuis. (werken)",
        "answer": "Ik werk vandaag thuis."
      },
      {
        "title": "Zij fietst rustig",
        "prompt": "Opdracht: Vul het werkwoord in: Zij ___ rustig naar Heeze. (fietsen)",
        "answer": "Zij fietst rustig naar Heeze."
      },
      {
        "title": "Wij reserveren",
        "prompt": "Opdracht: Vul het werkwoord in: Wij ___ online een zwembaan. (reserveren)",
        "answer": "Wij reserveren online een zwembaan."
      },
      {
        "title": "U uploadt",
        "prompt": "Opdracht: Vul het werkwoord in: U ___ het huurcontract. (uploaden)",
        "answer": "U uploadt het huurcontract."
      },
      {
        "title": "Ik heb betaald",
        "prompt": "Opdracht: Maak perfectum: Ik betaal de factuur.",
        "answer": "Ik heb de factuur betaald."
      },
      {
        "title": "Zij is vertrokken",
        "prompt": "Opdracht: Maak perfectum: Zij vertrekt om negen uur.",
        "answer": "Zij is om negen uur vertrokken."
      },
      {
        "title": "Wij hebben gekookt",
        "prompt": "Opdracht: Maak perfectum: Wij koken rundvlees met groenten.",
        "answer": "Wij hebben rundvlees met groenten gekookt."
      },
      {
        "title": "De monteur heeft gebeld",
        "prompt": "Opdracht: Maak perfectum: De monteur belt twintig minuten vooraf.",
        "answer": "De monteur heeft twintig minuten vooraf gebeld."
      },
      {
        "title": "Ik ben geweest",
        "prompt": "Opdracht: Maak perfectum: Ik ga naar de bibliotheek.",
        "answer": "Ik ben naar de bibliotheek geweest."
      },
      {
        "title": "Plan met gaan",
        "prompt": "Opdracht: Maak toekomst: Ik maak een afspraak.",
        "answer": "Ik ga een afspraak maken."
      },
      {
        "title": "Toekomst met zullen",
        "prompt": "Opdracht: Maak beleefd: Ik stuur de documenten morgen.",
        "answer": "Ik zal de documenten morgen sturen."
      },
      {
        "title": "Had-controle zelfscan",
        "prompt": "Opdracht: Vul in: Gisteren ___ ik een controle bij de zelfscan. (hebben)",
        "answer": "Gisteren had ik een controle bij de zelfscan."
      },
      {
        "title": "Was-busvertraging",
        "prompt": "Opdracht: Vul in: De bus ___ tien minuten te laat. (zijn)",
        "answer": "De bus was tien minuten te laat."
      },
      {
        "title": "Heeft of is",
        "prompt": "Opdracht: Kies: Zij ___ naar Utrecht gereisd. (heeft/is)",
        "answer": "Zij is naar Utrecht gereisd."
      },
      {
        "title": "Hebben met object",
        "prompt": "Opdracht: Kies: Ik ___ de vragenlijst ingevuld. (heb/ben)",
        "answer": "Ik heb de vragenlijst ingevuld."
      },
      {
        "title": "Werkwoord in vraag",
        "prompt": "Opdracht: Maak een vraag: u / heeft / de zorgpas / ontvangen",
        "answer": "Heeft u de zorgpas ontvangen?"
      },
      {
        "title": "Imperatief vriendelijk",
        "prompt": "Opdracht: Maak een korte opdracht met u: uw bon bewaren",
        "answer": "Bewaar uw bon alstublieft."
      },
      {
        "title": "Tijd met blijven",
        "prompt": "Opdracht: Vul in: De oude pas ___ geldig tot 1 juni. (blijven)",
        "answer": "De oude pas blijft geldig tot 1 juni."
      }
    ]
  },
  {
    "id": "modal",
    "number": "08",
    "category": "Grammatica",
    "title": "Grammatica: modale, scheidbare en reflexieve werkwoorden",
    "goal": "Oefen kunnen, moeten, willen, mogen, plus scheidbare en reflexieve werkwoorden.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Moeten bij afspraak",
        "prompt": "Opdracht: Vul in: Ik ___ mijn identiteitsbewijs meenemen. (moeten)",
        "answer": "Ik moet mijn identiteitsbewijs meenemen."
      },
      {
        "title": "Kunnen online",
        "prompt": "Opdracht: Vul in: U ___ de verhuizing online doorgeven. (kunnen)",
        "answer": "U kunt de verhuizing online doorgeven."
      },
      {
        "title": "Wil hulp vragen",
        "prompt": "Opdracht: Maak een zin: e-bookhulp / vragen / ik / wil",
        "answer": "Ik wil e-bookhulp vragen."
      },
      {
        "title": "Mogen water drinken",
        "prompt": "Opdracht: Vul in: Voor het bloedprikken ___ ik water drinken. (mogen)",
        "answer": "Voor het bloedprikken mag ik water drinken."
      },
      {
        "title": "Zullen beleefd",
        "prompt": "Opdracht: Maak beleefd: Ik bel u morgen terug.",
        "answer": "Ik zal u morgen terugbellen."
      },
      {
        "title": "Meenemen gescheiden",
        "prompt": "Opdracht: Maak een zin: mijn telefoon / mee / Ik / neem",
        "answer": "Ik neem mijn telefoon mee."
      },
      {
        "title": "Doorgeven gescheiden",
        "prompt": "Opdracht: Maak een zin: haar verhuizing / door / Zij / geeft",
        "answer": "Zij geeft haar verhuizing door."
      },
      {
        "title": "Ophalen gescheiden",
        "prompt": "Opdracht: Maak een zin: het kookpakket / op / Wij / halen",
        "answer": "Wij halen het kookpakket op."
      },
      {
        "title": "Invullen gescheiden",
        "prompt": "Opdracht: Maak een zin: de vragenlijst / in / U / vult",
        "answer": "U vult de vragenlijst in."
      },
      {
        "title": "Afspreken gescheiden",
        "prompt": "Opdracht: Maak een zin: donderdag / af / Ik / spreek",
        "answer": "Ik spreek donderdag af."
      },
      {
        "title": "Opstaan met tijd",
        "prompt": "Opdracht: Maak een zin: om zeven uur / op / Ik / sta",
        "answer": "Ik sta om zeven uur op."
      },
      {
        "title": "Terugbellen",
        "prompt": "Opdracht: Maak een zin: later / terug / De monteur / belt",
        "answer": "De monteur belt later terug."
      },
      {
        "title": "Aanmelden met me",
        "prompt": "Opdracht: Vul in: Ik ___ me aan voor e-bookhulp. (melden)",
        "answer": "Ik meld me aan voor e-bookhulp."
      },
      {
        "title": "Zich herinneren",
        "prompt": "Opdracht: Vul in: Zij ___ zich de afspraak. (herinneren)",
        "answer": "Zij herinnert zich de afspraak."
      },
      {
        "title": "Zich wassen",
        "prompt": "Opdracht: Vul in: Na het zwemmen ___ ik me. (wassen)",
        "answer": "Na het zwemmen was ik me."
      },
      {
        "title": "Voorbereiden op examen",
        "prompt": "Opdracht: Maak een zin: me / op het examen / Ik / bereid / voor",
        "answer": "Ik bereid me voor op het examen."
      },
      {
        "title": "Modalen combineren",
        "prompt": "Opdracht: Maak een zin: vrijdag / komen / Ik / kan / niet",
        "answer": "Ik kan vrijdag niet komen."
      },
      {
        "title": "Scheidbaar in bijzin",
        "prompt": "Opdracht: Maak af: Ik vraag wanneer zij het pakket ... (ophalen)",
        "answer": "Ik vraag wanneer zij het pakket ophaalt."
      }
    ]
  },
  {
    "id": "nouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Grammatica: zelfstandige naamwoorden, lidwoorden, bijvoeglijke naamwoorden en voornaamwoorden",
    "goal": "Oefen de/het, meervoud, bijvoeglijke naamwoorden en voornaamwoorden.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "De gemeente",
        "prompt": "Opdracht: Kies de/het: ___ gemeente helpt inwoners.",
        "answer": "De gemeente helpt inwoners."
      },
      {
        "title": "Het contract",
        "prompt": "Opdracht: Kies de/het: ___ huurcontract staat online.",
        "answer": "Het huurcontract staat online."
      },
      {
        "title": "De zorgpas",
        "prompt": "Opdracht: Kies de/het: ___ zorgpas komt per post.",
        "answer": "De zorgpas komt per post."
      },
      {
        "title": "Lidwoord formulier",
        "prompt": "Opdracht: Kies de/het: ___ formulier is kort.",
        "answer": "Lidwoord formulier is kort."
      },
      {
        "title": "Afspraken meervoud",
        "prompt": "Opdracht: Maak meervoud: een afspraak",
        "answer": "afspraken"
      },
      {
        "title": "Dochters meervoud",
        "prompt": "Opdracht: Maak meervoud: een dochter",
        "answer": "dochters"
      },
      {
        "title": "Meervoud fiets",
        "prompt": "Opdracht: Maak meervoud: een fiets",
        "answer": "fietsen"
      },
      {
        "title": "Meervoud document",
        "prompt": "Opdracht: Maak meervoud: een document",
        "answer": "documenten"
      },
      {
        "title": "Adjectief met de",
        "prompt": "Opdracht: Vul in: de ___ container (groen)",
        "answer": "de groene container"
      },
      {
        "title": "Adjectief met het",
        "prompt": "Opdracht: Vul in: het ___ kookpakket (vers)",
        "answer": "het verse kookpakket"
      },
      {
        "title": "Adjectief zonder de",
        "prompt": "Opdracht: Vul in: een ___ telefoon (nieuw)",
        "answer": "een nieuwe telefoon"
      },
      {
        "title": "Adjectief bij het-woord",
        "prompt": "Opdracht: Vul in: een ___ contract (kort)",
        "answer": "een kort contract"
      },
      {
        "title": "Mijn zorgpas",
        "prompt": "Opdracht: Vul in: ___ zorgpas is nog niet gekomen. (ik)",
        "answer": "Mijn zorgpas is nog niet gekomen."
      },
      {
        "title": "Haar sportdag",
        "prompt": "Opdracht: Vul in: ___ dochter heeft sportdag. (zij)",
        "answer": "Haar dochter heeft sportdag."
      },
      {
        "title": "Persoonlijk voornaamwoord",
        "prompt": "Opdracht: Vervang Violetta: Violetta belt de huisarts.",
        "answer": "Zij belt de huisarts."
      },
      {
        "title": "Object hem",
        "prompt": "Opdracht: Vervang de monteur: Ik bel de monteur terug.",
        "answer": "Ik bel hem terug."
      },
      {
        "title": "Object ze",
        "prompt": "Opdracht: Vervang de documenten: Ik upload de documenten.",
        "answer": "Ik upload ze."
      },
      {
        "title": "Aanwijzend deze",
        "prompt": "Opdracht: Kies deze/dit: ___ afspraak is belangrijk.",
        "answer": "Deze afspraak is belangrijk."
      }
    ]
  },
  {
    "id": "negation",
    "number": "10",
    "category": "Grammatica",
    "title": "Grammatica: ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen niet/geen, voorzetsels, voegwoorden en korte vraagvormen.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Geen ontbijt",
        "prompt": "Opdracht: Vul in: Ik eet ___ ontbijt voor het bloedprikken. (geen/niet)",
        "answer": "Ik eet geen ontbijt voor het bloedprikken."
      },
      {
        "title": "Niet thuis",
        "prompt": "Opdracht: Vul in: Vrijdag ben ik ___ thuis. (geen/niet)",
        "answer": "Vrijdag ben ik niet thuis."
      },
      {
        "title": "Geen plek",
        "prompt": "Opdracht: Vul in: Er is ___ plek meer bij het zwemmen. (geen/niet)",
        "answer": "Er is geen plek meer bij het zwemmen."
      },
      {
        "title": "Niet vergeten",
        "prompt": "Opdracht: Vul in: Vergeet uw QR-code ___. (geen/niet)",
        "answer": "Vergeet uw QR-code niet."
      },
      {
        "title": "Voorzetsel naar",
        "prompt": "Opdracht: Vul in: Ik ga ___ de bibliotheek. (naar/bij/op)",
        "answer": "Ik ga naar de bibliotheek."
      },
      {
        "title": "Voorzetsel bij",
        "prompt": "Opdracht: Vul in: Ik wacht ___ kassa 4. (bij/in/voor)",
        "answer": "Ik wacht bij kassa 4."
      },
      {
        "title": "Voorzetsel in",
        "prompt": "Opdracht: Vul in: De zorgpas ligt ___ de post. (in/op/aan)",
        "answer": "De zorgpas ligt in de post."
      },
      {
        "title": "Voorzetsel op",
        "prompt": "Opdracht: Vul in: De kinderen verzamelen ___ het schoolplein. (op/naar/met)",
        "answer": "De kinderen verzamelen op het schoolplein."
      },
      {
        "title": "Voorzetsel tussen",
        "prompt": "Opdracht: Vul in: De monteur komt ___ twaalf en twee. (tussen/naast/zonder)",
        "answer": "De monteur komt tussen twaalf en twee."
      },
      {
        "title": "Voorzetsel voor",
        "prompt": "Opdracht: Vul in: Ik betaal ___ 25 mei. (voor/naast/uit)",
        "answer": "Ik betaal voor 25 mei."
      },
      {
        "title": "En met boodschappen",
        "prompt": "Opdracht: Maak een zin: Ik koop courgette. Ik koop wortels.",
        "answer": "Ik koop courgette en ik koop wortels."
      },
      {
        "title": "Maar met afspraak",
        "prompt": "Opdracht: Maak een zin: Ik wil komen. Ik ben vrijdag niet thuis.",
        "answer": "Ik wil komen, maar ik ben vrijdag niet thuis."
      },
      {
        "title": "Reden met want",
        "prompt": "Opdracht: Maak een zin: Ik bel de fietsenmaker. Mijn remmen maken geluid.",
        "answer": "Ik bel de fietsenmaker, want mijn remmen maken geluid."
      },
      {
        "title": "Gevolg met dus",
        "prompt": "Opdracht: Maak een zin: De oude pas is bijna verlopen. Ik vraag een nieuwe pas.",
        "answer": "De oude pas is bijna verlopen, dus ik vraag een nieuwe pas."
      },
      {
        "title": "Omdat met eindwerkwoord",
        "prompt": "Opdracht: Maak een zin: Ik neem een koeltas mee. Het vlees moet koud blijven.",
        "answer": "Ik neem een koeltas mee omdat het vlees koud moet blijven."
      },
      {
        "title": "Voorwaarde met als in vervoer",
        "prompt": "Opdracht: Maak een zin: De bus niet rijdt. Ik neem de fiets.",
        "answer": "Als de bus niet rijdt, neem ik de fiets."
      },
      {
        "title": "Daarna met volgorde",
        "prompt": "Opdracht: Maak een zin: Ik vul het formulier in. Ik upload het contract.",
        "answer": "Ik vul het formulier in. Daarna upload ik het contract."
      },
      {
        "title": "Keuze met of",
        "prompt": "Opdracht: Maak een zin: Wilt u bellen? Wilt u mailen?",
        "answer": "Wilt u bellen of wilt u mailen?"
      }
    ]
  }
];

const writingChecklist = [
  "Heb ik precies gedaan wat de opdracht vraagt?",
  "Staat de belangrijkste datum, tijd, plaats of reden in mijn tekst?",
  "Gebruik ik korte zinnen met een duidelijk onderwerp en werkwoord?",
  "Is mijn vraag beleefd en begrijpelijk?",
  "Heb ik een passende groet of afsluiting gebruikt?"
];

let activeLessonId = window.location.hash ? window.location.hash.replace("#", "") : lessons[0].id;
if (!lessons.some((lesson) => lesson.id === activeLessonId)) {
  activeLessonId = lessons[0].id;
}

const lessonTabs = document.querySelector("#lessonTabs");
const lessonPanel = document.querySelector("#lessonPanel");
const answerMode = document.querySelector("#answerMode");
const printLesson = document.querySelector("#printLesson");
let answersDefaultVisible = false;

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
  const key = `v010-writing-answer-${index}-${exercise.title}`;
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
        <button class="lesson-tab" type="button" data-lesson="${escapeHtml(lesson.id)}" aria-selected="${selected}">
          <span>${escapeHtml(lesson.category)} ${escapeHtml(lesson.number)}</span>
          <strong>${escapeHtml(lesson.title)}</strong>
        </button>
      `;
    })
    .join("");
}

function renderExercise(exercise, index, lesson) {
  const isWriting = lesson.id === "writing";
  const answerLabel = isWriting ? "modelantwoord" : "antwoord";
  const actionLabel = answersDefaultVisible ? "Verberg" : "Toon";
  return `
    <section class="exercise-card">
      <h4>${index + 1}. ${escapeHtml(exercise.title)}</h4>
      ${exercise.image ? `<figure class="speaking-image"><img src="${escapeHtml(exercise.image)}" alt="${escapeHtml(exercise.title)}"><figcaption>Afbeelding bij spreekopdracht</figcaption></figure>` : ""}
      ${exercise.audio ? `<div class="audio-box"><strong>Luister eerst</strong><audio controls preload="metadata" src="${escapeHtml(exercise.audio)}"></audio></div>` : ""}
      ${exercise.prompt ? `<p>${formatText(exercise.prompt)}</p>` : ""}
      ${renderList(exercise.questions, true)}
      ${isWriting ? renderWritingAnswerBox(exercise, index) : ""}
      <button class="answer-toggle${answersDefaultVisible ? " is-open" : ""}" type="button" aria-expanded="${answersDefaultVisible ? "true" : "false"}" aria-label="${actionLabel} ${answerLabel} voor ${escapeHtml(exercise.title)}" data-answer-label="${answerLabel}">
        <strong data-answer-action>${actionLabel} ${answerLabel}</strong>
        <span>${formatText(exercise.answer)}</span>
      </button>
    </section>
  `;
}

function renderPanel() {
  const lesson = lessons.find((item) => item.id === activeLessonId) || lessons[0];
  lessonPanel.innerHTML = `
    <header class="lesson-panel-head">
      <h3>${escapeHtml(lesson.number)} - ${escapeHtml(lesson.title)}</h3>
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
  syncAnswerModeText();
}

function getAnswerButtons() {
  return Array.from(lessonPanel.querySelectorAll(".answer-toggle"));
}

function setAnswerButtonState(button, open) {
  const label = button.dataset.answerLabel || "antwoord";
  const action = open ? "Verberg" : "Toon";
  button.classList.toggle("is-open", open);
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.setAttribute("aria-label", `${action} ${label}`);
  const actionText = button.querySelector("[data-answer-action]");
  if (actionText) actionText.textContent = `${action} ${label}`;
}

function syncAnswerModeText() {
  const buttons = getAnswerButtons();
  const allOpen = buttons.length > 0 && buttons.every((button) => button.classList.contains("is-open"));
  document.body.classList.toggle("answers-hidden", !allOpen);
  const answerModeLabel = allOpen ? "Verberg antwoorden" : "Toon antwoorden";
  answerMode.textContent = answerModeLabel;
  answerMode.setAttribute("aria-label", answerModeLabel);
  answerMode.setAttribute("title", answerModeLabel);
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
  setAnswerButtonState(button, !button.classList.contains("is-open"));
  syncAnswerModeText();
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
  const buttons = getAnswerButtons();
  const allOpen = buttons.length > 0 && buttons.every((button) => button.classList.contains("is-open"));
  answersDefaultVisible = !allOpen;
  buttons.forEach((button) => setAnswerButtonState(button, answersDefaultVisible));
  syncAnswerModeText();
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
