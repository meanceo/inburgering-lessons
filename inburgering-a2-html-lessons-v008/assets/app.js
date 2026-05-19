const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte praktische teksten. Zoek de datum, plaats, reden en actie.",
    "meta": [
      "A2 examen",
      "Praktische teksten",
      "Nieuwe v8-opgaven"
    ],
    "exercises": [
      {
        "title": "Uittreksel voor rijbewijs",
        "prompt": "Uw uittreksel uit de basisregistratie ligt klaar bij de gemeente. Kom vrijdag tussen 09.00 en 12.00 uur naar balie 3. Neem uw paspoort en de betaalkaart mee.",
        "questions": [
          "Vraag 1: Welk document ligt klaar bij de gemeente?",
          "Vraag 2: Op welke dag en tijd kunt u naar balie 3?",
          "Vraag 3: Wat neemt u mee naar balie 3?"
        ],
        "answer": "Het uittreksel ligt klaar. U kunt vrijdag tussen 09.00 en 12.00 uur naar balie 3. U neemt uw paspoort en betaalkaart mee."
      },
      {
        "title": "E-consult over bloeduitslag",
        "prompt": "De huisarts heeft een bericht in het patientenportaal gezet. Uw bloeduitslag is goed. Als u nog moe blijft, kunt u volgende week een telefonisch consult aanvragen.",
        "questions": [
          "Vraag 1: Waar staat het bericht van de huisarts?",
          "Vraag 2: Wat zegt de huisarts over de bloeduitslag?",
          "Vraag 3: Wat kunt u doen als u moe blijft?"
        ],
        "answer": "Het bericht staat in het patientenportaal. De bloeduitslag is goed. Als u moe blijft, kunt u volgende week een telefonisch consult aanvragen."
      },
      {
        "title": "Studiedag met opvang",
        "prompt": "Volgende maandag hebben de kinderen een studiedag. De school is dicht, maar de opvang is open vanaf 08.00 uur. Geef uw kind lunch en gymschoenen mee.",
        "questions": [
          "Vraag 1: Wanneer hebben de kinderen een studiedag?",
          "Vraag 2: Vanaf hoe laat is de opvang open?",
          "Vraag 3: Wat geeft u uw kind mee?"
        ],
        "answer": "De kinderen hebben volgende maandag een studiedag. De opvang is open vanaf 08.00 uur. U geeft lunch en gymschoenen mee."
      },
      {
        "title": "Seizoenskrat ophalen",
        "prompt": "Uw seizoenskrat met groenten is donderdag bezorgd bij het afhaalpunt. Haal de krat uiterlijk om 19.00 uur op. Neem de lege krat van vorige week mee terug.",
        "questions": [
          "Vraag 1: Wat is donderdag bezorgd bij het afhaalpunt?",
          "Vraag 2: Hoe laat haalt u de krat uiterlijk op?",
          "Vraag 3: Wat brengt u mee terug?"
        ],
        "answer": "De seizoenskrat met groenten is bezorgd. U haalt de krat uiterlijk om 19.00 uur op. U brengt de lege krat van vorige week mee terug."
      },
      {
        "title": "Tijdelijke halte bij de markt",
        "prompt": "De buurtbus stopt deze week niet bij halte Kerkpad. Gebruik de tijdelijke halte bij de markt. De vertrektijden blijven hetzelfde.",
        "questions": [
          "Vraag 1: Bij welke halte stopt de buurtbus deze week niet?",
          "Vraag 2: Welke tijdelijke halte gebruikt u?",
          "Vraag 3: Wat blijft hetzelfde?"
        ],
        "answer": "De buurtbus stopt niet bij halte Kerkpad. U gebruikt de tijdelijke halte bij de markt. De vertrektijden blijven hetzelfde."
      },
      {
        "title": "Werkplek reserveren",
        "prompt": "In het dorpshuis kunt u dinsdag een stille werkplek reserveren. De plek heeft wifi en een stopcontact. Bel voor 16.00 uur als u wilt annuleren.",
        "questions": [
          "Vraag 1: Waar kunt u dinsdag een stille werkplek reserveren?",
          "Vraag 2: Welke twee voorzieningen heeft de werkplek?",
          "Vraag 3: Wanneer belt u als u wilt annuleren?"
        ],
        "answer": "U kunt in het dorpshuis een werkplek reserveren. De plek heeft wifi en een stopcontact. Bij annuleren belt u voor 16.00 uur."
      },
      {
        "title": "Rustige banen in zwembad",
        "prompt": "Banenzwemmen is deze maand extra rustig op woensdag tussen 13.00 en 14.30 uur. Reserveer vooraf online. In de schoolvakantie geldt dit rooster niet.",
        "questions": [
          "Vraag 1: Op welke dag is banenzwemmen extra rustig?",
          "Vraag 2: In welk tijdvak kunt u rustig zwemmen?",
          "Vraag 3: Wanneer geldt dit rooster niet?"
        ],
        "answer": "Banenzwemmen is extra rustig op woensdag. Het tijdvak is tussen 13.00 en 14.30 uur. In de schoolvakantie geldt het rooster niet."
      },
      {
        "title": "Remmen laten nakijken",
        "prompt": "De fietsenmaker controleert uw remmen morgen om 10.15 uur. Zet uw fiets voor de winkel in het rek met reparatiekaart. De controle duurt ongeveer twintig minuten.",
        "questions": [
          "Vraag 1: Wat controleert de fietsenmaker morgen?",
          "Vraag 2: Waar zet u de fiets neer?",
          "Vraag 3: Hoe lang duurt de controle ongeveer?"
        ],
        "answer": "De fietsenmaker controleert de remmen. U zet de fiets voor de winkel in het rek met reparatiekaart. De controle duurt ongeveer twintig minuten."
      },
      {
        "title": "Container na lediging terugzetten",
        "prompt": "De buren vragen of u hun groene container vrijdag na de lediging terugzet. Zij zijn de hele dag weg. De container staat naast de schuur.",
        "questions": [
          "Vraag 1: Wat vragen de buren aan u?",
          "Vraag 2: Waarom kunnen de buren het zelf niet doen?",
          "Vraag 3: Waar staat de container?"
        ],
        "answer": "De buren vragen of u de groene container terugzet. Zij zijn de hele dag weg. De container staat naast de schuur."
      },
      {
        "title": "Lekkage onder het raam",
        "prompt": "Meld lekkage onder het slaapkamerraam via het reparatieformulier. Voeg een foto toe. De woningcorporatie belt binnen twee werkdagen voor een afspraak.",
        "questions": [
          "Vraag 1: Waar zit de lekkage?",
          "Vraag 2: Wat voegt u toe aan het reparatieformulier?",
          "Vraag 3: Binnen hoeveel werkdagen belt de woningcorporatie?"
        ],
        "answer": "De lekkage zit onder het slaapkamerraam. U voegt een foto toe. De woningcorporatie belt binnen twee werkdagen."
      },
      {
        "title": "Nieuwe zorgpas per post",
        "prompt": "Uw nieuwe zorgpas komt binnen vijf werkdagen per post. Tot die tijd kunt u de digitale pas in de app gebruiken. Controleer of uw achternaam goed staat.",
        "questions": [
          "Vraag 1: Wanneer komt de nieuwe zorgpas per post?",
          "Vraag 2: Welke pas kunt u tot die tijd gebruiken?",
          "Vraag 3: Wat moet u controleren?"
        ],
        "answer": "De zorgpas komt binnen vijf werkdagen. Tot die tijd kunt u de digitale pas gebruiken. U controleert of uw achternaam goed staat."
      },
      {
        "title": "Boek apart gelegd",
        "prompt": "De bibliotheek heeft het gereserveerde boek apart gelegd tot zaterdag. Neem uw bibliotheekpas mee. Na zaterdag gaat het boek naar de volgende lener.",
        "questions": [
          "Vraag 1: Tot wanneer ligt het gereserveerde boek apart?",
          "Vraag 2: Wat gebruikt u bij het uitlenen?",
          "Vraag 3: Wat gebeurt er na zaterdag?"
        ],
        "answer": "Het boek ligt apart tot zaterdag. U neemt uw bibliotheekpas mee. Na zaterdag gaat het boek naar de volgende lener."
      },
      {
        "title": "Familiedag in Eindhoven",
        "prompt": "De familie komt zondag naar Eindhoven. De lunch begint om 12.30 uur bij tante Maria. Violetta neemt een schaal warme groenten mee.",
        "questions": [
          "Vraag 1: Naar welke stad komt de familie zondag?",
          "Vraag 2: Hoe laat begint de lunch?",
          "Vraag 3: Wat neemt Violetta mee?"
        ],
        "answer": "De familie komt naar Eindhoven. De lunch begint om 12.30 uur. Violetta neemt een schaal warme groenten mee."
      },
      {
        "title": "Toestemming voor schoolreis",
        "prompt": "Voor de schoolreis moet u vrijdag toestemming geven in de ouderapp. Zonder toestemming kan uw dochter niet mee. De bus vertrekt dinsdag om 08.20 uur.",
        "questions": [
          "Vraag 1: Waar geeft u toestemming voor de schoolreis?",
          "Vraag 2: Wat gebeurt er zonder toestemming?",
          "Vraag 3: Hoe laat vertrekt de bus dinsdag?"
        ],
        "answer": "U geeft toestemming in de ouderapp. Zonder toestemming kan uw dochter niet mee. De bus vertrekt dinsdag om 08.20 uur."
      },
      {
        "title": "Proefles krachttraining",
        "prompt": "De sportclub biedt zaterdag een gratis proefles krachttraining aan. De les is voor beginners. Meld u bij de trainer naast de blauwe mat.",
        "questions": [
          "Vraag 1: Welke proefles biedt de sportclub zaterdag aan?",
          "Vraag 2: Voor wie is de les bedoeld?",
          "Vraag 3: Waar meldt u zich bij de trainer?"
        ],
        "answer": "De sportclub biedt een proefles krachttraining aan. De les is voor beginners. U meldt zich naast de blauwe mat."
      },
      {
        "title": "Fiets meenemen in de trein",
        "prompt": "U mag uw fiets buiten de spits meenemen in de trein. Koop vooraf een fietsticket. In de trein zet u de fiets op de plek met het fietssymbool.",
        "questions": [
          "Vraag 1: Wanneer mag u uw fiets meenemen in de trein?",
          "Vraag 2: Wat koopt u vooraf?",
          "Vraag 3: Waar zet u de fiets in de trein?"
        ],
        "answer": "U mag uw fiets buiten de spits meenemen. U koopt vooraf een fietsticket. U zet de fiets op de plek met het fietssymbool."
      },
      {
        "title": "Bestelling bij kookwinkel",
        "prompt": "Uw grillpan is aangekomen bij de kookwinkel. U kunt de pan ophalen met het bestelnummer. De winkel bewaart de bestelling zeven dagen.",
        "questions": [
          "Vraag 1: Wat is aangekomen bij de kookwinkel?",
          "Vraag 2: Waarmee kunt u de pan ophalen?",
          "Vraag 3: Hoe lang bewaart de winkel de bestelling?"
        ],
        "answer": "De grillpan is aangekomen. U kunt de pan ophalen met het bestelnummer. De winkel bewaart de bestelling zeven dagen."
      },
      {
        "title": "Mini-examen tuinfeestmelding",
        "prompt": "In de brief staat: meldt u een tuinfeest uiterlijk twee weken van tevoren via de website van de gemeente.",
        "questions": [
          "Vraag 1: Kies het goede antwoord: A. U hoeft een tuinfeest nooit te melden. B. U meldt het tuinfeest uiterlijk twee weken vooraf online. C. U meldt het tuinfeest pas na afloop."
        ],
        "answer": "B. U meldt het tuinfeest uiterlijk twee weken vooraf online."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf korte formulieren, e-mails en berichten met eenvoudige Nederlandse zinnen.",
    "meta": [
      "Schriftelijk examen",
      "Formulieren en berichten",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Formulier voor wandelclub",
        "prompt": "Vul een kort formulier in voor de wandelclub. Schrijf uw naam, telefoonnummer, welke avond u kunt en waarom u wilt meedoen.",
        "answer": "Naam: Violetta Bonenkamp\nTelefoon: 06 12345678\nAvond: woensdagavond\nIk wil wandelen en Nederlands praten."
      },
      {
        "title": "Uittreksel aanvragen",
        "prompt": "Schrijf een e-mail aan de gemeente. U heeft een uittreksel nodig voor uw rijbewijs. Vraag wanneer u het kunt ophalen.",
        "answer": "Beste gemeente,\n\nIk heb een uittreksel nodig voor mijn rijbewijs. Wanneer kan ik het uittreksel ophalen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "E-consult over hoesten",
        "prompt": "Schrijf een bericht aan de huisarts. U hoest al een week en u wilt weten of u moet langskomen.",
        "answer": "Beste huisarts,\n\nIk hoest al een week. Moet ik langskomen voor controle?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Tijd voor oudergesprek",
        "prompt": "Schrijf in de ouderapp. U kunt dinsdag niet naar het oudergesprek en vraagt om een andere tijd.",
        "answer": "Beste mentor,\n\nIk kan dinsdag niet naar het oudergesprek komen. Kunt u een andere tijd voorstellen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Yoghurt te warm bezorgd",
        "prompt": "Schrijf een korte klacht aan de supermarkt. De yoghurt was te warm bij de bezorging. Vraag om een oplossing.",
        "answer": "Beste klantenservice,\n\nDe yoghurt was te warm bij de bezorging. Kunt u dit oplossen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Afspraak bij fietsenmaker",
        "prompt": "Schrijf aan de fietsenmaker. Uw remmen maken geluid. Vraag of u vrijdag langs kunt komen.",
        "answer": "Beste fietsenmaker,\n\nMijn remmen maken geluid. Kan ik vrijdag langskomen voor controle?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over rustig zwemmen",
        "prompt": "Schrijf aan het zwembad. Vraag op welke middag het rustig is en of u een baan moet reserveren.",
        "answer": "Beste medewerker,\n\nOp welke middag is het rustig om te zwemmen? Moet ik een baan reserveren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Container voor de buren",
        "prompt": "Schrijf een bericht aan uw buren. Zeg dat u hun groene container vrijdag terugzet en vraag waar de container staat.",
        "answer": "Hoi buren,\n\nIk zet jullie groene container vrijdag terug. Waar staat de container nu?\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Vier zinnen over thuiswerken",
        "prompt": "Schrijf vier korte zinnen over uw werkdag thuis. Vertel waar u werkt, wat u doet, wanneer u pauze neemt en wie thuis is.",
        "answer": "Ik werk thuis aan mijn bureau. Ik bel klanten en schrijf artikelen. Om twaalf uur neem ik pauze. Mijn man en dochters zijn later thuis."
      },
      {
        "title": "Familielunch afspreken",
        "prompt": "Schrijf aan uw familie. U komt zondag naar de lunch, u neemt warme groenten mee en u vraagt hoeveel mensen er komen.",
        "answer": "Hoi allemaal,\n\nIk kom zondag graag naar de lunch. Ik neem warme groenten mee. Hoeveel mensen komen er?\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Klant om nieuwe beltijd vragen",
        "prompt": "Schrijf een werkbericht aan een klant. U kunt om 10.00 uur niet bellen en vraagt of 11.30 uur kan.",
        "answer": "Beste klant,\n\nIk kan vandaag om 10.00 uur niet bellen. Kan ons gesprek om 11.30 uur?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Naam op zorgpas controleren",
        "prompt": "Schrijf aan de zorgverzekeraar. Uw nieuwe zorgpas is onderweg. Vraag hoe u uw achternaam kunt controleren.",
        "answer": "Beste meneer/mevrouw,\n\nMijn nieuwe zorgpas is onderweg. Hoe kan ik controleren of mijn achternaam goed staat?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Boek langer houden",
        "prompt": "Schrijf aan de bibliotheek. U wilt een boek een week langer houden en vraagt of verlengen mogelijk is.",
        "answer": "Beste bibliotheek,\n\nIk wil mijn boek graag een week langer houden. Kan ik het boek verlengen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Kniepijn na training",
        "prompt": "Schrijf aan de sporttrainer. U heeft kniepijn na de training en komt zaterdag niet naar de les.",
        "answer": "Hoi trainer,\n\nIk heb kniepijn na de training. Daarom kom ik zaterdag niet naar de les.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Hotel met fietsenstalling",
        "prompt": "Schrijf een e-mail aan een hotel. U reist met uw gezin en vraagt om een kamer voor vier personen en een fietsenstalling.",
        "answer": "Beste hotel,\n\nWij reizen met ons gezin. Heeft u een kamer voor vier personen en een fietsenstalling?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Fietsticket vragen",
        "prompt": "Schrijf aan de klantenservice van de trein. U wilt uw fiets meenemen en vraagt welk ticket u nodig heeft.",
        "answer": "Beste klantenservice,\n\nIk wil mijn fiets meenemen in de trein. Welk ticket heb ik daarvoor nodig?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Gezonde traktatie op school",
        "prompt": "Schrijf aan de leerkracht. Uw dochter wil een gezonde traktatie meenemen. Vraag of fruit en kleine wraps goed zijn.",
        "answer": "Beste leerkracht,\n\nMijn dochter wil een gezonde traktatie meenemen. Zijn fruit en kleine wraps goed?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vijf zinnen over podcastwandeling",
        "prompt": "Schrijf vijf korte zinnen over een wandeling met een podcast. Gebruik de woorden park, oortjes, AI, energie en thuis.",
        "answer": "Ik wandel door het park. Ik draag oortjes. Ik luister naar een podcast over AI. Daarna heb ik meer energie. Om acht uur ben ik weer thuis."
      }
    ]
  },
  {
    "id": "speaking",
    "number": "03",
    "category": "Examen",
    "title": "Spreken",
    "goal": "Spreek hardop in korte, duidelijke zinnen. Oefen persoonlijke antwoorden en praktische situaties.",
    "meta": [
      "Mondeling examen",
      "Korte antwoorden",
      "Met afbeeldingen"
    ],
    "exercises": [
      {
        "title": "AI-examinator met korte beurt",
        "prompt": "Start een spraaktool en zeg: stel mij acht A2-vragen. Laat mij steeds in twee zinnen antwoorden.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel acht korte vragen over gemeente, zorg, school, werk, vervoer, sport, buren en familie. Wacht na elke vraag op mijn antwoord."
      },
      {
        "title": "Naam en woonplaats noemen",
        "prompt": "Vertel uw naam, leeftijd, woonplaats en gezin.",
        "answer": "Mijn naam is Violetta Bonenkamp. Ik ben 44 jaar en woon in Sterksel. Ik ben getrouwd en heb twee dochters."
      },
      {
        "title": "Route naar het station",
        "prompt": "Vertel hoe u van Sterksel naar het station gaat.",
        "answer": "Ik fiets eerst naar de bushalte. Daarna neem ik de bus of trein naar het station."
      },
      {
        "title": "Ondernemen vanuit huis",
        "prompt": "Vertel wat u doet als ondernemer thuis.",
        "answer": "Ik werk met mijn laptop. Ik praat met klanten, maak plannen en schrijf artikelen over startups en AI."
      },
      {
        "title": "Uittreksel vragen bij gemeente",
        "prompt": "U bent bij de gemeente. Vraag om hulp met een uittreksel.",
        "answer": "Goedemorgen, ik heb een uittreksel nodig. Kunt u mij helpen met de aanvraag?"
      },
      {
        "title": "Hooikoorts bespreken",
        "prompt": "U belt de huisarts. Vertel dat u last heeft van hooikoorts en vraag wat u kunt doen.",
        "answer": "Goedemorgen, ik heb veel last van hooikoorts. Kunt u mij zeggen wat ik kan doen?"
      },
      {
        "title": "Vraag aan mentor via app",
        "prompt": "Vraag de mentor of uw dochter haar huiswerk goed maakt.",
        "answer": "Goedemiddag, kunt u mij vertellen of mijn dochter haar huiswerk goed maakt?"
      },
      {
        "title": "Gezond ontbijt beschrijven",
        "prompt": "Vertel wat u eet bij een gezond ontbijt.",
        "answer": "Ik eet yoghurt met fruit en noten. Soms neem ik ook gekookte eieren en drink ik thee."
      },
      {
        "title": "Product ruilen in supermarkt",
        "prompt": "U heeft het verkeerde product gekocht. Vraag bij de supermarkt of u het mag ruilen.",
        "answer": "Goedemiddag, ik heb per ongeluk het verkeerde product gekocht. Mag ik het ruilen?"
      },
      {
        "title": "Afvalbakken met buren afstemmen",
        "prompt": "Vraag uw buren of u hun afvalbak vrijdag mag verplaatsen.",
        "answer": "Hoi, mag ik jullie afvalbak vrijdag na het ophalen weer naast de schuur zetten?"
      },
      {
        "title": "Fietsen met uw man plannen",
        "prompt": "Maak een korte afspraak met uw man om te fietsen.",
        "answer": "Zullen we zaterdag om elf uur fietsen? We kunnen rustig naar de heide rijden."
      },
      {
        "title": "Bus gemist uitleggen",
        "prompt": "Vertel aan uw dochter dat u de bus heeft gemist en later komt.",
        "answer": "Ik heb de bus gemist. Ik neem de volgende bus en ben ongeveer twintig minuten later."
      },
      {
        "title": "Baan reserveren bij zwembad",
        "prompt": "Vraag aan het zwembad of u woensdagmiddag een baan kunt reserveren.",
        "answer": "Goedemiddag, kan ik woensdagmiddag een baan reserveren om rustig te zwemmen?"
      },
      {
        "title": "Digitale zorgpas tonen",
        "prompt": "Leg aan de assistente uit dat uw gewone zorgpas nog niet is aangekomen.",
        "answer": "Mijn nieuwe zorgpas is nog niet aangekomen. Ik kan wel mijn digitale zorgpas in de app laten zien."
      },
      {
        "title": "Stille ruimte in bibliotheek",
        "prompt": "Vraag in de bibliotheek waar u rustig kunt werken.",
        "answer": "Goedemiddag, waar kan ik rustig werken met mijn laptop?"
      },
      {
        "title": "Podcast over technologie",
        "prompt": "Vertel kort waarom u graag naar podcasts over technologie luistert.",
        "answer": "Ik leer nieuwe ideeen over AI en bedrijven. Tijdens het wandelen kan ik rustig luisteren."
      },
      {
        "title": "Reis met dochters",
        "prompt": "Vertel wat u meeneemt als u met uw dochters een dag op reis gaat.",
        "answer": "Ik neem water, broodjes, fruit en onze tickets mee. Ook neem ik een powerbank voor mijn telefoon mee."
      },
      {
        "title": "Artikelidee opschrijven",
        "prompt": "Vertel hoe u een nieuw artikelidee bewaart.",
        "answer": "Ik schrijf het idee in mijn notitieapp. Daarna maak ik een korte lijst met punten."
      },
      {
        "title": "Sportplan voor de week",
        "prompt": "Vertel welke sport u deze week wilt doen.",
        "answer": "Deze week wil ik twee keer zwemmen, een keer krachttraining doen en veel wandelen."
      },
      {
        "title": "Nummertje bij het gemeentehuis",
        "prompt": "Kijk naar de afbeelding. Beschrijf waar u bent en wat u gaat vragen.",
        "answer": "Ik ben in het gemeentehuis en wacht met een nummertje. Ik vraag straks een uittreksel aan.",
        "image": "images/speaking/v008-speaking-town-hall-number-ticket-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in the Netherlands. Scene: municipal service hall with ticket-number dispenser, simple counter, chairs, forms on a table, calm daylight. No readable text, no logos, no watermark."
      },
      {
        "title": "Mandje bij de kassa",
        "prompt": "Kijk naar de afbeelding. Vertel wat u koopt en wat u aan de medewerker vraagt.",
        "answer": "Ik heb een mandje met yoghurt, groenten en brood. Ik vraag of ik een product mag ruilen.",
        "image": "images/speaking/v008-speaking-supermarket-checkout-basket-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch supermarket checkout area. Scene: shopping basket with yoghurt, vegetables, bread, and receipt near a service counter. No readable text, no brand logos, no watermark."
      },
      {
        "title": "Wachtkamer van de huisarts",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u bij de huisarts bent.",
        "answer": "Ik zit in de wachtkamer van de huisarts. Ik heb last van hooikoorts en wil advies vragen.",
        "image": "images/speaking/v008-speaking-gp-waiting-room-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in the Netherlands. Scene: modest GP waiting room with chairs, plant, coat rack, reception window, tissues on a small table. No readable text, no logos, no watermark."
      },
      {
        "title": "Fiets op reparatiestandaard",
        "prompt": "Kijk naar de afbeelding. Vertel wat er met de fiets gebeurt.",
        "answer": "De fiets staat bij de fietsenmaker. De remmen worden gecontroleerd, want ze maken geluid.",
        "image": "images/speaking/v008-speaking-bike-repair-brakes-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a small Dutch bicycle repair shop. Scene: city bike on repair stand, visible brake cables, toolbox, pump, clean workshop. No readable text, no logos, no watermark."
      },
      {
        "title": "Notities voor AI-artikel",
        "prompt": "Kijk naar de afbeelding. Vertel hoe u thuis aan een artikel werkt.",
        "answer": "Ik werk thuis aan mijn bureau. Ik maak notities over AI en schrijf daarna een artikel.",
        "image": "images/speaking/v008-speaking-desk-ai-article-notes-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a home office in the Netherlands. Scene: laptop, notebook with abstract non-readable lines, coffee, healthy snack, tidy desk, daylight. No readable text, no logos, no watermark."
      },
      {
        "title": "Gezin bij de boekenplank",
        "prompt": "Kijk naar de afbeelding. Vertel wat uw gezin in de bibliotheek doet.",
        "answer": "Mijn gezin zoekt boeken in de bibliotheek. Mijn dochters kiezen een boek en ik vraag waar de stille ruimte is.",
        "image": "images/speaking/v008-speaking-family-library-books-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch public library. Scene: family-friendly library aisle with book shelves, table, library cards, cozy daylight, no close-up faces. No readable text, no logos, no watermark."
      },
      {
        "title": "Medicijn bij apotheek vragen",
        "prompt": "Vraag bij de apotheek of uw medicijn al klaar ligt.",
        "answer": "Goedemiddag, ik kom mijn medicijn ophalen. Kunt u controleren of het al klaar ligt?"
      },
      {
        "title": "Kort schoolbericht inspreken",
        "prompt": "Spreek een bericht in voor school: uw dochter is ziek en komt vandaag niet.",
        "answer": "Goedemorgen, mijn dochter is vandaag ziek. Zij komt niet naar school."
      },
      {
        "title": "Morgen verder oefenen",
        "prompt": "Vertel wat vandaag goed ging en wat u morgen nog wilt oefenen.",
        "answer": "Vandaag ging schrijven beter. Morgen wil ik luisteren oefenen en sneller de belangrijkste woorden vinden."
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
      "Praktische situaties"
    ],
    "exercises": [
      {
        "title": "AI-luisterronde met tijden",
        "prompt": "Start een spraaktool en vraag om een kort A2-luisterbericht met twee tijden en een duidelijke actie.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor met twee tijden en een actie. Stel daarna drie vragen."
      },
      {
        "title": "Uittreksel ligt klaar",
        "audio": "audio/v008-listening-01-gemeente-uittreksel-klaar.mp3",
        "prompt": "Mevrouw Bonenkamp, uw uittreksel ligt klaar bij balie drie. U kunt vrijdag tussen negen en twaalf uur langskomen. Neem uw paspoort mee.",
        "questions": [
          "Vraag 1: Wat ligt klaar bij balie drie?",
          "Vraag 2: Wanneer kan mevrouw Bonenkamp langskomen?",
          "Vraag 3: Wat neemt zij mee naar de gemeente?"
        ],
        "answer": "Het uittreksel ligt klaar. Zij kan vrijdag tussen negen en twaalf uur langskomen. Zij moet haar paspoort meenemen."
      },
      {
        "title": "Bloeduitslag telefonisch",
        "audio": "audio/v008-listening-02-huisarts-bloeduitslag.mp3",
        "prompt": "De assistente belt over uw bloeduitslag. Alles ziet er goed uit. Als u volgende week nog moe bent, kunt u een telefonische afspraak maken.",
        "questions": [
          "Vraag 1: Waarover belt de assistente?",
          "Vraag 2: Hoe ziet de uitslag eruit?",
          "Vraag 3: Wat kunt u doen als u moe blijft?"
        ],
        "answer": "De assistente belt over de bloeduitslag. Alles ziet er goed uit. U kunt een telefonische afspraak maken."
      },
      {
        "title": "Schoolreis met bus",
        "audio": "audio/v008-listening-03-schoolreis-bus-ouderapp.mp3",
        "prompt": "Voor de schoolreis vertrekt de bus dinsdag om twintig over acht. Geef voor vrijdag toestemming in de ouderapp. Uw dochter neemt lunch en een regenjas mee.",
        "questions": [
          "Vraag 1: Hoe laat vertrekt de bus dinsdag?",
          "Vraag 2: Waar geeft u toestemming?",
          "Vraag 3: Welke twee dingen neemt uw dochter mee?"
        ],
        "answer": "De bus vertrekt om twintig over acht. U geeft toestemming in de ouderapp. Uw dochter neemt lunch en een regenjas mee."
      },
      {
        "title": "Koeltas bij bezorging",
        "audio": "audio/v008-listening-04-supermarkt-koeltas.mp3",
        "prompt": "Uw boodschappen worden vandaag tussen vier en vijf uur bezorgd. Zet een koeltas klaar voor de yoghurt en het vlees. De bezorger neemt de lege kratten mee.",
        "questions": [
          "Vraag 1: In welk tijdvak komen de boodschappen?",
          "Vraag 2: Waarvoor zet u een koeltas klaar?",
          "Vraag 3: Wat neemt de bezorger mee?"
        ],
        "answer": "De boodschappen komen tussen vier en vijf uur. U zet een koeltas klaar voor yoghurt en vlees. De bezorger neemt de lege kratten mee."
      },
      {
        "title": "Halte bij marktplein",
        "audio": "audio/v008-listening-05-buurtbus-marktplein.mp3",
        "prompt": "Let op, de buurtbus stopt deze week bij het marktplein. Halte Kerkpad is dicht door werkzaamheden. De eerste bus vertrekt om acht uur zes.",
        "questions": [
          "Vraag 1: Waar stopt de buurtbus deze week?",
          "Vraag 2: Waarom is halte Kerkpad dicht?",
          "Vraag 3: Hoe laat vertrekt de eerste bus?"
        ],
        "answer": "De buurtbus stopt bij het marktplein. Halte Kerkpad is dicht door werkzaamheden. De eerste bus vertrekt om acht uur zes."
      },
      {
        "title": "Factuur naar klant",
        "audio": "audio/v008-listening-06-klant-factuur-sturen.mp3",
        "prompt": "De klant vraagt of u de factuur vandaag nog kunt sturen. Zet het projectnummer in de onderwerpregel. Het online overleg blijft om half drie.",
        "questions": [
          "Vraag 1: Wat vraagt de klant vandaag?",
          "Vraag 2: Wat zet u in de onderwerpregel?",
          "Vraag 3: Hoe laat blijft het online overleg?"
        ],
        "answer": "De klant vraagt of u de factuur stuurt. U zet het projectnummer in de onderwerpregel. Het overleg blijft om half drie."
      },
      {
        "title": "Zwembaan verplaatst",
        "audio": "audio/v008-listening-07-zwembad-baan-verplaatst.mp3",
        "prompt": "Uw reservering voor banenzwemmen is verplaatst naar baan vier. De starttijd blijft kwart over een. Meld u eerst bij de balie.",
        "questions": [
          "Vraag 1: Naar welke baan is de reservering verplaatst?",
          "Vraag 2: Wat blijft hetzelfde?",
          "Vraag 3: Bij welke plek meldt u zich voor het zwemmen?"
        ],
        "answer": "De reservering is verplaatst naar baan vier. De starttijd blijft kwart over een. U meldt zich eerst bij de balie."
      },
      {
        "title": "Ladder terugbrengen",
        "audio": "audio/v008-listening-08-buren-ladder-terug.mp3",
        "prompt": "Hoi Violetta, bedankt voor het lenen van de ladder. Ik zet hem vanavond na zes uur terug in jullie garage. Laat even weten of dat goed is.",
        "questions": [
          "Vraag 1: Waarvoor bedankt de buur?",
          "Vraag 2: Wanneer zet de buur de ladder terug?",
          "Vraag 3: Waar zet de buur de ladder neer?"
        ],
        "answer": "De buur bedankt voor het lenen van de ladder. Hij zet hem vanavond na zes uur terug. Hij zet de ladder in de garage."
      },
      {
        "title": "Reparatie aan raam",
        "audio": "audio/v008-listening-09-woningcorporatie-raamlekkage.mp3",
        "prompt": "De woningcorporatie heeft uw melding over lekkage ontvangen. Een monteur komt donderdag tussen een en drie uur. Maak de vensterbank leeg.",
        "questions": [
          "Vraag 1: Welke melding heeft de woningcorporatie ontvangen?",
          "Vraag 2: In welk tijdvak komt de monteur donderdag?",
          "Vraag 3: Wat maakt u leeg?"
        ],
        "answer": "De melding over lekkage is ontvangen. De monteur komt donderdag tussen een en drie uur. U maakt de vensterbank leeg."
      },
      {
        "title": "Digitale zorgpas gebruiken",
        "audio": "audio/v008-listening-10-zorgpas-digitaal.mp3",
        "prompt": "Uw nieuwe zorgpas is nog onderweg. Tot die tijd kunt u de digitale pas in onze app gebruiken. Controleer vandaag uw persoonlijke gegevens.",
        "questions": [
          "Vraag 1: Wat is nog onderweg?",
          "Vraag 2: Welke pas kunt u tijdelijk gebruiken?",
          "Vraag 3: Wat controleert u vandaag?"
        ],
        "answer": "De nieuwe zorgpas is nog onderweg. U kunt tijdelijk de digitale pas gebruiken. U controleert uw persoonlijke gegevens."
      },
      {
        "title": "Boek ophalen in bibliotheek",
        "audio": "audio/v008-listening-11-bibliotheek-boek-reservering.mp3",
        "prompt": "Uw gereserveerde boek ligt klaar bij de informatiebalie. Haal het voor zaterdag op. Neem uw bibliotheekpas mee voor het uitlenen.",
        "questions": [
          "Vraag 1: Waar ligt het boek klaar?",
          "Vraag 2: Voor welke dag haalt u het boek op?",
          "Vraag 3: Wat gebruikt u om het boek te lenen?"
        ],
        "answer": "Het boek ligt klaar bij de informatiebalie. U haalt het voor zaterdag op. U neemt uw bibliotheekpas mee."
      },
      {
        "title": "Familielunch later",
        "audio": "audio/v008-listening-12-familielunch-eindhoven.mp3",
        "prompt": "De familielunch in Eindhoven begint zondag een half uur later, om een uur. Violetta neemt warme groenten mee. De kinderen dekken de tafel.",
        "questions": [
          "Vraag 1: In welke stad is de familielunch?",
          "Vraag 2: Hoe laat begint de lunch nu?",
          "Vraag 3: Wat nemen de kinderen voor hun rekening?"
        ],
        "answer": "De lunch is in Eindhoven. De lunch begint om een uur. De kinderen dekken de tafel."
      },
      {
        "title": "Fietsroute door bosrand",
        "audio": "audio/v008-listening-13-fietsroute-bosrand.mp3",
        "prompt": "De fietsroute gaat zondag via de bosrand naar Heeze. We verzamelen om tien voor tien bij de kerk. Neem water en een opgeladen telefoon mee.",
        "questions": [
          "Vraag 1: Waar gaat de fietsroute naartoe?",
          "Vraag 2: Hoe laat verzamelt de groep?",
          "Vraag 3: Welke spullen neemt u mee voor deze fietsroute?"
        ],
        "answer": "De route gaat naar Heeze. De groep verzamelt om tien voor tien. U neemt water en een opgeladen telefoon mee."
      },
      {
        "title": "Dosering bij apotheek",
        "audio": "audio/v008-listening-14-apotheek-dosering.mp3",
        "prompt": "Gebruik de tabletten drie dagen lang na het avondeten. Krijgt u uitslag of benauwdheid, bel dan direct de apotheek of huisarts.",
        "questions": [
          "Vraag 1: Hoelang gebruikt u de tabletten?",
          "Vraag 2: Wanneer neemt u de tabletten in?",
          "Vraag 3: Wanneer belt u direct?"
        ],
        "answer": "U gebruikt de tabletten drie dagen. U neemt ze na het avondeten. U belt direct bij uitslag of benauwdheid."
      },
      {
        "title": "Sportles in kleine zaal",
        "audio": "audio/v008-listening-15-sportles-kleine-zaal.mp3",
        "prompt": "De sportles is zaterdag niet in de grote zaal, maar in zaal twee. We beginnen om negen uur. Neem sportschoenen en een fles water mee.",
        "questions": [
          "Vraag 1: In welke zaal is de sportles zaterdag?",
          "Vraag 2: Op welk tijdstip start de sportles?",
          "Vraag 3: Welke spullen neemt u mee naar zaal twee?"
        ],
        "answer": "De sportles is in zaal twee. De les begint om negen uur. U neemt sportschoenen en een fles water mee."
      },
      {
        "title": "Perronwijziging naar Antwerpen",
        "audio": "audio/v008-listening-16-trein-antwerpen-perron.mp3",
        "prompt": "De trein naar Antwerpen vertrekt vandaag van perron vijf in plaats van perron drie. De vertrektijd blijft 11.24 uur. Controleer uw ticket voor de juiste wagon.",
        "questions": [
          "Vraag 1: Naar welke stad gaat de trein?",
          "Vraag 2: Van welk perron vertrekt de trein vandaag?",
          "Vraag 3: Wat controleert u op uw ticket?"
        ],
        "answer": "De trein gaat naar Antwerpen. Hij vertrekt van perron vijf. U controleert de juiste wagon."
      }
    ]
  },
  {
    "id": "knm",
    "number": "05",
    "category": "Examen",
    "title": "KNM",
    "goal": "Oefen kennis van de Nederlandse maatschappij met korte meerkeuzevragen.",
    "meta": [
      "KNM",
      "Meerkeuze",
      "A/B/C gemengd"
    ],
    "exercises": [
      {
        "title": "Verhuizen naar nieuwe gemeente",
        "prompt": "Wat doet u als u naar een andere gemeente verhuist?",
        "questions": [
          "A. U zegt het alleen tegen de supermarkt",
          "B. U schrijft zich in op uw nieuwe adres bij de gemeente",
          "C. U wacht tot de buren het regelen"
        ],
        "answer": "B. U schrijft zich in op uw nieuwe adres bij de gemeente."
      },
      {
        "title": "Identiteit bij loket",
        "prompt": "Waarom neemt u vaak een identiteitsbewijs mee naar een loket?",
        "questions": [
          "A. De medewerker moet kunnen controleren wie u bent",
          "B. U krijgt altijd korting",
          "C. Het is alleen voor kinderen"
        ],
        "answer": "A. De medewerker moet kunnen controleren wie u bent."
      },
      {
        "title": "Gewone klacht en zorgroute",
        "prompt": "Wie belt u meestal eerst bij een gewone medische klacht?",
        "questions": [
          "A. De notaris",
          "B. De buschauffeur",
          "C. De huisarts of huisartsenpost"
        ],
        "answer": "C. De huisarts of huisartsenpost."
      },
      {
        "title": "Doorverwijzing naar specialist",
        "prompt": "Wat heeft u vaak nodig voor een afspraak bij een specialist?",
        "questions": [
          "A. Een bibliotheekpas",
          "B. Een verwijzing van de huisarts",
          "C. Een treinkaartje"
        ],
        "answer": "B. Een verwijzing van de huisarts."
      },
      {
        "title": "Schoolplicht begrijpen",
        "prompt": "Wat is juist over kinderen en school in Nederland?",
        "questions": [
          "A. Kinderen beslissen altijd zelf of zij gaan",
          "B. School is alleen in de zomer",
          "C. Kinderen moeten volgens de regels naar school"
        ],
        "answer": "C. Kinderen moeten volgens de regels naar school."
      },
      {
        "title": "Gesprek met leerkracht",
        "prompt": "Waarom gaat een ouder naar een oudergesprek?",
        "questions": [
          "A. Om over de ontwikkeling van het kind te praten",
          "B. Om boodschappen te doen",
          "C. Om een paspoort te kopen"
        ],
        "answer": "A. Om over de ontwikkeling van het kind te praten."
      },
      {
        "title": "Loonstrook bewaren",
        "prompt": "Waarom bewaart u een loonstrook?",
        "questions": [
          "A. Omdat het een recept is",
          "B. Omdat daarop loon en inhoudingen staan",
          "C. Omdat u ermee kunt reizen"
        ],
        "answer": "B. Omdat daarop loon en inhoudingen staan."
      },
      {
        "title": "Werkuren afspreken",
        "prompt": "Waar staan afspraken over uren, loon en proeftijd meestal?",
        "questions": [
          "A. Op een menukaart",
          "B. Op een parkeerbon",
          "C. In het arbeidscontract"
        ],
        "answer": "C. In het arbeidscontract."
      },
      {
        "title": "Kapotte kraan in huurhuis",
        "prompt": "Bij wie meldt u vaak een kapotte kraan in een huurwoning?",
        "questions": [
          "A. Bij de verhuurder of woningcorporatie",
          "B. Bij een toerist",
          "C. Bij de zwemleraar"
        ],
        "answer": "A. Bij de verhuurder of woningcorporatie."
      },
      {
        "title": "Energieverbruik lager maken",
        "prompt": "Wat helpt om energie thuis te besparen?",
        "questions": [
          "A. Ramen openlaten met verwarming aan",
          "B. De verwarming lager zetten als u weg bent",
          "C. Lampen altijd aan laten"
        ],
        "answer": "B. De verwarming lager zetten als u weg bent."
      },
      {
        "title": "DigiD extra controle",
        "prompt": "Waarom gebruikt u extra controle bij DigiD?",
        "questions": [
          "A. Om muziek te luisteren",
          "B. Om brood te bestellen",
          "C. Om inloggen veiliger te maken"
        ],
        "answer": "C. Om inloggen veiliger te maken."
      },
      {
        "title": "Verdachte betaallink",
        "prompt": "Wat doet u bij een verdachte betaallink in een bericht?",
        "questions": [
          "A. Niet klikken en eerst controleren",
          "B. Meteen uw pincode sturen",
          "C. Het bericht naar iedereen doorsturen"
        ],
        "answer": "A. Niet klikken en eerst controleren."
      },
      {
        "title": "Veilig door rood licht",
        "prompt": "Wat doet u bij een rood verkeerslicht?",
        "questions": [
          "A. Altijd doorrijden",
          "B. Stoppen en wachten",
          "C. Uw telefoon pakken"
        ],
        "answer": "B. Stoppen en wachten."
      },
      {
        "title": "Gft-afval scheiden",
        "prompt": "Waar hoort groente- en fruitafval meestal bij?",
        "questions": [
          "A. Bij glas",
          "B. Bij papier",
          "C. Bij gft-afval"
        ],
        "answer": "C. Bij gft-afval."
      },
      {
        "title": "Stemmen bij gemeenteraad",
        "prompt": "Wat gebruikt u bij verkiezingen samen met uw identiteitsbewijs?",
        "questions": [
          "A. Een stempas",
          "B. Een kassabon",
          "C. Een sportkaart"
        ],
        "answer": "A. Een stempas."
      },
      {
        "title": "Gelijke rechten in dagelijks leven",
        "prompt": "Wat past bij gelijke behandeling in Nederland?",
        "questions": [
          "A. Mensen mogen zonder reden ongelijk behandeld worden",
          "B. Mannen en vrouwen hebben gelijke rechten",
          "C. Alleen buren hebben rechten"
        ],
        "answer": "B. Mannen en vrouwen hebben gelijke rechten."
      },
      {
        "title": "Vrijwillig helpen bij club",
        "prompt": "Wat is een voorbeeld van vrijwilligerswerk?",
        "questions": [
          "A. Een boete betalen",
          "B. Een geheim wachtwoord delen",
          "C. Onbetaald helpen bij een sportclub"
        ],
        "answer": "C. Onbetaald helpen bij een sportclub."
      },
      {
        "title": "Direct gevaar melden",
        "prompt": "Welk nummer belt u bij direct gevaar?",
        "questions": [
          "A. 112",
          "B. 9292",
          "C. Het nummer van de bakker"
        ],
        "answer": "A. 112."
      },
      {
        "title": "Inkomen en toeslag",
        "prompt": "Wat doet u als uw inkomen verandert en u toeslag krijgt?",
        "questions": [
          "A. Niets doorgeven",
          "B. De verandering doorgeven aan de juiste instantie",
          "C. Alleen uw buurman informeren"
        ],
        "answer": "B. De verandering doorgeven aan de juiste instantie."
      },
      {
        "title": "Zorgpolis vergelijken",
        "prompt": "Waarom lezen mensen hun zorgpolis?",
        "questions": [
          "A. Om het weerbericht te vinden",
          "B. Om een treinrit te boeken",
          "C. Om te zien welke zorg vergoed wordt"
        ],
        "answer": "C. Om te zien welke zorg vergoed wordt."
      },
      {
        "title": "Meedoen in de wijk",
        "prompt": "Wat kan helpen om mensen in de buurt te leren kennen?",
        "questions": [
          "A. Meedoen aan een activiteit in de wijk",
          "B. Alle brieven weggooien",
          "C. Nooit groeten"
        ],
        "answer": "A. Meedoen aan een activiteit in de wijk."
      },
      {
        "title": "Informele zorg voor familielid",
        "prompt": "Wat betekent het als u lang voor een ziek familielid zorgt?",
        "questions": [
          "A. U reist gratis",
          "B. U geeft informele zorg of mantelzorg",
          "C. U koopt automatisch een huis"
        ],
        "answer": "B. U geeft informele zorg of mantelzorg."
      },
      {
        "title": "Foto in schoolapp",
        "prompt": "Wat is verstandig met foto's van andere kinderen?",
        "questions": [
          "A. Altijd online zetten",
          "B. Zonder vragen doorsturen",
          "C. Eerst rekening houden met privacy en toestemming"
        ],
        "answer": "C. Eerst rekening houden met privacy en toestemming."
      },
      {
        "title": "Veilig bankieren",
        "prompt": "Hoe bankiert u online veiliger?",
        "questions": [
          "A. Via de officiele app of website inloggen",
          "B. Uw pincode delen",
          "C. Elke onbekende link openen"
        ],
        "answer": "A. Via de officiele app of website inloggen."
      },
      {
        "title": "Uitchecken in OV",
        "prompt": "Wat doet u aan het einde van een reis met openbaar vervoer?",
        "questions": [
          "A. De halte vergeten",
          "B. Uitchecken als dat nodig is",
          "C. Uw pas weggooien"
        ],
        "answer": "B. Uitchecken als dat nodig is."
      },
      {
        "title": "Dodenherdenking",
        "prompt": "Wat gebeurt er op 4 mei in Nederland?",
        "questions": [
          "A. Iedereen viert nieuwjaar",
          "B. Alleen winkels tellen geld",
          "C. Veel mensen herdenken oorlogsslachtoffers"
        ],
        "answer": "C. Veel mensen herdenken oorlogsslachtoffers."
      },
      {
        "title": "GGD en prikadvies",
        "prompt": "Waarover kan de GGD onder andere informatie geven?",
        "questions": [
          "A. Gezondheid en vaccinaties",
          "B. Alleen fietsenbanden",
          "C. Alleen hotelprijzen"
        ],
        "answer": "A. Gezondheid en vaccinaties."
      },
      {
        "title": "Rijbewijs kwijt",
        "prompt": "Wat doet u als uw rijbewijs kwijt is?",
        "questions": [
          "A. U gebruikt het rijbewijs van een vriend",
          "B. U meldt het verlies en vraagt een nieuw rijbewijs aan",
          "C. U doet nooit iets"
        ],
        "answer": "B. U meldt het verlies en vraagt een nieuw rijbewijs aan."
      }
    ]
  },
  {
    "id": "word_order",
    "number": "06",
    "category": "Grammatica",
    "title": "Grammatica: woordvolgorde en vragen",
    "goal": "Oefen zinnen die u nodig heeft bij praktische A2-situaties.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Zinsvolgorde met morgenochtend",
        "prompt": "Zet in goede volgorde: ik / een werkplek / morgenochtend / reserveer",
        "answer": "Morgenochtend reserveer ik een werkplek."
      },
      {
        "title": "Zinsvolgorde met lunch",
        "prompt": "Zet in goede volgorde: de assistente / terug / na de lunch / belt",
        "answer": "Na de lunch belt de assistente terug."
      },
      {
        "title": "Vraag over uittreksel",
        "prompt": "Maak een vraag: het uittreksel / ophalen / kan / ik / vrijdag",
        "answer": "Kan ik het uittreksel vrijdag ophalen?"
      },
      {
        "title": "Waar-vraag voor boek",
        "prompt": "Maak een vraag: mijn boek / klaar / waar / ligt",
        "answer": "Waar ligt mijn boek klaar?"
      },
      {
        "title": "Wanneer-vraag voor training",
        "prompt": "Maak een vraag: de proefles / wanneer / begint",
        "answer": "Wanneer begint de proefles?"
      },
      {
        "title": "Wie-vraag bij de balie",
        "prompt": "Maak een vraag met wie: helpt / mij / bij de balie",
        "answer": "Wie helpt mij bij de balie?"
      },
      {
        "title": "Modal achter persoonsvorm",
        "prompt": "Zet in goede volgorde: vandaag / wandelen / Violetta / wil",
        "answer": "Violetta wil vandaag wandelen."
      },
      {
        "title": "Beleefde kan-vraag",
        "prompt": "Maak een vraag: u / kan / mijn gegevens / controleren",
        "answer": "Kunt u mijn gegevens controleren?"
      },
      {
        "title": "Omdat met moe zijn",
        "prompt": "Maak een zin: Ik bel de huisarts. Ik ben nog moe.",
        "answer": "Ik bel de huisarts omdat ik nog moe ben."
      },
      {
        "title": "Als met reservering",
        "prompt": "Maak af: Ik kom zwemmen als mijn reservering ___",
        "answer": "Ik kom zwemmen als mijn reservering klaar is."
      },
      {
        "title": "Dat in bericht van school",
        "prompt": "Maak af: De mentor schrijft dat de bus om acht uur ___",
        "answer": "De mentor schrijft dat de bus om acht uur vertrekt."
      },
      {
        "title": "En met twee formulieren",
        "prompt": "Maak een zin: Ik download het formulier. Ik vul het in.",
        "answer": "Ik download het formulier en ik vul het in."
      },
      {
        "title": "Dus bij lek raam",
        "prompt": "Maak een zin: Het raam lekt. Ik meld een reparatie.",
        "answer": "Het raam lekt, dus ik meld een reparatie."
      },
      {
        "title": "Maar bij volle trein",
        "prompt": "Maak een zin: Ik wil mijn fiets meenemen. De trein is vol.",
        "answer": "Ik wil mijn fiets meenemen, maar de trein is vol."
      },
      {
        "title": "Tijd na werkwoord",
        "prompt": "Zet in goede volgorde: een klantgesprek / ik / morgenmiddag / heb",
        "answer": "Ik heb morgenmiddag een klantgesprek."
      },
      {
        "title": "Plaats in bibliotheek",
        "prompt": "Zet in goede volgorde: in de bibliotheek / leest / mijn dochter",
        "answer": "Mijn dochter leest in de bibliotheek."
      },
      {
        "title": "Mag-vraag bij parkeerplek",
        "prompt": "Maak een beleefde vraag: ik / mag / mijn fiets / hier / neerzetten",
        "answer": "Mag ik mijn fiets hier neerzetten?"
      },
      {
        "title": "Volledige zin over Sterksel",
        "prompt": "Maak een volledige zin: Sterksel / ligt / in Noord-Brabant",
        "answer": "Sterksel ligt in Noord-Brabant."
      }
    ]
  },
  {
    "id": "verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Grammatica: werkwoorden en tijden",
    "goal": "Oefen tegenwoordige tijd, voltooid tijd en toekomst met A2-zinnen.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Aanvragen bij gemeente",
        "prompt": "Vul in: Ik ___ vandaag een uittreksel. (aanvragen)",
        "answer": "Ik vraag vandaag een uittreksel aan."
      },
      {
        "title": "Controleren in app",
        "prompt": "Vul in: Violetta ___ haar zorgpas in de app. (controleren)",
        "answer": "Violetta controleert haar zorgpas in de app."
      },
      {
        "title": "Reserveren voor zwemmen",
        "prompt": "Vul in: Wij ___ online een zwembaan. (reserveren)",
        "answer": "Wij reserveren online een zwembaan."
      },
      {
        "title": "Vertrekken naar schoolreis",
        "prompt": "Vul in: De bus ___ om 08.20 uur. (vertrekken)",
        "answer": "De bus vertrekt om 08.20 uur."
      },
      {
        "title": "Kiezen in bibliotheek",
        "prompt": "Vul in: Mijn dochters ___ boeken. (kiezen)",
        "answer": "Mijn dochters kiezen boeken."
      },
      {
        "title": "Annuleren voor vier uur",
        "prompt": "Vul in: U ___ de werkplek voor vier uur. (annuleren)",
        "answer": "U annuleert de werkplek voor vier uur."
      },
      {
        "title": "Voltooid met aanvragen",
        "prompt": "Maak voltooid: Ik vraag een uittreksel aan.",
        "answer": "Ik heb een uittreksel aangevraagd."
      },
      {
        "title": "Voltooid met bezorgen",
        "prompt": "Maak voltooid: De supermarkt bezorgt yoghurt.",
        "answer": "De supermarkt heeft yoghurt bezorgd."
      },
      {
        "title": "Voltooid naar familielunch",
        "prompt": "Maak voltooid: Wij gaan naar Eindhoven.",
        "answer": "Wij zijn naar Eindhoven gegaan."
      },
      {
        "title": "Voltooid met lekken",
        "prompt": "Maak voltooid: Het raam lekt.",
        "answer": "Het raam heeft gelekt."
      },
      {
        "title": "Voltooid klantbericht",
        "prompt": "Maak voltooid: Ik schrijf een klantbericht.",
        "answer": "Ik heb een klantbericht geschreven."
      },
      {
        "title": "Toekomst woningcorporatie bellen",
        "prompt": "Maak toekomst: Ik bel de woningcorporatie.",
        "answer": "Ik ga de woningcorporatie bellen."
      },
      {
        "title": "Toekomst met trainen",
        "prompt": "Maak toekomst: Wij trainen zaterdag.",
        "answer": "Wij gaan zaterdag trainen."
      },
      {
        "title": "Willen met reizen",
        "prompt": "Maak een zin met willen: ik / naar Antwerpen / reizen",
        "answer": "Ik wil naar Antwerpen reizen."
      },
      {
        "title": "Kunnen met uploaden",
        "prompt": "Maak een zin met kunnen: u / de foto / uploaden",
        "answer": "U kunt de foto uploaden."
      },
      {
        "title": "Moeten met paspoort",
        "prompt": "Maak een zin met moeten: wij / het paspoort / meenemen",
        "answer": "Wij moeten het paspoort meenemen."
      },
      {
        "title": "Mogen met ruilen",
        "prompt": "Maak een vraag met mogen: ik / dit product / ruilen",
        "answer": "Mag ik dit product ruilen?"
      },
      {
        "title": "Voorstel na werkdag",
        "prompt": "Maak een voorstel met zullen: wij / na het werk / wandelen",
        "answer": "Zullen wij na het werk wandelen?"
      }
    ]
  },
  {
    "id": "modal_separable_reflexive",
    "number": "08",
    "category": "Grammatica",
    "title": "Grammatica: modale, scheidbare en wederkerende werkwoorden",
    "goal": "Oefen modale, scheidbare en wederkerende werkwoorden met praktische zinnen.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Moeten bij loket",
        "prompt": "Maak een zin: een paspoort / laten zien / ik / moet",
        "answer": "Ik moet een paspoort laten zien."
      },
      {
        "title": "Kunnen met portaal",
        "prompt": "Maak een zin: het bericht / lezen / u / kunt / online",
        "answer": "U kunt het bericht online lezen."
      },
      {
        "title": "Willen met stille plek",
        "prompt": "Maak een zin: rustig / werken / wij / willen",
        "answer": "Wij willen rustig werken."
      },
      {
        "title": "Mogen met boek",
        "prompt": "Maak een vraag: ik / mag / het boek / langer / houden",
        "answer": "Mag ik het boek langer houden?"
      },
      {
        "title": "Meenemen met fiets",
        "prompt": "Maak af: Ik moet mijn fiets in de trein ___.",
        "answer": "Ik moet mijn fiets in de trein meenemen."
      },
      {
        "title": "Aanvragen vandaag",
        "prompt": "Gebruik aanvragen: Violetta ___ vandaag een uittreksel ___.",
        "answer": "Violetta vraagt vandaag een uittreksel aan."
      },
      {
        "title": "Terugzetten container",
        "prompt": "Gebruik terugzetten: Ik ___ de groene container vrijdag ___.",
        "answer": "Ik zet de groene container vrijdag terug."
      },
      {
        "title": "Klaarleggen boek",
        "prompt": "Gebruik klaarleggen: De bibliotheek ___ het boek ___.",
        "answer": "De bibliotheek legt het boek klaar."
      },
      {
        "title": "Doorgeven inkomen",
        "prompt": "Maak af: U moet uw nieuwe inkomen ___.",
        "answer": "U moet uw nieuwe inkomen doorgeven."
      },
      {
        "title": "Aanmelden wandelclub",
        "prompt": "Gebruik zich aanmelden: Ik ___ ___ voor de wandelclub.",
        "answer": "Ik meld mij aan voor de wandelclub."
      },
      {
        "title": "Vergissen in product",
        "prompt": "Gebruik zich vergissen: Ik ___ ___ in het product.",
        "answer": "Ik vergis mij in het product."
      },
      {
        "title": "Voorstellen in groep",
        "prompt": "Gebruik zich voorstellen: Mijn dochter ___ ___ aan de trainer.",
        "answer": "Mijn dochter stelt zich voor aan de trainer."
      },
      {
        "title": "Herinneren aan ticket",
        "prompt": "Gebruik zich herinneren: Wij ___ ___ het fietsticket.",
        "answer": "Wij herinneren ons het fietsticket."
      },
      {
        "title": "Inschrijven voor proefles",
        "prompt": "Gebruik zich inschrijven: Violetta ___ ___ voor de proefles.",
        "answer": "Violetta schrijft zich in voor de proefles."
      },
      {
        "title": "Afspreken bij kerk",
        "prompt": "Gebruik afspreken: Wij ___ om tien uur bij de kerk ___.",
        "answer": "Wij spreken om tien uur bij de kerk af."
      },
      {
        "title": "Doorgaan bij regen",
        "prompt": "Gebruik doorgaan: De wandeling ___ bij lichte regen ___.",
        "answer": "De wandeling gaat bij lichte regen door."
      },
      {
        "title": "Opbellen na controle",
        "prompt": "Gebruik opbellen: De assistente ___ mij morgen ___.",
        "answer": "De assistente belt mij morgen op."
      },
      {
        "title": "Klaarmaken voor reis",
        "prompt": "Gebruik zich klaarmaken: Ik ___ ___ rustig klaar voor de treinreis.",
        "answer": "Ik maak mij rustig klaar voor de treinreis."
      }
    ]
  },
  {
    "id": "nouns_articles_pronouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Grammatica: lidwoorden, naamwoorden en voornaamwoorden",
    "goal": "Oefen de/het, meervoud, bijvoeglijke naamwoorden en voornaamwoorden.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Lidwoord bij uittreksel",
        "prompt": "Kies de of het: ___ uittreksel ligt klaar.",
        "answer": "Het uittreksel ligt klaar."
      },
      {
        "title": "Lidwoord bij zorgpas",
        "prompt": "Kies de of het: ___ zorgpas komt per post.",
        "answer": "De zorgpas komt per post."
      },
      {
        "title": "Lidwoord bij marktplein",
        "prompt": "Kies de of het: ___ marktplein is druk.",
        "answer": "Het marktplein is druk."
      },
      {
        "title": "Lidwoord bij ladder",
        "prompt": "Kies de of het: ___ ladder staat in de garage.",
        "answer": "De ladder staat in de garage."
      },
      {
        "title": "Van een naar het",
        "prompt": "Maak af: Ik bestel een boek. ___ boek ligt zaterdag klaar.",
        "answer": "Ik bestel een boek. Het boek ligt zaterdag klaar."
      },
      {
        "title": "Meervoud van pas",
        "prompt": "Maak meervoud: een pas, twee ___.",
        "answer": "Een pas, twee passen."
      },
      {
        "title": "Meervoud van raam",
        "prompt": "Maak meervoud: een raam, drie ___.",
        "answer": "Een raam, drie ramen."
      },
      {
        "title": "Meervoud van klant",
        "prompt": "Maak meervoud: een klant, veel ___.",
        "answer": "Een klant, veel klanten."
      },
      {
        "title": "Meervoud van lid",
        "prompt": "Maak meervoud: een lid, twee ___.",
        "answer": "Een lid, twee leden."
      },
      {
        "title": "Bijvoeglijk warm",
        "prompt": "Maak af: Violetta neemt ___ groenten mee. (warm)",
        "answer": "Violetta neemt warme groenten mee."
      },
      {
        "title": "Bijvoeglijk stil",
        "prompt": "Maak af: Ik reserveer een ___ werkplek. (stil)",
        "answer": "Ik reserveer een stille werkplek."
      },
      {
        "title": "Bijvoeglijk digitale pas",
        "prompt": "Maak af: Zij gebruikt een ___ zorgpas. (digitaal)",
        "answer": "Zij gebruikt een digitale zorgpas."
      },
      {
        "title": "Bezittelijk bij Violetta",
        "prompt": "Maak af: Violetta pakt ___ paspoort.",
        "answer": "Violetta pakt haar paspoort."
      },
      {
        "title": "Bezittelijk ons",
        "prompt": "Maak af: Wij zetten ___ fietsen in de stalling.",
        "answer": "Wij zetten onze fietsen in de stalling."
      },
      {
        "title": "Voornaamwoord ladder",
        "prompt": "Maak af: De ladder is terug. Ik zet ___ in de garage.",
        "answer": "De ladder is terug. Ik zet hem in de garage."
      },
      {
        "title": "Voornaamwoord het",
        "prompt": "Maak af: Het formulier is klaar. Ik verstuur ___.",
        "answer": "Het formulier is klaar. Ik verstuur het."
      },
      {
        "title": "Deze of dit formulier",
        "prompt": "Kies: ___ aanvraag is belangrijk.",
        "answer": "Deze aanvraag is belangrijk."
      },
      {
        "title": "Welke of wie",
        "prompt": "Maak een vraag: ___ medewerker helpt aan balie 3?",
        "answer": "Welke medewerker helpt aan balie 3?"
      }
    ]
  },
  {
    "id": "negation_prepositions_connectors",
    "number": "10",
    "category": "Grammatica",
    "title": "Grammatica: ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen geen/niet, voorzetsels en verbindingswoorden in A2-zinnen.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Geen uittreksel",
        "prompt": "Maak negatief: Ik heb een uittreksel.",
        "answer": "Ik heb geen uittreksel."
      },
      {
        "title": "Geen koeltas",
        "prompt": "Maak negatief: Zij heeft een koeltas.",
        "answer": "Zij heeft geen koeltas."
      },
      {
        "title": "Geen reservering",
        "prompt": "Maak negatief: Wij hebben een reservering.",
        "answer": "Wij hebben geen reservering."
      },
      {
        "title": "Niet om half drie",
        "prompt": "Maak negatief: Ik bel om half drie.",
        "answer": "Ik bel niet om half drie."
      },
      {
        "title": "Trein rijdt niet",
        "prompt": "Maak negatief: De trein rijdt vandaag.",
        "answer": "De trein rijdt vandaag niet."
      },
      {
        "title": "Product niet ruilen",
        "prompt": "Maak negatief: Ik kan het product ruilen.",
        "answer": "Ik kan het product niet ruilen."
      },
      {
        "title": "Voorzetsel aan balie drie",
        "prompt": "Vul in: Ik wacht ___ balie drie.",
        "answer": "Ik wacht bij balie drie."
      },
      {
        "title": "Voorzetsel op dinsdag",
        "prompt": "Vul in: De schoolreis is ___ dinsdag.",
        "answer": "De schoolreis is op dinsdag."
      },
      {
        "title": "Voorzetsel naar afhaalpunt",
        "prompt": "Vul in: Wij gaan ___ het afhaalpunt.",
        "answer": "Wij gaan naar het afhaalpunt."
      },
      {
        "title": "Voorzetsel met mijn gezin",
        "prompt": "Vul in: Ik reis ___ mijn gezin.",
        "answer": "Ik reis met mijn gezin."
      },
      {
        "title": "Voorzetsel voor rijbewijs",
        "prompt": "Vul in: Dit uittreksel is ___ mijn rijbewijs.",
        "answer": "Dit uittreksel is voor mijn rijbewijs."
      },
      {
        "title": "Voorzetsel tussen een en drie",
        "prompt": "Vul in: De monteur komt ___ een en drie uur.",
        "answer": "De monteur komt tussen een en drie uur."
      },
      {
        "title": "En met aanvragen",
        "prompt": "Maak een zin: Ik open de website. Ik vraag een uittreksel aan.",
        "answer": "Ik open de website en ik vraag een uittreksel aan."
      },
      {
        "title": "Of met ophalen",
        "prompt": "Maak een zin: U kunt het boek vandaag ophalen. U kunt het morgen ophalen.",
        "answer": "U kunt het boek vandaag of morgen ophalen."
      },
      {
        "title": "Maar met verkeerde yoghurt",
        "prompt": "Maak een zin: Ik wil yoghurt eten. De yoghurt is te warm.",
        "answer": "Ik wil yoghurt eten, maar de yoghurt is te warm."
      },
      {
        "title": "Want met regenjas",
        "prompt": "Maak een zin: Mijn dochter neemt een regenjas mee. Het kan regenen.",
        "answer": "Mijn dochter neemt een regenjas mee, want het kan regenen."
      },
      {
        "title": "Dus met melding",
        "prompt": "Maak een zin: Het raam lekt. Ik vul een formulier in.",
        "answer": "Het raam lekt, dus ik vul een formulier in."
      },
      {
        "title": "Omdat met energie",
        "prompt": "Maak een zin: Ik wandel. Ik wil meer energie.",
        "answer": "Ik wandel omdat ik meer energie wil."
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
  const key = `v008-writing-answer-${index}-${exercise.title}`;
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
