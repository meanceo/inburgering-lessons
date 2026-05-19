const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte praktische teksten. Zoek de plaats, tijd, reden en actie.",
    "meta": [
      "A2 examen",
      "Praktische berichten",
      "Nieuwe v9-opgaven"
    ],
    "exercises": [
      {
        "title": "Paspoortafspraak met pasfoto",
        "prompt": "U heeft dinsdag om 14.10 uur een afspraak bij de gemeente voor controle van uw paspoortaanvraag. Meld u bij ingang B. Neem een recente pasfoto en uw verblijfsdocument mee.",
        "questions": [
          "Vraag 1: Waarvoor heeft u dinsdag een afspraak?",
          "Vraag 2: Bij welke ingang meldt u zich?",
          "Vraag 3: Welke documenten neemt u mee naar de afspraak?"
        ],
        "answer": "U heeft een afspraak voor controle van uw paspoortaanvraag. U meldt zich bij ingang B. U neemt een recente pasfoto en uw verblijfsdocument mee."
      },
      {
        "title": "Telefonisch spreekuur voor rugpijn",
        "prompt": "De huisarts heeft morgen telefonisch spreekuur tussen 08.30 en 09.15 uur. Belt u voor rugpijn die langer dan drie dagen duurt? Houd uw medicijnenlijst bij de hand.",
        "questions": [
          "Vraag 1: Wanneer is het telefonisch spreekuur?",
          "Vraag 2: Voor welke klacht kunt u bellen?",
          "Vraag 3: Wat houdt u bij de hand?"
        ],
        "answer": "Het spreekuur is morgen tussen 08.30 en 09.15 uur. U kunt bellen voor rugpijn die langer dan drie dagen duurt. U houdt uw medicijnenlijst bij de hand."
      },
      {
        "title": "Ouderavond in lokaal 12",
        "prompt": "De ouderavond van groep 7 begint donderdag om 19.00 uur in lokaal 12. De mentor praat over cijfers, huiswerk en de schoolreis. Kom tien minuten eerder voor koffie.",
        "questions": [
          "Vraag 1: In welk lokaal is de ouderavond gepland?",
          "Vraag 2: Waarover praat de mentor?",
          "Vraag 3: Waarom komt u tien minuten eerder?"
        ],
        "answer": "De ouderavond is in lokaal 12. De mentor praat over cijfers, huiswerk en de schoolreis. U komt tien minuten eerder voor koffie."
      },
      {
        "title": "Maandag voordeel op groenten",
        "prompt": "In de supermarkt krijgt u maandag korting op broccoli, paprika en champignons. De korting geldt alleen met de klantenkaart. Bij de kassa scant u de kaart eerst.",
        "questions": [
          "Vraag 1: Op welke producten krijgt u korting?",
          "Vraag 2: Waarmee krijgt u de korting?",
          "Vraag 3: Wat doet u eerst bij de kassa?"
        ],
        "answer": "U krijgt korting op broccoli, paprika en champignons. De korting geldt met de klantenkaart. Bij de kassa scant u eerst de kaart."
      },
      {
        "title": "Bus 320 met aangepaste tijd",
        "prompt": "Door werkzaamheden rijdt bus 320 vandaag tien minuten later naar Eindhoven. De bus stopt wel bij Sterksel station. Reizigers kunnen hun gewone kaart gebruiken.",
        "questions": [
          "Vraag 1: Waarom rijdt bus 320 later?",
          "Vraag 2: Waar stopt de bus wel?",
          "Vraag 3: Welke kaart kunnen reizigers gebruiken?"
        ],
        "answer": "De bus rijdt later door werkzaamheden. De bus stopt wel bij Sterksel station. Reizigers kunnen hun gewone kaart gebruiken."
      },
      {
        "title": "Klantgesprek verschoven naar middag",
        "prompt": "Uw klant kan vanochtend niet videobellen. Het gesprek is verplaatst naar 15.30 uur. Stuur voor 13.00 uur de korte agenda per e-mail.",
        "questions": [
          "Vraag 1: Wat kan de klant vanochtend niet doen?",
          "Vraag 2: Naar welke tijd is het gesprek verplaatst?",
          "Vraag 3: Wat stuurt u voor 13.00 uur?"
        ],
        "answer": "De klant kan vanochtend niet videobellen. Het gesprek is verplaatst naar 15.30 uur. U stuurt voor 13.00 uur de korte agenda per e-mail."
      },
      {
        "title": "Zwempas verlengen aan de balie",
        "prompt": "Uw zwempas loopt zondag af. U kunt de pas aan de balie verlengen voor een maand. Neem uw oude pas mee en betaal met pin.",
        "questions": [
          "Vraag 1: Wanneer loopt de zwempas af?",
          "Vraag 2: Voor hoelang kunt u de pas verlengen?",
          "Vraag 3: Hoe betaalt u aan de balie?"
        ],
        "answer": "De zwempas loopt zondag af. U kunt de pas voor een maand verlengen. U betaalt met pin."
      },
      {
        "title": "Omleiding op fietsroute",
        "prompt": "De fietsroute langs het kanaal is tot vrijdag dicht. Volg de gele pijlen via de bosrand. De extra route duurt ongeveer zeven minuten langer.",
        "questions": [
          "Vraag 1: Welke fietsroute is dicht?",
          "Vraag 2: Welke pijlen volgt u?",
          "Vraag 3: Hoeveel langer duurt de extra route ongeveer?"
        ],
        "answer": "De fietsroute langs het kanaal is dicht. U volgt de gele pijlen via de bosrand. De extra route duurt ongeveer zeven minuten langer."
      },
      {
        "title": "Geluid van de buren melden",
        "prompt": "De buren hebben zaterdag een kleine verjaardag. Zij stoppen om 22.00 uur met muziek. Als u last heeft, kunt u even aanbellen of een bericht sturen.",
        "questions": [
          "Vraag 1: Wat hebben de buren zaterdag?",
          "Vraag 2: Hoe laat stoppen zij met muziek?",
          "Vraag 3: Wat kunt u doen als u last heeft?"
        ],
        "answer": "De buren hebben een kleine verjaardag. Zij stoppen om 22.00 uur met muziek. Als u last heeft, kunt u aanbellen of een bericht sturen."
      },
      {
        "title": "Ventilatiecontrole in huurhuis",
        "prompt": "De monteur komt woensdag tussen 11.00 en 13.00 uur voor controle van de ventilatie. Maak de roosters vrij. De controle duurt maximaal een half uur.",
        "questions": [
          "Vraag 1: Welke installatie controleert de monteur?",
          "Vraag 2: Wat maakt u vrij?",
          "Vraag 3: Hoe lang duurt de controle maximaal?"
        ],
        "answer": "De monteur komt voor controle van de ventilatie. U maakt de roosters vrij. De controle duurt maximaal een half uur."
      },
      {
        "title": "Declaratie bij zorgverzekering",
        "prompt": "U kunt de rekening van de fysiotherapeut declareren in de zorgapp. Maak een duidelijke foto van de rekening. U krijgt binnen tien werkdagen bericht.",
        "questions": [
          "Vraag 1: Welke rekening kunt u declareren?",
          "Vraag 2: Waarvan maakt u een duidelijke foto?",
          "Vraag 3: Binnen hoeveel werkdagen krijgt u bericht?"
        ],
        "answer": "U kunt de rekening van de fysiotherapeut declareren. U maakt een duidelijke foto van de rekening. U krijgt binnen tien werkdagen bericht."
      },
      {
        "title": "Taalcafe in de bibliotheek",
        "prompt": "Het taalcafe in de bibliotheek start vrijdag om 10.00 uur. U oefent spreken in kleine groepjes. Aanmelden is gratis, maar er zijn maar twaalf plaatsen.",
        "questions": [
          "Vraag 1: Wanneer start het taalcafe?",
          "Vraag 2: Hoe oefent u spreken?",
          "Vraag 3: Hoeveel plaatsen zijn er?"
        ],
        "answer": "Het taalcafe start vrijdag om 10.00 uur. U oefent spreken in kleine groepjes. Er zijn twaalf plaatsen."
      },
      {
        "title": "Muziekles van uw dochter",
        "prompt": "De muziekles van uw dochter begint deze week om 16.45 uur in plaats van 16.30 uur. Zij neemt haar map en een fles water mee.",
        "questions": [
          "Vraag 1: Hoe laat begint de muziekles deze week?",
          "Vraag 2: Welke tijd was normaal?",
          "Vraag 3: Wat neemt uw dochter mee?"
        ],
        "answer": "De muziekles begint deze week om 16.45 uur. Normaal was het 16.30 uur. Uw dochter neemt haar map en een fles water mee."
      },
      {
        "title": "Controle bij tandarts bevestigen",
        "prompt": "De tandarts vraagt of u de controle van maandag 09.20 uur wilt bevestigen. Reageer vandaag via de link in het bericht. Kom niet als u koorts heeft.",
        "questions": [
          "Vraag 1: Welke afspraak moet u bevestigen?",
          "Vraag 2: Hoe reageert u vandaag?",
          "Vraag 3: Wanneer komt u niet?"
        ],
        "answer": "U bevestigt de controle van maandag 09.20 uur. U reageert via de link in het bericht. U komt niet als u koorts heeft."
      },
      {
        "title": "Pakket bij afhaalpunt",
        "prompt": "Uw pakket ligt bij het afhaalpunt naast de bakker. U kunt het ophalen tot en met woensdag. Neem de afhaalcode en uw identiteitsbewijs mee.",
        "questions": [
          "Vraag 1: Bij welk afhaalpunt ligt het pakket?",
          "Vraag 2: Tot wanneer kunt u het ophalen?",
          "Vraag 3: Welke twee bewijzen gebruikt u bij het ophalen?"
        ],
        "answer": "Het pakket ligt bij het afhaalpunt naast de bakker. U kunt het ophalen tot en met woensdag. U neemt de afhaalcode en uw identiteitsbewijs mee."
      },
      {
        "title": "Kookworkshop met groenten",
        "prompt": "De kookworkshop in het buurthuis gaat over snelle maaltijden met groenten en kip. De workshop begint om 18.30 uur. Neem een schort en een bakje mee.",
        "questions": [
          "Vraag 1: Waarover gaat de kookworkshop?",
          "Vraag 2: Hoe laat begint de workshop?",
          "Vraag 3: Wat moet in uw tas voor de workshop?"
        ],
        "answer": "De workshop gaat over snelle maaltijden met groenten en kip. De workshop begint om 18.30 uur. U neemt een schort en een bakje mee."
      },
      {
        "title": "Treinkaart met dalurenkorting",
        "prompt": "Met uw dalurenkaart reist u na 09.00 uur goedkoper met de trein. In het weekend geldt de korting de hele dag. Check altijd in en uit.",
        "questions": [
          "Vraag 1: Wanneer reist u doordeweeks goedkoper?",
          "Vraag 2: Wanneer geldt de korting de hele dag?",
          "Vraag 3: Wat doet u altijd met de kaart?"
        ],
        "answer": "Doordeweeks reist u na 09.00 uur goedkoper. In het weekend geldt de korting de hele dag. U checkt altijd in en uit."
      },
      {
        "title": "Mini-examen parkeerplaats sporthal",
        "prompt": "In de mail staat: bezoekers van de sporthal parkeren zondag achter het gebouw. De ingang aan de voorkant blijft open.",
        "questions": [
          "Vraag 1: Kies het goede antwoord: A. Bezoekers parkeren voor de ingang. B. De sporthal is zondag dicht. C. Bezoekers parkeren achter het gebouw."
        ],
        "answer": "C. Bezoekers parkeren achter het gebouw."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf formulieren, e-mails en korte berichten met duidelijke A2-zinnen.",
    "meta": [
      "Schriftelijk examen",
      "Berichten en formulieren",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Formulier voor taalcafe",
        "prompt": "Vul een kort formulier in voor het taalcafe. Schrijf uw naam, woonplaats, telefoonnummer en waarom u wilt oefenen.",
        "answer": "Naam: Violetta Bonenkamp\nWoonplaats: Sterksel\nTelefoon: 06 12345678\nIk wil beter Nederlands spreken voor het examen."
      },
      {
        "title": "Gemeenteafspraak verzetten",
        "prompt": "Schrijf een e-mail aan de gemeente. U kunt dinsdag niet naar de paspoortafspraak en vraagt om een nieuwe tijd.",
        "answer": "Beste gemeente,\n\nIk kan dinsdag niet naar mijn paspoortafspraak komen. Kunt u mij een nieuwe tijd geven?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Bericht over rugpijn",
        "prompt": "Schrijf een bericht aan de huisarts. U heeft rugpijn sinds maandag en vraagt om advies.",
        "answer": "Beste huisarts,\n\nIk heb sinds maandag rugpijn. Kunt u mij advies geven?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag aan school over rapport",
        "prompt": "Schrijf in de schoolapp. U wilt weten wanneer het rapport van uw dochter klaar is.",
        "answer": "Beste mentor,\n\nKunt u mij vertellen wanneer het rapport van mijn dochter klaar is?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Supermarkt vraagt vervanging",
        "prompt": "Schrijf aan de supermarkt. De broccoli is niet bezorgd. Vraag om een vervangend product.",
        "answer": "Beste klantenservice,\n\nDe broccoli is niet bezorgd. Kunt u een vervangend product sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Busabonnement kwijt",
        "prompt": "Schrijf aan de vervoerder. U bent uw busabonnement kwijt en vraagt wat u moet doen.",
        "answer": "Beste medewerker,\n\nIk ben mijn busabonnement kwijt. Wat moet ik nu doen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Zwempas verlengen",
        "prompt": "Schrijf aan het zwembad. Uw zwempas loopt zondag af en u vraagt of u online kunt verlengen.",
        "answer": "Beste medewerker,\n\nMijn zwempas loopt zondag af. Kan ik de pas online verlengen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Buren over pakket informeren",
        "prompt": "Schrijf een bericht aan uw buren. U heeft hun pakket aangenomen en zij kunnen het vanavond ophalen.",
        "answer": "Hoi buren,\n\nIk heb jullie pakket aangenomen. Jullie kunnen het vanavond bij ons ophalen.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Vier zinnen over ochtendroutine",
        "prompt": "Schrijf vier korte zinnen over uw ochtend. Vertel hoe laat u opstaat, wat u eet, waar u werkt en wanneer u pauze neemt.",
        "answer": "Ik sta om zeven uur op. Ik eet yoghurt met fruit. Daarna werk ik thuis aan mijn bureau. Om elf uur neem ik korte pauze."
      },
      {
        "title": "Declaratie naar zorgverzekeraar",
        "prompt": "Schrijf aan de zorgverzekeraar. U heeft een rekening van de fysiotherapeut en vraagt hoe u die kunt declareren.",
        "answer": "Beste meneer/mevrouw,\n\nIk heb een rekening van de fysiotherapeut. Hoe kan ik deze rekening declareren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Aanmelden voor bibliotheekcursus",
        "prompt": "Schrijf aan de bibliotheek. U wilt meedoen aan een cursus digitaal formulier invullen.",
        "answer": "Beste bibliotheek,\n\nIk wil graag meedoen aan de cursus digitaal formulier invullen. Is er nog plaats?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Documenten vragen aan klant",
        "prompt": "Schrijf een werkbericht aan een klant. U mist twee documenten en vraagt of de klant ze vandaag kan sturen.",
        "answer": "Beste klant,\n\nIk mis nog twee documenten. Kunt u die vandaag naar mij sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Ventilatieafspraak bevestigen",
        "prompt": "Schrijf aan de woningcorporatie. De monteur mag woensdag tussen 11.00 en 13.00 uur komen.",
        "answer": "Beste woningcorporatie,\n\nDe monteur mag woensdag tussen 11.00 en 13.00 uur komen voor de ventilatiecontrole.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Sportles afmelden door verkoudheid",
        "prompt": "Schrijf aan de trainer. U bent verkouden en komt vandaag niet naar de sportles.",
        "answer": "Hoi trainer,\n\nIk ben verkouden. Daarom kom ik vandaag niet naar de sportles.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Vraag aan hotel in Maastricht",
        "prompt": "Schrijf aan een hotel. U komt met uw man en twee dochters en vraagt om een rustige kamer.",
        "answer": "Beste hotel,\n\nIk kom met mijn man en twee dochters naar Maastricht. Heeft u een rustige kamer voor vier personen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Aanmelden voor kookworkshop",
        "prompt": "Schrijf aan het buurthuis. U wilt naar de kookworkshop en vraagt wat u moet meenemen.",
        "answer": "Beste medewerker,\n\nIk wil graag naar de kookworkshop komen. Wat moet ik meenemen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Traktatie zonder suiker",
        "prompt": "Schrijf aan de leerkracht. Uw dochter wil een traktatie zonder suiker meenemen. Vraag of dat goed is.",
        "answer": "Beste leerkracht,\n\nMijn dochter wil een traktatie zonder suiker meenemen. Is dat goed?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vijf zinnen over fietsen in de Kempen",
        "prompt": "Schrijf vijf korte zinnen over fietsen. Gebruik de woorden route, helm, water, bos en thuis.",
        "answer": "Ik kies een rustige route. Ik draag mijn helm. Ik neem water mee. Ik fiets langs het bos. Daarna ga ik naar huis."
      }
    ]
  },
  {
    "id": "speaking",
    "number": "03",
    "category": "Examen",
    "title": "Spreken",
    "goal": "Spreek hardop in korte, duidelijke zinnen over gewone situaties.",
    "meta": [
      "Mondeling examen",
      "Korte antwoorden",
      "Met afbeeldingen"
    ],
    "exercises": [
      {
        "title": "AI-examinator met brede ronde",
        "prompt": "Start een spraaktool en zeg: stel mij tien A2-vragen over het dagelijks leven in Nederland.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel tien korte vragen over gemeente, zorg, school, vervoer, wonen, werk, sport, familie, boodschappen en vrije tijd. Wacht steeds op mijn antwoord."
      },
      {
        "title": "Voorstellen aan nieuwe buur",
        "prompt": "Vertel uw naam, leeftijd, woonplaats en gezin aan een nieuwe buur.",
        "answer": "Goedemiddag, ik ben Violetta Bonenkamp. Ik ben 44 jaar en ik woon in Sterksel met mijn man en twee dochters."
      },
      {
        "title": "Uw straat in Sterksel",
        "prompt": "Vertel kort wat u prettig vindt aan uw woonplaats.",
        "answer": "Ik vind Sterksel rustig en groen. Ik kan er goed wandelen, fietsen en thuis werken."
      },
      {
        "title": "Thuis werken met planning",
        "prompt": "Vertel hoe u thuis een werkdag begint.",
        "answer": "Ik zet mijn laptop aan en kijk naar mijn planning. Daarna beantwoord ik e-mails en maak ik een lijst voor de dag."
      },
      {
        "title": "Balievraag over paspoort",
        "prompt": "U bent bij de gemeente. Vraag waar u moet zijn voor uw paspoortafspraak.",
        "answer": "Goedemorgen, ik heb een afspraak voor mijn paspoort. Waar moet ik mij melden?"
      },
      {
        "title": "Rugpijn uitleggen aan huisarts",
        "prompt": "U belt de huisarts. Vertel wat er aan de hand is.",
        "answer": "Goedemorgen, ik heb sinds maandag rugpijn. Het doet pijn als ik lang zit."
      },
      {
        "title": "Ouderavond vragen",
        "prompt": "Vraag aan de mentor waar de ouderavond is en hoe laat u moet komen.",
        "answer": "Goedemiddag, waar is de ouderavond donderdag en hoe laat moet ik komen?"
      },
      {
        "title": "Gezonde lunch beschrijven",
        "prompt": "Vertel wat u graag eet bij een gezonde lunch.",
        "answer": "Ik eet graag salade met kip, tomaat en paprika. Ik drink water of thee erbij."
      },
      {
        "title": "Vervangend product vragen",
        "prompt": "Vraag in de supermarkt om een vervangend product omdat de broccoli op is.",
        "answer": "Goedemiddag, de broccoli is op. Heeft u een ander groen product dat ik kan gebruiken?"
      },
      {
        "title": "Pakket voor buren aannemen",
        "prompt": "Vertel aan de buren dat u hun pakket heeft aangenomen.",
        "answer": "Hoi, ik heb jullie pakket aangenomen. Jullie kunnen het vanavond bij mij ophalen."
      },
      {
        "title": "Wandeling met podcast plannen",
        "prompt": "Maak met uw man een afspraak voor een wandeling met een podcast.",
        "answer": "Zullen we vanavond na het eten wandelen? Ik wil graag een podcast over technologie luisteren."
      },
      {
        "title": "Te late bus melden",
        "prompt": "Vertel aan uw dochter dat de bus later is en dat u rustig wacht.",
        "answer": "De bus is tien minuten later. Ik wacht bij de halte en kom daarna naar huis."
      },
      {
        "title": "Zwempas verlengen bij balie",
        "prompt": "Vraag bij het zwembad of u uw zwempas kunt verlengen.",
        "answer": "Goedemiddag, mijn zwempas loopt zondag af. Kan ik de pas hier verlengen?"
      },
      {
        "title": "Declaratie uitleggen",
        "prompt": "Leg aan de zorgverzekeraar uit dat u een rekening wilt indienen.",
        "answer": "Ik heb een rekening van de fysiotherapeut. Ik wil graag weten hoe ik die kan indienen."
      },
      {
        "title": "Cursus in bibliotheek vragen",
        "prompt": "Vraag in de bibliotheek of er nog plaats is bij een digitale cursus.",
        "answer": "Goedemorgen, is er nog plaats bij de cursus digitaal formulier invullen?"
      },
      {
        "title": "Waarom AI interessant is",
        "prompt": "Vertel kort waarom u graag over AI leert.",
        "answer": "AI is interessant omdat het snel verandert. Ik kan nieuwe ideeen gebruiken voor mijn werk en artikelen."
      },
      {
        "title": "Dagje Maastricht met gezin",
        "prompt": "Vertel wat u meeneemt voor een dagje Maastricht met uw gezin.",
        "answer": "Ik neem water, broodjes, tickets en warme truien mee. Ook neem ik een oplader voor mijn telefoon mee."
      },
      {
        "title": "Kookplan voor zondag",
        "prompt": "Vertel wat u zondag wilt koken.",
        "answer": "Zondag kook ik vlees met veel groenten. Ik maak ook aardappels uit de oven."
      },
      {
        "title": "Weekplanning sporten",
        "prompt": "Vertel welke beweging u deze week wilt doen.",
        "answer": "Deze week wil ik zwemmen, fietsen en twee keer wandelen. Als ik tijd heb, doe ik ook oefeningen thuis."
      },
      {
        "title": "Paspoortbalie in gemeentehuis",
        "prompt": "Kijk naar de afbeelding. Beschrijf waar u bent en wat u gaat vragen.",
        "answer": "Ik ben bij de paspoortbalie in het gemeentehuis. Ik vraag waar ik mijn pasfoto moet geven.",
        "image": "images/speaking/v009-speaking-municipality-passport-counter-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in the Netherlands. Scene: municipal service counter for a passport appointment, waiting chairs, simple desk, appointment screen without readable text, natural daylight. No readable text, no logos, no watermark."
      },
      {
        "title": "Medicijnzakje bij apotheek",
        "prompt": "Kijk naar de afbeelding. Vertel wat u bij de apotheek doet.",
        "answer": "Ik sta bij de apotheek. Ik vraag of mijn medicijn klaar ligt en hoe ik het moet gebruiken.",
        "image": "images/speaking/v009-speaking-pharmacy-medicine-bag-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch pharmacy. Scene: service counter with plain medicine bag, small boxes, payment terminal, shelves blurred without readable labels, calm daylight. No readable text, no logos, no watermark."
      },
      {
        "title": "Schoolgang met gymtas",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u op school bent.",
        "answer": "Ik ben op school voor een ouderavond. Ik zie ook een gymtas en vraag of mijn dochter die mee moet nemen.",
        "image": "images/speaking/v009-speaking-school-hall-gym-bag-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch school hallway. Scene: lockers, classroom door, gym bag on a bench, notice board with no readable text, warm indoor light. No readable text, no logos, no watermark."
      },
      {
        "title": "Perron met omleiding",
        "prompt": "Kijk naar de afbeelding. Vertel wat u op het station doet.",
        "answer": "Ik sta op het perron en kijk waar de trein vertrekt. Door een omleiding moet ik goed luisteren naar de omroep.",
        "image": "images/speaking/v009-speaking-station-platform-detour-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style at a small Dutch train station platform. Scene: platform, bicycle parking in background, simple train tracks, information board intentionally unreadable, cloudy daylight. No readable text, no logos, no watermark."
      },
      {
        "title": "Zwembadkluisje met pas",
        "prompt": "Kijk naar de afbeelding. Vertel wat u in het zwembad regelt.",
        "answer": "Ik ben bij het zwembad. Ik verleng mijn zwempas en leg mijn tas in een kluisje.",
        "image": "images/speaking/v009-speaking-pool-locker-swim-pass-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch swimming pool entrance area. Scene: lockers, towel, plain swim card, pool entrance in background, clean bright light. No readable text, no logos, no watermark."
      },
      {
        "title": "Keuken met groenten en vlees",
        "prompt": "Kijk naar de afbeelding. Vertel wat u gaat koken.",
        "answer": "Ik sta in de keuken. Ik snijd groenten en bak vlees voor het avondeten met mijn gezin.",
        "image": "images/speaking/v009-speaking-kitchen-vegetables-meat-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a tidy home kitchen in the Netherlands. Scene: cutting board with vegetables, pan with meat, herbs, family dinner preparation, natural window light. No readable text, no logos, no watermark."
      },
      {
        "title": "Vraag aan fietsenmaker over band",
        "prompt": "Vraag aan de fietsenmaker of hij uw zachte band kan controleren.",
        "answer": "Goedemiddag, mijn voorband is zacht. Kunt u controleren of er een lek is?"
      },
      {
        "title": "Bericht voor school inspreken",
        "prompt": "Spreek een kort bericht in: uw dochter komt later door een tandartsafspraak.",
        "answer": "Goedemorgen, mijn dochter komt vandaag later op school door een tandartsafspraak."
      },
      {
        "title": "Terugblik op oefenen",
        "prompt": "Vertel wat vandaag goed ging en wat u nog moeilijk vindt.",
        "answer": "Vandaag ging spreken beter. Luisteren vind ik nog moeilijk, daarom oefen ik morgen opnieuw met korte berichten."
      }
    ]
  },
  {
    "id": "listening",
    "number": "04",
    "category": "Examen",
    "title": "Luisteren",
    "goal": "Luister eerst naar de audio. Beantwoord daarna de vragen. Gebruik de tekst alleen om te controleren.",
    "meta": [
      "A2 examen",
      "16 MP3-fragmenten",
      "Dagelijkse situaties"
    ],
    "exercises": [
      {
        "title": "AI-luisterronde met plaatsen",
        "prompt": "Start een spraaktool en vraag om een kort A2-luisterbericht met twee plaatsen, een tijd en een duidelijke actie.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor met twee plaatsen, een tijd en een actie. Stel daarna drie vragen."
      },
      {
        "title": "Paspoortafspraak gemeente",
        "audio": "audio/v009-listening-01-gemeente-paspoortafspraak.mp3",
        "prompt": "Mevrouw Bonenkamp, u heeft dinsdag om tien over twee een afspraak voor uw paspoort. Meld u bij ingang B en neem een pasfoto mee.",
        "questions": [
          "Vraag 1: Welke dienst bij de gemeente hoort bij deze afspraak?",
          "Vraag 2: Op welk tijdstip moet mevrouw Bonenkamp komen?",
          "Vraag 3: Welk document voor de foto neemt zij mee?"
        ],
        "answer": "De afspraak is voor het paspoort. De afspraak is om tien over twee. Zij moet een pasfoto meenemen."
      },
      {
        "title": "Huisarts over rugpijn",
        "audio": "audio/v009-listening-02-huisarts-rugpijn.mp3",
        "prompt": "De assistente zegt: bij rugpijn kunt u vandaag rustig bewegen en paracetamol nemen. Bel morgen terug als de pijn erger wordt.",
        "questions": [
          "Vraag 1: Wat kan mevrouw vandaag doen?",
          "Vraag 2: Welk medicijn noemt de assistente?",
          "Vraag 3: Wanneer belt zij terug?"
        ],
        "answer": "Zij kan rustig bewegen. De assistente noemt paracetamol. Zij belt morgen terug als de pijn erger wordt."
      },
      {
        "title": "Ouderavond donderdag",
        "audio": "audio/v009-listening-03-school-ouderavond-lokaal12.mp3",
        "prompt": "De ouderavond is donderdag in lokaal twaalf. De mentor begint om zeven uur. Kom tien minuten eerder als u koffie wilt.",
        "questions": [
          "Vraag 1: In welk lokaal vindt de ouderavond plaats?",
          "Vraag 2: Hoe laat begint de mentor?",
          "Vraag 3: Waarom komt u tien minuten eerder?"
        ],
        "answer": "De ouderavond is in lokaal twaalf. De mentor begint om zeven uur. U komt eerder voor koffie."
      },
      {
        "title": "Groenten vervangen",
        "audio": "audio/v009-listening-04-supermarkt-groenten-vervangen.mp3",
        "prompt": "De broccoli is vandaag niet op voorraad. De supermarkt kan paprika en courgette bezorgen. Bel voor drie uur als u dat niet wilt.",
        "questions": [
          "Vraag 1: Welk product is niet op voorraad?",
          "Vraag 2: Welke twee producten kan de supermarkt bezorgen?",
          "Vraag 3: Wanneer belt u als u dat niet wilt?"
        ],
        "answer": "De broccoli is niet op voorraad. De supermarkt kan paprika en courgette bezorgen. U belt voor drie uur als u dat niet wilt."
      },
      {
        "title": "Bus door omleiding",
        "audio": "audio/v009-listening-05-bus-omleiding-eindhoven.mp3",
        "prompt": "Door een omleiding rijdt bus drie twintig vandaag tien minuten later. De bus stopt wel bij Sterksel station en daarna bij het ziekenhuis.",
        "questions": [
          "Vraag 1: Waarom rijdt de bus later?",
          "Vraag 2: Hoeveel vertraging heeft bus drie twintig?",
          "Vraag 3: Waar stopt de bus na Sterksel station?"
        ],
        "answer": "De bus rijdt later door een omleiding. De bus rijdt tien minuten later. Na Sterksel station stopt de bus bij het ziekenhuis."
      },
      {
        "title": "Videogesprek met klant",
        "audio": "audio/v009-listening-06-klant-videogesprek-middag.mp3",
        "prompt": "Uw klant vraagt of het videogesprek naar half vier kan. Stuur voor een uur de agenda en zet de link in de e-mail.",
        "questions": [
          "Vraag 1: Naar welke tijd wil de klant het gesprek verplaatsen?",
          "Vraag 2: Wat stuurt u voor een uur?",
          "Vraag 3: Waar zet u de link?"
        ],
        "answer": "De klant wil het gesprek naar half vier verplaatsen. U stuurt de agenda. U zet de link in de e-mail."
      },
      {
        "title": "Zwempas maand verlengen",
        "audio": "audio/v009-listening-07-zwembad-pas-verlengen.mp3",
        "prompt": "Uw zwempas loopt zondag af. U kunt de pas vandaag aan de balie voor een maand verlengen. Neem de oude pas mee.",
        "questions": [
          "Vraag 1: Wanneer loopt de zwempas af?",
          "Vraag 2: Op welke plek kunt u de pas verlengen?",
          "Vraag 3: Welke pas moet u meenemen?"
        ],
        "answer": "De zwempas loopt zondag af. U kunt de pas aan de balie verlengen. U neemt de oude pas mee."
      },
      {
        "title": "Pakket bij buren",
        "audio": "audio/v009-listening-08-buren-pakket-ophalen.mp3",
        "prompt": "Uw pakket is bij de buren op nummer achttien bezorgd. U kunt het vanavond na zeven uur ophalen. Neem uw afhaalcode mee.",
        "questions": [
          "Vraag 1: Waar is het pakket bezorgd?",
          "Vraag 2: Wanneer kunt u het ophalen?",
          "Vraag 3: Welke code neemt u mee naar nummer achttien?"
        ],
        "answer": "Het pakket is bij de buren op nummer achttien bezorgd. U kunt het vanavond na zeven uur ophalen. U neemt uw afhaalcode mee."
      },
      {
        "title": "Ventilatiecontrole woning",
        "audio": "audio/v009-listening-09-woning-ventilatiecontrole.mp3",
        "prompt": "De monteur komt woensdag tussen elf en een uur voor de ventilatie. Zet geen meubels voor de roosters. De controle duurt dertig minuten.",
        "questions": [
          "Vraag 1: Op welke dag en in welk tijdvak komt de monteur?",
          "Vraag 2: Waarvoor komt hij?",
          "Vraag 3: Wat zet u niet voor de roosters?"
        ],
        "answer": "De monteur komt woensdag tussen elf en een uur. Hij komt voor de ventilatie. U zet geen meubels voor de roosters."
      },
      {
        "title": "Zorgapp rekening indienen",
        "audio": "audio/v009-listening-10-zorgverzekering-declaratie.mp3",
        "prompt": "U kunt de rekening van de fysiotherapeut in de zorgapp declareren. Maak een foto van de hele rekening en druk daarna op verzenden.",
        "questions": [
          "Vraag 1: Welke rekening kunt u declareren?",
          "Vraag 2: Waarvan maakt u een foto?",
          "Vraag 3: Waarop drukt u daarna?"
        ],
        "answer": "U kunt de rekening van de fysiotherapeut declareren. U maakt een foto van de hele rekening. Daarna drukt u op verzenden."
      },
      {
        "title": "Bibliotheekcursus digitaal formulier",
        "audio": "audio/v009-listening-11-bibliotheek-digitale-cursus.mp3",
        "prompt": "De cursus digitaal formulier invullen is vrijdag om tien uur in de bibliotheek. De cursus is gratis. Neem uw DigiD niet mee, maar wel uw telefoon.",
        "questions": [
          "Vraag 1: Wanneer is de cursus?",
          "Vraag 2: Wat kost de cursus?",
          "Vraag 3: Wat neemt u wel mee?"
        ],
        "answer": "De cursus is vrijdag om tien uur. De cursus is gratis. U neemt uw telefoon mee."
      },
      {
        "title": "Muziekles later",
        "audio": "audio/v009-listening-12-muziekles-dochter-later.mp3",
        "prompt": "De muziekles van uw dochter begint vandaag om kwart voor vijf. Zij neemt haar map en een fles water mee. U haalt haar om zes uur op.",
        "questions": [
          "Vraag 1: Hoe laat begint de muziekles?",
          "Vraag 2: Welke spullen gaan mee naar de muziekles?",
          "Vraag 3: Hoe laat haalt u haar op?"
        ],
        "answer": "De muziekles begint om kwart voor vijf. Zij neemt haar map en een fles water mee. U haalt haar om zes uur op."
      },
      {
        "title": "Recept bij apotheek",
        "audio": "audio/v009-listening-13-apotheek-recept-klaar.mp3",
        "prompt": "Uw recept ligt klaar bij de apotheek. U kunt het vandaag tot half zes ophalen. Vraag aan de balie hoe vaak u het medicijn gebruikt.",
        "questions": [
          "Vraag 1: Wat ligt klaar bij de apotheek?",
          "Vraag 2: Tot hoe laat kunt u het ophalen?",
          "Vraag 3: Wat vraagt u aan de balie?"
        ],
        "answer": "Het recept ligt klaar. U kunt het tot half zes ophalen. U vraagt hoe vaak u het medicijn gebruikt."
      },
      {
        "title": "Sportles in andere zaal",
        "audio": "audio/v009-listening-14-sportles-andere-zaal.mp3",
        "prompt": "De sportles is vanavond niet in zaal twee maar in zaal vier. De les begint om acht uur. Neem een handdoek en water mee.",
        "questions": [
          "Vraag 1: In welke zaal is de sportles vanavond?",
          "Vraag 2: Wanneer begint de training in zaal vier?",
          "Vraag 3: Welke spullen zijn nodig voor de les?"
        ],
        "answer": "De sportles is in zaal vier. De les begint om acht uur. U neemt een handdoek en water mee."
      },
      {
        "title": "Trein vanaf ander spoor",
        "audio": "audio/v009-listening-15-trein-ander-spoor.mp3",
        "prompt": "De trein naar Maastricht vertrekt vandaag vanaf spoor vijf in plaats van spoor drie. De vertrektijd blijft negen uur twaalf.",
        "questions": [
          "Vraag 1: Welke bestemming heeft de trein?",
          "Vraag 2: Vanaf welk spoor vertrekt de trein vandaag?",
          "Vraag 3: Welk onderdeel verandert niet?"
        ],
        "answer": "De trein gaat naar Maastricht. De trein vertrekt vanaf spoor vijf. De vertrektijd blijft hetzelfde."
      },
      {
        "title": "Bestelling bij slager",
        "audio": "audio/v009-listening-16-slager-bestelling-klaar.mp3",
        "prompt": "Uw bestelling bij de slager is klaar. Er ligt kipfilet en rundvlees voor u. U kunt de bestelling zaterdag voor twaalf uur ophalen.",
        "questions": [
          "Vraag 1: Waar is de bestelling klaar?",
          "Vraag 2: Welke twee soorten vlees liggen klaar?",
          "Vraag 3: Wanneer haalt u de bestelling op?"
        ],
        "answer": "De bestelling is klaar bij de slager. Er ligt kipfilet en rundvlees klaar. U haalt de bestelling zaterdag voor twaalf uur op."
      }
    ]
  },
  {
    "id": "knm",
    "number": "05",
    "category": "Examen",
    "title": "KNM",
    "goal": "Oefen kennisvragen over wonen, zorg, werk, school, vervoer en meedoen in Nederland.",
    "meta": [
      "Kennisexamen",
      "A/B/C-vragen",
      "Antwoorden verdeeld"
    ],
    "exercises": [
      {
        "title": "Adres op tijd doorgeven",
        "prompt": "Vraag: Wat doet u als u in Nederland naar een nieuw adres verhuist?",
        "options": [
          "U wacht tot de nieuwe buren het weten",
          "U geeft uw nieuwe adres door aan de gemeente",
          "U stuurt alleen een bericht aan de supermarkt"
        ],
        "answer": "B. U geeft uw nieuwe adres door aan de gemeente."
      },
      {
        "title": "Identiteit laten zien",
        "prompt": "Vraag: Waarom neemt u bij een officieel loket vaak een identiteitsbewijs mee?",
        "options": [
          "De medewerker kan controleren wie u bent",
          "U krijgt dan gratis koffie",
          "Het is alleen nodig voor kinderen"
        ],
        "answer": "A. De medewerker kan controleren wie u bent."
      },
      {
        "title": "Spoed of gewone klacht",
        "prompt": "Vraag: Wanneer belt u 112?",
        "options": [
          "Als u een recept wilt verlengen",
          "Als de bus te laat is",
          "Als er direct gevaar of spoed is"
        ],
        "answer": "C. Als er direct gevaar of spoed is."
      },
      {
        "title": "Recept ophalen",
        "prompt": "Vraag: Waar haalt u meestal medicijnen op die de huisarts voorschrijft?",
        "options": [
          "Bij het gemeentehuis",
          "Bij de apotheek",
          "Bij de bibliotheek"
        ],
        "answer": "B. Bij de apotheek."
      },
      {
        "title": "School verzuim melden",
        "prompt": "Vraag: Wat doet u als uw kind ziek is en niet naar school kan?",
        "options": [
          "U zegt niets",
          "U belt de supermarkt",
          "U meldt het kind ziek bij school"
        ],
        "answer": "C. U meldt het kind ziek bij school."
      },
      {
        "title": "Oudergesprek doel",
        "prompt": "Vraag: Waarom heeft een school een oudergesprek?",
        "options": [
          "Om over het leren en welzijn van het kind te praten",
          "Om een treinkaart te kopen",
          "Om huur te betalen"
        ],
        "answer": "A. Om over het leren en welzijn van het kind te praten."
      },
      {
        "title": "Arbeidscontract lezen",
        "prompt": "Vraag: Waar staan afspraken over loon, uren en proeftijd meestal?",
        "options": [
          "Op een kassabon",
          "In het arbeidscontract",
          "In een kookboek"
        ],
        "answer": "B. In het arbeidscontract."
      },
      {
        "title": "Loonstrook begrijpen",
        "prompt": "Vraag: Wat ziet u op een loonstrook?",
        "options": [
          "Alleen het weerbericht",
          "De openingstijden van school",
          "Loon en bedragen die worden ingehouden"
        ],
        "answer": "C. Loon en bedragen die worden ingehouden."
      },
      {
        "title": "Kleine reparatie melden",
        "prompt": "Vraag: Wat doet u bij een kapotte ventilatie in een huurwoning?",
        "options": [
          "U meldt de reparatie bij verhuurder of woningcorporatie",
          "U stopt met huur betalen zonder overleg",
          "U belt de slager"
        ],
        "answer": "A. U meldt de reparatie bij verhuurder of woningcorporatie."
      },
      {
        "title": "Brief over huur lezen",
        "prompt": "Vraag: Waarom leest u een brief van de verhuurder goed?",
        "options": [
          "Omdat er altijd een recept in staat",
          "Omdat het een reisticket is",
          "Omdat er informatie over huur, service of onderhoud kan staan"
        ],
        "answer": "C. Omdat er informatie over huur, service of onderhoud kan staan."
      },
      {
        "title": "Zorgverzekering hebben",
        "prompt": "Vraag: Welke verzekering is in Nederland verplicht voor volwassenen?",
        "options": [
          "Reisverzekering",
          "Basiszorgverzekering",
          "Fietsverzekering"
        ],
        "answer": "B. Basiszorgverzekering."
      },
      {
        "title": "Eigen risico weten",
        "prompt": "Vraag: Wat betekent eigen risico bij zorgkosten?",
        "options": [
          "Een deel van sommige zorgkosten betaalt u eerst zelf",
          "U hoeft nooit iets te betalen",
          "Het is een sportabonnement"
        ],
        "answer": "A. Een deel van sommige zorgkosten betaalt u eerst zelf."
      },
      {
        "title": "Inchecken in openbaar vervoer",
        "prompt": "Vraag: Wat doet u meestal met een ov-kaart in bus of trein?",
        "options": [
          "U legt de kaart thuis",
          "U geeft de kaart aan de huisarts",
          "U checkt in en later weer uit"
        ],
        "answer": "C. U checkt in en later weer uit."
      },
      {
        "title": "Fietsverlichting gebruiken",
        "prompt": "Vraag: Wat is belangrijk als u in het donker fietst?",
        "options": [
          "Zonder licht rijden",
          "Goede fietsverlichting gebruiken",
          "Alleen op de stoep fietsen"
        ],
        "answer": "B. Goede fietsverlichting gebruiken."
      },
      {
        "title": "Afvalkalender volgen",
        "prompt": "Vraag: Waar vindt u vaak informatie over welke container aan de straat moet?",
        "options": [
          "Op de afvalkalender van de gemeente",
          "Op een loonstrook",
          "Op een menukaart"
        ],
        "answer": "A. Op de afvalkalender van de gemeente."
      },
      {
        "title": "Rust met buren bewaren",
        "prompt": "Vraag: Wat kunt u eerst doen bij gewone geluidsoverlast van buren?",
        "options": [
          "Direct verhuizen",
          "Rustig met de buren praten",
          "De basisschool bellen"
        ],
        "answer": "B. Rustig met de buren praten."
      },
      {
        "title": "Gestolen fiets doorgeven",
        "prompt": "Vraag: Waar kunt u aangifte doen van diefstal?",
        "options": [
          "Bij de supermarkt",
          "Bij het zwembad",
          "Bij de politie"
        ],
        "answer": "C. Bij de politie."
      },
      {
        "title": "Stemmen bij verkiezingen",
        "prompt": "Vraag: Wat doet een kiezer bij verkiezingen?",
        "options": [
          "Een stem uitbrengen op een partij of kandidaat",
          "Een zorgpas aanvragen",
          "Een boek verlengen"
        ],
        "answer": "A. Een stem uitbrengen op een partij of kandidaat."
      },
      {
        "title": "Jaaropgave in map bewaren",
        "prompt": "Vraag: Waarom bewaart u jaaropgaven en belangrijke rekeningen?",
        "options": [
          "Om ermee te koken",
          "Omdat u ze nodig kunt hebben voor belasting of administratie",
          "Omdat de buschauffeur ze vraagt"
        ],
        "answer": "B. Omdat u ze nodig kunt hebben voor belasting of administratie."
      },
      {
        "title": "Toeslag aanvragen",
        "prompt": "Vraag: Waarvoor kan een toeslag soms helpen?",
        "options": [
          "Voor de kleur van uw fiets",
          "Voor een restaurantmenu",
          "Voor kosten zoals huur, zorg of kinderopvang"
        ],
        "answer": "C. Voor kosten zoals huur, zorg of kinderopvang."
      },
      {
        "title": "Bibliotheek gebruiken",
        "prompt": "Vraag: Wat kunt u in een openbare bibliotheek vaak doen?",
        "options": [
          "Boeken lenen en soms Nederlands oefenen",
          "Een paspoort maken",
          "Een auto keuren"
        ],
        "answer": "A. Boeken lenen en soms Nederlands oefenen."
      },
      {
        "title": "Vrijwilligerswerk begrijpen",
        "prompt": "Vraag: Wat is vrijwilligerswerk?",
        "options": [
          "Werk waarvoor u altijd een hoog salaris krijgt",
          "Een examen bij de tandarts",
          "Onbetaald werk waarmee u anderen of een organisatie helpt"
        ],
        "answer": "C. Onbetaald werk waarmee u anderen of een organisatie helpt."
      },
      {
        "title": "Gezond bewegen",
        "prompt": "Vraag: Wat past bij gezond leven?",
        "options": [
          "Nooit slapen",
          "Regelmatig bewegen en gevarieerd eten",
          "Alle afspraken missen"
        ],
        "answer": "B. Regelmatig bewegen en gevarieerd eten."
      },
      {
        "title": "Inloggen met DigiD",
        "prompt": "Vraag: Waarvoor gebruikt u DigiD vaak?",
        "options": [
          "Om veilig in te loggen bij overheid of zorg",
          "Om brood te snijden",
          "Om het weer te veranderen"
        ],
        "answer": "A. Om veilig in te loggen bij overheid of zorg."
      },
      {
        "title": "Bankgegevens beschermen",
        "prompt": "Vraag: Wat is veilig met uw pincode?",
        "options": [
          "De pincode op uw bankpas schrijven",
          "De pincode aan onbekenden vertellen",
          "De pincode geheim houden"
        ],
        "answer": "C. De pincode geheim houden."
      },
      {
        "title": "Ziekmelding op werk",
        "prompt": "Vraag: Wat doet u als u door ziekte niet kunt werken?",
        "options": [
          "U komt gewoon zonder overleg niet opdagen",
          "U meldt zich volgens de regels ziek bij uw werkgever",
          "U vraagt het aan de buschauffeur"
        ],
        "answer": "B. U meldt zich volgens de regels ziek bij uw werkgever."
      },
      {
        "title": "Noodnummer kennen",
        "prompt": "Vraag: Wat is het landelijke noodnummer in Nederland?",
        "options": [
          "112",
          "9292",
          "1400"
        ],
        "answer": "A. 112."
      },
      {
        "title": "Werk zoeken met hulp",
        "prompt": "Vraag: Welke organisatie kan helpen met informatie over werk en uitkering?",
        "options": [
          "De bioscoop",
          "De fietsenmaker",
          "UWV of de gemeente"
        ],
        "answer": "C. UWV of de gemeente."
      }
    ]
  },
  {
    "id": "grammar-word-order",
    "number": "06",
    "category": "Grammatica",
    "title": "Woordvolgorde en vragen",
    "goal": "Oefen de persoonsvorm op plaats twee, vraagzinnen en zinnen met omdat en als.",
    "meta": [
      "Woordvolgorde",
      "Vragen",
      "A2-zinnen"
    ],
    "exercises": [
      {
        "title": "Zinsvolgorde bij gemeente",
        "prompt": "Opdracht: Zet in goede volgorde: ik / naar de gemeente / morgen / ga",
        "answer": "Morgen ga ik naar de gemeente."
      },
      {
        "title": "Zinsvolgorde bij werkstart",
        "prompt": "Opdracht: Zet in goede volgorde: Violetta / haar laptop / na het ontbijt / opent",
        "answer": "Na het ontbijt opent Violetta haar laptop."
      },
      {
        "title": "Vraag over pasfoto",
        "prompt": "Opdracht: Maak een vraag: een pasfoto / meenemen / moet / ik",
        "answer": "Moet ik een pasfoto meenemen?"
      },
      {
        "title": "Waar-vraag voor lokaal",
        "prompt": "Opdracht: Maak een vraag: lokaal twaalf / waar / is",
        "answer": "Waar is lokaal twaalf?"
      },
      {
        "title": "Wanneer-vraag voor zwempas",
        "prompt": "Opdracht: Maak een vraag: mijn zwempas / af / wanneer / loopt",
        "answer": "Wanneer loopt mijn zwempas af?"
      },
      {
        "title": "Wie-vraag bij pakket",
        "prompt": "Opdracht: Maak een vraag met wie: heeft / mijn pakket / aangenomen",
        "answer": "Wie heeft mijn pakket aangenomen?"
      },
      {
        "title": "Modal met willen",
        "prompt": "Opdracht: Zet in goede volgorde: vrijdag / Nederlands oefenen / ik / wil",
        "answer": "Ik wil vrijdag Nederlands oefenen."
      },
      {
        "title": "Beleefde kunt-vraag",
        "prompt": "Opdracht: Maak een vraag: mijn afspraak / verzetten / kunt / u",
        "answer": "Kunt u mijn afspraak verzetten?"
      },
      {
        "title": "Omdat met afspraak",
        "prompt": "Opdracht: Maak een zin: Ik bel de gemeente. Ik kan dinsdag niet komen.",
        "answer": "Ik bel de gemeente omdat ik dinsdag niet kan komen."
      },
      {
        "title": "Als met bus",
        "prompt": "Opdracht: Maak af: Ik neem de volgende bus als de eerste bus ___",
        "answer": "Ik neem de volgende bus als de eerste bus te laat is."
      },
      {
        "title": "Zinsvolgorde met tijd",
        "prompt": "Opdracht: Zet in goede volgorde: de klant / terug / om half vier / belt",
        "answer": "Om half vier belt de klant terug."
      },
      {
        "title": "Vraag met hoe laat",
        "prompt": "Opdracht: Maak een vraag: de kookworkshop / hoe laat / begint",
        "answer": "Hoe laat begint de kookworkshop?"
      },
      {
        "title": "Plaats voor niet",
        "prompt": "Opdracht: Zet niet op de goede plaats: Ik kan dinsdag komen.",
        "answer": "Ik kan dinsdag niet komen."
      },
      {
        "title": "Bijzin met dat",
        "prompt": "Opdracht: Maak een zin: De mentor zegt. De ouderavond begint om zeven uur.",
        "answer": "De mentor zegt dat de ouderavond om zeven uur begint."
      },
      {
        "title": "Tijd achter onderwerp",
        "prompt": "Opdracht: Zet in goede volgorde: vandaag / muziekles / mijn dochter / heeft",
        "answer": "Mijn dochter heeft vandaag muziekles."
      },
      {
        "title": "Vraag met waarom",
        "prompt": "Opdracht: Maak een vraag: de huisarts / terug / waarom / belt",
        "answer": "Waarom belt de huisarts terug?"
      },
      {
        "title": "Inversie met vandaag",
        "prompt": "Opdracht: Begin met vandaag: Ik stuur de agenda naar de klant.",
        "answer": "Vandaag stuur ik de agenda naar de klant."
      },
      {
        "title": "Samengestelde zin met maar",
        "prompt": "Opdracht: Maak een zin: Ik wil zwemmen. Mijn pas is verlopen.",
        "answer": "Ik wil zwemmen, maar mijn pas is verlopen."
      }
    ]
  },
  {
    "id": "grammar-verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Werkwoorden: nu, perfectum en toekomst",
    "goal": "Oefen gewone werkwoorden in de tegenwoordige tijd, voltooid tegenwoordige tijd en toekomst.",
    "meta": [
      "Werkwoorden",
      "Perfectum",
      "Toekomst"
    ],
    "exercises": [
      {
        "title": "Ik bellen",
        "prompt": "Opdracht: Vul in: Ik ___ de huisarts om advies. (bellen)",
        "answer": "Ik bel de huisarts om advies."
      },
      {
        "title": "Zij maken",
        "prompt": "Opdracht: Vul in: Violetta ___ een planning voor haar werk. (maken)",
        "answer": "Violetta maakt een planning voor haar werk."
      },
      {
        "title": "Wij fietsen",
        "prompt": "Opdracht: Vul in: Wij ___ zondag door de bossen. (fietsen)",
        "answer": "Wij fietsen zondag door de bossen."
      },
      {
        "title": "Hij betalen",
        "prompt": "Opdracht: Vul in: Mijn man ___ de rekening met pin. (betalen)",
        "answer": "Mijn man betaalt de rekening met pin."
      },
      {
        "title": "U controleren",
        "prompt": "Opdracht: Vul in: ___ u mijn gegevens? (controleren)",
        "answer": "Controleert u mijn gegevens?"
      },
      {
        "title": "Perfectum gewerkt",
        "prompt": "Opdracht: Maak perfectum: Ik werk vandaag thuis.",
        "answer": "Ik heb vandaag thuis gewerkt."
      },
      {
        "title": "Perfectum gebeld",
        "prompt": "Opdracht: Maak perfectum: Zij belt de school.",
        "answer": "Zij heeft de school gebeld."
      },
      {
        "title": "Perfectum gefietst",
        "prompt": "Opdracht: Maak perfectum: Wij fietsen naar het station.",
        "answer": "Wij zijn naar het station gefietst."
      },
      {
        "title": "Perfectum gekocht",
        "prompt": "Opdracht: Maak perfectum: Ik koop groenten op de markt.",
        "answer": "Ik heb groenten op de markt gekocht."
      },
      {
        "title": "Perfectum geweest",
        "prompt": "Opdracht: Maak perfectum: Violetta is bij de bibliotheek.",
        "answer": "Violetta is bij de bibliotheek geweest."
      },
      {
        "title": "Morgenplan met gaan",
        "prompt": "Opdracht: Maak toekomst: Ik verleng morgen mijn zwempas.",
        "answer": "Ik ga morgen mijn zwempas verlengen."
      },
      {
        "title": "Toekomst met gaan werken",
        "prompt": "Opdracht: Maak toekomst: Zij schrijft vanavond een artikel.",
        "answer": "Zij gaat vanavond een artikel schrijven."
      },
      {
        "title": "Zullen in vraag",
        "prompt": "Opdracht: Maak een vraag met zullen: we / zaterdag / wandelen",
        "answer": "Zullen we zaterdag wandelen?"
      },
      {
        "title": "Verleden met was",
        "prompt": "Opdracht: Vul in: Gisteren ___ de bus te laat. (zijn)",
        "answer": "Gisteren was de bus te laat."
      },
      {
        "title": "Verleden met had",
        "prompt": "Opdracht: Vul in: Vorige week ___ ik rugpijn. (hebben)",
        "answer": "Vorige week had ik rugpijn."
      },
      {
        "title": "Hebben of zijn",
        "prompt": "Opdracht: Kies: Ik ___ naar Maastricht gereisd. (heb/ben)",
        "answer": "Ik ben naar Maastricht gereisd."
      },
      {
        "title": "De kinderen spelen",
        "prompt": "Opdracht: Vul in: Mijn dochters ___ na school buiten. (spelen)",
        "answer": "Mijn dochters spelen na school buiten."
      },
      {
        "title": "Werkwoord met jij",
        "prompt": "Opdracht: Vul in: ___ jij de agenda vandaag? (sturen)",
        "answer": "Stuur jij de agenda vandaag?"
      }
    ]
  },
  {
    "id": "grammar-modal-separable-reflexive",
    "number": "08",
    "category": "Grammatica",
    "title": "Modale, scheidbare en wederkerende werkwoorden",
    "goal": "Oefen kunnen, moeten, willen, mogen, scheidbare werkwoorden en zich-zinnen.",
    "meta": [
      "Modale werkwoorden",
      "Scheidbare werkwoorden",
      "Zich"
    ],
    "exercises": [
      {
        "title": "Moeten meenemen",
        "prompt": "Opdracht: Maak een zin met moeten: ik / pasfoto / meenemen",
        "answer": "Ik moet een pasfoto meenemen."
      },
      {
        "title": "Kunnen verzetten",
        "prompt": "Opdracht: Maak een zin met kunnen: de gemeente / de afspraak / verzetten",
        "answer": "De gemeente kan de afspraak verzetten."
      },
      {
        "title": "Willen oefenen",
        "prompt": "Opdracht: Maak een zin met willen: Violetta / spreken / oefenen",
        "answer": "Violetta wil spreken oefenen."
      },
      {
        "title": "Mogen parkeren",
        "prompt": "Opdracht: Maak een vraag met mogen: mag / ik / hier / parkeren",
        "answer": "Mag ik hier parkeren?"
      },
      {
        "title": "Zullen afspreken",
        "prompt": "Opdracht: Maak een vraag: om acht uur / afspreken / zullen / we",
        "answer": "Zullen we om acht uur afspreken?"
      },
      {
        "title": "Scheidbaar ophalen",
        "prompt": "Opdracht: Zet in goede vorm: Ik ___ het pakket vanavond ___. (ophalen)",
        "answer": "Ik haal het pakket vanavond op."
      },
      {
        "title": "Scheidbaar invullen",
        "prompt": "Opdracht: Zet in goede vorm: Violetta ___ het formulier online ___. (invullen)",
        "answer": "Violetta vult het formulier online in."
      },
      {
        "title": "Scheidbaar terugbellen",
        "prompt": "Opdracht: Zet in goede vorm: De assistente ___ morgen ___. (terugbellen)",
        "answer": "De assistente belt morgen terug."
      },
      {
        "title": "Scheidbaar meenemen",
        "prompt": "Opdracht: Zet in goede vorm: Mijn dochter ___ haar map ___. (meenemen)",
        "answer": "Mijn dochter neemt haar map mee."
      },
      {
        "title": "Perfectum opgehaald",
        "prompt": "Opdracht: Maak perfectum: Ik haal het vlees op.",
        "answer": "Ik heb het vlees opgehaald."
      },
      {
        "title": "Perfectum ingevuld",
        "prompt": "Opdracht: Maak perfectum: Zij vult de aanvraag in.",
        "answer": "Zij heeft de aanvraag ingevuld."
      },
      {
        "title": "Zich aanmelden",
        "prompt": "Opdracht: Vul in: Ik meld ___ aan voor de cursus. (me/mij)",
        "answer": "Ik meld mij aan voor de cursus."
      },
      {
        "title": "Zich voelen",
        "prompt": "Opdracht: Vul in: Violetta voelt ___ vandaag beter. (zich/haar)",
        "answer": "Violetta voelt zich vandaag beter."
      },
      {
        "title": "Zich vergissen",
        "prompt": "Opdracht: Maak een zin: me / in de tijd / ik / vergis",
        "answer": "Ik vergis me in de tijd."
      },
      {
        "title": "Moeten met infinitief",
        "prompt": "Opdracht: Zet in goede volgorde: de rekening / declareren / ik / moet",
        "answer": "Ik moet de rekening declareren."
      },
      {
        "title": "Kunnen met bijzin",
        "prompt": "Opdracht: Maak een zin: Ik kan niet komen. Ik ben ziek.",
        "answer": "Ik kan niet komen omdat ik ziek ben."
      },
      {
        "title": "Willen vragen",
        "prompt": "Opdracht: Maak een vraag: mij / helpen / wilt / u",
        "answer": "Wilt u mij helpen?"
      },
      {
        "title": "Scheidbaar klaarzetten",
        "prompt": "Opdracht: Zet in goede vorm: Ik ___ mijn tas voor het zwemmen ___. (klaarzetten)",
        "answer": "Ik zet mijn tas voor het zwemmen klaar."
      }
    ]
  },
  {
    "id": "grammar-nouns-pronouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Zelfstandige naamwoorden, lidwoorden, bijvoeglijke naamwoorden en voornaamwoorden",
    "goal": "Oefen de/het, meervoud, bijvoeglijke naamwoorden en persoonlijke woorden.",
    "meta": [
      "Lidwoorden",
      "Meervoud",
      "Voornaamwoorden"
    ],
    "exercises": [
      {
        "title": "De gemeente",
        "prompt": "Opdracht: Kies de of het: ___ gemeente helpt met adressen.",
        "answer": "De gemeente helpt met adressen."
      },
      {
        "title": "Het paspoort",
        "prompt": "Opdracht: Kies de of het: ___ paspoort ligt in mijn tas.",
        "answer": "Het paspoort ligt in mijn tas."
      },
      {
        "title": "De afspraak",
        "prompt": "Opdracht: Kies de of het: ___ afspraak is om half vier.",
        "answer": "De afspraak is om half vier."
      },
      {
        "title": "Het formulier",
        "prompt": "Opdracht: Kies de of het: ___ formulier staat online.",
        "answer": "Het formulier staat online."
      },
      {
        "title": "Meervoud afspraak",
        "prompt": "Opdracht: Maak meervoud: een afspraak",
        "answer": "afspraken"
      },
      {
        "title": "Meervoud dochter",
        "prompt": "Opdracht: Maak meervoud: een dochter",
        "answer": "dochters"
      },
      {
        "title": "Meervoud rekening",
        "prompt": "Opdracht: Maak meervoud: een rekening",
        "answer": "rekeningen"
      },
      {
        "title": "Meervoud bus",
        "prompt": "Opdracht: Maak meervoud: een bus",
        "answer": "bussen"
      },
      {
        "title": "Bijvoeglijk groene",
        "prompt": "Opdracht: Vul in: Ik koop ___ groenten. (groen)",
        "answer": "Ik koop groene groenten."
      },
      {
        "title": "Bijvoeglijk rustige",
        "prompt": "Opdracht: Vul in: Wij vragen een ___ kamer. (rustig)",
        "answer": "Wij vragen een rustige kamer."
      },
      {
        "title": "Bijvoeglijk nieuw",
        "prompt": "Opdracht: Vul in: Ik heb een ___ pas nodig. (nieuw)",
        "answer": "Ik heb een nieuwe pas nodig."
      },
      {
        "title": "Deze of dit paspoort",
        "prompt": "Opdracht: Kies: deze/dit paspoort is van mij.",
        "answer": "Dit paspoort is van mij."
      },
      {
        "title": "Deze of dit rekening",
        "prompt": "Opdracht: Kies: deze/dit rekening moet ik betalen.",
        "answer": "Deze rekening moet ik betalen."
      },
      {
        "title": "Mijn of mij",
        "prompt": "Opdracht: Kies: Dit is ___ zwempas. (mijn/mij)",
        "answer": "Dit is mijn zwempas."
      },
      {
        "title": "Hem of hij",
        "prompt": "Opdracht: Kies: Ik bel ___ morgen terug. (hem/hij)",
        "answer": "Ik bel hem morgen terug."
      },
      {
        "title": "Ons of wij",
        "prompt": "Opdracht: Kies: ___ gezin gaat naar Maastricht. (ons/wij)",
        "answer": "Ons gezin gaat naar Maastricht."
      },
      {
        "title": "Hun of zij",
        "prompt": "Opdracht: Kies: ___ halen het pakket op. (hun/zij)",
        "answer": "Zij halen het pakket op."
      },
      {
        "title": "Haar map meenemen",
        "prompt": "Opdracht: Vul in: Mijn dochter neemt ___ map mee.",
        "answer": "Mijn dochter neemt haar map mee."
      }
    ]
  },
  {
    "id": "grammar-negation-prepositions-connectors",
    "number": "10",
    "category": "Grammatica",
    "title": "Ontkenning, voorzetsels, verbindingswoorden en vraagvormen",
    "goal": "Oefen niet/geen, voorzetsels en korte verbindingen tussen zinnen.",
    "meta": [
      "Niet en geen",
      "Voorzetsels",
      "Verbindingswoorden"
    ],
    "exercises": [
      {
        "title": "Ontkenning met afspraak",
        "prompt": "Opdracht: Maak negatief: Ik heb een afspraak.",
        "answer": "Ik heb geen afspraak."
      },
      {
        "title": "Niet dinsdag",
        "prompt": "Opdracht: Maak negatief: Ik kan dinsdag komen.",
        "answer": "Ik kan dinsdag niet komen."
      },
      {
        "title": "Geen klantenkaart",
        "prompt": "Opdracht: Maak negatief: Ik heb een klantenkaart.",
        "answer": "Ik heb geen klantenkaart."
      },
      {
        "title": "Niet lang wachten",
        "prompt": "Opdracht: Maak negatief: De bus wacht lang.",
        "answer": "De bus wacht niet lang."
      },
      {
        "title": "Voorzetsel bij gemeente",
        "prompt": "Opdracht: Vul in: Ik ben ___ de gemeente voor mijn paspoort. (bij/in/op)",
        "answer": "Ik ben bij de gemeente voor mijn paspoort."
      },
      {
        "title": "Voorzetsel naar school",
        "prompt": "Opdracht: Vul in: Mijn dochter gaat ___ school. (naar/op/van)",
        "answer": "Mijn dochter gaat naar school."
      },
      {
        "title": "Voorzetsel in de app",
        "prompt": "Opdracht: Vul in: Ik declareer de rekening ___ de zorgapp. (in/aan/onder)",
        "answer": "Ik declareer de rekening in de zorgapp."
      },
      {
        "title": "Voorzetsel om acht uur",
        "prompt": "Opdracht: Vul in: De sportles begint ___ acht uur. (om/op/met)",
        "answer": "De sportles begint om acht uur."
      },
      {
        "title": "En met familie",
        "prompt": "Opdracht: Maak een zin: Ik kook groenten. Ik bak kip.",
        "answer": "Ik kook groenten en ik bak kip."
      },
      {
        "title": "Maar met pas verlopen",
        "prompt": "Opdracht: Maak een zin: Ik wil zwemmen. Mijn pas is verlopen.",
        "answer": "Ik wil zwemmen, maar mijn pas is verlopen."
      },
      {
        "title": "Want met rugpijn",
        "prompt": "Opdracht: Maak een zin: Ik bel de huisarts. Ik heb rugpijn.",
        "answer": "Ik bel de huisarts, want ik heb rugpijn."
      },
      {
        "title": "Dus met omleiding",
        "prompt": "Opdracht: Maak een zin: De bus is later. Ik wacht bij de halte.",
        "answer": "De bus is later, dus ik wacht bij de halte."
      },
      {
        "title": "Omdat met declareren",
        "prompt": "Opdracht: Maak een zin: Ik maak een foto. Ik wil de rekening declareren.",
        "answer": "Ik maak een foto omdat ik de rekening wil declareren."
      },
      {
        "title": "Als met regen",
        "prompt": "Opdracht: Maak een zin: Het regent. Ik neem de bus.",
        "answer": "Als het regent, neem ik de bus."
      },
      {
        "title": "Keuze met thee of water",
        "prompt": "Opdracht: Maak een zin: Wilt u thee? Wilt u water?",
        "answer": "Wilt u thee of wilt u water?"
      },
      {
        "title": "Daarom met oefenen",
        "prompt": "Opdracht: Maak een zin: Luisteren is moeilijk. Ik oefen elke dag.",
        "answer": "Luisteren is moeilijk. Daarom oefen ik elke dag."
      },
      {
        "title": "Welke-bus-vraag",
        "prompt": "Opdracht: Maak een vraag met welke: bus / gaat / naar Eindhoven",
        "answer": "Welke bus gaat naar Eindhoven?"
      },
      {
        "title": "Hoeveel-kosten-vraag",
        "prompt": "Opdracht: Maak een vraag met hoeveel: kost / de zwempas",
        "answer": "Hoeveel kost de zwempas?"
      }
    ]
  }
];

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
  const key = `v009-writing-answer-${index}-${exercise.title}`;
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
