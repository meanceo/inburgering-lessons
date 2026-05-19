const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte praktische teksten. Zoek wie, wat, waar, wanneer en welke actie nodig is.",
    "meta": [
      "A2 examen",
      "Praktische berichten",
      "Nieuwe v7-opgaven"
    ],
    "exercises": [
      {
        "title": "Adreswijziging bij de gemeente",
        "prompt": "U bent verhuisd binnen de gemeente. Meld uw nieuwe adres binnen vijf dagen online of aan de balie. Neem een geldig identiteitsbewijs mee als u naar het gemeentehuis komt.",
        "questions": [
          "Binnen hoeveel dagen meldt u uw nieuwe adres?",
          "Waar kunt u de adreswijziging doorgeven?",
          "Wat neemt u mee naar het gemeentehuis?"
        ],
        "answer": "U meldt het nieuwe adres binnen vijf dagen. Dat kan online of aan de balie. U neemt een geldig identiteitsbewijs mee."
      },
      {
        "title": "Labformulier ophalen",
        "prompt": "De assistente heeft een labformulier klaargezet. U kunt het morgen na 11.00 uur ophalen. De bloedafname is in het gezondheidscentrum naast de apotheek.",
        "questions": [
          "Wat heeft de assistente klaargezet?",
          "Wanneer kunt u het formulier ophalen?",
          "Waar is de bloedafname?"
        ],
        "answer": "De assistente heeft een labformulier klaargezet. U kunt het morgen na 11.00 uur ophalen. De bloedafname is in het gezondheidscentrum naast de apotheek."
      },
      {
        "title": "Reservekleding voor buitendag",
        "prompt": "De school vraagt ouders om vrijdag reservekleding mee te geven. De kinderen gaan buiten spelen bij modder. Doe de kleding in een tas met de naam van het kind.",
        "questions": [
          "Wanneer geeft u reservekleding mee?",
          "Waarom hebben de kinderen extra kleding nodig?",
          "Wat zet u op de tas?"
        ],
        "answer": "U geeft vrijdag reservekleding mee. De kinderen spelen buiten bij modder. U zet de naam van het kind op de tas."
      },
      {
        "title": "Spaarkaart voor pannen stopt",
        "prompt": "De supermarkt stopt zaterdag met de spaarkaart voor pannen. Lever volle kaarten voor 18.00 uur in bij de servicebalie. Losse zegels kunt u niet meer gebruiken.",
        "questions": [
          "Wanneer stopt de spaarkaart?",
          "Hoe laat levert u volle kaarten uiterlijk in?",
          "Waar levert u de kaarten in?"
        ],
        "answer": "De spaarkaart stopt zaterdag. U levert volle kaarten voor 18.00 uur in. Dat doet u bij de servicebalie."
      },
      {
        "title": "Fietsrit naar de heide",
        "prompt": "De fietsclub vertrekt zondag om 09.15 uur vanaf het dorpsplein. De route is 24 kilometer. Neem drinken en een regenjas mee.",
        "questions": [
          "Hoe laat vertrekt de fietsclub?",
          "Waar start de fietsrit?",
          "Welke twee dingen neemt u mee?"
        ],
        "answer": "De fietsclub vertrekt om 09.15 uur. De rit start op het dorpsplein. U neemt drinken en een regenjas mee."
      },
      {
        "title": "Online klantoverleg",
        "prompt": "De online vergadering met de klant begint om 10.30 uur. Zet uw camera aan en open de planning vooraf. De link staat in de agenda.",
        "questions": [
          "Hoe laat begint de online vergadering?",
          "Wat zet u aan?",
          "Waar vindt u de vergaderlink?"
        ],
        "answer": "De vergadering begint om 10.30 uur. U zet uw camera aan. De link staat in de agenda."
      },
      {
        "title": "Zwembadpas opnieuw actief",
        "prompt": "Uw zwembadpas werkt niet meer. Bij de balie kan de medewerker de pas opnieuw activeren. Dit kost niets, maar u moet uw pasnummer noemen.",
        "questions": [
          "Wat werkt niet meer?",
          "Wie kan de pas opnieuw activeren?",
          "Wat moet u noemen?"
        ],
        "answer": "Uw zwembadpas werkt niet meer. De medewerker aan de balie kan de pas opnieuw activeren. U moet uw pasnummer noemen."
      },
      {
        "title": "Nieuwe tijd bij de tandarts",
        "prompt": "De tandarts heeft uw controle verplaatst naar woensdag 3 juli om 14.20 uur. Kunt u niet komen, bel dan minstens 24 uur eerder.",
        "questions": [
          "Naar welke dag is de controle verplaatst?",
          "Hoe laat is de nieuwe afspraak?",
          "Wanneer belt u als u niet kunt komen?"
        ],
        "answer": "De controle is verplaatst naar woensdag 3 juli. De afspraak is om 14.20 uur. Als u niet kunt komen, belt u minstens 24 uur eerder."
      },
      {
        "title": "Schilderwerk naast uw huis",
        "prompt": "De buren schilderen maandag de voorkant van hun huis. De steiger staat tot donderdag op de stoep. Houd uw fiets tijdelijk in de achtertuin.",
        "questions": [
          "Wat doen de buren maandag?",
          "Tot wanneer staat de steiger op de stoep?",
          "Waar houdt u uw fiets tijdelijk?"
        ],
        "answer": "De buren schilderen de voorkant van hun huis. De steiger staat tot donderdag op de stoep. U houdt uw fiets tijdelijk in de achtertuin."
      },
      {
        "title": "Rookmelders in gebouw C",
        "prompt": "De woningcorporatie test dinsdag rookmelders in gebouw C. De monteur komt tussen 08.30 en 12.00 uur. U hoeft niet thuis te blijven als de huismeester een sleutel heeft.",
        "questions": [
          "Wat test de woningcorporatie?",
          "In welk tijdblok komt de monteur?",
          "Wanneer hoeft u niet thuis te blijven?"
        ],
        "answer": "De woningcorporatie test rookmelders. De monteur komt tussen 08.30 en 12.00 uur. U hoeft niet thuis te blijven als de huismeester een sleutel heeft."
      },
      {
        "title": "Rekening declareren",
        "prompt": "Heeft u een rekening zelf betaald? Upload een duidelijke foto van de rekening in de app. Bewaar de originele rekening nog zes maanden.",
        "questions": [
          "Wat uploadt u in de app?",
          "Hoe moet de foto zijn?",
          "Hoe lang bewaart u de originele rekening?"
        ],
        "answer": "U uploadt een foto van de rekening. De foto moet duidelijk zijn. U bewaart de originele rekening nog zes maanden."
      },
      {
        "title": "Tablet lenen in de leeszaal",
        "prompt": "De bibliotheek leent tablets uit voor oefenen met digitale formulieren. U gebruikt de tablet alleen in de leeszaal. Vraag eerst om een korte uitleg.",
        "questions": [
          "Waarvoor leent de bibliotheek tablets uit?",
          "Waar gebruikt u de tablet?",
          "Wat vraagt u eerst?"
        ],
        "answer": "De bibliotheek leent tablets uit voor digitale formulieren. U gebruikt de tablet in de leeszaal. U vraagt eerst om een korte uitleg."
      },
      {
        "title": "Picknick bij het meer",
        "prompt": "Zaterdag gaat de familie picknicken bij het meer. Violetta maakt gegrilde groenten en haar man neemt brood mee. Bij slecht weer blijft iedereen thuis.",
        "questions": [
          "Waar gaat de familie zaterdag picknicken?",
          "Wat maakt Violetta?",
          "Wat gebeurt er bij slecht weer?"
        ],
        "answer": "De familie gaat picknicken bij het meer. Violetta maakt gegrilde groenten. Bij slecht weer blijft iedereen thuis."
      },
      {
        "title": "Wandeling met podcast later",
        "prompt": "De wandelgroep met podcasts start vandaag om 19.10 uur in plaats van 18.45 uur. Verzamel bij de ingang van het park. Oortjes zijn handig, maar niet verplicht.",
        "questions": [
          "Hoe laat start de wandelgroep vandaag?",
          "Waar verzamelt de groep?",
          "Zijn oortjes verplicht?"
        ],
        "answer": "De wandelgroep start om 19.10 uur. De groep verzamelt bij de ingang van het park. Oortjes zijn handig, maar niet verplicht."
      },
      {
        "title": "Herhaalrecept vanaf donderdag",
        "prompt": "Uw herhaalrecept ligt vanaf donderdag klaar bij de apotheek. Neem uw zorgpas mee. De balie sluit om 17.30 uur.",
        "questions": [
          "Vanaf welke dag ligt het herhaalrecept klaar?",
          "Welke pas neemt u mee?",
          "Hoe laat sluit de balie?"
        ],
        "answer": "Het herhaalrecept ligt vanaf donderdag klaar. U neemt uw zorgpas mee. De balie sluit om 17.30 uur."
      },
      {
        "title": "Spoorwerk richting Maastricht",
        "prompt": "Door spoorwerk reist u zaterdag eerst met de bus naar Weert. Daarna neemt u de trein naar Maastricht. Plan extra reistijd in.",
        "questions": [
          "Waarom reist u anders?",
          "Waarheen reist u eerst met de bus?",
          "Wat plant u extra in?"
        ],
        "answer": "U reist anders door spoorwerk. U reist eerst met de bus naar Weert. U plant extra reistijd in."
      },
      {
        "title": "Kookworkshop in het buurthuis",
        "prompt": "In het buurthuis is woensdag een kookworkshop met groenten en mager vlees. De les begint om 18.00 uur. Aanmelden kan tot maandagmiddag.",
        "questions": [
          "Waar is de kookworkshop?",
          "Op welk tijdstip start de kookles?",
          "Tot wanneer kunt u zich aanmelden?"
        ],
        "answer": "De kookworkshop is in het buurthuis. De les begint om 18.00 uur. U kunt zich tot maandagmiddag aanmelden."
      },
      {
        "title": "Mini-examen parkeervergunning",
        "prompt": "In de brief staat: betaal de parkeervergunning voor 10 juni, anders vervalt uw aanvraag.",
        "questions": [
          "Kies het goede antwoord: A. U krijgt automatisch een gratis vergunning. B. U moet na 10 juni pas reageren. C. U moet voor 10 juni betalen."
        ],
        "answer": "C. U moet voor 10 juni betalen."
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
      "Formulieren en e-mails",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Aanmelden voor taalcafe",
        "prompt": "Vul een kort formulier in voor het taalcafe. Schrijf uw naam, e-mailadres, welke dag u kunt en wat u wilt oefenen.",
        "answer": "Naam: Violetta Bonenkamp\nE-mail: violetta@example.com\nDag: dinsdagavond\nIk wil korte gesprekken oefenen."
      },
      {
        "title": "Nieuw afvalpasje vragen",
        "prompt": "Schrijf een e-mail aan de gemeente. Uw afvalpasje werkt niet. Vraag om een nieuw pasje voor uw adres.",
        "answer": "Beste gemeente,\n\nMijn afvalpasje werkt niet meer. Kunt u een nieuw afvalpasje sturen voor mijn adres?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Allergie melden bij huisarts",
        "prompt": "Schrijf een bericht aan de huisartsenpraktijk. U heeft sinds gisteren rode uitslag en u vraagt of een afspraak nodig is.",
        "answer": "Beste assistente,\n\nIk heb sinds gisteren rode uitslag. Is het nodig om een afspraak te maken?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Gymtas nabrengen naar school",
        "prompt": "Schrijf in de schoolapp. Uw dochter is haar gymtas vergeten. U brengt de tas na de lunch naar school.",
        "answer": "Beste leerkracht,\n\nMijn dochter is haar gymtas vergeten. Ik breng de tas na de lunch naar school.\n\nGroeten,\nVioletta Bonenkamp"
      },
      {
        "title": "Kapotte krat bij bezorging",
        "prompt": "U heeft boodschappen laten bezorgen. Een krat is kapot en de tomaten ontbreken. Schrijf een korte klacht aan de supermarkt.",
        "answer": "Beste klantenservice,\n\nBij mijn bezorging is een krat kapot. Ook ontbreken de tomaten. Kunt u dit oplossen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Tandartscontrole bevestigen",
        "prompt": "Schrijf een kort bericht aan de tandarts. Bevestig dat u woensdag 3 juli om 14.20 uur naar de controle komt.",
        "answer": "Beste tandarts,\n\nIk bevestig mijn controle op woensdag 3 juli om 14.20 uur. Ik kom op tijd.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Rustig zwemuurtje vragen",
        "prompt": "Schrijf aan het zwembad. Vraag wanneer het rustig is om banen te zwemmen en of u moet reserveren.",
        "answer": "Beste medewerker,\n\nWanneer is het rustig om banen te zwemmen? Moet ik vooraf reserveren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Pakket bij buurman ophalen",
        "prompt": "Schrijf een bericht aan uw buurman. Bedank hem voor het aannemen van uw pakket en zeg dat u het vanavond ophaalt.",
        "answer": "Hoi buurman,\n\nDank je dat je mijn pakket hebt aangenomen. Ik haal het vanavond bij je op.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Vier zinnen over fietsroute",
        "prompt": "Schrijf vier korte zinnen over een fietsroute. Vertel waar u start, waar u naartoe fietst, wat u meeneemt en waarom u fietst.",
        "answer": "Ik start bij mijn huis in Sterksel. Ik fiets naar de bibliotheek in Heeze. Ik neem water en mijn telefoon mee. Ik fiets omdat ik gezond wil blijven."
      },
      {
        "title": "Reactie op familiepicknick",
        "prompt": "Uw familie nodigt u uit voor een picknick. Schrijf dat u komt, dat u gegrilde groenten meeneemt en vraag hoe laat u er moet zijn.",
        "answer": "Hoi allemaal,\n\nIk kom graag naar de picknick. Ik neem gegrilde groenten mee. Hoe laat moet ik er zijn?\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Klantoverleg later starten",
        "prompt": "Schrijf een werkbericht aan een klant. Het online overleg moet dertig minuten later beginnen.",
        "answer": "Beste klant,\n\nOns online overleg moet vandaag dertig minuten later beginnen. Kan dat voor u?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Declaratie uploaden vragen",
        "prompt": "Schrijf aan de zorgverzekeraar. U wilt weten hoe u een rekening in de app kunt declareren.",
        "answer": "Beste meneer/mevrouw,\n\nIk wil een rekening declareren in de app. Kunt u uitleggen hoe ik de rekening moet uploaden?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Hulp met bibliotheektablet",
        "prompt": "Schrijf aan de bibliotheek. U wilt een tablet gebruiken en vraagt of iemand u kan helpen met inloggen.",
        "answer": "Beste bibliotheek,\n\nIk wil graag een tablet gebruiken. Kan iemand mij helpen met inloggen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Sportles overslaan door verkoudheid",
        "prompt": "Schrijf een kort bericht aan de sporttrainer. U bent verkouden en komt deze week niet naar de les.",
        "answer": "Hoi trainer,\n\nIk ben verkouden en kom deze week niet naar de sportles. Volgende week probeer ik weer te komen.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Fietsenstalling bij hotel",
        "prompt": "Schrijf een e-mail aan een hotel. U komt met de fiets en vraagt of er een veilige fietsenstalling is.",
        "answer": "Beste hotel,\n\nWij komen met de fiets. Heeft u een veilige fietsenstalling bij het hotel?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Briefje voor regenachtige schooldag",
        "prompt": "Schrijf een kort briefje voor uw jongste dochter. Vertel dat haar lunch in de tas zit en dat zij haar regenjas moet meenemen.",
        "answer": "Lieve dochter,\n\nJe lunch zit in je tas. Neem vandaag je regenjas mee, want het kan regenen.\n\nLiefs,\nMama"
      },
      {
        "title": "Inschrijving kookworkshop",
        "prompt": "Schrijf aan het buurthuis. U wilt meedoen met de kookworkshop en vraagt of er ook een optie zonder varkensvlees is.",
        "answer": "Beste buurthuis,\n\nIk wil graag meedoen met de kookworkshop. Is er ook een optie zonder varkensvlees?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vijf zinnen over AI-werk",
        "prompt": "Schrijf vijf korte zinnen over uw werkdag. Gebruik de woorden AI, klant, idee, pauze en gezin.",
        "answer": "Ik werk vandaag met AI. In de ochtend spreek ik een klant. Daarna schrijf ik een nieuw idee op. In de middag neem ik pauze. Om zes uur eet ik met mijn gezin."
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
        "title": "AI-ronde met vervolgvragen",
        "prompt": "Start een spraaktool en zeg: stel mij zes korte A2-vragen en vraag steeds een vervolgvraag.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel zes korte vragen over gezin, wonen, zorg, vervoer, werk en vrije tijd. Stel na elk antwoord een eenvoudige vervolgvraag."
      },
      {
        "title": "Drie gegevens over uzelf",
        "prompt": "Vertel uw naam, leeftijd en waar u woont.",
        "answer": "Mijn naam is Violetta Bonenkamp. Ik ben 44 en woon in het Brabantse dorp Sterksel."
      },
      {
        "title": "Waarom Sterksel prettig is",
        "prompt": "Vertel waarom u graag in Sterksel woont.",
        "answer": "Sterksel is rustig en groen. Ik kan er wandelen en fietsen, en mijn gezin woont hier prettig."
      },
      {
        "title": "Werkdag aan de keukentafel",
        "prompt": "Vertel wat u doet op een drukke werkdag thuis.",
        "answer": "Ik start mijn laptop en lees mijn berichten. Daarna bel ik klanten en schrijf ik aan mijn artikelen."
      },
      {
        "title": "Adres wijzigen bij de balie",
        "prompt": "U bent bij de gemeente. Vraag hoe u uw nieuwe adres doorgeeft.",
        "answer": "Goedemorgen, ik ben verhuisd. Kunt u mij vertellen hoe ik mijn nieuwe adres kan doorgeven?"
      },
      {
        "title": "Schouderpijn uitleggen",
        "prompt": "U belt de huisarts. Vertel dat u pijn in uw schouder heeft en vraag om advies.",
        "answer": "Goedemorgen, ik heb sinds twee dagen pijn in mijn schouder. Kunt u mij advies geven of een afspraak maken?"
      },
      {
        "title": "Oudergesprek beginnen",
        "prompt": "U praat met de mentor van uw dochter. Begin het gesprek en stel een vraag.",
        "answer": "Goedemiddag, fijn dat ik met u kan praten. Hoe gaat het met mijn dochter in de klas?"
      },
      {
        "title": "Avondeten gezond houden",
        "prompt": "Vertel wat u kookt als u gezond wilt eten.",
        "answer": "Ik kook groenten met kip of rundvlees. Ik gebruik weinig olie en maak er een salade bij."
      },
      {
        "title": "Vraag bij de zelfscan",
        "prompt": "U staat in de supermarkt. Vraag hulp omdat de zelfscan niet werkt.",
        "answer": "Pardon, de zelfscan werkt niet bij mijn boodschappen. Kunt u mij helpen?"
      },
      {
        "title": "Praten over geluid naast u",
        "prompt": "Vraag uw buren rustig of de muziek zachter kan.",
        "answer": "Goedenavond, de muziek is voor ons erg hard. Kunt u die alstublieft iets zachter zetten?"
      },
      {
        "title": "Fietstocht met vriendin plannen",
        "prompt": "Maak een afspraak om samen te fietsen.",
        "answer": "Zullen we zondag om tien uur gaan fietsen? We kunnen bij het dorpsplein afspreken."
      },
      {
        "title": "Treinvertraging vertellen",
        "prompt": "Vertel aan uw man dat uw trein later is.",
        "answer": "Mijn trein heeft vertraging. Ik kom ongeveer twintig minuten later thuis."
      },
      {
        "title": "Zwembadpas werkt niet",
        "prompt": "Vraag aan de balie van het zwembad om hulp met uw pas.",
        "answer": "Goedemiddag, mijn zwembadpas werkt niet. Kunt u kijken wat er aan de hand is?"
      },
      {
        "title": "Rekening declareren",
        "prompt": "Vraag aan de zorgverzekeraar hoe u een rekening terug kunt vragen.",
        "answer": "Goedemiddag, ik heb een rekening zelf betaald. Hoe kan ik die declareren?"
      },
      {
        "title": "Tablet gebruiken in bibliotheek",
        "prompt": "Vraag in de bibliotheek of u een tablet mag lenen.",
        "answer": "Goedemiddag, mag ik een tablet lenen om een digitaal formulier te oefenen?"
      },
      {
        "title": "Podcast tijdens wandeling",
        "prompt": "Vertel waarnaar u luistert als u wandelt.",
        "answer": "Tijdens het wandelen luister ik graag naar podcasts over technologie, gezondheid en ondernemers."
      },
      {
        "title": "Weekend met gezin",
        "prompt": "Vertel wat u graag doet tijdens een weekend weg met uw gezin.",
        "answer": "Wij wandelen door de stad, bezoeken een museum en eten samen in een rustig restaurant."
      },
      {
        "title": "Tekst voor ondernemers schrijven",
        "prompt": "Vertel kort waarover u graag artikelen schrijft.",
        "answer": "Ik schrijf graag over startups, AI en praktische ideeen voor ondernemers."
      },
      {
        "title": "Sportdoel voor deze maand",
        "prompt": "Vertel welke sport u deze maand wilt doen.",
        "answer": "Deze maand wil ik vaker zwemmen en twee lange fietstochten maken."
      },
      {
        "title": "Wachten bij de gemeentebalie",
        "prompt": "Kijk naar de afbeelding. Vertel wat u ziet en wat u bij de balie vraagt.",
        "answer": "Ik zie mensen wachten bij de gemeente. Ik vraag aan de balie waar ik mijn adreswijziging kan regelen.",
        "image": "images/speaking/v007-speaking-municipality-reception-folder-azure15.png"
      },
      {
        "title": "Zelfscan met verse groenten",
        "prompt": "Kijk naar de afbeelding. Vertel wat u koopt en vraag hulp.",
        "answer": "Ik koop verse groenten bij de supermarkt. De zelfscan werkt niet, dus ik vraag een medewerker om hulp.",
        "image": "images/speaking/v007-speaking-supermarket-self-checkout-vegetables-azure15.png"
      },
      {
        "title": "Omkleedruimte bij het zwembad",
        "prompt": "Kijk naar de afbeelding. Vertel wat u doet voor het zwemmen.",
        "answer": "Ik leg mijn tas in een kluisje. Daarna trek ik mijn badkleding aan en loop ik naar het zwembad.",
        "image": "images/speaking/v007-speaking-swimming-pool-lockers-azure15.png",
        "imagePrompt": "Clear everyday Dutch A2 speaking-card image. Realistic photo style in the Netherlands. Scene: public indoor swimming pool entrance area with a reception desk, wall hooks, closed storage lockers, a swim bag, towel, water bottle, and clear walking space. No people, no swimwear worn by anyone, no changing-room activity, no readable text, no logos, no watermark."
      },
      {
        "title": "Fietspad door het dorp",
        "prompt": "Kijk naar de afbeelding. Beschrijf uw fietsroute.",
        "answer": "Ik fiets over een rustig fietspad door het dorp. Ik neem water mee en let goed op het verkeer.",
        "image": "images/speaking/v007-speaking-cycling-lane-village-azure15.png"
      },
      {
        "title": "Videogesprek vanuit huis",
        "prompt": "Kijk naar de afbeelding. Vertel hoe u werkt vanuit huis.",
        "answer": "Ik werk aan mijn bureau met een laptop. Ik heb een videogesprek met een klant en maak notities.",
        "image": "images/speaking/v007-speaking-home-office-video-call-azure15.png"
      },
      {
        "title": "Koffer bij het perron",
        "prompt": "Kijk naar de afbeelding. Vertel hoe u met uw gezin reist.",
        "answer": "Wij staan met koffers bij het perron. We wachten op de trein en houden de tickets klaar.",
        "image": "images/speaking/v007-speaking-family-train-luggage-azure15.png"
      },
      {
        "title": "Medicijn voor uw dochter ophalen",
        "prompt": "Vraag bij de apotheek of het medicijn voor uw dochter klaar ligt.",
        "answer": "Goedemiddag, ik kom een medicijn voor mijn dochter ophalen. Ligt het al klaar?"
      },
      {
        "title": "Boodschap voor buurvrouw inspreken",
        "prompt": "Spreek een kort bericht in voor uw buurvrouw over een pakket.",
        "answer": "Hoi buurvrouw, uw pakket staat bij ons in de gang. U kunt het vanavond ophalen."
      },
      {
        "title": "Terugkijken op het oefenen",
        "prompt": "Vertel welk examendeel beter gaat en wat u morgen wilt oefenen.",
        "answer": "Lezen gaat beter omdat ik de kern snel vind. Morgen wil ik spreken oefenen met korte antwoorden."
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
        "title": "AI-luisterbericht met actie",
        "prompt": "Start een spraaktool en vraag om een kort A2-luisterbericht met een datum, plaats en actie.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees een kort bericht langzaam voor. Stel daarna drie vragen over datum, plaats en wat ik moet doen."
      },
      {
        "title": "Adreswijziging ontvangen",
        "audio": "audio/v007-listening-01-adreswijziging-gemeente.mp3",
        "prompt": "Mevrouw Bonenkamp, uw adreswijziging is ontvangen. Uw nieuwe adres staat vanaf vrijdag in ons systeem. Bewaar het zaaknummer uit deze e-mail.",
        "questions": [
          "Wat is ontvangen?",
          "Vanaf welke dag staat het nieuwe adres in het systeem?",
          "Wat moet mevrouw Bonenkamp bewaren?"
        ],
        "answer": "De adreswijziging is ontvangen. Het nieuwe adres staat vanaf vrijdag in het systeem. Zij moet het zaaknummer bewaren."
      },
      {
        "title": "Schouderklacht bij huisarts",
        "audio": "audio/v007-listening-02-huisarts-schouderpijn.mp3",
        "prompt": "De huisartsassistente belt terug. U kunt donderdag om kwart voor negen komen voor uw schouder. Neem een lijstje mee met de medicijnen die u gebruikt.",
        "questions": [
          "Wanneer kunt u bij de huisarts komen?",
          "Voor welke klacht is de afspraak?",
          "Welke informatie neemt u mee naar de afspraak?"
        ],
        "answer": "U kunt donderdag om kwart voor negen komen. De afspraak is voor de schouder. U neemt een lijstje met medicijnen mee."
      },
      {
        "title": "Mentorgesprek verplaatst",
        "audio": "audio/v007-listening-03-school-mentor-gesprek.mp3",
        "prompt": "Het mentorgesprek van uw dochter is verplaatst naar maandag om half vier. Het gesprek is in lokaal twaalf. Meld u eerst bij de receptie van de school.",
        "questions": [
          "Naar welke dag is het mentorgesprek verplaatst?",
          "Hoe laat begint het gesprek?",
          "Waar meldt u zich eerst?"
        ],
        "answer": "Het gesprek is verplaatst naar maandag. Het begint om half vier. U meldt zich eerst bij de receptie."
      },
      {
        "title": "Controle bij de zelfscan",
        "audio": "audio/v007-listening-04-supermarkt-zelfscan-controle.mp3",
        "prompt": "Bij de zelfscan krijgt u vandaag een controle. Laat uw boodschappentas even staan. Een medewerker scant vijf producten en helpt u daarna verder.",
        "questions": [
          "Wat krijgt u bij de zelfscan?",
          "Wat moet u even laten staan?",
          "Hoeveel producten scant de medewerker?"
        ],
        "answer": "U krijgt een controle. U laat uw boodschappentas even staan. De medewerker scant vijf producten."
      },
      {
        "title": "Buurtbus bij regen",
        "audio": "audio/v007-listening-05-buurtbus-regentijd.mp3",
        "prompt": "Door de harde regen stopt de buurtbus vandaag bij de overdekte halte naast de kerk. De bus vertrekt om 08.12 uur. Kom vijf minuten eerder.",
        "questions": [
          "Waarom stopt de buurtbus op een andere plek?",
          "Waar stopt de bus vandaag?",
          "Hoe laat vertrekt de bus?"
        ],
        "answer": "De bus stopt anders door harde regen. Hij stopt bij de overdekte halte naast de kerk. De bus vertrekt om 08.12 uur."
      },
      {
        "title": "Klantgesprek online",
        "audio": "audio/v007-listening-06-klantgesprek-online.mp3",
        "prompt": "Het klantgesprek begint vandaag om elf uur in plaats van tien uur. De klant vraagt of u vooraf de nieuwe planning stuurt. Gebruik de link uit de agenda.",
        "questions": [
          "Hoe laat begint het klantgesprek vandaag?",
          "Wat vraagt de klant vooraf?",
          "Welke link gebruikt u?"
        ],
        "answer": "Het klantgesprek begint om elf uur. De klant vraagt of u de nieuwe planning stuurt. U gebruikt de link uit de agenda."
      },
      {
        "title": "Zwembadpas herstellen",
        "audio": "audio/v007-listening-07-zwembadpas-balie.mp3",
        "prompt": "Uw zwembadpas is geblokkeerd omdat er een oud e-mailadres in het systeem staat. Geef bij de balie uw nieuwe e-mailadres door. Daarna werkt de pas weer.",
        "questions": [
          "Waarom is de zwembadpas geblokkeerd?",
          "Wat geeft u bij de balie door?",
          "Wat gebeurt er daarna met de pas?"
        ],
        "answer": "De pas is geblokkeerd door een oud e-mailadres. U geeft uw nieuwe e-mailadres door. Daarna werkt de pas weer."
      },
      {
        "title": "Pakket bij buurman",
        "audio": "audio/v007-listening-08-buren-pakket-ophalen.mp3",
        "prompt": "Hallo Violetta, ik heb een pakket voor u aangenomen. U kunt het vanavond na zeven uur ophalen. Bel even aan bij de achterdeur.",
        "questions": [
          "Wat heeft de buurman aangenomen?",
          "Wanneer kan Violetta het pakket ophalen?",
          "Waar belt zij aan?"
        ],
        "answer": "De buurman heeft een pakket aangenomen. Violetta kan het na zeven uur ophalen. Zij belt aan bij de achterdeur."
      },
      {
        "title": "Rookmeldertest in huurhuis",
        "audio": "audio/v007-listening-09-huurwoning-rookmelder.mp3",
        "prompt": "De woningcorporatie test dinsdag de rookmelder in uw huurhuis. De monteur komt tussen half negen en twaalf uur. Zet geen spullen voor de trapkast.",
        "questions": [
          "Wat test de woningcorporatie dinsdag?",
          "In welk tijdblok komt de monteur langs?",
          "Waar zet u geen spullen voor?"
        ],
        "answer": "De woningcorporatie test de rookmelder. De monteur komt tussen half negen en twaalf uur. U zet geen spullen voor de trapkast."
      },
      {
        "title": "Declaratie in de app",
        "audio": "audio/v007-listening-10-zorgverzekering-declaratie.mp3",
        "prompt": "Voor uw declaratie maakt u eerst een foto van de rekening. Controleer of de datum en het bedrag goed leesbaar zijn. Daarna drukt u op verzenden.",
        "questions": [
          "Waarvan maakt u eerst een foto?",
          "Welke twee dingen moeten goed leesbaar zijn?",
          "Waar drukt u daarna op?"
        ],
        "answer": "U maakt eerst een foto van de rekening. De datum en het bedrag moeten goed leesbaar zijn. Daarna drukt u op verzenden."
      },
      {
        "title": "Tabletles in de bibliotheek",
        "audio": "audio/v007-listening-11-bibliotheek-tablet-les.mp3",
        "prompt": "De tabletles in de bibliotheek begint donderdag om twee uur. U oefent met online formulieren. Neem uw bibliotheekpas en een opgeladen telefoon mee.",
        "questions": [
          "Wanneer begint de tabletles?",
          "Waarmee oefent u?",
          "Welke twee dingen neemt u mee?"
        ],
        "answer": "De tabletles begint donderdag om twee uur. U oefent met online formulieren. U neemt uw bibliotheekpas en een opgeladen telefoon mee."
      },
      {
        "title": "Picknick bij regenweer",
        "audio": "audio/v007-listening-12-familie-picknick-regen.mp3",
        "prompt": "De familiepicknick gaat alleen door als het droog blijft. Om tien uur stuurt oma een bericht in de groepsapp. Violetta maakt alvast de groenten klaar.",
        "questions": [
          "Wanneer gaat de picknick door?",
          "Hoe laat stuurt oma een bericht?",
          "Wat maakt Violetta alvast klaar?"
        ],
        "answer": "De picknick gaat door als het droog blijft. Oma stuurt om tien uur een bericht. Violetta maakt de groenten alvast klaar."
      },
      {
        "title": "Fietstocht vanaf dorpsplein",
        "audio": "audio/v007-listening-13-fietstocht-dorpsplein.mp3",
        "prompt": "De fietstocht start zondag om kwart over negen op het dorpsplein. We fietsen rustig en stoppen bij de heide voor koffie. Neem contant geld mee.",
        "questions": [
          "Hoe laat start de fietstocht?",
          "Waar stopt de groep voor koffie?",
          "Welke betaalmanier neemt u mee?"
        ],
        "answer": "De fietstocht start om kwart over negen. De groep stopt bij de heide voor koffie. U neemt contant geld mee."
      },
      {
        "title": "Herhaalrecept bij de apotheek",
        "audio": "audio/v007-listening-14-apotheek-herhaalrecept.mp3",
        "prompt": "Uw herhaalrecept ligt donderdag na drie uur klaar. Gebruik het medicijn elke ochtend na het ontbijt. Bel de apotheek als u bijwerkingen krijgt.",
        "questions": [
          "Wanneer ligt het herhaalrecept klaar?",
          "Wanneer gebruikt u het medicijn?",
          "Wanneer belt u de apotheek?"
        ],
        "answer": "Het herhaalrecept ligt donderdag na drie uur klaar. U gebruikt het medicijn elke ochtend na het ontbijt. U belt als u bijwerkingen krijgt."
      },
      {
        "title": "Circuittraining in de sporthal",
        "audio": "audio/v007-listening-15-sportles-circuittraining.mp3",
        "prompt": "De sportles is vrijdag in de grote sporthal. We doen circuittraining met lichte gewichten. Trek binnenschoenen aan en neem een handdoek mee.",
        "questions": [
          "Waar is de sportles vrijdag?",
          "Welke training doet de groep?",
          "Welke twee dingen neemt u mee of trekt u aan?"
        ],
        "answer": "De sportles is in de grote sporthal. De groep doet circuittraining. U trekt binnenschoenen aan en neemt een handdoek mee."
      },
      {
        "title": "Treinreis naar Maastricht",
        "audio": "audio/v007-listening-16-trein-naar-maastricht.mp3",
        "prompt": "Zaterdag reist u door werkzaamheden eerst met de bus naar Weert. Daar stapt u over op de trein naar Maastricht. De hele reis duurt ongeveer twee uur.",
        "questions": [
          "Waarom reist u eerst met de bus?",
          "Waar stapt u over op de trein?",
          "Hoe lang duurt de hele reis ongeveer?"
        ],
        "answer": "U reist eerst met de bus door werkzaamheden. In Weert stapt u over op de trein. De reis duurt ongeveer twee uur."
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
        "title": "Inschrijven op uw adres",
        "prompt": "Wat doet u als u in een andere gemeente gaat wonen?",
        "questions": [
          "A. U geeft uw nieuwe adres door aan de gemeente",
          "B. U wacht tot de supermarkt het meldt",
          "C. U hoeft niets te doen"
        ],
        "answer": "A. U geeft uw nieuwe adres door aan de gemeente."
      },
      {
        "title": "Reageren op belastingpost",
        "prompt": "Wat is verstandig bij een brief van de Belastingdienst?",
        "questions": [
          "A. De brief ongeopend laten liggen",
          "B. De brief aan een onbekende geven",
          "C. Goed lezen en voor de datum reageren"
        ],
        "answer": "C. Goed lezen en voor de datum reageren."
      },
      {
        "title": "Eerste stap bij gewone zorg",
        "prompt": "Wie is meestal uw eerste contact bij een gewone medische klacht?",
        "questions": [
          "A. De burgemeester",
          "B. De huisarts",
          "C. De fietsenmaker"
        ],
        "answer": "B. De huisarts."
      },
      {
        "title": "Medicijn met recept",
        "prompt": "Waar haalt u meestal medicijnen op met een recept?",
        "questions": [
          "A. Bij de apotheek",
          "B. Bij het zwembad",
          "C. In de trein"
        ],
        "answer": "A. Bij de apotheek."
      },
      {
        "title": "Kinderen en onderwijs",
        "prompt": "Wat past bij de leerplicht in Nederland?",
        "questions": [
          "A. Kinderen mogen altijd zelf thuisblijven",
          "B. School is alleen voor volwassenen",
          "C. Kinderen moeten naar school volgens de regels"
        ],
        "answer": "C. Kinderen moeten naar school volgens de regels."
      },
      {
        "title": "Ouderbijdrage op school",
        "prompt": "Wat is waar over een vrijwillige ouderbijdrage?",
        "questions": [
          "A. Die betaalt de politie",
          "B. School legt uit waarvoor het geld is",
          "C. Die vervangt de lessen"
        ],
        "answer": "B. School legt uit waarvoor het geld is."
      },
      {
        "title": "Arbeidscontract bewaren",
        "prompt": "Waarom bewaart u een arbeidscontract goed?",
        "questions": [
          "A. Daarin staan afspraken over werk, loon en uren",
          "B. Het is een kaartje voor de bus",
          "C. Het is alleen reclame"
        ],
        "answer": "A. Daarin staan afspraken over werk, loon en uren."
      },
      {
        "title": "Vrij vragen op het werk",
        "prompt": "Aan wie vraagt u meestal toestemming voor vakantiedagen?",
        "questions": [
          "A. Aan een onbekende reiziger",
          "B. Aan de bakker",
          "C. Aan uw werkgever of leidinggevende"
        ],
        "answer": "C. Aan uw werkgever of leidinggevende."
      },
      {
        "title": "Huurverhoging nakijken",
        "prompt": "Wat doet u bij een brief over huurverhoging?",
        "questions": [
          "A. Meteen weggooien",
          "B. Controleren wat er verandert en vanaf wanneer",
          "C. Alleen naar de kleur van de brief kijken"
        ],
        "answer": "B. Controleren wat er verandert en vanaf wanneer."
      },
      {
        "title": "Reparatie in huurwoning",
        "prompt": "Waar meldt u vaak een kapotte verwarming in een huurwoning?",
        "questions": [
          "A. Bij een reisbureau",
          "B. Bij de sportclub",
          "C. Bij de verhuurder of woningcorporatie"
        ],
        "answer": "C. Bij de verhuurder of woningcorporatie."
      },
      {
        "title": "DigiD geheim houden",
        "prompt": "Wat doet u met uw DigiD-wachtwoord?",
        "questions": [
          "A. Geheim houden en niet delen",
          "B. Op een openbaar prikbord zetten",
          "C. Aan elke webshop sturen"
        ],
        "answer": "A. Geheim houden en niet delen."
      },
      {
        "title": "Nepbericht herkennen",
        "prompt": "Wat is verstandig bij een verdacht bericht met een betaallink?",
        "questions": [
          "A. Altijd direct betalen",
          "B. Niet zomaar klikken en eerst controleren",
          "C. Uw wachtwoord terugmailen"
        ],
        "answer": "B. Niet zomaar klikken en eerst controleren."
      },
      {
        "title": "Fietsen in het donker",
        "prompt": "Wat heeft een fiets in het donker nodig?",
        "questions": [
          "A. Een extra boodschappentas",
          "B. Een muziekspeaker",
          "C. Goede verlichting"
        ],
        "answer": "C. Goede verlichting."
      },
      {
        "title": "Afvalpas gebruiken",
        "prompt": "Waarvoor gebruikt u vaak een afvalpas?",
        "questions": [
          "A. Om een ondergrondse container te openen",
          "B. Om een afspraak bij de tandarts te maken",
          "C. Om brood te betalen"
        ],
        "answer": "A. Om een ondergrondse container te openen."
      },
      {
        "title": "Lokale raad in gemeente",
        "prompt": "Wie beslist mee over veel lokale onderwerpen in de gemeente?",
        "questions": [
          "A. De piloot van een vliegtuig",
          "B. De gemeenteraad",
          "C. Alleen de supermarkt"
        ],
        "answer": "B. De gemeenteraad."
      },
      {
        "title": "Meningsuiting",
        "prompt": "Wat betekent vrijheid van meningsuiting ongeveer?",
        "questions": [
          "A. Niemand mag ooit iets zeggen",
          "B. U mag alleen thuis praten",
          "C. U mag uw mening geven binnen de wet"
        ],
        "answer": "C. U mag uw mening geven binnen de wet."
      },
      {
        "title": "Discriminatie melden",
        "prompt": "Wat kunt u doen als u discriminatie meemaakt?",
        "questions": [
          "A. Hulp of advies vragen bij een meldpunt of gemeente",
          "B. Altijd stil blijven",
          "C. Uw papieren weggooien"
        ],
        "answer": "A. Hulp of advies vragen bij een meldpunt of gemeente."
      },
      {
        "title": "Nood bij brand",
        "prompt": "Welk nummer belt u bij direct gevaar, zoals brand?",
        "questions": [
          "A. 0900 voor winkels",
          "B. 112",
          "C. Een willekeurig huisnummer"
        ],
        "answer": "B. 112."
      },
      {
        "title": "Hulp bij opvangkosten",
        "prompt": "Waarvoor is kinderopvangtoeslag bedoeld?",
        "questions": [
          "A. Voor gratis vakantie",
          "B. Voor het kopen van meubels",
          "C. Voor een bijdrage aan de rekening van de opvang"
        ],
        "answer": "C. Voor een bijdrage aan de rekening van de opvang."
      },
      {
        "title": "Zorgkosten eerst zelf betalen",
        "prompt": "Wat betekent eigen risico in de zorg vaak?",
        "questions": [
          "A. U betaalt sommige zorgkosten eerst zelf tot een bedrag",
          "B. U hoeft nooit iets te betalen",
          "C. De school betaalt uw medicijnen"
        ],
        "answer": "A. U betaalt sommige zorgkosten eerst zelf tot een bedrag."
      },
      {
        "title": "Wijkactiviteit ondersteunen",
        "prompt": "Wat is vrijwilligerswerk?",
        "questions": [
          "A. Altijd verplicht werk met hoog loon",
          "B. Helpen bij een club of activiteit zonder loon",
          "C. Een boete van de gemeente"
        ],
        "answer": "B. Helpen bij een club of activiteit zonder loon."
      },
      {
        "title": "Mantelzorg in de familie",
        "prompt": "Wat is mantelzorg?",
        "questions": [
          "A. Reizen met korting",
          "B. Een formulier voor de bibliotheek",
          "C. Zorg voor een bekende zonder dat dit uw beroep is"
        ],
        "answer": "C. Zorg voor een bekende zonder dat dit uw beroep is."
      },
      {
        "title": "Privacy op het werk",
        "prompt": "Wat is verstandig met persoonsgegevens van klanten?",
        "questions": [
          "A. Alleen gebruiken voor het doel van het werk",
          "B. Op sociale media zetten",
          "C. Aan iedereen doorgeven"
        ],
        "answer": "A. Alleen gebruiken voor het doel van het werk."
      },
      {
        "title": "Bankrekening veilig",
        "prompt": "Hoe houdt u online bankieren veiliger?",
        "questions": [
          "A. Uw pincode delen met onbekenden",
          "B. Inloggen via de officiele app of website",
          "C. Elke link in elk bericht openen"
        ],
        "answer": "B. Inloggen via de officiele app of website."
      },
      {
        "title": "Inchecken met bankpas",
        "prompt": "Wat doet u in het openbaar vervoer met een betaalpas?",
        "questions": [
          "A. Alleen de pas laten zien aan thuis",
          "B. De pas in uw tas laten",
          "C. Inchecken en later uitchecken"
        ],
        "answer": "C. Inchecken en later uitchecken."
      },
      {
        "title": "Koningsdag",
        "prompt": "Wat vieren veel mensen op Koningsdag?",
        "questions": [
          "A. De verjaardag van de koning",
          "B. De start van de zomervakantie",
          "C. Een gewone winkeldag zonder betekenis"
        ],
        "answer": "A. De verjaardag van de koning."
      },
      {
        "title": "Advies van de GGD",
        "prompt": "Waarover kan de GGD informatie geven?",
        "questions": [
          "A. Alleen treintijden",
          "B. Gezondheid, vaccinaties en preventie",
          "C. De prijs van fietsen"
        ],
        "answer": "B. Gezondheid, vaccinaties en preventie."
      },
      {
        "title": "Diefstal melden bij politie",
        "prompt": "Waar meldt u diefstal officieel?",
        "questions": [
          "A. Bij de sportschool",
          "B. Bij de slager",
          "C. Bij de politie"
        ],
        "answer": "C. Bij de politie."
      }
    ]
  },
  {
    "id": "word_order",
    "number": "06",
    "category": "Grammatica",
    "title": "Grammatica: woordvolgorde en vragen",
    "goal": "Oefen Nederlandse zinnen die vaak nodig zijn bij A2-examentaken.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Zinsvolgorde met vanavond",
        "prompt": "Zet in goede volgorde: ik / groenten / vanavond / kook",
        "answer": "Vanavond kook ik groenten."
      },
      {
        "title": "Zinsvolgorde met daarna",
        "prompt": "Zet in goede volgorde: Violetta / e-mails / daarna / beantwoordt",
        "answer": "Daarna beantwoordt Violetta e-mails."
      },
      {
        "title": "Vraag met gelezen",
        "prompt": "Maak een vraag: de brief / helemaal gelezen / heeft / u",
        "answer": "Heeft u de brief helemaal gelezen?"
      },
      {
        "title": "Hoe laat-vraag bij banen",
        "prompt": "Maak een vraag: het banen zwemmen / hoe laat / start",
        "answer": "Hoe laat start het banen zwemmen?"
      },
      {
        "title": "Wie-vraag op school",
        "prompt": "Maak een vraag met wie: belt / de mentor",
        "answer": "Wie belt de mentor?"
      },
      {
        "title": "Waarom-vraag over afspraak",
        "prompt": "Maak een vraag met waarom: verzet / u / de afspraak",
        "answer": "Waarom verzet u de afspraak?"
      },
      {
        "title": "Willen met infinitief",
        "prompt": "Zet in goede volgorde: zondag / fietsen / wij / willen",
        "answer": "Wij willen zondag fietsen."
      },
      {
        "title": "Kunnen als beleefde vraag",
        "prompt": "Maak een vraag: u / kunt / de rekening / controleren",
        "answer": "Kunt u de rekening controleren?"
      },
      {
        "title": "Omdat met regen",
        "prompt": "Maak een zin: Ik fiets niet. Het regent hard.",
        "answer": "Ik fiets niet omdat het hard regent."
      },
      {
        "title": "Als met klaar zijn",
        "prompt": "Maak af: Ik bel u als het formulier ___",
        "answer": "Ik bel u als het formulier klaar is."
      },
      {
        "title": "Dat in gemeentemail",
        "prompt": "Maak af: De gemeente schrijft dat mijn pas klaar ___",
        "answer": "De gemeente schrijft dat mijn pas klaar is."
      },
      {
        "title": "En tussen twee acties",
        "prompt": "Maak een zin: Ik open de app. Ik upload de rekening.",
        "answer": "Ik open de app en ik upload de rekening."
      },
      {
        "title": "Dus bij gemiste bus",
        "prompt": "Maak een zin: De bus is weg. Ik wacht op de volgende.",
        "answer": "De bus is weg, dus ik wacht op de volgende."
      },
      {
        "title": "Maar bij druk zwembad",
        "prompt": "Maak een zin: Ik wil zwemmen. Het zwembad is erg druk.",
        "answer": "Ik wil zwemmen, maar het zwembad is erg druk."
      },
      {
        "title": "Tijd in het midden",
        "prompt": "Zet in goede volgorde: een overleg / ik / om drie uur / heb",
        "answer": "Ik heb om drie uur een overleg."
      },
      {
        "title": "Plaats na het werkwoord",
        "prompt": "Zet in goede volgorde: bij de ingang / wacht / mijn dochter",
        "answer": "Mijn dochter wacht bij de ingang."
      },
      {
        "title": "Vraag met mag",
        "prompt": "Maak een beleefde vraag: ik / mag / hier / mijn fiets zetten",
        "answer": "Mag ik hier mijn fiets zetten?"
      },
      {
        "title": "Volledige zin over Brabant",
        "prompt": "Maak een volledige zin: Noord-Brabant / ligt / in Nederland",
        "answer": "Noord-Brabant ligt in Nederland."
      }
    ]
  },
  {
    "id": "verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Grammatica: werkwoorden en tijden",
    "goal": "Oefen Nederlandse zinnen die vaak nodig zijn bij A2-examentaken.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Lezen in de ochtend",
        "prompt": "Vul in: Ik ___ elke ochtend nieuws. (lezen)",
        "answer": "Ik lees elke ochtend nieuws."
      },
      {
        "title": "Bellen met klant",
        "prompt": "Vul in: Violetta ___ met haar klant. (bellen)",
        "answer": "Violetta belt met haar klant."
      },
      {
        "title": "Fietsen naar zwembad",
        "prompt": "Vul in: Wij ___ naar het zwembad. (fietsen)",
        "answer": "Wij fietsen naar het zwembad."
      },
      {
        "title": "Vertrekken van bus",
        "prompt": "Vul in: De bus ___ om 08.12 uur. (vertrekken)",
        "answer": "De bus vertrekt om 08.12 uur."
      },
      {
        "title": "Tassen pakken",
        "prompt": "Vul in: Mijn dochters ___ hun tassen. (pakken)",
        "answer": "Mijn dochters pakken hun tassen."
      },
      {
        "title": "Online rekening betalen",
        "prompt": "Vul in: U ___ de rekening online. (betalen)",
        "answer": "U betaalt de rekening online."
      },
      {
        "title": "Voltooid met sturen",
        "prompt": "Maak voltooid: Ik stuur een e-mail.",
        "answer": "Ik heb een e-mail gestuurd."
      },
      {
        "title": "Voltooid met ophalen",
        "prompt": "Maak voltooid: Zij haalt medicijnen op.",
        "answer": "Zij heeft medicijnen opgehaald."
      },
      {
        "title": "Voltooid met reizen",
        "prompt": "Maak voltooid: Wij reizen naar Maastricht.",
        "answer": "Wij zijn naar Maastricht gereisd."
      },
      {
        "title": "Voltooid met langskomen",
        "prompt": "Maak voltooid: De monteur komt langs.",
        "answer": "De monteur is langsgekomen."
      },
      {
        "title": "Voltooid met schrijven",
        "prompt": "Maak voltooid: Ik schrijf een artikel.",
        "answer": "Ik heb een artikel geschreven."
      },
      {
        "title": "Toekomst met bellen",
        "prompt": "Maak toekomst: Ik bel de gemeente.",
        "answer": "Ik ga de gemeente bellen."
      },
      {
        "title": "Toekomst met koken",
        "prompt": "Maak toekomst: Wij koken zondag.",
        "answer": "Wij gaan zondag koken."
      },
      {
        "title": "Willen met uitleg",
        "prompt": "Maak een zin met willen: ik / uitleg / vragen",
        "answer": "Ik wil uitleg vragen."
      },
      {
        "title": "Kunnen met downloaden",
        "prompt": "Maak een zin met kunnen: u / het formulier / downloaden",
        "answer": "U kunt het formulier downloaden."
      },
      {
        "title": "Moeten met zorgpas",
        "prompt": "Maak een zin met moeten: wij / de zorgpas / meenemen",
        "answer": "Wij moeten de zorgpas meenemen."
      },
      {
        "title": "Mogen als vraag",
        "prompt": "Maak een vraag met mogen: ik / hier / parkeren",
        "answer": "Mag ik hier parkeren?"
      },
      {
        "title": "Voorstel met zullen",
        "prompt": "Maak een voorstel met zullen: wij / na het eten / oefenen",
        "answer": "Zullen wij na het eten oefenen?"
      }
    ]
  },
  {
    "id": "modal_separable_reflexive",
    "number": "08",
    "category": "Grammatica",
    "title": "Grammatica: modale, scheidbare en wederkerende werkwoorden",
    "goal": "Oefen Nederlandse zinnen die vaak nodig zijn bij A2-examentaken.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Moeten bij gemeente",
        "prompt": "Maak een zin: mijn identiteitsbewijs / meenemen / ik / moet",
        "answer": "Ik moet mijn identiteitsbewijs meenemen."
      },
      {
        "title": "Kunnen digitaal",
        "prompt": "Maak een zin: online / betalen / u / kunt",
        "answer": "U kunt online betalen."
      },
      {
        "title": "Willen rustig zwemmen",
        "prompt": "Maak een zin: rustig / zwemmen / wij / willen",
        "answer": "Wij willen rustig zwemmen."
      },
      {
        "title": "Mogen telefoon uit",
        "prompt": "Maak een vraag: ik / mag / mijn telefoon / uitzetten",
        "answer": "Mag ik mijn telefoon uitzetten?"
      },
      {
        "title": "Pakket ophalen met moeten",
        "prompt": "Maak af: Ik moet mijn pakket vanavond ___.",
        "answer": "Ik moet mijn pakket vanavond ophalen."
      },
      {
        "title": "Aanbellen nu",
        "prompt": "Gebruik aanbellen: Violetta ___ bij de achterdeur ___.",
        "answer": "Violetta belt bij de achterdeur aan."
      },
      {
        "title": "Uitprinten bij bieb",
        "prompt": "Gebruik uitprinten: Ik ___ het formulier in de bibliotheek ___.",
        "answer": "Ik print het formulier in de bibliotheek uit."
      },
      {
        "title": "Klaarzetten voor ontbijt",
        "prompt": "Gebruik klaarzetten: Mijn man ___ de lunchboxen ___.",
        "answer": "Mijn man zet de lunchboxen klaar."
      },
      {
        "title": "Meebrengen met modal",
        "prompt": "Maak af: U kunt uw eigen bidon ___.",
        "answer": "U kunt uw eigen bidon meebrengen."
      },
      {
        "title": "Aanmelden voor taalcafe",
        "prompt": "Gebruik zich aanmelden: Ik ___ ___ voor het taalcafe.",
        "answer": "Ik meld mij aan voor het taalcafe."
      },
      {
        "title": "Voorstellen aan buur",
        "prompt": "Gebruik zich voorstellen: Wij ___ ___ aan de nieuwe buurman.",
        "answer": "Wij stellen ons voor aan de nieuwe buurman."
      },
      {
        "title": "Herinneren aan afspraak",
        "prompt": "Gebruik zich herinneren: Zij ___ ___ de afspraak goed.",
        "answer": "Zij herinnert zich de afspraak goed."
      },
      {
        "title": "Verslapen op maandag",
        "prompt": "Gebruik zich verslapen: Mijn dochter ___ ___ bijna.",
        "answer": "Mijn dochter verslaapt zich bijna."
      },
      {
        "title": "Inschrijven voor zwemles",
        "prompt": "Gebruik zich inschrijven: Violetta ___ ___ voor zwemles.",
        "answer": "Violetta schrijft zich in voor zwemles."
      },
      {
        "title": "Afspreken bij park",
        "prompt": "Gebruik afspreken: Wij ___ om zeven uur bij het park ___.",
        "answer": "Wij spreken om zeven uur bij het park af."
      },
      {
        "title": "Doorgaan van les",
        "prompt": "Gebruik doorgaan: De les ___ morgen ___.",
        "answer": "De les gaat morgen door."
      },
      {
        "title": "Terugbellen na lunch",
        "prompt": "Gebruik terugbellen: De assistente ___ na de lunch ___.",
        "answer": "De assistente belt na de lunch terug."
      },
      {
        "title": "Klaarmaken voor examen",
        "prompt": "Gebruik zich klaarmaken: Ik ___ ___ rustig klaar voor het examen.",
        "answer": "Ik maak mij rustig klaar voor het examen."
      }
    ]
  },
  {
    "id": "nouns_articles_pronouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Grammatica: lidwoorden, naamwoorden en voornaamwoorden",
    "goal": "Oefen Nederlandse zinnen die vaak nodig zijn bij A2-examentaken.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Lidwoord bij nota",
        "prompt": "Kies de of het: ___ nota ligt op tafel.",
        "answer": "De nota ligt op tafel."
      },
      {
        "title": "Artikel bij adres",
        "prompt": "Kies de of het: ___ adres staat in de brief.",
        "answer": "Het adres staat in de brief."
      },
      {
        "title": "Artikel bij fiets",
        "prompt": "Kies de of het: ___ fiets staat buiten.",
        "answer": "De fiets staat buiten."
      },
      {
        "title": "Artikel bij examen",
        "prompt": "Kies de of het: ___ examen begint om negen uur.",
        "answer": "Het examen begint om negen uur."
      },
      {
        "title": "Van een naar de",
        "prompt": "Maak af: Ik koop een jas. ___ jas is blauw.",
        "answer": "Ik koop een jas. De jas is blauw."
      },
      {
        "title": "Pluralis van overleg",
        "prompt": "Maak meervoud: een overleg, twee ___.",
        "answer": "Een overleg, twee overleggen."
      },
      {
        "title": "Meervoud van kind",
        "prompt": "Maak meervoud: een kind, drie ___.",
        "answer": "Een kind, drie kinderen."
      },
      {
        "title": "Meervoud van medicijn",
        "prompt": "Maak meervoud: een medicijn, veel ___.",
        "answer": "Een medicijn, veel medicijnen."
      },
      {
        "title": "Meervoud van stad",
        "prompt": "Maak meervoud: een stad, twee ___.",
        "answer": "Een stad, twee steden."
      },
      {
        "title": "Bijvoeglijk vers",
        "prompt": "Maak af: Ik koop ___ groenten. (vers)",
        "answer": "Ik koop verse groenten."
      },
      {
        "title": "Bijvoeglijk lang",
        "prompt": "Maak af: Wij maken een ___ fietstocht. (lang)",
        "answer": "Wij maken een lange fietstocht."
      },
      {
        "title": "Bijvoeglijk Nederlands",
        "prompt": "Maak af: Zij volgt een ___ les. (Nederlands)",
        "answer": "Zij volgt een Nederlandse les."
      },
      {
        "title": "Bezittelijk zijn",
        "prompt": "Maak af: Mijn man pakt ___ jas.",
        "answer": "Mijn man pakt zijn jas."
      },
      {
        "title": "Bezittelijk hun",
        "prompt": "Maak af: Mijn dochters pakken ___ tassen.",
        "answer": "Mijn dochters pakken hun tassen."
      },
      {
        "title": "Voornaamwoord haar",
        "prompt": "Maak af: Ik bel mijn buurvrouw en vraag ___ om hulp.",
        "answer": "Ik bel mijn buurvrouw en vraag haar om hulp."
      },
      {
        "title": "Voornaamwoord ze",
        "prompt": "Maak af: De groenten zijn klaar. Ik zet ___ op tafel.",
        "answer": "De groenten zijn klaar. Ik zet ze op tafel."
      },
      {
        "title": "Deze of dit",
        "prompt": "Kies: ___ formulier is belangrijk.",
        "answer": "Dit formulier is belangrijk."
      },
      {
        "title": "Welke of wat",
        "prompt": "Maak een vraag: ___ bus gaat naar het station?",
        "answer": "Welke bus gaat naar het station?"
      }
    ]
  },
  {
    "id": "negation_prepositions_connectors",
    "number": "10",
    "category": "Grammatica",
    "title": "Grammatica: ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen Nederlandse zinnen die vaak nodig zijn bij A2-examentaken.",
    "meta": [
      "A2 grammatica",
      "18 oefeningen",
      "Direct controleren"
    ],
    "exercises": [
      {
        "title": "Geen afspraak",
        "prompt": "Maak negatief: Ik heb een afspraak.",
        "answer": "Ik heb geen afspraak."
      },
      {
        "title": "Geen suiker",
        "prompt": "Maak negatief: Zij gebruikt suiker.",
        "answer": "Zij gebruikt geen suiker."
      },
      {
        "title": "Geen vragen",
        "prompt": "Maak negatief: Wij hebben vragen.",
        "answer": "Wij hebben geen vragen."
      },
      {
        "title": "Niet morgen om negen",
        "prompt": "Maak negatief: Ik kom morgen om negen uur.",
        "answer": "Ik kom morgen om negen uur niet."
      },
      {
        "title": "App werkt niet",
        "prompt": "Maak negatief: De app werkt.",
        "answer": "De app werkt niet."
      },
      {
        "title": "Formulier niet begrijpen",
        "prompt": "Maak negatief: Ik begrijp het formulier.",
        "answer": "Ik begrijp het formulier niet."
      },
      {
        "title": "Voorzetsel bij balie",
        "prompt": "Vul in: Ik wacht ___ de balie.",
        "answer": "Ik wacht bij de balie."
      },
      {
        "title": "Voorzetsel bij lesdag",
        "prompt": "Vul in: De sportles is ___ vrijdag.",
        "answer": "De sportles is op vrijdag."
      },
      {
        "title": "Voorzetsel naar gemeente",
        "prompt": "Vul in: Wij gaan ___ de gemeente.",
        "answer": "Wij gaan naar de gemeente."
      },
      {
        "title": "Voorzetsel met dochters",
        "prompt": "Vul in: Ik reis ___ mijn dochters.",
        "answer": "Ik reis met mijn dochters."
      },
      {
        "title": "Voorzetsel voor verzekering",
        "prompt": "Vul in: Deze brief is ___ de verzekering.",
        "answer": "Deze brief is voor de verzekering."
      },
      {
        "title": "Voorzetsel tussen tijden",
        "prompt": "Vul in: De monteur komt ___ twee en vier uur.",
        "answer": "De monteur komt tussen twee en vier uur."
      },
      {
        "title": "En met werkdag",
        "prompt": "Maak een zin: Ik open mijn laptop. Ik lees mijn mail.",
        "answer": "Ik open mijn laptop en ik lees mijn mail."
      },
      {
        "title": "Of met keuze",
        "prompt": "Maak een zin: U kunt bellen. U kunt mailen.",
        "answer": "U kunt bellen of mailen."
      },
      {
        "title": "Maar met supermarkt",
        "prompt": "Maak een zin: Ik wil betalen. De kassa is dicht.",
        "answer": "Ik wil betalen, maar de kassa is dicht."
      },
      {
        "title": "Want met sportreden",
        "prompt": "Maak een zin: Ik neem een bidon mee. Ik ga trainen.",
        "answer": "Ik neem een bidon mee, want ik ga trainen."
      },
      {
        "title": "Dus met baliebezoek",
        "prompt": "Maak een zin: Mijn pas werkt niet. Ik ga naar de balie.",
        "answer": "Mijn pas werkt niet, dus ik ga naar de balie."
      },
      {
        "title": "Omdat bij familie",
        "prompt": "Maak een zin: Wij blijven binnen. Het regent.",
        "answer": "Wij blijven binnen omdat het regent."
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
  const key = `v007-writing-answer-${index}-${exercise.title}`;
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
  answerMode.textContent = allOpen ? "Verberg antwoorden" : "Toon antwoorden";
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
