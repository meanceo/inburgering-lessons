const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte praktische teksten over afspraken, reizen, school, zorg, wonen en gezin.",
    "meta": [
      "A2 examen",
      "Praktische teksten",
      "Nieuwe v014-opgaven"
    ],
    "exercises": [
      {
        "title": "Afspraak voor nieuwe identiteitskaart",
        "prompt": "Uw identiteitskaart verloopt in augustus. Maak online een afspraak bij de gemeente. Neem een pasfoto en uw oude kaart mee. U betaalt aan de balie met pin.",
        "questions": [
          "Vraag 1: Wat verloopt in augustus?",
          "Vraag 2: Welke twee dingen neemt u mee?",
          "Vraag 3: Hoe betaalt u aan de balie?"
        ],
        "answer": "Uw identiteitskaart verloopt in augustus. U neemt een pasfoto en uw oude kaart mee. U betaalt met pin."
      },
      {
        "title": "Bloedprikken bij het prikpunt",
        "prompt": "De huisarts vraagt bloedonderzoek aan. U kunt dinsdag tussen 08.00 en 10.00 uur naar het prikpunt in Maarheeze. Neem uw identiteitsbewijs en zorgpas mee.",
        "questions": [
          "Vraag 1: Wie vraagt bloedonderzoek aan?",
          "Vraag 2: Wanneer kunt u naar het prikpunt?",
          "Vraag 3: Welke passen neemt u mee?"
        ],
        "answer": "De huisarts vraagt bloedonderzoek aan. U kunt dinsdag tussen 08.00 en 10.00 uur gaan. U neemt uw identiteitsbewijs en zorgpas mee."
      },
      {
        "title": "Formulier voor natuurmuseumdag",
        "prompt": "De klas van uw dochter gaat vrijdag naar een natuurmuseum. Ouders ondertekenen het toestemmingsformulier voor woensdag. Geef ook door of uw kind een lunchpakket meeneemt.",
        "questions": [
          "Vraag 1: Waar gaat de klas vrijdag naartoe?",
          "Vraag 2: Wanneer ondertekenen ouders het formulier uiterlijk?",
          "Vraag 3: Wat geeft u ook door?"
        ],
        "answer": "De klas gaat naar een natuurmuseum. Ouders ondertekenen het formulier voor woensdag. U geeft door of uw kind een lunchpakket meeneemt."
      },
      {
        "title": "Bon bewaren na zelfscan",
        "prompt": "Bij de supermarkt is vandaag controle bij de zelfscan. Bewaar uw bon tot u buiten bent. Een medewerker kan vragen om drie producten te laten zien.",
        "questions": [
          "Vraag 1: Waar is vandaag controle?",
          "Vraag 2: Tot wanneer bewaart u de bon?",
          "Vraag 3: Wat kan een medewerker vragen?"
        ],
        "answer": "Er is controle bij de zelfscan. U bewaart de bon tot u buiten bent. Een medewerker kan vragen om drie producten te laten zien."
      },
      {
        "title": "Saldo op OV-chipkaart",
        "prompt": "Uw OV-chipkaart heeft nog 2,10 euro saldo. Laad voor de treinreis minimaal 20 euro op. Dit kan bij de automaat op station Heeze.",
        "questions": [
          "Vraag 1: Hoeveel saldo staat er nog op de kaart?",
          "Vraag 2: Hoeveel laadt u minimaal op?",
          "Vraag 3: Waar kunt u opladen?"
        ],
        "answer": "Er staat nog 2,10 euro op de kaart. U laadt minimaal 20 euro op. Dit kan bij de automaat op station Heeze."
      },
      {
        "title": "Brief over btw-nummer",
        "prompt": "U krijgt een brief van de Belastingdienst over uw btw-nummer. Controleer of de bedrijfsnaam goed staat. Bewaar de brief bij uw administratie.",
        "questions": [
          "Vraag 1: Van wie krijgt u een brief?",
          "Vraag 2: Wat controleert u?",
          "Vraag 3: Waar bewaart u de brief?"
        ],
        "answer": "U krijgt een brief van de Belastingdienst. U controleert de bedrijfsnaam. U bewaart de brief bij uw administratie."
      },
      {
        "title": "Proefweek in sportcentrum",
        "prompt": "Het sportcentrum biedt een proefweek aan voor nieuwe leden. U mag twee lessen kiezen: fietsen of krachttraining. Meld u voor zondag aan via de website.",
        "questions": [
          "Vraag 1: Voor wie is de proefweek?",
          "Vraag 2: Welke twee lessen kunt u kiezen?",
          "Vraag 3: Wanneer meldt u zich uiterlijk aan?"
        ],
        "answer": "De proefweek is voor nieuwe leden. U kunt fietsen of krachttraining kiezen. U meldt zich voor zondag aan."
      },
      {
        "title": "Nieuwe tijd voor gebitscontrole",
        "prompt": "Uw tandartscontrole is donderdag om 09.15 uur. Kunt u niet komen? Bel dan minimaal 24 uur van tevoren. Anders betaalt u mogelijk kosten.",
        "questions": [
          "Vraag 1: Wanneer is de tandartscontrole?",
          "Vraag 2: Wanneer belt u als u niet kunt komen?",
          "Vraag 3: Wat betaalt u mogelijk als u te laat afzegt?"
        ],
        "answer": "De controle is donderdag om 09.15 uur. U belt minimaal 24 uur van tevoren. U betaalt mogelijk kosten."
      },
      {
        "title": "Bezorgcode bij buurman Jansen",
        "prompt": "De pakketbezorger heeft uw pakket bij buurman Jansen afgegeven. U kunt het na 18.00 uur ophalen. Neem de code uit de bezorgmail mee.",
        "questions": [
          "Vraag 1: Bij wie ligt het pakket?",
          "Vraag 2: Vanaf hoe laat kunt u het ophalen?",
          "Vraag 3: Welke code neemt u mee?"
        ],
        "answer": "Het pakket ligt bij buurman Jansen. U kunt het na 18.00 uur ophalen. U neemt de code uit de bezorgmail mee."
      },
      {
        "title": "Rookmelder testen in huis",
        "prompt": "De verhuurder vraagt bewoners deze maand de rookmelder te testen. Druk kort op de testknop. Werkt de melder niet? Maak dan een melding via het woonportaal.",
        "questions": [
          "Vraag 1: Wat testen bewoners deze maand?",
          "Vraag 2: Waar drukt u kort op?",
          "Vraag 3: Wat doet u als de melder niet werkt?"
        ],
        "answer": "Bewoners testen de rookmelder. U drukt kort op de testknop. U maakt een melding via het woonportaal."
      },
      {
        "title": "Nieuwe zorgpolis controleren",
        "prompt": "Uw zorgverzekeraar stuurt in november de nieuwe polis. Controleer de premie en het eigen risico. U kunt tot eind december overstappen.",
        "questions": [
          "Vraag 1: Wanneer stuurt de zorgverzekeraar de nieuwe polis?",
          "Vraag 2: Welke twee dingen controleert u?",
          "Vraag 3: Tot wanneer kunt u overstappen?"
        ],
        "answer": "De verzekeraar stuurt de polis in november. U controleert de premie en het eigen risico. U kunt tot eind december overstappen."
      },
      {
        "title": "E-book lenen in bibliotheekapp",
        "prompt": "Met uw bibliotheekpas kunt u ook e-books lenen. Download de bibliotheekapp en log in met uw pasnummer. Een e-book blijft drie weken op uw telefoon staan.",
        "questions": [
          "Vraag 1: Wat kunt u met uw bibliotheekpas lenen?",
          "Vraag 2: Waarmee logt u in?",
          "Vraag 3: Hoelang blijft een e-book op uw telefoon staan?"
        ],
        "answer": "U kunt e-books lenen. U logt in met uw pasnummer. Een e-book blijft drie weken op uw telefoon staan."
      },
      {
        "title": "Opvang tijdens studiedag",
        "prompt": "Volgende maandag heeft de basisschool een studiedag. De buitenschoolse opvang is open vanaf 08.30 uur. Meld uw dochter vrijdag aan als zij komt.",
        "questions": [
          "Vraag 1: Wat heeft de basisschool volgende maandag?",
          "Vraag 2: Vanaf hoe laat is de opvang open?",
          "Vraag 3: Wanneer meldt u uw dochter aan?"
        ],
        "answer": "De school heeft een studiedag. De opvang is open vanaf 08.30 uur. U meldt uw dochter vrijdag aan."
      },
      {
        "title": "Voorlicht vervangen op fiets",
        "prompt": "De fietsenwinkel controleert zaterdag gratis fietsverlichting. Uw voorlicht is zwak. Een nieuwe lamp kost 7 euro en is direct klaar.",
        "questions": [
          "Vraag 1: Wat controleert de fietsenwinkel gratis?",
          "Vraag 2: Welk licht is zwak?",
          "Vraag 3: Hoeveel kost een nieuwe lamp?"
        ],
        "answer": "De fietsenwinkel controleert fietsverlichting. Uw voorlicht is zwak. Een nieuwe lamp kost 7 euro."
      },
      {
        "title": "Bestelling bij slager en groentewinkel",
        "prompt": "Voor zondag bestelt u biefstuk bij de slager en sperziebonen bij de groentewinkel. Haal alles zaterdag voor 15.00 uur op. Bewaar het vlees koel.",
        "questions": [
          "Vraag 1: Wat bestelt u bij de slager?",
          "Vraag 2: Welke groente bestelt u?",
          "Vraag 3: Wanneer haalt u alles op?"
        ],
        "answer": "U bestelt biefstuk bij de slager. U bestelt sperziebonen bij de groentewinkel. U haalt alles zaterdag voor 15.00 uur op."
      },
      {
        "title": "Museumkaartje voor Den Bosch",
        "prompt": "U koopt online twee kaartjes voor een museum in Den Bosch. De kaartjes staan in uw e-mail. Laat de code bij de ingang op uw telefoon zien.",
        "questions": [
          "Vraag 1: Voor welke stad koopt u museumkaartjes?",
          "Vraag 2: Waar staan de kaartjes?",
          "Vraag 3: Waar laat u de code zien?"
        ],
        "answer": "U koopt kaartjes voor Den Bosch. De kaartjes staan in uw e-mail. U laat de code bij de ingang op uw telefoon zien."
      },
      {
        "title": "Planten ruilen in de buurtapp",
        "prompt": "In de buurtapp staat zaterdag een plantenruil bij het buurthuis. Breng maximaal drie planten mee. De tafel is open van 10.00 tot 12.00 uur.",
        "questions": [
          "Vraag 1: Wat is er zaterdag bij het buurthuis?",
          "Vraag 2: Hoeveel planten mag u maximaal meenemen?",
          "Vraag 3: Hoe lang is de tafel open?"
        ],
        "answer": "Er is een plantenruil. U mag maximaal drie planten meenemen. De tafel is open van 10.00 tot 12.00 uur."
      },
      {
        "title": "Apotheek sluit eerder",
        "prompt": "De apotheek sluit vrijdag om 16.00 uur door scholing van het team. Haal uw bestelling voor die tijd op. Zaterdag is de apotheek weer normaal open.",
        "questions": [
          "Vraag 1: Hoe laat sluit de apotheek vrijdag?",
          "Vraag 2: Waarom sluit de apotheek eerder?",
          "Vraag 3: Wanneer is de apotheek weer normaal open?"
        ],
        "answer": "De apotheek sluit vrijdag om 16.00 uur. Dat is door scholing van het team. Zaterdag is de apotheek weer normaal open."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf korte berichten, formulieren en e-mails met duidelijke A2-zinnen.",
    "meta": [
      "Schriftelijk examen",
      "Berichten en formulieren",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Afspraak gemeente maken",
        "prompt": "Schrijf aan de gemeente. U wilt een afspraak maken voor een nieuwe identiteitskaart.",
        "answer": "Beste gemeente,\n\nIk wil graag een afspraak maken voor een nieuwe identiteitskaart. Ik neem een pasfoto en mijn oude kaart mee.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Tijd voor bloedonderzoek vragen",
        "prompt": "Schrijf aan het prikpunt. Vraag of u dinsdag om 08.30 uur kunt komen voor bloedonderzoek.",
        "answer": "Beste medewerker,\n\nKan ik dinsdag om 08.30 uur komen voor bloedonderzoek? Ik neem mijn identiteitsbewijs en zorgpas mee.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Schoolreisformulier sturen",
        "prompt": "Schrijf aan de leerkracht. U geeft toestemming voor de schoolreis en uw dochter neemt lunch mee.",
        "answer": "Beste leerkracht,\n\nIk geef toestemming voor de schoolreis naar het natuurmuseum. Mijn dochter neemt zelf een lunchpakket mee.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over zelfscanbon",
        "prompt": "Schrijf aan uw man. Vertel dat hij de bon van de zelfscan moet bewaren.",
        "answer": "Hoi,\n\nBewaar vandaag de bon van de zelfscan tot je buiten bent. Er kan controle zijn bij de supermarkt.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "OV-saldo opladen",
        "prompt": "Schrijf aan een vriendin. Vraag waar u saldo op uw OV-chipkaart kunt opladen.",
        "answer": "Hoi,\n\nWeet jij waar ik saldo op mijn OV-chipkaart kan opladen? Ik wil morgen met de trein reizen.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Bedrijfsnaam controleren",
        "prompt": "Schrijf een korte notitie voor uzelf. U moet de bedrijfsnaam op de btw-brief controleren.",
        "answer": "Vandaag controleer ik de bedrijfsnaam op de brief van de Belastingdienst. Daarna bewaar ik de brief bij mijn administratie."
      },
      {
        "title": "Aanmelden voor proefweek",
        "prompt": "Schrijf aan het sportcentrum. U wilt meedoen aan de proefweek en kiest krachttraining.",
        "answer": "Beste medewerker,\n\nIk wil mij graag aanmelden voor de proefweek. Ik kies de les krachttraining.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Tandartscontrole afzeggen",
        "prompt": "Schrijf aan de tandarts. U kunt donderdag om 09.15 uur niet komen en vraagt een nieuwe afspraak.",
        "answer": "Beste tandarts,\n\nIk kan donderdag om 09.15 uur niet naar de controle komen. Kunt u een nieuwe afspraak voor mij maken?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Pakket ophalen bevestigen",
        "prompt": "Schrijf aan buurman Jansen. U haalt uw pakket na 18.00 uur op.",
        "answer": "Beste meneer Jansen,\n\nBedankt dat u mijn pakket heeft aangenomen. Ik haal het vanavond na 18.00 uur bij u op.\n\nGroeten,\nVioletta Bonenkamp"
      },
      {
        "title": "Rookmelder melden",
        "prompt": "Schrijf aan de verhuurder. De rookmelder werkt niet na het testen.",
        "answer": "Beste verhuurder,\n\nIk heb de rookmelder getest, maar hij werkt niet. Kunt u dit repareren of vervangen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over zorgpolis",
        "prompt": "Schrijf aan de zorgverzekeraar. Vraag waar u de nieuwe premie en het eigen risico ziet.",
        "answer": "Beste zorgverzekeraar,\n\nWaar kan ik mijn nieuwe premie en eigen risico zien? Ik wil mijn zorgpolis controleren.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Hulp met bibliotheekapp",
        "prompt": "Schrijf aan de bibliotheek. U kunt niet inloggen in de app voor e-books.",
        "answer": "Beste bibliotheek,\n\nIk kan niet inloggen in de bibliotheekapp voor e-books. Kunt u mij helpen met mijn pasnummer?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Opvang voor studiedag",
        "prompt": "Schrijf aan de buitenschoolse opvang. U meldt uw dochter aan voor maandag.",
        "answer": "Beste opvang,\n\nIk wil mijn dochter aanmelden voor de studiedag van maandag. Zij komt om 08.30 uur.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Voorlicht laten maken",
        "prompt": "Schrijf aan de fietsenwinkel. U vraagt of zij zaterdag uw voorlicht kunnen vervangen.",
        "answer": "Beste fietsenwinkel,\n\nKunt u zaterdag mijn voorlicht vervangen? Het licht is zwak en ik wil veilig fietsen.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Bestelling voor zondag",
        "prompt": "Schrijf aan de slager. U bestelt biefstuk voor zondag en haalt het zaterdag op.",
        "answer": "Beste slager,\n\nIk wil graag biefstuk bestellen voor zondag. Ik haal de bestelling zaterdag voor 15.00 uur op.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Museumcode terugvinden",
        "prompt": "Schrijf aan uw man. Vertel dat de museumkaartjes in uw e-mail staan.",
        "answer": "Hoi,\n\nDe museumkaartjes voor Den Bosch staan in mijn e-mail. Ik laat de code bij de ingang op mijn telefoon zien.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Plantenruil vragen",
        "prompt": "Schrijf in de buurtapp. Vraag of u ook kruidenplantjes mag meenemen naar de plantenruil.",
        "answer": "Hallo,\n\nMag ik zaterdag ook kruidenplantjes meenemen naar de plantenruil bij het buurthuis? Ik neem maximaal drie planten mee.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Vier zinnen over een rustige avond",
        "prompt": "Schrijf vier korte zinnen over uw avond. Gebruik de woorden koken, wandelen, podcast en gezin.",
        "answer": "Ik kook biefstuk met sperziebonen. Daarna wandel ik door Sterksel. Ik luister naar een podcast. Thuis ben ik met mijn gezin."
      }
    ]
  },
  {
    "id": "speaking",
    "number": "03",
    "category": "Examen",
    "title": "Spreken",
    "goal": "Spreek hardop in korte zinnen over praktische situaties en afbeeldingen.",
    "meta": [
      "Mondeling examen",
      "Korte antwoorden",
      "Met afbeeldingen"
    ],
    "exercises": [
      {
        "title": "AI-examinator voor afspraken en reizen",
        "prompt": "Open een spraaktool en vraag om twaalf korte A2-vragen over gemeente, huisarts, school, supermarkt, OV, werk, sport, tandarts, buren, wonen, verzekering en bibliotheek.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel twaalf korte vragen over gemeente, bloedonderzoek, schoolreis, zelfscan, OV-chipkaart, btw-brief, sportcentrum, tandarts, pakket bij buren, rookmelder, zorgpolis en e-books. Wacht na elke vraag op mijn antwoord."
      },
      {
        "title": "Voorstellen bij het sportcentrum",
        "prompt": "Vertel uw naam, woonplaats, gezin en waarom u een proefweek wilt doen.",
        "answer": "Hallo, ik ben Violetta Bonenkamp. Ik woon in Sterksel met mijn man en twee dochters. Ik wil een proefweek doen omdat ik graag gezond en sterk blijf."
      },
      {
        "title": "Werkplanning thuis beschrijven",
        "prompt": "Vertel kort hoe u thuis werkt aan uw startup en hoe u uw administratie bewaart.",
        "answer": "Ik werk thuis aan mijn startup. Ik schrijf artikelen en gebruik AI. Mijn administratie bewaar ik netjes in een map."
      },
      {
        "title": "Gemeente om afspraak vragen",
        "prompt": "Bel de gemeente en vraag om een afspraak voor een nieuwe identiteitskaart.",
        "answer": "Goedemorgen, ik wil graag een afspraak maken voor een nieuwe identiteitskaart."
      },
      {
        "title": "Bij prikpunt melden",
        "prompt": "Zeg bij het prikpunt waarvoor u komt en welke passen u bij zich heeft.",
        "answer": "Goedemorgen, ik kom voor bloedonderzoek. Ik heb mijn identiteitsbewijs en zorgpas bij me."
      },
      {
        "title": "Schoolreis toestemming uitleggen",
        "prompt": "Vertel aan de leerkracht dat u toestemming geeft voor de schoolreis.",
        "answer": "Ik geef toestemming voor de schoolreis naar het natuurmuseum. Mijn dochter neemt een lunchpakket mee."
      },
      {
        "title": "Zelfscancontrole beantwoorden",
        "prompt": "Een medewerker vraagt om uw bon. Geef een kort beleefd antwoord.",
        "answer": "Natuurlijk, hier is mijn bon. Ik kan de producten laten zien."
      },
      {
        "title": "OV-kaart opladen vragen",
        "prompt": "Vraag op het station waar u saldo kunt opladen.",
        "answer": "Pardon, waar kan ik saldo op mijn OV-chipkaart opladen?"
      },
      {
        "title": "Btw-brief navragen",
        "prompt": "Bel een ondernemersloket en vraag of uw bedrijfsnaam goed staat.",
        "answer": "Goedemiddag, ik heb een brief over mijn btw-nummer gekregen. Kunt u controleren of mijn bedrijfsnaam goed staat?"
      },
      {
        "title": "Proefles kiezen",
        "prompt": "Vertel aan het sportcentrum welke les u kiest voor de proefweek.",
        "answer": "Ik wil graag meedoen aan de proefweek. Ik kies krachttraining."
      },
      {
        "title": "Tandarts om nieuwe tijd vragen",
        "prompt": "Vraag de tandarts om een andere afspraak.",
        "answer": "Goedemorgen, ik kan donderdag niet komen. Kunt u een nieuwe afspraak voor mij maken?"
      },
      {
        "title": "Buurman bedanken voor pakket",
        "prompt": "Bedank uw buurman en zeg wanneer u het pakket komt ophalen.",
        "answer": "Bedankt dat u mijn pakket heeft aangenomen. Ik haal het vanavond na zes uur op."
      },
      {
        "title": "Rookmelderprobleem melden",
        "prompt": "Vertel aan de verhuurder dat de rookmelder niet werkt.",
        "answer": "Ik heb de rookmelder getest. Hij maakt geen geluid, dus hij werkt niet."
      },
      {
        "title": "Zorgpolis vraag stellen",
        "prompt": "Vraag aan de zorgverzekeraar waar u de premie en het eigen risico ziet.",
        "answer": "Waar kan ik mijn nieuwe premie en eigen risico zien? Ik wil mijn polis controleren."
      },
      {
        "title": "E-book lenen vragen",
        "prompt": "Vraag in de bibliotheek hoe u een e-book kunt lenen.",
        "answer": "Goedemiddag, hoe kan ik met mijn bibliotheekpas een e-book lenen?"
      },
      {
        "title": "Opvang voor studiedag regelen",
        "prompt": "Vertel aan de opvang dat uw dochter maandag komt.",
        "answer": "Mijn dochter komt maandag naar de opvang, omdat de school een studiedag heeft."
      },
      {
        "title": "Voorlicht vervangen vragen",
        "prompt": "Vraag in de fietsenwinkel of uw voorlicht vervangen kan worden.",
        "answer": "Goedemiddag, kunt u mijn voorlicht vervangen? Het licht is zwak."
      },
      {
        "title": "Zondag koken beschrijven",
        "prompt": "Vertel wat u zondag kookt met biefstuk en sperziebonen.",
        "answer": "Zondag kook ik biefstuk met sperziebonen. Ik maak er ook aardappels bij."
      },
      {
        "title": "Museumbezoek uitleggen",
        "prompt": "Vertel aan de medewerker dat u twee online kaartjes heeft.",
        "answer": "Goedemiddag, ik heb twee kaartjes online gekocht. De code staat op mijn telefoon."
      },
      {
        "title": "Wandelen met podcast",
        "prompt": "Vertel wat u doet na een lange werkdag thuis.",
        "answer": "Na een lange werkdag ga ik wandelen. Ik luister naar een podcast en kom tot rust."
      },
      {
        "title": "Afbeelding afspraak bij gemeentebalie",
        "prompt": "Kijk naar de afbeelding. Vertel waarvoor u bij de gemeentebalie bent.",
        "image": "images/speaking/v014-speaking-municipality-id-card-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch municipal service desk. Scene: adult resident at a counter asks for an appointment for a new identity card, old card and passport photo on counter, no readable text, no logos, no watermark.",
        "answer": "Ik ben bij de gemeente voor een nieuwe identiteitskaart. Ik heb een pasfoto en mijn oude kaart mee."
      },
      {
        "title": "Afbeelding bloedonderzoek bij prikpunt",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u bij het prikpunt bent.",
        "image": "images/speaking/v014-speaking-health-blood-test-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a calm Dutch medical blood test location. Scene: adult patient checks in at a small desk with health card and ID card, medical assistant nearby, no visible needle, no readable text, no logos, no watermark.",
        "answer": "Ik ben bij het prikpunt voor bloedonderzoek. Ik heb mijn zorgpas bij me."
      },
      {
        "title": "Afbeelding formulier voor schoolreis",
        "prompt": "Kijk naar de afbeelding. Vertel wat u voor school invult.",
        "image": "images/speaking/v014-speaking-school-trip-permission-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch primary school hallway. Scene: parent signs a permission form for a school trip at a small table, child backpack and lunchbox visible, no readable text, no logos, no watermark.",
        "answer": "Ik vul een toestemmingsformulier in. Mijn dochter gaat op schoolreis."
      },
      {
        "title": "Afbeelding OV-servicepunt",
        "prompt": "Kijk naar de afbeelding. Vraag waar u saldo kunt opladen.",
        "image": "images/speaking/v014-speaking-transport-ov-card-service-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style at a Dutch train station service machine area. Scene: adult traveler holds an OV card and asks another traveler near a ticket machine, signs intentionally unreadable, no logos, no watermark.",
        "answer": "Pardon, waar kan ik saldo op mijn OV-chipkaart opladen?"
      },
      {
        "title": "Afbeelding rookmelder testen",
        "prompt": "Kijk naar de afbeelding. Leg uit wat u in huis test.",
        "image": "images/speaking/v014-speaking-housing-smoke-alarm-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch home hallway. Scene: adult resident presses the test button on a ceiling smoke alarm with a safe step stool, simple interior, no readable text, no logos, no watermark.",
        "answer": "Ik test de rookmelder in huis. Als hij niet werkt, meld ik dat bij de verhuurder."
      },
      {
        "title": "Afbeelding zelfscancontrole",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u de bon laat zien.",
        "image": "images/speaking/v014-speaking-supermarket-self-scan-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch supermarket self-checkout area. Scene: adult shopper shows a receipt to a supermarket employee during a self-scan check, basket with vegetables visible, no readable text, no logos, no watermark.",
        "answer": "Er is controle bij de zelfscan. Ik laat mijn bon en drie producten zien."
      },
      {
        "title": "Pinpas kwijt melden",
        "prompt": "Vertel kort aan de bank dat u uw pinpas kwijt bent.",
        "answer": "Goedemorgen, ik ben mijn pinpas kwijt. Kunt u de pas blokkeren?"
      },
      {
        "title": "Weekendplan met gezin",
        "prompt": "Vertel kort wat u zaterdag met uw gezin gaat doen.",
        "answer": "Zaterdag gaan wij naar Den Bosch. Wij bezoeken een museum en eten daarna samen."
      }
    ]
  },
  {
    "id": "listening",
    "number": "04",
    "category": "Examen",
    "title": "Luisteren",
    "goal": "Luister naar korte berichten over tijd, plaats, persoon, reden en actie.",
    "meta": [
      "A2 examen",
      "16 MP3-fragmenten",
      "Audio met transcript"
    ],
    "exercises": [
      {
        "title": "AI-luistercoach voor praktische berichten",
        "prompt": "Open een spraaktool en vraag om een langzaam A2-luisterbericht met een afspraak, plaats, tijd en actie.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor met een afspraak, plaats, tijd en actie. Stel daarna drie vragen."
      },
      {
        "title": "Nieuwe identiteitskaart",
        "audio": "audio/v014-listening-01-gemeente-identiteitskaart-afspraak.mp3",
        "transcript": "Mevrouw Bonenkamp, uw identiteitskaart verloopt in augustus. Maak online een afspraak bij de gemeente en neem een pasfoto mee.",
        "questions": [
          "Vraag 1: Wat verloopt in augustus?",
          "Vraag 2: Waar maakt mevrouw een afspraak?",
          "Vraag 3: Wat neemt zij mee?"
        ],
        "answer": "Haar identiteitskaart verloopt in augustus. Zij maakt een afspraak bij de gemeente. Zij neemt een pasfoto mee."
      },
      {
        "title": "Prikpunt in Maarheeze",
        "audio": "audio/v014-listening-02-huisarts-bloedonderzoek-prikpunt.mp3",
        "transcript": "De huisarts heeft bloedonderzoek aangevraagd. U kunt dinsdag tussen acht en tien uur naar het prikpunt in Maarheeze. Neem uw zorgpas mee.",
        "questions": [
          "Vraag 1: Wie heeft bloedonderzoek aangevraagd?",
          "Vraag 2: Wanneer kan mevrouw naar het prikpunt?",
          "Vraag 3: Welke pas neemt zij mee?"
        ],
        "answer": "De huisarts heeft bloedonderzoek aangevraagd. Zij kan dinsdag tussen acht en tien uur gaan. Zij neemt haar zorgpas mee."
      },
      {
        "title": "Schoolreis naar museum",
        "audio": "audio/v014-listening-03-schoolreis-toestemming-museum.mp3",
        "transcript": "Vrijdag gaat de klas naar een natuurmuseum. Onderteken het toestemmingsformulier voor woensdag en geef door of uw kind lunch meeneemt.",
        "questions": [
          "Vraag 1: Waar gaat de klas vrijdag naartoe?",
          "Vraag 2: Wat moeten ouders ondertekenen?",
          "Vraag 3: Wat geven ouders door?"
        ],
        "answer": "De klas gaat naar een natuurmuseum. Ouders ondertekenen het toestemmingsformulier. Zij geven door of hun kind lunch meeneemt."
      },
      {
        "title": "Boncontrole in supermarkt",
        "audio": "audio/v014-listening-04-supermarkt-zelfscan-bon.mp3",
        "transcript": "Vandaag is er controle bij de zelfscan. Bewaar uw bon tot u buiten bent. Een medewerker kan vragen om drie producten te laten zien.",
        "questions": [
          "Vraag 1: Waar is controle?",
          "Vraag 2: Hoelang bewaart mevrouw de bon?",
          "Vraag 3: Hoeveel producten kan een medewerker vragen?"
        ],
        "answer": "Er is controle bij de zelfscan. Zij bewaart de bon tot zij buiten is. Een medewerker kan drie producten vragen."
      },
      {
        "title": "OV-chipkaart opladen",
        "audio": "audio/v014-listening-05-ov-chipkaart-saldo-station.mp3",
        "transcript": "Uw OV-chipkaart heeft weinig saldo. Laad minimaal twintig euro op bij de automaat op station Heeze voordat u met de trein reist.",
        "questions": [
          "Vraag 1: Wat heeft weinig saldo?",
          "Vraag 2: Hoeveel moet mevrouw minimaal opladen?",
          "Vraag 3: Waar laadt zij saldo op?"
        ],
        "answer": "Haar OV-chipkaart heeft weinig saldo. Zij laadt minimaal twintig euro op. Zij doet dat bij de automaat op station Heeze."
      },
      {
        "title": "Btw-brief bewaren",
        "audio": "audio/v014-listening-06-werk-belastingdienst-btw-brief.mp3",
        "transcript": "U krijgt een brief van de Belastingdienst over uw btw-nummer. Controleer de bedrijfsnaam en bewaar de brief bij uw administratie.",
        "questions": [
          "Vraag 1: Van wie krijgt mevrouw een brief?",
          "Vraag 2: Wat controleert zij?",
          "Vraag 3: Waar bewaart zij de brief?"
        ],
        "answer": "Zij krijgt een brief van de Belastingdienst. Zij controleert de bedrijfsnaam. Zij bewaart de brief bij haar administratie."
      },
      {
        "title": "Proefweek sportcentrum",
        "audio": "audio/v014-listening-07-sportcentrum-proefweek-krachttraining.mp3",
        "transcript": "Het sportcentrum heeft een proefweek voor nieuwe leden. U kunt kiezen tussen fietsen en krachttraining. Meld u voor zondag aan.",
        "questions": [
          "Vraag 1: Voor wie is de proefweek?",
          "Vraag 2: Welke twee lessen kan mevrouw kiezen?",
          "Vraag 3: Wanneer meldt zij zich aan?"
        ],
        "answer": "De proefweek is voor nieuwe leden. Zij kan fietsen of krachttraining kiezen. Zij meldt zich voor zondag aan."
      },
      {
        "title": "Gebitscontrole donderdag",
        "audio": "audio/v014-listening-08-tandartscontrole-verzetten.mp3",
        "transcript": "Uw tandartscontrole is donderdag om kwart over negen. Kunt u niet komen? Bel dan minimaal vierentwintig uur van tevoren.",
        "questions": [
          "Vraag 1: Op welke dag is de controle?",
          "Vraag 2: Hoe laat is de controle?",
          "Vraag 3: Wanneer belt mevrouw als zij niet kan komen?"
        ],
        "answer": "De controle is donderdag. De controle is om kwart over negen. Zij belt minimaal vierentwintig uur van tevoren."
      },
      {
        "title": "Bezorgmail met afhaalcode",
        "audio": "audio/v014-listening-09-buren-pakket-code.mp3",
        "transcript": "De bezorger heeft uw pakket bij buurman Jansen afgegeven. U kunt het na zes uur ophalen. Neem de code uit de bezorgmail mee.",
        "questions": [
          "Vraag 1: Bij wie ligt het pakket?",
          "Vraag 2: Wanneer kan mevrouw het ophalen?",
          "Vraag 3: Welke code neemt zij mee?"
        ],
        "answer": "Het pakket ligt bij buurman Jansen. Zij kan het na zes uur ophalen. Zij neemt de code uit de bezorgmail mee."
      },
      {
        "title": "Rookmelder testen",
        "audio": "audio/v014-listening-10-woning-rookmelder-testen.mp3",
        "transcript": "De verhuurder vraagt bewoners deze maand de rookmelder te testen. Druk kort op de testknop en meld het als de melder niet werkt.",
        "questions": [
          "Vraag 1: Wat testen bewoners?",
          "Vraag 2: Waar drukken zij op?",
          "Vraag 3: Wanneer maken zij een melding?"
        ],
        "answer": "Bewoners testen de rookmelder. Zij drukken op de testknop. Zij melden het als de melder niet werkt."
      },
      {
        "title": "Nieuwe zorgpolis",
        "audio": "audio/v014-listening-11-zorgverzekering-polis-eigen-risico.mp3",
        "transcript": "In november stuurt uw zorgverzekeraar de nieuwe polis. Controleer de premie en het eigen risico. Overstappen kan tot eind december.",
        "questions": [
          "Vraag 1: Wanneer komt de nieuwe polis?",
          "Vraag 2: Welke twee dingen controleert mevrouw?",
          "Vraag 3: Tot wanneer kan zij overstappen?"
        ],
        "answer": "De polis komt in november. Zij controleert de premie en het eigen risico. Zij kan tot eind december overstappen."
      },
      {
        "title": "E-book lenen",
        "audio": "audio/v014-listening-12-bibliotheek-ebook-app.mp3",
        "transcript": "Met uw bibliotheekpas kunt u e-books lenen. Download de app en log in met uw pasnummer. Een e-book blijft drie weken op uw telefoon.",
        "questions": [
          "Vraag 1: Wat kan mevrouw lenen?",
          "Vraag 2: Waarmee logt zij in?",
          "Vraag 3: Hoelang blijft het e-book op haar telefoon?"
        ],
        "answer": "Zij kan e-books lenen. Zij logt in met haar pasnummer. Het e-book blijft drie weken op haar telefoon."
      },
      {
        "title": "Studiedag en opvang",
        "audio": "audio/v014-listening-13-school-opvang-studiedag.mp3",
        "transcript": "Volgende maandag heeft de basisschool een studiedag. De opvang is open vanaf half negen. Meld uw dochter vrijdag aan als zij komt.",
        "questions": [
          "Vraag 1: Wat heeft de school maandag?",
          "Vraag 2: Vanaf hoe laat is de opvang open?",
          "Vraag 3: Wanneer meldt mevrouw haar dochter aan?"
        ],
        "answer": "De school heeft een studiedag. De opvang is open vanaf half negen. Zij meldt haar dochter vrijdag aan."
      },
      {
        "title": "Voorlicht op fiets",
        "audio": "audio/v014-listening-14-fietsenwinkel-voorlicht-lamp.mp3",
        "transcript": "De fietsenwinkel controleert zaterdag gratis fietsverlichting. Uw voorlicht is zwak. Een nieuwe lamp kost zeven euro en is direct klaar.",
        "questions": [
          "Vraag 1: Wat controleert de winkel gratis?",
          "Vraag 2: Welk licht is zwak?",
          "Vraag 3: Hoeveel kost een nieuwe lamp?"
        ],
        "answer": "De winkel controleert fietsverlichting. Het voorlicht is zwak. Een nieuwe lamp kost zeven euro."
      },
      {
        "title": "Bestelling voor zondag",
        "audio": "audio/v014-listening-15-slager-groente-zondag-eten.mp3",
        "transcript": "Voor zondag bestelt u biefstuk bij de slager en sperziebonen bij de groentewinkel. Haal alles zaterdag voor drie uur op.",
        "questions": [
          "Vraag 1: Wat bestelt mevrouw bij de slager?",
          "Vraag 2: Welke groente bestelt zij?",
          "Vraag 3: Wanneer haalt zij alles op?"
        ],
        "answer": "Zij bestelt biefstuk. Zij bestelt sperziebonen. Zij haalt alles zaterdag voor drie uur op."
      },
      {
        "title": "Museum in Den Bosch",
        "audio": "audio/v014-listening-16-museum-den-bosch-code.mp3",
        "transcript": "U heeft twee kaartjes gekocht voor een museum in Den Bosch. De kaartjes staan in uw e-mail. Laat de code bij de ingang zien.",
        "questions": [
          "Vraag 1: Hoeveel kaartjes heeft mevrouw gekocht?",
          "Vraag 2: In welke stad is het museum?",
          "Vraag 3: Wat laat zij bij de ingang zien?"
        ],
        "answer": "Zij heeft twee kaartjes gekocht. Het museum is in Den Bosch. Zij laat de code zien."
      }
    ]
  },
  {
    "id": "knm",
    "number": "05",
    "category": "Examen",
    "title": "KNM",
    "goal": "Oefen kennisvragen over wonen, zorg, school, werk, overheid, rechten en regels.",
    "meta": [
      "KNM",
      "Meerkeuzevragen",
      "A/B/C verdeeld"
    ],
    "exercises": [
      {
        "title": "Adres bij overheid actueel houden",
        "prompt": "Vraag: Waarom is uw juiste adres belangrijk bij de gemeente?",
        "questions": [
          "A. Officiele post kan u bereiken.",
          "B. U krijgt dan altijd gratis reizen.",
          "C. U hoeft dan geen belasting te betalen."
        ],
        "answer": "A. Officiele post kan u bereiken."
      },
      {
        "title": "Zorgpas meenemen",
        "prompt": "Vraag: Waarom neemt u vaak een zorgpas mee naar een zorgafspraak?",
        "questions": [
          "A. Om korting in de supermarkt te krijgen.",
          "B. Zodat de zorgverlener uw verzekering kan controleren.",
          "C. Om zonder afspraak voor te gaan."
        ],
        "answer": "B. Zodat de zorgverlener uw verzekering kan controleren."
      },
      {
        "title": "Ouders en schoolinformatie",
        "prompt": "Vraag: Wat past bij contact tussen ouders en school?",
        "questions": [
          "A. Ouders hoeven nooit iets te lezen.",
          "B. Ouders bepalen alle schoolregels alleen.",
          "C. Ouders lezen berichten en geven belangrijke informatie door."
        ],
        "answer": "C. Ouders lezen berichten en geven belangrijke informatie door."
      },
      {
        "title": "Bon bij aankoop bewaren",
        "prompt": "Vraag: Waarom bewaart u soms een kassabon?",
        "questions": [
          "A. Omdat u de bon aan de huisarts geeft.",
          "B. Omdat u bij controle of ruilen kunt laten zien wat u kocht.",
          "C. Omdat betalen met pin dan verboden is."
        ],
        "answer": "B. Omdat u bij controle of ruilen kunt laten zien wat u kocht."
      },
      {
        "title": "Betaald reizen met OV",
        "prompt": "Vraag: Wat doet u normaal als u met trein of bus reist?",
        "questions": [
          "A. U checkt in en betaalt voor de reis.",
          "B. U stapt altijd gratis in.",
          "C. U geeft uw kaart aan een onbekende."
        ],
        "answer": "A. U checkt in en betaalt voor de reis."
      },
      {
        "title": "Administratie van ondernemer",
        "prompt": "Vraag: Wat hoort bij een nette bedrijfsadministratie?",
        "questions": [
          "A. Alle brieven direct weggooien.",
          "B. Facturen zonder naam sturen.",
          "C. Belangrijke brieven en gegevens bewaren."
        ],
        "answer": "C. Belangrijke brieven en gegevens bewaren."
      },
      {
        "title": "Veilig sporten",
        "prompt": "Vraag: Waarom volgt u instructies in een sportcentrum?",
        "questions": [
          "A. Dan hoeft u nooit contributie te betalen.",
          "B. Dat helpt om veilig te trainen.",
          "C. Dan mag u medische adviezen negeren."
        ],
        "answer": "B. Dat helpt om veilig te trainen."
      },
      {
        "title": "Zorgafspraak op tijd afzeggen",
        "prompt": "Vraag: Wat doet u als u niet naar de tandarts kunt komen?",
        "questions": [
          "A. U belt op tijd en maakt zo nodig een nieuwe afspraak.",
          "B. U zegt niets en blijft weg.",
          "C. U stuurt iemand anders zonder uitleg."
        ],
        "answer": "A. U belt op tijd en maakt zo nodig een nieuwe afspraak."
      },
      {
        "title": "Bezorging bij de buur",
        "prompt": "Vraag: Wat is netjes als een buur uw pakket aanneemt?",
        "questions": [
          "A. U laat het weken liggen.",
          "B. U opent eerst de post van de buur.",
          "C. U haalt het snel op en bedankt de buur."
        ],
        "answer": "C. U haalt het snel op en bedankt de buur."
      },
      {
        "title": "Rookalarm thuis",
        "prompt": "Vraag: Waarom is een werkende rookmelder belangrijk?",
        "questions": [
          "A. Omdat de huur dan altijd lager wordt.",
          "B. Omdat u brand of rook sneller merkt.",
          "C. Omdat ramen dan dicht moeten blijven."
        ],
        "answer": "B. Omdat u brand of rook sneller merkt."
      },
      {
        "title": "Zorgverzekering vergelijken",
        "prompt": "Vraag: Wat is verstandig bij een nieuwe zorgpolis?",
        "questions": [
          "A. De premie, dekking en het eigen risico bekijken.",
          "B. Alleen naar de kleur van de envelop kijken.",
          "C. Nooit de voorwaarden lezen."
        ],
        "answer": "A. De premie, dekking en het eigen risico bekijken."
      },
      {
        "title": "Hulpbronnen in bibliotheek",
        "prompt": "Vraag: Waarvoor gebruiken veel mensen de bibliotheek?",
        "questions": [
          "A. Voor spoedhulp bij brand.",
          "B. Voor het aanvragen van een gevangenisstraf.",
          "C. Voor boeken, taal, computers en informatie."
        ],
        "answer": "C. Voor boeken, taal, computers en informatie."
      },
      {
        "title": "Kinderopvang regelen",
        "prompt": "Vraag: Waarom melden ouders een kind aan bij de opvang?",
        "questions": [
          "A. Omdat school dan niet meer nodig is.",
          "B. Omdat het kind op afgesproken tijden veilig opgevangen wordt.",
          "C. Omdat ouders dan geen contactgegevens hoeven te geven."
        ],
        "answer": "B. Omdat het kind op afgesproken tijden veilig opgevangen wordt."
      },
      {
        "title": "Fietsverlichting in het donker",
        "prompt": "Vraag: Waarom gebruikt u goede fietsverlichting?",
        "questions": [
          "A. Zodat anderen u beter zien en u veiliger fietst.",
          "B. Zodat u op de stoep mag rijden.",
          "C. Zodat verkeersregels niet gelden."
        ],
        "answer": "A. Zodat anderen u beter zien en u veiliger fietst."
      },
      {
        "title": "Gezonde maaltijd kiezen",
        "prompt": "Vraag: Wat past bij gezond eten?",
        "questions": [
          "A. Alleen koek eten als avondeten.",
          "B. Nooit water drinken.",
          "C. Afwisseling met groente, eiwit en genoeg drinken."
        ],
        "answer": "C. Afwisseling met groente, eiwit en genoeg drinken."
      },
      {
        "title": "Online kaartje tonen",
        "prompt": "Vraag: Wat doet u vaak met een online kaartje bij de ingang?",
        "questions": [
          "A. U weigert uw kaartje te tonen.",
          "B. U laat de code of het kaartje op uw telefoon zien.",
          "C. U geeft uw telefoon aan een onbekende mee."
        ],
        "answer": "B. U laat de code of het kaartje op uw telefoon zien."
      },
      {
        "title": "Samenleven in de buurt",
        "prompt": "Vraag: Wat helpt bij prettig contact met buren?",
        "questions": [
          "A. Vriendelijk praten en rekening houden met elkaar.",
          "B. Altijd hard schreeuwen in de nacht.",
          "C. Nooit reageren op een vraag."
        ],
        "answer": "A. Vriendelijk praten en rekening houden met elkaar."
      },
      {
        "title": "Apotheekinstructie volgen",
        "prompt": "Vraag: Wat is verstandig bij medicijnen van de apotheek?",
        "questions": [
          "A. Medicijnen delen met iedereen.",
          "B. De uitleg nooit lezen.",
          "C. Controleren voor wie het medicijn is en de uitleg volgen."
        ],
        "answer": "C. Controleren voor wie het medicijn is en de uitleg volgen."
      },
      {
        "title": "Stemrecht respecteren",
        "prompt": "Vraag: Wat hoort bij verkiezingen in Nederland?",
        "questions": [
          "A. Iemand anders moet uw keuze openbaar maken.",
          "B. U kiest zelf en uw stem is geheim.",
          "C. Alleen werkgevers mogen stemmen."
        ],
        "answer": "B. U kiest zelf en uw stem is geheim."
      },
      {
        "title": "Eerlijk behandelen",
        "prompt": "Vraag: Wat betekent gelijke behandeling?",
        "questions": [
          "A. Mensen eerlijk behandelen, ook bij verschil in afkomst, geloof of geslacht.",
          "B. Alleen mensen uit uw familie helpen.",
          "C. Mensen zonder reden weigeren."
        ],
        "answer": "A. Mensen eerlijk behandelen, ook bij verschil in afkomst, geloof of geslacht."
      },
      {
        "title": "Digitale veiligheid",
        "prompt": "Vraag: Hoe gebruikt u DigiD veilig?",
        "questions": [
          "A. U zet uw wachtwoord op social media.",
          "B. U geeft uw code aan een onbekende beller.",
          "C. U houdt uw inloggegevens geheim."
        ],
        "answer": "C. U houdt uw inloggegevens geheim."
      },
      {
        "title": "Spoednummer 112",
        "prompt": "Vraag: Wanneer belt u 112?",
        "questions": [
          "A. Voor de openingstijden van een winkel.",
          "B. Bij direct gevaar, brand of ernstige spoed.",
          "C. Voor een vraag over een e-book."
        ],
        "answer": "B. Bij direct gevaar, brand of ernstige spoed."
      },
      {
        "title": "Vrijwilligerswerk in wijk",
        "prompt": "Vraag: Waarom doen mensen vrijwilligerswerk?",
        "questions": [
          "A. Om anderen te helpen en mee te doen.",
          "B. Om automatisch een Nederlands paspoort te krijgen.",
          "C. Om nooit meer regels te volgen."
        ],
        "answer": "A. Om anderen te helpen en mee te doen."
      },
      {
        "title": "Afval naar milieustraat",
        "prompt": "Vraag: Wat doet u met spullen die niet in de gewone container mogen?",
        "questions": [
          "A. U zet alles op straat zonder afspraak.",
          "B. U gooit glas bij etensresten.",
          "C. U brengt ze volgens de regels naar de juiste plek, zoals de milieustraat."
        ],
        "answer": "C. U brengt ze volgens de regels naar de juiste plek, zoals de milieustraat."
      },
      {
        "title": "Energie besparen thuis",
        "prompt": "Vraag: Waarom letten mensen op stroom en warmte?",
        "questions": [
          "A. Omdat douchen verboden is.",
          "B. Omdat het kosten kan besparen en beter is voor het milieu.",
          "C. Omdat lampen nooit aan mogen."
        ],
        "answer": "B. Omdat het kosten kan besparen en beter is voor het milieu."
      },
      {
        "title": "Verzekeringsvoorwaarden lezen",
        "prompt": "Vraag: Wat is verstandig voordat u een verzekering kiest?",
        "questions": [
          "A. Lezen wat wel en niet verzekerd is.",
          "B. Alleen de reclame onthouden.",
          "C. De polis direct weggooien."
        ],
        "answer": "A. Lezen wat wel en niet verzekerd is."
      },
      {
        "title": "Betrouwbaar samenwerken",
        "prompt": "Vraag: Wat hoort bij goed samenwerken op werk?",
        "questions": [
          "A. Nooit reageren op berichten.",
          "B. Afspraken nakomen en op tijd communiceren.",
          "C. Altijd te laat komen zonder uitleg."
        ],
        "answer": "B. Afspraken nakomen en op tijd communiceren."
      },
      {
        "title": "Hulp bij toeslagen",
        "prompt": "Vraag: Wat doet u als u niet weet of u recht heeft op een toeslag?",
        "questions": [
          "A. U stuurt uw bankpas naar een onbekende.",
          "B. U vult expres verkeerde gegevens in.",
          "C. U vraagt informatie bij een betrouwbare organisatie."
        ],
        "answer": "C. U vraagt informatie bij een betrouwbare organisatie."
      }
    ]
  },
  {
    "id": "wordorder",
    "number": "06",
    "category": "Grammatica",
    "title": "Grammatica: woordvolgorde en vragen",
    "goal": "Oefen hoofdzin, inversie, bijzin en vraagvormen met nieuwe situaties.",
    "meta": [
      "A2 grammatica",
      "Woordvolgorde",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Afspraakroute",
        "prompt": "Opdracht: Zet in goede volgorde: om tien uur / ik / bij de gemeente / heb / een afspraak",
        "answer": "Ik heb om tien uur een afspraak bij de gemeente."
      },
      {
        "title": "Balievraag",
        "prompt": "Opdracht: Maak een vraag: u / waar / uw identiteitskaart / afhalen / kunt",
        "answer": "Waar kunt u uw identiteitskaart afhalen?"
      },
      {
        "title": "Formulierzin",
        "prompt": "Opdracht: Zet in goede volgorde: vandaag / haar dochter / het formulier / tekent",
        "answer": "Haar dochter tekent vandaag het formulier."
      },
      {
        "title": "Appcontrole",
        "prompt": "Opdracht: Maak een zin: in de app / controleert / zij / het saldo",
        "answer": "Zij controleert het saldo in de app."
      },
      {
        "title": "Pakketvolgorde",
        "prompt": "Opdracht: Zet in goede volgorde: het pakket / op / na zes uur / ik / haal",
        "answer": "Na zes uur haal ik het pakket op."
      },
      {
        "title": "Reden met school",
        "prompt": "Opdracht: Zet in goede volgorde: naar de opvang / mijn dochter / gaat / omdat / een studiedag / de school / heeft",
        "answer": "Mijn dochter gaat naar de opvang omdat de school een studiedag heeft."
      },
      {
        "title": "Vraag bij tandarts",
        "prompt": "Opdracht: Maak een vraag: een nieuwe afspraak / ik / maken / kan",
        "answer": "Kan ik een nieuwe afspraak maken?"
      },
      {
        "title": "Brief bewaren",
        "prompt": "Opdracht: Zet in goede volgorde: mijn administratie / de brief / bij / ik / bewaar",
        "answer": "Ik bewaar de brief bij mijn administratie."
      },
      {
        "title": "Reisvolgorde",
        "prompt": "Opdracht: Zet in goede volgorde: naar Den Bosch / gaan / zaterdag / wij",
        "answer": "Zaterdag gaan wij naar Den Bosch."
      },
      {
        "title": "Vraag met opening",
        "prompt": "Opdracht: Maak een vraag: de opvang / hoe laat / open / is",
        "answer": "Hoe laat is de opvang open?"
      },
      {
        "title": "Saldozin",
        "prompt": "Opdracht: Zet in goede volgorde: saldo / moet / opladen / Violetta",
        "answer": "Violetta moet saldo opladen."
      },
      {
        "title": "Melding volgorde",
        "prompt": "Opdracht: Zet in goede volgorde: ik / een melding / maak / als / de rookmelder / niet werkt",
        "answer": "Als de rookmelder niet werkt, maak ik een melding."
      },
      {
        "title": "Vraag met keuze",
        "prompt": "Opdracht: Maak een vraag: u / in de proefweek / welke les / kiest",
        "answer": "Welke les kiest u in de proefweek?"
      },
      {
        "title": "Bonzin",
        "prompt": "Opdracht: Zet in goede volgorde: de bon / bewaart / tot buiten / u",
        "answer": "U bewaart de bon tot buiten."
      },
      {
        "title": "Code tonen",
        "prompt": "Opdracht: Zet in goede volgorde: bij de ingang / de code / laat / zien / ik",
        "answer": "Ik laat de code bij de ingang zien."
      },
      {
        "title": "Vraag met sluiting",
        "prompt": "Opdracht: Maak een vraag: de apotheek / eerder / waarom / sluit",
        "answer": "Waarom sluit de apotheek eerder?"
      },
      {
        "title": "Gezinszin",
        "prompt": "Opdracht: Maak een zin: met mijn gezin / ik / zondag / kook",
        "answer": "Ik kook zondag met mijn gezin."
      },
      {
        "title": "Podcastzin",
        "prompt": "Opdracht: Zet in goede volgorde: tijdens het wandelen / naar een podcast / luistert / zij",
        "answer": "Zij luistert tijdens het wandelen naar een podcast."
      }
    ]
  },
  {
    "id": "verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Grammatica: werkwoorden nu, verleden en toekomst",
    "goal": "Oefen persoonsvormen, voltooid deelwoord en toekomst met gaan.",
    "meta": [
      "A2 grammatica",
      "Werkwoorden",
      "Tijden"
    ],
    "exercises": [
      {
        "title": "Maken bij gemeente",
        "prompt": "Opdracht: Vul in: Ik ___ online een afspraak. (maken)",
        "answer": "Ik maak online een afspraak."
      },
      {
        "title": "Nemen bij balie",
        "prompt": "Opdracht: Vul in: Zij ___ een pasfoto mee. (nemen)",
        "answer": "Zij neemt een pasfoto mee."
      },
      {
        "title": "Ondertekenen school",
        "prompt": "Opdracht: Vul in: Ouders ___ het formulier. (ondertekenen)",
        "answer": "Ouders ondertekenen het formulier."
      },
      {
        "title": "Bewaren bon",
        "prompt": "Opdracht: Vul in: Wij ___ de bon tot buiten. (bewaren)",
        "answer": "Wij bewaren de bon tot buiten."
      },
      {
        "title": "Opladen kaart",
        "prompt": "Opdracht: Vul in: Violetta ___ twintig euro op. (laden)",
        "answer": "Violetta laadt twintig euro op."
      },
      {
        "title": "Bewaren verleden",
        "prompt": "Opdracht: Maak verleden tijd: Ik bewaar de brief.",
        "answer": "Ik bewaarde de brief."
      },
      {
        "title": "Kiezen verleden",
        "prompt": "Opdracht: Maak verleden tijd: Zij kiest krachttraining.",
        "answer": "Zij koos krachttraining."
      },
      {
        "title": "Bellen verleden",
        "prompt": "Opdracht: Maak verleden tijd: Ik bel de tandarts.",
        "answer": "Ik belde de tandarts."
      },
      {
        "title": "Ophalen perfectum",
        "prompt": "Opdracht: Maak perfectum: Ik haal het pakket op.",
        "answer": "Ik heb het pakket opgehaald."
      },
      {
        "title": "Testen perfectum",
        "prompt": "Opdracht: Maak perfectum: Wij testen de rookmelder.",
        "answer": "Wij hebben de rookmelder getest."
      },
      {
        "title": "Controleren perfectum",
        "prompt": "Opdracht: Maak perfectum: Zij controleert de premie.",
        "answer": "Zij heeft de premie gecontroleerd."
      },
      {
        "title": "Lenen perfectum",
        "prompt": "Opdracht: Maak perfectum: Ik leen een e-book.",
        "answer": "Ik heb een e-book geleend."
      },
      {
        "title": "Aanmelden toekomst",
        "prompt": "Opdracht: Maak toekomst met gaan: Ik meld mijn dochter aan.",
        "answer": "Ik ga mijn dochter aanmelden."
      },
      {
        "title": "Vervangen toekomst",
        "prompt": "Opdracht: Maak toekomst met gaan: De winkel vervangt mijn lamp.",
        "answer": "De winkel gaat mijn lamp vervangen."
      },
      {
        "title": "Kopen toekomst",
        "prompt": "Opdracht: Maak toekomst met gaan: Wij kopen museumkaartjes.",
        "answer": "Wij gaan museumkaartjes kopen."
      },
      {
        "title": "Meenemen toekomst",
        "prompt": "Opdracht: Maak toekomst met gaan: Ik neem drie planten mee.",
        "answer": "Ik ga drie planten meenemen."
      },
      {
        "title": "Sluiten werkwoord",
        "prompt": "Opdracht: Vul in: De apotheek ___ om vier uur. (sluiten)",
        "answer": "De apotheek sluit om vier uur."
      },
      {
        "title": "Reizen werkwoord",
        "prompt": "Opdracht: Vul in: Morgen ___ wij met de trein. (reizen)",
        "answer": "Morgen reizen wij met de trein."
      }
    ]
  },
  {
    "id": "modals",
    "number": "08",
    "category": "Grammatica",
    "title": "Grammatica: modale, scheidbare en wederkerende werkwoorden",
    "goal": "Oefen moeten, kunnen, willen, mogen, scheidbare werkwoorden en zich.",
    "meta": [
      "A2 grammatica",
      "Modaal",
      "Scheidbaar"
    ],
    "exercises": [
      {
        "title": "Pasfoto verplicht",
        "prompt": "Opdracht: Vul in: Ik ___ een pasfoto meenemen. (moeten)",
        "answer": "Ik moet een pasfoto meenemen."
      },
      {
        "title": "Kunnen bij prikpunt",
        "prompt": "Opdracht: Vul in: U ___ dinsdag naar het prikpunt. (kunnen)",
        "answer": "U kunt dinsdag naar het prikpunt."
      },
      {
        "title": "Willen proefweek",
        "prompt": "Opdracht: Vul in: Zij ___ krachttraining proberen. (willen)",
        "answer": "Zij wil krachttraining proberen."
      },
      {
        "title": "Mogen museum",
        "prompt": "Opdracht: Vul in: Wij ___ de code op de telefoon laten zien. (mogen)",
        "answer": "Wij mogen de code op de telefoon laten zien."
      },
      {
        "title": "Laaddeel oefenen",
        "prompt": "Opdracht: Maak een zin met laad ... op: vandaag / mijn OV-chipkaart / Ik",
        "answer": "Ik laad mijn OV-chipkaart vandaag op."
      },
      {
        "title": "Afhaaldeel oefenen",
        "prompt": "Opdracht: Maak een zin met haal ... op: het pakket / vanavond / Ik",
        "answer": "Ik haal het pakket vanavond op."
      },
      {
        "title": "Inschrijfdeel oefenen",
        "prompt": "Opdracht: Maak een zin met meld ... aan: vrijdag / mijn dochter / Ik",
        "answer": "Ik meld mijn dochter vrijdag aan."
      },
      {
        "title": "Meeneemdeel oefenen",
        "prompt": "Opdracht: Maak een zin met neem ... mee: naar het prikpunt / haar zorgpas / Zij",
        "answer": "Zij neemt haar zorgpas mee naar het prikpunt."
      },
      {
        "title": "Formulierdeel perfectum",
        "prompt": "Opdracht: Maak perfectum: Ik vul het formulier in.",
        "answer": "Ik heb het formulier ingevuld."
      },
      {
        "title": "Afzeggen scheidbaar",
        "prompt": "Opdracht: Maak perfectum: Ik zeg de afspraak af.",
        "answer": "Ik heb de afspraak afgezegd."
      },
      {
        "title": "Reflexief inschrijven",
        "prompt": "Opdracht: Vul in: Ik meld ___ aan voor de proefweek.",
        "answer": "Ik meld me aan voor de proefweek."
      },
      {
        "title": "Reflexief onthouden",
        "prompt": "Opdracht: Vul in: Zij herinnert ___ de afspraak.",
        "answer": "Zij herinnert zich de afspraak."
      },
      {
        "title": "Reflexief plannen",
        "prompt": "Opdracht: Vul in: Wij bereiden ___ voor op de reis.",
        "answer": "Wij bereiden ons voor op de reis."
      },
      {
        "title": "Reflexief foutmoment",
        "prompt": "Opdracht: Vul in: U vergist ___ in de tijd.",
        "answer": "U vergist zich in de tijd."
      },
      {
        "title": "Moeten en infinitief",
        "prompt": "Opdracht: Maak een zin: de premie / controleren / Violetta moet",
        "answer": "Violetta moet de premie controleren."
      },
      {
        "title": "Kunnen en infinitief",
        "prompt": "Opdracht: Maak een vraag: een e-book / lenen / ik / Kan",
        "answer": "Kan ik een e-book lenen?"
      },
      {
        "title": "Willen en infinitief",
        "prompt": "Opdracht: Maak een zin: wandelen / zaterdag / Wij willen",
        "answer": "Wij willen zaterdag wandelen."
      },
      {
        "title": "Mogen en infinitief",
        "prompt": "Opdracht: Maak een vraag: naar de opvang / mijn dochter / komen / Mag",
        "answer": "Mag mijn dochter naar de opvang komen?"
      }
    ]
  },
  {
    "id": "nouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Grammatica: lidwoorden, naamwoorden, adjectieven en voornaamwoorden",
    "goal": "Oefen de, het, meervoud, bijvoeglijke naamwoorden en persoonlijke woorden.",
    "meta": [
      "A2 grammatica",
      "Lidwoorden",
      "Voornaamwoorden"
    ],
    "exercises": [
      {
        "title": "Lidwoord kaart",
        "prompt": "Opdracht: Kies de of het: ___ identiteitskaart verloopt.",
        "answer": "De identiteitskaart verloopt."
      },
      {
        "title": "Het toestemmingspapier",
        "prompt": "Opdracht: Kies de of het: ___ formulier ligt op tafel.",
        "answer": "Het formulier ligt op tafel."
      },
      {
        "title": "Lidwoord bon",
        "prompt": "Opdracht: Kies de of het: ___ bon zit in mijn tas.",
        "answer": "De bon zit in mijn tas."
      },
      {
        "title": "Lidwoord museum",
        "prompt": "Opdracht: Kies de of het: ___ museum is in Den Bosch.",
        "answer": "Het museum is in Den Bosch."
      },
      {
        "title": "Meervoud pasfoto",
        "prompt": "Opdracht: Maak meervoud: een pasfoto",
        "answer": "pasfoto's"
      },
      {
        "title": "Meer tijden",
        "prompt": "Opdracht: Maak meervoud: een afspraak",
        "answer": "afspraken"
      },
      {
        "title": "Meervoud pakket",
        "prompt": "Opdracht: Maak meervoud: een pakket",
        "answer": "pakketten"
      },
      {
        "title": "Meervoud polis",
        "prompt": "Opdracht: Maak meervoud: een polis",
        "answer": "polissen"
      },
      {
        "title": "Adjectief oud",
        "prompt": "Opdracht: Vul in: mijn ___ kaart. (oud)",
        "answer": "mijn oude kaart"
      },
      {
        "title": "Adjectief nieuw",
        "prompt": "Opdracht: Vul in: een ___ lamp. (nieuw)",
        "answer": "een nieuwe lamp"
      },
      {
        "title": "Adjectief online",
        "prompt": "Opdracht: Vul in: twee ___ kaartjes. (online)",
        "answer": "twee online kaartjes"
      },
      {
        "title": "Adjectief belangrijk",
        "prompt": "Opdracht: Vul in: een ___ brief. (belangrijk)",
        "answer": "een belangrijke brief"
      },
      {
        "title": "Voornaamwoord ik",
        "prompt": "Opdracht: Vervang door een voornaamwoord: Violetta belt de tandarts.",
        "answer": "Zij belt de tandarts."
      },
      {
        "title": "Voornaamwoord pakket",
        "prompt": "Opdracht: Vervang door een voornaamwoord: Het pakket ligt bij de buurman.",
        "answer": "Het ligt bij de buurman."
      },
      {
        "title": "Voornaamwoord dochters",
        "prompt": "Opdracht: Vervang door een voornaamwoord: De dochters gaan naar school.",
        "answer": "Zij gaan naar school."
      },
      {
        "title": "Eigen zorgpas",
        "prompt": "Opdracht: Vul in: Ik neem ___ zorgpas mee.",
        "answer": "Ik neem mijn zorgpas mee."
      },
      {
        "title": "Lunch van dochter",
        "prompt": "Opdracht: Vul in: Mijn dochter neemt ___ lunch mee.",
        "answer": "Mijn dochter neemt haar lunch mee."
      },
      {
        "title": "Deze of die",
        "prompt": "Opdracht: Kies: ___ brief hier is belangrijk. (deze/die)",
        "answer": "Deze brief hier is belangrijk."
      }
    ]
  },
  {
    "id": "connectors",
    "number": "10",
    "category": "Grammatica",
    "title": "Grammatica: ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen geen/niet, plaatswoorden en verbindingswoorden voor A2-zinnen.",
    "meta": [
      "A2 grammatica",
      "Ontkenning",
      "Verbinders"
    ],
    "exercises": [
      {
        "title": "Geen pasfoto",
        "prompt": "Opdracht: Maak negatief: Ik heb een pasfoto.",
        "answer": "Ik heb geen pasfoto."
      },
      {
        "title": "Niet komen",
        "prompt": "Opdracht: Maak negatief: Ik kan donderdag komen.",
        "answer": "Ik kan donderdag niet komen."
      },
      {
        "title": "Geen saldo",
        "prompt": "Opdracht: Maak negatief: Er staat saldo op de kaart.",
        "answer": "Er staat geen saldo op de kaart."
      },
      {
        "title": "Niet open",
        "prompt": "Opdracht: Maak negatief: De apotheek is vrijdag laat open.",
        "answer": "De apotheek is vrijdag niet laat open."
      },
      {
        "title": "Voor woensdag",
        "prompt": "Opdracht: Vul in: Onderteken het formulier ___ woensdag.",
        "answer": "Onderteken het formulier voor woensdag."
      },
      {
        "title": "Bij station",
        "prompt": "Opdracht: Vul in: De automaat staat ___ station Heeze.",
        "answer": "De automaat staat op station Heeze."
      },
      {
        "title": "Naar prikpunt",
        "prompt": "Opdracht: Vul in: Ik ga dinsdag ___ het prikpunt.",
        "answer": "Ik ga dinsdag naar het prikpunt."
      },
      {
        "title": "In administratie",
        "prompt": "Opdracht: Vul in: Ik bewaar de brief ___ mijn administratie.",
        "answer": "Ik bewaar de brief bij mijn administratie."
      },
      {
        "title": "Na zes uur",
        "prompt": "Opdracht: Vul in: Ik haal het pakket ___ zes uur op.",
        "answer": "Ik haal het pakket na zes uur op."
      },
      {
        "title": "Tot eind december",
        "prompt": "Opdracht: Vul in: Overstappen kan ___ eind december.",
        "answer": "Overstappen kan tot eind december."
      },
      {
        "title": "Omdat bij melding",
        "prompt": "Opdracht: Maak een zin met omdat: Ik maak een melding. De rookmelder werkt niet.",
        "answer": "Ik maak een melding omdat de rookmelder niet werkt."
      },
      {
        "title": "Maar bij tandarts",
        "prompt": "Opdracht: Maak een zin met maar: Ik heb een afspraak. Ik kan niet komen.",
        "answer": "Ik heb een afspraak, maar ik kan niet komen."
      },
      {
        "title": "Dus bij saldo",
        "prompt": "Opdracht: Maak een zin met dus: Mijn saldo is laag. Ik laad geld op.",
        "answer": "Mijn saldo is laag, dus ik laad geld op."
      },
      {
        "title": "Want bij bon",
        "prompt": "Opdracht: Maak een zin met want: Ik bewaar de bon. Er is controle.",
        "answer": "Ik bewaar de bon, want er is controle."
      },
      {
        "title": "Als bij opvang",
        "prompt": "Opdracht: Maak een zin met als: Mijn dochter komt. Ik meld haar vrijdag aan.",
        "answer": "Als mijn dochter komt, meld ik haar vrijdag aan."
      },
      {
        "title": "Daarna bij wandeling",
        "prompt": "Opdracht: Maak twee zinnen met daarna: Ik kook. Ik wandel.",
        "answer": "Ik kook. Daarna wandel ik."
      },
      {
        "title": "Of bij sport",
        "prompt": "Opdracht: Maak een vraag met of: Wilt u fietsen? Wilt u krachttraining?",
        "answer": "Wilt u fietsen of wilt u krachttraining?"
      },
      {
        "title": "En bij museum",
        "prompt": "Opdracht: Maak een zin met en: Wij kopen kaartjes. Wij gaan naar het museum.",
        "answer": "Wij kopen kaartjes en wij gaan naar het museum."
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
  const key = `v014-writing-answer-${index}-${exercise.title}`;
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
