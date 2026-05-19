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
      "Nieuwe v012-opgaven"
    ],
    "exercises": [
      {
        "title": "Uittreksel BRP bij afspraakbalie",
        "prompt": "Uw uittreksel uit de BRP ligt vrijdag klaar bij afspraakbalie 2 in het gemeentehuis. Neem uw afspraakbevestiging en identiteitsbewijs mee. U kunt komen tussen 10.00 en 11.30 uur.",
        "questions": [
          "Vraag 1: Welk document ligt vrijdag klaar?",
          "Vraag 2: Bij welke balie haalt u het document op?",
          "Vraag 3: Welke afspraakpapieren neemt u samen met uw ID mee?"
        ],
        "answer": "Het uittreksel uit de BRP ligt klaar. U haalt het op bij afspraakbalie 2. U neemt uw afspraakbevestiging en identiteitsbewijs mee."
      },
      {
        "title": "Bloedprikken bij de prikpost",
        "prompt": "De huisarts heeft een formulier voor bloedonderzoek klaargezet. Maak online een afspraak bij de prikpost in Heeze. U hoeft niet nuchter te komen.",
        "questions": [
          "Vraag 1: Waarvoor staat het formulier klaar?",
          "Vraag 2: Waar maakt u een afspraak?",
          "Vraag 3: Moet u nuchter komen?"
        ],
        "answer": "Het formulier is voor bloedonderzoek. U maakt een afspraak bij de prikpost in Heeze. U hoeft niet nuchter te komen."
      },
      {
        "title": "Ouderavond in lokaal 4",
        "prompt": "De ouderavond van groep 7 begint donderdag om 19.00 uur in lokaal 4. Ouders krijgen eerst informatie over de planning. Daarna is er tijd voor vragen.",
        "questions": [
          "Vraag 1: Op welke dag is de ouderavond?",
          "Vraag 2: In welk lokaal begint de avond?",
          "Vraag 3: Waarover krijgen ouders eerst informatie?"
        ],
        "answer": "De ouderavond is donderdag. De avond begint in lokaal 4. Ouders krijgen eerst informatie over de planning."
      },
      {
        "title": "Online bestelling mist yoghurt",
        "prompt": "Uw online supermarktbestelling is bezorgd, maar de yoghurt ontbreekt. Meld dit vandaag in de klantenservice-app. Het bedrag komt morgen terug op uw rekening.",
        "questions": [
          "Vraag 1: Welk product ontbreekt?",
          "Vraag 2: Waar meldt u het probleem?",
          "Vraag 3: Wanneer komt het bedrag terug?"
        ],
        "answer": "De yoghurt ontbreekt. U meldt het probleem in de klantenservice-app. Het bedrag komt morgen terug op uw rekening."
      },
      {
        "title": "Trein vertrekt van ander spoor",
        "prompt": "De trein naar Eindhoven vertrekt vandaag tien minuten later van spoor 3. Reizigers naar Weert stappen over in Eindhoven. Controleer de reisplanner voor de laatste informatie.",
        "questions": [
          "Vraag 1: Naar welke stad vertrekt de trein?",
          "Vraag 2: Welk spoornummer gebruikt de trein vandaag?",
          "Vraag 3: Waar stappen reizigers naar Weert over?"
        ],
        "answer": "De trein vertrekt naar Eindhoven. De trein vertrekt van spoor 3. Reizigers naar Weert stappen over in Eindhoven."
      },
      {
        "title": "Btw-nummer op factuur",
        "prompt": "Een klant vraagt om uw btw-nummer op de factuur. Stuur de aangepaste factuur voor maandagmiddag. Gebruik het nieuwe projectnummer in de onderwerpregel.",
        "questions": [
          "Vraag 1: Wat vraagt de klant op de factuur?",
          "Vraag 2: Wanneer stuurt u de aangepaste factuur?",
          "Vraag 3: Welk nummer gebruikt u in de onderwerpregel?"
        ],
        "answer": "De klant vraagt om het btw-nummer. U stuurt de factuur voor maandagmiddag. U gebruikt het nieuwe projectnummer."
      },
      {
        "title": "Zwemabonnement verlengen",
        "prompt": "Uw zwemabonnement loopt zondag af. Verleng het abonnement online of bij de balie van het zwembad. Neem bij de balie uw pas mee.",
        "questions": [
          "Vraag 1: Wanneer loopt het zwemabonnement af?",
          "Vraag 2: Waar kunt u het abonnement verlengen?",
          "Vraag 3: Wat neemt u mee naar de balie?"
        ],
        "answer": "Het abonnement loopt zondag af. U kunt het online of bij de balie verlengen. U neemt uw pas mee."
      },
      {
        "title": "Tandartscontrole naar ochtend",
        "prompt": "De tandarts kan uw controle verplaatsen naar dinsdag om 09.15 uur. Bel voor 17.00 uur als deze tijd niet past. Anders blijft de nieuwe tijd staan.",
        "questions": [
          "Vraag 1: Naar welke dag kan de tandarts de controle verplaatsen?",
          "Vraag 2: Op welk tijdstip staat de nieuwe controle?",
          "Vraag 3: Wanneer belt u als de tijd niet past?"
        ],
        "answer": "De controle kan naar dinsdag. De afspraak is om 09.15 uur. U belt voor 17.00 uur als de tijd niet past."
      },
      {
        "title": "Ladder terug naar buurvrouw",
        "prompt": "De buurvrouw vraagt of u de ladder zaterdag terugbrengt. Zet de ladder in haar schuur naast de fietsen. Zij is na 16.00 uur thuis.",
        "questions": [
          "Vraag 1: Wat vraagt de buurvrouw terug?",
          "Vraag 2: Waar zet u de ladder neer?",
          "Vraag 3: Vanaf hoe laat is zij thuis?"
        ],
        "answer": "Zij vraagt de ladder terug. U zet de ladder in de schuur naast de fietsen. Zij is na 16.00 uur thuis."
      },
      {
        "title": "Onderhoud aan cv-ketel",
        "prompt": "De monteur komt woensdag tussen 12.00 en 14.00 uur voor onderhoud aan de cv-ketel. Zorg dat de kast bij de ketel leeg is. Het bezoek duurt ongeveer twintig minuten.",
        "questions": [
          "Vraag 1: Welke klus doet de monteur aan huis?",
          "Vraag 2: Wat moet leeg zijn?",
          "Vraag 3: Hoe lang duurt het bezoek ongeveer?"
        ],
        "answer": "De monteur komt voor onderhoud aan de cv-ketel. De kast bij de ketel moet leeg zijn. Het bezoek duurt ongeveer twintig minuten."
      },
      {
        "title": "Nieuwe zorgpas onderweg",
        "prompt": "Uw zorgverzekeraar stuurt deze week een nieuwe zorgpas. De oude pas blijft geldig tot de nieuwe pas in de app staat. U hoeft niets te betalen.",
        "questions": [
          "Vraag 1: Wie stuurt een nieuwe zorgpas?",
          "Vraag 2: Hoelang blijft de oude pas geldig?",
          "Vraag 3: Moet u betalen voor de nieuwe pas?"
        ],
        "answer": "De zorgverzekeraar stuurt een nieuwe zorgpas. De oude pas blijft geldig tot de nieuwe pas in de app staat. U hoeft niets te betalen."
      },
      {
        "title": "Computerplek in bibliotheek",
        "prompt": "De bibliotheek heeft dinsdag nog een computerplek vrij van 13.00 tot 14.00 uur. Reserveer met uw bibliotheekpas. Printen kost tien cent per pagina.",
        "questions": [
          "Vraag 1: Wanneer is er een computerplek vrij?",
          "Vraag 2: Waarmee reserveert u de plek?",
          "Vraag 3: Hoeveel betaalt u voor een geprinte pagina?"
        ],
        "answer": "Er is dinsdag een computerplek vrij van 13.00 tot 14.00 uur. U reserveert met uw bibliotheekpas. Printen kost tien cent per pagina."
      },
      {
        "title": "Sportshirt voor training",
        "prompt": "Uw dochter heeft vrijdag een blauw sportshirt nodig voor de training. Schrijf haar naam in het label. De trainer verzamelt de shirts na de les.",
        "questions": [
          "Vraag 1: Welke kleur sportshirt heeft uw dochter nodig?",
          "Vraag 2: Waar schrijft u haar naam?",
          "Vraag 3: Wie verzamelt de shirts?"
        ],
        "answer": "Zij heeft een blauw sportshirt nodig. U schrijft haar naam in het label. De trainer verzamelt de shirts."
      },
      {
        "title": "Fietsroute door het bos dicht",
        "prompt": "De fietsroute door het bos is deze week dicht door snoeiwerk. Fiets via de Molenstraat naar het centrum. De route is ongeveer drie minuten langer.",
        "questions": [
          "Vraag 1: Waarom is de fietsroute dicht?",
          "Vraag 2: Via welke straat fietst u naar het centrum?",
          "Vraag 3: Hoeveel langer is de route ongeveer?"
        ],
        "answer": "De route is dicht door snoeiwerk. U fietst via de Molenstraat. De route is ongeveer drie minuten langer."
      },
      {
        "title": "Groentepakket koel bewaren",
        "prompt": "Het groentepakket met broccoli, wortels en champignons staat klaar bij de boerderijwinkel. Bewaar het pakket koel. Gebruik de champignons binnen twee dagen.",
        "questions": [
          "Vraag 1: Waar staat het groentepakket klaar?",
          "Vraag 2: Welke drie groenten zitten in het pakket?",
          "Vraag 3: Welke groente gebruikt u binnen twee dagen?"
        ],
        "answer": "Het pakket staat klaar bij de boerderijwinkel. Er zitten broccoli, wortels en champignons in. U gebruikt de champignons binnen twee dagen."
      },
      {
        "title": "Vraag over reisverzekering",
        "prompt": "Voor uw weekend naar Antwerpen kunt u online een kortlopende reisverzekering afsluiten. Controleer eerst of bagage is meeverzekerd. De verzekering start op de dag van vertrek.",
        "questions": [
          "Vraag 1: Voor welke reis kunt u een verzekering afsluiten?",
          "Vraag 2: Wat controleert u eerst?",
          "Vraag 3: Wanneer start de verzekering?"
        ],
        "answer": "U kunt een verzekering afsluiten voor een weekend naar Antwerpen. U controleert of bagage is meeverzekerd. De verzekering start op de dag van vertrek."
      },
      {
        "title": "Verhuisdatum doorgeven",
        "prompt": "Geeft u een verhuizing binnen de gemeente door? Doe dit uiterlijk vijf dagen na de verhuisdatum. U kunt het formulier online invullen met DigiD.",
        "questions": [
          "Vraag 1: Wat geeft u door aan de gemeente?",
          "Vraag 2: Uiterlijk wanneer doet u dit?",
          "Vraag 3: Waarmee vult u het formulier online in?"
        ],
        "answer": "U geeft een verhuizing door. U doet dit uiterlijk vijf dagen na de verhuisdatum. U vult het formulier in met DigiD."
      },
      {
        "title": "Mini-examen pasfoto maken",
        "prompt": "In het bericht staat: voor een nieuw reisdocument heeft u een recente pasfoto nodig. U mag de foto niet zelf thuis printen.",
        "questions": [
          "Vraag 1: Kies het goede antwoord: A. U print de pasfoto thuis. B. U hoeft geen foto mee te nemen. C. U heeft een recente pasfoto nodig."
        ],
        "answer": "C. U heeft een recente pasfoto nodig."
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
        "title": "Uittreksel ophalen bevestigen",
        "prompt": "Schrijf aan de gemeente. U bevestigt dat u vrijdag om 10.30 uur uw uittreksel uit de BRP komt ophalen.",
        "answer": "Beste gemeente,\n\nIk kom vrijdag om 10.30 uur mijn uittreksel uit de BRP ophalen. Ik neem mijn identiteitsbewijs mee.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Afspraak bij prikpost vragen",
        "prompt": "Schrijf aan de huisartsenpraktijk. U vraagt of het formulier voor bloedonderzoek klaarstaat.",
        "answer": "Beste assistente,\n\nStaat mijn formulier voor bloedonderzoek klaar? Ik wil graag een afspraak maken bij de prikpost.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Ouderavond later komen",
        "prompt": "Schrijf aan de leerkracht. U komt tien minuten later naar de ouderavond en vraagt of dat goed is.",
        "answer": "Beste leerkracht,\n\nIk kom donderdag tien minuten later naar de ouderavond. Is dat goed?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Product ontbreekt in bestelling",
        "prompt": "Schrijf aan de supermarkt. De yoghurt ontbreekt in uw online bestelling en u vraagt om terugbetaling.",
        "answer": "Beste klantenservice,\n\nDe yoghurt ontbreekt in mijn online bestelling. Kunt u het bedrag terugbetalen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Treinvertraging melden",
        "prompt": "Schrijf aan uw man. Vertel dat uw trein tien minuten later vertrekt en dat u in Eindhoven overstapt.",
        "answer": "Hoi,\n\nMijn trein vertrekt tien minuten later. Ik stap in Eindhoven over en kom iets later thuis.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Factuur met btw-nummer sturen",
        "prompt": "Schrijf aan een klant. U stuurt een aangepaste factuur met uw btw-nummer.",
        "answer": "Beste klant,\n\nIk stuur u hierbij de aangepaste factuur met mijn btw-nummer. Het projectnummer staat in de onderwerpregel.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Zwemabonnement verlengen vragen",
        "prompt": "Schrijf aan het zwembad. U vraagt of u uw zwemabonnement ook aan de balie kunt verlengen.",
        "answer": "Beste medewerker,\n\nKan ik mijn zwemabonnement aan de balie verlengen? Ik neem mijn zwempas mee.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Tandartscontrole verplaatsen",
        "prompt": "Schrijf aan de tandarts. U kunt dinsdag om 09.15 uur niet komen en vraagt om een afspraak in de middag.",
        "answer": "Beste tandarts,\n\nIk kan dinsdag om 09.15 uur niet komen. Heeft u ook een afspraak in de middag?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Buurvrouw haar ladder geven afspreken",
        "prompt": "Schrijf aan uw buurvrouw. U brengt de ladder zaterdag na 16.00 uur terug.",
        "answer": "Hoi buurvrouw,\n\nIk breng de ladder zaterdag na 16.00 uur terug. Ik zet hem in de schuur naast de fietsen.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Cv-ketel onderhoud bevestigen",
        "prompt": "Schrijf aan de woningcorporatie. U bevestigt dat de monteur woensdag tussen 12.00 en 14.00 uur kan komen.",
        "answer": "Beste woningcorporatie,\n\nDe monteur kan woensdag tussen 12.00 en 14.00 uur komen. Ik maak de kast bij de cv-ketel leeg.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Zorgpas nog niet aangekomen",
        "prompt": "Schrijf aan de zorgverzekeraar. U heeft de nieuwe zorgpas nog niet ontvangen en vraagt wat u moet doen.",
        "answer": "Beste meneer/mevrouw,\n\nIk heb mijn nieuwe zorgpas nog niet ontvangen. Wat moet ik nu doen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Computer reserveren in bibliotheek",
        "prompt": "Schrijf aan de bibliotheek. U wilt dinsdag van 13.00 tot 14.00 uur een computer reserveren.",
        "answer": "Beste bibliotheek,\n\nIk wil dinsdag van 13.00 tot 14.00 uur een computer reserveren. Ik heb een bibliotheekpas.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Sportshirt meegeven",
        "prompt": "Schrijf een bericht aan uw dochter. Herinner haar aan het blauwe sportshirt voor de training.",
        "answer": "Hoi,\n\nNeem vrijdag je blauwe sportshirt mee naar de training. Ik heb je naam in het label geschreven.\n\nLiefs,\nMama"
      },
      {
        "title": "Fietsroute omleiding vragen",
        "prompt": "Schrijf aan een vriendin. U vraagt welke route zij fietst nu het bospad dicht is.",
        "answer": "Hoi,\n\nWelke route fiets jij nu het bospad dicht is? Ik denk dat ik via de Molenstraat ga.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Groentepakket bestellen",
        "prompt": "Schrijf aan de boerderijwinkel. U bestelt een pakket met broccoli, wortels en champignons.",
        "answer": "Beste medewerker,\n\nIk wil graag een groentepakket met broccoli, wortels en champignons bestellen. Ik haal het morgen op.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Reisverzekering navragen",
        "prompt": "Schrijf aan de verzekeraar. U vraagt of bagage is meeverzekerd voor een weekend naar Antwerpen.",
        "answer": "Beste verzekeraar,\n\nIs mijn bagage meeverzekerd voor een weekend naar Antwerpen? Ik vertrek zaterdag.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Verhuisdatum online doorgeven",
        "prompt": "Schrijf aan de gemeente. U vraagt of u uw verhuisdatum met DigiD online kunt doorgeven.",
        "answer": "Beste gemeente,\n\nKan ik mijn verhuisdatum online met DigiD doorgeven? Ik verhuis binnen de gemeente.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vier zinnen over maandag",
        "prompt": "Schrijf vier korte zinnen over een maandag thuis. Gebruik de woorden werk, lunch, wandelen en gezin.",
        "answer": "Ik werk maandag thuis. Ik maak een gezonde lunch. Daarna ga ik wandelen. In de avond eet ik met mijn gezin."
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
        "title": "AI-examinator voor praktische afspraken",
        "prompt": "Open een spraaktool en vraag om twaalf korte A2-vragen over gemeente, gezondheid, school, reizen, wonen en gezin.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel twaalf korte vragen over gemeente, huisarts, school, supermarkt, trein, werk, sport, tandarts, buren, wonen, verzekering en bibliotheek. Wacht na elke vraag op mijn antwoord."
      },
      {
        "title": "Voorstellen bij een computercursus",
        "prompt": "Vertel uw naam, woonplaats, gezin en waarom u de cursus volgt.",
        "answer": "Hallo, ik ben Violetta Bonenkamp. Ik woon in Sterksel met mijn man en twee dochters. Ik volg de cursus omdat ik beter Nederlands wil leren."
      },
      {
        "title": "Werkpauze met podcast",
        "prompt": "Vertel kort hoe u thuis werkt en wanneer u een podcast luistert.",
        "answer": "Ik werk thuis aan mijn startup. In de pauze wandel ik en luister ik naar een podcast."
      },
      {
        "title": "Afspraakbalie voor BRP-document",
        "prompt": "U bent in het gemeentehuis. Vraag waar afspraakbalie 2 is.",
        "answer": "Goedemorgen, waar is afspraakbalie 2? Ik kom mijn uittreksel uit de BRP ophalen."
      },
      {
        "title": "Bloedonderzoek navragen",
        "prompt": "Bel de huisartsenpraktijk en vraag of u nuchter moet komen voor bloedprikken.",
        "answer": "Goedemorgen, moet ik nuchter komen voor het bloedprikken? Ik heb een formulier van de huisarts."
      },
      {
        "title": "Ouderavond op school",
        "prompt": "Vraag aan de leerkracht in welk lokaal de ouderavond is.",
        "answer": "Goedemiddag, in welk lokaal is de ouderavond donderdag? Ik kom graag naar de informatieavond."
      },
      {
        "title": "Ontbrekend product melden",
        "prompt": "Vertel aan de supermarkt dat er een product mist in uw online bestelling.",
        "answer": "Goedemiddag, de yoghurt mist in mijn online bestelling. Kunt u het bedrag terugstorten?"
      },
      {
        "title": "Treinvertraging vragen",
        "prompt": "Vraag op het station van welk spoor de trein naar Eindhoven vertrekt.",
        "answer": "Pardon, van welk spoor vertrekt de trein naar Eindhoven? Ik zie een vertraging in de app."
      },
      {
        "title": "Btw-nummer uitleggen",
        "prompt": "Vertel een klant dat u een aangepaste factuur stuurt.",
        "answer": "Ik stuur vandaag een aangepaste factuur. Mijn btw-nummer staat erop en het projectnummer staat in de onderwerpregel."
      },
      {
        "title": "Abonnement aan zwembadbalie",
        "prompt": "Vraag aan de zwembadbalie hoe u uw abonnement kunt verlengen.",
        "answer": "Goedemorgen, hoe kan ik mijn zwemabonnement verlengen? Ik heb mijn zwempas bij me."
      },
      {
        "title": "Tandartsafspraak wijzigen",
        "prompt": "Vraag de tandarts om een afspraak later op de dag.",
        "answer": "Goedemorgen, ik kan dinsdag om 09.15 uur niet komen. Heeft u later op de dag nog plek?"
      },
      {
        "title": "Buurvrouw haar ladder geven",
        "prompt": "Vertel uw buurvrouw wanneer u de ladder terugbrengt.",
        "answer": "Ik breng de ladder zaterdag na vier uur terug. Ik zet hem netjes in uw schuur."
      },
      {
        "title": "Kast bij ketel leegmaken",
        "prompt": "Vertel aan de monteur dat de kast bij de ketel leeg is.",
        "answer": "De kast bij de cv-ketel is leeg. U kunt goed bij de ketel voor het onderhoud."
      },
      {
        "title": "Zorgpas in app controleren",
        "prompt": "Vraag de zorgverzekeraar waar u de nieuwe zorgpas kunt vinden.",
        "answer": "Goedemorgen, waar kan ik mijn nieuwe zorgpas vinden? Staat de pas al in de app?"
      },
      {
        "title": "Computerplek reserveren",
        "prompt": "Vraag in de bibliotheek om een computerplek voor een uur.",
        "answer": "Goedemiddag, kan ik dinsdag een computerplek reserveren van 13.00 tot 14.00 uur?"
      },
      {
        "title": "Sportshirt voor dochter",
        "prompt": "Vertel uw dochter wat zij moet meenemen naar de training.",
        "answer": "Neem je blauwe sportshirt mee naar de training. Je naam staat in het label."
      },
      {
        "title": "Omleiding op de fiets",
        "prompt": "Leg aan een vriendin uit waarom u via de Molenstraat fietst.",
        "answer": "Het bospad is dicht door snoeiwerk. Daarom fiets ik via de Molenstraat naar het centrum."
      },
      {
        "title": "Koken met groentepakket",
        "prompt": "Vertel wat u met broccoli, wortels en champignons gaat koken.",
        "answer": "Ik kook vlees met broccoli, wortels en champignons. Het is een gezonde maaltijd voor mijn gezin."
      },
      {
        "title": "Reisverzekering controleren",
        "prompt": "Vraag of bagage is verzekerd voor uw weekend naar Antwerpen.",
        "answer": "Goedemiddag, is mijn bagage verzekerd voor een weekend naar Antwerpen? Ik vertrek zaterdag."
      },
      {
        "title": "Verhuisdatum melden",
        "prompt": "Vertel aan de gemeente dat u binnen de gemeente verhuist.",
        "answer": "Ik verhuis binnen de gemeente. Ik wil mijn verhuisdatum online met DigiD doorgeven."
      },
      {
        "title": "Afbeelding gemeente documentbalie",
        "prompt": "Kijk naar de afbeelding. Beschrijf waar u bent en welk document u komt halen.",
        "image": "images/speaking/v012-speaking-municipality-document-desk-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch municipal office appointment desk. Scene: adult resident at a simple counter with ID card and appointment paper, asking for a civil registry extract, daylight, no readable text, no logos, no watermark.",
        "answer": "Ik ben bij de gemeente. Ik kom een uittreksel uit de BRP ophalen."
      },
      {
        "title": "Afbeelding prikpost bloedonderzoek",
        "prompt": "Kijk naar de afbeelding. Vertel waarvoor u een afspraak heeft.",
        "image": "images/speaking/v012-speaking-health-blood-test-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a calm Dutch blood test clinic reception area. Scene: adult patient with referral form waiting near a small desk, medical setting, natural light, no readable text, no logos, no watermark.",
        "answer": "Ik heb een afspraak bij de prikpost. Ik kom voor bloedonderzoek."
      },
      {
        "title": "Afbeelding ouderavond planning",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u op school bent.",
        "image": "images/speaking/v012-speaking-school-parent-evening-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch school classroom during a parent evening. Scene: parent and teacher near a table with a simple planning sheet, school bags in background, warm indoor light, no readable text, no logos, no watermark.",
        "answer": "Ik ben op school voor de ouderavond. Ik luister naar informatie over de planning."
      },
      {
        "title": "Afbeelding treinperron vertraging",
        "prompt": "Kijk naar de afbeelding. Vraag van welk spoor de trein vertrekt.",
        "image": "images/speaking/v012-speaking-train-platform-delay-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style on a Dutch train platform. Scene: adult traveler checking a phone while a train waits in the background, station signs intentionally unreadable, overcast daylight, no readable text, no logos, no watermark.",
        "answer": "Pardon, van welk spoor vertrekt de trein naar Eindhoven?"
      },
      {
        "title": "Afbeelding cv-ketel onderhoud",
        "prompt": "Kijk naar de afbeelding. Leg uit wat de monteur komt doen.",
        "image": "images/speaking/v012-speaking-home-heating-maintenance-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch utility closet. Scene: heating boiler with service tools nearby and an empty shelf, technician preparing maintenance, no readable text, no logos, no watermark.",
        "answer": "De monteur komt voor onderhoud aan de cv-ketel. De kast is leeg."
      },
      {
        "title": "Afbeelding bibliotheek computerplek",
        "prompt": "Kijk naar de afbeelding. Vertel welke hulp u nodig heeft.",
        "image": "images/speaking/v012-speaking-library-computer-reservation-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in a Dutch public library computer area. Scene: adult learner asks librarian for a computer reservation, desktop computers visible, bookshelves softly blurred, no readable text, no logos, no watermark.",
        "answer": "Ik ben in de bibliotheek. Ik wil een computerplek reserveren."
      },
      {
        "title": "Weekend met gezond plan",
        "prompt": "Vertel wat u zaterdag doet voor gezondheid en gezin.",
        "answer": "Zaterdag ga ik zwemmen, fiets ik een korte route en kook ik groenten met vlees voor mijn gezin."
      },
      {
        "title": "Kort antwoord bij apotheek",
        "prompt": "Een medewerker vraagt waarvoor u komt. Geef een kort antwoord.",
        "answer": "Ik kom mijn recept ophalen. Mijn naam is Violetta Bonenkamp."
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
        "title": "AI-luistercoach voor afspraken",
        "prompt": "Open een spraaktool en vraag om een langzaam A2-luisterbericht met een datum, balie, afspraak en actie.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor met een datum, balie, afspraak en actie. Stel daarna drie vragen."
      },
      {
        "title": "Uittreksel bij afspraakbalie",
        "audio": "audio/v012-listening-01-gemeente-brp-uittreksel.mp3",
        "transcript": "Mevrouw Bonenkamp, uw uittreksel uit de BRP ligt vrijdag klaar bij afspraakbalie twee. Neem uw afspraakbevestiging en identiteitsbewijs mee.",
        "questions": [
          "Vraag 1: Welk document ligt klaar?",
          "Vraag 2: Bij welke balie ligt het document klaar?",
          "Vraag 3: Welke documenten neemt mevrouw mee?"
        ],
        "answer": "Het uittreksel uit de BRP ligt klaar. Het ligt bij afspraakbalie twee. Zij moet haar afspraakbevestiging en identiteitsbewijs meenemen."
      },
      {
        "title": "Afspraak bij prikpost",
        "audio": "audio/v012-listening-02-huisarts-prikpost-bloed.mp3",
        "transcript": "De assistente zegt: uw formulier voor bloedonderzoek staat klaar. Maak online een afspraak bij de prikpost in Heeze. U hoeft niet nuchter te komen.",
        "questions": [
          "Vraag 1: Welk formulier staat klaar?",
          "Vraag 2: Waar maakt mevrouw een afspraak?",
          "Vraag 3: Moet zij nuchter komen?"
        ],
        "answer": "Het formulier voor bloedonderzoek staat klaar. Zij maakt een afspraak bij de prikpost in Heeze. Zij hoeft niet nuchter te komen."
      },
      {
        "title": "Ouderavond in lokaal vier",
        "audio": "audio/v012-listening-03-school-ouderavond-lokaal.mp3",
        "transcript": "De ouderavond begint donderdag om zeven uur in lokaal vier. Eerst vertelt de leerkracht iets over de planning. Daarna kunt u vragen stellen.",
        "questions": [
          "Vraag 1: Wanneer begint de ouderavond?",
          "Vraag 2: In welk lokaal is de ouderavond?",
          "Vraag 3: Wat gebeurt er eerst?"
        ],
        "answer": "De ouderavond begint donderdag om zeven uur. De avond is in lokaal vier. Eerst vertelt de leerkracht iets over de planning."
      },
      {
        "title": "Yoghurt ontbreekt",
        "audio": "audio/v012-listening-04-supermarkt-online-bestelling.mp3",
        "transcript": "In uw online supermarktbestelling ontbreekt de yoghurt. Meld het vandaag in de klantenservice-app. Het bedrag wordt morgen teruggestort.",
        "questions": [
          "Vraag 1: Wat ontbreekt in de bestelling?",
          "Vraag 2: Waar meldt mevrouw het probleem?",
          "Vraag 3: Wanneer wordt het bedrag teruggestort?"
        ],
        "answer": "De yoghurt ontbreekt. Zij meldt het in de klantenservice-app. Het bedrag wordt morgen teruggestort."
      },
      {
        "title": "Trein van spoor drie",
        "audio": "audio/v012-listening-05-trein-vertraging-spoor.mp3",
        "transcript": "Let op: de trein naar Eindhoven vertrekt tien minuten later van spoor drie. Reizigers naar Weert stappen over in Eindhoven.",
        "questions": [
          "Vraag 1: Naar welke stad gaat de trein eerst?",
          "Vraag 2: Hoeveel minuten later vertrekt de trein?",
          "Vraag 3: Waar stappen reizigers naar Weert over?"
        ],
        "answer": "De trein gaat naar Eindhoven. De trein vertrekt tien minuten later. Reizigers stappen over in Eindhoven."
      },
      {
        "title": "Aangepaste factuur",
        "audio": "audio/v012-listening-06-werk-btw-nummer-factuur.mp3",
        "transcript": "De klant vraagt om een aangepaste factuur met uw btw-nummer. Stuur de factuur voor maandagmiddag en zet het projectnummer in de onderwerpregel.",
        "questions": [
          "Vraag 1: Wat vraagt de klant?",
          "Vraag 2: Wanneer stuurt mevrouw de factuur?",
          "Vraag 3: Wat zet zij in de onderwerpregel?"
        ],
        "answer": "De klant vraagt om een aangepaste factuur met btw-nummer. Zij stuurt de factuur voor maandagmiddag. Zij zet het projectnummer in de onderwerpregel."
      },
      {
        "title": "Zwempas zondag verlopen",
        "audio": "audio/v012-listening-07-zwembad-abonnement-verlengen.mp3",
        "transcript": "Uw zwemabonnement loopt zondag af. U kunt het online verlengen of aan de balie van het zwembad. Neem aan de balie uw zwempas mee.",
        "questions": [
          "Vraag 1: Wanneer loopt het abonnement af?",
          "Vraag 2: Waar kan mevrouw het abonnement verlengen?",
          "Vraag 3: Wat neemt zij mee naar de balie?"
        ],
        "answer": "Het abonnement loopt zondag af. Zij kan het online of aan de balie verlengen. Zij neemt haar zwempas mee."
      },
      {
        "title": "Controle bij tandarts",
        "audio": "audio/v012-listening-08-tandarts-controle-verplaatsen.mp3",
        "transcript": "De tandarts kan uw controle verplaatsen naar dinsdag om kwart over negen. Bel voor vijf uur als deze tijd niet past.",
        "questions": [
          "Vraag 1: Welke afspraak kan worden verplaatst?",
          "Vraag 2: Naar welke tijd kan de afspraak?",
          "Vraag 3: Wanneer belt mevrouw als de tijd niet past?"
        ],
        "answer": "De controle kan worden verplaatst. De afspraak kan naar dinsdag om kwart over negen. Zij belt voor vijf uur als de tijd niet past."
      },
      {
        "title": "Ladder naar schuur",
        "audio": "audio/v012-listening-09-buren-ladder-terugbrengen.mp3",
        "transcript": "De buurvrouw vraagt of u de ladder zaterdag terugbrengt. Zet de ladder in de schuur naast de fietsen. Zij is na vier uur thuis.",
        "questions": [
          "Vraag 1: Wat brengt mevrouw terug?",
          "Vraag 2: Waar zet zij de ladder?",
          "Vraag 3: Vanaf welk moment is de buurvrouw thuis?"
        ],
        "answer": "Zij brengt de ladder terug. Zij zet de ladder in de schuur naast de fietsen. De buurvrouw is na vier uur thuis."
      },
      {
        "title": "Monteur voor ketel",
        "audio": "audio/v012-listening-10-woning-cv-onderhoud.mp3",
        "transcript": "Woensdag komt de monteur tussen twaalf en twee uur voor onderhoud aan de cv-ketel. Maak de kast bij de ketel leeg.",
        "questions": [
          "Vraag 1: Op welke dag komt de monteur?",
          "Vraag 2: Welke klus doet de monteur aan huis?",
          "Vraag 3: Wat maakt mevrouw leeg?"
        ],
        "answer": "De monteur komt woensdag. Hij komt voor onderhoud aan de cv-ketel. Zij maakt de kast bij de ketel leeg."
      },
      {
        "title": "Nieuwe zorgpas",
        "audio": "audio/v012-listening-11-zorgverzekering-nieuwe-zorgpas.mp3",
        "transcript": "Uw zorgverzekeraar stuurt deze week een nieuwe zorgpas. De oude pas blijft geldig tot de nieuwe pas in de app staat.",
        "questions": [
          "Vraag 1: Wie stuurt een nieuwe pas?",
          "Vraag 2: Welke pas blijft nog geldig?",
          "Vraag 3: Waar komt de nieuwe pas te staan?"
        ],
        "answer": "De zorgverzekeraar stuurt een nieuwe pas. De oude pas blijft nog geldig. De nieuwe pas komt in de app te staan."
      },
      {
        "title": "Computer in bibliotheek",
        "audio": "audio/v012-listening-12-bibliotheek-computer-reserveren.mp3",
        "transcript": "De bibliotheek heeft dinsdag van een tot twee uur een computerplek vrij. Reserveer met uw bibliotheekpas. Printen kost tien cent per pagina.",
        "questions": [
          "Vraag 1: Wanneer is er een computerplek vrij?",
          "Vraag 2: Waarmee reserveert mevrouw?",
          "Vraag 3: Hoeveel betaalt u voor een geprinte pagina?"
        ],
        "answer": "Er is dinsdag van een tot twee uur een computerplek vrij. Zij reserveert met haar bibliotheekpas. Printen kost tien cent per pagina."
      },
      {
        "title": "Blauw sportshirt",
        "audio": "audio/v012-listening-13-dochter-sportshirt-training.mp3",
        "transcript": "Uw dochter heeft vrijdag een blauw sportshirt nodig voor de training. Schrijf haar naam in het label. De trainer verzamelt de shirts na de les.",
        "questions": [
          "Vraag 1: Welke kleur shirt heeft de dochter nodig?",
          "Vraag 2: Waar schrijft mevrouw de naam?",
          "Vraag 3: Wie verzamelt de shirts?"
        ],
        "answer": "De dochter heeft een blauw shirt nodig. Mevrouw schrijft de naam in het label. De trainer verzamelt de shirts."
      },
      {
        "title": "Bospad is dicht",
        "audio": "audio/v012-listening-14-fietsroute-bos-omleiding.mp3",
        "transcript": "De fietsroute door het bos is deze week dicht door snoeiwerk. Fiets via de Molenstraat. De route is ongeveer drie minuten langer.",
        "questions": [
          "Vraag 1: Welke route is dicht?",
          "Vraag 2: Waarom is de route dicht?",
          "Vraag 3: Hoeveel langer is de route?"
        ],
        "answer": "De fietsroute door het bos is dicht. De route is dicht door snoeiwerk. De route is ongeveer drie minuten langer."
      },
      {
        "title": "Pakket met groenten",
        "audio": "audio/v012-listening-15-groentepakket-koelkast.mp3",
        "transcript": "Het groentepakket met broccoli, wortels en champignons staat klaar bij de boerderijwinkel. Bewaar het koel en gebruik de champignons binnen twee dagen.",
        "questions": [
          "Vraag 1: Waar staat het pakket klaar?",
          "Vraag 2: Welke groenten zitten in het pakket?",
          "Vraag 3: Welke groente gebruikt mevrouw binnen twee dagen?"
        ],
        "answer": "Het pakket staat klaar bij de boerderijwinkel. Er zitten broccoli, wortels en champignons in. Zij gebruikt de champignons binnen twee dagen."
      },
      {
        "title": "Weekend naar Antwerpen",
        "audio": "audio/v012-listening-16-reisverzekering-weekend.mp3",
        "transcript": "Voor uw weekend naar Antwerpen kunt u online een kortlopende reisverzekering afsluiten. Controleer eerst of uw bagage is meeverzekerd.",
        "questions": [
          "Vraag 1: Waar gaat mevrouw een weekend naartoe?",
          "Vraag 2: Welke verzekering kan zij afsluiten?",
          "Vraag 3: Wat controleert zij eerst?"
        ],
        "answer": "Zij gaat een weekend naar Antwerpen. Zij kan een kortlopende reisverzekering afsluiten. Zij controleert eerst of bagage is meeverzekerd."
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
        "title": "Adres in de BRP",
        "prompt": "Vraag: Waarom is een goed adres bij de gemeente belangrijk?",
        "questions": [
          "A. Omdat officiele post en gegevens dan goed aankomen.",
          "B. Omdat de supermarkt dan gratis bezorgt.",
          "C. Omdat de trein dan sneller rijdt."
        ],
        "answer": "A. Omdat officiele post en gegevens dan goed aankomen."
      },
      {
        "title": "Eerst naar de huisarts",
        "prompt": "Vraag: Wat doet u meestal bij een gewone gezondheidsvraag?",
        "questions": [
          "A. U belt direct het alarmnummer.",
          "B. U neemt contact op met de huisarts of praktijk.",
          "C. U wacht altijd tot de klacht vanzelf weg is."
        ],
        "answer": "B. U neemt contact op met de huisarts of praktijk."
      },
      {
        "title": "Afspraak bij prikpost",
        "prompt": "Vraag: Wat is verstandig als u bloed moet laten prikken?",
        "questions": [
          "A. Zonder afspraak de hele dag blijven wachten.",
          "B. Het formulier thuis laten liggen.",
          "C. De instructies van huisarts of prikpost volgen."
        ],
        "answer": "C. De instructies van huisarts of prikpost volgen."
      },
      {
        "title": "Ouderavond op school",
        "prompt": "Vraag: Waarom gaan ouders naar een ouderavond?",
        "questions": [
          "A. Om informatie over school en hun kind te krijgen.",
          "B. Om het schoolgebouw te huren.",
          "C. Om zelf cijfers uit te delen."
        ],
        "answer": "A. Om informatie over school en hun kind te krijgen."
      },
      {
        "title": "Kind ziek melden",
        "prompt": "Vraag: Wat doet u als uw kind niet naar school kan door ziekte?",
        "questions": [
          "A. U zegt niets tegen school.",
          "B. U meldt het kind ziek volgens de schoolregels.",
          "C. U stuurt alleen een bericht naar een andere ouder."
        ],
        "answer": "B. U meldt het kind ziek volgens de schoolregels."
      },
      {
        "title": "Zorgpas gebruiken",
        "prompt": "Vraag: Waarvoor gebruikt u vaak een zorgpas of digitale zorgpas?",
        "questions": [
          "A. Voor korting op treinkaartjes.",
          "B. Voor toegang tot de bibliotheek.",
          "C. Voor gegevens bij zorg of apotheek."
        ],
        "answer": "C. Voor gegevens bij zorg of apotheek."
      },
      {
        "title": "Recept ophalen bij apotheek",
        "prompt": "Vraag: Waar kunt u meestal medicijnen ophalen als de huisarts een recept geeft?",
        "questions": [
          "A. Bij de apotheek.",
          "B. Bij de bakker.",
          "C. Bij het zwembad."
        ],
        "answer": "A. Bij de apotheek."
      },
      {
        "title": "Onderhoud huurwoning",
        "prompt": "Vraag: Wat doet u bij onderhoud of een storing in een huurwoning?",
        "questions": [
          "A. U verstopt het probleem.",
          "B. U meldt het bij verhuurder of woningcorporatie.",
          "C. U belt direct de burgemeester thuis."
        ],
        "answer": "B. U meldt het bij verhuurder of woningcorporatie."
      },
      {
        "title": "Factuur en belasting",
        "prompt": "Vraag: Wat hoort bij ondernemen in Nederland?",
        "questions": [
          "A. Alle inkomsten verbergen.",
          "B. Nooit facturen bewaren.",
          "C. Facturen en belastinggegevens netjes bijhouden."
        ],
        "answer": "C. Facturen en belastinggegevens netjes bijhouden."
      },
      {
        "title": "Lokale raad in de gemeente",
        "prompt": "Vraag: Bij welke onderwerpen heeft de gemeenteraad invloed?",
        "questions": [
          "A. Lokale onderwerpen zoals verkeer, afval en voorzieningen.",
          "B. De inhoud van elke persoonlijke e-mail.",
          "C. De prijs van elk brood in Nederland."
        ],
        "answer": "A. Lokale onderwerpen zoals verkeer, afval en voorzieningen."
      },
      {
        "title": "Juiste afvalbak kiezen",
        "prompt": "Vraag: Wat past bij goed omgaan met afval?",
        "questions": [
          "A. Alles naast de container zetten.",
          "B. Juiste afvalbak kiezen volgens de lokale regels.",
          "C. Glas in de papierbak doen."
        ],
        "answer": "B. Juiste afvalbak kiezen volgens de lokale regels."
      },
      {
        "title": "Hulp van de bibliotheek",
        "prompt": "Vraag: Waarmee kan de bibliotheek inwoners vaak helpen?",
        "questions": [
          "A. Alleen met rijbewijzen maken.",
          "B. Met medische operaties.",
          "C. Met boeken, taal, computers en digitale vragen."
        ],
        "answer": "C. Met boeken, taal, computers en digitale vragen."
      },
      {
        "title": "Reiskaart gebruiken",
        "prompt": "Vraag: Wat doet u meestal als u reist met trein of bus?",
        "questions": [
          "A. U checkt in en vaak ook uit.",
          "B. U legt uw kaart thuis in de kast.",
          "C. U betaalt altijd contant aan een andere reiziger."
        ],
        "answer": "A. U checkt in en vaak ook uit."
      },
      {
        "title": "Veilig fietsen",
        "prompt": "Vraag: Wat is verstandig in het donker op de fiets?",
        "questions": [
          "A. Zonder licht op de stoep rijden.",
          "B. Goede verlichting gebruiken en zichtbaar zijn.",
          "C. De telefoon vasthouden tijdens het fietsen."
        ],
        "answer": "B. Goede verlichting gebruiken en zichtbaar zijn."
      },
      {
        "title": "Praten met buren",
        "prompt": "Vraag: Wat is vaak verstandig bij een klein probleem met buren?",
        "questions": [
          "A. Eerst rustig praten of een vriendelijk bericht sturen.",
          "B. Meteen harde muziek terugzetten.",
          "C. De deur van de buren blokkeren."
        ],
        "answer": "A. Eerst rustig praten of een vriendelijk bericht sturen."
      },
      {
        "title": "Gelijke kansen aan de balie",
        "prompt": "Vraag: Wat past bij gelijke behandeling in Nederland?",
        "questions": [
          "A. Mensen uitsluiten door afkomst.",
          "B. Alleen vrienden eerlijk helpen.",
          "C. Mensen niet discrimineren."
        ],
        "answer": "C. Mensen niet discrimineren."
      },
      {
        "title": "DigiD geheim",
        "prompt": "Vraag: Hoe gaat u veilig om met uw DigiD-code?",
        "questions": [
          "A. U houdt de code geheim.",
          "B. U geeft de code aan onbekenden aan de telefoon.",
          "C. U zet de code op sociale media."
        ],
        "answer": "A. U houdt de code geheim."
      },
      {
        "title": "Alarmnummer 112",
        "prompt": "Vraag: In welke situatie belt u 112?",
        "questions": [
          "A. Voor een gewone vraag over openingstijden.",
          "B. Bij direct gevaar, brand of ernstige nood.",
          "C. Om een afspraak bij de tandarts te maken."
        ],
        "answer": "B. Bij direct gevaar, brand of ernstige nood."
      },
      {
        "title": "Verzekering controleren",
        "prompt": "Vraag: Wat is verstandig voordat u een verzekering afsluit?",
        "questions": [
          "A. De voorwaarden en dekking controleren.",
          "B. Alleen naar de kleur van de website kijken.",
          "C. Nooit vragen stellen."
        ],
        "answer": "A. De voorwaarden en dekking controleren."
      },
      {
        "title": "Toeslag voor opvangkosten",
        "prompt": "Vraag: Waarvoor is kinderopvangtoeslag bedoeld?",
        "questions": [
          "A. Voor elke vakantie met kinderen.",
          "B. Voor korting op speelgoed.",
          "C. Voor hulp bij kosten van erkende kinderopvang."
        ],
        "answer": "C. Voor hulp bij kosten van erkende kinderopvang."
      },
      {
        "title": "Vrijwillig helpen in de buurt",
        "prompt": "Vraag: Waarom doen mensen vrijwilligerswerk?",
        "questions": [
          "A. Om anderen te helpen en mee te doen.",
          "B. Om geen regels meer te hebben.",
          "C. Om automatisch Nederlander te worden."
        ],
        "answer": "A. Om anderen te helpen en mee te doen."
      },
      {
        "title": "Gezonde dagelijkse gewoonten",
        "prompt": "Vraag: Wat past bij gezond leven?",
        "questions": [
          "A. Alleen energiedrank drinken.",
          "B. Bewegen, gezond eten en genoeg rust nemen.",
          "C. Nooit naar de huisarts gaan."
        ],
        "answer": "B. Bewegen, gezond eten en genoeg rust nemen."
      },
      {
        "title": "Veilig online betalen",
        "prompt": "Vraag: Wat is veilig bij online betalen?",
        "questions": [
          "A. Codes delen met onbekenden.",
          "B. Via elke link inloggen.",
          "C. Zelf de bankapp openen en gegevens controleren."
        ],
        "answer": "C. Zelf de bankapp openen en gegevens controleren."
      },
      {
        "title": "Minder stroom en gas gebruiken",
        "prompt": "Vraag: Waarom proberen veel mensen minder energie te gebruiken?",
        "questions": [
          "A. Omdat het kosten kan besparen en beter is voor het milieu.",
          "B. Omdat verwarming verboden is.",
          "C. Omdat ramen nooit open mogen."
        ],
        "answer": "A. Omdat het kosten kan besparen en beter is voor het milieu."
      },
      {
        "title": "Verhuizing doorgeven",
        "prompt": "Vraag: Aan wie geeft u meestal een verhuizing door?",
        "questions": [
          "A. Alleen aan de buurman.",
          "B. Aan de gemeente waar u woont of gaat wonen.",
          "C. Aan de sportwinkel."
        ],
        "answer": "B. Aan de gemeente waar u woont of gaat wonen."
      },
      {
        "title": "Afspraak annuleren",
        "prompt": "Vraag: Wat doet u als u niet naar een officiele afspraak kunt komen?",
        "questions": [
          "A. U komt niet en zegt niets.",
          "B. U stuurt alleen een foto.",
          "C. U meldt het op tijd af of vraagt een nieuwe afspraak."
        ],
        "answer": "C. U meldt het op tijd af of vraagt een nieuwe afspraak."
      },
      {
        "title": "Stemmen in geheim",
        "prompt": "Vraag: Wat houdt stemgeheim in?",
        "questions": [
          "A. U mag zelf kiezen en hoeft niet te vertellen op wie u stemt.",
          "B. Uw werkgever kijkt mee.",
          "C. U stemt altijd samen met uw buren."
        ],
        "answer": "A. U mag zelf kiezen en hoeft niet te vertellen op wie u stemt."
      },
      {
        "title": "Rookmelder thuis",
        "prompt": "Vraag: Wat helpt bij brandveilig wonen?",
        "questions": [
          "A. Altijd kaarsen laten branden.",
          "B. Een rookmelder en voorzichtig omgaan met apparaten.",
          "C. De meterkast blokkeren met dozen."
        ],
        "answer": "B. Een rookmelder en voorzichtig omgaan met apparaten."
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
        "title": "Zinsvolgorde met uittreksel",
        "prompt": "Opdracht: Zet in goede volgorde: Violetta / het uittreksel / vrijdag / op / haalt",
        "answer": "Vrijdag haalt Violetta het uittreksel op."
      },
      {
        "title": "Onderwerp voor werkwoord",
        "prompt": "Opdracht: Zet in goede volgorde: een blauw sportshirt / nodig / mijn dochter / heeft",
        "answer": "Mijn dochter heeft een blauw sportshirt nodig."
      },
      {
        "title": "Bibliotheekplek in een zin",
        "prompt": "Opdracht: Maak een zin: in de bibliotheek / vrij / De computerplek / is",
        "answer": "De computerplek is in de bibliotheek vrij."
      },
      {
        "title": "Welke balie vraag",
        "prompt": "Opdracht: Maak een vraag: heeft / nodig / welke / balie / u",
        "answer": "Welke balie heeft u nodig?"
      },
      {
        "title": "Wanneer-vraag school",
        "prompt": "Opdracht: Maak een vraag: de ouderavond / wanneer / begint",
        "answer": "Wanneer begint de ouderavond?"
      },
      {
        "title": "Hoeveel minuten vraag",
        "prompt": "Opdracht: Maak een vraag: de route / langer / hoeveel minuten / is",
        "answer": "Hoeveel minuten is de route langer?"
      },
      {
        "title": "Reden met gesloten bospad",
        "prompt": "Opdracht: Maak een zin: Ik fiets via de Molenstraat. Het bospad is dicht.",
        "answer": "Ik fiets via de Molenstraat omdat het bospad dicht is."
      },
      {
        "title": "Voorwaarde met tandartstijd",
        "prompt": "Opdracht: Maak een zin: De tijd past niet. Ik bel de tandarts.",
        "answer": "Als de tijd niet past, bel ik de tandarts."
      },
      {
        "title": "Daarna met school",
        "prompt": "Opdracht: Maak een zin met daarna: De leerkracht geeft informatie. Ouders stellen vragen.",
        "answer": "De leerkracht geeft informatie. Daarna stellen ouders vragen."
      },
      {
        "title": "Niet op juiste plek",
        "prompt": "Opdracht: Zet in goede volgorde: dinsdag / niet / komen / ik / kan",
        "answer": "Ik kan dinsdag niet komen."
      },
      {
        "title": "Of-vraag met tijd",
        "prompt": "Opdracht: Maak een vraag: om twaalf uur / om twee uur / komt / de monteur / of",
        "answer": "Komt de monteur om twaalf uur of om twee uur?"
      },
      {
        "title": "Dat-zin huisarts",
        "prompt": "Opdracht: Maak af: De assistente zegt dat het formulier ... (klaarstaan)",
        "answer": "De assistente zegt dat het formulier klaarstaat."
      },
      {
        "title": "Waar-vraag trein",
        "prompt": "Opdracht: Maak een vraag: u / over / waar / stapt",
        "answer": "Waar stapt u over?"
      },
      {
        "title": "Tijd en plaats",
        "prompt": "Opdracht: Maak een zin: dinsdag / in de bibliotheek / Wij / reserveren / een computer",
        "answer": "Wij reserveren dinsdag een computer in de bibliotheek."
      },
      {
        "title": "Wie-vraag",
        "prompt": "Opdracht: Maak een vraag: de sportshirts / wie / verzamelt",
        "answer": "Wie verzamelt de sportshirts?"
      },
      {
        "title": "Modal in volgorde",
        "prompt": "Opdracht: Zet in goede volgorde: uw pas / meenemen / u / moet",
        "answer": "U moet uw pas meenemen."
      },
      {
        "title": "Zinsvolgorde met middag",
        "prompt": "Opdracht: Maak een zin: ik / de factuur / In de middag / stuur",
        "answer": "In de middag stuur ik de factuur."
      },
      {
        "title": "Want met verzekering",
        "prompt": "Opdracht: Maak een zin met want: Ik controleer de verzekering. Ik ga op reis.",
        "answer": "Ik controleer de verzekering, want ik ga op reis."
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
        "title": "Ik reserveer",
        "prompt": "Opdracht: Vul het werkwoord in: Ik ___ een computerplek. (reserveren)",
        "answer": "Ik reserveer een computerplek."
      },
      {
        "title": "Zij verlengt",
        "prompt": "Opdracht: Vul het werkwoord in: Zij ___ haar zwemabonnement. (verlengen)",
        "answer": "Zij verlengt haar zwemabonnement."
      },
      {
        "title": "Wij stappen over",
        "prompt": "Opdracht: Vul het werkwoord in: Wij ___ in Eindhoven ___. (overstappen)",
        "answer": "Wij stappen in Eindhoven over."
      },
      {
        "title": "U controleert",
        "prompt": "Opdracht: Vul het werkwoord in: U ___ de reisverzekering. (controleren)",
        "answer": "U controleert de reisverzekering."
      },
      {
        "title": "Ik heb gereserveerd",
        "prompt": "Opdracht: Maak perfectum: Ik reserveer een computer.",
        "answer": "Ik heb een computer gereserveerd."
      },
      {
        "title": "Zij heeft gemeld",
        "prompt": "Opdracht: Maak perfectum: Zij meldt de verhuizing.",
        "answer": "Zij heeft de verhuizing gemeld."
      },
      {
        "title": "Wij zijn gefietst",
        "prompt": "Opdracht: Maak perfectum: Wij fietsen via de Molenstraat.",
        "answer": "Wij zijn via de Molenstraat gefietst."
      },
      {
        "title": "De monteur heeft gewerkt",
        "prompt": "Opdracht: Maak perfectum: De monteur werkt aan de cv-ketel.",
        "answer": "De monteur heeft aan de cv-ketel gewerkt."
      },
      {
        "title": "Perfectum groentepakket",
        "prompt": "Opdracht: Maak perfectum: Ik bestel een groentepakket.",
        "answer": "Ik heb een groentepakket besteld."
      },
      {
        "title": "Toekomst factuur sturen",
        "prompt": "Opdracht: Maak toekomst: Ik stuur de factuur.",
        "answer": "Ik ga de factuur sturen."
      },
      {
        "title": "Toekomst samen koken",
        "prompt": "Opdracht: Maak toekomst: Wij koken met groenten.",
        "answer": "Wij gaan met groenten koken."
      },
      {
        "title": "Belofte met tandarts bellen",
        "prompt": "Opdracht: Maak een zin met zal: Ik bel de tandarts morgen.",
        "answer": "Ik zal de tandarts morgen bellen."
      },
      {
        "title": "Verleden had",
        "prompt": "Opdracht: Vul in: Gisteren ___ ik een afspraak. (hebben)",
        "answer": "Gisteren had ik een afspraak."
      },
      {
        "title": "Verleden was",
        "prompt": "Opdracht: Vul in: De trein ___ te laat. (zijn)",
        "answer": "De trein was te laat."
      },
      {
        "title": "U krijgt",
        "prompt": "Opdracht: Vul het werkwoord in: U ___ een nieuwe zorgpas. (krijgen)",
        "answer": "U krijgt een nieuwe zorgpas."
      },
      {
        "title": "Hij komt",
        "prompt": "Opdracht: Vul het werkwoord in: De monteur ___ woensdag. (komen)",
        "answer": "De monteur komt woensdag."
      },
      {
        "title": "Wij nemen",
        "prompt": "Opdracht: Vul het werkwoord in: Wij ___ de zwempas mee. (meenemen)",
        "answer": "Wij nemen de zwempas mee."
      },
      {
        "title": "Vertrekken met zijn",
        "prompt": "Opdracht: Maak perfectum: De trein vertrekt van spoor 3.",
        "answer": "De trein is van spoor 3 vertrokken."
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
        "title": "Identiteitsbewijs moeten tonen",
        "prompt": "Opdracht: Maak een zin met moet: U toont uw identiteitsbewijs.",
        "answer": "U moet uw identiteitsbewijs tonen."
      },
      {
        "title": "Computer kunnen reserveren",
        "prompt": "Opdracht: Maak een zin met kunt: U reserveert dinsdag een computer.",
        "answer": "U kunt dinsdag een computer reserveren."
      },
      {
        "title": "Baliehulp willen vragen",
        "prompt": "Opdracht: Maak een zin met wil: Ik vraag hulp bij de balie.",
        "answer": "Ik wil hulp bij de balie vragen."
      },
      {
        "title": "Ouders mogen vragen stellen",
        "prompt": "Opdracht: Maak een zin met mogen: Ouders stellen na de uitleg vragen.",
        "answer": "Ouders mogen na de uitleg vragen stellen."
      },
      {
        "title": "BRP-document ophalen",
        "prompt": "Opdracht: Vul in: Ik ___ het uittreksel vrijdag ___. (ophalen)",
        "answer": "Ik haal het uittreksel vrijdag op."
      },
      {
        "title": "Online formulier invullen",
        "prompt": "Opdracht: Vul in: Zij ___ het formulier online ___. (invullen)",
        "answer": "Zij vult het formulier online in."
      },
      {
        "title": "Zwempas meenemen",
        "prompt": "Opdracht: Vul in: Wij ___ de zwempas ___. (meenemen)",
        "answer": "Wij nemen de zwempas mee."
      },
      {
        "title": "Tandarts belt terug",
        "prompt": "Opdracht: Vul in: De tandarts ___ mij vanmiddag ___. (terugbellen)",
        "answer": "De tandarts belt mij vanmiddag terug."
      },
      {
        "title": "Doorsturen scheidbaar",
        "prompt": "Opdracht: Vul in: Ik ___ de factuur vandaag ___. (doorsturen)",
        "answer": "Ik stuur de factuur vandaag door."
      },
      {
        "title": "Online aanmelden",
        "prompt": "Opdracht: Vul in: U ___ zich online ___. (aanmelden)",
        "answer": "U meldt zich online aan."
      },
      {
        "title": "Aanmelden voor ouderavond",
        "prompt": "Opdracht: Maak een zin: Ik / zich aanmelden / voor de ouderavond",
        "answer": "Ik meld mij aan voor de ouderavond."
      },
      {
        "title": "Vergissen in spoornummer",
        "prompt": "Opdracht: Maak een zin: Ik / zich vergissen / in het spoor",
        "answer": "Ik vergis mij in het spoor."
      },
      {
        "title": "Zich voelen",
        "prompt": "Opdracht: Vul in: Ik ___ me fit na het zwemmen. (voelen)",
        "answer": "Ik voel me fit na het zwemmen."
      },
      {
        "title": "Voorbereiden op training",
        "prompt": "Opdracht: Maak een zin: Mijn dochter / zich voorbereiden / op de training",
        "answer": "Mijn dochter bereidt zich voor op de training."
      },
      {
        "title": "Printkosten moeten betalen",
        "prompt": "Opdracht: Maak een zin: Zij betaalt tien cent per pagina.",
        "answer": "Zij moet tien cent per pagina betalen."
      },
      {
        "title": "Reisplanner kunnen gebruiken",
        "prompt": "Opdracht: Maak een zin: Wij gebruiken de reisplanner.",
        "answer": "Wij kunnen de reisplanner gebruiken."
      },
      {
        "title": "Willen verlengen",
        "prompt": "Opdracht: Maak een zin: Ik verleng mijn abonnement.",
        "answer": "Ik wil mijn abonnement verlengen."
      },
      {
        "title": "Laptop mogen meenemen",
        "prompt": "Opdracht: Maak een vraag: mijn laptop / meenemen / mag / ik",
        "answer": "Mag ik mijn laptop meenemen?"
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
        "title": "Het uittreksel",
        "prompt": "Opdracht: Kies de of het: ___ uittreksel ligt klaar.",
        "answer": "Het uittreksel ligt klaar."
      },
      {
        "title": "De afspraak",
        "prompt": "Opdracht: Kies de of het: ___ afspraak is dinsdag.",
        "answer": "De afspraak is dinsdag."
      },
      {
        "title": "De zorgpas",
        "prompt": "Opdracht: Kies de of het: ___ zorgpas staat in de app.",
        "answer": "De zorgpas staat in de app."
      },
      {
        "title": "Het abonnement",
        "prompt": "Opdracht: Kies de of het: ___ abonnement loopt zondag af.",
        "answer": "Het abonnement loopt zondag af."
      },
      {
        "title": "Meervoud formulier",
        "prompt": "Opdracht: Maak meervoud: een formulier, twee ...",
        "answer": "Een formulier, twee formulieren."
      },
      {
        "title": "Meervoud trein",
        "prompt": "Opdracht: Maak meervoud: een trein, drie ...",
        "answer": "Een trein, drie treinen."
      },
      {
        "title": "Meervoud shirt",
        "prompt": "Opdracht: Maak meervoud: een shirt, twee ...",
        "answer": "Een shirt, twee shirts."
      },
      {
        "title": "Meervoud computer",
        "prompt": "Opdracht: Maak meervoud: een computer, vier ...",
        "answer": "Een computer, vier computers."
      },
      {
        "title": "Nieuwe afspraak met de",
        "prompt": "Opdracht: Vul in: de ___ afspraak. (nieuwe)",
        "answer": "De nieuwe afspraak."
      },
      {
        "title": "Online formulier met het",
        "prompt": "Opdracht: Vul in: het ___ formulier. (online)",
        "answer": "Het online formulier."
      },
      {
        "title": "Officieel uittreksel zonder e",
        "prompt": "Opdracht: Vul in: een ___ uittreksel. (officieel)",
        "answer": "Een officieel uittreksel."
      },
      {
        "title": "Verse wortels in meervoud",
        "prompt": "Opdracht: Vul in: ___ wortels. (vers)",
        "answer": "Verse wortels."
      },
      {
        "title": "Voornaamwoord zij",
        "prompt": "Opdracht: Vervang Violetta: Violetta belt de tandarts.",
        "answer": "Zij belt de tandarts."
      },
      {
        "title": "Bezitswoord mijn pas",
        "prompt": "Opdracht: Vul in: Dit is ___ bibliotheekpas. (ik)",
        "answer": "Dit is mijn bibliotheekpas."
      },
      {
        "title": "Haar shirt",
        "prompt": "Opdracht: Vul in: Mijn dochter neemt ___ sportshirt mee. (zij)",
        "answer": "Mijn dochter neemt haar sportshirt mee."
      },
      {
        "title": "Zorgpas vervangen door hem",
        "prompt": "Opdracht: Vervang de zorgpas: Ik zoek de zorgpas.",
        "answer": "Ik zoek hem."
      },
      {
        "title": "Dit en dat",
        "prompt": "Opdracht: Vul in: ___ formulier hier is online.",
        "answer": "Dit formulier hier is online."
      },
      {
        "title": "Deze en die",
        "prompt": "Opdracht: Vul in: ___ afspraak op dinsdag past niet.",
        "answer": "Deze afspraak op dinsdag past niet."
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
        "title": "Geen tandartsafspraak",
        "prompt": "Opdracht: Maak negatief: Ik heb een afspraak bij de tandarts.",
        "answer": "Ik heb geen afspraak bij de tandarts."
      },
      {
        "title": "Niet online betalen",
        "prompt": "Opdracht: Maak negatief: Ik betaal via de onbekende link.",
        "answer": "Ik betaal niet via de onbekende link."
      },
      {
        "title": "Geen pas",
        "prompt": "Opdracht: Vul in: Ik heb ___ zwempas bij me.",
        "answer": "Ik heb geen zwempas bij me."
      },
      {
        "title": "Niet nuchter",
        "prompt": "Opdracht: Vul in: Ik hoef ___ nuchter te komen.",
        "answer": "Ik hoef niet nuchter te komen."
      },
      {
        "title": "Bij de balie",
        "prompt": "Opdracht: Vul in: Ik meld mij ___ afspraakbalie 2.",
        "answer": "Ik meld mij bij afspraakbalie 2."
      },
      {
        "title": "Naar de prikpost",
        "prompt": "Opdracht: Vul in: Wij gaan ___ de prikpost.",
        "answer": "Wij gaan naar de prikpost."
      },
      {
        "title": "Op school",
        "prompt": "Opdracht: Vul in: De ouderavond is ___ school.",
        "answer": "De ouderavond is op school."
      },
      {
        "title": "In de app",
        "prompt": "Opdracht: Vul in: De zorgpas staat ___ de app.",
        "answer": "De zorgpas staat in de app."
      },
      {
        "title": "Voor de reis",
        "prompt": "Opdracht: Vul in: Ik sluit een verzekering af ___ de reis.",
        "answer": "Ik sluit een verzekering af voor de reis."
      },
      {
        "title": "Omdat met bospad",
        "prompt": "Opdracht: Maak een zin met omdat: Ik fiets om. Het bospad is dicht.",
        "answer": "Ik fiets om omdat het bospad dicht is."
      },
      {
        "title": "Maar met tandarts",
        "prompt": "Opdracht: Maak een zin met maar: De afspraak is dinsdag. Ik kan niet.",
        "answer": "De afspraak is dinsdag, maar ik kan niet."
      },
      {
        "title": "Dus met trein",
        "prompt": "Opdracht: Maak een zin met dus: De trein is later. Ik kom later thuis.",
        "answer": "De trein is later, dus ik kom later thuis."
      },
      {
        "title": "Want met groente",
        "prompt": "Opdracht: Maak een zin met want: Ik gebruik de champignons vandaag. Ze zijn vers.",
        "answer": "Ik gebruik de champignons vandaag, want ze zijn vers."
      },
      {
        "title": "Als met zorgpas",
        "prompt": "Opdracht: Maak een zin: De nieuwe pas staat in de app. Ik gebruik de nieuwe pas.",
        "answer": "Als de nieuwe pas in de app staat, gebruik ik de nieuwe pas."
      },
      {
        "title": "Daarna met formulier",
        "prompt": "Opdracht: Maak een zin: Ik log in met DigiD. Ik vul het formulier in.",
        "answer": "Ik log in met DigiD. Daarna vul ik het formulier in."
      },
      {
        "title": "Keuzevraag ochtend middag",
        "prompt": "Opdracht: Maak een vraag: Wilt u in de ochtend komen? Wilt u in de middag komen?",
        "answer": "Wilt u in de ochtend komen of wilt u in de middag komen?"
      },
      {
        "title": "Vrij tot twee uur",
        "prompt": "Opdracht: Vul in: De computerplek is vrij ___ twee uur.",
        "answer": "De computerplek is vrij tot twee uur."
      },
      {
        "title": "Van tot",
        "prompt": "Opdracht: Vul in: De monteur komt ___ twaalf ___ twee uur.",
        "answer": "De monteur komt van twaalf tot twee uur."
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
  const key = `v012-writing-answer-${index}-${exercise.title}`;
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
