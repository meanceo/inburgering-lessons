const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte praktische teksten over gemeente, zorg, school, supermarkt, vervoer, werk, wonen en vrije tijd.",
    "meta": [
      "A2 examen",
      "Korte teksten",
      "Nieuwe v016-opgaven"
    ],
    "exercises": [
      {
        "title": "Identiteitskaart op tijd verlengen",
        "prompt": "Uw identiteitskaart verloopt in juni. Maak online een afspraak bij de gemeente Heeze-Leende. Neem een pasfoto, uw oude kaart en uw pinpas mee.",
        "questions": [
          "Vraag 1: Wat verloopt in juni?",
          "Vraag 2: Waar maakt u online een afspraak voor de kaart?",
          "Vraag 3: Welke drie dingen neemt u mee naar de gemeente?"
        ],
        "answer": "Uw identiteitskaart verloopt in juni. U maakt online een afspraak bij de gemeente Heeze-Leende. U neemt een pasfoto, uw oude kaart en uw pinpas mee."
      },
      {
        "title": "Bloeduitslag in het portaal bekijken",
        "prompt": "De assistente belt niet terug over uw bloedonderzoek. Kijk vrijdag na 10.00 uur in het patientenportaal. Bel tussen 13.00 en 14.00 uur als u nog vragen heeft.",
        "questions": [
          "Vraag 1: Waarover belt de assistente niet terug?",
          "Vraag 2: Wanneer kijkt u in het patientenportaal?",
          "Vraag 3: Op welk tijdstip kunt u bellen met vragen?"
        ],
        "answer": "De assistente belt niet terug over het bloedonderzoek. U kijkt vrijdag na 10.00 uur in het portaal. U belt tussen 13.00 en 14.00 uur als u vragen heeft."
      },
      {
        "title": "Sportdag met fruitpunt op school",
        "prompt": "De school van uw dochter organiseert donderdag een sportdag. Kinderen nemen sportkleding, water en een lunch mee. Ouders kunnen helpen bij het fruitpunt naast het sportveld.",
        "questions": [
          "Vraag 1: Op welke dag is de sportdag?",
          "Vraag 2: Wat nemen de kinderen mee naar school?",
          "Vraag 3: Waar kunnen ouders helpen?"
        ],
        "answer": "De sportdag is donderdag. Kinderen nemen sportkleding, water en een lunch mee. Ouders kunnen helpen bij het fruitpunt naast het sportveld."
      },
      {
        "title": "Online bestelling bij de supermarkt ophalen",
        "prompt": "Uw online boodschappen staan vrijdag vanaf 17.30 uur klaar bij de afhaalbalie. Controleer thuis of het brood en de yoghurt in de tas zitten. Meld ontbrekende producten dezelfde avond.",
        "questions": [
          "Vraag 1: Waar staan de online boodschappen klaar?",
          "Vraag 2: Vanaf hoe laat kunt u de bestelling ophalen?",
          "Vraag 3: Welke twee producten controleert u thuis?"
        ],
        "answer": "De boodschappen staan klaar bij de afhaalbalie. U kunt ze vanaf 17.30 uur ophalen. U controleert het brood en de yoghurt."
      },
      {
        "title": "OV-fiets na een treinreis gebruiken",
        "prompt": "U reist maandag met de trein naar Eindhoven. Reserveer een OV-fiets in de app en haal de fiets op bij het station. Breng de fiets dezelfde dag voor 20.00 uur terug.",
        "questions": [
          "Vraag 1: Naar welke stad reist u maandag?",
          "Vraag 2: Waar reserveert u een OV-fiets?",
          "Vraag 3: Wanneer brengt u de fiets terug?"
        ],
        "answer": "U reist naar Eindhoven. U reserveert de OV-fiets in de app. U brengt de fiets dezelfde dag voor 20.00 uur terug."
      },
      {
        "title": "Btw-bon bewaren voor uw bedrijf",
        "prompt": "Voor uw startup koopt u een microfoon voor online meetings. Vraag bij de kassa om een btw-bon. Bewaar de bon digitaal bij uw administratie van deze maand.",
        "questions": [
          "Vraag 1: Wat koopt u voor uw startup?",
          "Vraag 2: Waar vraagt u om een btw-bon?",
          "Vraag 3: Waar bewaart u de bon?"
        ],
        "answer": "U koopt een microfoon voor online meetings. U vraagt bij de kassa om een btw-bon. U bewaart de bon digitaal bij uw administratie."
      },
      {
        "title": "Veilig fietsen met de fietsclub",
        "prompt": "De fietsclub vertrekt zondag om 09.15 uur bij het dorpsplein. Draag een helm en neem een regenjas mee. Bij harde wind gaat de tocht niet door.",
        "questions": [
          "Vraag 1: Hoe laat vertrekt de fietsclub?",
          "Vraag 2: Welke twee dingen neemt of draagt u voor de tocht?",
          "Vraag 3: Wanneer gaat de fietstocht niet door?"
        ],
        "answer": "De fietsclub vertrekt om 09.15 uur. U draagt een helm en neemt een regenjas mee. Bij harde wind gaat de tocht niet door."
      },
      {
        "title": "Tandartscontrole naar de middag zetten",
        "prompt": "Uw tandartscontrole is woensdag om 09.00 uur. U heeft dan een werkafspraak. Bel de praktijk voor dinsdag om de controle naar de middag te verplaatsen.",
        "questions": [
          "Vraag 1: Wanneer is de tandartscontrole eerst gepland?",
          "Vraag 2: Waarom past die tijd niet goed?",
          "Vraag 3: Voor welke dag belt u de praktijk?"
        ],
        "answer": "De controle is woensdag om 09.00 uur gepland. U heeft dan een werkafspraak. U belt de praktijk voor dinsdag."
      },
      {
        "title": "Pakket met sportkleding bij de buren",
        "prompt": "De pakketbezorger heeft uw pakket bij nummer 18 afgegeven. In het pakket zit sportkleding voor uw dochter. Haal het pakket vanavond na het eten op.",
        "questions": [
          "Vraag 1: Bij welk huisnummer ligt het pakket?",
          "Vraag 2: Wat zit er in het pakket?",
          "Vraag 3: Wanneer haalt u het pakket op?"
        ],
        "answer": "Het pakket ligt bij nummer 18. Er zit sportkleding voor uw dochter in. U haalt het pakket vanavond na het eten op."
      },
      {
        "title": "Rookmelder in de gang piept",
        "prompt": "De rookmelder in de gang piept elke minuut. Waarschijnlijk is de batterij bijna leeg. Vervang de batterij vandaag en test daarna of de rookmelder goed werkt.",
        "questions": [
          "Vraag 1: Waar hangt de rookmelder die piept?",
          "Vraag 2: Wat is waarschijnlijk bijna leeg?",
          "Vraag 3: Wat doet u na het vervangen van de batterij?"
        ],
        "answer": "De rookmelder hangt in de gang. De batterij is waarschijnlijk bijna leeg. Na het vervangen test u of de rookmelder goed werkt."
      },
      {
        "title": "Brief over eigen risico lezen",
        "prompt": "Uw zorgverzekeraar stuurt een brief over het eigen risico. In de brief staat welk bedrag nog openstaat. Betaal niet meteen als u de rekening niet herkent.",
        "questions": [
          "Vraag 1: Wie stuurt een brief over het eigen risico?",
          "Vraag 2: Wat staat er in de brief?",
          "Vraag 3: Wanneer betaalt u niet meteen?"
        ],
        "answer": "De zorgverzekeraar stuurt de brief. In de brief staat welk bedrag nog openstaat. U betaalt niet meteen als u de rekening niet herkent."
      },
      {
        "title": "Bibliotheekboek online verlengen",
        "prompt": "Uw bibliotheekboek moet maandag terug zijn. U kunt het boek een keer online verlengen met uw bibliotheekpas. Verlengen kan niet als iemand anders het boek heeft gereserveerd.",
        "questions": [
          "Vraag 1: Wanneer moet het boek terug zijn?",
          "Vraag 2: Waarmee kunt u het boek online verlengen?",
          "Vraag 3: Wanneer lukt verlengen niet?"
        ],
        "answer": "Het boek moet maandag terug zijn. U verlengt online met uw bibliotheekpas. Verlengen lukt niet als iemand anders het boek heeft gereserveerd."
      },
      {
        "title": "Gezinsreis naar Maastricht plannen",
        "prompt": "Voor zaterdag boekt u treinkaartjes naar Maastricht. U stapt in Eindhoven over. Neem snacks en water mee, want de reis duurt langer dan een uur.",
        "questions": [
          "Vraag 1: Naar welke stad boekt u treinkaartjes?",
          "Vraag 2: Waar stapt u over?",
          "Vraag 3: Waarom neemt u snacks en water mee?"
        ],
        "answer": "U boekt treinkaartjes naar Maastricht. U stapt over in Eindhoven. U neemt snacks en water mee omdat de reis langer dan een uur duurt."
      },
      {
        "title": "Gezonde maaltijd voor vrijdag kiezen",
        "prompt": "In het weekmenu staat vrijdag kip met geroosterde groenten. Haal paprika, courgette en aardappelen in huis. Marineer de kip alvast in de ochtend.",
        "questions": [
          "Vraag 1: Welke maaltijd staat vrijdag in het weekmenu?",
          "Vraag 2: Welke groenten haalt u in huis?",
          "Vraag 3: Wanneer marineert u de kip?"
        ],
        "answer": "Vrijdag staat kip met geroosterde groenten in het weekmenu. U haalt paprika, courgette en aardappelen in huis. U marineert de kip in de ochtend."
      },
      {
        "title": "Losse stoeptegel melden in de app",
        "prompt": "Voor uw huis ligt een losse stoeptegel. Maak een melding in de gemeente-app en voeg een foto toe. Zet erbij dat de tegel vlak bij de bushalte ligt.",
        "questions": [
          "Vraag 1: Wat ligt er los voor uw huis?",
          "Vraag 2: Waar maakt u een melding?",
          "Vraag 3: Welke extra informatie zet u erbij?"
        ],
        "answer": "Er ligt een losse stoeptegel. U maakt een melding in de gemeente-app. U zet erbij dat de tegel vlak bij de bushalte ligt."
      },
      {
        "title": "Avondopening van de apotheek",
        "prompt": "De apotheek is woensdagavond tot 20.00 uur open. Neem uw verzekeringspas mee als u het nieuwe medicijn ophaalt. Controleer aan de balie hoe u het medicijn gebruikt.",
        "questions": [
          "Vraag 1: Tot hoe laat is de apotheek woensdag open?",
          "Vraag 2: Welke pas neemt u mee naar de apotheek?",
          "Vraag 3: Wat controleert u aan de balie?"
        ],
        "answer": "De apotheek is tot 20.00 uur open. U neemt uw verzekeringspas mee. U controleert aan de balie hoe u het medicijn gebruikt."
      },
      {
        "title": "Werkplek in het buurtkantoor reserveren",
        "prompt": "Maandag werkt u niet thuis, maar in het buurtkantoor. Reserveer voor 10.00 uur een stille werkplek. Neem uw laptoplader en koptelefoon mee.",
        "questions": [
          "Vraag 1: Waar werkt u maandag?",
          "Vraag 2: Voor hoe laat reserveert u een werkplek?",
          "Vraag 3: Welke twee spullen neemt u mee?"
        ],
        "answer": "U werkt maandag in het buurtkantoor. U reserveert voor 10.00 uur een stille werkplek. U neemt uw laptoplader en koptelefoon mee."
      },
      {
        "title": "Buurtwandeling vanaf het plantsoen",
        "prompt": "De buurtvereniging organiseert zondag een wandeling vanaf het plantsoen. De groep vertrekt om 14.00 uur. Na afloop drinken de deelnemers thee in het dorpshuis.",
        "questions": [
          "Vraag 1: Wie organiseert zondag een wandeling?",
          "Vraag 2: Waar vertrekt de groep?",
          "Vraag 3: Wat doen de deelnemers na afloop?"
        ],
        "answer": "De buurtvereniging organiseert de wandeling. De groep vertrekt vanaf het plantsoen. Na afloop drinken de deelnemers thee in het dorpshuis."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf korte e-mails, notities en berichten voor alledaagse A2-situaties.",
    "meta": [
      "Schriftelijk examen",
      "Berichten en formulieren",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Afspraak voor identiteitskaart vragen",
        "prompt": "Schrijf aan de gemeente. U wilt uw identiteitskaart verlengen en vraagt welke documenten u moet meenemen.",
        "answer": "Beste gemeente,\n\nIk wil mijn identiteitskaart verlengen. Kunt u mij vertellen welke documenten ik moet meenemen naar de afspraak?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over bloeduitslag sturen",
        "prompt": "Schrijf aan de huisartsenpraktijk. U ziet de uitslag nog niet in het portaal en vraagt wanneer die komt.",
        "answer": "Beste medewerker,\n\nIk zie mijn bloeduitslag nog niet in het patientenportaal. Kunt u mij zeggen wanneer de uitslag zichtbaar is?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Helpen bij sportdag aanbieden",
        "prompt": "Schrijf aan de school. U wilt donderdag helpen bij het fruitpunt tijdens de sportdag.",
        "answer": "Beste school,\n\nIk kan donderdag helpen bij het fruitpunt tijdens de sportdag. Hoe laat moet ik aanwezig zijn?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Afhaaltijd boodschappen doorgeven",
        "prompt": "Schrijf aan uw man. Vertel hoe laat de online boodschappen klaarstaan en wat hij moet controleren.",
        "answer": "Hoi,\n\nDe online boodschappen staan vrijdag vanaf 17.30 uur klaar bij de afhaalbalie. Wil je thuis controleren of het brood en de yoghurt erbij zitten?\n\nGroetjes,\nVioletta"
      },
      {
        "title": "OV-fiets herinnering maken",
        "prompt": "Schrijf een korte notitie voor uzelf. U moet de OV-fiets maandag voor 20.00 uur terugbrengen.",
        "answer": "Maandag reserveer ik een OV-fiets in Eindhoven. Ik breng de fiets dezelfde dag voor 20.00 uur terug bij het station."
      },
      {
        "title": "Btw-bon naar boekhouder mailen",
        "prompt": "Schrijf aan uw boekhouder. U heeft een microfoon gekocht en stuurt de btw-bon mee.",
        "answer": "Beste boekhouder,\n\nIk heb een microfoon gekocht voor online meetings. Ik stuur de btw-bon mee voor mijn administratie van deze maand.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Fietstocht afzeggen bij wind",
        "prompt": "Schrijf aan een vriendin. Vertel dat de fietstocht niet doorgaat als het hard waait.",
        "answer": "Hoi,\n\nDe fietsclub vertrekt zondag om 09.15 uur. Als het hard waait, gaat de tocht niet door. Ik laat je zondag vroeg iets weten.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Controle bij tandarts later plannen",
        "prompt": "Schrijf aan de tandarts. U kunt woensdag om 09.00 uur niet komen en vraagt om een afspraak in de middag.",
        "answer": "Beste tandarts,\n\nIk kan woensdag om 09.00 uur niet komen, omdat ik een werkafspraak heb. Heeft u in de middag nog een plek?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Buur bedanken voor pakket",
        "prompt": "Schrijf aan de buurman van nummer 18. Bedank hem en zeg wanneer u het pakket ophaalt.",
        "answer": "Beste buurman,\n\nBedankt dat u mijn pakket heeft aangenomen. Ik kom het vanavond na het eten bij u ophalen.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Rookmelderactie voor thuis",
        "prompt": "Schrijf een bericht aan uw gezin. Vertel dat u de batterij van de rookmelder vervangt.",
        "answer": "Hoi allemaal,\n\nDe rookmelder in de gang piept. Ik vervang vandaag de batterij en test daarna of hij goed werkt.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Eigen risico navragen",
        "prompt": "Schrijf aan de zorgverzekeraar. U herkent een rekening niet en vraagt om uitleg.",
        "answer": "Beste medewerker,\n\nIk heb een brief gekregen over mijn eigen risico, maar ik herken de rekening niet. Kunt u uitleggen waarvoor het bedrag is?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Bibliotheekboek verlengen",
        "prompt": "Schrijf aan de bibliotheek. Vraag of u uw boek nog een keer kunt verlengen.",
        "answer": "Beste bibliotheek,\n\nMijn boek moet maandag terug zijn. Kan ik het boek nog een keer online verlengen met mijn bibliotheekpas?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Reisplan naar Maastricht sturen",
        "prompt": "Schrijf aan uw gezin. Vertel dat jullie zaterdag naar Maastricht reizen en in Eindhoven overstappen.",
        "answer": "Hoi allemaal,\n\nZaterdag reizen we met de trein naar Maastricht. We stappen in Eindhoven over. Neem water en een snack mee voor onderweg.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Weekmenu noteren",
        "prompt": "Schrijf een korte planning voor vrijdag. U maakt kip met geroosterde groenten.",
        "answer": "Vrijdag maak ik kip met geroosterde groenten. Ik koop paprika, courgette en aardappelen en marineer de kip in de ochtend."
      },
      {
        "title": "Stoeptegel melden",
        "prompt": "Schrijf een korte melding aan de gemeente. Voor uw huis ligt een losse stoeptegel bij de bushalte.",
        "answer": "Beste gemeente,\n\nVoor mijn huis ligt een losse stoeptegel vlak bij de bushalte. Ik stuur een foto mee. Kunt u dit controleren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Medicijn ophalen plannen",
        "prompt": "Schrijf een korte notitie voor uzelf. U haalt woensdagavond een nieuw medicijn op bij de apotheek.",
        "answer": "Woensdagavond haal ik het nieuwe medicijn op bij de apotheek. Ik neem mijn verzekeringspas mee en vraag hoe ik het medicijn moet gebruiken."
      },
      {
        "title": "Stille plek in buurtkantoor vragen",
        "prompt": "Schrijf aan het buurtkantoor. Vraag om maandag voor 10.00 uur een stille werkplek te reserveren.",
        "answer": "Beste medewerker,\n\nKan ik maandag voor 10.00 uur een stille werkplek reserveren? Ik werk die dag graag in het buurtkantoor.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Meedoen aan buurtwandeling",
        "prompt": "Schrijf aan een buurvrouw. Vraag of zij zondag meegaat met de buurtwandeling vanaf het plantsoen.",
        "answer": "Hoi,\n\nGa je zondag mee met de buurtwandeling vanaf het plantsoen? De groep vertrekt om 14.00 uur.\n\nGroetjes,\nVioletta"
      }
    ]
  },
  {
    "id": "speaking",
    "number": "03",
    "category": "Examen",
    "title": "Spreken",
    "goal": "Oefen korte antwoorden, telefoonzinnen en beeldopdrachten voor A2-spreken.",
    "meta": [
      "Mondeling examen",
      "Korte antwoorden",
      "Met spreekafbeeldingen"
    ],
    "exercises": [
      {
        "title": "AI-examinator voor nieuwe regelzaken",
        "prompt": "Open een spraaktool en vraag om twaalf korte A2-vragen over identiteitskaart, bloeduitslag, sportdag, afhaalboodschappen, OV-fiets, btw-bon, tandarts, pakket, rookmelder, eigen risico, bibliotheek en buurtwandeling.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel twaalf korte vragen over een identiteitskaart verlengen, bloeduitslag bekijken, sportdag op school, boodschappen ophalen, OV-fiets gebruiken, een btw-bon bewaren, tandarts verplaatsen, pakket ophalen, rookmelder testen, eigen risico vragen, boek verlengen en buurtwandeling. Wacht na elke vraag op mijn antwoord."
      },
      {
        "title": "Voorstellen met leeftijd en woonplaats",
        "prompt": "Vertel uw naam, leeftijd, woonplaats en met wie u woont.",
        "answer": "Hallo, ik ben Violetta Bonenkamp. Ik ben 44 jaar en ik woon in Sterksel met mijn man en twee dochters."
      },
      {
        "title": "Thuiswerken met technologie",
        "prompt": "Vertel kort wat u thuis doet voor uw startup en welke techniek u gebruikt.",
        "answer": "Ik werk thuis aan mijn startup. Ik gebruik AI, schrijf artikelen en heb online meetings met klanten."
      },
      {
        "title": "Gemeente bellen over identiteitskaart",
        "prompt": "Bel de gemeente en vraag hoe u een afspraak maakt voor een nieuwe identiteitskaart.",
        "answer": "Goedemorgen, ik wil mijn identiteitskaart verlengen. Hoe kan ik daarvoor een afspraak maken?"
      },
      {
        "title": "Huisarts vragen naar uitslag",
        "prompt": "Bel de huisartsenpraktijk en vraag wanneer uw bloeduitslag in het portaal staat.",
        "answer": "Goedemorgen, ik zie mijn bloeduitslag nog niet in het portaal. Wanneer kan ik de uitslag bekijken?"
      },
      {
        "title": "School vragen over sportdag",
        "prompt": "Vraag aan de school hoe laat u kunt helpen bij het fruitpunt.",
        "answer": "Goedemiddag, ik wil donderdag helpen bij het fruitpunt. Hoe laat moet ik op school zijn?"
      },
      {
        "title": "Supermarkt vragen over afhalen",
        "prompt": "Vraag bij de supermarkt waar de afhaalbalie voor online boodschappen is.",
        "answer": "Pardon, waar is de afhaalbalie voor online boodschappen?"
      },
      {
        "title": "OV-fiets ophalen",
        "prompt": "Vraag op het station waar u uw gereserveerde OV-fiets kunt ophalen.",
        "answer": "Goedemorgen, ik heb een OV-fiets gereserveerd. Waar kan ik de fiets ophalen?"
      },
      {
        "title": "Btw-bon uitleggen",
        "prompt": "Vertel aan uw boekhouder waarom u een btw-bon bewaart.",
        "answer": "Ik bewaar de btw-bon omdat de microfoon voor mijn bedrijf is. De bon hoort bij mijn administratie."
      },
      {
        "title": "Fietstocht met veiligheid",
        "prompt": "Vertel aan een vriendin wat zij moet meenemen voor de fietstocht.",
        "answer": "Neem een helm, water en een regenjas mee. Bij harde wind gaat de fietstocht niet door."
      },
      {
        "title": "Tandarts om middagafspraak vragen",
        "prompt": "Zeg tegen de tandarts dat u woensdag in de ochtend niet kunt komen.",
        "answer": "Goedemiddag, ik kan woensdag om negen uur niet komen. Heeft u een afspraak in de middag?"
      },
      {
        "title": "Pakket bij buur ophalen",
        "prompt": "Vraag aan de buurman of u uw pakket vanavond kunt ophalen.",
        "answer": "Goedenavond, ik hoorde dat mijn pakket bij u ligt. Kan ik het nu ophalen?"
      },
      {
        "title": "Piepende melder thuis uitleggen",
        "prompt": "Vertel aan uw man wat er mis is met de rookmelder.",
        "answer": "De rookmelder in de gang piept elke minuut. Ik denk dat de batterij bijna leeg is."
      },
      {
        "title": "Eigen risico vragen",
        "prompt": "Vraag aan de zorgverzekeraar waarom u een bedrag moet betalen.",
        "answer": "Goedemiddag, ik heb een brief over mijn eigen risico gekregen. Kunt u uitleggen waarvoor dit bedrag is?"
      },
      {
        "title": "Boek verlengen bij bibliotheek",
        "prompt": "Vraag in de bibliotheek of u een boek online kunt verlengen.",
        "answer": "Goedemiddag, kan ik mijn boek online verlengen met mijn bibliotheekpas?"
      },
      {
        "title": "Treindag met gezin vertellen",
        "prompt": "Vertel uw dochters hoe jullie zaterdag naar Maastricht reizen.",
        "answer": "Zaterdag reizen we met de trein naar Maastricht. We stappen over in Eindhoven en nemen water mee."
      },
      {
        "title": "Gezonde maaltijd beschrijven",
        "prompt": "Vertel wat u vrijdag kookt en welke groenten u gebruikt.",
        "answer": "Vrijdag kook ik kip met geroosterde groenten. Ik gebruik paprika, courgette en aardappelen."
      },
      {
        "title": "Stoeptegel doorgeven",
        "prompt": "Bel de gemeente en meld een losse stoeptegel bij de bushalte.",
        "answer": "Goedemorgen, voor mijn huis ligt een losse stoeptegel bij de bushalte. Kunt u iemand sturen?"
      },
      {
        "title": "Apotheek om uitleg vragen",
        "prompt": "Vraag bij de apotheek hoe u het nieuwe medicijn moet gebruiken.",
        "answer": "Goedemiddag, kunt u uitleggen hoe ik dit nieuwe medicijn moet gebruiken?"
      },
      {
        "title": "Werkplek in buurtkantoor regelen",
        "prompt": "Vraag aan het buurtkantoor of er maandag een stille werkplek vrij is.",
        "answer": "Goedemorgen, is er maandag een stille werkplek vrij? Ik wil graag voor tien uur beginnen."
      },
      {
        "title": "Afbeelding afspraak bij gemeente",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u bij de gemeente bent.",
        "answer": "Ik ben bij de gemeente omdat mijn identiteitskaart bijna verloopt. Ik heb een pasfoto en mijn oude kaart meegenomen.",
        "image": "images/speaking/v016-speaking-municipality-id-card-azure15.png",
        "imagePrompt": "Realistic Dutch municipality service desk in North Brabant, a woman preparing documents for an identity card renewal, pasfoto style photo and old card shape on desk, no readable text, no logos, clear A2 speaking-card composition."
      },
      {
        "title": "Afbeelding uitslag in zorgportaal",
        "prompt": "Kijk naar de afbeelding. Vertel wat u online controleert.",
        "answer": "Ik controleer mijn bloeduitslag in het patientenportaal. Als ik vragen heb, bel ik de huisartsenpraktijk.",
        "image": "images/speaking/v016-speaking-health-blood-result-portal-azure15.png",
        "imagePrompt": "Realistic Dutch home office desk with laptop showing a generic health portal without readable text, phone nearby, calm daylight, blood test result context, no logos, no watermark."
      },
      {
        "title": "Afbeelding sportdag op school",
        "prompt": "Kijk naar de afbeelding. Vertel hoe u helpt op school.",
        "answer": "Ik help bij het fruitpunt tijdens de sportdag. De kinderen nemen water, lunch en sportkleding mee.",
        "image": "images/speaking/v016-speaking-school-sports-day-fruit-azure15.png",
        "imagePrompt": "Realistic Dutch primary school sports day on an outdoor field, parent volunteer at a fruit table with water bottles, children in sports clothes in background, no readable text, no logos."
      },
      {
        "title": "Afbeelding online boodschappen ophalen",
        "prompt": "Kijk naar de afbeelding. Vertel wat u bij de supermarkt doet.",
        "answer": "Ik haal online boodschappen op bij de afhaalbalie. Thuis controleer ik of alles in de tas zit.",
        "image": "images/speaking/v016-speaking-supermarket-online-pickup-azure15.png",
        "imagePrompt": "Realistic Dutch supermarket pickup counter for online groceries, reusable bags with bread and yogurt visible, adult customer collecting order, no readable text, no brand logos, practical speaking-card image."
      },
      {
        "title": "Afbeelding OV-fiets bij station",
        "prompt": "Kijk naar de afbeelding. Vertel hoe u vanaf het station verder gaat.",
        "answer": "Ik haal een gereserveerde OV-fiets op bij het station. Ik breng de fiets voor acht uur terug.",
        "image": "images/speaking/v016-speaking-transport-ov-fiets-station-azure15.png",
        "imagePrompt": "Realistic Dutch train station bicycle rental area with rental bikes implied but no logos or readable text, passenger unlocking a bicycle with phone, daylight, A2 speaking-card framing."
      },
      {
        "title": "Afbeelding rookmelder controleren",
        "prompt": "Kijk naar de afbeelding. Vertel wat u thuis moet doen.",
        "answer": "De rookmelder piept in de gang. Ik vervang de batterij en test daarna of hij werkt.",
        "image": "images/speaking/v016-speaking-housing-smoke-detector-battery-azure15.png",
        "imagePrompt": "Realistic hallway in a Dutch home, smoke detector on ceiling, adult replacing a battery safely from a small step stool, no readable text, no logos, bright practical home scene."
      },
      {
        "title": "Buurtwandeling uitnodigen",
        "prompt": "Vraag aan een buurvrouw of zij zondag meegaat wandelen.",
        "answer": "Hoi, ga je zondag mee met de buurtwandeling? We vertrekken om twee uur vanaf het plantsoen."
      },
      {
        "title": "Mening over Nederlands oefenen",
        "prompt": "Vertel waarom u elke dag een beetje Nederlands wilt oefenen.",
        "answer": "Ik wil elke dag Nederlands oefenen omdat ik mij zekerder wil voelen bij afspraken, op school en in de buurt."
      }
    ]
  },
  {
    "id": "listening",
    "number": "04",
    "category": "Examen",
    "title": "Luisteren",
    "goal": "Luister naar korte berichten met een tijd, plaats, actie en reden.",
    "meta": [
      "Audio",
      "16 MP3-oefeningen",
      "Praktische berichten"
    ],
    "exercises": [
      {
        "title": "AI-luistercoach voor tijd en spullen",
        "prompt": "Open een spraaktool en vraag om een langzaam A2-luisterbericht over een afspraak, een tijd, een plaats en wat u moet meenemen.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor over een afspraak met tijd, plaats en spullen die ik moet meenemen. Stel daarna drie vragen."
      },
      {
        "title": "Gemeenteafspraak voor kaart",
        "audio": "audio/v016-listening-01-gemeente-idkaart-afspraak.mp3",
        "transcript": "Mevrouw Bonenkamp, uw afspraak voor de identiteitskaart is donderdag om kwart over tien bij de gemeente. Neem een pasfoto, uw oude kaart en uw pinpas mee.",
        "prompt": "Transcript: Mevrouw Bonenkamp, uw afspraak voor de identiteitskaart is donderdag om kwart over tien bij de gemeente. Neem een pasfoto, uw oude kaart en uw pinpas mee.",
        "questions": [
          "Vraag 1: Waarvoor is de afspraak?",
          "Vraag 2: Hoe laat is de afspraak bij de gemeente?",
          "Vraag 3: Welke betaalpas neemt mevrouw mee?"
        ],
        "answer": "De afspraak is voor de identiteitskaart. De afspraak is om kwart over tien. Zij neemt haar pinpas mee."
      },
      {
        "title": "Uitslag vrijdag online",
        "audio": "audio/v016-listening-02-huisarts-bloeduitslag-portaal.mp3",
        "transcript": "De uitslag van uw bloedonderzoek staat vrijdag na tien uur in het patientenportaal. Bel de praktijk tussen een en twee uur als u vragen heeft.",
        "prompt": "Transcript: De uitslag van uw bloedonderzoek staat vrijdag na tien uur in het patientenportaal. Bel de praktijk tussen een en twee uur als u vragen heeft.",
        "questions": [
          "Vraag 1: Welke uitslag staat online?",
          "Vraag 2: Wanneer staat de uitslag in het portaal?",
          "Vraag 3: Wanneer kan mevrouw de praktijk bellen?"
        ],
        "answer": "De bloeduitslag staat online. Die staat vrijdag na tien uur in het portaal. Zij kan tussen een en twee uur bellen."
      },
      {
        "title": "Fruitpunt bij sportdag",
        "audio": "audio/v016-listening-03-school-sportdag-fruitpunt.mp3",
        "transcript": "Donderdag is de sportdag op school. Ouders die helpen bij het fruitpunt melden zich om half negen bij de gymzaal.",
        "prompt": "Transcript: Donderdag is de sportdag op school. Ouders die helpen bij het fruitpunt melden zich om half negen bij de gymzaal.",
        "questions": [
          "Vraag 1: Wat is er donderdag op school?",
          "Vraag 2: Waar helpen sommige ouders?",
          "Vraag 3: Waar melden de ouders zich?"
        ],
        "answer": "Donderdag is de sportdag. Ouders helpen bij het fruitpunt. Zij melden zich bij de gymzaal."
      },
      {
        "title": "Afhaalbalie vanaf half zes",
        "audio": "audio/v016-listening-04-supermarkt-afhaalbalie-brood.mp3",
        "transcript": "Uw online boodschappen staan vanaf half zes klaar bij de afhaalbalie. Controleer thuis meteen of het brood en de yoghurt in de tas zitten.",
        "prompt": "Transcript: Uw online boodschappen staan vanaf half zes klaar bij de afhaalbalie. Controleer thuis meteen of het brood en de yoghurt in de tas zitten.",
        "questions": [
          "Vraag 1: Waar staan de boodschappen klaar?",
          "Vraag 2: Vanaf hoe laat kan mevrouw ze ophalen?",
          "Vraag 3: Welke producten controleert zij thuis?"
        ],
        "answer": "De boodschappen staan klaar bij de afhaalbalie. Zij kan ze vanaf half zes ophalen. Zij controleert brood en yoghurt."
      },
      {
        "title": "OV-fiets terugbrengen",
        "audio": "audio/v016-listening-05-station-ovfiets-terugbrengen.mp3",
        "transcript": "Uw OV-fiets staat klaar bij station Eindhoven. Breng de fiets vandaag voor acht uur terug en sluit hem goed af.",
        "prompt": "Transcript: Uw OV-fiets staat klaar bij station Eindhoven. Breng de fiets vandaag voor acht uur terug en sluit hem goed af.",
        "questions": [
          "Vraag 1: Waar staat de OV-fiets klaar?",
          "Vraag 2: Wanneer brengt mevrouw de fiets terug?",
          "Vraag 3: Wat doet zij met de fiets bij terugkomst?"
        ],
        "answer": "De fiets staat klaar bij station Eindhoven. Zij brengt de fiets voor acht uur terug. Zij sluit de fiets goed af."
      },
      {
        "title": "Bon voor administratie",
        "audio": "audio/v016-listening-06-werk-btwbon-bewaren.mp3",
        "transcript": "Bewaar de btw-bon van de microfoon digitaal. De bon hoort bij de zakelijke administratie van deze maand.",
        "prompt": "Transcript: Bewaar de btw-bon van de microfoon digitaal. De bon hoort bij de zakelijke administratie van deze maand.",
        "questions": [
          "Vraag 1: Welke bon moet mevrouw bewaren?",
          "Vraag 2: Van welk product is de bon?",
          "Vraag 3: Bij welke administratie hoort de bon?"
        ],
        "answer": "Zij bewaart de btw-bon. De bon is van de microfoon. De bon hoort bij de zakelijke administratie."
      },
      {
        "title": "Fietsclub bij slecht weer",
        "audio": "audio/v016-listening-07-fietsclub-helm-regenjas.mp3",
        "transcript": "De fietsclub vertrekt zondag om kwart over negen. Draag een helm en neem een regenjas mee. Bij harde wind blijft iedereen thuis.",
        "prompt": "Transcript: De fietsclub vertrekt zondag om kwart over negen. Draag een helm en neem een regenjas mee. Bij harde wind blijft iedereen thuis.",
        "questions": [
          "Vraag 1: Hoe laat vertrekt de fietsclub?",
          "Vraag 2: Wat draagt mevrouw tijdens het fietsen?",
          "Vraag 3: Wanneer blijft iedereen thuis?"
        ],
        "answer": "De fietsclub vertrekt om kwart over negen. Zij draagt een helm. Bij harde wind blijft iedereen thuis."
      },
      {
        "title": "Tandarts naar later",
        "audio": "audio/v016-listening-08-tandarts-controle-verplaatsen.mp3",
        "transcript": "Uw tandartscontrole kan woensdag niet om negen uur. Bel ons voor dinsdag, dan zoeken we een tijd in de middag.",
        "prompt": "Transcript: Uw tandartscontrole kan woensdag niet om negen uur. Bel ons voor dinsdag, dan zoeken we een tijd in de middag.",
        "questions": [
          "Vraag 1: Welke afspraak kan niet om negen uur?",
          "Vraag 2: Voor welke dag belt mevrouw?",
          "Vraag 3: Welke nieuwe tijd zoekt de praktijk?"
        ],
        "answer": "De tandartscontrole kan niet om negen uur. Zij belt voor dinsdag. De praktijk zoekt een tijd in de middag."
      },
      {
        "title": "Pakket bij nummer achttien",
        "audio": "audio/v016-listening-09-buren-pakket-ophalen.mp3",
        "transcript": "Uw pakket met sportkleding ligt bij de buren op nummer achttien. U kunt het vanavond na het eten ophalen.",
        "prompt": "Transcript: Uw pakket met sportkleding ligt bij de buren op nummer achttien. U kunt het vanavond na het eten ophalen.",
        "questions": [
          "Vraag 1: Waar ligt het pakket?",
          "Vraag 2: Wat zit er in het pakket?",
          "Vraag 3: Op welk moment haalt mevrouw het pakket bij de buren op?"
        ],
        "answer": "Het pakket ligt bij nummer achttien. Er zit sportkleding in. Zij kan het vanavond na het eten ophalen."
      },
      {
        "title": "Batterij van rookmelder",
        "audio": "audio/v016-listening-10-woning-rookmelder-batterij.mp3",
        "transcript": "De rookmelder in de gang piept omdat de batterij bijna leeg is. Vervang de batterij vandaag en test de rookmelder daarna.",
        "prompt": "Transcript: De rookmelder in de gang piept omdat de batterij bijna leeg is. Vervang de batterij vandaag en test de rookmelder daarna.",
        "questions": [
          "Vraag 1: Waar piept de rookmelder?",
          "Vraag 2: Waarom piept de rookmelder waarschijnlijk?",
          "Vraag 3: Wat doet mevrouw na het vervangen?"
        ],
        "answer": "De rookmelder piept in de gang. De batterij is bijna leeg. Zij test de rookmelder daarna."
      },
      {
        "title": "Vraag over eigen risico",
        "audio": "audio/v016-listening-11-zorgverzekering-eigen-risico.mp3",
        "transcript": "U heeft een brief over uw eigen risico ontvangen. Herkent u de rekening niet? Bel dan eerst de klantenservice voordat u betaalt.",
        "prompt": "Transcript: U heeft een brief over uw eigen risico ontvangen. Herkent u de rekening niet? Bel dan eerst de klantenservice voordat u betaalt.",
        "questions": [
          "Vraag 1: Waarover gaat de brief?",
          "Vraag 2: Wanneer belt mevrouw eerst de klantenservice?",
          "Vraag 3: Wat doet zij niet meteen?"
        ],
        "answer": "De brief gaat over het eigen risico. Zij belt als zij de rekening niet herkent. Zij betaalt niet meteen."
      },
      {
        "title": "Boek verlengen met pas",
        "audio": "audio/v016-listening-12-bibliotheek-boek-verlengen.mp3",
        "transcript": "Uw bibliotheekboek moet maandag terug. U kunt het een keer online verlengen met uw bibliotheekpas, behalve als het boek gereserveerd is.",
        "prompt": "Transcript: Uw bibliotheekboek moet maandag terug. U kunt het een keer online verlengen met uw bibliotheekpas, behalve als het boek gereserveerd is.",
        "questions": [
          "Vraag 1: Wanneer moet het boek terug?",
          "Vraag 2: Waarmee verlengt mevrouw het boek?",
          "Vraag 3: Wanneer kan verlengen niet?"
        ],
        "answer": "Het boek moet maandag terug. Zij verlengt met haar bibliotheekpas. Verlengen kan niet als het boek gereserveerd is."
      },
      {
        "title": "Overstap naar Maastricht",
        "audio": "audio/v016-listening-13-trein-maastricht-overstap.mp3",
        "transcript": "Voor de reis naar Maastricht stapt u zaterdag in Eindhoven over. Neem water mee, want de treinreis duurt langer dan een uur.",
        "prompt": "Transcript: Voor de reis naar Maastricht stapt u zaterdag in Eindhoven over. Neem water mee, want de treinreis duurt langer dan een uur.",
        "questions": [
          "Vraag 1: Naar welke stad reist mevrouw?",
          "Vraag 2: Waar stapt zij over?",
          "Vraag 3: Waarom neemt zij water mee?"
        ],
        "answer": "Zij reist naar Maastricht. Zij stapt over in Eindhoven. Zij neemt water mee omdat de reis langer dan een uur duurt."
      },
      {
        "title": "Groenten en kip voorbereiden",
        "audio": "audio/v016-listening-14-kookworkshop-groenten-vlees.mp3",
        "transcript": "Voor het avondeten marineert u de kip in de ochtend. Snijd vrijdag ook paprika, courgette en aardappelen voor de oven.",
        "prompt": "Transcript: Voor het avondeten marineert u de kip in de ochtend. Snijd vrijdag ook paprika, courgette en aardappelen voor de oven.",
        "questions": [
          "Vraag 1: Wat marineert mevrouw in de ochtend?",
          "Vraag 2: Welke groenten snijdt zij?",
          "Vraag 3: Waar gaan de groenten in?"
        ],
        "answer": "Zij marineert de kip. Zij snijdt paprika, courgette en aardappelen. De groenten gaan in de oven."
      },
      {
        "title": "Apotheek tot acht uur",
        "audio": "audio/v016-listening-15-apotheek-avondopening.mp3",
        "transcript": "De apotheek is woensdag tot acht uur open. Neem uw verzekeringspas mee en vraag aan de balie hoe u het medicijn gebruikt.",
        "prompt": "Transcript: De apotheek is woensdag tot acht uur open. Neem uw verzekeringspas mee en vraag aan de balie hoe u het medicijn gebruikt.",
        "questions": [
          "Vraag 1: Tot hoe laat is de apotheek open?",
          "Vraag 2: Welke pas neemt mevrouw mee?",
          "Vraag 3: Wat vraagt zij aan de balie?"
        ],
        "answer": "De apotheek is tot acht uur open. Zij neemt haar verzekeringspas mee. Zij vraagt hoe zij het medicijn gebruikt."
      },
      {
        "title": "Wandeling bij plantsoen",
        "audio": "audio/v016-listening-16-buurtwandeling-startpunt.mp3",
        "transcript": "De buurtwandeling begint zondag om twee uur bij het plantsoen. Na afloop drinken de deelnemers thee in het dorpshuis.",
        "prompt": "Transcript: De buurtwandeling begint zondag om twee uur bij het plantsoen. Na afloop drinken de deelnemers thee in het dorpshuis.",
        "questions": [
          "Vraag 1: Wanneer begint de buurtwandeling?",
          "Vraag 2: Waar begint de wandeling?",
          "Vraag 3: Wat drinken de deelnemers na afloop?"
        ],
        "answer": "De wandeling begint zondag om twee uur. De wandeling begint bij het plantsoen. De deelnemers drinken thee."
      }
    ]
  },
  {
    "id": "knm",
    "number": "05",
    "category": "Examen",
    "title": "KNM",
    "goal": "Oefen kennisvragen over wonen, zorg, werk, school, vervoer, veiligheid en samenleving.",
    "meta": [
      "Kennisexamens",
      "28 vragen",
      "A/B/C verdeeld"
    ],
    "exercises": [
      {
        "title": "Geldige identiteitskaart",
        "prompt": "Vraag: Waarom verlengt u een identiteitskaart voordat die verloopt?",
        "options": [
          "A. Dan hoeft u nooit meer belasting te betalen.",
          "B. Dan mag u alle afspraken vergeten.",
          "C. Dan heeft u een geldig bewijs van wie u bent."
        ],
        "answer": "C. Dan heeft u een geldig bewijs van wie u bent."
      },
      {
        "title": "Zorgportaal gebruiken",
        "prompt": "Vraag: Wat doet u als u een medische uitslag niet begrijpt?",
        "options": [
          "A. U neemt contact op met de huisartsenpraktijk.",
          "B. U verandert zelf de uitslag in het portaal.",
          "C. U stuurt uw DigiD naar een onbekende."
        ],
        "answer": "A. U neemt contact op met de huisartsenpraktijk."
      },
      {
        "title": "Ouders helpen op school",
        "prompt": "Vraag: Wat past bij betrokken zijn bij de school van uw kind?",
        "options": [
          "A. Nooit reageren op berichten van school.",
          "B. Overleggen met school en soms helpen bij activiteiten.",
          "C. Andere kinderen thuis beoordelen."
        ],
        "answer": "B. Overleggen met school en soms helpen bij activiteiten."
      },
      {
        "title": "Product ontbreekt bij bestelling",
        "prompt": "Vraag: Wat doet u normaal als een product uit uw supermarktbestelling ontbreekt?",
        "options": [
          "A. De tas van een andere klant meenemen.",
          "B. Niets zeggen en de rekening weggooien.",
          "C. De supermarkt op tijd informeren."
        ],
        "answer": "C. De supermarkt op tijd informeren."
      },
      {
        "title": "Fiets huren bij station",
        "prompt": "Vraag: Wat hoort bij het gebruiken van een gehuurde fiets?",
        "options": [
          "A. De fiets op tijd en goed afgesloten terugbrengen.",
          "B. De fiets thuis houden zonder te betalen.",
          "C. Het slot kapotmaken als u haast heeft."
        ],
        "answer": "A. De fiets op tijd en goed afgesloten terugbrengen."
      },
      {
        "title": "Zakelijke administratie",
        "prompt": "Vraag: Waarom bewaart een ondernemer zakelijke bonnetjes?",
        "options": [
          "A. Om privepost van buren te lezen.",
          "B. Voor een duidelijke administratie en belastingaangifte.",
          "C. Omdat bonnetjes altijd gratis geld zijn."
        ],
        "answer": "B. Voor een duidelijke administratie en belastingaangifte."
      },
      {
        "title": "Helm bij fietstocht",
        "prompt": "Vraag: Waarom draagt iemand een helm bij een fietstocht?",
        "options": [
          "A. Voor extra veiligheid bij een ongeluk.",
          "B. Omdat fietsen dan zonder regels mag.",
          "C. Om geen kaartje voor de trein te kopen."
        ],
        "answer": "A. Voor extra veiligheid bij een ongeluk."
      },
      {
        "title": "Niet kunnen komen",
        "prompt": "Vraag: Wat is netjes als u niet naar de tandarts kunt komen?",
        "options": [
          "A. Wegblijven en later niets uitleggen.",
          "B. Iemand anders zonder overleg sturen.",
          "C. Op tijd bellen om de afspraak te verzetten."
        ],
        "answer": "C. Op tijd bellen om de afspraak te verzetten."
      },
      {
        "title": "Bezorgen bij nummer achttien",
        "prompt": "Vraag: Wat is verstandig als uw pakket bij buren ligt?",
        "options": [
          "A. De deur forceren als niemand thuis is.",
          "B. Het pakket beleefd ophalen en bedanken.",
          "C. De post van alle buren openen."
        ],
        "answer": "B. Het pakket beleefd ophalen en bedanken."
      },
      {
        "title": "Rookmelder in huis",
        "prompt": "Vraag: Waarom test u een rookmelder na het vervangen van de batterij?",
        "options": [
          "A. Om te controleren of de rookmelder werkt.",
          "B. Om de huur automatisch te verlagen.",
          "C. Om de bibliotheekpas te activeren."
        ],
        "answer": "A. Om te controleren of de rookmelder werkt."
      },
      {
        "title": "Eigen risico controleren",
        "prompt": "Vraag: Wat doet u als u een zorgrekening niet herkent?",
        "options": [
          "A. Meteen contant betalen aan een onbekende.",
          "B. De rekening op straat leggen.",
          "C. Eerst uitleg vragen bij de zorgverzekeraar."
        ],
        "answer": "C. Eerst uitleg vragen bij de zorgverzekeraar."
      },
      {
        "title": "Bibliotheekregels",
        "prompt": "Vraag: Wat gebeurt er vaak als u een boek te laat terugbrengt?",
        "options": [
          "A. U krijgt automatisch een nieuw paspoort.",
          "B. U kunt een boete of kosten krijgen.",
          "C. De tandarts belt de school."
        ],
        "answer": "B. U kunt een boete of kosten krijgen."
      },
      {
        "title": "Overstappen met trein",
        "prompt": "Vraag: Wat helpt bij reizen met openbaar vervoer?",
        "options": [
          "A. Voor vertrek de route en overstap controleren.",
          "B. Altijd zonder kaartje instappen.",
          "C. De conducteur negeren bij controle."
        ],
        "answer": "A. Voor vertrek de route en overstap controleren."
      },
      {
        "title": "Gezonde voeding",
        "prompt": "Vraag: Welke keuze past bij gezond eten?",
        "options": [
          "A. Alleen frisdrank drinken als ontbijt.",
          "B. Groenten gebruiken bij de warme maaltijd.",
          "C. Nooit water meenemen onderweg."
        ],
        "answer": "B. Groenten gebruiken bij de warme maaltijd."
      },
      {
        "title": "Melding openbare ruimte",
        "prompt": "Vraag: Waarom meldt u een losse stoeptegel bij de gemeente?",
        "options": [
          "A. Omdat de gemeente uw boodschappen betaalt.",
          "B. Omdat de huisarts de tegel moet repareren.",
          "C. Omdat de gemeente de openbare ruimte veilig kan maken."
        ],
        "answer": "C. Omdat de gemeente de openbare ruimte veilig kan maken."
      },
      {
        "title": "Medicijn uitleg",
        "prompt": "Vraag: Wat doet u als u niet weet hoe u een medicijn gebruikt?",
        "options": [
          "A. U vraagt uitleg aan apotheek of huisarts.",
          "B. U neemt alle tabletten tegelijk.",
          "C. U geeft het medicijn aan de buren."
        ],
        "answer": "A. U vraagt uitleg aan apotheek of huisarts."
      },
      {
        "title": "Stille werkplek",
        "prompt": "Vraag: Wat past bij werken in een gedeelde werkruimte?",
        "options": [
          "A. Hard telefoneren naast iedereen.",
          "B. Rekening houden met anderen en afspraken volgen.",
          "C. Alle spullen van anderen gebruiken."
        ],
        "answer": "B. Rekening houden met anderen en afspraken volgen."
      },
      {
        "title": "Buurtactiviteit",
        "prompt": "Vraag: Wat kan een buurtwandeling doen voor nieuwe inwoners?",
        "options": [
          "A. Zorgen dat niemand meer Nederlands spreekt.",
          "B. Alle gemeenteregels vervangen.",
          "C. Helpen om buren te leren kennen."
        ],
        "answer": "C. Helpen om buren te leren kennen."
      },
      {
        "title": "Privacy online",
        "prompt": "Vraag: Wat doet u met persoonlijke inloggegevens?",
        "options": [
          "A. U houdt ze geheim en deelt ze niet zomaar.",
          "B. U schrijft ze op een openbaar prikbord.",
          "C. U stuurt ze naar elke webwinkel."
        ],
        "answer": "A. U houdt ze geheim en deelt ze niet zomaar."
      },
      {
        "title": "Ziek kind op schooldag",
        "prompt": "Vraag: Wat doet een ouder meestal als een kind ziek is en niet naar school kan?",
        "options": [
          "A. Het kind zonder bericht laten wegblijven.",
          "B. Een pakket bij de buren halen.",
          "C. De school volgens de regels informeren."
        ],
        "answer": "C. De school volgens de regels informeren."
      },
      {
        "title": "Lokale democratie",
        "prompt": "Vraag: Waarover beslist een gemeenteraad onder andere?",
        "options": [
          "A. Welke pincode inwoners gebruiken.",
          "B. Lokale onderwerpen zoals verkeer, afval en voorzieningen.",
          "C. Welke boeken iedereen thuis moet lezen."
        ],
        "answer": "B. Lokale onderwerpen zoals verkeer, afval en voorzieningen."
      },
      {
        "title": "Ervaring opdoen in buurt",
        "prompt": "Vraag: Wat kan vrijwilligerswerk opleveren?",
        "options": [
          "A. Contact met mensen en ervaring in de samenleving.",
          "B. Een verplicht gratis rijbewijs.",
          "C. Recht om regels te negeren."
        ],
        "answer": "A. Contact met mensen en ervaring in de samenleving."
      },
      {
        "title": "Brandveiligheid",
        "prompt": "Vraag: Wat hoort bij brandveilig wonen?",
        "options": [
          "A. Rookmelders uitzetten als u slaapt.",
          "B. Batterijen nooit controleren.",
          "C. Rookmelders plaatsen en werkend houden."
        ],
        "answer": "C. Rookmelders plaatsen en werkend houden."
      },
      {
        "title": "Apotheek en verzekering",
        "prompt": "Vraag: Waarom neemt u soms een verzekeringspas mee naar de apotheek?",
        "options": [
          "A. Om gratis boodschappen te krijgen.",
          "B. Zodat de apotheek uw verzekeringsgegevens kan controleren.",
          "C. Omdat de school daarom vraagt."
        ],
        "answer": "B. Zodat de apotheek uw verzekeringsgegevens kan controleren."
      },
      {
        "title": "Nood en spoed",
        "prompt": "Vraag: Wanneer belt u een spoednummer?",
        "options": [
          "A. Bij een ernstige of dringende noodsituatie.",
          "B. Om een bibliotheekboek te verlengen.",
          "C. Voor iedere gewone vraag over openingstijden."
        ],
        "answer": "A. Bij een ernstige of dringende noodsituatie."
      },
      {
        "title": "Nederlandse taal oefenen",
        "prompt": "Vraag: Waarom oefenen veel inburgeraars Nederlands in dagelijkse situaties?",
        "options": [
          "A. Omdat Engels altijd verplicht is bij de gemeente.",
          "B. Om zelfstandig afspraken en contacten te regelen.",
          "C. Om nooit meer te hoeven luisteren."
        ],
        "answer": "B. Om zelfstandig afspraken en contacten te regelen."
      },
      {
        "title": "Afval en buurt",
        "prompt": "Vraag: Wat past bij een nette woonomgeving?",
        "options": [
          "A. Afval naast volle containers blijven zetten.",
          "B. Glas in de brievenbus van buren doen.",
          "C. Afval op de juiste plek en tijd aanbieden."
        ],
        "answer": "C. Afval op de juiste plek en tijd aanbieden."
      },
      {
        "title": "Facturen betalen",
        "prompt": "Vraag: Waarom controleert u een betaaldatum op een factuur?",
        "options": [
          "A. Om op tijd te betalen en extra kosten te voorkomen.",
          "B. Om een sportdag te annuleren.",
          "C. Om uw DigiD met anderen te delen."
        ],
        "answer": "A. Om op tijd te betalen en extra kosten te voorkomen."
      }
    ]
  },
  {
    "id": "grammar-word-order",
    "number": "06",
    "category": "Grammatica",
    "title": "Zinsvolgorde en vragen",
    "goal": "Bouw A2-zinnen en vragen met de juiste woordvolgorde.",
    "meta": [
      "Woordvolgorde",
      "Vraagvormen",
      "18 drills"
    ],
    "exercises": [
      {
        "title": "Afspraak plannen",
        "prompt": "Opdracht: Zet in goede volgorde: bij de gemeente / maakt / voor juni / Violetta / een afspraak",
        "answer": "Violetta maakt voor juni een afspraak bij de gemeente."
      },
      {
        "title": "Documentvraag",
        "prompt": "Opdracht: Maak een vraag: welke documenten / meenemen / moet / ik",
        "answer": "Welke documenten moet ik meenemen?"
      },
      {
        "title": "Portaalzin",
        "prompt": "Opdracht: Zet in goede volgorde: in het portaal / vrijdag / de uitslag / bekijkt / zij",
        "answer": "Zij bekijkt vrijdag de uitslag in het portaal."
      },
      {
        "title": "Belmoment",
        "prompt": "Opdracht: Maak een vraag: de assistente / wanneer / bellen / kan / ik",
        "answer": "Wanneer kan ik de assistente bellen?"
      },
      {
        "title": "Hulp op school",
        "prompt": "Opdracht: Zet in goede volgorde: bij het fruitpunt / helpen / donderdag / ouders / kunnen",
        "answer": "Ouders kunnen donderdag bij het fruitpunt helpen."
      },
      {
        "title": "Schooltas",
        "prompt": "Opdracht: Maak een zin: met water / naar school / mijn dochter / gaat",
        "answer": "Mijn dochter gaat met water naar school."
      },
      {
        "title": "Afhalen",
        "prompt": "Opdracht: Zet in goede volgorde: om zes uur / haalt / de boodschappen / mijn man / op",
        "answer": "Mijn man haalt om zes uur de boodschappen op."
      },
      {
        "title": "Fiets terug",
        "prompt": "Opdracht: Maak een vraag: de OV-fiets / waar / terugbrengen / moet / ik",
        "answer": "Waar moet ik de OV-fiets terugbrengen?"
      },
      {
        "title": "Bon bewaren",
        "prompt": "Opdracht: Zet in goede volgorde: voor mijn bedrijf / bewaar / de bon / ik",
        "answer": "Ik bewaar de bon voor mijn bedrijf."
      },
      {
        "title": "Voorwaarde",
        "prompt": "Opdracht: Zet in goede volgorde: bel / als / ik / de tandarts / ziek ben",
        "answer": "Als ik ziek ben, bel ik de tandarts."
      },
      {
        "title": "Buurvraag",
        "prompt": "Opdracht: Maak een vraag: ligt / het pakket / bij welke buren",
        "answer": "Bij welke buren ligt het pakket?"
      },
      {
        "title": "Geluid in huis",
        "prompt": "Opdracht: Zet in goede volgorde: in de gang / piept / sinds vanochtend / de rookmelder",
        "answer": "De rookmelder piept sinds vanochtend in de gang."
      },
      {
        "title": "Zorgbrief",
        "prompt": "Opdracht: Zet in goede volgorde: elk jaar / verandert / soms / het eigen risico",
        "answer": "Het eigen risico verandert soms elk jaar."
      },
      {
        "title": "Online verlengen",
        "prompt": "Opdracht: Maak een vraag: kan / mijn boek / verlengen / online / ik",
        "answer": "Kan ik mijn boek online verlengen?"
      },
      {
        "title": "Dagje weg",
        "prompt": "Opdracht: Zet in goede volgorde: naar Maastricht / reist / zaterdag / het gezin",
        "answer": "Het gezin reist zaterdag naar Maastricht."
      },
      {
        "title": "Maaltijd",
        "prompt": "Opdracht: Maak een zin: verse groenten / kook / met vlees / ik",
        "answer": "Ik kook verse groenten met vlees."
      },
      {
        "title": "Slecht weer",
        "prompt": "Opdracht: Zet in goede volgorde: omdat / het regen wordt / neemt / een jas / zij / mee",
        "answer": "Zij neemt een jas mee omdat het regen wordt."
      },
      {
        "title": "Starttijd",
        "prompt": "Opdracht: Maak een vraag: begint / de buurtwandeling / hoe laat",
        "answer": "Hoe laat begint de buurtwandeling?"
      }
    ]
  },
  {
    "id": "grammar-verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Werkwoorden en tijden",
    "goal": "Oefen tegenwoordige tijd, voltooide tijd en toekomstvormen.",
    "meta": [
      "Tijden",
      "Werkwoorden",
      "18 drills"
    ],
    "exercises": [
      {
        "title": "Identiteit",
        "prompt": "Opdracht: Vul in: Violetta ___ haar identiteitskaart. (verlengen)",
        "answer": "Violetta verlengt haar identiteitskaart."
      },
      {
        "title": "Online afspraak",
        "prompt": "Opdracht: Vul in: Ik ___ online een afspraak ___. (maken)",
        "answer": "Ik heb online een afspraak gemaakt."
      },
      {
        "title": "Portaal morgen",
        "prompt": "Opdracht: Vul in: Morgen ___ ik de uitslag bekijken.",
        "answer": "Morgen ga ik de uitslag bekijken."
      },
      {
        "title": "School helpen",
        "prompt": "Opdracht: Vul in: Ouders ___ bij de sportdag. (helpen)",
        "answer": "Ouders helpen bij de sportdag."
      },
      {
        "title": "Boodschappen ophalen",
        "prompt": "Opdracht: Vul in: Wij ___ de bestelling vrijdag ___. (ophalen)",
        "answer": "Wij hebben de bestelling vrijdag opgehaald."
      },
      {
        "title": "Fiets terug",
        "prompt": "Opdracht: Vul in: Vanavond ___ zij de OV-fiets terugbrengen.",
        "answer": "Vanavond zal zij de OV-fiets terugbrengen."
      },
      {
        "title": "Bon bewaren",
        "prompt": "Opdracht: Vul in: De ondernemer ___ de bon digitaal. (bewaren)",
        "answer": "De ondernemer bewaart de bon digitaal."
      },
      {
        "title": "Fietstocht gisteren",
        "prompt": "Opdracht: Vul in: Ik ___ met de fietsclub ___. (fietsen)",
        "answer": "Ik heb met de fietsclub gefietst."
      },
      {
        "title": "Controle verzetten",
        "prompt": "Opdracht: Vul in: De tandarts ___ de afspraak. (verzetten)",
        "answer": "De tandarts verzet de afspraak."
      },
      {
        "title": "Pakket halen",
        "prompt": "Opdracht: Vul in: Straks ___ ik het pakket halen.",
        "answer": "Straks ga ik het pakket halen."
      },
      {
        "title": "Controle na batterijwissel",
        "prompt": "Opdracht: Vul in: Hij ___ de rookmelder na de batterij. (testen)",
        "answer": "Hij test de rookmelder na de batterij."
      },
      {
        "title": "Brief ontvangen",
        "prompt": "Opdracht: Vul in: Zij ___ een brief over eigen risico ___. (ontvangen)",
        "answer": "Zij heeft een brief over eigen risico ontvangen."
      },
      {
        "title": "Boek verlengen",
        "prompt": "Opdracht: Vul in: De bibliotheek ___ het boek een keer. (verlengen)",
        "answer": "De bibliotheek verlengt het boek een keer."
      },
      {
        "title": "Treinkaart kopen",
        "prompt": "Opdracht: Vul in: Zaterdag ___ wij treinkaartjes kopen.",
        "answer": "Zaterdag gaan wij treinkaartjes kopen."
      },
      {
        "title": "Kip marineren",
        "prompt": "Opdracht: Vul in: Violetta ___ de kip in de ochtend. (marineren)",
        "answer": "Violetta marineert de kip in de ochtend."
      },
      {
        "title": "Melding sturen",
        "prompt": "Opdracht: Vul in: Ik ___ een foto naar de gemeente ___. (sturen)",
        "answer": "Ik heb een foto naar de gemeente gestuurd."
      },
      {
        "title": "Medicijn gebruiken",
        "prompt": "Opdracht: Vul in: U ___ het medicijn met water. (gebruiken)",
        "answer": "U gebruikt het medicijn met water."
      },
      {
        "title": "Wandeling later",
        "prompt": "Opdracht: Vul in: Zondag ___ de buurt om twee uur wandelen.",
        "answer": "Zondag gaat de buurt om twee uur wandelen."
      }
    ]
  },
  {
    "id": "grammar-modal-separable",
    "number": "08",
    "category": "Grammatica",
    "title": "Modale, scheidbare en wederkerende werkwoorden",
    "goal": "Gebruik kunnen, moeten, willen, mogen, scheidbare werkwoorden en zich-vormen.",
    "meta": [
      "Modaal",
      "Scheidbaar",
      "Reflexief"
    ],
    "exercises": [
      {
        "title": "Mogelijkheid bij loket",
        "prompt": "Opdracht: Vul in: Waar ___ ik mijn kaart verlengen? (kunnen)",
        "answer": "Waar kan ik mijn kaart verlengen?"
      },
      {
        "title": "Moeten bij pasfoto",
        "prompt": "Opdracht: Vul in: U ___ een pasfoto meenemen. (moeten)",
        "answer": "U moet een pasfoto meenemen."
      },
      {
        "title": "Willen bij sportdag",
        "prompt": "Opdracht: Vul in: Ik ___ donderdag op school helpen. (willen)",
        "answer": "Ik wil donderdag op school helpen."
      },
      {
        "title": "Mogen in werkruimte",
        "prompt": "Opdracht: Vul in: U ___ in de stille ruimte bellen. (niet mogen)",
        "answer": "U mag niet in de stille ruimte bellen."
      },
      {
        "title": "Bestelling meenemen",
        "prompt": "Opdracht: Vul in: Wij halen de boodschappen vrijdag ___.",
        "answer": "Wij halen de boodschappen vrijdag op."
      },
      {
        "title": "Terugbrengen splitsen",
        "prompt": "Opdracht: Vul in: Ik breng de OV-fiets voor acht uur ___.",
        "answer": "Ik breng de OV-fiets voor acht uur terug."
      },
      {
        "title": "Aanmelden bij wandeling",
        "prompt": "Opdracht: Vul in: Zij meldt ___ aan voor de buurtwandeling.",
        "answer": "Zij meldt zich aan voor de buurtwandeling."
      },
      {
        "title": "Meenemen bij regen",
        "prompt": "Opdracht: Vul in: Neem een regenjas ___.",
        "answer": "Neem een regenjas mee."
      },
      {
        "title": "Opbellen splitsen",
        "prompt": "Opdracht: Vul in: Violetta belt de tandarts morgen ___.",
        "answer": "Violetta belt de tandarts morgen op."
      },
      {
        "title": "Voorbereiden",
        "prompt": "Opdracht: Vul in: Ik bereid ___ voor op mijn afspraak.",
        "answer": "Ik bereid mij voor op mijn afspraak."
      },
      {
        "title": "Kunnen bij bibliotheek",
        "prompt": "Opdracht: Vul in: ___ ik mijn boek online verlengen? (kunnen)",
        "answer": "Kan ik mijn boek online verlengen?"
      },
      {
        "title": "Moeten bij rookmelder",
        "prompt": "Opdracht: Vul in: De batterij ___ vandaag vervangen worden. (moeten)",
        "answer": "De batterij moet vandaag vervangen worden."
      },
      {
        "title": "Uitzoeken splitsen",
        "prompt": "Opdracht: Vul in: Ik zoek het bedrag van de rekening ___.",
        "answer": "Ik zoek het bedrag van de rekening uit."
      },
      {
        "title": "Vertrektijd onthouden",
        "prompt": "Opdracht: Vul in: Wij herinneren ___ de vertrektijd.",
        "answer": "Wij herinneren ons de vertrektijd."
      },
      {
        "title": "Willen beleefd",
        "prompt": "Opdracht: Vul in: ___ u de rekening uitleggen? (willen)",
        "answer": "Wilt u de rekening uitleggen?"
      },
      {
        "title": "Oven starten",
        "prompt": "Opdracht: Vul in: Zet de oven om zes uur ___.",
        "answer": "Zet de oven om zes uur aan."
      },
      {
        "title": "Mogen bij apotheek",
        "prompt": "Opdracht: Vul in: U ___ vragen stellen aan de apotheker. (mogen)",
        "answer": "U mag vragen stellen aan de apotheker."
      },
      {
        "title": "Ontspannen reflexief",
        "prompt": "Opdracht: Vul in: Na het werken ontspan ik ___ met een wandeling.",
        "answer": "Na het werken ontspan ik mij met een wandeling."
      }
    ]
  },
  {
    "id": "grammar-nouns-pronouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Lidwoorden, bijvoeglijke woorden en voornaamwoorden",
    "goal": "Oefen de/het, meervoud, bijvoeglijke woorden en bezittelijke voornaamwoorden.",
    "meta": [
      "De/het",
      "Meervoud",
      "Pronomen"
    ],
    "exercises": [
      {
        "title": "Artikel kaart",
        "prompt": "Opdracht: Kies de of het: ___ identiteitskaart verloopt in juni.",
        "answer": "De identiteitskaart verloopt in juni."
      },
      {
        "title": "Artikel portaal",
        "prompt": "Opdracht: Kies de of het: ___ patientenportaal werkt weer.",
        "answer": "Het patientenportaal werkt weer."
      },
      {
        "title": "Meervoud controle",
        "prompt": "Opdracht: Maak meervoud: een controle - twee ___.",
        "answer": "Een controle - twee controles."
      },
      {
        "title": "Bijvoeglijk woord stil",
        "prompt": "Opdracht: Vul in: Ik reserveer een ___ werkplek. (stil)",
        "answer": "Ik reserveer een stille werkplek."
      },
      {
        "title": "Bezit bij school",
        "prompt": "Opdracht: Vul in: Violetta helpt op ___ dochters school.",
        "answer": "Violetta helpt op haar dochters school."
      },
      {
        "title": "Artikel rookmelder",
        "prompt": "Opdracht: Kies de of het: ___ rookmelder piept.",
        "answer": "De rookmelder piept."
      },
      {
        "title": "Bijvoeglijk woord online",
        "prompt": "Opdracht: Vul in: De ___ bestelling staat klaar. (online)",
        "answer": "De online bestelling staat klaar."
      },
      {
        "title": "Meervoud batterij",
        "prompt": "Opdracht: Maak meervoud: een batterij - drie ___.",
        "answer": "Een batterij - drie batterijen."
      },
      {
        "title": "Pronomen onze",
        "prompt": "Opdracht: Vul in: Wij nemen ___ dochters mee naar Maastricht.",
        "answer": "Wij nemen onze dochters mee naar Maastricht."
      },
      {
        "title": "Artikel eigen risico",
        "prompt": "Opdracht: Kies de of het: ___ eigen risico staat in de brief.",
        "answer": "Het eigen risico staat in de brief."
      },
      {
        "title": "Bijvoeglijk woord vers",
        "prompt": "Opdracht: Vul in: Zij snijdt ___ paprika. (vers)",
        "answer": "Zij snijdt verse paprika."
      },
      {
        "title": "Meervoud boek",
        "prompt": "Opdracht: Maak meervoud: een boek - vier ___.",
        "answer": "Een boek - vier boeken."
      },
      {
        "title": "Bezit bij bon",
        "prompt": "Opdracht: Vul in: Ik bewaar ___ btw-bon digitaal.",
        "answer": "Ik bewaar mijn btw-bon digitaal."
      },
      {
        "title": "Artikel fiets",
        "prompt": "Opdracht: Kies de of het: ___ OV-fiets staat bij het station.",
        "answer": "De OV-fiets staat bij het station."
      },
      {
        "title": "Bijvoeglijk woord geldig",
        "prompt": "Opdracht: Vul in: U heeft een ___ kaart nodig. (geldig)",
        "answer": "U heeft een geldige kaart nodig."
      },
      {
        "title": "Meervoud buur",
        "prompt": "Opdracht: Maak meervoud: een buur - twee ___.",
        "answer": "Een buur - twee buren."
      },
      {
        "title": "Bezit bij thee",
        "prompt": "Opdracht: Vul in: De deelnemers drinken ___ thee in het dorpshuis.",
        "answer": "De deelnemers drinken hun thee in het dorpshuis."
      },
      {
        "title": "Artikel plantsoen",
        "prompt": "Opdracht: Kies de of het: ___ plantsoen ligt naast het dorpshuis.",
        "answer": "Het plantsoen ligt naast het dorpshuis."
      }
    ]
  },
  {
    "id": "grammar-connectors",
    "number": "10",
    "category": "Grammatica",
    "title": "Ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen geen/niet, voorzetsels en zinnen met want, omdat, dus, maar en als.",
    "meta": [
      "Geen/niet",
      "Voorzetsels",
      "Connectors"
    ],
    "exercises": [
      {
        "title": "Ontkenning document",
        "prompt": "Opdracht: Vul in met geen of niet: Ik heb ___ pasfoto bij me.",
        "answer": "Ik heb geen pasfoto bij me."
      },
      {
        "title": "Niet zichtbaar",
        "prompt": "Opdracht: Vul in met geen of niet: De uitslag is nog ___ zichtbaar.",
        "answer": "De uitslag is nog niet zichtbaar."
      },
      {
        "title": "Plaats afhaalpunt",
        "prompt": "Opdracht: Vul in: Ik meld mij ___ de afhaalbalie.",
        "answer": "Ik meld mij bij de afhaalbalie."
      },
      {
        "title": "Naar Eindhoven",
        "prompt": "Opdracht: Vul in: Wij reizen maandag ___ Eindhoven.",
        "answer": "Wij reizen maandag naar Eindhoven."
      },
      {
        "title": "Op school",
        "prompt": "Opdracht: Vul in: De sportdag is ___ school.",
        "answer": "De sportdag is op school."
      },
      {
        "title": "Voor acht uur",
        "prompt": "Opdracht: Vul in: Breng de fiets ___ acht uur terug.",
        "answer": "Breng de fiets voor acht uur terug."
      },
      {
        "title": "Want bij batterij",
        "prompt": "Opdracht: Verbind met want: Ik vervang de batterij. De rookmelder piept.",
        "answer": "Ik vervang de batterij, want de rookmelder piept."
      },
      {
        "title": "Omdat bij bon",
        "prompt": "Opdracht: Verbind met omdat: Ik bewaar de bon. De bon is voor mijn bedrijf.",
        "answer": "Ik bewaar de bon omdat de bon voor mijn bedrijf is."
      },
      {
        "title": "Dus bij wind",
        "prompt": "Opdracht: Verbind met dus: Het waait hard. De fietstocht gaat niet door.",
        "answer": "Het waait hard, dus de fietstocht gaat niet door."
      },
      {
        "title": "Tegenstelling tijd",
        "prompt": "Opdracht: Verbind met maar: Ik heb een afspraak. Ik wil de tijd verzetten.",
        "answer": "Ik heb een afspraak, maar ik wil de tijd verzetten."
      },
      {
        "title": "Als bij boek",
        "prompt": "Opdracht: Verbind met als: Het boek is gereserveerd. Ik kan niet verlengen.",
        "answer": "Als het boek is gereserveerd, kan ik niet verlengen."
      },
      {
        "title": "Daarna thuis",
        "prompt": "Opdracht: Maak twee zinnen met daarna: Ik haal het pakket op. Ik maak eten.",
        "answer": "Ik haal het pakket op. Daarna maak ik eten."
      },
      {
        "title": "In het portaal",
        "prompt": "Opdracht: Vul in: De uitslag staat ___ het portaal.",
        "answer": "De uitslag staat in het portaal."
      },
      {
        "title": "Met de trein",
        "prompt": "Opdracht: Vul in: Wij gaan ___ de trein naar Maastricht.",
        "answer": "Wij gaan met de trein naar Maastricht."
      },
      {
        "title": "Geen tijd",
        "prompt": "Opdracht: Vul in met geen of niet: Woensdag heb ik ___ tijd in de ochtend.",
        "answer": "Woensdag heb ik geen tijd in de ochtend."
      },
      {
        "title": "Ontkenning reminder",
        "prompt": "Opdracht: Vul in met geen of niet: Vergeet uw verzekeringspas ___.",
        "answer": "Vergeet uw verzekeringspas niet."
      },
      {
        "title": "Verbinding koken",
        "prompt": "Opdracht: Verbind met en: Ik snijd paprika. Ik bak kip.",
        "answer": "Ik snijd paprika en ik bak kip."
      },
      {
        "title": "Keuze bij bibliotheek",
        "prompt": "Opdracht: Verbind met of: Wilt u langskomen? Wilt u online verlengen?",
        "answer": "Wilt u langskomen of wilt u online verlengen?"
      }
    ]
  }
];

const writingChecklist = [
  "Past mijn tekst precies bij de opdracht?",
  "Noem ik de belangrijkste datum, tijd, plaats of reden?",
  "Gebruik ik korte zinnen met onderwerp en werkwoord?",
  "Is mijn vraag beleefd en duidelijk?",
  "Heeft mijn bericht een passende groet of afsluiting?"
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
  const key = `v016-writing-answer-${index}-${exercise.title}`;
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
      ${renderList(exercise.options, true)}
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
