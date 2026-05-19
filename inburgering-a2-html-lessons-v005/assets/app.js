const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte praktische teksten. Zoek de belangrijkste informatie: tijd, plaats, datum, reden en wat u moet doen.",
    "meta": [
      "A2 examen",
      "Praktische teksten",
      "Nieuwe v5-opgaven"
    ],
    "exercises": [
      {
        "title": "Afvalpas bij de milieustraat",
        "prompt": "Uw afvalpas werkt vanaf maandag bij de milieustraat. Neem ook een geldig identiteitsbewijs mee. Grof afval brengt u alleen op zaterdag tussen 09.00 en 12.00 uur.",
        "questions": [
          "Vanaf welke dag werkt de afvalpas?",
          "Wat neemt u naast de afvalpas mee?",
          "Op welk moment kunt u grof afval brengen?"
        ],
        "answer": "De afvalpas werkt vanaf maandag. U neemt ook een geldig identiteitsbewijs mee. Grof afval brengt u op zaterdag tussen 09.00 en 12.00 uur."
      },
      {
        "title": "Bericht van de fysiotherapeut",
        "prompt": "Uw afspraak voor de knie-oefeningen is dinsdag om 14.20 uur. Draag makkelijke kleding. Bel de praktijk als u later bent dan tien minuten.",
        "questions": [
          "Voor welke oefeningen is de afspraak?",
          "Op welke dag en tijd begint de afspraak?",
          "Wat doet u als u meer dan tien minuten later bent?"
        ],
        "answer": "De afspraak is voor knie-oefeningen. De afspraak begint dinsdag om 14.20 uur. Als u meer dan tien minuten later bent, belt u de praktijk."
      },
      {
        "title": "Studiedag op basisschool",
        "prompt": "Vrijdag hebben de leraren een studiedag. De kinderen zijn dan vrij. Donderdag krijgen zij huiswerk mee voor het weekend.",
        "questions": [
          "Waarom zijn de kinderen vrijdag vrij?",
          "Wanneer krijgen de kinderen huiswerk mee?",
          "Voor welke periode is het huiswerk?"
        ],
        "answer": "De kinderen zijn vrijdag vrij door een studiedag. Zij krijgen donderdag huiswerk mee. Het huiswerk is voor het weekend."
      },
      {
        "title": "Lamp in de straat kapot",
        "prompt": "In de Appelstraat is een straatlamp kapot. De monteur komt binnen drie werkdagen. Zet uw fiets niet tegen de lantaarnpaal.",
        "questions": [
          "Wat is kapot in de Appelstraat?",
          "Wanneer komt de monteur ongeveer?",
          "Waar mag u uw fiets niet neerzetten?"
        ],
        "answer": "Een straatlamp is kapot. De monteur komt binnen drie werkdagen. U mag uw fiets niet tegen de lantaarnpaal zetten."
      },
      {
        "title": "Kraam op de weekmarkt",
        "prompt": "Bij kraam 12 koopt u vandaag twee kilo appels voor vier euro. De markt sluit om 15.30 uur. Betalen kan contant of met pin.",
        "questions": [
          "Wat kunt u bij kraam 12 kopen?",
          "Hoe laat sluit de markt?",
          "Op welke manieren kunt u betalen?"
        ],
        "answer": "U kunt twee kilo appels kopen. De markt sluit om 15.30 uur. U kunt contant of met pin betalen."
      },
      {
        "title": "Fiets mee in de trein",
        "prompt": "Tijdens de spits mag uw fiets niet mee in de trein. Buiten de spits koopt u een fietskaart. Een vouwfiets mag gratis mee als hij ingeklapt is.",
        "questions": [
          "Wanneer mag uw gewone fiets niet mee?",
          "Wat koopt u buiten de spits?",
          "Welke fiets mag gratis mee als hij ingeklapt is?"
        ],
        "answer": "Tijdens de spits mag uw gewone fiets niet mee. Buiten de spits koopt u een fietskaart. Een vouwfiets mag gratis mee als hij ingeklapt is."
      },
      {
        "title": "Boek reserveren bij de bibliotheek",
        "prompt": "Het boek over gezond koken is nu uitgeleend. U kunt het boek online reserveren. U krijgt een e-mail als het boek klaarstaat.",
        "questions": [
          "Waarover gaat het boek?",
          "Hoe kunt u het boek reserveren?",
          "Wanneer krijgt u een e-mail?"
        ],
        "answer": "Het boek gaat over gezond koken. U kunt het online reserveren. U krijgt een e-mail als het boek klaarstaat."
      },
      {
        "title": "Nieuw wachtwoord zorgportaal",
        "prompt": "Uw wachtwoord voor het zorgportaal verloopt vandaag. Maak voor 22.00 uur een nieuw wachtwoord. Gebruik minimaal acht tekens.",
        "questions": [
          "Wat verloopt vandaag?",
          "Voor welke tijd maakt u een nieuw wachtwoord?",
          "Hoe lang moet het wachtwoord minimaal zijn?"
        ],
        "answer": "Het wachtwoord voor het zorgportaal verloopt vandaag. U maakt voor 22.00 uur een nieuw wachtwoord. Het wachtwoord moet minimaal acht tekens hebben."
      },
      {
        "title": "Rijbewijs ophalen",
        "prompt": "Uw rijbewijs ligt klaar bij het gemeentehuis. U kunt het ophalen op woensdagmiddag zonder afspraak. Neem de afhaalbrief mee.",
        "questions": [
          "Wat ligt klaar bij het gemeentehuis?",
          "Wanneer kunt u het zonder afspraak ophalen?",
          "Welk papier neemt u mee?"
        ],
        "answer": "Uw rijbewijs ligt klaar. U kunt het op woensdagmiddag zonder afspraak ophalen. U neemt de afhaalbrief mee."
      },
      {
        "title": "Koffieochtend in het buurthuis",
        "prompt": "Dinsdag is er koffieochtend in het buurthuis. Nieuwe bewoners zijn welkom vanaf 10.15 uur. De eerste kop koffie is gratis.",
        "questions": [
          "Waar is de koffieochtend?",
          "Voor wie is de ochtend ook bedoeld?",
          "Wat is gratis?"
        ],
        "answer": "De koffieochtend is in het buurthuis. Nieuwe bewoners zijn ook welkom. De eerste kop koffie is gratis."
      },
      {
        "title": "Zwembadpas verlengen",
        "prompt": "Uw zwembadpas stopt op 1 juni. Verleng de pas online als u wilt blijven zwemmen. Na betaling krijgt u direct toegang.",
        "questions": [
          "Wanneer stopt de zwembadpas?",
          "Waar kunt u de pas verlengen?",
          "Wanneer krijgt u direct toegang?"
        ],
        "answer": "De zwembadpas stopt op 1 juni. U kunt de pas online verlengen. Na betaling krijgt u direct toegang."
      },
      {
        "title": "Apotheek tijdelijk dicht",
        "prompt": "De apotheek is donderdagmiddag gesloten door scholing. Spoedmedicijnen haalt u bij de apotheek in Heeze. Vrijdag is de apotheek weer open.",
        "questions": [
          "Waarom is de apotheek donderdagmiddag dicht?",
          "Waar haalt u spoedmedicijnen?",
          "Wanneer is de apotheek weer open?"
        ],
        "answer": "De apotheek is dicht door scholing. Spoedmedicijnen haalt u bij de apotheek in Heeze. Vrijdag is de apotheek weer open."
      },
      {
        "title": "Controle van de rookmelder",
        "prompt": "De woningcorporatie controleert volgende week de rookmelders. De controle duurt ongeveer tien minuten per woning. U hoeft niets te betalen.",
        "questions": [
          "Wat controleert de woningcorporatie?",
          "Hoe lang duurt de controle per woning?",
          "Moet u voor de controle betalen?"
        ],
        "answer": "De woningcorporatie controleert de rookmelders. De controle duurt ongeveer tien minuten per woning. U hoeft niets te betalen."
      },
      {
        "title": "Proefles bij de sportclub",
        "prompt": "De sportclub geeft zaterdag een gratis proefles conditie. Meld u voor vrijdag aan via de website. Neem sportschoenen voor binnen mee.",
        "questions": [
          "Welke proefles geeft de sportclub?",
          "Wanneer moet u zich aanmelden?",
          "Welke schoenen neemt u mee?"
        ],
        "answer": "De sportclub geeft een gratis proefles conditie. U moet zich voor vrijdag aanmelden. U neemt sportschoenen voor binnen mee."
      },
      {
        "title": "Pakket in de pakketkluis",
        "prompt": "Uw pakket ligt in kluis 34 bij het station. De code werkt tot morgen 18.00 uur. Daarna gaat het pakket terug naar de bezorger.",
        "questions": [
          "In welke kluis ligt het pakket?",
          "Tot wanneer werkt de code?",
          "Wat gebeurt er na die tijd met het pakket?"
        ],
        "answer": "Het pakket ligt in kluis 34. De code werkt tot morgen 18.00 uur. Daarna gaat het pakket terug naar de bezorger."
      },
      {
        "title": "Internetstoring thuis",
        "prompt": "Er is vanavond onderhoud aan het internet in uw straat. Tussen 23.00 en 01.00 uur kan de verbinding wegvallen. Daarna werkt alles weer normaal.",
        "questions": [
          "Waaraan is vanavond onderhoud?",
          "Wanneer kan de verbinding wegvallen?",
          "Wat gebeurt er na 01.00 uur?"
        ],
        "answer": "Er is onderhoud aan het internet in de straat. De verbinding kan tussen 23.00 en 01.00 uur wegvallen. Daarna werkt alles weer normaal."
      },
      {
        "title": "Reisbericht voor het gezin",
        "prompt": "De vlucht naar Valencia vertrekt om 12.40 uur. De balie sluit 45 minuten voor vertrek. Zet vloeistoffen in een klein doorzichtig zakje.",
        "questions": [
          "Waarheen gaat de vlucht?",
          "Hoe laat vertrekt de vlucht?",
          "Wanneer sluit de balie?"
        ],
        "answer": "De vlucht gaat naar Valencia. De vlucht vertrekt om 12.40 uur. De balie sluit 45 minuten voor vertrek."
      },
      {
        "title": "Mini-examen pinnen",
        "prompt": "Bij de automaat in de supermarkt kunt u alleen met pin betalen. Contant geld wordt daar niet aangenomen.",
        "questions": [
          "Kies het goede antwoord: A. U betaalt daar alleen met pin. B. U krijgt daar gratis boodschappen. C. U moet daar een paspoort laten zien."
        ],
        "answer": "A. U betaalt daar alleen met pin."
      }
    ]
  },
  {
    "id": "writing",
    "number": "02",
    "category": "Examen",
    "title": "Schrijven",
    "goal": "Schrijf korte praktische teksten. Beantwoord de opdracht met eenvoudige, volledige Nederlandse zinnen.",
    "meta": [
      "Schriftelijk examen",
      "E-mails en berichten",
      "Met checklist"
    ],
    "exercises": [
      {
        "title": "Aanvraag voor een zwembadpas",
        "prompt": "Vul een kort formulier in voor een zwembadpas. Schrijf uw naam, adres, geboortedatum en waarom u de pas wilt.",
        "questions": [],
        "answer": "Naam: Violetta Bonenkamp\nAdres: Sterksel, Noord-Brabant\nGeboortedatum: 12 maart 1982\nIk wil een zwembadpas omdat ik graag elke week zwem."
      },
      {
        "title": "E-mail over een tienminutengesprek",
        "prompt": "Schrijf een e-mail aan de mentor van uw dochter. Vraag of het gesprek op dinsdag na 15.00 uur kan.",
        "questions": [],
        "answer": "Beste mentor,\n\nIk wil graag een tienminutengesprek over mijn dochter. Kan het gesprek op dinsdag na 15.00 uur?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Briefje over een bezorgd pakket",
        "prompt": "U heeft een pakket voor de buren aangenomen. Schrijf een kort briefje dat zij het vanavond kunnen ophalen.",
        "questions": [],
        "answer": "Beste buren,\n\nIk heb vandaag een pakket voor jullie aangenomen. Jullie kunnen het vanavond bij ons ophalen.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Vraag over een parkeerkaart",
        "prompt": "Schrijf een bericht aan de gemeente. U wilt weten hoe u een bezoekersparkeerkaart aanvraagt.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nIk wil graag een bezoekersparkeerkaart aanvragen. Kunt u mij vertellen hoe ik dat kan doen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Klacht bij de fietsenmaker",
        "prompt": "Uw fiets is gemaakt, maar de rem werkt nog niet goed. Schrijf een korte klacht.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nMijn fiets is gisteren gemaakt, maar de rem werkt nog niet goed. Kunt u de rem opnieuw controleren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Adres veranderen bij de zorgverzekeraar",
        "prompt": "Schrijf aan uw zorgverzekeraar dat uw adres is veranderd. Vraag om een bevestiging.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nMijn adres is veranderd. Wilt u mijn nieuwe adres in uw systeem zetten en mij een bevestiging sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Boek langer lenen",
        "prompt": "Schrijf een e-mail aan de bibliotheek. U wilt een boek een week langer lenen.",
        "questions": [],
        "answer": "Beste bibliotheek,\n\nIk wil mijn boek graag een week langer lenen. Kan dat? Mijn pasnummer staat hieronder.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Later bij de sportles",
        "prompt": "U komt tien minuten later naar de sportles. Schrijf een kort bericht aan de trainer.",
        "questions": [],
        "answer": "Hoi trainer,\n\nIk kom vandaag tien minuten later naar de sportles. Ik ben onderweg.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Antwoord op een eetuitnodiging",
        "prompt": "Een vriendin vraagt of u zondag komt eten. U kunt komen en u wilt groente meenemen. Schrijf een antwoord.",
        "questions": [],
        "answer": "Hoi,\n\nDank je voor de uitnodiging. Ik kom zondag graag eten. Ik neem wat groente mee.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Herhaalrecept via de huisarts",
        "prompt": "Schrijf een bericht aan de huisarts. U heeft een herhaalrecept nodig en vraagt wanneer u het kunt ophalen.",
        "questions": [],
        "answer": "Beste huisarts,\n\nIk heb een herhaalrecept nodig voor mijn medicijnen. Wanneer kan ik het recept ophalen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Online overleg verzetten",
        "prompt": "Schrijf aan een collega dat u het online overleg een half uur later wilt doen.",
        "questions": [],
        "answer": "Hoi,\n\nKan ons online overleg vandaag een half uur later? Ik heb eerst nog een andere afspraak.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Aanmelden voor vrijwilligerswerk",
        "prompt": "Schrijf een korte e-mail aan het buurthuis. U wilt helpen bij de koffieochtend.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nIk wil graag helpen als vrijwilliger bij de koffieochtend. Kunt u mij vertellen wanneer u hulp nodig heeft?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over reiskosten",
        "prompt": "U ziet een fout in uw reiskosten. Schrijf een bericht aan de klantenservice van het openbaar vervoer.",
        "questions": [],
        "answer": "Beste klantenservice,\n\nIk zie een fout in mijn reiskosten. Er is te veel geld afgeschreven. Kunt u dit controleren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Probleem met internet thuis",
        "prompt": "Schrijf een bericht aan de provider. Uw internet werkt langzaam en u werkt thuis.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nMijn internet thuis werkt langzaam. Ik werk thuis en heb goed internet nodig. Kunt u mij helpen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Bedankbericht na zwemles",
        "prompt": "Schrijf een kort bedankbericht aan de zwemtrainer na een goede les.",
        "questions": [],
        "answer": "Hoi,\n\nBedankt voor de fijne zwemles vandaag. De uitleg was duidelijk en ik heb goed geoefend.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Korte tekst over uw werkdag",
        "prompt": "Schrijf vier korte zinnen over uw werkdag thuis.",
        "questions": [],
        "answer": "Ik werk vaak thuis aan mijn bedrijf. Ik begin meestal met e-mail. Daarna schrijf ik artikelen of overleg ik online. In de middag neem ik pauze en wandel ik even."
      },
      {
        "title": "Vraag over een schoolreis",
        "prompt": "Schrijf aan school. Vraag hoe laat de kinderen terug zijn van de schoolreis en wat zij moeten meenemen.",
        "questions": [],
        "answer": "Beste school,\n\nHoe laat zijn de kinderen terug van de schoolreis? Wat moeten zij meenemen op deze dag?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Lekkende kraan melden",
        "prompt": "Schrijf een bericht aan de woningcorporatie. De kraan in de keuken lekt sinds gisteren.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nDe kraan in mijn keuken lekt sinds gisteren. Kunt u een monteur sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      }
    ]
  },
  {
    "id": "speaking",
    "number": "03",
    "category": "Examen",
    "title": "Spreken",
    "goal": "Oefen korte gesproken antwoorden. Spreek rustig, gebruik eenvoudige zinnen en beantwoord precies de vraag.",
    "meta": [
      "Computerexamen",
      "Korte antwoorden",
      "Met nieuwe beelden"
    ],
    "exercises": [
      {
        "title": "AI-oefening met examenvragen",
        "prompt": "Gebruik deze opdracht in een spraaktool voordat u begint.",
        "questions": [],
        "answer": "U bent mijn Nederlandse A2-examinator. Stel een korte praktische vraag. Wacht op mijn antwoord. Geef daarna een eenvoudig modelantwoord."
      },
      {
        "title": "Uzelf kort voorstellen",
        "prompt": "",
        "questions": [
          "Wat is uw volledige naam?",
          "Wat is uw leeftijd?",
          "Waar woont u in Nederland?"
        ],
        "answer": "Ik heet Violetta Bonenkamp. Ik ben 44 jaar. Ik woon in Sterksel, in Noord-Brabant."
      },
      {
        "title": "Weekend in Sterksel",
        "prompt": "",
        "questions": [
          "Welke activiteit kiest u vaak op zaterdag?",
          "Is Sterksel rustig of druk?",
          "Waar wandelt u graag?"
        ],
        "answer": "In het weekend wandel en fiets ik graag. Sterksel is rustig. Ik wandel graag in de buurt van het dorp."
      },
      {
        "title": "Avond met het gezin",
        "prompt": "",
        "questions": [
          "Met wie woont u samen?",
          "Wat doet u vaak in de avond?",
          "Kookt u soms voor uw gezin?"
        ],
        "answer": "Ik woon samen met mijn Nederlandse man en mijn twee dochters. In de avond eten wij samen. Ik kook soms vlees met groenten."
      },
      {
        "title": "Eigen bedrijf",
        "prompt": "",
        "questions": [
          "Welke functie heeft u in uw eigen bedrijf?",
          "Waarom werkt u vaak thuis?",
          "Gebruikt u Nederlands voor uw werk?"
        ],
        "answer": "Ik ben ondernemer en startup founder. Ik werk vaak thuis omdat ik veel online doe. Ik oefen Nederlands voor gewone contacten."
      },
      {
        "title": "Rustig thuiswerken",
        "prompt": "",
        "questions": [
          "Waar staat uw werkplek?",
          "Wat heeft u nodig om goed te werken?",
          "Wanneer neemt u pauze?"
        ],
        "answer": "Mijn werkplek staat thuis. Ik heb mijn laptop, internet en koffie nodig. Ik neem pauze als ik ga wandelen."
      },
      {
        "title": "Podcast tijdens wandelen",
        "prompt": "",
        "questions": [
          "Hoort u soms podcasts tijdens het lopen?",
          "Wanneer luistert u meestal?",
          "Waarover hoort u graag informatie?"
        ],
        "answer": "Ja, ik luister graag naar podcasts. Ik luister meestal tijdens het wandelen. Ik hoor graag informatie over technologie en gezondheid."
      },
      {
        "title": "Naar het zwembad",
        "prompt": "",
        "questions": [
          "Hoe vaak wilt u zwemmen?",
          "Wat neemt u mee naar het zwembad?",
          "Wat is prettig aan zwemmen voor u?"
        ],
        "answer": "Ik wil graag elke week zwemmen. Ik neem een handdoek en zwemkleding mee. Zwemmen is gezond en rustig."
      },
      {
        "title": "Gezond koken",
        "prompt": "",
        "questions": [
          "Welke maaltijd maakt u vaak thuis?",
          "Welke groenten koopt u vaak?",
          "Eet u liever thuis of buiten?"
        ],
        "answer": "Ik kook graag vlees met groenten. Ik koop vaak paprika, broccoli en tomaten. Ik eet meestal liever thuis."
      },
      {
        "title": "Controle bij de tandarts",
        "prompt": "U belt de tandarts omdat u een controle wilt plannen. Wat zegt u?",
        "questions": [],
        "answer": "Goedemorgen, ik wil graag een controle bij de tandarts plannen. Heeft u volgende week een tijd vrij?"
      },
      {
        "title": "Vraag aan de gemeente",
        "prompt": "U wilt weten wanneer u uw rijbewijs kunt ophalen. Wat vraagt u aan de medewerker?",
        "questions": [],
        "answer": "Goedemiddag, mijn rijbewijs ligt klaar. Wanneer kan ik het ophalen? Moet ik een afspraak maken?"
      },
      {
        "title": "Gesprek met school",
        "prompt": "De mentor vraagt hoe het thuis gaat met huiswerk. Geef kort antwoord.",
        "questions": [],
        "answer": "Het gaat meestal goed. Mijn dochter maakt haar huiswerk na school. Soms help ik haar met plannen."
      },
      {
        "title": "In de supermarkt",
        "prompt": "U kunt een product niet vinden. Wat vraagt u aan een medewerker?",
        "questions": [],
        "answer": "Pardon, waar kan ik de volkoren pasta vinden? Ik kan het product niet vinden."
      },
      {
        "title": "Bus gemist",
        "prompt": "U heeft de bus gemist en komt later. Wat zegt u tegen uw afspraak?",
        "questions": [],
        "answer": "Sorry, ik heb de bus gemist. Ik kom ongeveer vijftien minuten later."
      },
      {
        "title": "Hulp aan een buur",
        "prompt": "Uw buurvrouw vraagt of u een pakket wilt aannemen. Wat antwoordt u?",
        "questions": [],
        "answer": "Ja, dat is goed. Ik ben vanmiddag thuis en kan het pakket aannemen."
      },
      {
        "title": "Mening over fietsen",
        "prompt": "",
        "questions": [
          "Neemt u vaak de fiets?",
          "Waarom is fietsen handig in Nederland?",
          "Draagt u in het donker verlichting?"
        ],
        "answer": "Ja, ik fiets graag. Fietsen is handig voor korte afstanden. In het donker gebruik ik altijd verlichting."
      },
      {
        "title": "Reis plannen",
        "prompt": "",
        "questions": [
          "Waar wilt u graag naartoe reizen?",
          "Met wie reist u graag?",
          "Wat regelt u voor vertrek?"
        ],
        "answer": "Ik wil graag naar Spanje reizen. Ik reis graag met mijn gezin. Voor vertrek regel ik tickets en paspoorten."
      },
      {
        "title": "Advies van de huisarts",
        "prompt": "De huisarts zegt dat u meer moet bewegen. Wat zegt u terug?",
        "questions": [],
        "answer": "Dat is goed. Ik wandel al vaak en ik wil ook vaker zwemmen."
      },
      {
        "title": "Taal oefenen in de bibliotheek",
        "prompt": "U wilt meedoen aan het taalcafe. Wat vraagt u bij de balie?",
        "questions": [],
        "answer": "Goedemiddag, ik wil graag Nederlands oefenen. Wanneer is het taalcafe en moet ik mij aanmelden?"
      },
      {
        "title": "Gezinsagenda aan tafel",
        "prompt": "Kijk naar de afbeelding. Beschrijf wat u ziet en zeg welke afspraak u in de agenda wilt zetten.",
        "questions": [],
        "answer": "Ik zie een tafel met een agenda en spullen voor school. Ik wil een afspraak voor het oudergesprek in de agenda zetten.",
        "image": "images/speaking/v005-speaking-family-calendar-azure15.png"
      },
      {
        "title": "Fietsroute in het dorp",
        "prompt": "Kijk naar de afbeelding. Vertel waar u naartoe fietst en waarom.",
        "questions": [],
        "answer": "Ik fiets door het dorp naar de winkel. Ik ga met de fiets omdat het dichtbij en gezond is.",
        "image": "images/speaking/v005-speaking-village-cycle-route-azure15.png"
      },
      {
        "title": "Aan de balie van het zwembad",
        "prompt": "Kijk naar de afbeelding. Vraag om informatie over een abonnement.",
        "questions": [],
        "answer": "Goedemiddag, ik wil graag informatie over een zwembadabonnement. Hoeveel kost het per maand?",
        "image": "images/speaking/v005-speaking-swimming-reception-azure15.png"
      },
      {
        "title": "Wachten in het gemeentehuis",
        "prompt": "Kijk naar de afbeelding. Vertel waarom u in het gemeentehuis bent.",
        "questions": [],
        "answer": "Ik ben in het gemeentehuis omdat ik mijn rijbewijs wil ophalen. Ik wacht op mijn beurt.",
        "image": "images/speaking/v005-speaking-town-hall-waiting-azure15.png"
      },
      {
        "title": "Gezonde boodschappen kiezen",
        "prompt": "Kijk naar de afbeelding. Noem drie dingen die u wilt kopen.",
        "questions": [],
        "answer": "Ik wil groenten, kip en fruit kopen. Ik maak vanavond een gezonde maaltijd.",
        "image": "images/speaking/v005-speaking-healthy-groceries-azure15.png"
      },
      {
        "title": "Thuis werken met laptop",
        "prompt": "Kijk naar de afbeelding. Beschrijf uw werkdag thuis.",
        "questions": [],
        "answer": "Ik werk thuis met mijn laptop. Ik schrijf teksten, lees berichten en heb online overleg.",
        "image": "images/speaking/v005-speaking-remote-work-desk-azure15.png"
      },
      {
        "title": "Bellen met de apotheek",
        "prompt": "Uw medicijn is bijna op. Wat zegt u tegen de apotheek?",
        "questions": [],
        "answer": "Goedemorgen, mijn medicijn is bijna op. Kunt u kijken of mijn herhaalrecept klaar is?"
      },
      {
        "title": "Netwerkgesprek voor werk",
        "prompt": "",
        "questions": [
          "Met wie spreekt u graag over uw bedrijf?",
          "Wat vertelt u kort over uw werk?",
          "Welke vraag stelt u aan de ander?"
        ],
        "answer": "Ik spreek graag met andere ondernemers. Ik vertel dat ik aan technologie en AI werk. Ik vraag wat de ander doet."
      },
      {
        "title": "Plan voor de komende maand",
        "prompt": "",
        "questions": [
          "Wat wilt u deze maand oefenen?",
          "Wanneer oefent u Nederlands?",
          "Wie kan u helpen?"
        ],
        "answer": "Deze maand wil ik spreken en luisteren oefenen. Ik oefen elke dag een beetje Nederlands. Mijn man kan mij helpen."
      }
    ]
  },
  {
    "id": "listening",
    "number": "04",
    "category": "Examen",
    "title": "Luisteren",
    "goal": "Luister eerst naar de audio. Beantwoord daarna de vragen. Lees de tekst pas na het luisteren.",
    "meta": [
      "Audio",
      "A2 tempo",
      "16 nieuwe MP3's"
    ],
    "exercises": [
      {
        "title": "AI-luistertraining starten",
        "prompt": "Start met deze instructie in een spraaktool en luister zonder mee te lezen.",
        "questions": [],
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees een kort praktisch bericht langzaam voor. Laat de tekst niet zien. Stel daarna drie eenvoudige vragen."
      },
      {
        "title": "Bibliotheekpas aanvragen",
        "prompt": "Goedemiddag mevrouw Bonenkamp. Voor een bibliotheekpas heeft u een identiteitsbewijs en uw adres nodig. De pas kost vijftien euro per jaar.",
        "transcript": "Goedemiddag mevrouw Bonenkamp. Voor een bibliotheekpas heeft u een identiteitsbewijs en uw adres nodig. De pas kost vijftien euro per jaar.",
        "questions": [
          "Wat wil mevrouw Bonenkamp aanvragen?",
          "Welke twee gegevens of documenten heeft zij nodig?",
          "Hoeveel kost de pas per jaar?"
        ],
        "answer": "Zij wil een bibliotheekpas aanvragen. Zij heeft een identiteitsbewijs en haar adres nodig. De pas kost vijftien euro per jaar.",
        "audio": "audio/listening-01-bibliotheekpas-aanvragen.mp3"
      },
      {
        "title": "Schoolreis informatie",
        "prompt": "Beste ouders, de schoolreis is volgende week woensdag. De kinderen nemen een lunch, water en een regenjas mee. Wij zijn rond vier uur terug.",
        "transcript": "Beste ouders, de schoolreis is volgende week woensdag. De kinderen nemen een lunch, water en een regenjas mee. Wij zijn rond vier uur terug.",
        "questions": [
          "Wanneer is de schoolreis?",
          "Wat nemen de kinderen mee?",
          "Hoe laat zijn ze ongeveer terug?"
        ],
        "answer": "De schoolreis is volgende week woensdag. De kinderen nemen lunch, water en een regenjas mee. Ze zijn rond 16.00 uur terug.",
        "audio": "audio/listening-02-schoolreis-meenemen.mp3"
      },
      {
        "title": "Online vraag aan de huisarts",
        "prompt": "U kunt uw vraag aan de huisarts vandaag online sturen. De assistente belt u morgen voor elf uur terug. Bij spoed belt u direct de praktijk.",
        "transcript": "U kunt uw vraag aan de huisarts vandaag online sturen. De assistente belt u morgen voor elf uur terug. Bij spoed belt u direct de praktijk.",
        "questions": [
          "Hoe kan mevrouw haar vraag vandaag sturen?",
          "Wanneer belt de assistente terug?",
          "Wat doet zij bij spoed?"
        ],
        "answer": "Zij kan haar vraag online sturen. De assistente belt morgen voor 11.00 uur terug. Bij spoed belt zij direct de praktijk.",
        "audio": "audio/listening-03-huisarts-online-vraag.mp3"
      },
      {
        "title": "Rijbewijs bij de balie",
        "prompt": "Uw rijbewijs ligt klaar bij balie vijf. U kunt het donderdag tussen twee en vier uur ophalen. Vergeet uw oude rijbewijs niet.",
        "transcript": "Uw rijbewijs ligt klaar bij balie vijf. U kunt het donderdag tussen twee en vier uur ophalen. Vergeet uw oude rijbewijs niet.",
        "questions": [
          "Waar ligt het rijbewijs klaar?",
          "Wanneer kan zij het ophalen?",
          "Wat mag zij niet vergeten?"
        ],
        "answer": "Het rijbewijs ligt klaar bij balie vijf. Zij kan het donderdag tussen 14.00 en 16.00 uur ophalen. Zij mag haar oude rijbewijs niet vergeten.",
        "audio": "audio/listening-04-gemeente-rijbewijs-balie.mp3"
      },
      {
        "title": "Spaaractie in de supermarkt",
        "prompt": "Beste klanten, bij twintig euro boodschappen krijgt u vandaag een gratis kruidenplantje. De actie geldt alleen bij de kassa en zolang de voorraad er is.",
        "transcript": "Beste klanten, bij twintig euro boodschappen krijgt u vandaag een gratis kruidenplantje. De actie geldt alleen bij de kassa en zolang de voorraad er is.",
        "questions": [
          "Wanneer krijgt een klant een kruidenplantje?",
          "Waar geldt de actie?",
          "Hoelang geldt de actie?"
        ],
        "answer": "Bij twintig euro boodschappen krijgt een klant een gratis kruidenplantje. De actie geldt bij de kassa. De actie geldt zolang de voorraad er is.",
        "audio": "audio/listening-05-supermarkt-spaaractie.mp3"
      },
      {
        "title": "Fiets niet in deze trein",
        "prompt": "Let op reizigers. In deze trein is vandaag geen plaats voor gewone fietsen. Reizigers met een vouwfiets mogen wel instappen als de fiets is ingeklapt.",
        "transcript": "Let op reizigers. In deze trein is vandaag geen plaats voor gewone fietsen. Reizigers met een vouwfiets mogen wel instappen als de fiets is ingeklapt.",
        "questions": [
          "Waarvoor is vandaag geen plaats?",
          "Wie mag wel instappen?",
          "Hoe moet de vouwfiets zijn?"
        ],
        "answer": "Er is geen plaats voor gewone fietsen. Reizigers met een vouwfiets mogen wel instappen. De vouwfiets moet ingeklapt zijn.",
        "audio": "audio/listening-06-trein-fietsverbod.mp3"
      },
      {
        "title": "Proefweek bij de sportclub",
        "prompt": "Welkom bij sportclub Vitaal. Volgende week kunt u gratis drie lessen proberen. Meld u aan via de website en neem een handdoek mee.",
        "transcript": "Welkom bij sportclub Vitaal. Volgende week kunt u gratis drie lessen proberen. Meld u aan via de website en neem een handdoek mee.",
        "questions": [
          "Hoeveel lessen kan iemand gratis proberen?",
          "Waar meldt iemand zich aan?",
          "Wat neemt iemand mee?"
        ],
        "answer": "Iemand kan gratis drie lessen proberen. Aanmelden gaat via de website. Iemand neemt een handdoek mee.",
        "audio": "audio/listening-07-sportclub-proefweek.mp3"
      },
      {
        "title": "Nieuw wachtwoord voor zorgverzekering",
        "prompt": "Uw account bij de zorgverzekering heeft een nieuw wachtwoord nodig. Maak het wachtwoord vandaag opnieuw aan. De klantenservice helpt tot zes uur.",
        "transcript": "Uw account bij de zorgverzekering heeft een nieuw wachtwoord nodig. Maak het wachtwoord vandaag opnieuw aan. De klantenservice helpt tot zes uur.",
        "questions": [
          "Welk account heeft een nieuw wachtwoord nodig?",
          "Wanneer moet het wachtwoord opnieuw worden gemaakt?",
          "Tot hoe laat helpt de klantenservice?"
        ],
        "answer": "Het account bij de zorgverzekering heeft een nieuw wachtwoord nodig. Het wachtwoord moet vandaag opnieuw worden gemaakt. De klantenservice helpt tot 18.00 uur.",
        "audio": "audio/listening-08-zorgverzekering-wachtwoord.mp3"
      },
      {
        "title": "Gereedschap van de buurman",
        "prompt": "Hoi Violetta, ik heb je snoeischaar morgen nodig. Kan ik hem na het ontbijt ophalen? Ik breng hem zaterdag terug.",
        "transcript": "Hoi Violetta, ik heb je snoeischaar morgen nodig. Kan ik hem na het ontbijt ophalen? Ik breng hem zaterdag terug.",
        "questions": [
          "Wat wil de buurman lenen?",
          "Wanneer wil hij het ophalen?",
          "Wanneer brengt hij het terug?"
        ],
        "answer": "De buurman wil de snoeischaar lenen. Hij wil hem morgen na het ontbijt ophalen. Hij brengt hem zaterdag terug.",
        "audio": "audio/listening-09-buurman-gereedschap.mp3"
      },
      {
        "title": "Apotheek op vrijdag",
        "prompt": "De apotheek is vrijdag open tot half zes. Tussen twaalf en een is de balie dicht. Uw medicijnen liggen vanaf drie uur klaar.",
        "transcript": "De apotheek is vrijdag open tot half zes. Tussen twaalf en een is de balie dicht. Uw medicijnen liggen vanaf drie uur klaar.",
        "questions": [
          "Tot hoe laat is de apotheek vrijdag open?",
          "Wanneer is de balie dicht?",
          "Vanaf hoe laat liggen de medicijnen klaar?"
        ],
        "answer": "De apotheek is vrijdag open tot 17.30 uur. De balie is tussen 12.00 en 13.00 uur dicht. De medicijnen liggen vanaf 15.00 uur klaar.",
        "audio": "audio/listening-10-apotheek-vrijdag.mp3"
      },
      {
        "title": "Zwembadabonnement betalen",
        "prompt": "Uw zwembadabonnement is bijna verlopen. Betaal voor maandag online. Dan blijft uw pas actief en kunt u dinsdag gewoon zwemmen.",
        "transcript": "Uw zwembadabonnement is bijna verlopen. Betaal voor maandag online. Dan blijft uw pas actief en kunt u dinsdag gewoon zwemmen.",
        "questions": [
          "Wat is bijna verlopen?",
          "Wanneer moet mevrouw betalen?",
          "Wat kan zij dinsdag doen als zij betaalt?"
        ],
        "answer": "Het zwembadabonnement is bijna verlopen. Zij moet voor maandag online betalen. Dan kan zij dinsdag gewoon zwemmen.",
        "audio": "audio/listening-11-zwembad-abonnement.mp3"
      },
      {
        "title": "Kraan in de keuken",
        "prompt": "De monteur voor de lekkende kraan komt morgen tussen negen en elf uur. Zorg dat de kast onder de gootsteen leeg is.",
        "transcript": "De monteur voor de lekkende kraan komt morgen tussen negen en elf uur. Zorg dat de kast onder de gootsteen leeg is.",
        "questions": [
          "Welk probleem komt de monteur oplossen?",
          "In welk tijdvak is de afspraak met de monteur?",
          "Welke kast moet leeg zijn?"
        ],
        "answer": "De monteur komt voor de lekkende kraan. Hij komt morgen tussen 09.00 en 11.00 uur. De kast onder de gootsteen moet leeg zijn.",
        "audio": "audio/listening-12-woningcorporatie-kraan.mp3"
      },
      {
        "title": "Taalcafe gesprek",
        "prompt": "Het taalcafe begint deze maand op donderdagavond. We praten over boodschappen, school en werk. U hoeft geen boek mee te nemen.",
        "transcript": "Het taalcafe begint deze maand op donderdagavond. We praten over boodschappen, school en werk. U hoeft geen boek mee te nemen.",
        "questions": [
          "Op welke avond begint het taalcafe?",
          "Over welke onderwerpen praten de mensen?",
          "Wat hoeft mevrouw niet mee te nemen?"
        ],
        "answer": "Het taalcafe begint op donderdagavond. De mensen praten over boodschappen, school en werk. Zij hoeft geen boek mee te nemen.",
        "audio": "audio/listening-13-taalcafe-gesprek.mp3"
      },
      {
        "title": "Studiedag herinnering",
        "prompt": "Vergeet niet: maandag is er een studiedag op school. De kinderen blijven thuis. Dinsdag begint de les weer om half negen.",
        "transcript": "Vergeet niet: maandag is er een studiedag op school. De kinderen blijven thuis. Dinsdag begint de les weer om half negen.",
        "questions": [
          "Wat is er maandag op school?",
          "Waar blijven de kinderen maandag?",
          "Hoe laat begint de les dinsdag?"
        ],
        "answer": "Maandag is er een studiedag. De kinderen blijven thuis. Dinsdag begint de les weer om 08.30 uur.",
        "audio": "audio/listening-14-school-studiedag.mp3"
      },
      {
        "title": "Werkruimte met internet",
        "prompt": "De werkruimte in de bibliotheek heeft vandaag traag internet. U kunt rustig werken, maar videobellen kan beter in kamer twee.",
        "transcript": "De werkruimte in de bibliotheek heeft vandaag traag internet. U kunt rustig werken, maar videobellen kan beter in kamer twee.",
        "questions": [
          "Wat is er vandaag traag?",
          "Waar kan iemand rustig werken?",
          "Waar kan iemand beter videobellen?"
        ],
        "answer": "Het internet is vandaag traag. Iemand kan rustig werken in de werkruimte. Videobellen kan beter in kamer twee.",
        "audio": "audio/listening-15-werkruimte-internet.mp3"
      },
      {
        "title": "Tandartscontrole verschoven",
        "prompt": "Uw tandartscontrole van vrijdag is verplaatst naar maandag om kwart over tien. Bel ons als deze tijd niet past.",
        "transcript": "Uw tandartscontrole van vrijdag is verplaatst naar maandag om kwart over tien. Bel ons als deze tijd niet past.",
        "questions": [
          "Welke controle krijgt een andere datum?",
          "Naar welke dag en tijd is de afspraak verplaatst?",
          "Wat doet mevrouw als de tijd niet past?"
        ],
        "answer": "De tandartscontrole is verplaatst. De afspraak is verplaatst naar maandag om 10.15 uur. Als de tijd niet past, belt zij de tandarts.",
        "audio": "audio/listening-16-tandarts-controle.mp3"
      }
    ]
  },
  {
    "id": "knm",
    "number": "05",
    "category": "Examen",
    "title": "KNM",
    "goal": "Oefen kennis van de Nederlandse maatschappij met korte meerkeuzevragen in het Nederlands.",
    "meta": [
      "Kennisexamen",
      "A/B/C gemengd",
      "Actuele thema's"
    ],
    "exercises": [
      {
        "title": "Inschrijven bij verhuizing",
        "prompt": "U verhuist naar een andere gemeente. Wat moet u doen?",
        "questions": [
          "A. Niets, de buren regelen dit",
          "B. U schrijft zich in bij de nieuwe gemeente",
          "C. U belt alleen de supermarkt"
        ],
        "answer": "B. U schrijft zich in bij de nieuwe gemeente."
      },
      {
        "title": "Burgerservicenummer",
        "prompt": "Waarvoor gebruikt u een BSN vaak?",
        "questions": [
          "A. Om korting op brood te krijgen",
          "B. Om een fiets te huren zonder sleutel",
          "C. Voor contact met overheid, zorg en werk"
        ],
        "answer": "C. Voor contact met overheid, zorg en werk."
      },
      {
        "title": "Eerste hulp bij gewone ziekte",
        "prompt": "U bent ziek, maar er is geen direct gevaar. Wie belt u meestal eerst?",
        "questions": [
          "A. De huisarts",
          "B. De brandweer",
          "C. De gemeenteraad"
        ],
        "answer": "A. De huisarts."
      },
      {
        "title": "Huisartsenpost",
        "prompt": "Wanneer belt u de huisartsenpost?",
        "questions": [
          "A. Voor een bibliotheekboek",
          "B. Voor dringende medische hulp buiten openingstijden",
          "C. Voor een parkeerkaart"
        ],
        "answer": "B. Voor dringende medische hulp buiten openingstijden."
      },
      {
        "title": "Basisverzekering",
        "prompt": "Wat is waar over de basiszorgverzekering?",
        "questions": [
          "A. Die is alleen voor kinderen",
          "B. Die is vrijwillig voor iedereen",
          "C. Die is verplicht voor volwassenen"
        ],
        "answer": "C. Die is verplicht voor volwassenen."
      },
      {
        "title": "Eigen risico",
        "prompt": "Wat betekent eigen risico bij zorgkosten?",
        "questions": [
          "A. U hoeft nooit zelf te betalen",
          "B. U betaalt soms eerst een deel zelf",
          "C. U krijgt altijd geld terug"
        ],
        "answer": "B. U betaalt soms eerst een deel zelf."
      },
      {
        "title": "Schoolplicht",
        "prompt": "Wat betekent leerplicht?",
        "questions": [
          "A. Kinderen moeten naar school",
          "B. Ouders hoeven school niet te bellen",
          "C. Kinderen kiezen altijd zelf hun rooster"
        ],
        "answer": "A. Kinderen moeten naar school."
      },
      {
        "title": "Gesprek met de mentor",
        "prompt": "Waarom gaat een ouder naar een oudergesprek?",
        "questions": [
          "A. Om paspoort te verlengen",
          "B. Om belasting te betalen",
          "C. Om over het kind op school te praten"
        ],
        "answer": "C. Om over het kind op school te praten."
      },
      {
        "title": "Arbeidsovereenkomst",
        "prompt": "Wat staat meestal in een arbeidscontract?",
        "questions": [
          "A. Alleen het weerbericht",
          "B. Werkuren, loon en afspraken",
          "C. De menukaart van het bedrijf"
        ],
        "answer": "B. Werkuren, loon en afspraken."
      },
      {
        "title": "Belasting op loon",
        "prompt": "Wie houdt vaak loonbelasting in?",
        "questions": [
          "A. De werkgever",
          "B. De buurman",
          "C. De sportclub"
        ],
        "answer": "A. De werkgever."
      },
      {
        "title": "Huur betalen",
        "prompt": "Wat moet een huurder meestal elke maand doen?",
        "questions": [
          "A. Een rijbewijs aanvragen",
          "B. Een examen geheim houden",
          "C. De huur op tijd betalen"
        ],
        "answer": "C. De huur op tijd betalen."
      },
      {
        "title": "Veilig wonen",
        "prompt": "Waarom is een rookmelder belangrijk?",
        "questions": [
          "A. Hij waarschuwt bij rook of brand",
          "B. Hij maakt koffie",
          "C. Hij betaalt de energierekening"
        ],
        "answer": "A. Hij waarschuwt bij rook of brand."
      },
      {
        "title": "Afval in aparte bakken",
        "prompt": "Waarom gebruiken veel gemeenten aparte bakken voor afval?",
        "questions": [
          "A. Omdat alle afval hetzelfde is",
          "B. Omdat materialen opnieuw gebruikt kunnen worden",
          "C. Omdat de bus sneller rijdt"
        ],
        "answer": "B. Omdat materialen opnieuw gebruikt kunnen worden."
      },
      {
        "title": "Fietsen op de weg",
        "prompt": "Waar fietst u meestal als er een fietspad is?",
        "questions": [
          "A. Op de stoep",
          "B. In de tuin",
          "C. Op het fietspad"
        ],
        "answer": "C. Op het fietspad."
      },
      {
        "title": "Inchecken in het ov",
        "prompt": "Wat doet u als u met de trein of bus reist met een kaart?",
        "questions": [
          "A. Inchecken en later uitchecken",
          "B. De kaart thuis laten",
          "C. Alleen de chauffeur groeten"
        ],
        "answer": "A. Inchecken en later uitchecken."
      },
      {
        "title": "Gemeenteraad kiezen",
        "prompt": "Wie mogen bij gemeenteraadsverkiezingen stemmen als zij aan de regels voldoen?",
        "questions": [
          "A. Alle toeristen",
          "B. Inwoners met stemrecht",
          "C. Alle kinderen op school"
        ],
        "answer": "B. Inwoners met stemrecht."
      },
      {
        "title": "Gelijke behandeling",
        "prompt": "Wat past bij gelijke behandeling?",
        "questions": [
          "A. Mensen uitsluiten zonder reden",
          "B. Alleen vrienden helpen",
          "C. Mensen eerlijk behandelen"
        ],
        "answer": "C. Mensen eerlijk behandelen."
      },
      {
        "title": "Persoonsgegevens",
        "prompt": "Wat doet u voorzichtig met persoonsgegevens?",
        "questions": [
          "A. U deelt ze niet zomaar",
          "B. U hangt ze buiten op",
          "C. U stuurt ze naar onbekenden"
        ],
        "answer": "A. U deelt ze niet zomaar."
      },
      {
        "title": "DigiD gebruiken",
        "prompt": "Waarvoor gebruikt u DigiD?",
        "questions": [
          "A. Om een pan te kopen",
          "B. Om veilig in te loggen bij overheid en zorg",
          "C. Om de tuin te maaien"
        ],
        "answer": "B. Om veilig in te loggen bij overheid en zorg."
      },
      {
        "title": "Mantelzorg",
        "prompt": "Wat is mantelzorg?",
        "questions": [
          "A. Een rekening van de tandarts",
          "B. Een soort openbaar vervoer",
          "C. Hulp aan familie of bekende die zorg nodig heeft"
        ],
        "answer": "C. Hulp aan familie of bekende die zorg nodig heeft."
      },
      {
        "title": "Bibliotheekfunctie",
        "prompt": "Wat kunt u vaak doen in een bibliotheek?",
        "questions": [
          "A. Boeken lenen en informatie zoeken",
          "B. Een rijbewijs maken",
          "C. Medicijnen ophalen"
        ],
        "answer": "A. Boeken lenen en informatie zoeken."
      },
      {
        "title": "Helpen zonder loon",
        "prompt": "Wat betekent vrijwillig helpen bij een organisatie?",
        "questions": [
          "A. Werk dat altijd veel loon geeft",
          "B. Onbetaald helpen bij een organisatie of activiteit",
          "C. Een verplichte tandartscontrole"
        ],
        "answer": "B. Onbetaald helpen bij een organisatie of activiteit."
      },
      {
        "title": "Overlast melden",
        "prompt": "U heeft vaak ernstige geluidsoverlast van buren. Wat kunt u doen?",
        "questions": [
          "A. Altijd direct 112 bellen voor elke klacht",
          "B. Niets zeggen en nooit hulp vragen",
          "C. Rustig praten of overlast melden bij verhuurder of gemeente"
        ],
        "answer": "C. Rustig praten of overlast melden bij verhuurder of gemeente."
      },
      {
        "title": "Gezond leven",
        "prompt": "Wat helpt bij gezond leven?",
        "questions": [
          "A. Regelmatig bewegen en gezond eten",
          "B. Nooit slapen",
          "C. Alle afspraken vergeten"
        ],
        "answer": "A. Regelmatig bewegen en gezond eten."
      },
      {
        "title": "Energie besparen",
        "prompt": "Wat kan helpen om energie te besparen?",
        "questions": [
          "A. Ramen open laten met verwarming hoog",
          "B. Verwarming lager zetten en lampen uitdoen",
          "C. Water de hele dag laten lopen"
        ],
        "answer": "B. Verwarming lager zetten en lampen uitdoen."
      },
      {
        "title": "Kinderopvangtoeslag",
        "prompt": "Waarvoor is kinderopvangtoeslag bedoeld?",
        "questions": [
          "A. Voor een fietsbel",
          "B. Voor een vakantiehotel",
          "C. Voor een deel van de kosten van kinderopvang"
        ],
        "answer": "C. Voor een deel van de kosten van kinderopvang."
      },
      {
        "title": "Aangifte doen",
        "prompt": "Waar kunt u aangifte doen van diefstal?",
        "questions": [
          "A. Bij de politie",
          "B. Bij de bakker",
          "C. Bij het zwembad"
        ],
        "answer": "A. Bij de politie."
      },
      {
        "title": "Brief van de overheid",
        "prompt": "Wat doet u met een belangrijke brief van de overheid?",
        "questions": [
          "A. Weggooien zonder lezen",
          "B. Goed lezen en op tijd reageren",
          "C. Aan een onbekende geven"
        ],
        "answer": "B. Goed lezen en op tijd reageren."
      }
    ]
  },
  {
    "id": "grammar-word-order",
    "number": "06",
    "category": "Grammatica",
    "title": "Woordvolgorde en vragen",
    "goal": "Oefen de volgorde in gewone zinnen, vragen en korte bijzinnen.",
    "meta": [
      "Woordvolgorde",
      "Vraagvormen",
      "Bijzinnen"
    ],
    "exercises": [
      {
        "title": "Basiszin met bedrijf",
        "prompt": "Zet in de goede volgorde: werk / ik / thuis / vandaag",
        "questions": [],
        "answer": "Ik werk vandaag thuis."
      },
      {
        "title": "Zinsvolgorde bij sporten",
        "prompt": "Zet in de goede volgorde: ga / vanavond / ik / zwemmen",
        "questions": [],
        "answer": "Vanavond ga ik zwemmen."
      },
      {
        "title": "Zinsvolgorde in Sterksel",
        "prompt": "Zet in de goede volgorde: woon / in Sterksel / ik / rustig",
        "questions": [],
        "answer": "In Sterksel woon ik rustig."
      },
      {
        "title": "Vraag met heeft",
        "prompt": "Maak een vraag: u / een afspraak / heeft",
        "questions": [],
        "answer": "Heeft u een afspraak?"
      },
      {
        "title": "Vraagwoord welke",
        "prompt": "Maak een vraag: neemt / u / welke / bus",
        "questions": [],
        "answer": "Welke bus neemt u?"
      },
      {
        "title": "Vraagwoord waarom",
        "prompt": "Maak een vraag: u / de praktijk / waarom / belt",
        "questions": [],
        "answer": "Waarom belt u de praktijk?"
      },
      {
        "title": "Hoe laat met beginnen",
        "prompt": "Maak een vraag: de zwemles / hoe laat / begint",
        "questions": [],
        "answer": "Hoe laat begint de zwemles?"
      },
      {
        "title": "Twee werkwoorden in reiszin",
        "prompt": "Zet goed: ik / wil / morgen / reizen / met de trein",
        "questions": [],
        "answer": "Ik wil morgen met de trein reizen."
      },
      {
        "title": "Modal met meenemen",
        "prompt": "Zet goed: u / moet / de brief / meenemen",
        "questions": [],
        "answer": "U moet de brief meenemen."
      },
      {
        "title": "Bijzin met omdat",
        "prompt": "Maak een zin: Ik blijf thuis. Ik ben moe.",
        "questions": [],
        "answer": "Ik blijf thuis omdat ik moe ben."
      },
      {
        "title": "Omdat met online werken",
        "prompt": "Maak een zin: Ik werk thuis. Het overleg is online.",
        "questions": [],
        "answer": "Ik werk thuis omdat het overleg online is."
      },
      {
        "title": "Als met bellen",
        "prompt": "Maak af: Ik bel u als de monteur ___.",
        "questions": [],
        "answer": "Ik bel u als de monteur komt."
      },
      {
        "title": "Dat in een bericht",
        "prompt": "Maak af: Ik lees dat de afspraak morgen ___.",
        "questions": [],
        "answer": "Ik lees dat de afspraak morgen is."
      },
      {
        "title": "Want met reden",
        "prompt": "Maak een zin: Ik neem water mee. Ik ga sporten.",
        "questions": [],
        "answer": "Ik neem water mee, want ik ga sporten."
      },
      {
        "title": "Dus met gevolg",
        "prompt": "Maak een zin: De bus is weg. Ik fiets naar huis.",
        "questions": [],
        "answer": "De bus is weg, dus ik fiets naar huis."
      },
      {
        "title": "En met twee acties",
        "prompt": "Maak een zin: Ik koop groente. Ik betaal met pin.",
        "questions": [],
        "answer": "Ik koop groente en ik betaal met pin."
      },
      {
        "title": "Morgen in het midden",
        "prompt": "Zet goed: ik / heb / morgen / een gesprek",
        "questions": [],
        "answer": "Ik heb morgen een gesprek."
      },
      {
        "title": "Korte vraag per e-mail",
        "prompt": "Maak een nette vraag: kan / ik / de afspraak / verzetten",
        "questions": [],
        "answer": "Kan ik de afspraak verzetten?"
      }
    ]
  },
  {
    "id": "grammar-verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Werkwoorden en tijden",
    "goal": "Oefen tegenwoordige tijd, voltooid deelwoord en eenvoudige toekomst.",
    "meta": [
      "Werkwoorden",
      "Perfectum",
      "Toekomst"
    ],
    "exercises": [
      {
        "title": "Tegenwoordige tijd: oefenen",
        "prompt": "Maak af: Ik ___ elke dag Nederlands. (oefenen)",
        "questions": [],
        "answer": "Ik oefen elke dag Nederlands."
      },
      {
        "title": "Tegenwoordige tijd: fietsen",
        "prompt": "Maak af: Zij ___ naar de winkel. (fietsen)",
        "questions": [],
        "answer": "Zij fietst naar de winkel."
      },
      {
        "title": "Hebben bij formulier",
        "prompt": "Maak af: Wij ___ een afspraak bij de gemeente. (hebben)",
        "questions": [],
        "answer": "Wij hebben een afspraak bij de gemeente."
      },
      {
        "title": "Zijn bij locatie",
        "prompt": "Maak af: De kinderen ___ op school. (zijn)",
        "questions": [],
        "answer": "De kinderen zijn op school."
      },
      {
        "title": "Gaan naar sport",
        "prompt": "Maak af: Ik ___ vanavond naar de sportclub. (gaan)",
        "questions": [],
        "answer": "Ik ga vanavond naar de sportclub."
      },
      {
        "title": "Komen naar balie",
        "prompt": "Maak af: U ___ om tien uur naar balie vijf. (komen)",
        "questions": [],
        "answer": "U komt om tien uur naar balie vijf."
      },
      {
        "title": "Bellen met tandarts",
        "prompt": "Maak af: Mijn man ___ de tandarts. (bellen)",
        "questions": [],
        "answer": "Mijn man belt de tandarts."
      },
      {
        "title": "Koken in de avond",
        "prompt": "Maak af: Violetta ___ groenten met kip. (koken)",
        "questions": [],
        "answer": "Violetta kookt groenten met kip."
      },
      {
        "title": "Voltooid: pakket halen",
        "prompt": "Maak af: Ik heb het pakket ___. (halen)",
        "questions": [],
        "answer": "Ik heb het pakket gehaald."
      },
      {
        "title": "Voltooid: rekening betalen",
        "prompt": "Maak af: Zij heeft de rekening ___. (betalen)",
        "questions": [],
        "answer": "Zij heeft de rekening betaald."
      },
      {
        "title": "Voltooid met zijn: vertrekken",
        "prompt": "Maak af: De trein is net ___. (vertrekken)",
        "questions": [],
        "answer": "De trein is net vertrokken."
      },
      {
        "title": "Voltooid met zijn: naar huis gaan",
        "prompt": "Maak af: Wij zijn vroeg naar huis ___. (gaan)",
        "questions": [],
        "answer": "Wij zijn vroeg naar huis gegaan."
      },
      {
        "title": "Toekomst: zwemmen",
        "prompt": "Maak af: Ik ga morgen ___. (zwemmen)",
        "questions": [],
        "answer": "Ik ga morgen zwemmen."
      },
      {
        "title": "Toekomst: afspraak maken",
        "prompt": "Maak af: Zij gaat een afspraak ___. (maken)",
        "questions": [],
        "answer": "Zij gaat een afspraak maken."
      },
      {
        "title": "Willen met informatie",
        "prompt": "Maak af: Ik ___ informatie vragen. (willen)",
        "questions": [],
        "answer": "Ik wil informatie vragen."
      },
      {
        "title": "Kunnen met online formulier",
        "prompt": "Maak af: U ___ het formulier online invullen. (kunnen)",
        "questions": [],
        "answer": "U kunt het formulier online invullen."
      },
      {
        "title": "Moeten met legitimatie",
        "prompt": "Maak af: Wij ___ legitimatie meenemen. (moeten)",
        "questions": [],
        "answer": "Wij moeten legitimatie meenemen."
      },
      {
        "title": "Zullen als aanbod",
        "prompt": "Maak een aanbod met zullen: ik / u / helpen",
        "questions": [],
        "answer": "Zal ik u helpen?"
      }
    ]
  },
  {
    "id": "grammar-modal",
    "number": "08",
    "category": "Grammatica",
    "title": "Modale, scheidbare en wederkerende werkwoorden",
    "goal": "Oefen praktische werkwoorden die vaak in afspraken, formulieren en gesprekken voorkomen.",
    "meta": [
      "Moeten/kunnen/willen",
      "Scheidbaar",
      "Wederkerend"
    ],
    "exercises": [
      {
        "title": "Moeten bij school",
        "prompt": "Maak af: Mijn dochter ___ morgen een lunch meenemen. (moeten)",
        "questions": [],
        "answer": "Mijn dochter moet morgen een lunch meenemen."
      },
      {
        "title": "Kunnen bij afspraak",
        "prompt": "Maak af: ___ ik de afspraak verzetten? (kunnen)",
        "questions": [],
        "answer": "Kan ik de afspraak verzetten?"
      },
      {
        "title": "Willen bij bibliotheek",
        "prompt": "Maak af: Ik ___ een boek reserveren. (willen)",
        "questions": [],
        "answer": "Ik wil een boek reserveren."
      },
      {
        "title": "Mogen bij parkeren",
        "prompt": "Maak af: U ___ hier twee uur parkeren. (mogen)",
        "questions": [],
        "answer": "U mag hier twee uur parkeren."
      },
      {
        "title": "Werkwoord achteraan",
        "prompt": "Zet goed: ik / moet / vandaag / het formulier / invullen",
        "questions": [],
        "answer": "Ik moet vandaag het formulier invullen."
      },
      {
        "title": "Ophalen met pakketkluis",
        "prompt": "Maak af: Ik ___ mijn pakket vanavond ___. (ophalen)",
        "questions": [],
        "answer": "Ik haal mijn pakket vanavond op."
      },
      {
        "title": "Ophalen met modal",
        "prompt": "Maak af: Ik moet mijn rijbewijs morgen ___. (ophalen)",
        "questions": [],
        "answer": "Ik moet mijn rijbewijs morgen ophalen."
      },
      {
        "title": "Afzeggen door ziekte",
        "prompt": "Maak af: Zij ___ de zwemles ___. (afzeggen)",
        "questions": [],
        "answer": "Zij zegt de zwemles af."
      },
      {
        "title": "Afzeggen in verleden",
        "prompt": "Maak af: Ik heb de afspraak gisteren ___. (afzeggen)",
        "questions": [],
        "answer": "Ik heb de afspraak gisteren afgezegd."
      },
      {
        "title": "Meenemen bij reis",
        "prompt": "Maak af: Wij ___ onze paspoorten ___. (meenemen)",
        "questions": [],
        "answer": "Wij nemen onze paspoorten mee."
      },
      {
        "title": "Meenemen in infinitief",
        "prompt": "Maak af: U moet de afhaalbrief ___. (meenemen)",
        "questions": [],
        "answer": "U moet de afhaalbrief meenemen."
      },
      {
        "title": "Invullen op computer",
        "prompt": "Maak af: Ik ___ het formulier online ___. (invullen)",
        "questions": [],
        "answer": "Ik vul het formulier online in."
      },
      {
        "title": "Aanmelden voor proefles",
        "prompt": "Maak af: Wij ___ ons voor de proefles ___. (aanmelden)",
        "questions": [],
        "answer": "Wij melden ons voor de proefles aan."
      },
      {
        "title": "Zich inschrijven bij gemeente",
        "prompt": "Maak af: Ik schrijf ___ in bij de gemeente.",
        "questions": [],
        "answer": "Ik schrijf mij in bij de gemeente."
      },
      {
        "title": "Zich voelen na zwemmen",
        "prompt": "Maak af: Ik voel ___ goed na het zwemmen.",
        "questions": [],
        "answer": "Ik voel mij goed na het zwemmen."
      },
      {
        "title": "Zich melden bij balie",
        "prompt": "Maak af: U meldt ___ bij balie vijf.",
        "questions": [],
        "answer": "U meldt zich bij balie vijf."
      },
      {
        "title": "Zich voorbereiden",
        "prompt": "Maak af: Violetta bereidt ___ voor op het examen.",
        "questions": [],
        "answer": "Violetta bereidt zich voor op het examen."
      },
      {
        "title": "Praktische modalvraag",
        "prompt": "Maak een vraag met mogen: ik / hier / wachten",
        "questions": [],
        "answer": "Mag ik hier wachten?"
      }
    ]
  },
  {
    "id": "grammar-nouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Lidwoorden, naamwoorden en voornaamwoorden",
    "goal": "Oefen de, het, een, meervoud, bijvoeglijke naamwoorden en korte voornaamwoorden.",
    "meta": [
      "De/het",
      "Meervoud",
      "Voornaamwoorden"
    ],
    "exercises": [
      {
        "title": "Artikel bij pas",
        "prompt": "Kies de of het: ___ pas werkt vanaf maandag.",
        "questions": [],
        "answer": "De pas werkt vanaf maandag."
      },
      {
        "title": "Artikel bij formulier",
        "prompt": "Kies de of het: ___ formulier staat online.",
        "questions": [],
        "answer": "Het formulier staat online."
      },
      {
        "title": "Artikel bij gesprek",
        "prompt": "Kies de of het: ___ gesprek begint om drie uur.",
        "questions": [],
        "answer": "Het gesprek begint om drie uur."
      },
      {
        "title": "Artikel bij rekening",
        "prompt": "Kies de of het: ___ rekening is betaald.",
        "questions": [],
        "answer": "De rekening is betaald."
      },
      {
        "title": "Een en daarna de",
        "prompt": "Maak af: Ik koop ___ kaart. ___ kaart is voor de trein.",
        "questions": [],
        "answer": "Ik koop een kaart. De kaart is voor de trein."
      },
      {
        "title": "Meervoud van afspraak",
        "prompt": "Maak meervoud: een afspraak, twee ___.",
        "questions": [],
        "answer": "Een afspraak, twee afspraken."
      },
      {
        "title": "Meervoud van dochter",
        "prompt": "Maak meervoud: een dochter, twee ___.",
        "questions": [],
        "answer": "Een dochter, twee dochters."
      },
      {
        "title": "Meervoud van brief",
        "prompt": "Maak meervoud: een brief, drie ___.",
        "questions": [],
        "answer": "Een brief, drie brieven."
      },
      {
        "title": "Meervoud van vraag",
        "prompt": "Maak meervoud: een vraag, veel ___.",
        "questions": [],
        "answer": "Een vraag, veel vragen."
      },
      {
        "title": "Bijvoeglijk bij groene groente",
        "prompt": "Maak af: Ik koop ___ groente. (vers)",
        "questions": [],
        "answer": "Ik koop verse groente."
      },
      {
        "title": "Bijvoeglijk bij nieuw wachtwoord",
        "prompt": "Maak af: Ik maak een ___ wachtwoord. (nieuw)",
        "questions": [],
        "answer": "Ik maak een nieuw wachtwoord."
      },
      {
        "title": "Bijvoeglijk bij duidelijke uitleg",
        "prompt": "Maak af: De trainer geeft ___ uitleg. (duidelijk)",
        "questions": [],
        "answer": "De trainer geeft duidelijke uitleg."
      },
      {
        "title": "Bezittelijk: mijn gezin",
        "prompt": "Maak af: ___ gezin woont in Sterksel.",
        "questions": [],
        "answer": "Mijn gezin woont in Sterksel."
      },
      {
        "title": "Bezittelijk: haar schooltas",
        "prompt": "Maak af: Mijn dochter pakt ___ schooltas.",
        "questions": [],
        "answer": "Mijn dochter pakt haar schooltas."
      },
      {
        "title": "Bezittelijk: ons huis",
        "prompt": "Maak af: ___ huis heeft een kleine tuin.",
        "questions": [],
        "answer": "Ons huis heeft een kleine tuin."
      },
      {
        "title": "Voornaamwoord mij",
        "prompt": "Maak af: De assistente belt ___ morgen terug.",
        "questions": [],
        "answer": "De assistente belt mij morgen terug."
      },
      {
        "title": "Voornaamwoord u",
        "prompt": "Maak af: Kan ik ___ helpen?",
        "questions": [],
        "answer": "Kan ik u helpen?"
      },
      {
        "title": "Deze of die",
        "prompt": "Kies: ___ afspraak is vandaag. (dichtbij in tijd)",
        "questions": [],
        "answer": "Deze afspraak is vandaag."
      }
    ]
  },
  {
    "id": "grammar-connectors",
    "number": "10",
    "category": "Grammatica",
    "title": "Ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen geen/niet, veelgebruikte voorzetsels en zinnen met maar, want, dus, omdat, als en dat.",
    "meta": [
      "Geen/niet",
      "Voorzetsels",
      "Verbindingswoorden"
    ],
    "exercises": [
      {
        "title": "Geen bij kaart",
        "prompt": "Maak negatief: Ik heb een klantenkaart.",
        "questions": [],
        "answer": "Ik heb geen klantenkaart."
      },
      {
        "title": "Geen bij fiets",
        "prompt": "Maak negatief: Zij heeft een fiets.",
        "questions": [],
        "answer": "Zij heeft geen fiets."
      },
      {
        "title": "Geen bij vraag",
        "prompt": "Maak negatief: Wij hebben een vraag.",
        "questions": [],
        "answer": "Wij hebben geen vraag."
      },
      {
        "title": "Niet bij komen",
        "prompt": "Maak negatief: Ik kom vandaag.",
        "questions": [],
        "answer": "Ik kom vandaag niet."
      },
      {
        "title": "Niet bij open",
        "prompt": "Maak negatief: De apotheek is open.",
        "questions": [],
        "answer": "De apotheek is niet open."
      },
      {
        "title": "Niet bij een officiele brief",
        "prompt": "Maak negatief: Ik begrijp deze brief.",
        "questions": [],
        "answer": "Ik begrijp deze brief niet."
      },
      {
        "title": "Voorzetsel in dorp",
        "prompt": "Maak af: Violetta woont ___ Sterksel.",
        "questions": [],
        "answer": "Violetta woont in Sterksel."
      },
      {
        "title": "Voorzetsel op maandag",
        "prompt": "Maak af: De proefles is ___ maandag.",
        "questions": [],
        "answer": "De proefles is op maandag."
      },
      {
        "title": "Voorzetsel naar loket",
        "prompt": "Maak af: Ik ga ___ het loket.",
        "questions": [],
        "answer": "Ik ga naar het loket."
      },
      {
        "title": "Voorzetsel met gezin",
        "prompt": "Maak af: Ik reis ___ mijn gezin.",
        "questions": [],
        "answer": "Ik reis met mijn gezin."
      },
      {
        "title": "Voorzetsel voor zwemles",
        "prompt": "Maak af: Ik betaal ___ zwemles.",
        "questions": [],
        "answer": "Ik betaal voor zwemles."
      },
      {
        "title": "Voorzetsel na overleg",
        "prompt": "Maak af: ___ het overleg ga ik wandelen.",
        "questions": [],
        "answer": "Na het overleg ga ik wandelen."
      },
      {
        "title": "Maar met contrast",
        "prompt": "Maak een zin: Ik wil fietsen. Het regent hard.",
        "questions": [],
        "answer": "Ik wil fietsen, maar het regent hard."
      },
      {
        "title": "Want met uitleg",
        "prompt": "Maak een zin: Ik neem een jas mee. Het is koud.",
        "questions": [],
        "answer": "Ik neem een jas mee, want het is koud."
      },
      {
        "title": "Dus met conclusie",
        "prompt": "Maak een zin: Mijn pas is verlopen. Ik verleng hem online.",
        "questions": [],
        "answer": "Mijn pas is verlopen, dus ik verleng hem online."
      },
      {
        "title": "Omdat met werkwoord achteraan",
        "prompt": "Maak een zin: Ik bel de school. Mijn dochter is ziek.",
        "questions": [],
        "answer": "Ik bel de school omdat mijn dochter ziek is."
      },
      {
        "title": "Als met afspraak",
        "prompt": "Maak af: Ik kom als de vergadering klaar ___.",
        "questions": [],
        "answer": "Ik kom als de vergadering klaar is."
      },
      {
        "title": "Dat met mening",
        "prompt": "Maak af: Ik vind dat Nederlands oefenen belangrijk ___.",
        "questions": [],
        "answer": "Ik vind dat Nederlands oefenen belangrijk is."
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
  const key = `v005-writing-answer-${index}-${exercise.title}`;
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
