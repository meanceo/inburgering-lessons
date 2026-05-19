const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte berichten uit het dagelijks leven. Zoek de actie, tijd, plaats en voorwaarde.",
    "meta": [
      "A2 examen",
      "Praktische teksten",
      "Nieuwe v011-opgaven"
    ],
    "exercises": [
      {
        "title": "Afvalpas ophalen bij receptie",
        "prompt": "U kunt vanaf dinsdag een nieuwe afvalpas ophalen bij de receptie van het gemeentehuis. Neem uw identiteitsbewijs mee. De balie is open van 09.00 tot 12.00 uur.",
        "questions": [
          "Vraag 1: Vanaf welke dag ligt de nieuwe afvalpas klaar?",
          "Vraag 2: Waar haalt u de afvalpas op?",
          "Vraag 3: Welk bewijs neemt u mee voor de receptie?"
        ],
        "answer": "De afvalpas ligt vanaf dinsdag klaar. U haalt de pas op bij de receptie. U neemt uw identiteitsbewijs mee."
      },
      {
        "title": "Terugbelverzoek van de huisarts",
        "prompt": "De huisarts belt u vanmiddag tussen 14.00 en 16.00 uur terug over uw vraag. Houd uw telefoon bij de hand. Bel opnieuw als u om 16.30 uur niets heeft gehoord.",
        "questions": [
          "Vraag 1: Wie belt u vanmiddag terug?",
          "Vraag 2: Tussen welke tijden kunt u een telefoontje krijgen?",
          "Vraag 3: Wanneer belt u opnieuw?"
        ],
        "answer": "De huisarts belt terug. U kunt tussen 14.00 en 16.00 uur een telefoontje krijgen. U belt opnieuw om 16.30 uur als u niets heeft gehoord."
      },
      {
        "title": "Rapportgesprek via schoolapp",
        "prompt": "De school vraagt ouders om voor vrijdag een tijd voor het rapportgesprek te kiezen. Het gesprek duurt tien minuten. U krijgt de link in de schoolapp.",
        "questions": [
          "Vraag 1: Waarvoor kiezen ouders een tijd?",
          "Vraag 2: Hoe lang duurt het gesprek?",
          "Vraag 3: Waar krijgt u de link?"
        ],
        "answer": "Ouders kiezen een tijd voor het rapportgesprek. Het gesprek duurt tien minuten. U krijgt de link in de schoolapp."
      },
      {
        "title": "Statiegeldautomaat tijdelijk kapot",
        "prompt": "De statiegeldautomaat is vandaag buiten gebruik. Lever lege flessen in bij de servicebalie. U krijgt het bedrag op uw kassabon.",
        "questions": [
          "Vraag 1: Wat is vandaag buiten gebruik?",
          "Vraag 2: Waar levert u de lege flessen in?",
          "Vraag 3: Waarop staat het statiegeldbedrag?"
        ],
        "answer": "De statiegeldautomaat is buiten gebruik. U levert de flessen in bij de servicebalie. Het bedrag staat op uw kassabon."
      },
      {
        "title": "Bus stopt bij halte Station",
        "prompt": "Door werkzaamheden stopt bus 11 deze week niet bij de halte Markt. Loop naar halte Station. De extra looptijd is vijf minuten.",
        "questions": [
          "Vraag 1: Waarom stopt bus 11 niet bij halte Markt?",
          "Vraag 2: Naar welke halte loopt u deze week?",
          "Vraag 3: Hoeveel extra minuten loopt u?"
        ],
        "answer": "Door werkzaamheden stopt de bus niet bij halte Markt. U loopt naar halte Station. U loopt vijf minuten extra."
      },
      {
        "title": "Webinar over offertes maken",
        "prompt": "Woensdag is er een gratis online webinar van de Kamer van Koophandel over offertes maken. Het webinar begint om 10.00 uur en duurt een uur.",
        "questions": [
          "Vraag 1: Op welke dag is het webinar?",
          "Vraag 2: Waarover gaat het webinar?",
          "Vraag 3: Hoe lang duurt het webinar?"
        ],
        "answer": "Het webinar is woensdag. Het gaat over offertes maken. Het webinar duurt een uur."
      },
      {
        "title": "Douches bij zwembad dicht",
        "prompt": "Na het banenzwemmen kunt u douche 1 en 2 niet gebruiken door onderhoud. Gebruik de kleedkamers aan de andere kant. De ingang blijft normaal open.",
        "questions": [
          "Vraag 1: Welke douches kunt u niet gebruiken?",
          "Vraag 2: Waarom zijn de douches dicht?",
          "Vraag 3: Wat blijft normaal open?"
        ],
        "answer": "U kunt douche 1 en 2 niet gebruiken. Ze zijn dicht door onderhoud. De ingang blijft normaal open."
      },
      {
        "title": "Nieuwe afspraak bij opticien",
        "prompt": "Uw bril is nog niet klaar. De opticien maakt een nieuwe afspraak voor maandag om 13.30 uur. U hoeft niets extra te betalen.",
        "questions": [
          "Vraag 1: Wat is nog niet klaar?",
          "Vraag 2: Voor welke dag maakt de opticien een nieuwe afspraak?",
          "Vraag 3: Moet u extra betalen?"
        ],
        "answer": "Uw bril is nog niet klaar. De nieuwe afspraak is maandag om 13.30 uur. U hoeft niets extra te betalen."
      },
      {
        "title": "Pakket met appcode bij buren",
        "prompt": "De bezorger heeft uw pakket afgegeven bij huisnummer 18. U kunt het vanavond na 18.00 uur ophalen. Neem de code uit de app mee.",
        "questions": [
          "Vraag 1: Bij welk huisnummer ligt het pakket?",
          "Vraag 2: Vanaf hoe laat kunt u het pakket ophalen?",
          "Vraag 3: Welke code neemt u mee?"
        ],
        "answer": "Het pakket ligt bij huisnummer 18. U kunt het na 18.00 uur ophalen. U neemt de code uit de app mee."
      },
      {
        "title": "Klepraam in slaapkamer",
        "prompt": "De woningcorporatie repareert donderdag het klepraam in de slaapkamer. Zet een stoel onder het raam weg. De afspraak is tussen 08.00 en 10.00 uur.",
        "questions": [
          "Vraag 1: Welk raam wordt gerepareerd?",
          "Vraag 2: Waar staat de stoel die u moet weghalen?",
          "Vraag 3: Tussen welke tijden is de afspraak?"
        ],
        "answer": "Het klepraam in de slaapkamer wordt gerepareerd. U haalt de stoel onder het raam weg. De afspraak is tussen 08.00 en 10.00 uur."
      },
      {
        "title": "Brief over eigen risico",
        "prompt": "Uw zorgverzekeraar stuurt een brief over het eigen risico. In de brief staat welk bedrag u nog moet betalen. U kunt in drie termijnen betalen.",
        "questions": [
          "Vraag 1: Waarover gaat de brief van de zorgverzekeraar?",
          "Vraag 2: Wat staat in de brief?",
          "Vraag 3: In hoeveel termijnen kunt u betalen?"
        ],
        "answer": "De brief gaat over het eigen risico. In de brief staat welk bedrag u nog moet betalen. U kunt in drie termijnen betalen."
      },
      {
        "title": "Taalspreekuur op woensdag",
        "prompt": "Het taalspreekuur is elke woensdag van 15.00 tot 17.00 uur. Een vrijwilliger helpt met brieven lezen en formulieren invullen. Aanmelden kan aan de balie.",
        "questions": [
          "Vraag 1: Wanneer is het taalspreekuur?",
          "Vraag 2: Waarmee helpt de vrijwilliger?",
          "Vraag 3: Waar kunt u zich aanmelden?"
        ],
        "answer": "Het taalspreekuur is woensdag van 15.00 tot 17.00 uur. De vrijwilliger helpt met brieven lezen en formulieren invullen. U kunt zich aanmelden aan de balie."
      },
      {
        "title": "Technologiepresentatie van dochter",
        "prompt": "Uw dochter geeft vrijdag een presentatie over technologie. Zij neemt haar laptop en een USB-stick mee. Ouders mogen vanaf 14.15 uur kijken.",
        "questions": [
          "Vraag 1: Waarover geeft uw dochter een presentatie?",
          "Vraag 2: Welke technische spullen neemt zij mee?",
          "Vraag 3: Vanaf hoe laat mogen ouders kijken?"
        ],
        "answer": "Zij geeft een presentatie over technologie. Zij neemt haar laptop en een USB-stick mee. Ouders mogen vanaf 14.15 uur kijken."
      },
      {
        "title": "Voorlamp opladen voor fietstocht",
        "prompt": "Voor de fietstocht naar Heeze laadt u de voorlamp thuis op. De accu is na twee uur vol. Neem voor de zekerheid een klein achterlicht mee.",
        "questions": [
          "Vraag 1: Wat laadt u thuis op?",
          "Vraag 2: Na hoeveel uur is de accu vol?",
          "Vraag 3: Wat neemt u extra mee?"
        ],
        "answer": "U laadt de voorlamp thuis op. De accu is na twee uur vol. U neemt een klein achterlicht mee."
      },
      {
        "title": "Marktbox met kip en groente",
        "prompt": "Op de markt kunt u zaterdag een gezonde box bestellen met kip, paprika en sperziebonen. Bestel voor 11.00 uur. Ophalen kan bij kraam 7.",
        "questions": [
          "Vraag 1: Waar kunt u zaterdag een gezonde box bestellen?",
          "Vraag 2: Welke drie producten zitten in de box?",
          "Vraag 3: Bij welke kraam haalt u de box op?"
        ],
        "answer": "U kunt de box op de markt bestellen. Er zitten kip, paprika en sperziebonen in. U haalt de box op bij kraam 7."
      },
      {
        "title": "Kofferlabel voor weekendreis",
        "prompt": "Voor uw weekendreis print u thuis een kofferlabel. Plak het label stevig op de koffer. Bij nat weer doet u er een plastic hoesje omheen.",
        "questions": [
          "Vraag 1: Wat print u thuis voor de reis?",
          "Vraag 2: Waar plakt u het label op?",
          "Vraag 3: Wat gebruikt u bij nat weer?"
        ],
        "answer": "U print een kofferlabel. U plakt het label op de koffer. Bij nat weer gebruikt u een plastic hoesje."
      },
      {
        "title": "Veilig betaalverzoek controleren",
        "prompt": "Controleer altijd de naam van de ontvanger voordat u een betaalverzoek betaalt. Klik niet op een vreemde link. Open zelf uw bankapp.",
        "questions": [
          "Vraag 1: Welke naam controleert u voor betaling?",
          "Vraag 2: Waarop klikt u niet?",
          "Vraag 3: Welke app opent u zelf?"
        ],
        "answer": "U controleert de naam van de ontvanger. U klikt niet op een vreemde link. U opent zelf uw bankapp."
      },
      {
        "title": "Mini-examen ID-kaart ophalen",
        "prompt": "In het bericht staat: de ID-kaart is klaar. U haalt de kaart op bij balie 3 tussen 13.00 en 16.00 uur.",
        "questions": [
          "Vraag 1: Kies het goede antwoord: A. De ID-kaart is nog niet klaar. B. U haalt de ID-kaart in de middag bij balie 3 op. C. Balie 3 is vandaag gesloten."
        ],
        "answer": "B. U haalt de ID-kaart in de middag bij balie 3 op."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf korte formulieren, e-mails en appberichten met duidelijke A2-zinnen.",
    "meta": [
      "Schriftelijk examen",
      "Berichten en formulieren",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Afvalpas kwijt melden",
        "prompt": "Schrijf aan de gemeente. U bent uw afvalpas kwijt en vraagt hoe u een nieuwe pas kunt krijgen.",
        "answer": "Beste gemeente,\n\nIk ben mijn afvalpas kwijt. Hoe kan ik een nieuwe afvalpas krijgen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Terugbeltijd vragen",
        "prompt": "Schrijf aan de huisarts. U wilt weten of de huisarts u na 15.00 uur kan terugbellen.",
        "answer": "Beste assistente,\n\nKan de huisarts mij vandaag na 15.00 uur terugbellen? Dan ben ik goed bereikbaar.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Rapportgesprek kiezen",
        "prompt": "Schrijf in de schoolapp. U kiest woensdag om 15.20 uur voor het rapportgesprek van uw dochter.",
        "answer": "Beste leerkracht,\n\nIk kies graag woensdag om 15.20 uur voor het rapportgesprek van mijn dochter.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Statiegeldbon niet gekregen",
        "prompt": "Schrijf aan de supermarkt. U heeft flessen ingeleverd, maar u kreeg geen statiegeldbon.",
        "answer": "Beste klantenservice,\n\nIk heb vandaag lege flessen ingeleverd, maar ik kreeg geen statiegeldbon. Kunt u mij helpen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over vervallen bushalte",
        "prompt": "Schrijf aan de vervoerder. U vraagt of bus 11 morgen weer bij halte Markt stopt.",
        "answer": "Beste medewerker,\n\nStopt bus 11 morgen weer bij halte Markt? Ik moet naar Eindhoven reizen.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Online overleg over offerte",
        "prompt": "Schrijf aan een klant. U wilt donderdag om 10.00 uur online praten over een offerte.",
        "answer": "Beste klant,\n\nKunt u donderdag om 10.00 uur online over de offerte praten? Ik stuur u graag een link.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Douches zwembad navragen",
        "prompt": "Schrijf aan het zwembad. U vraagt welke douches open zijn na het banenzwemmen.",
        "answer": "Beste medewerker,\n\nWelke douches zijn open na het banenzwemmen? Ik kom vrijdag in de ochtend zwemmen.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Opticienafspraak verzetten",
        "prompt": "Schrijf aan de opticien. U kunt maandag om 13.30 uur niet komen en vraagt een andere tijd.",
        "answer": "Beste opticien,\n\nIk kan maandag om 13.30 uur niet komen. Heeft u later op de dag nog een afspraak?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Pakket ophalen bij buurman",
        "prompt": "Schrijf aan uw buurman. Vraag of u uw pakket na het avondeten kunt ophalen.",
        "answer": "Hoi buurman,\n\nMijn pakket ligt bij u. Kan ik het vanavond na het avondeten ophalen?\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Raam sluit niet goed",
        "prompt": "Schrijf aan de woningcorporatie. Het slaapkamerraam sluit niet goed en u vraagt reparatie.",
        "answer": "Beste woningcorporatie,\n\nHet raam in onze slaapkamer sluit niet goed. Kunt u een afspraak maken voor reparatie?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Eigen risico in termijnen",
        "prompt": "Schrijf aan de zorgverzekeraar. U vraagt of u het eigen risico in drie termijnen kunt betalen.",
        "answer": "Beste meneer/mevrouw,\n\nKan ik het eigen risico in drie termijnen betalen? Ik ontvang graag informatie.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Taalspreekuur vragen",
        "prompt": "Schrijf aan de bibliotheek. U wilt hulp met een brief en vraagt wanneer het taalspreekuur is.",
        "answer": "Beste bibliotheek,\n\nIk wil graag hulp met een brief. Wanneer is het taalspreekuur deze week?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Presentatie helpen voorbereiden",
        "prompt": "Schrijf een bericht aan uw dochter. Herinner haar aan laptop, USB-stick en begintijd.",
        "answer": "Hoi,\n\nVergeet je laptop en USB-stick niet voor je presentatie. Ouders mogen vanaf 14.15 uur kijken.\n\nLiefs,\nMama"
      },
      {
        "title": "Fietslamp laten maken",
        "prompt": "Schrijf aan de fietsenmaker. Uw voorlamp laadt niet goed op en u vraagt om controle.",
        "answer": "Beste fietsenmaker,\n\nMijn voorlamp laadt niet goed op. Kunt u de lamp deze week controleren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Marktbox bestellen",
        "prompt": "Schrijf aan de marktkraam. U wilt een box met kip en groente bestellen voor zaterdag.",
        "answer": "Beste medewerker,\n\nIk wil graag een marktbox met kip en groente bestellen voor zaterdag. Ik haal de box voor 12.00 uur op.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Weekendreis bevestigen",
        "prompt": "Schrijf aan uw man. Vertel wat u voor de weekendreis moet printen en meenemen.",
        "answer": "Hoi,\n\nIk print het kofferlabel voor de weekendreis. Neem jij de opladers en de paspoorten mee?\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Onbekend betaalverzoek melden",
        "prompt": "Schrijf aan de bank. U kreeg een vreemd betaalverzoek en vraagt wat u moet doen.",
        "answer": "Beste bank,\n\nIk kreeg een vreemd betaalverzoek van een onbekende naam. Wat moet ik nu doen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vier zinnen over een rustige werkdag",
        "prompt": "Schrijf vier korte zinnen over thuis werken. Gebruik de woorden planning, lunch, wandeling en gezin.",
        "answer": "Ik maak eerst een planning. Mijn lunch is gezond. In de middag maak ik een wandeling. Daarna eet ik met mijn gezin."
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
        "title": "AI-examinator voor dagelijkse situaties",
        "prompt": "Open een spraaktool en vraag om twaalf korte A2-vragen over gemeente, huisarts, school, vervoer, werk en gezin.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel twaalf korte vragen over gemeente, huisarts, school, supermarkt, vervoer, werk, sporten, wonen, verzekering, bibliotheek en gezin. Wacht na elke vraag op mijn antwoord."
      },
      {
        "title": "Voorstellen in het taalcafe",
        "prompt": "Vertel uw naam, woonplaats, gezin en waarom u Nederlands leert.",
        "answer": "Hallo, ik ben Violetta Bonenkamp. Ik woon in Sterksel met mijn man en twee dochters. Ik leer Nederlands voor mijn inburgeringsexamen."
      },
      {
        "title": "Werkdag met AI-tool",
        "prompt": "Vertel kort hoe u thuis werkt en een AI-tool gebruikt.",
        "answer": "Ik werk thuis aan mijn startup. Ik gebruik soms een AI-tool voor ideeen en ik schrijf artikelen."
      },
      {
        "title": "Afvalpas vragen bij gemeente",
        "prompt": "U bent bij de gemeente. Vraag waar u een nieuwe afvalpas kunt ophalen.",
        "answer": "Goedemorgen, waar kan ik een nieuwe afvalpas ophalen? Ik heb mijn identiteitsbewijs bij me."
      },
      {
        "title": "Huisarts terug laten bellen",
        "prompt": "Bel de huisartsenpraktijk en vraag om een terugbelverzoek.",
        "answer": "Goedemorgen, kan de huisarts mij vandaag terugbellen? Ik heb een korte medische vraag."
      },
      {
        "title": "Rapportgesprek op school",
        "prompt": "Vraag aan de leerkracht hoe u een tijd voor het rapportgesprek kiest.",
        "answer": "Goedemiddag, hoe kan ik een tijd kiezen voor het rapportgesprek van mijn dochter?"
      },
      {
        "title": "Statiegeldprobleem melden",
        "prompt": "Vertel bij de servicebalie dat de statiegeldautomaat niet werkt.",
        "answer": "Goedemiddag, de statiegeldautomaat werkt niet. Waar kan ik mijn lege flessen inleveren?"
      },
      {
        "title": "Bushalte controleren",
        "prompt": "Vraag aan de chauffeur of bus 11 vandaag bij halte Station stopt.",
        "answer": "Goedemorgen, stopt bus 11 vandaag bij halte Station? De halte Markt is dicht."
      },
      {
        "title": "Webinar aan klant uitleggen",
        "prompt": "Vertel een klant dat u na een webinar een betere offerte stuurt.",
        "answer": "Ik volg woensdag een webinar over offertes. Daarna stuur ik u een duidelijke nieuwe offerte."
      },
      {
        "title": "Douches in zwembad vragen",
        "prompt": "Vraag in het zwembad welke kleedkamer u kunt gebruiken.",
        "answer": "Goedemorgen, welke kleedkamer kan ik gebruiken? Ik heb gehoord dat sommige douches dicht zijn."
      },
      {
        "title": "Opticienafspraak maken",
        "prompt": "Vraag de opticien wanneer uw bril klaar is.",
        "answer": "Goedemiddag, weet u wanneer mijn bril klaar is? Kan ik maandag langskomen?"
      },
      {
        "title": "Pakket bij buren ophalen",
        "prompt": "Vraag uw buurman of u uw pakket kunt ophalen.",
        "answer": "Hoi, mijn pakket is bij u bezorgd. Kan ik het nu ophalen? Ik heb de code uit de app."
      },
      {
        "title": "Raamprobleem uitleggen",
        "prompt": "Vertel aan de woningcorporatie wat er mis is met het raam.",
        "answer": "Het raam in de slaapkamer sluit niet goed. Het tocht en ik wil graag een reparatieafspraak."
      },
      {
        "title": "Termijnen bij verzekering vragen",
        "prompt": "Vraag de zorgverzekeraar of u in drie delen mag betalen.",
        "answer": "Goedemorgen, mag ik het bedrag in drie termijnen betalen? Ik wil graag weten hoe dat werkt."
      },
      {
        "title": "Hulp in de bibliotheek vragen",
        "prompt": "Vraag aan de bibliotheekmedewerker om hulp met een moeilijke brief.",
        "answer": "Goedemiddag, ik heb een moeilijke brief gekregen. Kunt u mij helpen met lezen?"
      },
      {
        "title": "Dochter helpen met presentatie",
        "prompt": "Vertel uw dochter welke spullen zij moet meenemen.",
        "answer": "Neem je laptop en USB-stick mee. Je presentatie begint vrijdagmiddag en wij komen kijken."
      },
      {
        "title": "Fietslamp beschrijven",
        "prompt": "Vertel aan de fietsenmaker wat er met uw lamp aan de hand is.",
        "answer": "Mijn voorlamp laadt niet goed op. Ik fiets vaak in de avond en ik wil veilig rijden."
      },
      {
        "title": "Gezonde marktmaaltijd plannen",
        "prompt": "Vertel wat u zaterdag met kip en groente gaat koken.",
        "answer": "Ik koop kip, paprika en sperziebonen op de markt. Ik maak een gezonde maaltijd voor mijn gezin."
      },
      {
        "title": "Veilig betalen uitleggen",
        "prompt": "Vertel een vriendin wat zij moet controleren bij een betaalverzoek.",
        "answer": "Controleer eerst de naam van de ontvanger. Klik niet op een vreemde link en open zelf je bankapp."
      },
      {
        "title": "Kofferlabel uitleggen",
        "prompt": "Vertel uw gezin wat u voor de weekendreis heeft voorbereid.",
        "answer": "Ik heb het kofferlabel geprint en stevig op de koffer geplakt. Ik neem ook de opladers mee."
      },
      {
        "title": "Afbeelding gemeente met afvalpas",
        "prompt": "Kijk naar de afbeelding. Beschrijf waar u bent en wat u vraagt.",
        "image": "images/speaking/v011-speaking-municipality-waste-card-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch municipal office reception area. Scene: a resident at a simple counter asking about a waste card, neutral desk, appointment monitor intentionally unreadable, daylight, no readable text, no logos, no watermark.",
        "answer": "Ik ben bij de gemeente. Ik vraag waar ik een nieuwe afvalpas kan ophalen."
      },
      {
        "title": "Afbeelding huisarts belt terug",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u de praktijk belt.",
        "image": "images/speaking/v011-speaking-doctor-callback-phone-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch home office. Scene: woman holding phone near a calendar and medicine box, calling a doctor's practice for a callback, calm practical setting, no readable text, no logos, no watermark.",
        "answer": "Ik bel de huisartsenpraktijk. Ik vraag of de huisarts mij vandaag kan terugbellen."
      },
      {
        "title": "Afbeelding rapportgesprek op school",
        "prompt": "Kijk naar de afbeelding. Vertel welke afspraak u maakt.",
        "image": "images/speaking/v011-speaking-school-report-meeting-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch primary school classroom. Scene: parent and teacher at a small table with school folders and a child's laptop, friendly report meeting, no readable text, no logos, no watermark.",
        "answer": "Ik ben op school. Ik maak een afspraak voor het rapportgesprek van mijn dochter."
      },
      {
        "title": "Afbeelding bushalte door werkzaamheden",
        "prompt": "Kijk naar de afbeelding. Vraag waar de bus vandaag stopt.",
        "image": "images/speaking/v011-speaking-bus-stop-change-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style at a Dutch bus stop near roadworks. Scene: temporary stop pole, bus in background, small barriers without readable signs, overcast daylight, no readable text, no logos, no watermark.",
        "answer": "Ik sta bij een andere halte. Ik vraag of bus 11 hier vandaag stopt."
      },
      {
        "title": "Afbeelding raamreparatie thuis",
        "prompt": "Kijk naar de afbeelding. Leg uit welk probleem u ziet.",
        "image": "images/speaking/v011-speaking-window-repair-home-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch bedroom. Scene: small top window slightly open, repair toolbox, chair moved away, tidy home, natural light, no readable text, no logos, no watermark.",
        "answer": "Het raam in de slaapkamer sluit niet goed. Ik vraag om reparatie."
      },
      {
        "title": "Afbeelding taalspreekuur bibliotheek",
        "prompt": "Kijk naar de afbeelding. Vertel welke hulp u nodig heeft.",
        "image": "images/speaking/v011-speaking-library-language-desk-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch public library language help desk. Scene: volunteer helps adult learner read a letter and fill a form, bookshelves blurred, no readable text, no logos, no watermark.",
        "answer": "Ik ben in de bibliotheek. Ik vraag hulp met een brief en een formulier."
      },
      {
        "title": "Zaterdagplan met gezin",
        "prompt": "Vertel wat u in het weekend met uw gezin wilt doen.",
        "answer": "In het weekend wil ik fietsen, samen koken en een korte wandeling maken. Daarna kijken we een film."
      },
      {
        "title": "Kort antwoord aan balie",
        "prompt": "Een medewerker vraagt waarvoor u komt. Geef een kort antwoord.",
        "answer": "Ik kom voor mijn afvalpas. Ik wil weten welke balie ik nodig heb."
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
        "title": "AI-luistercoach voor korte berichten",
        "prompt": "Open een spraaktool en vraag om een langzaam A2-luisterbericht met een tijd, plaats, probleem en actie.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor met een tijd, plaats, probleem en actie. Stel daarna drie vragen."
      },
      {
        "title": "Afvalpas bij gemeentehuis",
        "audio": "audio/v011-listening-01-gemeente-afvalpas-balie.mp3",
        "transcript": "Mevrouw Bonenkamp, uw nieuwe afvalpas ligt vanaf dinsdag klaar bij de receptie van het gemeentehuis. Neem uw identiteitsbewijs mee.",
        "questions": [
          "Vraag 1: Welke pas ligt klaar?",
          "Vraag 2: Waar ligt de pas klaar?",
          "Vraag 3: Wat moet mevrouw meenemen?"
        ],
        "answer": "De afvalpas ligt klaar. De pas ligt bij de receptie van het gemeentehuis. Zij moet haar identiteitsbewijs meenemen."
      },
      {
        "title": "Huisarts belt terug",
        "audio": "audio/v011-listening-02-huisarts-terugbelverzoek.mp3",
        "transcript": "De assistente zegt: de huisarts belt u vandaag tussen twee en vier uur terug. Houd uw telefoon bij u. Bel na half vijf opnieuw als u niets hoort.",
        "questions": [
          "Vraag 1: Wie belt mevrouw terug?",
          "Vraag 2: Tussen welke tijden belt de huisarts?",
          "Vraag 3: Wanneer belt mevrouw opnieuw?"
        ],
        "answer": "De huisarts belt haar terug. Hij belt tussen twee en vier uur. Zij belt na half vijf opnieuw als zij niets hoort."
      },
      {
        "title": "Link voor rapportgesprek",
        "audio": "audio/v011-listening-03-school-rapportgesprek-link.mp3",
        "transcript": "De school stuurt vandaag een link voor het rapportgesprek. Kies voor vrijdag een tijd. Het gesprek duurt tien minuten.",
        "questions": [
          "Vraag 1: Wat stuurt de school vandaag?",
          "Vraag 2: Waarvoor kiest mevrouw een tijd?",
          "Vraag 3: Hoe lang duurt het gesprek?"
        ],
        "answer": "De school stuurt een link. Zij kiest een tijd voor het rapportgesprek. Het gesprek duurt tien minuten."
      },
      {
        "title": "Flessen naar servicebalie",
        "audio": "audio/v011-listening-04-supermarkt-statiegeld-balie.mp3",
        "transcript": "Let op: de statiegeldautomaat is kapot. Breng uw lege flessen naar de servicebalie. Het bedrag komt op uw kassabon.",
        "questions": [
          "Vraag 1: Wat is kapot?",
          "Vraag 2: Waar brengt mevrouw de lege flessen?",
          "Vraag 3: Waar komt het bedrag op?"
        ],
        "answer": "De statiegeldautomaat is kapot. Zij brengt de flessen naar de servicebalie. Het bedrag komt op de kassabon."
      },
      {
        "title": "Bus naar andere halte",
        "audio": "audio/v011-listening-05-bus-halte-station.mp3",
        "transcript": "Deze week stopt bus elf niet bij halte Markt. Loop naar halte Station. De wandeling duurt ongeveer vijf minuten.",
        "questions": [
          "Vraag 1: Welke bus stopt niet bij halte Markt?",
          "Vraag 2: Naar welke halte loopt mevrouw?",
          "Vraag 3: Hoe lang duurt de wandeling ongeveer?"
        ],
        "answer": "Bus elf stopt niet bij halte Markt. Zij loopt naar halte Station. De wandeling duurt ongeveer vijf minuten."
      },
      {
        "title": "Online webinar over offerte",
        "audio": "audio/v011-listening-06-kvk-webinar-offerte.mp3",
        "transcript": "Woensdag om tien uur begint een online webinar over offertes maken. Het webinar is gratis en duurt een uur.",
        "questions": [
          "Vraag 1: Waarover gaat het webinar?",
          "Vraag 2: Hoe laat begint het webinar?",
          "Vraag 3: Wat kost het webinar?"
        ],
        "answer": "Het webinar gaat over offertes maken. Het begint om tien uur. Het webinar is gratis."
      },
      {
        "title": "Onderhoud aan douches",
        "audio": "audio/v011-listening-07-zwembad-douche-onderhoud.mp3",
        "transcript": "Na het banenzwemmen zijn douche een en twee dicht door onderhoud. Gebruik vandaag de kleedkamers aan de andere kant.",
        "questions": [
          "Vraag 1: Welke douches zijn dicht?",
          "Vraag 2: Waarom zijn de douches dicht?",
          "Vraag 3: Welke kleedkamers gebruikt mevrouw?"
        ],
        "answer": "Douche een en twee zijn dicht. Ze zijn dicht door onderhoud. Zij gebruikt de kleedkamers aan de andere kant."
      },
      {
        "title": "Bril maandag ophalen",
        "audio": "audio/v011-listening-08-opticien-bril-maandag.mp3",
        "transcript": "Uw bril is maandag na half twee klaar. U hoeft geen nieuwe meting te doen. Neem wel uw oude bril mee.",
        "questions": [
          "Vraag 1: Wanneer is de bril klaar?",
          "Vraag 2: Wat hoeft mevrouw niet te doen?",
          "Vraag 3: Wat neemt mevrouw mee?"
        ],
        "answer": "De bril is maandag na half twee klaar. Zij hoeft geen nieuwe meting te doen. Zij neemt haar oude bril mee."
      },
      {
        "title": "Pakketcode meenemen",
        "audio": "audio/v011-listening-09-buren-pakket-code.mp3",
        "transcript": "Uw pakket ligt bij buurman nummer achttien. U kunt het na zes uur ophalen. Neem de code uit de bezorgapp mee.",
        "questions": [
          "Vraag 1: Bij welk huisnummer ligt het pakket?",
          "Vraag 2: Na hoe laat kan mevrouw het ophalen?",
          "Vraag 3: Welke code neemt zij mee?"
        ],
        "answer": "Het pakket ligt bij nummer achttien. Zij kan het na zes uur ophalen. Zij neemt de code uit de bezorgapp mee."
      },
      {
        "title": "Raamreparatie donderdag",
        "audio": "audio/v011-listening-10-woning-raam-reparatie.mp3",
        "transcript": "De monteur komt donderdag tussen acht en tien uur voor het raam in de slaapkamer. Zet de stoel onder het raam alvast weg.",
        "questions": [
          "Vraag 1: Op welke dag en tussen welke tijden komt de monteur?",
          "Vraag 2: Welk raam komt hij repareren?",
          "Vraag 3: Wat zet mevrouw weg?"
        ],
        "answer": "De monteur komt donderdag tussen acht en tien uur. Hij repareert het raam in de slaapkamer. Zij zet de stoel onder het raam weg."
      },
      {
        "title": "Eigen risico betalen",
        "audio": "audio/v011-listening-11-zorgverzekering-termijnen.mp3",
        "transcript": "Uw zorgverzekeraar zegt: u kunt het eigen risico in drie termijnen betalen. De eerste termijn wordt op vijftien juni afgeschreven.",
        "questions": [
          "Vraag 1: Wat kan mevrouw in drie termijnen betalen?",
          "Vraag 2: Hoeveel termijnen zijn er?",
          "Vraag 3: Wanneer wordt de eerste termijn afgeschreven?"
        ],
        "answer": "Zij kan het eigen risico betalen. Er zijn drie termijnen. De eerste termijn wordt op vijftien juni afgeschreven."
      },
      {
        "title": "Taalspreekuur in bibliotheek",
        "audio": "audio/v011-listening-12-bibliotheek-taalspreekuur.mp3",
        "transcript": "Het taalspreekuur in de bibliotheek is woensdag van drie tot vijf uur. Neem de brief mee waarmee u hulp nodig heeft.",
        "questions": [
          "Vraag 1: Waar is het taalspreekuur?",
          "Vraag 2: Op welke dag en tijd is het taalspreekuur?",
          "Vraag 3: Wat neemt mevrouw mee?"
        ],
        "answer": "Het taalspreekuur is in de bibliotheek. Het is woensdag van drie tot vijf uur. Zij neemt de brief mee."
      },
      {
        "title": "Presentatie over technologie",
        "audio": "audio/v011-listening-13-dochter-technologie-presentatie.mp3",
        "transcript": "Vrijdag geeft uw dochter een presentatie over technologie. Zij heeft een laptop en een USB-stick nodig. Ouders mogen om kwart over twee binnenkomen.",
        "questions": [
          "Vraag 1: Waarover gaat de presentatie?",
          "Vraag 2: Welke spullen heeft de dochter nodig?",
          "Vraag 3: Hoe laat mogen ouders binnenkomen?"
        ],
        "answer": "De presentatie gaat over technologie. Zij heeft een laptop en een USB-stick nodig. Ouders mogen om kwart over twee binnenkomen."
      },
      {
        "title": "Voorlamp van fiets",
        "audio": "audio/v011-listening-14-fiets-lamp-accu.mp3",
        "transcript": "Laad de voorlamp van uw fiets twee uur op. Neem ook een klein achterlicht mee, want u fietst pas na zonsondergang terug.",
        "questions": [
          "Vraag 1: Welke lamp laadt mevrouw op?",
          "Vraag 2: Hoe lang laadt zij de lamp op?",
          "Vraag 3: Waarom neemt zij een achterlicht mee?"
        ],
        "answer": "Zij laadt de voorlamp op. Zij laadt de lamp twee uur op. Zij neemt een achterlicht mee omdat zij na zonsondergang terugfietst."
      },
      {
        "title": "Marktbox zaterdag",
        "audio": "audio/v011-listening-15-marktbox-kip-groente.mp3",
        "transcript": "Uw marktbox met kip, paprika en sperziebonen ligt zaterdag klaar bij kraam zeven. Bestel voor elf uur en neem een tas mee.",
        "questions": [
          "Vraag 1: Wat zit er in de marktbox?",
          "Vraag 2: Bij welke kraam ligt de box klaar?",
          "Vraag 3: Wat neemt mevrouw mee?"
        ],
        "answer": "Er zitten kip, paprika en sperziebonen in. De box ligt klaar bij kraam zeven. Zij neemt een tas mee."
      },
      {
        "title": "Betaalverzoek controleren",
        "audio": "audio/v011-listening-16-bank-betaalverzoek-veilig.mp3",
        "transcript": "Betaal een verzoek alleen als u de naam van de ontvanger kent. Klik niet op een vreemde link en open zelf uw bankapp.",
        "questions": [
          "Vraag 1: Wanneer betaalt mevrouw een betaalverzoek?",
          "Vraag 2: Waarop klikt zij niet?",
          "Vraag 3: Welke app opent zij zelf?"
        ],
        "answer": "Zij betaalt alleen als zij de naam kent. Zij klikt niet op een vreemde link. Zij opent zelf haar bankapp."
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
        "title": "Identiteitsbewijs bij loket",
        "prompt": "Vraag: Wat neemt u mee als een gemeenteloket om identificatie vraagt?",
        "questions": [
          "A. Een geldig paspoort, ID-kaart of rijbewijs.",
          "B. Alleen een boodschappenbon.",
          "C. De bankpas van uw buurman."
        ],
        "answer": "A. Een geldig paspoort, ID-kaart of rijbewijs."
      },
      {
        "title": "Afvalregels in de gemeente",
        "prompt": "Vraag: Wat hoort bij goed omgaan met huishoudelijk afval?",
        "questions": [
          "A. Afval op straat zetten wanneer u wilt.",
          "B. Afval scheiden en de juiste inzameldag gebruiken.",
          "C. Glas en papier altijd in de restafvalbak doen."
        ],
        "answer": "B. Afval scheiden en de juiste inzameldag gebruiken."
      },
      {
        "title": "Eerste hulp bij gewone klacht",
        "prompt": "Vraag: Waar neemt u meestal eerst contact mee op bij een gewone medische klacht?",
        "questions": [
          "A. Met de minister-president.",
          "B. Met de supermarkt.",
          "C. Met de huisarts of huisartsenpraktijk."
        ],
        "answer": "C. Met de huisarts of huisartsenpraktijk."
      },
      {
        "title": "Basiszorgverzekering",
        "prompt": "Vraag: Wat geldt meestal voor volwassen inwoners in Nederland?",
        "questions": [
          "A. Zij moeten een basiszorgverzekering hebben.",
          "B. Zij mogen nooit zorgkosten declareren.",
          "C. Zij krijgen zorg alleen via de gemeente."
        ],
        "answer": "A. Zij moeten een basiszorgverzekering hebben."
      },
      {
        "title": "Leerplicht van kinderen",
        "prompt": "Vraag: Wat betekent leerplicht voor ouders?",
        "questions": [
          "A. Ouders kiezen elke dag zelf of school nodig is.",
          "B. Ouders zorgen dat hun kind naar school gaat.",
          "C. Ouders sturen alleen huiswerk naar school."
        ],
        "answer": "B. Ouders zorgen dat hun kind naar school gaat."
      },
      {
        "title": "Ziekmelden bij school",
        "prompt": "Vraag: Wat doet u als uw dochter ziek thuisblijft?",
        "questions": [
          "A. U wacht tot de school na een week belt.",
          "B. U zet haar zonder bericht op de bus.",
          "C. U meldt haar ziek volgens de schoolregels."
        ],
        "answer": "C. U meldt haar ziek volgens de schoolregels."
      },
      {
        "title": "Contract voor werk",
        "prompt": "Vraag: Wat controleert u voordat u een arbeidscontract tekent?",
        "questions": [
          "A. Loon, uren, functie en afspraken.",
          "B. Alleen de kleur van het papier.",
          "C. De fietsroute van de directeur."
        ],
        "answer": "A. Loon, uren, functie en afspraken."
      },
      {
        "title": "Recht op loon",
        "prompt": "Vraag: Wat hoort bij betaald werk in Nederland?",
        "questions": [
          "A. De werkgever betaalt alleen als hij zin heeft.",
          "B. De werknemer krijgt loon volgens de afspraken en regels.",
          "C. Werknemers betalen loon aan de werkgever."
        ],
        "answer": "B. De werknemer krijgt loon volgens de afspraken en regels."
      },
      {
        "title": "Belasting op tijd regelen",
        "prompt": "Vraag: Wat kan de Belastingdienst van u vragen?",
        "questions": [
          "A. Dat u elke dag naar Den Haag reist.",
          "B. Dat u uw zwemabonnement opstuurt.",
          "C. Dat u aangifte doet of gegevens controleert als dat nodig is."
        ],
        "answer": "C. Dat u aangifte doet of gegevens controleert als dat nodig is."
      },
      {
        "title": "Lokale raad en voorzieningen",
        "prompt": "Vraag: Waarover beslist de gemeenteraad mee?",
        "questions": [
          "A. Over lokale onderwerpen zoals verkeer, afval en voorzieningen.",
          "B. Over de cijfers van alle leerlingen.",
          "C. Over de prijs van iedere fiets in Nederland."
        ],
        "answer": "A. Over lokale onderwerpen zoals verkeer, afval en voorzieningen."
      },
      {
        "title": "Meehelpen in de buurt",
        "prompt": "Vraag: Waarom doen veel mensen vrijwilligerswerk?",
        "questions": [
          "A. Om nooit regels te hoeven volgen.",
          "B. Om anderen te helpen en mee te doen.",
          "C. Om automatisch een rijbewijs te krijgen."
        ],
        "answer": "B. Om anderen te helpen en mee te doen."
      },
      {
        "title": "Bankapp zorgvuldig gebruiken",
        "prompt": "Vraag: Wat is veilig bij online bankieren?",
        "questions": [
          "A. Uw pincode aan onbekenden geven.",
          "B. Via elke link uit een bericht inloggen.",
          "C. Zelf de bankapp openen en codes geheim houden."
        ],
        "answer": "C. Zelf de bankapp openen en codes geheim houden."
      },
      {
        "title": "Storing in huurwoning",
        "prompt": "Vraag: Wat doet u bij een kapot raam in een huurwoning?",
        "questions": [
          "A. U meldt de storing bij verhuurder of woningcorporatie.",
          "B. U stopt direct met alle huur betalen zonder uitleg.",
          "C. U laat het raam maanden kapot."
        ],
        "answer": "A. U meldt de storing bij verhuurder of woningcorporatie."
      },
      {
        "title": "Brandveilig wonen",
        "prompt": "Vraag: Wat helpt om thuis brand te voorkomen of snel te ontdekken?",
        "questions": [
          "A. Kaarsen laten branden als u weggaat.",
          "B. Rookmelders gebruiken en apparaten veilig gebruiken.",
          "C. Natte handdoeken op stekkers leggen."
        ],
        "answer": "B. Rookmelders gebruiken en apparaten veilig gebruiken."
      },
      {
        "title": "Reizen met openbaar vervoer",
        "prompt": "Vraag: Wat doet u meestal met een OV-chipkaart of betaalpas in het OV?",
        "questions": [
          "A. U laat de kaart thuis.",
          "B. U geeft de kaart aan een onbekende.",
          "C. U checkt in en meestal ook uit."
        ],
        "answer": "C. U checkt in en meestal ook uit."
      },
      {
        "title": "Fietslicht in het donker",
        "prompt": "Vraag: Wat is verplicht en veilig als u in het donker fietst?",
        "questions": [
          "A. Werkend licht en goed zichtbaar zijn.",
          "B. Zonder licht sneller fietsen.",
          "C. Alleen op de stoep fietsen."
        ],
        "answer": "A. Werkend licht en goed zichtbaar zijn."
      },
      {
        "title": "Discriminatie voorkomen",
        "prompt": "Vraag: Wat past bij gelijke behandeling?",
        "questions": [
          "A. Mensen uitsluiten door afkomst of geloof.",
          "B. Mensen gelijk behandelen en niet discrimineren.",
          "C. Alleen familieleden helpen bij de balie."
        ],
        "answer": "B. Mensen gelijk behandelen en niet discrimineren."
      },
      {
        "title": "Mening geven met respect",
        "prompt": "Vraag: Wat betekent vrijheid van meningsuiting?",
        "questions": [
          "A. U mag altijd bedreigen.",
          "B. U hoeft nooit naar anderen te luisteren.",
          "C. U mag uw mening geven binnen de grenzen van de wet."
        ],
        "answer": "C. U mag uw mening geven binnen de grenzen van de wet."
      },
      {
        "title": "DigiD geheimhouden",
        "prompt": "Vraag: Wat doet u met uw DigiD?",
        "questions": [
          "A. U houdt uw inloggegevens geheim.",
          "B. U geeft de code aan iedereen die belt.",
          "C. U schrijft de code op een openbaar bord."
        ],
        "answer": "A. U houdt uw inloggegevens geheim."
      },
      {
        "title": "Persoonlijke examengegevens",
        "prompt": "Vraag: Waar vindt u betrouwbare persoonlijke informatie over uw inburgering?",
        "questions": [
          "A. Alleen in reclame op sociale media.",
          "B. In Mijn Inburgering en officiele DUO-informatie.",
          "C. Op een willekeurige kassabon."
        ],
        "answer": "B. In Mijn Inburgering en officiele DUO-informatie."
      },
      {
        "title": "Wat de bibliotheek doet",
        "prompt": "Vraag: Waarmee kan de openbare bibliotheek vaak helpen?",
        "questions": [
          "A. Alleen met paspoorten maken.",
          "B. Met medicijnen zonder recept.",
          "C. Met boeken, taal en digitale vragen."
        ],
        "answer": "C. Met boeken, taal en digitale vragen."
      },
      {
        "title": "Alarmnummer gebruiken",
        "prompt": "Vraag: Wanneer belt u 112?",
        "questions": [
          "A. Bij direct gevaar, brand of ernstige nood.",
          "B. Voor een gewone afspraak bij de kapper.",
          "C. Om een pakket later te laten bezorgen."
        ],
        "answer": "A. Bij direct gevaar, brand of ernstige nood."
      },
      {
        "title": "Medicijnen ophalen",
        "prompt": "Vraag: Waar haalt u meestal medicijnen met een recept op?",
        "questions": [
          "A. Bij de fietsenmaker.",
          "B. Bij de apotheek.",
          "C. Bij het stembureau."
        ],
        "answer": "B. Bij de apotheek."
      },
      {
        "title": "Kosten van erkende opvang",
        "prompt": "Vraag: Waarvoor is kinderopvangtoeslag bedoeld?",
        "questions": [
          "A. Voor gratis vakantie in het buitenland.",
          "B. Voor korting op elke supermarktbon.",
          "C. Voor hulp bij kosten van erkende kinderopvang."
        ],
        "answer": "C. Voor hulp bij kosten van erkende kinderopvang."
      },
      {
        "title": "Rustig contact met buren",
        "prompt": "Vraag: Wat is meestal verstandig bij kleine burenoverlast?",
        "questions": [
          "A. Eerst rustig praten of een vriendelijk bericht sturen.",
          "B. Meteen spullen van de buren wegzetten.",
          "C. De muziek expres harder zetten."
        ],
        "answer": "A. Eerst rustig praten of een vriendelijk bericht sturen."
      },
      {
        "title": "Minder energie gebruiken",
        "prompt": "Vraag: Waarom letten mensen op energieverbruik?",
        "questions": [
          "A. Omdat verwarming altijd verboden is.",
          "B. Omdat het kosten kan besparen en beter is voor het milieu.",
          "C. Omdat ramen nooit open mogen."
        ],
        "answer": "B. Omdat het kosten kan besparen en beter is voor het milieu."
      },
      {
        "title": "Reisdocument bij gemeente",
        "prompt": "Vraag: Waar vraagt u meestal een paspoort of identiteitskaart aan?",
        "questions": [
          "A. Bij de supermarkt.",
          "B. Bij de sportclub.",
          "C. Bij de gemeente waar u staat ingeschreven."
        ],
        "answer": "C. Bij de gemeente waar u staat ingeschreven."
      },
      {
        "title": "Stemgeheim",
        "prompt": "Vraag: Wat betekent stemgeheim?",
        "questions": [
          "A. U mag zelf kiezen en hoeft niet te vertellen op wie u stemt.",
          "B. U moet uw stem aan uw werkgever laten zien.",
          "C. U mag alleen stemmen met familie naast u."
        ],
        "answer": "A. U mag zelf kiezen en hoeft niet te vertellen op wie u stemt."
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
        "title": "Zinsvolgorde met bankapp",
        "prompt": "Opdracht: Zet in goede volgorde: Violetta / de bankapp / vandaag / opent",
        "answer": "Vandaag opent Violetta de bankapp."
      },
      {
        "title": "Onderwerp voor persoonsvorm",
        "prompt": "Opdracht: Zet in goede volgorde: mijn dochter / vrijdag / geeft / een presentatie",
        "answer": "Mijn dochter geeft vrijdag een presentatie."
      },
      {
        "title": "Plaats in de zin",
        "prompt": "Opdracht: Maak een zin: in de bibliotheek / met een brief / De vrijwilliger / helpt",
        "answer": "De vrijwilliger helpt in de bibliotheek met een brief."
      },
      {
        "title": "Vraag met welke",
        "prompt": "Opdracht: Maak een vraag: gebruikt / u / welke / halte",
        "answer": "Welke halte gebruikt u?"
      },
      {
        "title": "Waarom-vraag huisarts",
        "prompt": "Opdracht: Maak een vraag: de huisarts / terug / waarom / belt",
        "answer": "Waarom belt de huisarts terug?"
      },
      {
        "title": "Hoe lang vraag",
        "prompt": "Opdracht: Maak een vraag: het webinar / hoe lang / duurt",
        "answer": "Hoe lang duurt het webinar?"
      },
      {
        "title": "Redenzin met omdat",
        "prompt": "Opdracht: Maak een zin: Ik bel de bank. Ik kreeg een vreemd betaalverzoek.",
        "answer": "Ik bel de bank omdat ik een vreemd betaalverzoek kreeg."
      },
      {
        "title": "Als aan het begin",
        "prompt": "Opdracht: Maak een zin: De bus stopt niet. Ik loop naar halte Station.",
        "answer": "Als de bus niet stopt, loop ik naar halte Station."
      },
      {
        "title": "Daarna met inversie",
        "prompt": "Opdracht: Maak een zin met daarna: Ik laad de lamp op. Ik fiets naar Heeze.",
        "answer": "Ik laad de lamp op. Daarna fiets ik naar Heeze."
      },
      {
        "title": "Niet op de juiste plaats",
        "prompt": "Opdracht: Zet in goede volgorde: ik / maandag / kan / niet / komen",
        "answer": "Ik kan maandag niet komen."
      },
      {
        "title": "Of-zin met vraag",
        "prompt": "Opdracht: Maak een vraag: om acht uur / om tien uur / komt / de monteur / of",
        "answer": "Komt de monteur om acht uur of om tien uur?"
      },
      {
        "title": "Dat-zin van school",
        "prompt": "Opdracht: Maak af: De school zegt dat de link vandaag ... (komt)",
        "answer": "De school zegt dat de link vandaag komt."
      },
      {
        "title": "Wanneer-vraag afvalpas",
        "prompt": "Opdracht: Maak een vraag: de afvalpas / klaar / wanneer / ligt",
        "answer": "Wanneer ligt de afvalpas klaar?"
      },
      {
        "title": "Tijd na plaats",
        "prompt": "Opdracht: Maak een zin: het pakket / bij de buren / Wij / halen / vanavond",
        "answer": "Wij halen het pakket vanavond bij de buren."
      },
      {
        "title": "Wie-vraag",
        "prompt": "Opdracht: Maak een vraag: met het formulier / wie / helpt",
        "answer": "Wie helpt met het formulier?"
      },
      {
        "title": "Modal werkwoord",
        "prompt": "Opdracht: Zet in goede volgorde: de code / meenemen / u / moet",
        "answer": "U moet de code meenemen."
      },
      {
        "title": "Zinsvolgorde met voorzetselgroep",
        "prompt": "Opdracht: Maak een zin: ik / een artikel / In de ochtend / schrijf",
        "answer": "In de ochtend schrijf ik een artikel."
      },
      {
        "title": "Want met donker fietsen",
        "prompt": "Opdracht: Maak een zin met want: Ik neem een achterlicht mee. Het wordt donker.",
        "answer": "Ik neem een achterlicht mee, want het wordt donker."
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
        "title": "Ik controleer",
        "prompt": "Opdracht: Vul het werkwoord in: Ik ___ de naam van de ontvanger. (controleren)",
        "answer": "Ik controleer de naam van de ontvanger."
      },
      {
        "title": "Zij laadt op",
        "prompt": "Opdracht: Vul het werkwoord in: Zij ___ de fietslamp op. (laden)",
        "answer": "Zij laadt de fietslamp op."
      },
      {
        "title": "Wij kiezen",
        "prompt": "Opdracht: Vul het werkwoord in: Wij ___ een tijd in de schoolapp. (kiezen)",
        "answer": "Wij kiezen een tijd in de schoolapp."
      },
      {
        "title": "U betaalt",
        "prompt": "Opdracht: Vul het werkwoord in: U ___ het bedrag in termijnen. (betalen)",
        "answer": "U betaalt het bedrag in termijnen."
      },
      {
        "title": "Ik heb gebeld",
        "prompt": "Opdracht: Maak perfectum: Ik bel de huisarts.",
        "answer": "Ik heb de huisarts gebeld."
      },
      {
        "title": "Zij heeft gekozen",
        "prompt": "Opdracht: Maak perfectum: Zij kiest een tijd voor het gesprek.",
        "answer": "Zij heeft een tijd voor het gesprek gekozen."
      },
      {
        "title": "Wij zijn gelopen",
        "prompt": "Opdracht: Maak perfectum: Wij lopen naar halte Station.",
        "answer": "Wij zijn naar halte Station gelopen."
      },
      {
        "title": "De monteur heeft gerepareerd",
        "prompt": "Opdracht: Maak perfectum: De monteur repareert het raam.",
        "answer": "De monteur heeft het raam gerepareerd."
      },
      {
        "title": "Ik heb besteld",
        "prompt": "Opdracht: Maak perfectum: Ik bestel een marktbox.",
        "answer": "Ik heb een marktbox besteld."
      },
      {
        "title": "Toekomstplan met gaan",
        "prompt": "Opdracht: Maak toekomst: Ik schrijf een bericht.",
        "answer": "Ik ga een bericht schrijven."
      },
      {
        "title": "Gaan met infinitief",
        "prompt": "Opdracht: Maak toekomst: Wij koken met kip en groente.",
        "answer": "Wij gaan met kip en groente koken."
      },
      {
        "title": "Zal bij belofte",
        "prompt": "Opdracht: Maak een zin met zal: Ik stuur de link morgen.",
        "answer": "Ik zal de link morgen sturen."
      },
      {
        "title": "Verleden tijd had",
        "prompt": "Opdracht: Vul in: Gisteren ___ ik geen tijd. (hebben)",
        "answer": "Gisteren had ik geen tijd."
      },
      {
        "title": "Verleden tijd was",
        "prompt": "Opdracht: Vul in: De statiegeldautomaat ___ kapot. (zijn)",
        "answer": "De statiegeldautomaat was kapot."
      },
      {
        "title": "U krijgt",
        "prompt": "Opdracht: Vul het werkwoord in: U ___ de link in de schoolapp. (krijgen)",
        "answer": "U krijgt de link in de schoolapp."
      },
      {
        "title": "Hij komt",
        "prompt": "Opdracht: Vul het werkwoord in: De monteur ___ donderdag. (komen)",
        "answer": "De monteur komt donderdag."
      },
      {
        "title": "Wij nemen",
        "prompt": "Opdracht: Vul het werkwoord in: Wij ___ een tas mee. (nemen)",
        "answer": "Wij nemen een tas mee."
      },
      {
        "title": "Perfectum met zijn",
        "prompt": "Opdracht: Maak perfectum: De bus vertrekt naar Eindhoven.",
        "answer": "De bus is naar Eindhoven vertrokken."
      }
    ]
  },
  {
    "id": "modals",
    "number": "08",
    "category": "Grammatica",
    "title": "Grammatica: modale, scheidbare en wederkerende werkwoorden",
    "goal": "Oefen moeten, kunnen, willen, mogen, scheidbare werkwoorden en zich-werkwoorden.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Identiteitsbewijs moeten meenemen",
        "prompt": "Opdracht: Maak een zin met moet: U neemt uw identiteitsbewijs mee.",
        "answer": "U moet uw identiteitsbewijs meenemen."
      },
      {
        "title": "Kunnen ophalen",
        "prompt": "Opdracht: Maak een zin met kunt: U haalt de afvalpas dinsdag op.",
        "answer": "U kunt de afvalpas dinsdag ophalen."
      },
      {
        "title": "Hulp willen vragen",
        "prompt": "Opdracht: Maak een zin met wil: Ik vraag hulp in de bibliotheek.",
        "answer": "Ik wil hulp in de bibliotheek vragen."
      },
      {
        "title": "Mogen kijken",
        "prompt": "Opdracht: Maak een zin met mogen: Ouders kijken om 14.15 uur.",
        "answer": "Ouders mogen om 14.15 uur kijken."
      },
      {
        "title": "Ophalen scheidbaar",
        "prompt": "Opdracht: Vul in: Ik ___ het pakket na zes uur ___. (ophalen)",
        "answer": "Ik haal het pakket na zes uur op."
      },
      {
        "title": "Invullen scheidbaar",
        "prompt": "Opdracht: Vul in: Zij ___ het formulier rustig ___. (invullen)",
        "answer": "Zij vult het formulier rustig in."
      },
      {
        "title": "Meenemen scheidbaar",
        "prompt": "Opdracht: Vul in: Wij ___ een tas ___. (meenemen)",
        "answer": "Wij nemen een tas mee."
      },
      {
        "title": "Terugbellen scheidbaar",
        "prompt": "Opdracht: Vul in: De huisarts ___ mij vandaag ___. (terugbellen)",
        "answer": "De huisarts belt mij vandaag terug."
      },
      {
        "title": "Doorgeven scheidbaar",
        "prompt": "Opdracht: Vul in: Ik ___ mijn nieuwe adres ___. (doorgeven)",
        "answer": "Ik geef mijn nieuwe adres door."
      },
      {
        "title": "Aanmelden scheidbaar",
        "prompt": "Opdracht: Vul in: U ___ zich aan de balie ___. (aanmelden)",
        "answer": "U meldt zich aan de balie aan."
      },
      {
        "title": "Aanmelden bij spreekuur",
        "prompt": "Opdracht: Maak een zin: Ik / zich aanmelden / voor het taalspreekuur",
        "answer": "Ik meld mij aan voor het taalspreekuur."
      },
      {
        "title": "Tijd verkeerd begrijpen",
        "prompt": "Opdracht: Maak een zin: Ik / zich vergissen / in de tijd",
        "answer": "Ik vergis mij in de tijd."
      },
      {
        "title": "Zich voelen",
        "prompt": "Opdracht: Vul in: Ik ___ me vandaag beter. (voelen)",
        "answer": "Ik voel me vandaag beter."
      },
      {
        "title": "Presentatie voorbereiden",
        "prompt": "Opdracht: Maak een zin: Mijn dochter / zich voorbereiden / op de presentatie",
        "answer": "Mijn dochter bereidt zich voor op de presentatie."
      },
      {
        "title": "Moeten betalen",
        "prompt": "Opdracht: Maak een zin: Zij betaalt het eigen risico.",
        "answer": "Zij moet het eigen risico betalen."
      },
      {
        "title": "Kunnen gebruiken",
        "prompt": "Opdracht: Maak een zin: Wij gebruiken de kleedkamer aan de andere kant.",
        "answer": "Wij kunnen de kleedkamer aan de andere kant gebruiken."
      },
      {
        "title": "Willen bestellen",
        "prompt": "Opdracht: Maak een zin: Ik bestel een box op de markt.",
        "answer": "Ik wil een box op de markt bestellen."
      },
      {
        "title": "Mogen meenemen",
        "prompt": "Opdracht: Maak een vraag: mijn dochter / meenemen / mag / ik",
        "answer": "Mag ik mijn dochter meenemen?"
      }
    ]
  },
  {
    "id": "nouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Grammatica: zelfstandige naamwoorden, lidwoorden, bijvoeglijke naamwoorden en voornaamwoorden",
    "goal": "Oefen de/het, meervoud, bijvoeglijke naamwoorden en verwijswoorden.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "De afspraak",
        "prompt": "Opdracht: Kies de of het: ___ afspraak met de opticien.",
        "answer": "De afspraak met de opticien."
      },
      {
        "title": "Lidwoord voor formulierkaart",
        "prompt": "Opdracht: Kies de of het: ___ formulier ligt op tafel.",
        "answer": "Het formulier ligt op tafel."
      },
      {
        "title": "De bibliotheek",
        "prompt": "Opdracht: Kies de of het: ___ bibliotheek is open tot vijf uur.",
        "answer": "De bibliotheek is open tot vijf uur."
      },
      {
        "title": "Het betaalverzoek",
        "prompt": "Opdracht: Kies de of het: ___ betaalverzoek komt van een onbekende naam.",
        "answer": "Het betaalverzoek komt van een onbekende naam."
      },
      {
        "title": "Meervoud pas",
        "prompt": "Opdracht: Maak meervoud: een afvalpas, twee ...",
        "answer": "Een afvalpas, twee afvalpassen."
      },
      {
        "title": "Meervoud brief",
        "prompt": "Opdracht: Maak meervoud: een brief, drie ...",
        "answer": "Een brief, drie brieven."
      },
      {
        "title": "Meervoud raam",
        "prompt": "Opdracht: Maak meervoud: een raam, twee ...",
        "answer": "Een raam, twee ramen."
      },
      {
        "title": "Twee kinderen benoemen",
        "prompt": "Opdracht: Maak meervoud: een dochter, twee ...",
        "answer": "Een dochter, twee dochters."
      },
      {
        "title": "Bijvoeglijk met de",
        "prompt": "Opdracht: Vul in: de ___ box. (gezond)",
        "answer": "De gezonde box."
      },
      {
        "title": "Bijvoeglijk met het",
        "prompt": "Opdracht: Vul in: het ___ formulier. (kort)",
        "answer": "Het korte formulier."
      },
      {
        "title": "Geen e na een het-woord",
        "prompt": "Opdracht: Vul in: een ___ bericht. (kort)",
        "answer": "Een kort bericht."
      },
      {
        "title": "Bijvoeglijk met meervoud",
        "prompt": "Opdracht: Vul in: ___ flessen. (leeg)",
        "answer": "Lege flessen."
      },
      {
        "title": "Persoonlijk voornaamwoord ik",
        "prompt": "Opdracht: Vervang Violetta: Violetta belt de huisarts.",
        "answer": "Zij belt de huisarts."
      },
      {
        "title": "Mijn als bezit",
        "prompt": "Opdracht: Vul in: Dit is ___ bankapp. (ik)",
        "answer": "Dit is mijn bankapp."
      },
      {
        "title": "Haar laptop",
        "prompt": "Opdracht: Vul in: Mijn dochter neemt ___ laptop mee. (zij)",
        "answer": "Mijn dochter neemt haar laptop mee."
      },
      {
        "title": "Objectpronomen",
        "prompt": "Opdracht: Vervang de brief: Ik lees de brief.",
        "answer": "Ik lees hem."
      },
      {
        "title": "Dit en dat",
        "prompt": "Opdracht: Vul in: ___ formulier hier is voor de gemeente.",
        "answer": "Dit formulier hier is voor de gemeente."
      },
      {
        "title": "Deze en die",
        "prompt": "Opdracht: Vul in: ___ afspraak op maandag is belangrijk.",
        "answer": "Deze afspraak op maandag is belangrijk."
      }
    ]
  },
  {
    "id": "negation",
    "number": "10",
    "category": "Grammatica",
    "title": "Grammatica: ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen niet/geen, in/op/naar/bij en verbindingswoorden zoals omdat, maar, dus en als.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Afspraak ontkennen",
        "prompt": "Opdracht: Maak negatief: Ik heb een afspraak.",
        "answer": "Ik heb geen afspraak."
      },
      {
        "title": "Niet betalen",
        "prompt": "Opdracht: Maak negatief: Ik betaal via de link.",
        "answer": "Ik betaal niet via de link."
      },
      {
        "title": "Geen flessen",
        "prompt": "Opdracht: Vul in: Ik heb ___ lege flessen bij me.",
        "answer": "Ik heb geen lege flessen bij me."
      },
      {
        "title": "Niet klaar",
        "prompt": "Opdracht: Vul in: Mijn bril is ___ klaar.",
        "answer": "Mijn bril is niet klaar."
      },
      {
        "title": "Balie met bij",
        "prompt": "Opdracht: Vul in: Ik meld mij ___ de balie.",
        "answer": "Ik meld mij bij de balie."
      },
      {
        "title": "Voorzetsel naar halte",
        "prompt": "Opdracht: Vul in: Wij lopen ___ halte Station.",
        "answer": "Wij lopen naar halte Station."
      },
      {
        "title": "Voorzetsel op school",
        "prompt": "Opdracht: Vul in: Mijn dochter is ___ school.",
        "answer": "Mijn dochter is op school."
      },
      {
        "title": "Voorzetsel in app",
        "prompt": "Opdracht: Vul in: De link staat ___ de schoolapp.",
        "answer": "De link staat in de schoolapp."
      },
      {
        "title": "Voorzetsel voor reis",
        "prompt": "Opdracht: Vul in: Ik print het label ___ de weekendreis.",
        "answer": "Ik print het label voor de weekendreis."
      },
      {
        "title": "Omdat met reden",
        "prompt": "Opdracht: Maak een zin met omdat: Ik bel de bank. De link is vreemd.",
        "answer": "Ik bel de bank omdat de link vreemd is."
      },
      {
        "title": "Tegenstelling met bril",
        "prompt": "Opdracht: Maak een zin met maar: De bril is klaar. Ik kan maandag niet.",
        "answer": "De bril is klaar, maar ik kan maandag niet."
      },
      {
        "title": "Gevolg met bushalte",
        "prompt": "Opdracht: Maak een zin met dus: De bus stopt niet. Ik loop naar een andere halte.",
        "answer": "De bus stopt niet, dus ik loop naar een andere halte."
      },
      {
        "title": "Uitleg met marktbox",
        "prompt": "Opdracht: Maak een zin met want: Ik neem een tas mee. De marktbox is groot.",
        "answer": "Ik neem een tas mee, want de marktbox is groot."
      },
      {
        "title": "Voorwaarde bij terugbellen",
        "prompt": "Opdracht: Maak een zin: De huisarts belt niet. Ik bel opnieuw.",
        "answer": "Als de huisarts niet belt, bel ik opnieuw."
      },
      {
        "title": "Volgorde na brief",
        "prompt": "Opdracht: Maak een zin: Ik lees de brief. Ik vul het formulier in.",
        "answer": "Ik lees de brief. Daarna vul ik het formulier in."
      },
      {
        "title": "Keuzevraag maandag dinsdag",
        "prompt": "Opdracht: Maak een vraag: Wilt u maandag komen? Wilt u dinsdag komen?",
        "answer": "Wilt u maandag komen of wilt u dinsdag komen?"
      },
      {
        "title": "Tot met tijd",
        "prompt": "Opdracht: Vul in: De balie is open ___ twaalf uur.",
        "answer": "De balie is open tot twaalf uur."
      },
      {
        "title": "Van tot",
        "prompt": "Opdracht: Vul in: Het spreekuur is ___ drie ___ vijf uur.",
        "answer": "Het spreekuur is van drie tot vijf uur."
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
  const key = `v011-writing-answer-${index}-${exercise.title}`;
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
