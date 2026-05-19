const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte berichten uit gemeente, zorg, school, vervoer, werk, wonen en gezin.",
    "meta": [
      "A2 examen",
      "Praktische teksten",
      "Nieuwe v013-opgaven"
    ],
    "exercises": [
      {
        "title": "Digitale afvalkalender aanvragen",
        "prompt": "De gemeente Heeze-Leende stuurt maandag een digitale afvalkalender. Kunt u niet inloggen? Bel dan voor vrijdag met de publieksbalie. U krijgt de kalender ook per post.",
        "questions": [
          "Vraag 1: Welke kalender stuurt de gemeente maandag?",
          "Vraag 2: Wanneer belt u uiterlijk als inloggen niet lukt?",
          "Vraag 3: Hoe kunt u de kalender ook krijgen?"
        ],
        "answer": "De gemeente stuurt een digitale afvalkalender. U belt uiterlijk vrijdag met de publieksbalie. U kunt de kalender ook per post krijgen."
      },
      {
        "title": "Herhaalrecept via patientenportaal",
        "prompt": "Uw herhaalrecept voor bloeddrukmedicijn staat klaar in het patientenportaal. Bestel het recept voor donderdag 12.00 uur. De apotheek legt het medicijn vrijdagmiddag klaar.",
        "questions": [
          "Vraag 1: Voor welk soort medicijn is het herhaalrecept?",
          "Vraag 2: Tot welk moment bestelt u het recept?",
          "Vraag 3: Wanneer ligt het medicijn klaar bij de apotheek?"
        ],
        "answer": "Het herhaalrecept is voor bloeddrukmedicijn. U bestelt het voor donderdag 12.00 uur. Het medicijn ligt vrijdagmiddag klaar."
      },
      {
        "title": "Tijd kiezen voor oudergesprek",
        "prompt": "De school plant een tienminutengesprek over rekenen. Kies voor woensdagavond een tijd in de ouderapp. Neem het laatste rapport mee naar het gesprek.",
        "questions": [
          "Vraag 1: Waarover gaat het tienminutengesprek?",
          "Vraag 2: Voor welke avond kiest u een tijd?",
          "Vraag 3: Wat neemt u mee naar het gesprek?"
        ],
        "answer": "Het gesprek gaat over rekenen. U kiest een tijd voor woensdagavond. U neemt het laatste rapport mee."
      },
      {
        "title": "Koeltas terug bij bezorging",
        "prompt": "De supermarkt bezorgt zaterdag tussen 09.00 en 10.00 uur. De diepvriesproducten zitten apart in een koeltas. Zet de lege tas maandag bij de voordeur.",
        "questions": [
          "Vraag 1: Wanneer komt de supermarkt bezorgen?",
          "Vraag 2: Waarin zitten de diepvriesproducten?",
          "Vraag 3: Wat doet u maandag met de lege tas?"
        ],
        "answer": "De supermarkt bezorgt zaterdag tussen 09.00 en 10.00 uur. De producten zitten in een koeltas. U zet de lege tas maandag bij de voordeur."
      },
      {
        "title": "Bus stopt tijdelijk elders",
        "prompt": "Bus 318 stopt komende week niet bij halte Kerkplein door werkzaamheden. Stap op bij halte Dorpstraat. Vertrek vijf minuten eerder van huis.",
        "questions": [
          "Vraag 1: Welke bus stopt niet bij halte Kerkplein?",
          "Vraag 2: Bij welke halte stapt u komende week op?",
          "Vraag 3: Hoeveel minuten eerder vertrekt u van huis?"
        ],
        "answer": "Bus 318 stopt niet bij halte Kerkplein. U stapt op bij halte Dorpstraat. U vertrekt vijf minuten eerder."
      },
      {
        "title": "Online sessie over privacy",
        "prompt": "De Kamer van Koophandel geeft dinsdag een gratis online sessie over privacy voor kleine bedrijven. Meld u aan met uw zakelijke e-mailadres. De link komt een dag van tevoren.",
        "questions": [
          "Vraag 1: Waarover gaat de online sessie?",
          "Vraag 2: Waarmee meldt u zich aan?",
          "Vraag 3: Wanneer krijgt u de link?"
        ],
        "answer": "De sessie gaat over privacy voor kleine bedrijven. U meldt zich aan met uw zakelijke e-mailadres. De link komt een dag van tevoren."
      },
      {
        "title": "Baan vier in het zwembad",
        "prompt": "Voor banenzwemmen is baan 4 donderdag gereserveerd van 20.00 tot 20.45 uur. Kom tien minuten eerder om om te kleden. Neem een muntje voor het kluisje mee.",
        "questions": [
          "Vraag 1: Welke baan is gereserveerd voor banenzwemmen?",
          "Vraag 2: Hoe laat eindigt de reservering?",
          "Vraag 3: Wat neemt u mee voor het kluisje?"
        ],
        "answer": "Baan 4 is gereserveerd. De reservering eindigt om 20.45 uur. U neemt een muntje voor het kluisje mee."
      },
      {
        "title": "Intake bij fysiotherapeut",
        "prompt": "De fysiotherapeut heeft maandag om 15.20 uur een intakeplek. Vul voor de afspraak een korte vragenlijst in. Neem een handdoek mee.",
        "questions": [
          "Vraag 1: Bij wie heeft u een intake?",
          "Vraag 2: Hoe laat is de intakeplek maandag?",
          "Vraag 3: Wat vult u voor de afspraak in?"
        ],
        "answer": "U heeft een intake bij de fysiotherapeut. De intake is maandag om 15.20 uur. U vult een korte vragenlijst in."
      },
      {
        "title": "Nieuwe schutting bij de buren",
        "prompt": "De buren plaatsen zaterdag een nieuwe schutting. Tussen 11.00 en 13.00 uur kan er geluid zijn. Zet uw auto niet voor hun oprit.",
        "questions": [
          "Vraag 1: Wat plaatsen de buren zaterdag?",
          "Vraag 2: Tussen welke tijden kan er geluid zijn?",
          "Vraag 3: Waar zet u uw auto niet neer?"
        ],
        "answer": "De buren plaatsen een nieuwe schutting. Er kan geluid zijn tussen 11.00 en 13.00 uur. U zet uw auto niet voor hun oprit."
      },
      {
        "title": "Ventilatieroosters schoonmaken",
        "prompt": "De woningcorporatie vraagt bewoners de ventilatieroosters schoon te maken. Laat de roosters daarna open voor frisse lucht. Bel bij schimmel in de badkamer de klantenlijn.",
        "questions": [
          "Vraag 1: Wat maken bewoners schoon?",
          "Vraag 2: Waarom laat u de roosters open?",
          "Vraag 3: Wanneer belt u de klantenlijn?"
        ],
        "answer": "Bewoners maken de ventilatieroosters schoon. U laat ze open voor frisse lucht. U belt bij schimmel in de badkamer."
      },
      {
        "title": "Zorgnota digitaal indienen",
        "prompt": "U kunt de zorgnota van de fysiotherapeut digitaal indienen. Maak een foto van de nota in de verzekeringsapp. Bewaar de papieren nota nog twee maanden.",
        "questions": [
          "Vraag 1: Welke nota kunt u digitaal indienen?",
          "Vraag 2: Waar maakt u een foto van de nota?",
          "Vraag 3: Hoelang bewaart u de papieren nota nog?"
        ],
        "answer": "U kunt de zorgnota van de fysiotherapeut digitaal indienen. U maakt een foto in de verzekeringsapp. U bewaart de papieren nota nog twee maanden."
      },
      {
        "title": "Taalmaatjesavond in bibliotheek",
        "prompt": "De bibliotheek organiseert maandag een taalmaatjesavond. Inschrijven kan gratis met naam en telefoonnummer. De avond begint om 19.30 uur.",
        "questions": [
          "Vraag 1: Wat organiseert de bibliotheek maandag?",
          "Vraag 2: Welke gegevens gebruikt u bij inschrijven?",
          "Vraag 3: Hoe laat begint de avond?"
        ],
        "answer": "De bibliotheek organiseert een taalmaatjesavond. U schrijft zich in met naam en telefoonnummer. De avond begint om 19.30 uur."
      },
      {
        "title": "Proefles muziek voor dochter",
        "prompt": "Uw dochter heeft dinsdag een proefles muziek. Zij moet haar schoolagenda en een fles water meenemen. Ouders wachten in de hal.",
        "questions": [
          "Vraag 1: Wat voor proefles heeft uw dochter?",
          "Vraag 2: Welke twee dingen neemt zij mee?",
          "Vraag 3: Waar wachten ouders?"
        ],
        "answer": "Zij heeft een proefles muziek. Zij neemt haar schoolagenda en een fles water mee. Ouders wachten in de hal."
      },
      {
        "title": "Achterband bij fietsenmaker",
        "prompt": "De fietsenmaker repareert vrijdag uw achterband. U kunt de fiets na 16.30 uur ophalen. Betalen kan met pin.",
        "questions": [
          "Vraag 1: Welke band repareert de fietsenmaker?",
          "Vraag 2: Vanaf hoe laat kunt u de fiets ophalen?",
          "Vraag 3: Hoe kunt u betalen?"
        ],
        "answer": "De fietsenmaker repareert de achterband. U kunt de fiets na 16.30 uur ophalen. U kunt met pin betalen."
      },
      {
        "title": "Pakket van boerderijmarkt",
        "prompt": "De boerderijmarkt heeft een pakket met kip, courgette en rode paprika. Bestel voor donderdagmiddag. Bewaar de kip direct in de koelkast.",
        "questions": [
          "Vraag 1: Welke kip en groenten noemt de tekst?",
          "Vraag 2: Wanneer bestelt u uiterlijk?",
          "Vraag 3: Waar bewaart u de kip direct?"
        ],
        "answer": "Er zitten kip, courgette en rode paprika in. U bestelt voor donderdagmiddag. U bewaart de kip direct in de koelkast."
      },
      {
        "title": "Aankomsttijd voor hotel",
        "prompt": "Voor uw weekend in Maastricht vraagt het hotel om een aankomsttijd. Stuur voor 18.00 uur een bericht. Ontbijt is niet bij de prijs inbegrepen.",
        "questions": [
          "Vraag 1: Waar gaat u een weekend naartoe?",
          "Vraag 2: Wat vraagt het hotel?",
          "Vraag 3: Wat is niet bij de prijs inbegrepen?"
        ],
        "answer": "U gaat een weekend naar Maastricht. Het hotel vraagt om een aankomsttijd. Ontbijt is niet bij de prijs inbegrepen."
      },
      {
        "title": "Parkeerkaart bij zwembad",
        "prompt": "Bij het zwembad staat: betaal parkeren met de app of bij de automaat. Leg het kaartje zichtbaar achter de voorruit.",
        "questions": [
          "Vraag 1: Kies het goede antwoord: A. U gooit het kaartje weg. B. U geeft het kaartje aan de badmeester. C. U legt het kaartje zichtbaar achter de voorruit."
        ],
        "answer": "C. U legt het kaartje zichtbaar achter de voorruit."
      },
      {
        "title": "Brief over avondmarkt",
        "prompt": "De wijk organiseert vrijdag een avondmarkt op het plein. Fietsen moeten in de rekken naast de kerk staan. De markt sluit om 21.00 uur.",
        "questions": [
          "Vraag 1: Op welke dag is de avondmarkt?",
          "Vraag 2: Waar moeten fietsen staan?",
          "Vraag 3: Tot hoe laat is de avondmarkt open?"
        ],
        "answer": "De avondmarkt is vrijdag. Fietsen moeten in de rekken naast de kerk staan. De markt sluit om 21.00 uur."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf korte e-mails, formulieren en appberichten met duidelijke A2-zinnen.",
    "meta": [
      "Schriftelijk examen",
      "Berichten en formulieren",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Afvalkalender per post vragen",
        "prompt": "Schrijf aan de gemeente. U kunt niet inloggen en vraagt om de afvalkalender per post.",
        "answer": "Beste gemeente,\n\nIk kan niet inloggen voor de digitale afvalkalender. Kunt u de kalender per post naar mij sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Herhaalrecept bestellen",
        "prompt": "Schrijf aan de huisartsenpraktijk. U wilt uw herhaalrecept voor donderdag 12.00 uur bestellen.",
        "answer": "Beste assistente,\n\nIk wil graag mijn herhaalrecept bestellen voor donderdag 12.00 uur. Het gaat om mijn bloeddrukmedicijn.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Oudergesprek bevestigen",
        "prompt": "Schrijf aan de leerkracht. U bevestigt het tienminutengesprek op woensdagavond.",
        "answer": "Beste leerkracht,\n\nIk bevestig het tienminutengesprek op woensdagavond. Ik neem het laatste rapport mee.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Koeltas klaarzetten",
        "prompt": "Schrijf aan de supermarkt. U zet de lege koeltas maandag bij de voordeur.",
        "answer": "Beste klantenservice,\n\nIk zet de lege koeltas maandag bij de voordeur. De bezorger kan de tas daar ophalen.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over bushalte",
        "prompt": "Schrijf aan een vriendin. Vraag bij welke halte bus 318 komende week stopt.",
        "answer": "Hoi,\n\nWeet jij bij welke halte bus 318 komende week stopt? Ik las dat halte Kerkplein dicht is.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Aanmelden voor privacy-sessie",
        "prompt": "Schrijf aan de Kamer van Koophandel. U meldt zich aan voor de online sessie over privacy.",
        "answer": "Beste medewerker,\n\nIk meld mij graag aan voor de online sessie over privacy voor kleine bedrijven. Mijn zakelijke e-mailadres is bekend.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Banenzwemmen bevestigen",
        "prompt": "Schrijf aan het zwembad. U bevestigt dat u donderdag om 20.00 uur komt banenzwemmen.",
        "answer": "Beste medewerker,\n\nIk kom donderdag om 20.00 uur banenzwemmen in baan 4. Ik ben tien minuten eerder aanwezig.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vragenlijst fysiotherapie",
        "prompt": "Schrijf aan de fysiotherapeut. U vraagt waar u de korte vragenlijst kunt vinden.",
        "answer": "Beste fysiotherapeut,\n\nWaar kan ik de korte vragenlijst voor mijn intake vinden? Mijn afspraak is maandag om 15.20 uur.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Oprit vrij houden",
        "prompt": "Schrijf aan uw man. Vertel dat de auto zaterdag niet voor de oprit van de buren mag staan.",
        "answer": "Hoi,\n\nZet de auto zaterdag niet voor de oprit van de buren. Zij plaatsen een nieuwe schutting.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Schimmel in badkamer melden",
        "prompt": "Schrijf aan de woningcorporatie. U meldt schimmel in de badkamer en vraagt om advies.",
        "answer": "Beste woningcorporatie,\n\nIk heb schimmel in de badkamer gezien. Kunt u mij advies geven of een afspraak maken?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Zorgnota opsturen",
        "prompt": "Schrijf aan de zorgverzekeraar. U vraagt of een foto van de zorgnota genoeg is.",
        "answer": "Beste zorgverzekeraar,\n\nIs een foto van mijn zorgnota genoeg voor de declaratie? Ik bewaar de papieren nota thuis.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Inschrijven taalmaatjesavond",
        "prompt": "Schrijf aan de bibliotheek. U wilt zich inschrijven voor de taalmaatjesavond.",
        "answer": "Beste bibliotheek,\n\nIk wil mij graag inschrijven voor de taalmaatjesavond op maandag. Mijn naam is Violetta Bonenkamp.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Proefles muziek herinneren",
        "prompt": "Schrijf een bericht aan uw dochter. Herinner haar aan de proefles muziek en de fles water.",
        "answer": "Hoi,\n\nDenk aan je proefles muziek dinsdag. Neem je schoolagenda en een fles water mee.\n\nLiefs,\nMama"
      },
      {
        "title": "Fiets later ophalen",
        "prompt": "Schrijf aan de fietsenmaker. U haalt uw fiets vrijdag na 16.30 uur op.",
        "answer": "Beste fietsenmaker,\n\nIk haal mijn fiets vrijdag na 16.30 uur op. Ik betaal met pin.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Boerderijpakket bestellen",
        "prompt": "Schrijf aan de boerderijmarkt. U bestelt een pakket met kip, courgette en rode paprika.",
        "answer": "Beste medewerker,\n\nIk wil graag een pakket met kip, courgette en rode paprika bestellen. Ik haal het donderdagmiddag op.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Aankomsttijd hotel sturen",
        "prompt": "Schrijf aan het hotel in Maastricht. U komt zaterdag rond 15.00 uur aan.",
        "answer": "Beste hotel,\n\nWij komen zaterdag rond 15.00 uur aan. Kunt u deze aankomsttijd noteren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Podcast tijdens namiddagwandeling",
        "prompt": "Schrijf aan een vriendin. Vertel dat u na het werk gaat wandelen en een podcast luistert.",
        "answer": "Hoi,\n\nNa mijn werk ga ik wandelen en luister ik naar een podcast over AI. Dat vind ik ontspannend.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Vier zinnen over gezonde zondag",
        "prompt": "Schrijf vier korte zinnen over zondag. Gebruik de woorden zwemmen, gezin, groenten en rust.",
        "answer": "Zondag ga ik zwemmen. Daarna eet ik met mijn gezin. Ik kook groenten met kip. In de avond neem ik rust."
      }
    ]
  },
  {
    "id": "speaking",
    "number": "03",
    "category": "Examen",
    "title": "Spreken",
    "goal": "Spreek hardop in korte zinnen. Oefen vragen stellen, uitleg geven en beschrijven.",
    "meta": [
      "Mondeling examen",
      "Korte antwoorden",
      "Met afbeeldingen"
    ],
    "exercises": [
      {
        "title": "AI-examinator voor lokale situaties",
        "prompt": "Open een spraaktool en vraag om twaalf korte A2-vragen over gemeente, huisarts, school, vervoer, wonen, verzekering en gezin.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel twaalf korte vragen over gemeente, huisarts, school, supermarkt, bus, werk, zwemmen, fysiotherapie, buren, woning, zorgverzekering, bibliotheek en gezin. Wacht na elke vraag op mijn antwoord."
      },
      {
        "title": "Voorstellen bij taalmaatjesavond",
        "prompt": "Vertel uw naam, woonplaats, gezin en waarom u naar de taalmaatjesavond komt.",
        "answer": "Hallo, ik ben Violetta Bonenkamp. Ik woon in Sterksel met mijn man en twee dochters. Ik kom omdat ik meer Nederlands wil oefenen."
      },
      {
        "title": "Werkdag met technologie",
        "prompt": "Vertel kort wat u thuis doet voor uw startup en waarom privacy belangrijk is.",
        "answer": "Ik werk thuis aan mijn startup. Ik gebruik technologie en AI. Privacy is belangrijk omdat ik goed met gegevens wil omgaan."
      },
      {
        "title": "Papieren kalender vragen",
        "prompt": "U belt de gemeente. Vraag om de afvalkalender per post.",
        "answer": "Goedemorgen, ik kan niet inloggen. Kunt u de afvalkalender per post naar mij sturen?"
      },
      {
        "title": "Herhaalrecept navragen",
        "prompt": "Bel de huisartsenpraktijk en vraag of uw herhaalrecept klaarstaat.",
        "answer": "Goedemorgen, staat mijn herhaalrecept voor bloeddrukmedicijn klaar in het patientenportaal?"
      },
      {
        "title": "Leerkracht naar lokaal vragen",
        "prompt": "Vraag aan de leerkracht waar het tienminutengesprek is.",
        "answer": "Goedemiddag, waar is het tienminutengesprek woensdagavond? Ik neem het rapport mee."
      },
      {
        "title": "Koeltas bij voordeur",
        "prompt": "Vertel aan de bezorger waar de lege koeltas staat.",
        "answer": "De lege koeltas staat maandag bij de voordeur. U kunt de tas daar meenemen."
      },
      {
        "title": "Tijdelijke opstapplaats vragen",
        "prompt": "Vraag aan een reiziger waar u deze week op bus 318 moet stappen.",
        "answer": "Pardon, waar moet ik deze week op bus 318 stappen? Halte Kerkplein is dicht."
      },
      {
        "title": "Webinar voor bedrijf",
        "prompt": "Vertel aan een medewerker dat u een online sessie over privacy wilt volgen.",
        "answer": "Ik wil graag de online sessie over privacy volgen. Ik heb een klein bedrijf en werk veel met gegevens."
      },
      {
        "title": "Baan in zwembad vragen",
        "prompt": "Vraag bij de zwembadbalie in welke baan u mag zwemmen.",
        "answer": "Goedemiddag, in welke baan mag ik donderdag banenzwemmen? Ik heb een reservering om acht uur."
      },
      {
        "title": "Handdoek voor intake",
        "prompt": "Vraag de fysiotherapeut of u een handdoek moet meenemen.",
        "answer": "Goedemiddag, moet ik maandag een handdoek meenemen voor mijn intake?"
      },
      {
        "title": "Auto niet voor oprit",
        "prompt": "Vertel uw buurvrouw dat u uw auto ergens anders zet.",
        "answer": "Ik zet mijn auto zaterdag niet voor uw oprit. Dan kunt u goed werken aan de schutting."
      },
      {
        "title": "Ventilatie thuis uitleggen",
        "prompt": "Vertel aan de woningcorporatie wat u al heeft gedaan tegen schimmel.",
        "answer": "Ik heb de ventilatieroosters schoongemaakt en opengezet. Toch zie ik schimmel in de badkamer."
      },
      {
        "title": "Nota declareren vragen",
        "prompt": "Vraag aan de zorgverzekeraar hoe u de nota van de fysiotherapeut indient.",
        "answer": "Goedemorgen, hoe kan ik de zorgnota van de fysiotherapeut indienen in de app?"
      },
      {
        "title": "Inschrijven in bibliotheek",
        "prompt": "Vraag in de bibliotheek of u zich kunt inschrijven voor de taalmaatjesavond.",
        "answer": "Goedemiddag, kan ik mij inschrijven voor de taalmaatjesavond? Mijn naam en telefoonnummer heb ik bij me."
      },
      {
        "title": "Dochter aan proefles herinneren",
        "prompt": "Vertel uw dochter wat zij dinsdag mee moet nemen.",
        "answer": "Neem dinsdag je schoolagenda en een fles water mee naar de proefles muziek."
      },
      {
        "title": "Achterband ophalen",
        "prompt": "Vraag de fietsenmaker of uw fiets na half vijf klaar is.",
        "answer": "Goedemiddag, is mijn fiets na half vijf klaar? De achterband wordt vandaag gerepareerd."
      },
      {
        "title": "Koken met marktproducten",
        "prompt": "Vertel wat u gaat koken met kip, courgette en rode paprika.",
        "answer": "Ik kook kip met courgette en rode paprika. Dat is een gezonde maaltijd voor mijn gezin."
      },
      {
        "title": "Hotel aankomst doorgeven",
        "prompt": "Vertel het hotel hoe laat u ongeveer aankomt.",
        "answer": "Wij komen zaterdag rond drie uur aan in Maastricht. Ik wil onze aankomsttijd doorgeven."
      },
      {
        "title": "Gezonde pauze beschrijven",
        "prompt": "Vertel wat u doet voor beweging tijdens een werkdag thuis.",
        "answer": "Tijdens mijn werkdag thuis neem ik een pauze. Ik wandel buiten en luister naar een podcast."
      },
      {
        "title": "Afbeelding afvalbalie gemeente",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u bij de balie van de gemeente bent.",
        "image": "images/speaking/v013-speaking-municipality-waste-calendar-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch municipal service desk. Scene: adult resident asks a clerk for a paper waste collection calendar, simple counter, ID card and envelope visible, no readable text, no logos, no watermark.",
        "answer": "Ik ben bij de gemeente. Ik vraag om een afvalkalender per post."
      },
      {
        "title": "Afbeelding recept bij zorgbalie",
        "prompt": "Kijk naar de afbeelding. Vertel welk medicijn u komt ophalen.",
        "image": "images/speaking/v013-speaking-health-repeat-prescription-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a calm Dutch pharmacy counter area. Scene: adult patient receives repeat prescription medicine in a small paper bag from pharmacy staff, no readable text, no logos, no watermark.",
        "answer": "Ik kom mijn bloeddrukmedicijn ophalen. Het is een herhaalrecept."
      },
      {
        "title": "Afbeelding gesprek op school",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u met de leerkracht praat.",
        "image": "images/speaking/v013-speaking-school-ten-minute-talk-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch classroom after school. Scene: parent and teacher sit at a small table with a school report and calendar, warm indoor light, no readable text, no logos, no watermark.",
        "answer": "Ik heb een tienminutengesprek op school. We praten over rekenen en het rapport."
      },
      {
        "title": "Afbeelding tijdelijke bushalte",
        "prompt": "Kijk naar de afbeelding. Vraag waar bus 318 stopt.",
        "image": "images/speaking/v013-speaking-transport-temporary-bus-stop-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style at a Dutch temporary bus stop on a village street. Scene: adult traveler with phone asks another traveler about a bus stop, bus in background, signs intentionally unreadable, no logos, no watermark.",
        "answer": "Pardon, waar stopt bus 318 deze week?"
      },
      {
        "title": "Afbeelding ventilatie in badkamer",
        "prompt": "Kijk naar de afbeelding. Leg uit wat u in huis schoonmaakt.",
        "image": "images/speaking/v013-speaking-housing-bathroom-ventilation-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a clean Dutch bathroom. Scene: adult resident cleans a small ventilation grille with a cloth, simple bathroom tiles, natural light, no readable text, no logos, no watermark.",
        "answer": "Ik maak het ventilatierooster schoon. Daarna laat ik het rooster open voor frisse lucht."
      },
      {
        "title": "Afbeelding taalavond bibliotheek",
        "prompt": "Kijk naar de afbeelding. Vertel waarvoor u zich inschrijft.",
        "image": "images/speaking/v013-speaking-library-language-evening-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch public library meeting corner. Scene: adult learner signs up for a language buddy evening at a small table, bookshelves and coffee cups visible, no readable text, no logos, no watermark.",
        "answer": "Ik schrijf mij in voor de taalmaatjesavond in de bibliotheek."
      },
      {
        "title": "Geboortedatum aan apotheek geven",
        "prompt": "Een medewerker vraagt naar uw geboortedatum. Geef een kort beleefd antwoord.",
        "answer": "Mijn geboortedatum is nodig voor het recept. Ik geef die graag aan u door."
      },
      {
        "title": "Weekend met gezin in Maastricht",
        "prompt": "Vertel kort wat u in Maastricht met uw gezin gaat doen.",
        "answer": "Wij gaan wandelen in Maastricht, eten samen en slapen in een hotel. Ik geef de aankomsttijd door."
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
        "title": "AI-luistercoach voor korte acties",
        "prompt": "Open een spraaktool en vraag om een langzaam A2-luisterbericht met een plaats, tijd, reden en actie.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor met een plaats, tijd, reden en actie. Stel daarna drie vragen."
      },
      {
        "title": "Afvalkalender per post",
        "audio": "audio/v013-listening-01-gemeente-afvalkalender-post.mp3",
        "transcript": "Mevrouw Bonenkamp, de digitale afvalkalender staat maandag klaar. Kunt u niet inloggen? Bel dan voor vrijdag met de publieksbalie voor een papieren kalender.",
        "questions": [
          "Vraag 1: Wanneer staat de digitale afvalkalender klaar?",
          "Vraag 2: Met wie belt mevrouw als inloggen niet lukt?",
          "Vraag 3: Welke kalender kan zij per post krijgen?"
        ],
        "answer": "De kalender staat maandag klaar. Zij belt met de publieksbalie. Zij kan een papieren afvalkalender krijgen."
      },
      {
        "title": "Recept in portaal",
        "audio": "audio/v013-listening-02-huisarts-herhaalrecept-portaal.mp3",
        "transcript": "Uw herhaalrecept voor bloeddrukmedicijn staat in het patientenportaal. Bestel het voor donderdag twaalf uur. Vrijdagmiddag ligt het medicijn bij de apotheek.",
        "questions": [
          "Vraag 1: Waar staat het herhaalrecept?",
          "Vraag 2: Voor wanneer bestelt mevrouw het recept?",
          "Vraag 3: Waar ligt het medicijn vrijdagmiddag?"
        ],
        "answer": "Het recept staat in het patientenportaal. Zij bestelt het voor donderdag twaalf uur. Het medicijn ligt bij de apotheek."
      },
      {
        "title": "Gesprek over rekenen",
        "audio": "audio/v013-listening-03-school-rekenen-oudergesprek.mp3",
        "transcript": "De school plant woensdagavond een tienminutengesprek over rekenen. Kies een tijd in de ouderapp en neem het laatste rapport mee.",
        "questions": [
          "Vraag 1: Op welke avond is het gesprek?",
          "Vraag 2: Over welk vak gaat het gesprek?",
          "Vraag 3: Welk document neemt mevrouw mee naar school?"
        ],
        "answer": "Het gesprek is woensdagavond. Het gaat over rekenen. Zij neemt het laatste rapport mee."
      },
      {
        "title": "Bezorging met koeltas",
        "audio": "audio/v013-listening-04-supermarkt-koeltas-retour.mp3",
        "transcript": "De supermarkt bezorgt zaterdag tussen negen en tien uur. De diepvriesproducten zitten in een koeltas. Zet de lege tas maandag bij de voordeur.",
        "questions": [
          "Vraag 1: Tussen welke tijden bezorgt de supermarkt?",
          "Vraag 2: Wat zit er in een koeltas?",
          "Vraag 3: Waar zet mevrouw de lege tas?"
        ],
        "answer": "De supermarkt bezorgt tussen negen en tien uur. De diepvriesproducten zitten in een koeltas. Zij zet de lege tas bij de voordeur."
      },
      {
        "title": "Halte Dorpstraat",
        "audio": "audio/v013-listening-05-bus-318-halte-dorpstraat.mp3",
        "transcript": "Bus drie een acht stopt komende week niet bij halte Kerkplein. Stap op bij halte Dorpstraat en vertrek vijf minuten eerder van huis.",
        "questions": [
          "Vraag 1: Welke bus stopt niet bij halte Kerkplein?",
          "Vraag 2: Bij welke halte stapt mevrouw op?",
          "Vraag 3: Hoeveel minuten eerder vertrekt zij?"
        ],
        "answer": "Bus 318 stopt niet bij halte Kerkplein. Zij stapt op bij halte Dorpstraat. Zij vertrekt vijf minuten eerder."
      },
      {
        "title": "Privacy-sessie online",
        "audio": "audio/v013-listening-06-werk-kvk-privacy-sessie.mp3",
        "transcript": "Dinsdag geeft de Kamer van Koophandel een gratis online sessie over privacy voor kleine bedrijven. De link krijgt u een dag van tevoren.",
        "questions": [
          "Vraag 1: Wie geeft de online sessie?",
          "Vraag 2: Waarover gaat de sessie?",
          "Vraag 3: Wanneer krijgt mevrouw de link?"
        ],
        "answer": "De Kamer van Koophandel geeft de sessie. De sessie gaat over privacy. Zij krijgt de link een dag van tevoren."
      },
      {
        "title": "Baan vier reservering",
        "audio": "audio/v013-listening-07-zwembad-baan-vier.mp3",
        "transcript": "Voor banenzwemmen is donderdag baan vier gereserveerd van acht uur tot kwart voor negen. Neem een muntje voor het kluisje mee.",
        "questions": [
          "Vraag 1: Welke baan is gereserveerd?",
          "Vraag 2: Tot hoe laat is de baan gereserveerd?",
          "Vraag 3: Wat neemt mevrouw mee voor het kluisje?"
        ],
        "answer": "Baan vier is gereserveerd. De baan is gereserveerd tot kwart voor negen. Zij neemt een muntje mee."
      },
      {
        "title": "Fysiotherapie intake",
        "audio": "audio/v013-listening-08-fysiotherapeut-intake-vragenlijst.mp3",
        "transcript": "De fysiotherapeut heeft maandag om tien voor half vier een intakeplek. Vul vooraf een korte vragenlijst in en neem een handdoek mee.",
        "questions": [
          "Vraag 1: Bij wie is de intake?",
          "Vraag 2: Hoe laat is de intake?",
          "Vraag 3: Wat vult mevrouw vooraf in?"
        ],
        "answer": "De intake is bij de fysiotherapeut. De intake is om tien voor half vier. Zij vult vooraf een korte vragenlijst in."
      },
      {
        "title": "Schutting zaterdag",
        "audio": "audio/v013-listening-09-buren-schutting-geluid.mp3",
        "transcript": "De buren plaatsen zaterdag een nieuwe schutting. Tussen elf en een uur kan er geluid zijn. Zet uw auto niet voor hun oprit.",
        "questions": [
          "Vraag 1: Wat plaatsen de buren?",
          "Vraag 2: Wanneer kan er geluid zijn?",
          "Vraag 3: Waar zet mevrouw haar auto niet?"
        ],
        "answer": "De buren plaatsen een nieuwe schutting. Tussen elf en een uur kan er geluid zijn. Zij zet haar auto niet voor hun oprit."
      },
      {
        "title": "Roosters openlaten",
        "audio": "audio/v013-listening-10-woning-ventilatieroosters.mp3",
        "transcript": "De woningcorporatie vraagt bewoners de ventilatieroosters schoon te maken. Laat de roosters daarna open. Bel de klantenlijn bij schimmel in de badkamer.",
        "questions": [
          "Vraag 1: Wat maken bewoners schoon?",
          "Vraag 2: Hoe moeten de roosters daarna blijven?",
          "Vraag 3: Wanneer belt mevrouw de klantenlijn?"
        ],
        "answer": "Bewoners maken de ventilatieroosters schoon. De roosters blijven open. Zij belt bij schimmel in de badkamer."
      },
      {
        "title": "Declaratie in verzekeringsapp",
        "audio": "audio/v013-listening-11-zorgverzekering-nota-indienen.mp3",
        "transcript": "U kunt de zorgnota van de fysiotherapeut digitaal indienen. Maak een foto in de verzekeringsapp en bewaar de papieren nota twee maanden.",
        "questions": [
          "Vraag 1: Welke zorgnota dient mevrouw in?",
          "Vraag 2: Waar maakt zij een foto?",
          "Vraag 3: Hoe lang bewaart zij de papieren nota?"
        ],
        "answer": "Zij dient de zorgnota van de fysiotherapeut in. Zij maakt een foto in de verzekeringsapp. Zij bewaart de papieren nota twee maanden."
      },
      {
        "title": "Taalmaatjesavond maandag",
        "audio": "audio/v013-listening-12-bibliotheek-taalmaatjesavond.mp3",
        "transcript": "De bibliotheek organiseert maandag een taalmaatjesavond. Inschrijven is gratis met uw naam en telefoonnummer. De avond begint om half acht.",
        "questions": [
          "Vraag 1: Wat organiseert de bibliotheek?",
          "Vraag 2: Welke gegevens zijn nodig voor inschrijven?",
          "Vraag 3: Hoe laat begint de avond?"
        ],
        "answer": "De bibliotheek organiseert een taalmaatjesavond. Naam en telefoonnummer zijn nodig. De avond begint om half acht."
      },
      {
        "title": "Proefles muziek",
        "audio": "audio/v013-listening-13-dochter-muziek-proefles.mp3",
        "transcript": "Uw dochter heeft dinsdag een proefles muziek. Zij neemt haar schoolagenda en een fles water mee. Ouders wachten in de hal.",
        "questions": [
          "Vraag 1: Welke proefles heeft de dochter?",
          "Vraag 2: Welke twee dingen neemt zij mee?",
          "Vraag 3: Waar wachten ouders?"
        ],
        "answer": "Zij heeft een proefles muziek. Zij neemt haar schoolagenda en een fles water mee. Ouders wachten in de hal."
      },
      {
        "title": "Fiets na half vijf",
        "audio": "audio/v013-listening-14-fietsenmaker-achterband.mp3",
        "transcript": "De fietsenmaker repareert vrijdag uw achterband. U kunt de fiets na half vijf ophalen. Betalen kan met pin.",
        "questions": [
          "Vraag 1: Welke band repareert de fietsenmaker?",
          "Vraag 2: Wanneer kan mevrouw de fiets ophalen?",
          "Vraag 3: Hoe kan zij betalen?"
        ],
        "answer": "De fietsenmaker repareert de achterband. Zij kan de fiets na half vijf ophalen. Zij kan met pin betalen."
      },
      {
        "title": "Pakket met kip en groente",
        "audio": "audio/v013-listening-15-markt-kip-courgette-paprika.mp3",
        "transcript": "De boerderijmarkt heeft een pakket met kip, courgette en rode paprika. Bestel voor donderdagmiddag en bewaar de kip direct in de koelkast.",
        "questions": [
          "Vraag 1: Welke producten zitten in het pakket?",
          "Vraag 2: Wanneer bestelt mevrouw uiterlijk?",
          "Vraag 3: Waar bewaart zij de kip?"
        ],
        "answer": "Er zitten kip, courgette en rode paprika in. Zij bestelt voor donderdagmiddag. Zij bewaart de kip in de koelkast."
      },
      {
        "title": "Hotel in Maastricht",
        "audio": "audio/v013-listening-16-hotel-maastricht-aankomsttijd.mp3",
        "transcript": "Voor uw weekend in Maastricht vraagt het hotel om een aankomsttijd. Stuur voor zes uur een bericht. Ontbijt is niet bij de prijs inbegrepen.",
        "questions": [
          "Vraag 1: Waar is het hotel?",
          "Vraag 2: Wat vraagt het hotel?",
          "Vraag 3: Wat zit niet bij de prijs?"
        ],
        "answer": "Het hotel is in Maastricht. Het hotel vraagt om een aankomsttijd. Ontbijt zit niet bij de prijs."
      }
    ]
  },
  {
    "id": "knm",
    "number": "05",
    "category": "Examen",
    "title": "KNM",
    "goal": "Oefen kennisvragen over wonen, zorg, school, werk, gemeente, rechten en regels.",
    "meta": [
      "KNM",
      "Meerkeuzevragen",
      "A/B/C verdeeld"
    ],
    "exercises": [
      {
        "title": "Postadres bij gemeente",
        "prompt": "Vraag: Waarom geeft u een juist adres door aan de gemeente?",
        "questions": [
          "A. Omdat de supermarkt dan korting geeft.",
          "B. Omdat officiele post en gegevens u goed kunnen bereiken.",
          "C. Omdat u dan nooit belasting hoeft te betalen."
        ],
        "answer": "B. Omdat officiele post en gegevens u goed kunnen bereiken."
      },
      {
        "title": "Herhaalrecept regelen",
        "prompt": "Vraag: Wat doet u meestal als u opnieuw medicijnen nodig heeft?",
        "questions": [
          "A. U deelt medicijnen van een buur.",
          "B. U koopt elk medicijn op straat.",
          "C. U vraagt een herhaalrecept via huisarts of apotheek."
        ],
        "answer": "C. U vraagt een herhaalrecept via huisarts of apotheek."
      },
      {
        "title": "Oudergesprek op school",
        "prompt": "Vraag: Waarom is contact met school belangrijk?",
        "questions": [
          "A. Ouders weten hoe het met hun kind gaat en kunnen vragen stellen.",
          "B. Ouders kiezen het salaris van de leerkracht.",
          "C. Ouders hoeven dan geen regels meer te volgen."
        ],
        "answer": "A. Ouders weten hoe het met hun kind gaat en kunnen vragen stellen."
      },
      {
        "title": "Product teruggeven",
        "prompt": "Vraag: Wat is verstandig als er iets mis is met een bestelling?",
        "questions": [
          "A. Niets bewaren en boos weggaan.",
          "B. Contact opnemen met de winkel en de gegevens bij de hand houden.",
          "C. Altijd direct 112 bellen."
        ],
        "answer": "B. Contact opnemen met de winkel en de gegevens bij de hand houden."
      },
      {
        "title": "Reizen met bus of trein",
        "prompt": "Vraag: Wat doet u als een halte tijdelijk dicht is?",
        "questions": [
          "A. U gaat op de rijbaan wachten.",
          "B. U stapt zonder te betalen in.",
          "C. U zoekt de tijdelijke halte of actuele reisinformatie."
        ],
        "answer": "C. U zoekt de tijdelijke halte of actuele reisinformatie."
      },
      {
        "title": "Gegevens van klanten",
        "prompt": "Vraag: Wat past bij zorgvuldig ondernemen?",
        "questions": [
          "A. Netjes omgaan met klantgegevens en afspraken nakomen.",
          "B. Alle gegevens openbaar delen.",
          "C. Facturen meteen weggooien."
        ],
        "answer": "A. Netjes omgaan met klantgegevens en afspraken nakomen."
      },
      {
        "title": "Regels in zwembad",
        "prompt": "Vraag: Waarom volgt u de regels in het zwembad?",
        "questions": [
          "A. Omdat zwemmen dan gratis wordt.",
          "B. Voor veiligheid en duidelijkheid voor iedereen.",
          "C. Omdat de gemeente uw boodschappen betaalt."
        ],
        "answer": "B. Voor veiligheid en duidelijkheid voor iedereen."
      },
      {
        "title": "Afspraak verplaatsen",
        "prompt": "Vraag: Wat doet u als u niet naar een zorgafspraak kunt komen?",
        "questions": [
          "A. U komt niet en zegt niets.",
          "B. U stuurt een lege envelop.",
          "C. U meldt het op tijd en vraagt zo nodig een nieuwe afspraak."
        ],
        "answer": "C. U meldt het op tijd en vraagt zo nodig een nieuwe afspraak."
      },
      {
        "title": "Buren informeren",
        "prompt": "Vraag: Wat past bij prettig wonen met buren?",
        "questions": [
          "A. Elkaar op tijd informeren bij werk met geluid.",
          "B. Altijd de oprit van de buren blokkeren.",
          "C. Nooit met elkaar praten."
        ],
        "answer": "A. Elkaar op tijd informeren bij werk met geluid."
      },
      {
        "title": "Gezond binnenklimaat",
        "prompt": "Vraag: Waarom ventileert u uw woning?",
        "questions": [
          "A. Omdat ramen nooit open mogen.",
          "B. Voor frisse lucht en minder kans op vochtproblemen.",
          "C. Om alle warmte expres weg te gooien."
        ],
        "answer": "B. Voor frisse lucht en minder kans op vochtproblemen."
      },
      {
        "title": "Zorgnota bewaren",
        "prompt": "Vraag: Waarom bewaart u soms een zorgnota na indienen?",
        "questions": [
          "A. Om hem aan de kapper te geven.",
          "B. Omdat papier altijd verboden is.",
          "C. Omdat de verzekeraar later om bewijs kan vragen."
        ],
        "answer": "C. Omdat de verzekeraar later om bewijs kan vragen."
      },
      {
        "title": "Bibliotheek als hulpplek",
        "prompt": "Vraag: Waarmee helpt de bibliotheek inwoners vaak?",
        "questions": [
          "A. Met lezen, taal, computers en informatie.",
          "B. Met spoedoperaties.",
          "C. Met het maken van wetten."
        ],
        "answer": "A. Met lezen, taal, computers en informatie."
      },
      {
        "title": "Kind naar activiteit",
        "prompt": "Vraag: Wat is normaal bij een proefles voor een kind?",
        "questions": [
          "A. Het kind zonder informatie achterlaten.",
          "B. Op tijd komen en meenemen wat gevraagd is.",
          "C. De les voor alle andere kinderen stoppen."
        ],
        "answer": "B. Op tijd komen en meenemen wat gevraagd is."
      },
      {
        "title": "Fiets laten controleren",
        "prompt": "Vraag: Wat is verstandig als uw fiets kapot is?",
        "questions": [
          "A. Toch hard doorrijden zonder remmen.",
          "B. De fiets midden op straat laten staan.",
          "C. De fiets laten repareren voordat u lange stukken fietst."
        ],
        "answer": "C. De fiets laten repareren voordat u lange stukken fietst."
      },
      {
        "title": "Gezond eten",
        "prompt": "Vraag: Wat past bij gezond eten?",
        "questions": [
          "A. Afwisselend eten met bijvoorbeeld groente, eiwit en genoeg drinken.",
          "B. Alleen snoep eten.",
          "C. Nooit ontbijt nemen."
        ],
        "answer": "A. Afwisselend eten met bijvoorbeeld groente, eiwit en genoeg drinken."
      },
      {
        "title": "Hotelafspraak",
        "prompt": "Vraag: Waarom geeft u soms een aankomsttijd door aan een hotel?",
        "questions": [
          "A. Omdat niemand dan hoeft te werken.",
          "B. Zodat het hotel rekening kan houden met uw aankomst.",
          "C. Omdat u dan geen identiteitsbewijs nodig heeft."
        ],
        "answer": "B. Zodat het hotel rekening kan houden met uw aankomst."
      },
      {
        "title": "Stemmen is persoonlijk",
        "prompt": "Vraag: Wat betekent stemgeheim?",
        "questions": [
          "A. Uw buur kiest voor u.",
          "B. Uw werkgever ziet uw keuze.",
          "C. U mag zelf kiezen en hoeft uw stem niet te vertellen."
        ],
        "answer": "C. U mag zelf kiezen en hoeft uw stem niet te vertellen."
      },
      {
        "title": "Iedereen eerlijk behandelen",
        "prompt": "Vraag: Wat hoort bij gelijke behandeling?",
        "questions": [
          "A. Mensen niet discrimineren door afkomst, geloof, geslacht of beperking.",
          "B. Alleen familie eerlijk helpen.",
          "C. Mensen zonder reden weigeren."
        ],
        "answer": "A. Mensen niet discrimineren door afkomst, geloof, geslacht of beperking."
      },
      {
        "title": "Inloggegevens beschermen",
        "prompt": "Vraag: Hoe gebruikt u DigiD veilig?",
        "questions": [
          "A. U geeft uw code aan onbekenden.",
          "B. U houdt uw inloggegevens geheim.",
          "C. U zet de code op een openbaar prikbord."
        ],
        "answer": "B. U houdt uw inloggegevens geheim."
      },
      {
        "title": "Noodnummer kiezen",
        "prompt": "Vraag: Wanneer belt u 112?",
        "questions": [
          "A. Voor openingstijden van de bibliotheek.",
          "B. Voor een gewone vraag over de bus.",
          "C. Bij direct gevaar, brand of ernstige spoed."
        ],
        "answer": "C. Bij direct gevaar, brand of ernstige spoed."
      },
      {
        "title": "Buurt helpen als vrijwilliger",
        "prompt": "Vraag: Waarom doen mensen vrijwilligerswerk?",
        "questions": [
          "A. Om anderen te helpen en mee te doen in de samenleving.",
          "B. Om automatisch een paspoort te krijgen.",
          "C. Om alle regels te vermijden."
        ],
        "answer": "A. Om anderen te helpen en mee te doen in de samenleving."
      },
      {
        "title": "Juiste bak gebruiken",
        "prompt": "Vraag: Wat doet u met afval volgens lokale regels?",
        "questions": [
          "A. Alles naast de container leggen.",
          "B. Afval in de juiste bak of op de juiste plaats doen.",
          "C. Glas bij het groenteafval gooien."
        ],
        "answer": "B. Afval in de juiste bak of op de juiste plaats doen."
      },
      {
        "title": "Slim omgaan met stroom",
        "prompt": "Vraag: Waarom letten veel mensen op energiegebruik?",
        "questions": [
          "A. Omdat licht gebruiken strafbaar is.",
          "B. Omdat douchen niet mag.",
          "C. Omdat het kosten kan besparen en beter is voor het milieu."
        ],
        "answer": "C. Omdat het kosten kan besparen en beter is voor het milieu."
      },
      {
        "title": "Verzekering lezen",
        "prompt": "Vraag: Wat is verstandig voordat u een verzekering afsluit?",
        "questions": [
          "A. Voorwaarden en dekking lezen.",
          "B. Alleen naar de kleur van de website kijken.",
          "C. Geen vragen stellen."
        ],
        "answer": "A. Voorwaarden en dekking lezen."
      },
      {
        "title": "Arbeidsafspraak nakomen",
        "prompt": "Vraag: Wat hoort bij betrouwbaar werken?",
        "questions": [
          "A. Te laat komen zonder bericht.",
          "B. Afspraken nakomen en op tijd communiceren.",
          "C. Nooit reageren op klanten."
        ],
        "answer": "B. Afspraken nakomen en op tijd communiceren."
      },
      {
        "title": "Hulp voor opvangkosten",
        "prompt": "Vraag: Waarvoor kan kinderopvangtoeslag bedoeld zijn?",
        "questions": [
          "A. Voor elke vakantie.",
          "B. Voor nieuwe fietsen.",
          "C. Voor hulp bij kosten van erkende kinderopvang."
        ],
        "answer": "C. Voor hulp bij kosten van erkende kinderopvang."
      },
      {
        "title": "Identiteitsbewijs meenemen",
        "prompt": "Vraag: Waarom neemt u vaak een identiteitsbewijs mee naar een officiele afspraak?",
        "questions": [
          "A. Zodat de organisatie kan controleren wie u bent.",
          "B. Zodat u gratis boodschappen krijgt.",
          "C. Zodat u geen afspraak nodig heeft."
        ],
        "answer": "A. Zodat de organisatie kan controleren wie u bent."
      },
      {
        "title": "Rustig probleem oplossen",
        "prompt": "Vraag: Wat is verstandig bij een klein probleem met een buur?",
        "questions": [
          "A. Meteen harde muziek aanzetten.",
          "B. Rustig praten of een vriendelijk bericht sturen.",
          "C. De deur blokkeren."
        ],
        "answer": "B. Rustig praten of een vriendelijk bericht sturen."
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
        "title": "Volgorde met afvalkalender",
        "prompt": "Opdracht: Zet in goede volgorde: de afvalkalender / Violetta / morgen / downloadt",
        "answer": "Violetta downloadt morgen de afvalkalender."
      },
      {
        "title": "Volgorde met proefles",
        "prompt": "Opdracht: Zet in goede volgorde: neemt / naar de proefles / haar dochter / water / mee",
        "answer": "Haar dochter neemt water mee naar de proefles."
      },
      {
        "title": "Volgorde met bushalte",
        "prompt": "Opdracht: Zet in goede volgorde: bij halte Dorpstraat / stappen / wij / deze week / op",
        "answer": "Wij stappen deze week bij halte Dorpstraat op."
      },
      {
        "title": "Volgorde met declaratie",
        "prompt": "Opdracht: Zet in goede volgorde: de nota / in de app / dient / Violetta / in",
        "answer": "Violetta dient de nota in de app in."
      },
      {
        "title": "Volgorde met reden",
        "prompt": "Opdracht: Zet in goede volgorde: omdat / de bus vertrekt / ik / vijf minuten eerder / loop",
        "answer": "Ik loop vijf minuten eerder omdat de bus vertrekt."
      },
      {
        "title": "Vraag met koeltas",
        "prompt": "Opdracht: Maak een vraag: ik / teruggeven / waar / kan / de koeltas",
        "answer": "Waar kan ik de koeltas teruggeven?"
      },
      {
        "title": "Vraag met taalavond",
        "prompt": "Opdracht: Maak een vraag: de taalmaatjesavond / wanneer / begint",
        "answer": "Wanneer begint de taalmaatjesavond?"
      },
      {
        "title": "Zin met omdat",
        "prompt": "Opdracht: Maak een zin: Ik bel de gemeente. Ik kan niet inloggen.",
        "answer": "Ik bel de gemeente omdat ik niet kan inloggen."
      },
      {
        "title": "Zin met als",
        "prompt": "Opdracht: Maak een zin: De fiets is klaar. Ik haal hem op.",
        "answer": "Als de fiets klaar is, haal ik hem op."
      },
      {
        "title": "Volgorde met handdoek",
        "prompt": "Opdracht: Zet in goede volgorde: ook / een handdoek / u / moet / meenemen",
        "answer": "U moet ook een handdoek meenemen."
      },
      {
        "title": "Volgorde met webinar",
        "prompt": "Opdracht: Zet in goede volgorde: over privacy / Violetta / dinsdag / volgt / een webinar",
        "answer": "Violetta volgt dinsdag een webinar over privacy."
      },
      {
        "title": "Vraag met fiets",
        "prompt": "Opdracht: Maak een vraag: hoe laat / kan / ophalen / ik / de fiets",
        "answer": "Hoe laat kan ik de fiets ophalen?"
      },
      {
        "title": "Zin met daarna",
        "prompt": "Opdracht: Maak een zin met daarna: Ik maak de roosters schoon. Ik laat ze open.",
        "answer": "Ik maak de roosters schoon. Daarna laat ik ze open."
      },
      {
        "title": "Volgorde met reis",
        "prompt": "Opdracht: Zet in goede volgorde: naar Maastricht / wij / dit weekend / reizen",
        "answer": "Wij reizen dit weekend naar Maastricht."
      },
      {
        "title": "Wie-vraag met hal",
        "prompt": "Opdracht: Maak een vraag: in de hal / wie / wacht",
        "answer": "Wie wacht in de hal?"
      },
      {
        "title": "Volgorde met badkamer",
        "prompt": "Opdracht: Zet in goede volgorde: vandaag / de ventilatieroosters / maakt / mijn man / schoon",
        "answer": "Mijn man maakt vandaag de ventilatieroosters schoon."
      },
      {
        "title": "Zin met want",
        "prompt": "Opdracht: Maak een zin met want: Ik bewaar de nota. De verzekeraar kan erom vragen.",
        "answer": "Ik bewaar de nota, want de verzekeraar kan erom vragen."
      },
      {
        "title": "Keuzevraag met betaling",
        "prompt": "Opdracht: Maak een vraag: met pin / contant / betaalt / u / of",
        "answer": "Betaalt u met pin of contant?"
      }
    ]
  },
  {
    "id": "verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Grammatica: werkwoorden in tijden",
    "goal": "Oefen tegenwoordige tijd, perfectum, verleden tijd en toekomst.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Downloaden in ik-vorm",
        "prompt": "Opdracht: Vul het werkwoord in: Ik ___ de afvalkalender. (downloaden)",
        "answer": "Ik download de afvalkalender."
      },
      {
        "title": "Bestellen met zij",
        "prompt": "Opdracht: Vul het werkwoord in: Zij ___ het herhaalrecept. (bestellen)",
        "answer": "Zij bestelt het herhaalrecept."
      },
      {
        "title": "Kiezen met ouders",
        "prompt": "Opdracht: Vul het werkwoord in: Ouders ___ een tijd in de app. (kiezen)",
        "answer": "Ouders kiezen een tijd in de app."
      },
      {
        "title": "Terugzetten met wij",
        "prompt": "Opdracht: Vul het werkwoord in: Wij ___ de koeltas maandag terug. (zetten)",
        "answer": "Wij zetten de koeltas maandag terug."
      },
      {
        "title": "Perfectum met bellen",
        "prompt": "Opdracht: Maak perfectum: Ik bel de publieksbalie.",
        "answer": "Ik heb de publieksbalie gebeld."
      },
      {
        "title": "Perfectum met innemen",
        "prompt": "Opdracht: Maak perfectum: Zij neemt het medicijn in.",
        "answer": "Zij heeft het medicijn ingenomen."
      },
      {
        "title": "Perfectum met gaan",
        "prompt": "Opdracht: Maak perfectum: Wij gaan naar de bibliotheek.",
        "answer": "Wij zijn naar de bibliotheek gegaan."
      },
      {
        "title": "Perfectum met repareren",
        "prompt": "Opdracht: Maak perfectum: De fietsenmaker repareert de achterband.",
        "answer": "De fietsenmaker heeft de achterband gerepareerd."
      },
      {
        "title": "Perfectum met reserveren",
        "prompt": "Opdracht: Maak perfectum: Ik reserveer baan 4.",
        "answer": "Ik heb baan 4 gereserveerd."
      },
      {
        "title": "Toekomst met indienen",
        "prompt": "Opdracht: Maak toekomst: Ik dien de zorgnota in.",
        "answer": "Ik ga de zorgnota indienen."
      },
      {
        "title": "Toekomstzin met avondeten",
        "prompt": "Opdracht: Maak toekomst: Wij koken kip met paprika.",
        "answer": "Wij gaan kip met paprika koken."
      },
      {
        "title": "Toekomst met reizen",
        "prompt": "Opdracht: Maak toekomst: Wij reizen naar Maastricht.",
        "answer": "Wij gaan naar Maastricht reizen."
      },
      {
        "title": "Zal met doorgeven",
        "prompt": "Opdracht: Maak een zin met zal: Ik geef de aankomsttijd door.",
        "answer": "Ik zal de aankomsttijd doorgeven."
      },
      {
        "title": "Gisteren een intake",
        "prompt": "Opdracht: Vul in: Gisteren ___ ik een intake. (hebben)",
        "answer": "Gisteren had ik een intake."
      },
      {
        "title": "Dichte halte in verleden",
        "prompt": "Opdracht: Vul in: De halte ___ dicht. (zijn)",
        "answer": "De halte was dicht."
      },
      {
        "title": "Krijgen in u-vorm",
        "prompt": "Opdracht: Vul het werkwoord in: U ___ de link morgen. (krijgen)",
        "answer": "U krijgt de link morgen."
      },
      {
        "title": "Meebrengen in wij-vorm",
        "prompt": "Opdracht: Vul het werkwoord in: Wij ___ een muntje ___. (meebrengen)",
        "answer": "Wij brengen een muntje mee."
      },
      {
        "title": "Perfectum met busvertrek",
        "prompt": "Opdracht: Maak perfectum: De bus vertrekt eerder.",
        "answer": "De bus is eerder vertrokken."
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
        "title": "Moeten met identiteitsbewijs",
        "prompt": "Opdracht: Maak een zin met moet: U toont uw identiteitsbewijs.",
        "answer": "U moet uw identiteitsbewijs tonen."
      },
      {
        "title": "Kunnen met kalender",
        "prompt": "Opdracht: Maak een zin met kunt: U krijgt de kalender per post.",
        "answer": "U kunt de kalender per post krijgen."
      },
      {
        "title": "Willen met privacy",
        "prompt": "Opdracht: Maak een zin met wil: Ik volg de online sessie.",
        "answer": "Ik wil de online sessie volgen."
      },
      {
        "title": "Mogen met vragen",
        "prompt": "Opdracht: Maak een zin met mogen: Ouders stellen na het gesprek vragen.",
        "answer": "Ouders mogen na het gesprek vragen stellen."
      },
      {
        "title": "Inloggen scheidbaar",
        "prompt": "Opdracht: Vul in: Ik ___ vandaag niet ___. (inloggen)",
        "answer": "Ik log vandaag niet in."
      },
      {
        "title": "Taalavond inschrijving",
        "prompt": "Opdracht: Vul in: Violetta ___ zich voor de taalavond ___. (aanmelden)",
        "answer": "Violetta meldt zich voor de taalavond aan."
      },
      {
        "title": "Fiets ophalen na werk",
        "prompt": "Opdracht: Vul in: Wij ___ de fiets na half vijf ___. (ophalen)",
        "answer": "Wij halen de fiets na half vijf op."
      },
      {
        "title": "Aankomsttijd melden",
        "prompt": "Opdracht: Vul in: Ik ___ de aankomsttijd ___. (doorgeven)",
        "answer": "Ik geef de aankomsttijd door."
      },
      {
        "title": "Water meenemen naar les",
        "prompt": "Opdracht: Vul in: Mijn dochter ___ water ___. (meenemen)",
        "answer": "Mijn dochter neemt water mee."
      },
      {
        "title": "Vragenlijst vooraf invullen",
        "prompt": "Opdracht: Vul in: U ___ de vragenlijst vooraf ___. (invullen)",
        "answer": "U vult de vragenlijst vooraf in."
      },
      {
        "title": "Reflexief bij inschrijving",
        "prompt": "Opdracht: Maak een zin: ik / zich inschrijven / voor de avond",
        "answer": "Ik schrijf mij in voor de avond."
      },
      {
        "title": "Zich vergissen in tijd",
        "prompt": "Opdracht: Maak een zin: zij / zich vergissen / in de tijd",
        "answer": "Zij vergist zich in de tijd."
      },
      {
        "title": "Voorbereiden op oudergesprek",
        "prompt": "Opdracht: Maak een zin: wij / zich voorbereiden / op het gesprek",
        "answer": "Wij bereiden ons voor op het gesprek."
      },
      {
        "title": "Zich ontspannen",
        "prompt": "Opdracht: Vul in: Ik ___ me na het zwemmen. (ontspannen)",
        "answer": "Ik ontspan me na het zwemmen."
      },
      {
        "title": "Moeten met nota bewaren",
        "prompt": "Opdracht: Maak een zin met moet: Zij bewaart de papieren nota.",
        "answer": "Zij moet de papieren nota bewaren."
      },
      {
        "title": "Kunnen met pin betalen",
        "prompt": "Opdracht: Maak een zin met kan: Ik betaal met pin.",
        "answer": "Ik kan met pin betalen."
      },
      {
        "title": "Willen met hulp vragen",
        "prompt": "Opdracht: Maak een zin met wil: Violetta vraagt hulp bij de app.",
        "answer": "Violetta wil hulp bij de app vragen."
      },
      {
        "title": "Toestemming om te wachten",
        "prompt": "Opdracht: Maak een vraag: hier / wachten / mag / ik",
        "answer": "Mag ik hier wachten?"
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
        "title": "Het portaal kiezen",
        "prompt": "Opdracht: Kies de of het: ___ patientenportaal werkt niet.",
        "answer": "Het patientenportaal werkt niet."
      },
      {
        "title": "De koeltas kiezen",
        "prompt": "Opdracht: Kies de of het: ___ koeltas staat bij de voordeur.",
        "answer": "De koeltas staat bij de voordeur."
      },
      {
        "title": "De schutting kiezen",
        "prompt": "Opdracht: Kies de of het: ___ schutting is nieuw.",
        "answer": "De schutting is nieuw."
      },
      {
        "title": "Het rapport kiezen",
        "prompt": "Opdracht: Kies de of het: ___ rapport ligt in de tas.",
        "answer": "Het rapport ligt in de tas."
      },
      {
        "title": "Meervoud van nota",
        "prompt": "Opdracht: Maak meervoud: een nota, twee ...",
        "answer": "Een nota, twee nota's."
      },
      {
        "title": "Meervoud van rooster",
        "prompt": "Opdracht: Maak meervoud: een rooster, drie ...",
        "answer": "Een rooster, drie roosters."
      },
      {
        "title": "Meervoud van halte",
        "prompt": "Opdracht: Maak meervoud: een halte, twee ...",
        "answer": "Een halte, twee haltes."
      },
      {
        "title": "Meervoud van proefles",
        "prompt": "Opdracht: Maak meervoud: een proefles, twee ...",
        "answer": "Een proefles, twee proeflessen."
      },
      {
        "title": "Korte vragenlijst",
        "prompt": "Opdracht: Vul in: de ___ vragenlijst. (kort)",
        "answer": "De korte vragenlijst."
      },
      {
        "title": "Digitaal bericht",
        "prompt": "Opdracht: Vul in: het ___ bericht. (digitaal)",
        "answer": "Het digitale bericht."
      },
      {
        "title": "Gratis sessie",
        "prompt": "Opdracht: Vul in: een ___ sessie. (gratis)",
        "answer": "Een gratis sessie."
      },
      {
        "title": "Rode paprika",
        "prompt": "Opdracht: Vul in: de ___ paprika. (rood)",
        "answer": "De rode paprika."
      },
      {
        "title": "Voornaamwoord voor Violetta",
        "prompt": "Opdracht: Vervang Violetta: Violetta belt de gemeente.",
        "answer": "Zij belt de gemeente."
      },
      {
        "title": "Bezitswoord voor agenda",
        "prompt": "Opdracht: Vul in: Mijn dochter neemt ___ agenda mee. (zij)",
        "answer": "Mijn dochter neemt haar agenda mee."
      },
      {
        "title": "Bezitswoord voor bedrijf",
        "prompt": "Opdracht: Vul in: Ik heb ___ eigen bedrijf. (ik)",
        "answer": "Ik heb mijn eigen bedrijf."
      },
      {
        "title": "Verwijswoord voor nota",
        "prompt": "Opdracht: Vervang de nota: Ik bewaar de nota.",
        "answer": "Ik bewaar hem."
      },
      {
        "title": "Dit formulier",
        "prompt": "Opdracht: Vul in: ___ formulier hier is kort.",
        "answer": "Dit formulier hier is kort."
      },
      {
        "title": "Deze afspraak",
        "prompt": "Opdracht: Vul in: ___ afspraak op maandag past goed.",
        "answer": "Deze afspraak op maandag past goed."
      }
    ]
  },
  {
    "id": "negation",
    "number": "10",
    "category": "Grammatica",
    "title": "Grammatica: ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen niet/geen, voorzetsels en verbindingswoorden zoals omdat, maar, dus en als.",
    "meta": [
      "A2 grammatica",
      "Korte drills",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Geen internettoegang",
        "prompt": "Opdracht: Maak negatief: Ik heb internettoegang.",
        "answer": "Ik heb geen internettoegang."
      },
      {
        "title": "Niet bij Kerkplein",
        "prompt": "Opdracht: Maak negatief: De bus stopt bij Kerkplein.",
        "answer": "De bus stopt niet bij Kerkplein."
      },
      {
        "title": "Ontbijt niet inbegrepen",
        "prompt": "Opdracht: Vul in: Ontbijt is ___ bij de prijs inbegrepen.",
        "answer": "Ontbijt is niet bij de prijs inbegrepen."
      },
      {
        "title": "Geen muntje",
        "prompt": "Opdracht: Vul in: Ik heb ___ muntje voor het kluisje.",
        "answer": "Ik heb geen muntje voor het kluisje."
      },
      {
        "title": "Naar de publieksbalie",
        "prompt": "Opdracht: Vul in: Ik bel ___ de publieksbalie.",
        "answer": "Ik bel naar de publieksbalie."
      },
      {
        "title": "Bij de apotheek",
        "prompt": "Opdracht: Vul in: Het medicijn ligt ___ de apotheek.",
        "answer": "Het medicijn ligt bij de apotheek."
      },
      {
        "title": "In de ouderapp",
        "prompt": "Opdracht: Vul in: Ik kies een tijd ___ de ouderapp.",
        "answer": "Ik kies een tijd in de ouderapp."
      },
      {
        "title": "Voor de schutting",
        "prompt": "Opdracht: Vul in: De buren werken ___ de schutting.",
        "answer": "De buren werken aan de schutting."
      },
      {
        "title": "Op maandagavond",
        "prompt": "Opdracht: Vul in: De taalavond is ___ maandagavond.",
        "answer": "De taalavond is op maandagavond."
      },
      {
        "title": "Omdat met portaal",
        "prompt": "Opdracht: Maak een zin met omdat: Ik bel de praktijk. Het portaal werkt niet.",
        "answer": "Ik bel de praktijk omdat het portaal niet werkt."
      },
      {
        "title": "Maar met fiets",
        "prompt": "Opdracht: Maak een zin met maar: De fiets is klaar. Ik kan pas later komen.",
        "answer": "De fiets is klaar, maar ik kan pas later komen."
      },
      {
        "title": "Dus met halte",
        "prompt": "Opdracht: Maak een zin met dus: Halte Kerkplein is dicht. Ik loop naar Dorpstraat.",
        "answer": "Halte Kerkplein is dicht, dus ik loop naar Dorpstraat."
      },
      {
        "title": "Want met nota",
        "prompt": "Opdracht: Maak een zin met want: Ik bewaar de nota. De app kan om bewijs vragen.",
        "answer": "Ik bewaar de nota, want de app kan om bewijs vragen."
      },
      {
        "title": "Als met hotel",
        "prompt": "Opdracht: Maak een zin: Wij komen later. Wij sturen een bericht.",
        "answer": "Als wij later komen, sturen wij een bericht."
      },
      {
        "title": "Daarna met koken",
        "prompt": "Opdracht: Maak een zin: Ik koop courgette. Ik kook met kip.",
        "answer": "Ik koop courgette. Daarna kook ik met kip."
      },
      {
        "title": "Of met reservering",
        "prompt": "Opdracht: Maak een vraag: Wilt u baan 3? Wilt u baan 4?",
        "answer": "Wilt u baan 3 of wilt u baan 4?"
      },
      {
        "title": "Tot half vijf",
        "prompt": "Opdracht: Vul in: De fietsenmaker werkt ___ half vijf.",
        "answer": "De fietsenmaker werkt tot half vijf."
      },
      {
        "title": "Van negen tot tien",
        "prompt": "Opdracht: Vul in: De bezorger komt ___ negen ___ tien uur.",
        "answer": "De bezorger komt van negen tot tien uur."
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
  const key = `v013-writing-answer-${index}-${exercise.title}`;
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
