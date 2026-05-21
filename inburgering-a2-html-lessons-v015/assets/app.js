const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte praktische teksten over gemeente, zorg, school, vervoer, werk, wonen, gezin en vrije tijd.",
    "meta": [
      "A2 examen",
      "Praktische teksten",
      "Nieuwe v015-opgaven"
    ],
    "exercises": [
      {
        "title": "Verhuizing binnen Sterksel doorgeven",
        "prompt": "U bent vorige week binnen Sterksel verhuisd. Geef uw nieuwe adres binnen vijf dagen door aan de gemeente. Houd uw DigiD en huurcontract bij de hand.",
        "questions": [
          "Vraag 1: Wat geeft u door aan de gemeente?",
          "Vraag 2: Binnen hoeveel dagen doet u dat?",
          "Vraag 3: Welke twee dingen houdt u bij de hand?"
        ],
        "answer": "U geeft uw nieuwe adres door. Dat doet u binnen vijf dagen. U houdt uw DigiD en huurcontract bij de hand."
      },
      {
        "title": "Herhaalrecept via huisartsportaal",
        "prompt": "Uw bloeddrukmedicijn is bijna op. Vraag voor donderdag via het huisartsportaal een herhaalrecept aan. De apotheek stuurt een bericht als het medicijn klaar ligt.",
        "questions": [
          "Vraag 1: Welk medicijn is bijna op?",
          "Vraag 2: Waar vraagt u een herhaalrecept aan?",
          "Vraag 3: Wie stuurt een bericht als het klaar ligt?"
        ],
        "answer": "Het bloeddrukmedicijn is bijna op. U vraagt een herhaalrecept aan via het huisartsportaal. De apotheek stuurt een bericht."
      },
      {
        "title": "Tijdvak kiezen voor ouderavond",
        "prompt": "De mentor van uw dochter nodigt ouders uit voor een ouderavond op dinsdag. Kies voor vrijdag een tijdvak in de schoolapp. Neem uw vragen over huiswerk mee.",
        "questions": [
          "Vraag 1: Wie nodigt ouders uit?",
          "Vraag 2: Waar kiest u een tijdvak?",
          "Vraag 3: Welke vragen neemt u mee?"
        ],
        "answer": "De mentor nodigt ouders uit. U kiest een tijdvak in de schoolapp. U neemt vragen over huiswerk mee."
      },
      {
        "title": "Statiegeldbon gebruiken bij boodschappen",
        "prompt": "Bij de supermarkt staat de statiegeldautomaat links naast de ingang. Lever flessen en blikjes in en neem de bon mee. De bon kunt u aan de kassa gebruiken.",
        "questions": [
          "Vraag 1: Waar staat de statiegeldautomaat?",
          "Vraag 2: Wat levert u in?",
          "Vraag 3: Waar gebruikt u de bon?"
        ],
        "answer": "De automaat staat links naast de ingang. U levert flessen en blikjes in. U gebruikt de bon aan de kassa."
      },
      {
        "title": "Buurtbus naar Geldrop betalen",
        "prompt": "De buurtbus rijdt van maandag tot en met vrijdag elk uur naar Geldrop. Op zaterdag rijdt de bus alleen in de ochtend. U koopt een kaartje bij de chauffeur en betaalt met pin.",
        "questions": [
          "Vraag 1: Waar rijdt de buurtbus naartoe?",
          "Vraag 2: Wanneer rijdt de bus op zaterdag?",
          "Vraag 3: Hoe betaalt u het kaartje?"
        ],
        "answer": "De buurtbus rijdt naar Geldrop. Op zaterdag rijdt de bus alleen in de ochtend. U betaalt met pin."
      },
      {
        "title": "Handelsnaam wijzigen bij KvK",
        "prompt": "U wilt de handelsnaam van uw bedrijf wijzigen. Maak online een afspraak bij de Kamer van Koophandel in Eindhoven. Neem uw legitimatie en het uittreksel van uw bedrijf mee.",
        "questions": [
          "Vraag 1: Wat wilt u wijzigen?",
          "Vraag 2: Bij welke organisatie maakt u een afspraak?",
          "Vraag 3: Welke twee documenten neemt u mee?"
        ],
        "answer": "U wilt de handelsnaam wijzigen. U maakt een afspraak bij de Kamer van Koophandel. U neemt legitimatie en het uittreksel mee."
      },
      {
        "title": "Banenzwemmen in de vroege ochtend",
        "prompt": "Zwembad De Smeltkroes heeft banenzwemmen op woensdag om 07.30 uur. Reserveer online een plek. Uw reservering blijft vijftien minuten geldig na de begintijd.",
        "questions": [
          "Vraag 1: Op welke dag is er banenzwemmen?",
          "Vraag 2: Hoe reserveert u een plek?",
          "Vraag 3: Hoelang blijft de reservering geldig na de begintijd?"
        ],
        "answer": "Er is banenzwemmen op woensdag. U reserveert online. De reservering blijft vijftien minuten geldig na de begintijd."
      },
      {
        "title": "Kappersafspraak op tijd verzetten",
        "prompt": "Uw kappersafspraak is maandag om 14.00 uur. Kunt u niet komen? Bel uiterlijk vrijdagmiddag. Dan kan de kapper de tijd aan iemand anders geven.",
        "questions": [
          "Vraag 1: Wanneer is de kappersafspraak?",
          "Vraag 2: Wanneer belt u uiterlijk?",
          "Vraag 3: Waarom belt u op tijd?"
        ],
        "answer": "De afspraak is maandag om 14.00 uur. U belt uiterlijk vrijdagmiddag. Dan kan de kapper de tijd aan iemand anders geven."
      },
      {
        "title": "Groene container aan de straat zetten",
        "prompt": "Volgens de afvalkalender wordt de groene container dinsdag geleegd. Zet de container maandagavond na 20.00 uur aan de straat. Gebruik geen plastic zakken in de container.",
        "questions": [
          "Vraag 1: Welke container wordt dinsdag geleegd?",
          "Vraag 2: Wanneer zet u de container buiten?",
          "Vraag 3: Wat gebruikt u niet in de container?"
        ],
        "answer": "De groene container wordt geleegd. U zet hem maandagavond na 20.00 uur buiten. U gebruikt geen plastic zakken."
      },
      {
        "title": "Storing aan de verwarming melden",
        "prompt": "De verwarming blijft koud, ook als de thermostaat hoger staat. Maak overdag een melding via het woonportaal. Bel het spoednummer alleen als er ook warm water ontbreekt.",
        "questions": [
          "Vraag 1: Wat blijft koud?",
          "Vraag 2: Waar maakt u overdag een melding?",
          "Vraag 3: Wanneer belt u het spoednummer?"
        ],
        "answer": "De verwarming blijft koud. U maakt een melding via het woonportaal. U belt het spoednummer alleen als er ook warm water ontbreekt."
      },
      {
        "title": "Fysiotherapie in de zorgapp controleren",
        "prompt": "U wilt weten of fysiotherapie wordt vergoed. Open de zorgapp en kijk bij aanvullende verzekering. Bel de klantenservice als u het aantal behandelingen niet ziet.",
        "questions": [
          "Vraag 1: Welke zorg wilt u controleren?",
          "Vraag 2: Waar kijkt u in de zorgapp?",
          "Vraag 3: Wanneer belt u de klantenservice?"
        ],
        "answer": "U wilt fysiotherapie controleren. U kijkt bij aanvullende verzekering. U belt als u het aantal behandelingen niet ziet."
      },
      {
        "title": "Donderdagochtend taalcafe oefenen",
        "prompt": "De bibliotheek organiseert iedere donderdag een taalcafe van 10.00 tot 11.30 uur. Meedoen is gratis. Meld u aan bij de balie als u voor het eerst komt.",
        "questions": [
          "Vraag 1: Wanneer is het taalcafe?",
          "Vraag 2: Hoeveel kost meedoen?",
          "Vraag 3: Waar meldt u zich aan?"
        ],
        "answer": "Het taalcafe is iedere donderdag van 10.00 tot 11.30 uur. Meedoen is gratis. U meldt zich aan bij de balie."
      },
      {
        "title": "E-ticket voor treinreis naar Rotterdam",
        "prompt": "Uw e-ticket naar Rotterdam staat in de NS-app. Reis zaterdag buiten de spits. Neem een identiteitsbewijs mee, want de conducteur kan erom vragen.",
        "questions": [
          "Vraag 1: Waar staat het e-ticket?",
          "Vraag 2: Wanneer reist u naar Rotterdam?",
          "Vraag 3: Waarom neemt u een identiteitsbewijs mee?"
        ],
        "answer": "Het e-ticket staat in de NS-app. U reist zaterdag buiten de spits. De conducteur kan om een identiteitsbewijs vragen."
      },
      {
        "title": "Groentepakket ophalen bij boerderijwinkel",
        "prompt": "Uw groentepakket ligt vrijdag klaar bij de boerderijwinkel. Haal het pakket tussen 16.00 en 18.00 uur op. Neem een koeltas mee voor de verse producten.",
        "questions": [
          "Vraag 1: Waar ligt het groentepakket klaar?",
          "Vraag 2: Hoe laat haalt u het pakket op?",
          "Vraag 3: Wat neemt u mee?"
        ],
        "answer": "Het pakket ligt klaar bij de boerderijwinkel. U haalt het tussen 16.00 en 18.00 uur op. U neemt een koeltas mee."
      },
      {
        "title": "Grof afval afspraak met afvalpas",
        "prompt": "Voor grof afval maakt u eerst een afspraak bij de milieustraat. Neem uw afvalpas mee. Sorteer hout, metaal en elektrische apparaten al thuis.",
        "questions": [
          "Vraag 1: Waar maakt u eerst een afspraak voor?",
          "Vraag 2: Welke pas neemt u mee?",
          "Vraag 3: Welke spullen sorteert u thuis?"
        ],
        "answer": "U maakt een afspraak bij de milieustraat. U neemt uw afvalpas mee. U sorteert hout, metaal en elektrische apparaten thuis."
      },
      {
        "title": "Oprit vrijhouden voor schilderwerk",
        "prompt": "De buren laten woensdag de kozijnen schilderen. De schilder zet een ladder naast de oprit. Houd de oprit vrij tussen 08.00 en 12.00 uur.",
        "questions": [
          "Vraag 1: Wat laten de buren schilderen?",
          "Vraag 2: Waar zet de schilder een ladder?",
          "Vraag 3: Wanneer houdt u de oprit vrij?"
        ],
        "answer": "De buren laten de kozijnen schilderen. De schilder zet een ladder naast de oprit. U houdt de oprit vrij tussen 08.00 en 12.00 uur."
      },
      {
        "title": "Fietsroute met podcastpauze",
        "prompt": "U fietst zondag met uw gezin naar een bosroute bij Heeze. Neem water en een kleine lunch mee. Na de rit luistert u thuis verder naar uw podcast.",
        "questions": [
          "Vraag 1: Waar fietst u zondag naartoe?",
          "Vraag 2: Wat neemt u mee?",
          "Vraag 3: Wat doet u na de rit?"
        ],
        "answer": "U fietst naar een bosroute bij Heeze. U neemt water en een kleine lunch mee. Daarna luistert u thuis verder naar uw podcast."
      },
      {
        "title": "Factuur van internetprovider bekijken",
        "prompt": "Uw internetprovider stuurt een nieuwe factuur per e-mail. Controleer het bedrag en de betaaldatum. Download de factuur voor uw administratie.",
        "questions": [
          "Vraag 1: Wie stuurt een nieuwe factuur?",
          "Vraag 2: Wat controleert u op de factuur?",
          "Vraag 3: Waarom downloadt u de factuur?"
        ],
        "answer": "De internetprovider stuurt de factuur. U controleert het bedrag en de betaaldatum. U downloadt de factuur voor uw administratie."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf korte berichten, e-mails en notities voor alledaagse A2-situaties.",
    "meta": [
      "Schriftelijk examen",
      "Berichten en formulieren",
      "Met autosave"
    ],
    "exercises": [
      {
        "title": "Nieuw adres melden aan gemeente",
        "prompt": "Schrijf aan de gemeente. U bent verhuisd en wilt uw nieuwe adres doorgeven.",
        "answer": "Beste gemeente,\n\nIk ben vorige week verhuisd binnen Sterksel. Ik wil graag mijn nieuwe adres doorgeven. Kunt u mij vertellen wat ik moet meesturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Herhaalrecept aanvragen",
        "prompt": "Schrijf aan de huisartsenpraktijk. Vraag om een herhaalrecept voor uw bloeddrukmedicijn.",
        "answer": "Beste medewerker,\n\nMijn bloeddrukmedicijn is bijna op. Kunt u voor mij een herhaalrecept maken? Ik kan het medicijn deze week ophalen.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Tijdvak voor ouderavond vragen",
        "prompt": "Schrijf aan de mentor. Vraag of er dinsdag nog een tijdvak vrij is voor de ouderavond.",
        "answer": "Beste mentor,\n\nIs er dinsdag nog een tijdvak vrij voor de ouderavond? Ik wil graag over het huiswerk van mijn dochter praten.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Statiegeldbon niet vergeten",
        "prompt": "Schrijf aan uw man. Vertel dat hij de statiegeldbon bij de kassa moet gebruiken.",
        "answer": "Hoi,\n\nWil je de statiegeldbon vandaag bij de kassa gebruiken? De bon zit in mijn tas.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Vraag over buurtbus",
        "prompt": "Schrijf aan een vriendin. Vraag of de buurtbus op zaterdag naar Geldrop rijdt.",
        "answer": "Hoi,\n\nWeet jij of de buurtbus zaterdag naar Geldrop rijdt? Ik wil in de ochtend gaan.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "KvK-documenten klaarleggen",
        "prompt": "Schrijf een korte notitie voor uzelf. U moet legitimatie en het bedrijfsuittreksel meenemen.",
        "answer": "Vrijdag leg ik mijn legitimatie en het bedrijfsuittreksel klaar. Maandag heb ik een afspraak bij de KvK in Eindhoven."
      },
      {
        "title": "Plek voor banenzwemmen reserveren",
        "prompt": "Schrijf aan het zwembad. U wilt woensdag om 07.30 uur komen banenzwemmen.",
        "answer": "Beste medewerker,\n\nIk wil graag woensdag om 07.30 uur komen banenzwemmen. Kunt u een plek voor mij reserveren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Kappersafspraak verzetten",
        "prompt": "Schrijf aan de kapper. U kunt maandag om 14.00 uur niet komen en vraagt een nieuwe tijd.",
        "answer": "Beste kapper,\n\nIk kan maandag om 14.00 uur niet komen. Kunt u mijn afspraak verzetten naar een andere dag?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Containerherinnering sturen",
        "prompt": "Schrijf aan uw gezin. Herinner iedereen eraan dat de groene container maandagavond buiten moet staan.",
        "answer": "Hoi allemaal,\n\nDe groene container moet maandagavond na 20.00 uur aan de straat staan. Doe geen plastic zakken in de container.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Verwarming melden bij woonportaal",
        "prompt": "Schrijf aan de verhuurder. De verwarming blijft koud en u vraagt om hulp.",
        "answer": "Beste verhuurder,\n\nMijn verwarming blijft koud, ook als ik de thermostaat hoger zet. Kunt u een monteur sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Fysiotherapie vergoeding vragen",
        "prompt": "Schrijf aan de zorgverzekeraar. Vraag hoeveel behandelingen fysiotherapie u vergoed krijgt.",
        "answer": "Beste medewerker,\n\nKunt u mij vertellen hoeveel behandelingen fysiotherapie mijn verzekering vergoedt? Ik kan het aantal niet vinden in de app.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Eerste bezoek aan taalochtend",
        "prompt": "Schrijf aan de bibliotheek. U wilt donderdag voor het eerst naar het taalcafe komen.",
        "answer": "Beste bibliotheek,\n\nIk wil donderdag graag voor het eerst naar het taalcafe komen. Moet ik mij vooraf aanmelden?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "E-ticket naar partner sturen",
        "prompt": "Schrijf aan uw man. Vertel dat het e-ticket in de NS-app staat en dat u een identiteitsbewijs meeneemt.",
        "answer": "Hoi,\n\nMijn e-ticket naar Rotterdam staat in de NS-app. Ik neem ook mijn identiteitsbewijs mee voor de conducteur.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Groentepakket ophalen plannen",
        "prompt": "Schrijf een korte planning voor vrijdag. U haalt een groentepakket op bij de boerderijwinkel.",
        "answer": "Vrijdag haal ik tussen 16.00 en 18.00 uur het groentepakket op bij de boerderijwinkel. Ik neem een koeltas mee."
      },
      {
        "title": "Afspraak milieustraat bevestigen",
        "prompt": "Schrijf aan de milieustraat. Bevestig dat u zaterdag komt met grof afval.",
        "answer": "Beste medewerker,\n\nIk kom zaterdag met grof afval naar de milieustraat. Ik neem mijn afvalpas mee en sorteer de spullen thuis.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Buur vragen over oprit",
        "prompt": "Schrijf aan uw buurvrouw. Vraag hoe laat de oprit woensdag vrij moet zijn voor de schilder.",
        "answer": "Beste buurvrouw,\n\nHoe laat moet onze oprit woensdag vrij zijn voor de schilder? Dan zet ik mijn fiets en auto op tijd weg.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Fietsroute afspreken",
        "prompt": "Schrijf aan een vriendin. U wilt zondag fietsen bij Heeze en vraagt of zij meegaat.",
        "answer": "Hoi,\n\nIk wil zondag fietsen bij Heeze. Ga je mee? Ik neem water en een kleine lunch mee.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Factuur bewaren",
        "prompt": "Schrijf een korte notitie voor uw administratie. U moet de internetfactuur downloaden.",
        "answer": "Vandaag download ik de factuur van de internetprovider. Ik controleer het bedrag en de betaaldatum en bewaar de factuur bij mijn administratie."
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
        "title": "AI-examinator voor nieuwe dagtaken",
        "prompt": "Open een spraaktool en vraag om twaalf korte A2-vragen over verhuizing, huisartsportaal, ouderavond, statiegeld, buurtbus, KvK, zwembad, kapper, afval, verwarming, verzekering en bibliotheek.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel twaalf korte vragen over adres wijzigen, herhaalrecept, ouderavond, statiegeld, buurtbus, KvK, banenzwemmen, kapper, groene container, verwarming, fysiotherapie en taalcafe. Wacht na elke vraag op mijn antwoord."
      },
      {
        "title": "Voorstellen met sport en gezin",
        "prompt": "Vertel uw naam, woonplaats, gezin en welke sport u graag doet.",
        "answer": "Hallo, ik ben Violetta Bonenkamp. Ik woon in Sterksel met mijn man en twee dochters. Ik zwem en fiets graag om gezond te blijven."
      },
      {
        "title": "Werkdag thuis samenvatten",
        "prompt": "Vertel kort wat u op een werkdag thuis doet voor uw startup.",
        "answer": "Ik werk thuis aan mijn startup. Ik schrijf artikelen, gebruik AI en plan mijn afspraken in mijn agenda."
      },
      {
        "title": "Nieuw adres doorgeven",
        "prompt": "Bel de gemeente en zeg dat u uw nieuwe adres wilt doorgeven.",
        "answer": "Goedemorgen, ik ben verhuisd. Ik wil graag mijn nieuwe adres aan de gemeente doorgeven."
      },
      {
        "title": "Herhaalrecept vragen",
        "prompt": "Bel de huisartsenpraktijk en vraag om een herhaalrecept.",
        "answer": "Goedemorgen, mijn bloeddrukmedicijn is bijna op. Kunt u een herhaalrecept voor mij maken?"
      },
      {
        "title": "Ouderavond plannen",
        "prompt": "Vraag de mentor of er nog een tijdvak vrij is voor de ouderavond.",
        "answer": "Goedemiddag, is er dinsdag nog een tijdvak vrij voor de ouderavond?"
      },
      {
        "title": "Statiegeldautomaat zoeken",
        "prompt": "Vraag in de supermarkt waar u flessen en blikjes kunt inleveren.",
        "answer": "Pardon, waar staat de statiegeldautomaat voor flessen en blikjes?"
      },
      {
        "title": "Buurtbus naar station vragen",
        "prompt": "Vraag aan de chauffeur of de buurtbus naar station Geldrop rijdt.",
        "answer": "Goedemorgen, rijdt deze buurtbus naar station Geldrop?"
      },
      {
        "title": "KvK-vraag stellen",
        "prompt": "Bel de KvK en vraag welke documenten u moet meenemen voor een handelsnaam.",
        "answer": "Goedemiddag, welke documenten moet ik meenemen als ik mijn handelsnaam wil wijzigen?"
      },
      {
        "title": "Vroege zwemplek vastleggen",
        "prompt": "Vraag bij het zwembad of u woensdag vroeg kunt banenzwemmen.",
        "answer": "Goedemorgen, kan ik woensdag om half acht een plek reserveren voor banenzwemmen?"
      },
      {
        "title": "Kapper om andere tijd vragen",
        "prompt": "Zeg tegen de kapper dat u maandag niet kunt komen.",
        "answer": "Goedemiddag, ik kan maandag om twee uur niet komen. Heeft u een andere tijd voor mij?"
      },
      {
        "title": "Containerafspraak thuis uitleggen",
        "prompt": "Vertel aan uw gezin wanneer de groene container buiten moet staan.",
        "answer": "De groene container moet maandagavond na acht uur aan de straat staan. Gebruik geen plastic zakken."
      },
      {
        "title": "Koude verwarming melden",
        "prompt": "Vertel aan de verhuurder wat er mis is met de verwarming.",
        "answer": "Mijn verwarming blijft koud, ook als de thermostaat hoog staat. Kunt u een monteur sturen?"
      },
      {
        "title": "Vergoeding navragen",
        "prompt": "Vraag aan de zorgverzekeraar hoeveel fysiotherapie u vergoed krijgt.",
        "answer": "Kunt u mij vertellen hoeveel behandelingen fysiotherapie mijn aanvullende verzekering vergoedt?"
      },
      {
        "title": "Taalcafe-informatie vragen",
        "prompt": "Vraag in de bibliotheek wanneer het taalcafe is.",
        "answer": "Goedemiddag, wanneer is het taalcafe en moet ik mij aanmelden?"
      },
      {
        "title": "Treinreis uitleggen",
        "prompt": "Vertel aan uw man waar uw e-ticket staat en wat u meeneemt.",
        "answer": "Mijn e-ticket staat in de NS-app. Ik neem ook mijn identiteitsbewijs mee."
      },
      {
        "title": "Groentepakket beschrijven",
        "prompt": "Vertel wat u vrijdag ophaalt en wat u ermee kookt.",
        "answer": "Vrijdag haal ik een groentepakket op. Ik kook groenten met vlees voor mijn gezin."
      },
      {
        "title": "Milieustraat vraag stellen",
        "prompt": "Vraag bij de milieustraat waar u hout en metaal moet neerzetten.",
        "answer": "Goedemorgen, waar kan ik hout en metaal neerzetten? Ik heb mijn afvalpas bij me."
      },
      {
        "title": "Oprit vrijhouden",
        "prompt": "Vertel aan uw buurvrouw dat u de oprit woensdag vrijhoudt.",
        "answer": "Geen probleem, ik houd de oprit woensdag tussen acht en twaalf uur vrij."
      },
      {
        "title": "Ontspanning na werkdag",
        "prompt": "Vertel wat u na een drukke werkdag doet om te ontspannen.",
        "answer": "Na een drukke werkdag ga ik wandelen of fietsen. Soms luister ik naar een podcast."
      },
      {
        "title": "Afbeelding adres wijzigen bij gemeente",
        "prompt": "Kijk naar de afbeelding. Vertel waarvoor u bij de gemeente bent.",
        "answer": "Ik ben bij de gemeente omdat ik mijn nieuwe adres wil doorgeven. Ik heb mijn documenten meegenomen.",
        "image": "images/speaking/v015-speaking-municipality-address-change-azure15.png",
        "imagePrompt": "Realistic Dutch municipality service desk scene, a woman presenting documents for an address change, neutral public-office interior in North Brabant, no readable text, no logos, practical speaking-card composition."
      },
      {
        "title": "Afbeelding recept via portaal",
        "prompt": "Kijk naar de afbeelding. Vertel wat u online regelt.",
        "answer": "Ik vraag online een herhaalrecept aan. De apotheek stuurt een bericht als het medicijn klaar ligt.",
        "image": "images/speaking/v015-speaking-health-repeat-prescription-azure15.png",
        "imagePrompt": "Realistic kitchen table scene in the Netherlands with a laptop health portal, medicine package, and phone notification for a repeat prescription, no readable text, no logos, natural daylight."
      },
      {
        "title": "Afbeelding gesprek op ouderavond",
        "prompt": "Kijk naar de afbeelding. Vertel waarover u met de mentor praat.",
        "answer": "Ik praat met de mentor over mijn dochter. Ik stel vragen over huiswerk en planning.",
        "image": "images/speaking/v015-speaking-school-parent-evening-azure15.png",
        "imagePrompt": "Realistic Dutch school hallway during parent evening, teacher table, parent with notebook, school app on phone visible without readable text, warm indoor light, no logos."
      },
      {
        "title": "Afbeelding flessen inleveren",
        "prompt": "Kijk naar de afbeelding. Vertel wat u in de supermarkt doet.",
        "answer": "Ik lever flessen en blikjes in bij de statiegeldautomaat. Daarna gebruik ik de bon bij de kassa.",
        "image": "images/speaking/v015-speaking-supermarket-deposit-machine-azure15.png",
        "imagePrompt": "Realistic Dutch supermarket entrance with a deposit bottle return machine, reusable shopping bag, bottles and cans, no readable text, no brand logos, clear everyday speaking-card image."
      },
      {
        "title": "Afbeelding buurtbus instappen",
        "prompt": "Kijk naar de afbeelding. Vertel hoe u met de buurtbus reist.",
        "answer": "Ik stap in de buurtbus naar Geldrop. Ik koop een kaartje bij de chauffeur en betaal met pin.",
        "image": "images/speaking/v015-speaking-transport-buurtbus-stop-azure15.png",
        "imagePrompt": "Realistic small Dutch village bus stop with a buurtbus arriving, passenger paying with bank card near the driver, North Brabant rural setting, no readable text, no logos."
      },
      {
        "title": "Afbeelding banenzwemmen reserveren",
        "prompt": "Kijk naar de afbeelding. Vertel wat u in het zwembad gaat doen.",
        "answer": "Ik heb online een plek gereserveerd. Ik ga vroeg in de ochtend banenzwemmen.",
        "image": "images/speaking/v015-speaking-swimming-lanes-reservation-azure15.png",
        "imagePrompt": "Realistic indoor swimming pool with lap lanes, a phone showing an online reservation screen without readable text, towel and swim goggles, bright practical Dutch sports setting."
      },
      {
        "title": "Telefoongesprek over factuur",
        "prompt": "Vraag uw internetprovider waarom het bedrag op de factuur hoger is.",
        "answer": "Goedemiddag, ik heb een vraag over mijn factuur. Waarom is het bedrag deze maand hoger?"
      },
      {
        "title": "Korte mening over gezond eten",
        "prompt": "Vertel waarom u graag verse groenten en vlees kookt.",
        "answer": "Ik kook graag verse groenten en vlees omdat het gezond is. Mijn gezin eet dan een goede maaltijd."
      }
    ]
  },
  {
    "id": "listening",
    "number": "04",
    "category": "Examen",
    "title": "Luisteren",
    "goal": "Luister naar korte berichten met een plaats, tijd, actie en reden.",
    "meta": [
      "Audio",
      "16 MP3-oefeningen",
      "Praktische berichten"
    ],
    "exercises": [
      {
        "title": "AI-luistercoach voor berichten en balies",
        "prompt": "Open een spraaktool en vraag om een langzaam A2-luisterbericht met een adres, afspraak, tijd en actie.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees langzaam een kort bericht voor met een adres, afspraak, tijd en actie. Stel daarna drie vragen."
      },
      {
        "title": "Adreswijziging gemeente",
        "audio": "audio/v015-listening-01-gemeente-verhuizing-adres.mp3",
        "transcript": "Mevrouw Bonenkamp, geef uw nieuwe adres binnen vijf dagen door aan de gemeente. Gebruik DigiD en houd uw huurcontract bij de hand.",
        "prompt": "Transcript: Mevrouw Bonenkamp, geef uw nieuwe adres binnen vijf dagen door aan de gemeente. Gebruik DigiD en houd uw huurcontract bij de hand.",
        "questions": [
          "Vraag 1: Wat moet mevrouw doorgeven?",
          "Vraag 2: Binnen hoeveel dagen doet zij dat?",
          "Vraag 3: Wat houdt zij bij de hand?"
        ],
        "answer": "Zij geeft haar nieuwe adres door. Dat doet zij binnen vijf dagen. Zij houdt haar huurcontract bij de hand."
      },
      {
        "title": "Medicijn ligt klaar",
        "audio": "audio/v015-listening-02-huisarts-herhaalrecept-apotheek.mp3",
        "transcript": "Uw herhaalrecept is verwerkt. Het bloeddrukmedicijn ligt morgen na twee uur klaar bij de apotheek in het centrum.",
        "prompt": "Transcript: Uw herhaalrecept is verwerkt. Het bloeddrukmedicijn ligt morgen na twee uur klaar bij de apotheek in het centrum.",
        "questions": [
          "Vraag 1: Wat is verwerkt?",
          "Vraag 2: Welk medicijn ligt klaar?",
          "Vraag 3: Wanneer kan mevrouw het ophalen?"
        ],
        "answer": "Het herhaalrecept is verwerkt. Het bloeddrukmedicijn ligt klaar. Zij kan het morgen na twee uur ophalen."
      },
      {
        "title": "Tijdvak in schoolapp",
        "audio": "audio/v015-listening-03-school-ouderavond-tijdvak.mp3",
        "transcript": "De ouderavond is dinsdag. Kies voor vrijdag een tijdvak in de schoolapp en schrijf uw vragen over huiswerk alvast op.",
        "prompt": "Transcript: De ouderavond is dinsdag. Kies voor vrijdag een tijdvak in de schoolapp en schrijf uw vragen over huiswerk alvast op.",
        "questions": [
          "Vraag 1: Wanneer is de ouderavond?",
          "Vraag 2: Waar kiest mevrouw een tijdvak?",
          "Vraag 3: Welke vragen schrijft zij op?"
        ],
        "answer": "De ouderavond is dinsdag. Zij kiest een tijdvak in de schoolapp. Zij schrijft vragen over huiswerk op."
      },
      {
        "title": "Bon bij statiegeld",
        "audio": "audio/v015-listening-04-supermarkt-statiegeld-bon.mp3",
        "transcript": "De statiegeldautomaat staat links naast de ingang. Lever flessen en blikjes in en gebruik de bon bij de kassa.",
        "prompt": "Transcript: De statiegeldautomaat staat links naast de ingang. Lever flessen en blikjes in en gebruik de bon bij de kassa.",
        "questions": [
          "Vraag 1: Waar staat de automaat?",
          "Vraag 2: Wat levert mevrouw in?",
          "Vraag 3: Waar gebruikt zij de bon?"
        ],
        "answer": "De automaat staat links naast de ingang. Zij levert flessen en blikjes in. Zij gebruikt de bon bij de kassa."
      },
      {
        "title": "Kaartje in de buurtbus",
        "audio": "audio/v015-listening-05-buurtbus-geldrop-pin.mp3",
        "transcript": "De buurtbus naar Geldrop vertrekt om tien over negen. Koop uw kaartje bij de chauffeur en betaal met pin.",
        "prompt": "Transcript: De buurtbus naar Geldrop vertrekt om tien over negen. Koop uw kaartje bij de chauffeur en betaal met pin.",
        "questions": [
          "Vraag 1: Waar gaat de buurtbus naartoe?",
          "Vraag 2: Hoe laat vertrekt de bus?",
          "Vraag 3: Hoe betaalt mevrouw?"
        ],
        "answer": "De buurtbus gaat naar Geldrop. De bus vertrekt om tien over negen. Zij betaalt met pin."
      },
      {
        "title": "Afspraak over handelsnaam",
        "audio": "audio/v015-listening-06-werk-kvk-handelsnaam.mp3",
        "transcript": "Voor uw afspraak bij de KvK neemt u legitimatie en het uittreksel mee. U wilt de handelsnaam van uw bedrijf wijzigen.",
        "prompt": "Transcript: Voor uw afspraak bij de KvK neemt u legitimatie en het uittreksel mee. U wilt de handelsnaam van uw bedrijf wijzigen.",
        "questions": [
          "Vraag 1: Waar heeft mevrouw een afspraak?",
          "Vraag 2: Wat wil zij wijzigen?",
          "Vraag 3: Welke twee dingen neemt zij mee?"
        ],
        "answer": "Zij heeft een afspraak bij de KvK. Zij wil de handelsnaam wijzigen. Zij neemt legitimatie en het uittreksel mee."
      },
      {
        "title": "Reservering voor zwemmen",
        "audio": "audio/v015-listening-07-zwembad-banenzwemmen-reservering.mp3",
        "transcript": "Uw reservering voor banenzwemmen is woensdag om half acht. Kom op tijd, want de reservering blijft vijftien minuten geldig.",
        "prompt": "Transcript: Uw reservering voor banenzwemmen is woensdag om half acht. Kom op tijd, want de reservering blijft vijftien minuten geldig.",
        "questions": [
          "Vraag 1: Waarvoor is de reservering?",
          "Vraag 2: Hoe laat is de reservering?",
          "Vraag 3: Hoelang blijft de reservering geldig?"
        ],
        "answer": "De reservering is voor banenzwemmen. Die is om half acht. De reservering blijft vijftien minuten geldig."
      },
      {
        "title": "Kapper bellen voor vrijdag",
        "audio": "audio/v015-listening-08-kapper-afspraak-verzetten.mp3",
        "transcript": "Kunt u maandag niet naar de kapper komen? Bel dan uiterlijk vrijdagmiddag, zodat wij de afspraak kunnen verzetten.",
        "prompt": "Transcript: Kunt u maandag niet naar de kapper komen? Bel dan uiterlijk vrijdagmiddag, zodat wij de afspraak kunnen verzetten.",
        "questions": [
          "Vraag 1: Op welke dag is de afspraak?",
          "Vraag 2: Wanneer belt mevrouw uiterlijk?",
          "Vraag 3: Waarom belt zij?"
        ],
        "answer": "De afspraak is maandag. Zij belt uiterlijk vrijdagmiddag. Zij belt om de afspraak te verzetten."
      },
      {
        "title": "Groene container buiten",
        "audio": "audio/v015-listening-09-afval-groene-container.mp3",
        "transcript": "De groene container wordt dinsdag geleegd. Zet hem maandagavond na acht uur buiten en doe er geen plastic zakken in.",
        "prompt": "Transcript: De groene container wordt dinsdag geleegd. Zet hem maandagavond na acht uur buiten en doe er geen plastic zakken in.",
        "questions": [
          "Vraag 1: Welke container wordt geleegd?",
          "Vraag 2: Wanneer zet mevrouw hem buiten?",
          "Vraag 3: Wat mag er niet in?"
        ],
        "answer": "De groene container wordt geleegd. Zij zet hem maandagavond na acht uur buiten. Er mogen geen plastic zakken in."
      },
      {
        "title": "Woningportaal bij kou",
        "audio": "audio/v015-listening-10-woning-verwarming-storing.mp3",
        "transcript": "Blijft de verwarming koud? Maak overdag een melding via het woonportaal. Bel alleen spoed als er ook geen warm water is.",
        "prompt": "Transcript: Blijft de verwarming koud? Maak overdag een melding via het woonportaal. Bel alleen spoed als er ook geen warm water is.",
        "questions": [
          "Vraag 1: Wat blijft koud?",
          "Vraag 2: Waar maakt mevrouw een melding?",
          "Vraag 3: Wanneer belt zij spoed?"
        ],
        "answer": "De verwarming blijft koud. Zij maakt een melding via het woonportaal. Zij belt spoed als er ook geen warm water is."
      },
      {
        "title": "Aantal behandelingen bekijken",
        "audio": "audio/v015-listening-11-zorgverzekering-fysiotherapie-vergoeding.mp3",
        "transcript": "In de zorgapp ziet u bij aanvullende verzekering hoeveel behandelingen fysiotherapie worden vergoed. Bel ons als u het aantal niet ziet.",
        "prompt": "Transcript: In de zorgapp ziet u bij aanvullende verzekering hoeveel behandelingen fysiotherapie worden vergoed. Bel ons als u het aantal niet ziet.",
        "questions": [
          "Vraag 1: Waar kijkt mevrouw in de zorgapp?",
          "Vraag 2: Welke zorg wordt genoemd?",
          "Vraag 3: Wanneer belt zij?"
        ],
        "answer": "Zij kijkt bij aanvullende verzekering. Fysiotherapie wordt genoemd. Zij belt als zij het aantal niet ziet."
      },
      {
        "title": "Donderdag naar taalcafe",
        "audio": "audio/v015-listening-12-bibliotheek-taalcafe-ochtend.mp3",
        "transcript": "Het taalcafe in de bibliotheek is donderdag van tien uur tot half twaalf. Het is gratis en u meldt zich aan bij de balie.",
        "prompt": "Transcript: Het taalcafe in de bibliotheek is donderdag van tien uur tot half twaalf. Het is gratis en u meldt zich aan bij de balie.",
        "questions": [
          "Vraag 1: Waar is het taalcafe?",
          "Vraag 2: Hoe laat begint het?",
          "Vraag 3: Waar meldt mevrouw zich aan?"
        ],
        "answer": "Het taalcafe is in de bibliotheek. Het begint om tien uur. Zij meldt zich aan bij de balie."
      },
      {
        "title": "E-ticket in de app",
        "audio": "audio/v015-listening-13-trein-eticket-rotterdam.mp3",
        "transcript": "Uw e-ticket naar Rotterdam staat in de NS-app. Reis zaterdag buiten de spits en neem uw identiteitsbewijs mee.",
        "prompt": "Transcript: Uw e-ticket naar Rotterdam staat in de NS-app. Reis zaterdag buiten de spits en neem uw identiteitsbewijs mee.",
        "questions": [
          "Vraag 1: Waar staat het e-ticket?",
          "Vraag 2: Naar welke stad reist mevrouw?",
          "Vraag 3: Welk bewijs neemt zij mee?"
        ],
        "answer": "Het e-ticket staat in de NS-app. Zij reist naar Rotterdam. Zij neemt haar identiteitsbewijs mee."
      },
      {
        "title": "Koeltas voor groentepakket",
        "audio": "audio/v015-listening-14-boerderij-groentepakket-koeltas.mp3",
        "transcript": "Uw groentepakket ligt vrijdag tussen vier en zes uur klaar bij de boerderijwinkel. Neem een koeltas mee voor de verse producten.",
        "prompt": "Transcript: Uw groentepakket ligt vrijdag tussen vier en zes uur klaar bij de boerderijwinkel. Neem een koeltas mee voor de verse producten.",
        "questions": [
          "Vraag 1: Wat ligt klaar?",
          "Vraag 2: Waar ligt het pakket klaar?",
          "Vraag 3: Wat neemt mevrouw mee?"
        ],
        "answer": "Het groentepakket ligt klaar. Het ligt bij de boerderijwinkel. Zij neemt een koeltas mee."
      },
      {
        "title": "Sorteren voor milieustraat",
        "audio": "audio/v015-listening-15-milieustraat-afvalpas-sorteren.mp3",
        "transcript": "Voor de milieustraat heeft u een afspraak en een afvalpas nodig. Sorteer hout, metaal en elektrische apparaten alvast thuis.",
        "prompt": "Transcript: Voor de milieustraat heeft u een afspraak en een afvalpas nodig. Sorteer hout, metaal en elektrische apparaten alvast thuis.",
        "questions": [
          "Vraag 1: Wat heeft mevrouw nodig voor de milieustraat?",
          "Vraag 2: Welke pas neemt zij mee?",
          "Vraag 3: Wat sorteert zij thuis?"
        ],
        "answer": "Zij heeft een afspraak nodig. Zij neemt een afvalpas mee. Zij sorteert hout, metaal en elektrische apparaten."
      },
      {
        "title": "Schilder bij de buren",
        "audio": "audio/v015-listening-16-buren-schilder-oprit.mp3",
        "transcript": "Woensdag komt de schilder bij de buren. Houd de oprit tussen acht en twaalf uur vrij, want er staat een ladder naast de oprit.",
        "prompt": "Transcript: Woensdag komt de schilder bij de buren. Houd de oprit tussen acht en twaalf uur vrij, want er staat een ladder naast de oprit.",
        "questions": [
          "Vraag 1: Wie komt woensdag?",
          "Vraag 2: Wanneer houdt mevrouw de oprit vrij?",
          "Vraag 3: Wat staat naast de oprit?"
        ],
        "answer": "De schilder komt woensdag. Zij houdt de oprit tussen acht en twaalf uur vrij. Er staat een ladder naast de oprit."
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
        "title": "Adres in basisregistratie",
        "prompt": "Vraag: Waarom geeft u een verhuizing door aan de gemeente?",
        "options": [
          "A. Dan krijgt u automatisch gratis kinderopvang.",
          "B. Dan heeft de overheid uw juiste woonadres.",
          "C. Dan hoeft u nooit meer post te openen."
        ],
        "answer": "B. Dan heeft de overheid uw juiste woonadres."
      },
      {
        "title": "Veilig inloggen bij zorg",
        "prompt": "Vraag: Wat is verstandig als u inlogt op een huisartsportaal?",
        "options": [
          "A. Uw DigiD-code delen met onbekenden.",
          "B. Het wachtwoord op een briefje bij de balie leggen.",
          "C. Zelf veilig inloggen en uw gegevens controleren."
        ],
        "answer": "C. Zelf veilig inloggen en uw gegevens controleren."
      },
      {
        "title": "Contact met mentor",
        "prompt": "Vraag: Waarom gaan ouders naar een ouderavond?",
        "options": [
          "A. Om met school over hun kind te praten.",
          "B. Om de schoolregels alleen te veranderen.",
          "C. Om examens van andere kinderen te bekijken."
        ],
        "answer": "A. Om met school over hun kind te praten."
      },
      {
        "title": "Statiegeldsysteem",
        "prompt": "Vraag: Waarom leveren mensen flessen en blikjes in bij de statiegeldautomaat?",
        "options": [
          "A. Omdat contant betalen dan verboden is.",
          "B. Omdat zij statiegeld terugkrijgen en afval verminderen.",
          "C. Omdat de huisarts daarom vraagt."
        ],
        "answer": "B. Omdat zij statiegeld terugkrijgen en afval verminderen."
      },
      {
        "title": "Betalen in buurtbus",
        "prompt": "Vraag: Wat past bij reizen met openbaar vervoer?",
        "options": [
          "A. U betaalt voor uw reis en volgt de regels.",
          "B. U rijdt gratis mee als de bus klein is.",
          "C. U hoeft nooit een halte te gebruiken."
        ],
        "answer": "A. U betaalt voor uw reis en volgt de regels."
      },
      {
        "title": "Bedrijfsgegevens bijhouden",
        "prompt": "Vraag: Waarom houdt een ondernemer gegevens bij de KvK actueel?",
        "options": [
          "A. Dan hoeft de ondernemer geen administratie te bewaren.",
          "B. Dan mag de ondernemer persoonlijke post weggooien.",
          "C. Dan staan officiele bedrijfsgegevens goed geregistreerd."
        ],
        "answer": "C. Dan staan officiele bedrijfsgegevens goed geregistreerd."
      },
      {
        "title": "Zwembadregels volgen",
        "prompt": "Vraag: Waarom volgt u de regels in een zwembad?",
        "options": [
          "A. Dan mag u overal hardlopen.",
          "B. Dat helpt voor veiligheid en orde.",
          "C. Dan hoeft u niet te betalen."
        ],
        "answer": "B. Dat helpt voor veiligheid en orde."
      },
      {
        "title": "Afspraak verzetten",
        "prompt": "Vraag: Wat doet u als u niet naar een afspraak kunt komen?",
        "options": [
          "A. U belt op tijd om de afspraak te verzetten.",
          "B. U blijft weg zonder iets te zeggen.",
          "C. U laat altijd een onbekende gaan."
        ],
        "answer": "A. U belt op tijd om de afspraak te verzetten."
      },
      {
        "title": "Afvalkalender gebruiken",
        "prompt": "Vraag: Waarom kijkt u op de afvalkalender?",
        "options": [
          "A. Om te zien wanneer de huisarts open is.",
          "B. Om te weten hoe duur boodschappen zijn.",
          "C. Om te weten wanneer welke container buiten moet."
        ],
        "answer": "C. Om te weten wanneer welke container buiten moet."
      },
      {
        "title": "Melding bij woonprobleem",
        "prompt": "Vraag: Wat doet een huurder normaal bij een storing in huis?",
        "options": [
          "A. Altijd direct zelf leidingen vervangen.",
          "B. De storing melden bij verhuurder of woonportaal.",
          "C. De buren verplicht laten betalen."
        ],
        "answer": "B. De storing melden bij verhuurder of woonportaal."
      },
      {
        "title": "Aanvullende verzekering",
        "prompt": "Vraag: Waar kijkt u als u wilt weten of fysiotherapie wordt vergoed?",
        "options": [
          "A. In uw polis of zorgapp.",
          "B. Alleen op een kassabon van de supermarkt.",
          "C. Op het rooster van de basisschool."
        ],
        "answer": "A. In uw polis of zorgapp."
      },
      {
        "title": "Samen oefenen in bibliotheek",
        "prompt": "Vraag: Wat is een taalcafe vaak?",
        "options": [
          "A. Een plek waar alleen artsen werken.",
          "B. Een verplicht examen bij DUO.",
          "C. Een plek waar mensen samen Nederlands oefenen."
        ],
        "answer": "C. Een plek waar mensen samen Nederlands oefenen."
      },
      {
        "title": "Treinkaart op naam",
        "prompt": "Vraag: Waarom neemt u soms een identiteitsbewijs mee bij een e-ticket?",
        "options": [
          "A. Om gratis eten in de trein te krijgen.",
          "B. Omdat de conducteur kan controleren of het ticket van u is.",
          "C. Omdat fietsen dan altijd gratis mee mogen."
        ],
        "answer": "B. Omdat de conducteur kan controleren of het ticket van u is."
      },
      {
        "title": "Verse maaltijd kiezen",
        "prompt": "Vraag: Welke keuze past bij gezond koken?",
        "options": [
          "A. Iedere dag alleen snoep eten.",
          "B. Nooit water drinken.",
          "C. Regelmatig groenten gebruiken bij de maaltijd."
        ],
        "answer": "C. Regelmatig groenten gebruiken bij de maaltijd."
      },
      {
        "title": "Grof afval sorteren",
        "prompt": "Vraag: Waarom sorteert u afval bij de milieustraat?",
        "options": [
          "A. Dan kan afval beter worden verwerkt of hergebruikt.",
          "B. Dan hoeft niemand nog belasting te betalen.",
          "C. Dan mag alles bij het restafval."
        ],
        "answer": "A. Dan kan afval beter worden verwerkt of hergebruikt."
      },
      {
        "title": "Werkzaamheden aankondigen",
        "prompt": "Vraag: Wat is netjes als werkzaamheden invloed hebben op buren?",
        "options": [
          "A. De ladder zonder overleg voor hun deur zetten.",
          "B. De buren op tijd informeren.",
          "C. Alle afspraken geheim houden."
        ],
        "answer": "B. De buren op tijd informeren."
      },
      {
        "title": "DigiD beschermen",
        "prompt": "Vraag: Wat doet u met uw DigiD?",
        "options": [
          "A. U geeft uw code aan onbekenden op straat.",
          "B. U schrijft uw code op de afvalpas.",
          "C. U houdt uw inloggegevens prive."
        ],
        "answer": "C. U houdt uw inloggegevens prive."
      },
      {
        "title": "Kinderen en schoolplicht",
        "prompt": "Vraag: Wat hoort bij onderwijs voor kinderen in Nederland?",
        "options": [
          "A. Kinderen gaan naar school volgens de leerplichtregels.",
          "B. Ouders kiezen elke dag of school bestaat.",
          "C. School is alleen voor volwassenen."
        ],
        "answer": "A. Kinderen gaan naar school volgens de leerplichtregels."
      },
      {
        "title": "Meedoen in de buurt",
        "prompt": "Vraag: Wat kan helpen om mensen in de buurt te leren kennen?",
        "options": [
          "A. Nooit iemand groeten.",
          "B. Meedoen aan een activiteit of vrijwilligerswerk.",
          "C. Alleen klachten op internet zetten."
        ],
        "answer": "B. Meedoen aan een activiteit of vrijwilligerswerk."
      },
      {
        "title": "Hulp van gemeente",
        "prompt": "Vraag: Waarvoor kan de gemeente inwoners vaak informatie geven?",
        "options": [
          "A. Voor geheime bankcodes van alle buren.",
          "B. Voor gratis vliegtickets naar elk land.",
          "C. Voor zaken zoals verhuizen, afval, zorg en inburgering."
        ],
        "answer": "C. Voor zaken zoals verhuizen, afval, zorg en inburgering."
      },
      {
        "title": "Factuur op tijd betalen",
        "prompt": "Vraag: Waarom controleert u een factuur en betaaldatum?",
        "options": [
          "A. Om op tijd te betalen en problemen te voorkomen.",
          "B. Om het adres van school te veranderen.",
          "C. Om medische gegevens te delen."
        ],
        "answer": "A. Om op tijd te betalen en problemen te voorkomen."
      },
      {
        "title": "Fietsverlichting",
        "prompt": "Vraag: Waarom gebruikt u goede fietsverlichting in het donker?",
        "options": [
          "A. Dan hoeft u geen verkeersregels te kennen.",
          "B. Dan bent u beter zichtbaar voor anderen.",
          "C. Dan mag u altijd op de stoep fietsen."
        ],
        "answer": "B. Dan bent u beter zichtbaar voor anderen."
      },
      {
        "title": "Huisartsenpost gebruiken",
        "prompt": "Vraag: Wanneer belt u meestal de huisartsenpost?",
        "options": [
          "A. Voor elke gewone vraag over openingstijden.",
          "B. Om een boek bij de bibliotheek te lenen.",
          "C. Bij dringende zorg buiten openingstijden van de huisarts."
        ],
        "answer": "C. Bij dringende zorg buiten openingstijden van de huisarts."
      },
      {
        "title": "Pincode geheim houden",
        "prompt": "Vraag: Wat is veilig bij betalen met pin?",
        "options": [
          "A. Uw pincode afschermen en geheim houden.",
          "B. Uw pincode hardop zeggen in de rij.",
          "C. Uw bankpas aan een vreemde geven."
        ],
        "answer": "A. Uw pincode afschermen en geheim houden."
      },
      {
        "title": "Belasting voor ondernemers",
        "prompt": "Vraag: Wat hoort bij ondernemen in Nederland?",
        "options": [
          "A. Nooit inkomsten of kosten bewaren.",
          "B. Administratie bijhouden en belastingregels volgen.",
          "C. Alleen met contant geld werken."
        ],
        "answer": "B. Administratie bijhouden en belastingregels volgen."
      },
      {
        "title": "Klacht over woning vastleggen",
        "prompt": "Vraag: Wat is verstandig als een reparatie lang duurt?",
        "options": [
          "A. Niets opschrijven en wachten zonder melding.",
          "B. De schoolapp van uw kind verwijderen.",
          "C. De klacht duidelijk melden en bewaren wat u stuurt."
        ],
        "answer": "C. De klacht duidelijk melden en bewaren wat u stuurt."
      },
      {
        "title": "Rust in woonbuurt",
        "prompt": "Vraag: Wat past bij rekening houden met buren?",
        "options": [
          "A. Niet onnodig veel lawaai maken in de avond.",
          "B. Altijd afval op de stoep leggen.",
          "C. Post van de buren openen."
        ],
        "answer": "A. Niet onnodig veel lawaai maken in de avond."
      },
      {
        "title": "Lokale verkiezing",
        "prompt": "Vraag: Wie kiezen de gemeenteraad?",
        "options": [
          "A. Alleen toeristen die een dag komen.",
          "B. Inwoners met stemrecht tijdens gemeenteraadsverkiezingen.",
          "C. Alleen kinderen van de basisschool."
        ],
        "answer": "B. Inwoners met stemrecht tijdens gemeenteraadsverkiezingen."
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
        "title": "Adresmelding",
        "prompt": "Opdracht: Zet in goede volgorde: binnen vijf dagen / mijn nieuwe adres / geef / ik / door",
        "answer": "Ik geef mijn nieuwe adres binnen vijf dagen door."
      },
      {
        "title": "Vraag aan de balie",
        "prompt": "Opdracht: Maak een vraag: mijn verhuizing / waar / doorgeven / kan / ik",
        "answer": "Waar kan ik mijn verhuizing doorgeven?"
      },
      {
        "title": "Schoolbericht",
        "prompt": "Opdracht: Zet in goede volgorde: voor vrijdag / in de app / een tijdvak / kiezen / wij",
        "answer": "Wij kiezen voor vrijdag een tijdvak in de app."
      },
      {
        "title": "Bij de bus",
        "prompt": "Opdracht: Maak een vraag: bij het station / stopt / ook / de buurtbus",
        "answer": "Stopt de buurtbus ook bij het station?"
      },
      {
        "title": "Werkafspraak",
        "prompt": "Opdracht: Zet in goede volgorde: in Eindhoven / om elf uur / heeft / Violetta / een afspraak",
        "answer": "Violetta heeft om elf uur een afspraak in Eindhoven."
      },
      {
        "title": "Reden bij zwemmen",
        "prompt": "Opdracht: Zet in goede volgorde: ik reserveer / omdat / vol kan zijn / het zwembad / online",
        "answer": "Ik reserveer online omdat het zwembad vol kan zijn."
      },
      {
        "title": "Openingstijd vragen",
        "prompt": "Opdracht: Maak een vraag: open / het taalcafe / hoe laat / is",
        "answer": "Hoe laat is het taalcafe open?"
      },
      {
        "title": "Container buiten",
        "prompt": "Opdracht: Zet in goede volgorde: zet / na acht uur / de container / buiten / ik",
        "answer": "Ik zet de container na acht uur buiten."
      },
      {
        "title": "Treinreis",
        "prompt": "Opdracht: Zet in goede volgorde: naar Rotterdam / reizen / wij / zaterdag / met de trein",
        "answer": "Wij reizen zaterdag met de trein naar Rotterdam."
      },
      {
        "title": "Vraag met afvalpas",
        "prompt": "Opdracht: Maak een vraag: de afvalpas / waar / laten zien / moet / ik",
        "answer": "Waar moet ik de afvalpas laten zien?"
      },
      {
        "title": "Opritafspraak",
        "prompt": "Opdracht: Zet in goede volgorde: de oprit / vrij / woensdag / houden / wij",
        "answer": "Wij houden woensdag de oprit vrij."
      },
      {
        "title": "Voorwaarde bij koude kamer",
        "prompt": "Opdracht: Zet in goede volgorde: koud blijft / de verwarming / als / ik / bel",
        "answer": "Als de verwarming koud blijft, bel ik."
      },
      {
        "title": "Vraag over medicijn",
        "prompt": "Opdracht: Maak een vraag: het medicijn / wanneer / klaar / ligt",
        "answer": "Wanneer ligt het medicijn klaar?"
      },
      {
        "title": "Bon gebruiken",
        "prompt": "Opdracht: Zet in goede volgorde: aan de kassa / gebruik / de statiegeldbon / ik",
        "answer": "Ik gebruik de statiegeldbon aan de kassa."
      },
      {
        "title": "Kapper bellen",
        "prompt": "Opdracht: Zet in goede volgorde: voor maandag / de kapper / ik / bel",
        "answer": "Ik bel de kapper voor maandag."
      },
      {
        "title": "Vraag met vergoeding",
        "prompt": "Opdracht: Maak een vraag: vergoeding / welke / krijgt / u",
        "answer": "Welke vergoeding krijgt u?"
      },
      {
        "title": "Gezinsplanning",
        "prompt": "Opdracht: Maak een zin: met mijn dochters / na school / fiets / ik",
        "answer": "Ik fiets na school met mijn dochters."
      },
      {
        "title": "Podcastzin",
        "prompt": "Opdracht: Zet in goede volgorde: luistert / tijdens een wandeling / zij / naar een podcast",
        "answer": "Zij luistert tijdens een wandeling naar een podcast."
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
        "title": "Tegenwoordige tijd doorgeven",
        "prompt": "Opdracht: Vul in: Violetta ___ haar nieuwe adres door. (geven)",
        "answer": "Violetta geeft haar nieuwe adres door."
      },
      {
        "title": "Voltooide tijd formulier",
        "prompt": "Opdracht: Vul in: Ik ___ het formulier online ___. (invullen)",
        "answer": "Ik heb het formulier online ingevuld."
      },
      {
        "title": "Toekomende tijd recept",
        "prompt": "Opdracht: Vul in: Morgen ___ ik een herhaalrecept aanvragen.",
        "answer": "Morgen ga ik een herhaalrecept aanvragen."
      },
      {
        "title": "Werkwoord rijden",
        "prompt": "Opdracht: Vul in: De buurtbus ___ om 09.10 uur. (rijden)",
        "answer": "De buurtbus rijdt om 09.10 uur."
      },
      {
        "title": "Voltooide tijd inleveren",
        "prompt": "Opdracht: Vul in: Wij ___ de flessen ___. (inleveren)",
        "answer": "Wij hebben de flessen ingeleverd."
      },
      {
        "title": "Toekomende tijd zwemmen",
        "prompt": "Opdracht: Vul in: Woensdag ___ zij vroeg zwemmen.",
        "answer": "Woensdag gaat zij vroeg zwemmen."
      },
      {
        "title": "Tegenwoordige tijd kiezen",
        "prompt": "Opdracht: Vul in: Ouders ___ een tijdvak in de app. (kiezen)",
        "answer": "Ouders kiezen een tijdvak in de app."
      },
      {
        "title": "Voltooide tijd bellen",
        "prompt": "Opdracht: Vul in: Ik ___ de kapper op tijd ___. (bellen)",
        "answer": "Ik heb de kapper op tijd gebeld."
      },
      {
        "title": "Werkwoord blijven",
        "prompt": "Opdracht: Vul in: De verwarming ___ koud. (blijven)",
        "answer": "De verwarming blijft koud."
      },
      {
        "title": "Factuuractie straks",
        "prompt": "Opdracht: Vul in: Ik ___ de factuur vandaag downloaden.",
        "answer": "Ik zal de factuur vandaag downloaden."
      },
      {
        "title": "Tegenwoordige tijd sturen",
        "prompt": "Opdracht: Vul in: De apotheek ___ een bericht. (sturen)",
        "answer": "De apotheek stuurt een bericht."
      },
      {
        "title": "Voltooide tijd reserveren",
        "prompt": "Opdracht: Vul in: Violetta ___ een zwemplek ___. (reserveren)",
        "answer": "Violetta heeft een zwemplek gereserveerd."
      },
      {
        "title": "Werkwoord nemen",
        "prompt": "Opdracht: Vul in: Ik ___ mijn afvalpas mee. (nemen)",
        "answer": "Ik neem mijn afvalpas mee."
      },
      {
        "title": "Groentenplannen",
        "prompt": "Opdracht: Vul in: Vrijdag ___ wij groenten ophalen.",
        "answer": "Vrijdag gaan wij groenten ophalen."
      },
      {
        "title": "Tegenwoordige tijd controleren",
        "prompt": "Opdracht: Vul in: Zij ___ de vergoeding in de zorgapp. (controleren)",
        "answer": "Zij controleert de vergoeding in de zorgapp."
      },
      {
        "title": "Voltooide tijd sorteren",
        "prompt": "Opdracht: Vul in: Ik ___ hout en metaal thuis ___. (sorteren)",
        "answer": "Ik heb hout en metaal thuis gesorteerd."
      },
      {
        "title": "Werkwoord praten",
        "prompt": "Opdracht: Vul in: De moeder ___ met de mentor. (praten)",
        "answer": "De moeder praat met de mentor."
      },
      {
        "title": "Toekomst na werk",
        "prompt": "Opdracht: Vul in: Vanavond ___ ik wandelen met een podcast.",
        "answer": "Vanavond ga ik wandelen met een podcast."
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
        "title": "Kunnen bij gemeente",
        "prompt": "Opdracht: Vul in: Waar ___ ik mijn verhuizing doorgeven? (kunnen)",
        "answer": "Waar kan ik mijn verhuizing doorgeven?"
      },
      {
        "title": "Moeten bij afval",
        "prompt": "Opdracht: Vul in: U ___ de groene container maandag buiten zetten. (moeten)",
        "answer": "U moet de groene container maandag buiten zetten."
      },
      {
        "title": "Mogen bij zwembad",
        "prompt": "Opdracht: Vul in: U ___ na reserveren naar binnen. (mogen)",
        "answer": "U mag na reserveren naar binnen."
      },
      {
        "title": "Willen bij taalcafe",
        "prompt": "Opdracht: Vul in: Ik ___ donderdag naar het taalcafe. (willen)",
        "answer": "Ik wil donderdag naar het taalcafe."
      },
      {
        "title": "Doorgeven splitsen",
        "prompt": "Opdracht: Vul in: Ik geef mijn nieuwe adres vandaag ___.",
        "answer": "Ik geef mijn nieuwe adres vandaag door."
      },
      {
        "title": "Ophalen splitsen",
        "prompt": "Opdracht: Vul in: Vrijdag haal ik het groentepakket ___.",
        "answer": "Vrijdag haal ik het groentepakket op."
      },
      {
        "title": "Aanmelden bij bibliotheek",
        "prompt": "Opdracht: Vul in: Zij meldt ___ aan bij de balie.",
        "answer": "Zij meldt zich aan bij de balie."
      },
      {
        "title": "Meenemen bij trein",
        "prompt": "Opdracht: Vul in: Ik neem mijn identiteitsbewijs ___.",
        "answer": "Ik neem mijn identiteitsbewijs mee."
      },
      {
        "title": "Opzoeken in app",
        "prompt": "Opdracht: Vul in: Violetta zoekt de vergoeding in de app ___.",
        "answer": "Violetta zoekt de vergoeding in de app op."
      },
      {
        "title": "Klaarstaan voor ouderavond",
        "prompt": "Opdracht: Vul in: Ik bereid ___ voor op de ouderavond.",
        "answer": "Ik bereid mij voor op de ouderavond."
      },
      {
        "title": "Kunnen bij kapper",
        "prompt": "Opdracht: Vul in: Kunt u mijn afspraak ___? (verzetten)",
        "answer": "Kunt u mijn afspraak verzetten?"
      },
      {
        "title": "Moeten bij KvK",
        "prompt": "Opdracht: Vul in: Ik ___ mijn legitimatie meenemen. (moeten)",
        "answer": "Ik moet mijn legitimatie meenemen."
      },
      {
        "title": "Uitprinten splitsen",
        "prompt": "Opdracht: Vul in: Ik print de bevestiging ___.",
        "answer": "Ik print de bevestiging uit."
      },
      {
        "title": "Inschrijving voor route",
        "prompt": "Opdracht: Vul in: Wij schrijven ___ in voor de fietsroute.",
        "answer": "Wij schrijven ons in voor de fietsroute."
      },
      {
        "title": "Beleefde wil-vorm",
        "prompt": "Opdracht: Vul in: ___ u een nieuwe tijd maken? (willen)",
        "answer": "Wilt u een nieuwe tijd maken?"
      },
      {
        "title": "Aanzetten splitsen",
        "prompt": "Opdracht: Vul in: Ik zet de verwarming voorzichtig ___.",
        "answer": "Ik zet de verwarming voorzichtig aan."
      },
      {
        "title": "Mogen bij milieustraat",
        "prompt": "Opdracht: Vul in: U ___ alleen met afspraak naar binnen. (mogen)",
        "answer": "U mag alleen met afspraak naar binnen."
      },
      {
        "title": "Rust na werk",
        "prompt": "Opdracht: Vul in: Na het werk ontspan ik ___ met een wandeling.",
        "answer": "Na het werk ontspan ik mij met een wandeling."
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
        "title": "Artikel bij gemeente",
        "prompt": "Opdracht: Kies de of het: ___ gemeente stuurt een bevestiging.",
        "answer": "De gemeente stuurt een bevestiging."
      },
      {
        "title": "Artikel bij contract",
        "prompt": "Opdracht: Kies de of het: ___ huurcontract ligt op tafel.",
        "answer": "Het huurcontract ligt op tafel."
      },
      {
        "title": "Meervoud tijdvak",
        "prompt": "Opdracht: Maak meervoud: een tijdvak - twee ___.",
        "answer": "Een tijdvak - twee tijdvakken."
      },
      {
        "title": "Bijvoeglijk naamwoord vers",
        "prompt": "Opdracht: Vul in: Ik koop ___ groenten. (vers)",
        "answer": "Ik koop verse groenten."
      },
      {
        "title": "Pronomen haar",
        "prompt": "Opdracht: Vul in: Violetta belt ___ huisarts.",
        "answer": "Violetta belt haar huisarts."
      },
      {
        "title": "Lidwoord afvalpas",
        "prompt": "Opdracht: Kies de of het: ___ afvalpas zit in mijn tas.",
        "answer": "De afvalpas zit in mijn tas."
      },
      {
        "title": "Bijvoeglijk naamwoord nieuw",
        "prompt": "Opdracht: Vul in: Zij geeft haar ___ adres door. (nieuw)",
        "answer": "Zij geeft haar nieuwe adres door."
      },
      {
        "title": "Meervoud fles",
        "prompt": "Opdracht: Maak meervoud: een fles - drie ___.",
        "answer": "Een fles - drie flessen."
      },
      {
        "title": "Pronomen ons",
        "prompt": "Opdracht: Vul in: Wij houden ___ oprit vrij.",
        "answer": "Wij houden onze oprit vrij."
      },
      {
        "title": "Artikel bij zwembad",
        "prompt": "Opdracht: Kies de of het: ___ zwembad opent vroeg.",
        "answer": "Het zwembad opent vroeg."
      },
      {
        "title": "Bijvoeglijk naamwoord koud",
        "prompt": "Opdracht: Vul in: De ___ verwarming is vervelend. (koud)",
        "answer": "De koude verwarming is vervelend."
      },
      {
        "title": "Meervoud planning",
        "prompt": "Opdracht: Maak meervoud: een afspraak - twee ___.",
        "answer": "Een afspraak - twee afspraken."
      },
      {
        "title": "Pronomen mijn",
        "prompt": "Opdracht: Vul in: Ik neem ___ identiteitsbewijs mee.",
        "answer": "Ik neem mijn identiteitsbewijs mee."
      },
      {
        "title": "Lidwoord leesplek",
        "prompt": "Opdracht: Kies de of het: ___ bibliotheek heeft een taalcafe.",
        "answer": "De bibliotheek heeft een taalcafe."
      },
      {
        "title": "Bijvoeglijk naamwoord duidelijk",
        "prompt": "Opdracht: Vul in: Ik schrijf een ___ bericht. (duidelijk)",
        "answer": "Ik schrijf een duidelijk bericht."
      },
      {
        "title": "Meervoud gezin",
        "prompt": "Opdracht: Maak meervoud: een dochter - twee ___.",
        "answer": "Een dochter - twee dochters."
      },
      {
        "title": "Pronomen hun",
        "prompt": "Opdracht: Vul in: De buren laten ___ kozijnen schilderen.",
        "answer": "De buren laten hun kozijnen schilderen."
      },
      {
        "title": "Artikel bij medicijn",
        "prompt": "Opdracht: Kies de of het: ___ medicijn ligt klaar.",
        "answer": "Het medicijn ligt klaar."
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
        "title": "Geen plastic",
        "prompt": "Opdracht: Vul in met geen of niet: Doe ___ plastic zakken in de groene container.",
        "answer": "Doe geen plastic zakken in de groene container."
      },
      {
        "title": "Niet komen",
        "prompt": "Opdracht: Vul in met geen of niet: Ik kan maandag ___ naar de kapper komen.",
        "answer": "Ik kan maandag niet naar de kapper komen."
      },
      {
        "title": "Plaats bij loket",
        "prompt": "Opdracht: Vul in: Ik meld mij ___ de balie aan.",
        "answer": "Ik meld mij bij de balie aan."
      },
      {
        "title": "Naar Geldrop",
        "prompt": "Opdracht: Vul in: De buurtbus rijdt ___ Geldrop.",
        "answer": "De buurtbus rijdt naar Geldrop."
      },
      {
        "title": "Op woensdag",
        "prompt": "Opdracht: Vul in: Ik zwem ___ woensdag om half acht.",
        "answer": "Ik zwem op woensdag om half acht."
      },
      {
        "title": "Voor vrijdag",
        "prompt": "Opdracht: Vul in: Kies ___ vrijdag een tijdvak.",
        "answer": "Kies voor vrijdag een tijdvak."
      },
      {
        "title": "Want bij kou",
        "prompt": "Opdracht: Verbind met want: Ik bel de verhuurder. De verwarming blijft koud.",
        "answer": "Ik bel de verhuurder, want de verwarming blijft koud."
      },
      {
        "title": "Omdat bij reserveren",
        "prompt": "Opdracht: Verbind met omdat: Ik reserveer online. Het zwembad kan vol zijn.",
        "answer": "Ik reserveer online omdat het zwembad vol kan zijn."
      },
      {
        "title": "Dus bij afval",
        "prompt": "Opdracht: Verbind met dus: De container wordt dinsdag geleegd. Ik zet hem maandag buiten.",
        "answer": "De container wordt dinsdag geleegd, dus ik zet hem maandag buiten."
      },
      {
        "title": "Maar bij afspraak",
        "prompt": "Opdracht: Verbind met maar: Ik heb een afspraak. Ik kan niet komen.",
        "answer": "Ik heb een afspraak, maar ik kan niet komen."
      },
      {
        "title": "Als bij oprit",
        "prompt": "Opdracht: Verbind met als: De schilder komt. Wij houden de oprit vrij.",
        "answer": "Als de schilder komt, houden wij de oprit vrij."
      },
      {
        "title": "Daarna bij fietsen",
        "prompt": "Opdracht: Maak twee zinnen met daarna: Wij fietsen. Wij drinken water.",
        "answer": "Wij fietsen. Daarna drinken wij water."
      },
      {
        "title": "In de app",
        "prompt": "Opdracht: Vul in: Het e-ticket staat ___ de NS-app.",
        "answer": "Het e-ticket staat in de NS-app."
      },
      {
        "title": "Met pin",
        "prompt": "Opdracht: Vul in: Ik betaal ___ pin in de buurtbus.",
        "answer": "Ik betaal met pin in de buurtbus."
      },
      {
        "title": "Geen tijd",
        "prompt": "Opdracht: Vul in met geen of niet: Vrijdag heb ik ___ tijd.",
        "answer": "Vrijdag heb ik geen tijd."
      },
      {
        "title": "Vergeetzin",
        "prompt": "Opdracht: Vul in met geen of niet: Vergeet uw afvalpas ___ .",
        "answer": "Vergeet uw afvalpas niet."
      },
      {
        "title": "En bij maaltijd",
        "prompt": "Opdracht: Verbind met en: Ik kook groenten. Ik bak vlees.",
        "answer": "Ik kook groenten en ik bak vlees."
      },
      {
        "title": "Of bij keuze",
        "prompt": "Opdracht: Verbind met of: Wilt u bellen? Wilt u mailen?",
        "answer": "Wilt u bellen of wilt u mailen?"
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
  const key = `v015-writing-answer-${index}-${exercise.title}`;
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
