const lessons = [
  {
    "id": "reading",
    "number": "01",
    "category": "Examen",
    "title": "Lezen",
    "goal": "Lees korte praktische teksten. Let op datum, plaats, tijd, kosten en wat u zelf moet doen.",
    "meta": [
      "A2 examen",
      "Korte berichten",
      "Nieuwe v6-opgaven"
    ],
    "exercises": [
      {
        "title": "Pasfoto zonder afspraak",
        "prompt": "Bij Foto Heeze kunt u pasfoto's laten maken van maandag tot en met vrijdag. De winkel opent om 09.30 uur. Voor een Nederlands document betaalt u twaalf euro.",
        "questions": [
          "Op welke werkdagen maakt de winkel pasfoto's?",
          "Vanaf hoe laat is Foto Heeze open?",
          "Wat kost een pasfoto voor een Nederlands document?"
        ],
        "answer": "U kunt van maandag tot en met vrijdag pasfoto's laten maken. Foto Heeze opent om 09.30 uur. Een pasfoto voor een Nederlands document kost twaalf euro."
      },
      {
        "title": "Buurtcontainer bij het pleintje",
        "prompt": "De buurtcontainer voor tuinafval staat deze week bij het kleine pleintje. Gooi alleen bladeren en takken in de container. Plastic zakken moeten thuis in de juiste bak.",
        "questions": [
          "Waar staat de buurtcontainer deze week?",
          "Welke soorten afval mogen in de container?",
          "Wat doet u met plastic zakken?"
        ],
        "answer": "De buurtcontainer staat bij het kleine pleintje. Alleen bladeren en takken mogen erin. Plastic zakken moeten thuis in de juiste bak."
      },
      {
        "title": "Bericht van de zwemclub",
        "prompt": "De zwemclub traint woensdagavond niet in het diepe bad. De groep oefent deze keer in baan drie. Neem uw eigen badmuts mee.",
        "questions": [
          "Wanneer traint de zwemclub niet in het diepe bad?",
          "In welke baan oefent de groep deze keer?",
          "Wat moet u zelf meenemen?"
        ],
        "answer": "Woensdagavond traint de zwemclub niet in het diepe bad. De groep oefent in baan drie. U neemt uw eigen badmuts mee."
      },
      {
        "title": "Bus naar Eindhoven later",
        "prompt": "Door werkzaamheden rijdt bus 318 vandaag tien minuten later uit Sterksel. Stap in bij de halte aan de kerk. De tijdelijke halte bij het park vervalt.",
        "questions": [
          "Waarom rijdt bus 318 vandaag later?",
          "Hoeveel minuten later rijdt de bus?",
          "Bij welke halte stapt u nu in?"
        ],
        "answer": "De bus rijdt later door werkzaamheden. Bus 318 rijdt tien minuten later. U stapt in bij de halte aan de kerk."
      },
      {
        "title": "Sportdag van de brugklas",
        "prompt": "De brugklas heeft donderdag sportdag op het veld achter de school. Leerlingen nemen sportschoenen, lunch en een fles water mee. Ouders halen de kinderen om 15.10 uur op.",
        "questions": [
          "Waar is de sportdag van de brugklas?",
          "Welke drie dingen nemen leerlingen mee?",
          "Om welke tijd halen ouders de kinderen op?"
        ],
        "answer": "De sportdag is op het veld achter de school. Leerlingen nemen sportschoenen, lunch en water mee. Ouders halen de kinderen om 15.10 uur op."
      },
      {
        "title": "Aanbieding bij de slager",
        "prompt": "Bij Slagerij Van Dijk is kalkoenfilet deze week in de aanbieding. Een halve kilo kost zes euro. Vraag aan de medewerker of hij het vlees in dunne plakken snijdt.",
        "questions": [
          "Welk vlees is deze week in de aanbieding?",
          "Hoeveel betaalt u voor een halve kilo?",
          "Wat kunt u aan de medewerker vragen?"
        ],
        "answer": "Kalkoenfilet is in de aanbieding. Een halve kilo kost zes euro. U kunt vragen of de medewerker het vlees in dunne plakken snijdt."
      },
      {
        "title": "Nieuwe balie bij de huisartsenpraktijk",
        "prompt": "De huisartsenpraktijk heeft vanaf dinsdag een aparte balie voor korte vragen. U meldt zich daar alleen voor recepten en uitslagen. Voor een afspraak belt u nog steeds de assistente.",
        "questions": [
          "Vanaf welke dag is er een aparte balie?",
          "Voor welke twee zaken meldt u zich bij deze balie?",
          "Hoe maakt u nog steeds een afspraak?"
        ],
        "answer": "Vanaf dinsdag is er een aparte balie. U meldt zich daar voor recepten en uitslagen. Voor een afspraak belt u de assistente."
      },
      {
        "title": "Digitale zorgpolis klaar",
        "prompt": "Uw nieuwe zorgpolis staat klaar in de app van de verzekeraar. Controleer voor 1 juni uw gegevens. Wilt u een papieren polis, dan belt u de klantenservice.",
        "questions": [
          "Waar staat de nieuwe zorgpolis klaar?",
          "Voor welke datum controleert u uw gegevens?",
          "Wat doet u als u een papieren polis wilt?"
        ],
        "answer": "De nieuwe zorgpolis staat klaar in de app. U controleert uw gegevens voor 1 juni. Voor een papieren polis belt u de klantenservice."
      },
      {
        "title": "Werkplek in de bieb reserveren",
        "prompt": "In de bibliotheek kunt u een stille werkplek reserveren voor twee uur. Reserveren kan via de informatiebalie. Printen kost vijftien cent per pagina.",
        "questions": [
          "Hoe lang kunt u een stille werkplek reserveren?",
          "Waar regelt u de reservering?",
          "Wat kost printen per pagina?"
        ],
        "answer": "U kunt een stille werkplek voor twee uur reserveren. Dat regelt u bij de informatiebalie. Printen kost vijftien cent per pagina."
      },
      {
        "title": "Takken over de schutting",
        "prompt": "De takken van de boom hangen over de schutting. De buren snoeien zaterdag tussen 11.00 en 13.00 uur. Zet uw tuinstoelen even aan de kant.",
        "questions": [
          "Wat hangt over de schutting?",
          "Wanneer snoeien de buren de boom?",
          "Wat zet u even aan de kant?"
        ],
        "answer": "De takken hangen over de schutting. De buren snoeien zaterdag tussen 11.00 en 13.00 uur. U zet de tuinstoelen even aan de kant."
      },
      {
        "title": "Bladkorven in de wijk",
        "prompt": "De gemeente plaatst in oktober bladkorven in de wijk. U mag er alleen herfstbladeren in doen. Meld een volle korf via de gemeentelijke app.",
        "questions": [
          "In welke maand plaatst de gemeente bladkorven?",
          "Wat mag er alleen in de bladkorven?",
          "Hoe meldt u een volle korf?"
        ],
        "answer": "De gemeente plaatst de bladkorven in oktober. Er mogen alleen herfstbladeren in. Een volle korf meldt u via de gemeentelijke app."
      },
      {
        "title": "Weekendtas voor Antwerpen",
        "prompt": "Voor het weekend in Antwerpen neemt Violetta haar paspoort, oplader en medicijnen mee. De trein vertrekt om 08.44 uur. De hotelkamer is vanaf 15.00 uur beschikbaar.",
        "questions": [
          "Welke drie dingen neemt Violetta mee?",
          "Hoe laat vertrekt de trein naar Antwerpen?",
          "Vanaf welke tijd is de hotelkamer beschikbaar?"
        ],
        "answer": "Violetta neemt haar paspoort, oplader en medicijnen mee. De trein vertrekt om 08.44 uur. De hotelkamer is vanaf 15.00 uur beschikbaar."
      },
      {
        "title": "Fietsenstalling bij spoor twee",
        "prompt": "De fietsenstalling naast spoor twee is deze maand gratis. Gebruik wel een eigen slot. Fietsen die langer dan drie weken blijven staan, haalt de beheerder weg.",
        "questions": [
          "Welke fietsenstalling is deze maand gratis?",
          "Wat gebruikt u toch zelf?",
          "Wanneer haalt de beheerder een fiets weg?"
        ],
        "answer": "De fietsenstalling naast spoor twee is gratis. U gebruikt zelf een slot. De beheerder haalt fietsen weg die langer dan drie weken blijven staan."
      },
      {
        "title": "Ventilatie in huurwoningen",
        "prompt": "De woningcorporatie geeft maandag advies over ventilatie. De bijeenkomst is in de hal van gebouw B. Bewoners krijgen gratis een kleine vochtmeter mee.",
        "questions": [
          "Waarover geeft de woningcorporatie maandag advies?",
          "In welke ruimte is de bijeenkomst?",
          "Wat krijgen bewoners gratis mee?"
        ],
        "answer": "De woningcorporatie geeft advies over ventilatie. De bijeenkomst is in de hal van gebouw B. Bewoners krijgen een kleine vochtmeter gratis mee."
      },
      {
        "title": "Tandartsrekening betalen",
        "prompt": "De rekening van de tandarts moet binnen veertien dagen betaald zijn. Het rekeningnummer staat onderaan de brief. Bij vragen belt u op werkdagen voor 12.00 uur.",
        "questions": [
          "Binnen hoeveel dagen moet de rekening betaald zijn?",
          "Waar staat het rekeningnummer?",
          "Wanneer kunt u bellen met vragen?"
        ],
        "answer": "De rekening moet binnen veertien dagen betaald zijn. Het rekeningnummer staat onderaan de brief. Met vragen belt u op werkdagen voor 12.00 uur."
      },
      {
        "title": "AI-avond voor ondernemers",
        "prompt": "Op donderdag organiseert het dorpshuis een AI-avond voor kleine ondernemers. De uitleg begint om 19.30 uur. Neem uw laptop mee als u zelf wilt oefenen.",
        "questions": [
          "Voor wie is de AI-avond bedoeld?",
          "Hoe laat begint de uitleg?",
          "Wat neemt u mee als u zelf wilt oefenen?"
        ],
        "answer": "De AI-avond is voor kleine ondernemers. De uitleg begint om 19.30 uur. U neemt uw laptop mee als u zelf wilt oefenen."
      },
      {
        "title": "Zondaglunch met familie",
        "prompt": "De familie komt zondag om 13.00 uur lunchen. Iedereen neemt iets mee. Violetta maakt warme groenten en haar man haalt brood bij de bakker.",
        "questions": [
          "Wanneer komt de familie lunchen?",
          "Wat maakt Violetta voor de lunch?",
          "Wie haalt brood bij de bakker?"
        ],
        "answer": "De familie komt zondag om 13.00 uur lunchen. Violetta maakt warme groenten. Haar man haalt brood bij de bakker."
      },
      {
        "title": "Mini-examen afspraak bevestigen",
        "prompt": "In de e-mail staat: bevestig uw afspraak uiterlijk morgen via de link in dit bericht.",
        "questions": [
          "Kies het goede antwoord: A. U moet morgen naar de bakker. B. U moet de afspraak via de link bevestigen. C. U hoeft de e-mail niet te lezen."
        ],
        "answer": "B. U moet de afspraak via de link bevestigen."
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
        "title": "Inschrijving voor sportavond",
        "prompt": "Vul een kort formulier in voor een sportavond in het buurthuis. Schrijf uw naam, telefoonnummer, sport en waarom u wilt meedoen.",
        "questions": [],
        "answer": "Naam: Violetta Bonenkamp\nTelefoonnummer: 06-12345678\nSport: zwemmen en wandelen\nIk wil meedoen omdat ik graag gezond blijf en nieuwe mensen ontmoet."
      },
      {
        "title": "Gemeenteafspraak naar de middag",
        "prompt": "Schrijf een e-mail aan de gemeente. U heeft om 09.00 uur een afspraak, maar u wilt liever na 14.00 uur komen.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nIk heb om 09.00 uur een afspraak bij de gemeente. Kan ik de afspraak verzetten naar een tijd na 14.00 uur?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Buurvrouw vragen om de ladder",
        "prompt": "Schrijf een kort bericht aan uw buurvrouw. U wilt zaterdag haar ladder lenen en u brengt de ladder dezelfde dag terug.",
        "questions": [],
        "answer": "Hoi buurvrouw,\n\nMag ik zaterdag uw ladder lenen? Ik breng de ladder dezelfde dag terug.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Vraag over ouderavond",
        "prompt": "Schrijf aan de school van uw dochter. Vraag waar de ouderavond is en hoe laat de deur open is.",
        "questions": [],
        "answer": "Beste school,\n\nKunt u mij vertellen waar de ouderavond is? Hoe laat gaat de deur open?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Verkeerde groentetas melden",
        "prompt": "U heeft online boodschappen besteld. In de tas zitten verkeerde groenten. Schrijf een korte klacht aan de supermarkt.",
        "questions": [],
        "answer": "Beste klantenservice,\n\nIk heb online boodschappen besteld, maar in mijn tas zitten verkeerde groenten. Kunt u dit oplossen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Controle bij huisarts annuleren",
        "prompt": "Schrijf een bericht aan de huisartsenpraktijk. U kunt vrijdag niet naar de controle en u wilt een nieuwe datum.",
        "questions": [],
        "answer": "Beste assistente,\n\nIk kan vrijdag niet naar mijn controle komen. Kunt u mij een nieuwe datum geven?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag over zorgpremie",
        "prompt": "Schrijf aan uw zorgverzekeraar. U wilt weten waarom de premie hoger is geworden.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nMijn zorgpremie is hoger geworden. Kunt u uitleggen waarom ik meer moet betalen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Computer in de bibliotheek reserveren",
        "prompt": "Schrijf een e-mail aan de bibliotheek. U wilt woensdagmiddag een computer gebruiken voor een online formulier.",
        "questions": [],
        "answer": "Beste bibliotheek,\n\nKan ik woensdagmiddag een computer reserveren? Ik wil een online formulier invullen.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Tekst over wandelen met podcast",
        "prompt": "Schrijf vier korte zinnen over een wandeling. Vertel waar u loopt, waarnaar u luistert en waarom u dat prettig vindt.",
        "questions": [],
        "answer": "Ik wandel graag in de buurt van Sterksel. Tijdens het wandelen luister ik naar een podcast. Ik leer graag iets over technologie. Wandelen geeft mij rust."
      },
      {
        "title": "Zwemles deze week overslaan",
        "prompt": "Schrijf een kort bericht aan de zwemtrainer. U komt deze week niet, omdat u een familieafspraak heeft.",
        "questions": [],
        "answer": "Hoi trainer,\n\nIk kom deze week niet naar zwemles. Ik heb dan een familieafspraak.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Aanmelden voor ondernemersavond",
        "prompt": "Schrijf aan de organisatie van een ondernemersavond. U wilt komen en u vraagt of u uw laptop moet meenemen.",
        "questions": [],
        "answer": "Beste organisatie,\n\nIk wil graag naar de ondernemersavond komen. Moet ik mijn laptop meenemen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Verloren OV-kaart melden",
        "prompt": "Schrijf een bericht aan de klantenservice van het openbaar vervoer. U bent uw kaart kwijtgeraakt in de trein.",
        "questions": [],
        "answer": "Beste klantenservice,\n\nIk ben mijn OV-kaart kwijtgeraakt in de trein. Kunt u mij vertellen wat ik nu moet doen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Verwarming maakt lawaai",
        "prompt": "Schrijf een reparatieverzoek aan de woningcorporatie. De verwarming maakt veel lawaai in de avond.",
        "questions": [],
        "answer": "Beste meneer/mevrouw,\n\nMijn verwarming maakt in de avond veel lawaai. Kunt u een monteur sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Antwoord op barbecue-uitnodiging",
        "prompt": "Een buurman nodigt u uit voor een barbecue. U komt graag en u neemt salade mee. Schrijf een antwoord.",
        "questions": [],
        "answer": "Hoi buurman,\n\nDank je voor de uitnodiging. Ik kom graag naar de barbecue en ik neem salade mee.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Korte tekst over AI-werkdag",
        "prompt": "Schrijf vijf korte zinnen over uw werkdag thuis. Gebruik de woorden laptop, klant, artikel, pauze en gezin.",
        "questions": [],
        "answer": "Ik werk thuis op mijn laptop. In de ochtend mail ik een klant. Daarna schrijf ik een artikel. In de middag neem ik pauze. Na het werk eet ik met mijn gezin."
      },
      {
        "title": "Briefje voor uw dochter",
        "prompt": "Schrijf een kort briefje voor uw dochter. Vertel dat haar lunch in de koelkast staat en dat zij haar fietssleutel moet meenemen.",
        "questions": [],
        "answer": "Lieve dochter,\n\nJe lunch staat in de koelkast. Neem ook je fietssleutel mee naar school.\n\nLiefs,\nMama"
      },
      {
        "title": "Late aankomst bij hotel",
        "prompt": "Schrijf een e-mail aan een hotel. U komt vrijdag pas na 21.00 uur aan en u vraagt of dat goed is.",
        "questions": [],
        "answer": "Beste hotel,\n\nWij komen vrijdag pas na 21.00 uur aan. Is dat goed?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Afvalkalender aanvragen",
        "prompt": "Schrijf aan de gemeente. U wilt de afvalkalender voor uw straat ontvangen.",
        "questions": [],
        "answer": "Beste gemeente,\n\nIk wil graag de afvalkalender voor mijn straat ontvangen. Kunt u die naar mij sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      }
    ]
  },
  {
    "id": "speaking",
    "number": "03",
    "category": "Examen",
    "title": "Spreken",
    "goal": "Spreek hardop in korte, duidelijke zinnen. Geef antwoord op persoonlijke en praktische vragen.",
    "meta": [
      "Mondeling examen",
      "Korte antwoorden",
      "Met afbeeldingen"
    ],
    "exercises": [
      {
        "title": "AI-examinator voor korte antwoorden",
        "prompt": "Start een spraaktool en zeg: stel mij vijf korte A2-vragen over dagelijks leven in Nederland.",
        "questions": [],
        "answer": "U bent mijn Nederlandse A2-examinator. Stel vijf korte vragen over wonen, afspraken, vervoer, gezondheid en werk. Wacht steeds op mijn antwoord."
      },
      {
        "title": "Waarom Nederlands oefenen",
        "prompt": "Vertel waarom u Nederlands oefent voor het inburgeringsexamen.",
        "questions": [],
        "answer": "Ik oefen Nederlands omdat ik beter wil praten met mensen in Nederland. Ik wil ook slagen voor mijn inburgeringsexamen."
      },
      {
        "title": "Ochtend thuis in Sterksel",
        "prompt": "Vertel wat u meestal in de ochtend thuis doet.",
        "questions": [],
        "answer": "In de ochtend drink ik koffie en lees ik berichten. Daarna werk ik aan mijn bedrijf op mijn laptop."
      },
      {
        "title": "Rustig dorp beschrijven",
        "prompt": "Beschrijf kort hoe het is om in Sterksel te wonen.",
        "questions": [],
        "answer": "Sterksel is een rustig dorp in Noord-Brabant. Ik vind het prettig omdat ik kan wandelen en fietsen."
      },
      {
        "title": "Uw werk met technologie",
        "prompt": "Vertel in twee of drie zinnen wat u doet als ondernemer.",
        "questions": [],
        "answer": "Ik ben ondernemer en werk veel met technologie en AI. Ik praat online met klanten en schrijf artikelen."
      },
      {
        "title": "Gezonde lunch maken",
        "prompt": "Vertel wat u maakt voor een gezonde lunch.",
        "questions": [],
        "answer": "Ik maak vaak een lunch met groenten, kip of eieren. Ik drink water en eet soms fruit erbij."
      },
      {
        "title": "Vraag aan de huisartsassistente",
        "prompt": "U belt de huisartsenpraktijk. Vraag om een korte afspraak voor controle.",
        "questions": [],
        "answer": "Goedemorgen, ik wil graag een korte afspraak voor controle maken. Heeft u deze week nog plek?"
      },
      {
        "title": "Dochter ziek melden",
        "prompt": "Bel de school. Zeg dat uw dochter vandaag ziek thuis blijft.",
        "questions": [],
        "answer": "Goedemorgen, mijn dochter is vandaag ziek. Zij blijft thuis en komt morgen waarschijnlijk weer naar school."
      },
      {
        "title": "Vlees kiezen in de winkel",
        "prompt": "U staat bij de slager. Vraag om vlees voor het avondeten.",
        "questions": [],
        "answer": "Goedemiddag, ik wil graag kipfilet voor vier personen. Kunt u het in kleine stukken snijden?"
      },
      {
        "title": "Rust vragen aan de buren",
        "prompt": "De buren maken laat geluid. Vraag beleefd of het zachter kan.",
        "questions": [],
        "answer": "Goedenavond, het geluid is erg hard. Kunt u het alstublieft iets zachter zetten?"
      },
      {
        "title": "Met de trein reizen",
        "prompt": "Vertel hoe u met de trein naar Eindhoven gaat.",
        "questions": [],
        "answer": "Ik kijk eerst in de reisapp. Daarna koop ik een kaartje of check ik in met mijn betaalpas."
      },
      {
        "title": "Afspraak aan het loket",
        "prompt": "U bent bij de gemeente. Vertel waarvoor u komt.",
        "questions": [],
        "answer": "Goedemiddag, ik heb een afspraak voor mijn paspoort. Ik heb mijn oude document en pasfoto's bij me."
      },
      {
        "title": "Brief van zorgverzekering",
        "prompt": "Vertel wat u doet als u een moeilijke brief van de zorgverzekering krijgt.",
        "questions": [],
        "answer": "Ik lees de brief rustig. Als ik het niet begrijp, bel ik de klantenservice of vraag ik mijn man om hulp."
      },
      {
        "title": "Fietsroute naar het zwembad",
        "prompt": "Leg uit hoe u met de fiets naar het zwembad gaat.",
        "questions": [],
        "answer": "Ik fiets eerst door het dorp. Daarna volg ik het fietspad en zet ik mijn fiets bij de ingang."
      },
      {
        "title": "Computer in de bibliotheek",
        "prompt": "Vraag in de bibliotheek of u een computer mag gebruiken.",
        "questions": [],
        "answer": "Goedemiddag, mag ik vandaag een computer gebruiken? Ik wil een formulier online invullen."
      },
      {
        "title": "Zwemrooster vragen",
        "prompt": "Vraag bij de balie van het zwembad hoe laat het banen zwemmen begint.",
        "questions": [],
        "answer": "Goedemiddag, hoe laat begint het banen zwemmen vandaag? En moet ik vooraf reserveren?"
      },
      {
        "title": "Reis met het gezin",
        "prompt": "Vertel waar u graag met uw gezin naartoe reist.",
        "questions": [],
        "answer": "Ik reis graag met mijn gezin naar een warme stad. We bezoeken musea, lopen veel en eten samen."
      },
      {
        "title": "Avondeten voorbereiden",
        "prompt": "Vertel wat u vanavond gaat koken.",
        "questions": [],
        "answer": "Vanavond kook ik vlees met groenten. Ik maak ook een salade en misschien wat aardappelen."
      },
      {
        "title": "Gesprek met ondernemer",
        "prompt": "U ontmoet een andere ondernemer. Vertel kort wie u bent en stel een vraag.",
        "questions": [],
        "answer": "Hallo, ik ben Violetta en ik heb een startup. Ik werk met AI. Wat voor bedrijf heeft u?"
      },
      {
        "title": "Zorgbrief aan de keukentafel",
        "prompt": "Kijk naar de afbeelding. Vertel wat u ziet en wat u daarna doet.",
        "questions": [],
        "answer": "Ik zie een brief van de zorgverzekering op tafel. Ik lees de brief rustig en controleer de datum.",
        "image": "images/speaking/v006-speaking-health-insurance-letter-azure15.png"
      },
      {
        "title": "Praten bij het tuinhek",
        "prompt": "Kijk naar de afbeelding. Maak een kort gesprek met een buurvrouw.",
        "questions": [],
        "answer": "Goedemiddag, hoe gaat het? Uw tuin ziet er netjes uit. Zullen we zaterdag even praten over de schutting?",
        "image": "images/speaking/v006-speaking-neighbor-garden-chat-azure15.png"
      },
      {
        "title": "Hulp bij bibliotheekcomputer",
        "prompt": "Kijk naar de afbeelding. Vraag om hulp bij de computer.",
        "questions": [],
        "answer": "Pardon, kunt u mij helpen met deze computer? Ik wil inloggen en een formulier invullen.",
        "image": "images/speaking/v006-speaking-library-computer-help-azure15.png"
      },
      {
        "title": "Schoolplein in de regen",
        "prompt": "Kijk naar de afbeelding. Vertel wat er gebeurt op het schoolplein.",
        "questions": [],
        "answer": "Ik zie ouders en kinderen op het schoolplein. Het regent, dus iedereen heeft een jas of paraplu.",
        "image": "images/speaking/v006-speaking-school-pickup-rain-azure15.png"
      },
      {
        "title": "Fiets bij het perron",
        "prompt": "Kijk naar de afbeelding. Vertel hoe u verder reist.",
        "questions": [],
        "answer": "Ik zet mijn fiets in de stalling en loop naar het perron. Daarna neem ik de trein naar de stad.",
        "image": "images/speaking/v006-speaking-train-platform-bike-azure15.png"
      },
      {
        "title": "Koken met groenten en vlees",
        "prompt": "Kijk naar de afbeelding. Vertel wat u klaarmaakt.",
        "questions": [],
        "answer": "Ik maak avondeten met groenten en vlees. Ik snijd paprika en courgette en bak alles in de pan.",
        "image": "images/speaking/v006-speaking-kitchen-vegetables-meat-azure15.png"
      },
      {
        "title": "Uitleg bij de apotheek",
        "prompt": "Vraag bij de apotheek hoe u een nieuw medicijn moet gebruiken.",
        "questions": [],
        "answer": "Goedemiddag, ik heb een nieuw medicijn gekregen. Kunt u uitleggen hoe vaak ik het moet gebruiken?"
      },
      {
        "title": "Sportplan voor deze week",
        "prompt": "Vertel welke beweging u deze week gaat doen.",
        "questions": [],
        "answer": "Deze week wil ik twee keer zwemmen en drie keer wandelen. Als het droog is, ga ik ook fietsen."
      },
      {
        "title": "Sterk punt voor het examen",
        "prompt": "Vertel wat al goed gaat bij het oefenen en wat u nog moeilijk vindt.",
        "questions": [],
        "answer": "Lezen gaat steeds beter, omdat ik rustig naar de informatie zoek. Spreken vind ik nog moeilijk, dus ik oefen hardop."
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
        "title": "AI-luisterronde met drie vragen",
        "prompt": "Start een spraaktool en vraag om een kort A2-luisterbericht over afspraken, vervoer of gezondheid.",
        "questions": [],
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees een kort bericht langzaam voor. Stel daarna drie vragen over tijd, plaats en actie."
      },
      {
        "title": "Gemeenteafspraak vervroegd",
        "audio": "audio/v006-listening-01-gemeente-afspraak-vervroegd.mp3",
        "questions": [
          "Wanneer kan de afspraak bij de gemeente doorgaan?",
          "Hoe laat is de afspraak volgens het bericht?",
          "Welke twee dingen neemt mevrouw Bonenkamp mee?"
        ],
        "answer": "De afspraak kan morgen doorgaan. De afspraak is om half elf. Zij neemt haar paspoort en de afspraakbrief mee.",
        "prompt": "Goedemorgen mevrouw Bonenkamp. Uw afspraak bij de gemeente kan morgen om half elf doorgaan. Neem uw paspoort en de afspraakbrief mee."
      },
      {
        "title": "Bloeddruk bij de huisarts",
        "audio": "audio/v006-listening-02-huisarts-bloeddrukcontrole.mp3",
        "questions": [
          "Voor welke controle komt u vrijdag?",
          "Moet u nuchter zijn voor deze afspraak?",
          "Bij welke kamer meldt u zich?"
        ],
        "answer": "U komt voor een bloeddrukcontrole. U hoeft niet nuchter te zijn. U meldt zich bij kamer twee.",
        "prompt": "De assistente vraagt of u vrijdag om kwart over tien komt voor een bloeddrukcontrole. U hoeft niet nuchter te zijn. Meld u bij kamer twee."
      },
      {
        "title": "Ouderavond in lokaal zes",
        "audio": "audio/v006-listening-03-school-ouderavond-lokaal.mp3",
        "questions": [
          "Op welke avond is de ouderavond?",
          "In welk lokaal is het gesprek met de mentor?",
          "Waar wachten de ouders eerst?"
        ],
        "answer": "De ouderavond is dinsdag. Het gesprek is in lokaal zes. De ouders wachten eerst beneden.",
        "prompt": "Beste ouders, de ouderavond begint dinsdag om zeven uur. Het gesprek met de mentor is in lokaal zes. Wacht beneden tot de docent u ophaalt."
      },
      {
        "title": "Boodschappen later bezorgd",
        "audio": "audio/v006-listening-04-supermarkt-bezorgmoment.mp3",
        "questions": [
          "Tussen welke tijden worden de boodschappen bezorgd?",
          "Wanneer belt de chauffeur?",
          "Wat zet u alvast bij de voordeur?"
        ],
        "answer": "De boodschappen komen tussen vijf en zes. De chauffeur belt vijf minuten voor aankomst. U zet lege kratten bij de voordeur.",
        "prompt": "Uw boodschappen worden vandaag tussen vijf en zes bezorgd. De chauffeur belt vijf minuten voor aankomst. Zet lege kratten alvast bij de voordeur."
      },
      {
        "title": "Bus rijdt om via de markt",
        "audio": "audio/v006-listening-05-bus-omleiding-markt.mp3",
        "questions": [
          "Waarom rijdt bus 21 vandaag om?",
          "Welke halte is gesloten?",
          "Waar kunt u nu instappen?"
        ],
        "answer": "Bus 21 rijdt om door de markt in het centrum. De halte bij het postkantoor is gesloten. U stapt in bij de bibliotheek.",
        "prompt": "Let op: bus 21 rijdt vandaag om door de markt in het centrum. De halte bij het postkantoor is gesloten. Stap in bij de bibliotheek."
      },
      {
        "title": "Sleutelcode voor werkruimte",
        "audio": "audio/v006-listening-06-werkruimte-sleutelcode.mp3",
        "questions": [
          "Vanaf hoe laat is de werkruimte morgen open?",
          "Waar staat de sleutelcode?",
          "Wat doet u als u als laatste weggaat?"
        ],
        "answer": "De werkruimte is vanaf acht uur open. De sleutelcode staat in de e-mail. Als laatste sluit u de deur goed.",
        "prompt": "De stille werkruimte is morgen vanaf acht uur open. De sleutelcode staat in de e-mail. Sluit de deur goed als u als laatste weggaat."
      },
      {
        "title": "Zomerrooster bij het zwembad",
        "audio": "audio/v006-listening-07-zwembad-zomerrooster.mp3",
        "questions": [
          "Hoe laat begint banen zwemmen in de zomervakantie?",
          "Op welke dag is het bad dicht?",
          "Waar koopt u een los kaartje?"
        ],
        "answer": "Banen zwemmen begint om zeven uur in de ochtend. Op zondag is het bad dicht. Een los kaartje koopt u aan de balie.",
        "prompt": "In de zomervakantie begint banen zwemmen om zeven uur in de ochtend. Op zondag is het bad dicht. Een los kaartje koopt u aan de balie."
      },
      {
        "title": "Tuinfeest bij de buren",
        "audio": "audio/v006-listening-08-buren-tuinfeest-eindtijd.mp3",
        "questions": [
          "Wat vieren de buren zaterdag?",
          "Hoe laat stopt de muziek?",
          "Wat kan Violetta doen als zij last heeft?"
        ],
        "answer": "De buren vieren een verjaardag. De muziek stopt om tien uur. Violetta kan gerust een bericht sturen.",
        "prompt": "Hallo buurvrouw, zaterdag vieren wij een verjaardag in de tuin. De muziek stopt om tien uur. Als u last heeft, stuur dan gerust een bericht."
      },
      {
        "title": "Verwarming wordt nagekeken",
        "audio": "audio/v006-listening-09-woningcorporatie-verwarming.mp3",
        "questions": [
          "Wat komt de monteur maandagmiddag nakijken?",
          "Tussen welke tijden komt de monteur?",
          "Welke plek moet bereikbaar zijn?"
        ],
        "answer": "De monteur komt de verwarming nakijken. Hij komt tussen twee en vier uur. De meterkast moet bereikbaar zijn.",
        "prompt": "De monteur van de woningcorporatie komt maandagmiddag de verwarming nakijken. Hij komt tussen twee en vier uur. Zorg dat de meterkast bereikbaar is."
      },
      {
        "title": "Betaling zorgverzekering spreiden",
        "audio": "audio/v006-listening-10-zorgverzekering-betaalregeling.mp3",
        "questions": [
          "In hoeveel delen kan de rekening betaald worden?",
          "Voor welke datum betaalt u het eerste deel?",
          "Wat doet u als u hulp nodig heeft?"
        ],
        "answer": "De rekening kan in twee delen betaald worden. Het eerste deel betaalt u voor 20 mei. Als u hulp nodig heeft, belt u de zorgverzekering.",
        "prompt": "U kunt de rekening van de zorgverzekering in twee delen betalen. Het eerste deel betaalt u voor 20 mei. Bel ons als u hulp nodig heeft."
      },
      {
        "title": "Taalspreekuur in de bibliotheek",
        "audio": "audio/v006-listening-11-bibliotheek-taalspreekuur.mp3",
        "questions": [
          "Op welke dag is er taalspreekuur?",
          "Is vooraf reserveren nodig?",
          "Wat neemt u mee naar het taalspreekuur?"
        ],
        "answer": "Het taalspreekuur is elke woensdag. U hoeft geen afspraak te maken. U neemt een moeilijke brief mee.",
        "prompt": "Elke woensdag is er taalspreekuur in de bibliotheek. U kunt zonder afspraak komen tussen twee en vier. Neem een brief mee die u moeilijk vindt."
      },
      {
        "title": "Familie blijft eten",
        "audio": "audio/v006-listening-12-familie-komt-eten.mp3",
        "questions": [
          "Wie blijven vanavond thuis eten?",
          "Wat maakt Violetta voor het eten?",
          "Wie dekt om zes uur de tafel?"
        ],
        "answer": "De dochters en hun vader blijven thuis eten. Violetta maakt kip met groenten. De oudste dochter dekt de tafel.",
        "prompt": "Vanavond blijven de dochters en hun vader thuis eten. Violetta maakt kip met groenten. De oudste dochter dekt om zes uur de tafel."
      },
      {
        "title": "Accu ophalen bij fietsenmaker",
        "audio": "audio/v006-listening-13-fietsenmaker-accu-ophalen.mp3",
        "questions": [
          "Wat is klaar bij de fietsenmaker?",
          "Wanneer kunt u de accu ophalen?",
          "Waarom neemt u de bon mee?"
        ],
        "answer": "De fietsaccu is klaar. U kunt hem donderdag na drie uur ophalen. U neemt de bon mee omdat daarop het reparatienummer staat.",
        "prompt": "Uw fietsaccu is klaar bij de fietsenmaker. U kunt hem donderdag na drie uur ophalen. Neem de bon mee, want daarop staat het reparatienummer."
      },
      {
        "title": "Uitleg over inhaler",
        "audio": "audio/v006-listening-14-apotheek-inhaler-uitleg.mp3",
        "questions": [
          "Hoe vaak per dag gebruikt u de inhaler?",
          "Wat doet u daarna met water?",
          "Wanneer komt u terug naar de apotheek?"
        ],
        "answer": "U gebruikt de inhaler twee keer per dag. Daarna spoelt u uw mond met water. U komt terug als u duizelig wordt.",
        "prompt": "De apotheker legt uit dat u de inhaler twee keer per dag gebruikt. Spoel daarna uw mond met water. Kom terug als u duizelig wordt."
      },
      {
        "title": "Wandeling met sportgroep",
        "audio": "audio/v006-listening-15-sportgroep-wandeling.mp3",
        "questions": [
          "Hoeveel kilometer wandelt de sportgroep?",
          "Waar verzamelt de groep om negen uur?",
          "Welke schoenen trekt u aan?"
        ],
        "answer": "De sportgroep wandelt tien kilometer. De groep verzamelt bij het buurthuis. U trekt stevige schoenen aan.",
        "prompt": "De sportgroep wandelt zaterdag tien kilometer door het bos. We verzamelen om negen uur bij het buurthuis. Trek stevige schoenen aan."
      },
      {
        "title": "Trein naar Utrecht gewijzigd",
        "audio": "audio/v006-listening-16-treinreis-utrecht.mp3",
        "questions": [
          "Van welk spoor vertrekt de trein vandaag?",
          "Welke vertrektijd blijft hetzelfde?",
          "Waar moet u goed op kijken?"
        ],
        "answer": "De trein vertrekt vandaag van spoor vier. De vertrektijd blijft 11.18 uur. U kijkt goed op de borden.",
        "prompt": "De trein naar Utrecht vertrekt vandaag van spoor vier in plaats van spoor twee. De vertrektijd blijft 11.18 uur. Kijk goed op de borden."
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
        "title": "Identiteitsbewijs laten zien",
        "prompt": "Wanneer moet u vaak een identiteitsbewijs kunnen laten zien?",
        "questions": [
          "A. Alleen als u brood koopt",
          "B. Bij overheid, bank of zorg als men erom vraagt",
          "C. Nooit in Nederland"
        ],
        "answer": "B. Bij overheid, bank of zorg als men erom vraagt."
      },
      {
        "title": "Paspoort aanvragen",
        "prompt": "Waar vraagt u meestal een Nederlands paspoort of ID-kaart aan?",
        "questions": [
          "A. Bij de supermarktbalie",
          "B. Bij de zwemclub",
          "C. Bij de gemeente"
        ],
        "answer": "C. Bij de gemeente."
      },
      {
        "title": "Verwijzing naar specialist",
        "prompt": "U wilt naar een medisch specialist. Wie regelt meestal eerst een verwijzing?",
        "questions": [
          "A. De huisarts",
          "B. De buurman",
          "C. De treinconducteur"
        ],
        "answer": "A. De huisarts."
      },
      {
        "title": "Noodnummer gebruiken",
        "prompt": "Wanneer belt u 112?",
        "questions": [
          "A. Voor een gewone afspraak",
          "B. Bij direct gevaar of spoed",
          "C. Voor openingstijden van de winkel"
        ],
        "answer": "B. Bij direct gevaar of spoed."
      },
      {
        "title": "Zorgverzekering afsluiten",
        "prompt": "Wat is waar over de basisverzekering voor zorg?",
        "questions": [
          "A. Volwassenen moeten een basisverzekering hebben",
          "B. Alle zorg is altijd gratis",
          "C. U sluit die alleen af als u ziek bent"
        ],
        "answer": "A. Volwassenen moeten een basisverzekering hebben."
      },
      {
        "title": "Eigen bijdrage begrijpen",
        "prompt": "Wat betekent eigen bijdrage vaak?",
        "questions": [
          "A. De gemeente betaalt alles",
          "B. U krijgt altijd geld terug",
          "C. U betaalt zelf een deel van sommige kosten"
        ],
        "answer": "C. U betaalt zelf een deel van sommige kosten."
      },
      {
        "title": "Kind naar school",
        "prompt": "Wat geldt voor kinderen in Nederland?",
        "questions": [
          "A. School is alleen voor kinderen met werkende ouders",
          "B. Kinderen kiezen elke dag zelf of zij gaan",
          "C. Kinderen moeten naar school volgens de leerplicht"
        ],
        "answer": "C. Kinderen moeten naar school volgens de leerplicht."
      },
      {
        "title": "Zorgen over schoolresultaten",
        "prompt": "Met wie praat u eerst als u zorgen heeft over schoolresultaten?",
        "questions": [
          "A. Met de mentor of leerkracht",
          "B. Met de buschauffeur",
          "C. Met de bakker"
        ],
        "answer": "A. Met de mentor of leerkracht."
      },
      {
        "title": "Afspraken op het werk",
        "prompt": "Waar staan vaak afspraken over loon, uren en vakantie?",
        "questions": [
          "A. Op een boodschappenbon",
          "B. In een arbeidscontract of cao",
          "C. In een reisfolder"
        ],
        "answer": "B. In een arbeidscontract of cao."
      },
      {
        "title": "Minimumloon",
        "prompt": "Wat beschermt het wettelijk minimumloon?",
        "questions": [
          "A. De kleur van bedrijfskleding",
          "B. De prijs van koffie",
          "C. Het laagste loon dat een werknemer minimaal krijgt"
        ],
        "answer": "C. Het laagste loon dat een werknemer minimaal krijgt."
      },
      {
        "title": "Belastingaangifte bewaren",
        "prompt": "Wat is verstandig met belangrijke papieren voor belasting?",
        "questions": [
          "A. Meteen weggooien",
          "B. Netjes bewaren en op tijd reageren",
          "C. Aan de buren geven"
        ],
        "answer": "B. Netjes bewaren en op tijd reageren."
      },
      {
        "title": "Huurcontract controleren",
        "prompt": "Wat controleert u in een huurcontract?",
        "questions": [
          "A. Rechten, plichten en afspraken over de woning",
          "B. Een recept voor medicijnen",
          "C. De vertrektijden van bussen"
        ],
        "answer": "A. Rechten, plichten en afspraken over de woning."
      },
      {
        "title": "Brandveilig koken",
        "prompt": "Wat doet u voor brandveiligheid tijdens het koken?",
        "questions": [
          "A. U blijft in de buurt van het fornuis",
          "B. U hangt handdoeken boven het vuur",
          "C. U zet de rookmelder uit"
        ],
        "answer": "A. U blijft in de buurt van het fornuis."
      },
      {
        "title": "Afval scheiden thuis",
        "prompt": "Waarom scheiden veel mensen afval?",
        "questions": [
          "A. Omdat de bus dan sneller rijdt",
          "B. Omdat de huisarts dat altijd vraagt",
          "C. Omdat materialen opnieuw gebruikt kunnen worden"
        ],
        "answer": "C. Omdat materialen opnieuw gebruikt kunnen worden."
      },
      {
        "title": "Fiets in het donker",
        "prompt": "Wat is verplicht en veilig als u in het donker fietst?",
        "questions": [
          "A. Een paraplu op het stuur",
          "B. Goede fietsverlichting",
          "C. Een open jas"
        ],
        "answer": "B. Goede fietsverlichting."
      },
      {
        "title": "Inchecken in het openbaar vervoer",
        "prompt": "Wat doet u meestal bij reizen met ov-chipkaart of betaalpas?",
        "questions": [
          "A. Inchecken aan het begin en uitchecken aan het einde",
          "B. Alleen zwaaien naar de chauffeur",
          "C. Uw jas in de bus laten"
        ],
        "answer": "A. Inchecken aan het begin en uitchecken aan het einde."
      },
      {
        "title": "Kiezen voor de gemeente",
        "prompt": "Wie mag meestal stemmen voor de gemeenteraad?",
        "questions": [
          "A. Alle toeristen in de stad",
          "B. Inwoners die stemrecht hebben",
          "C. Alleen kinderen op school"
        ],
        "answer": "B. Inwoners die stemrecht hebben."
      },
      {
        "title": "Discriminatie herkennen",
        "prompt": "Welke situatie past bij gelijke behandeling?",
        "questions": [
          "A. Mensen weigeren door hun afkomst",
          "B. Alleen vrienden helpen",
          "C. Mensen eerlijk behandelen en niet buitensluiten"
        ],
        "answer": "C. Mensen eerlijk behandelen en niet buitensluiten."
      },
      {
        "title": "Persoonsgegevens delen",
        "prompt": "Wat doet u met uw persoonsgegevens online?",
        "questions": [
          "A. Altijd overal invullen",
          "B. Alleen delen als het nodig en vertrouwd is",
          "C. Aan onbekenden doorsturen"
        ],
        "answer": "B. Alleen delen als het nodig en vertrouwd is."
      },
      {
        "title": "DigiD veilig gebruiken",
        "prompt": "Waarvoor gebruikt u DigiD?",
        "questions": [
          "A. Veilig inloggen bij overheid en sommige zorgzaken",
          "B. Korting bij de markt",
          "C. Een fietsband oppompen"
        ],
        "answer": "A. Veilig inloggen bij overheid en sommige zorgzaken."
      },
      {
        "title": "Helpen bij een vereniging",
        "prompt": "Wat bedoelt men vaak met vrijwillig helpen?",
        "questions": [
          "A. Werk waarvoor u altijd veel loon krijgt",
          "B. Een examen bij de tandarts",
          "C. Onbetaald helpen bij een organisatie of activiteit"
        ],
        "answer": "C. Onbetaald helpen bij een organisatie of activiteit."
      },
      {
        "title": "Mantelzorg",
        "prompt": "Wat is mantelzorg?",
        "questions": [
          "A. Zorg voor familie of bekende zonder dat dit uw beroep is",
          "B. Een abonnement op de trein",
          "C. Een formulier voor afval"
        ],
        "answer": "A. Zorg voor familie of bekende zonder dat dit uw beroep is."
      },
      {
        "title": "Burenoverlast oplossen",
        "prompt": "Wat is vaak een goede eerste stap bij lichte burenoverlast?",
        "questions": [
          "A. Meteen de woning verkopen",
          "B. Rustig praten met de buren",
          "C. Nooit meer thuis zijn"
        ],
        "answer": "B. Rustig praten met de buren."
      },
      {
        "title": "Gezonde keuzes",
        "prompt": "Welke keuze past bij gezond leven?",
        "questions": [
          "A. Elke dag alleen snoep eten",
          "B. Nooit bewegen",
          "C. Regelmatig bewegen en gevarieerd eten"
        ],
        "answer": "C. Regelmatig bewegen en gevarieerd eten."
      },
      {
        "title": "Zuinig omgaan met energie",
        "prompt": "Welke gewoonte gebruikt minder stroom?",
        "questions": [
          "A. Lampen uitdoen in lege kamers",
          "B. Alle ramen open laten bij verwarming",
          "C. De koelkast open laten staan"
        ],
        "answer": "A. Lampen uitdoen in lege kamers."
      },
      {
        "title": "Toeslag voor opvang",
        "prompt": "Waarbij kan kinderopvangtoeslag helpen?",
        "questions": [
          "A. Bij gratis treinreizen",
          "B. Bij een deel van de kosten van kinderopvang",
          "C. Bij het kopen van meubels"
        ],
        "answer": "B. Bij een deel van de kosten van kinderopvang."
      },
      {
        "title": "Aangifte bij diefstal",
        "prompt": "Waar doet u aangifte van diefstal?",
        "questions": [
          "A. Bij de groenteboer",
          "B. Bij de basisschool",
          "C. Bij de politie"
        ],
        "answer": "C. Bij de politie."
      },
      {
        "title": "Overheidsbrief lezen",
        "prompt": "Wat doet u met een brief van de overheid?",
        "questions": [
          "A. Goed lezen en op tijd reageren",
          "B. Altijd ongeopend wegleggen",
          "C. Alleen aan de buren geven"
        ],
        "answer": "A. Goed lezen en op tijd reageren."
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
        "title": "Zinsvolgorde met vandaag",
        "prompt": "Zet in goede volgorde: ik / thuis / vandaag / werk",
        "questions": [],
        "answer": "Vandaag werk ik thuis."
      },
      {
        "title": "Zinsvolgorde met plaats",
        "prompt": "Zet in goede volgorde: Violetta / een formulier / in de bibliotheek / in / vult",
        "questions": [],
        "answer": "In de bibliotheek vult Violetta een formulier in."
      },
      {
        "title": "Vraag met bent",
        "prompt": "Maak een vraag: u / bent / thuis / morgen",
        "questions": [],
        "answer": "Bent u morgen thuis?"
      },
      {
        "title": "Waar-vraag over ouderavond",
        "prompt": "Maak een vraag met waar: de ouderavond / is",
        "questions": [],
        "answer": "Waar is de ouderavond?"
      },
      {
        "title": "Wanneer-vraag over bus",
        "prompt": "Maak een vraag met wanneer: de bus / vertrekt",
        "questions": [],
        "answer": "Wanneer vertrekt de bus?"
      },
      {
        "title": "Vraagwoord hoeveel",
        "prompt": "Maak een vraag met hoeveel: de pasfoto / kost",
        "questions": [],
        "answer": "Hoeveel kost de pasfoto?"
      },
      {
        "title": "Twee werkwoorden bij willen",
        "prompt": "Zet in goede volgorde: een afspraak / ik / maken / wil",
        "questions": [],
        "answer": "Ik wil een afspraak maken."
      },
      {
        "title": "Twee werkwoorden bij kunnen",
        "prompt": "Zet in goede volgorde: de brief / lezen / u / kunt",
        "questions": [],
        "answer": "U kunt de brief lezen."
      },
      {
        "title": "Omdat-zin met koorts",
        "prompt": "Maak een zin: Ik bel de school. Mijn dochter heeft koorts.",
        "questions": [],
        "answer": "Ik bel de school omdat mijn dochter koorts heeft."
      },
      {
        "title": "Bijzin met als",
        "prompt": "Maak af: Ik stuur een bericht als ik later ___",
        "questions": [],
        "answer": "Ik stuur een bericht als ik later kom."
      },
      {
        "title": "Dat in een korte zin",
        "prompt": "Maak af: Ik hoor dat de trein vandaag later ___",
        "questions": [],
        "answer": "Ik hoor dat de trein vandaag later rijdt."
      },
      {
        "title": "Want tussen twee zinnen",
        "prompt": "Maak een zin: Ik neem water mee. Ik ga wandelen.",
        "questions": [],
        "answer": "Ik neem water mee, want ik ga wandelen."
      },
      {
        "title": "Dus-zin met kapotte fiets",
        "prompt": "Maak een zin: De fiets is kapot. Ik neem de bus.",
        "questions": [],
        "answer": "De fiets is kapot, dus ik neem de bus."
      },
      {
        "title": "Maar met tegenstelling",
        "prompt": "Maak een zin: Ik wil zwemmen. Het zwembad is dicht.",
        "questions": [],
        "answer": "Ik wil zwemmen, maar het zwembad is dicht."
      },
      {
        "title": "Zinsvolgorde met tijd",
        "prompt": "Zet in goede volgorde: wij / samen / om zes uur / eten",
        "questions": [],
        "answer": "Om zes uur eten wij samen."
      },
      {
        "title": "Zinsvolgorde met morgen",
        "prompt": "Zet in goede volgorde: morgen / een afspraak / ik / maak",
        "questions": [],
        "answer": "Ik maak morgen een afspraak."
      },
      {
        "title": "Vraag in e-mail",
        "prompt": "Maak een beleefde vraag: u / kunt / mij / helpen",
        "questions": [],
        "answer": "Kunt u mij helpen?"
      },
      {
        "title": "Korte antwoordzin",
        "prompt": "Maak een volledige zin: Sterksel / ligt / in Noord-Brabant",
        "questions": [],
        "answer": "Sterksel ligt in Noord-Brabant."
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
        "title": "Tegenwoordige tijd werken",
        "prompt": "Vul in: Ik ___ vandaag aan mijn artikel. (werken)",
        "questions": [],
        "answer": "Ik werk vandaag aan mijn artikel."
      },
      {
        "title": "Tegenwoordige tijd luisteren",
        "prompt": "Vul in: Zij ___ naar een podcast. (luisteren)",
        "questions": [],
        "answer": "Zij luistert naar een podcast."
      },
      {
        "title": "Hebben met documenten",
        "prompt": "Vul in: Wij ___ onze paspoorten bij ons. (hebben)",
        "questions": [],
        "answer": "Wij hebben onze paspoorten bij ons."
      },
      {
        "title": "Zijn bij afspraak",
        "prompt": "Vul in: De afspraak ___ om half elf. (zijn)",
        "questions": [],
        "answer": "De afspraak is om half elf."
      },
      {
        "title": "Gaan naar bibliotheek",
        "prompt": "Vul in: Violetta ___ morgen naar de bibliotheek. (gaan)",
        "questions": [],
        "answer": "Violetta gaat morgen naar de bibliotheek."
      },
      {
        "title": "Komen bij gemeente",
        "prompt": "Vul in: U ___ dinsdag naar het gemeentehuis. (komen)",
        "questions": [],
        "answer": "U komt dinsdag naar het gemeentehuis."
      },
      {
        "title": "Bellen met school",
        "prompt": "Vul in: Mijn man ___ de school om acht uur. (bellen)",
        "questions": [],
        "answer": "Mijn man belt de school om acht uur."
      },
      {
        "title": "Koken voor gezin",
        "prompt": "Vul in: Wij ___ vanavond groenten en vlees. (koken)",
        "questions": [],
        "answer": "Wij koken vanavond groenten en vlees."
      },
      {
        "title": "Voltooid met maken",
        "prompt": "Maak voltooid: Ik maak een afspraak.",
        "questions": [],
        "answer": "Ik heb een afspraak gemaakt."
      },
      {
        "title": "Voltooid met betalen",
        "prompt": "Maak voltooid: Zij betaalt de premie.",
        "questions": [],
        "answer": "Zij heeft de premie betaald."
      },
      {
        "title": "Voltooid met vergeten",
        "prompt": "Maak voltooid: Wij vergeten de brief.",
        "questions": [],
        "answer": "Wij hebben de brief vergeten."
      },
      {
        "title": "Voltooid met gaan",
        "prompt": "Maak voltooid: Ik ga naar de huisarts.",
        "questions": [],
        "answer": "Ik ben naar de huisarts gegaan."
      },
      {
        "title": "Morgen met gaan",
        "prompt": "Maak toekomst: Ik zwem morgen.",
        "questions": [],
        "answer": "Ik ga morgen zwemmen."
      },
      {
        "title": "Toekomst met afspraak",
        "prompt": "Maak toekomst: Zij belt de assistente.",
        "questions": [],
        "answer": "Zij gaat de assistente bellen."
      },
      {
        "title": "Willen met vraag",
        "prompt": "Maak een zin met willen: ik / informatie / vragen",
        "questions": [],
        "answer": "Ik wil informatie vragen."
      },
      {
        "title": "Kunnen met betalen",
        "prompt": "Maak een zin met kunnen: u / online / betalen",
        "questions": [],
        "answer": "U kunt online betalen."
      },
      {
        "title": "Moeten met formulier",
        "prompt": "Maak een zin met moeten: wij / het formulier / invullen",
        "questions": [],
        "answer": "Wij moeten het formulier invullen."
      },
      {
        "title": "Zullen met voorstel",
        "prompt": "Maak een voorstel met zullen: ik / de brief / lezen",
        "questions": [],
        "answer": "Zal ik de brief lezen?"
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
        "title": "Moeten bij zorgbrief",
        "prompt": "Maak een zin: de zorgbrief / bewaren / ik / moet",
        "questions": [],
        "answer": "Ik moet de zorgbrief bewaren."
      },
      {
        "title": "Kunnen bij computer",
        "prompt": "Maak een zin: de computer / reserveren / u / kunt",
        "questions": [],
        "answer": "U kunt de computer reserveren."
      },
      {
        "title": "Willen bij sportles",
        "prompt": "Maak een zin: meedoen / met de sportles / wij / willen",
        "questions": [],
        "answer": "Wij willen meedoen met de sportles."
      },
      {
        "title": "Mogen bij stilteplek",
        "prompt": "Maak een zin: hier / rustig werken / ik / mag",
        "questions": [],
        "answer": "Ik mag hier rustig werken."
      },
      {
        "title": "Infinitief achteraan",
        "prompt": "Maak af: Ik moet mijn dochter om drie uur ___ (ophalen)",
        "questions": [],
        "answer": "Ik moet mijn dochter om drie uur ophalen."
      },
      {
        "title": "Opbellen nu",
        "prompt": "Gebruik opbellen: Ik ___ de huisarts nu ___.",
        "questions": [],
        "answer": "Ik bel de huisarts nu op."
      },
      {
        "title": "Opbellen met modal",
        "prompt": "Gebruik opbellen: Ik moet de klantenservice morgen ___.",
        "questions": [],
        "answer": "Ik moet de klantenservice morgen opbellen."
      },
      {
        "title": "Meenemen nu",
        "prompt": "Gebruik meenemen: Violetta ___ haar laptop ___.",
        "questions": [],
        "answer": "Violetta neemt haar laptop mee."
      },
      {
        "title": "Meenemen verleden",
        "prompt": "Maak voltooid: Wij nemen water mee.",
        "questions": [],
        "answer": "Wij hebben water meegenomen."
      },
      {
        "title": "Invullen nu",
        "prompt": "Gebruik invullen: U ___ het formulier online ___.",
        "questions": [],
        "answer": "U vult het formulier online in."
      },
      {
        "title": "Aanvragen met moeten",
        "prompt": "Maak af: Ik moet een nieuwe zorgpas ___.",
        "questions": [],
        "answer": "Ik moet een nieuwe zorgpas aanvragen."
      },
      {
        "title": "Terugbrengen",
        "prompt": "Gebruik terugbrengen: Ik ___ de ladder vanavond ___.",
        "questions": [],
        "answer": "Ik breng de ladder vanavond terug."
      },
      {
        "title": "Inschrijven",
        "prompt": "Gebruik zich inschrijven: Violetta ___ ___ voor de AI-avond.",
        "questions": [],
        "answer": "Violetta schrijft zich in voor de AI-avond."
      },
      {
        "title": "Melden bij balie",
        "prompt": "Gebruik zich melden: U ___ ___ bij de informatiebalie.",
        "questions": [],
        "answer": "U meldt zich bij de informatiebalie."
      },
      {
        "title": "Voelen na wandeling",
        "prompt": "Gebruik zich voelen: Ik ___ ___ rustig na de wandeling.",
        "questions": [],
        "answer": "Ik voel mij rustig na de wandeling."
      },
      {
        "title": "Voorbereiden op gesprek",
        "prompt": "Gebruik zich voorbereiden: Wij ___ ___ op het oudergesprek.",
        "questions": [],
        "answer": "Wij bereiden ons voor op het oudergesprek."
      },
      {
        "title": "Afmelden",
        "prompt": "Gebruik afmelden: Zij ___ haar dochter vandaag ___.",
        "questions": [],
        "answer": "Zij meldt haar dochter vandaag af."
      },
      {
        "title": "Modale vraag",
        "prompt": "Maak een beleefde vraag met mogen: ik / hier / wachten",
        "questions": [],
        "answer": "Mag ik hier wachten?"
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
        "title": "Artikel bij afspraak",
        "prompt": "Kies de of het: ___ afspraak is morgen.",
        "questions": [],
        "answer": "De afspraak is morgen."
      },
      {
        "title": "Artikel bij paspoort",
        "prompt": "Kies de of het: ___ paspoort ligt in de tas.",
        "questions": [],
        "answer": "Het paspoort ligt in de tas."
      },
      {
        "title": "Artikel bij bibliotheek",
        "prompt": "Kies de of het: ___ bibliotheek is open.",
        "questions": [],
        "answer": "De bibliotheek is open."
      },
      {
        "title": "Artikel bij bericht",
        "prompt": "Kies de of het: ___ bericht staat in de app.",
        "questions": [],
        "answer": "Het bericht staat in de app."
      },
      {
        "title": "Eerst een daarna de",
        "prompt": "Maak af: Ik heb een formulier. ___ formulier is kort.",
        "questions": [],
        "answer": "Ik heb een formulier. Het formulier is kort."
      },
      {
        "title": "Meervoud van paspoort",
        "prompt": "Maak meervoud: een paspoort, twee ___.",
        "questions": [],
        "answer": "Een paspoort, twee paspoorten."
      },
      {
        "title": "Meervoud van buurvrouw",
        "prompt": "Maak meervoud: een buurvrouw, twee ___.",
        "questions": [],
        "answer": "Een buurvrouw, twee buurvrouwen."
      },
      {
        "title": "Meervoud van rekening",
        "prompt": "Maak meervoud: een rekening, drie ___.",
        "questions": [],
        "answer": "Een rekening, drie rekeningen."
      },
      {
        "title": "Meervoud van tas",
        "prompt": "Maak meervoud: een tas, veel ___.",
        "questions": [],
        "answer": "Een tas, veel tassen."
      },
      {
        "title": "Bijvoeglijk gezond",
        "prompt": "Maak af: Ik maak een ___ lunch. (gezond)",
        "questions": [],
        "answer": "Ik maak een gezonde lunch."
      },
      {
        "title": "Bijvoeglijk rustig",
        "prompt": "Maak af: Wij wonen in een ___ dorp. (rustig)",
        "questions": [],
        "answer": "Wij wonen in een rustig dorp."
      },
      {
        "title": "Bijvoeglijk digitaal",
        "prompt": "Maak af: De ___ polis staat online. (digitaal)",
        "questions": [],
        "answer": "De digitale polis staat online."
      },
      {
        "title": "Bezittelijk mijn",
        "prompt": "Maak af: ___ laptop staat op tafel.",
        "questions": [],
        "answer": "Mijn laptop staat op tafel."
      },
      {
        "title": "Bezittelijk haar",
        "prompt": "Maak af: Mijn dochter pakt ___ regenjas.",
        "questions": [],
        "answer": "Mijn dochter pakt haar regenjas."
      },
      {
        "title": "Bezittelijk onze",
        "prompt": "Maak af: ___ afspraak is verzet naar vrijdag.",
        "questions": [],
        "answer": "Onze afspraak is verzet naar vrijdag."
      },
      {
        "title": "Voornaamwoord hem",
        "prompt": "Maak af: Ik bel de monteur en vraag ___ om hulp.",
        "questions": [],
        "answer": "Ik bel de monteur en vraag hem om hulp."
      },
      {
        "title": "Voornaamwoord ons",
        "prompt": "Maak af: De trainer geeft ___ nieuwe oefeningen.",
        "questions": [],
        "answer": "De trainer geeft ons nieuwe oefeningen."
      },
      {
        "title": "Deze of die",
        "prompt": "Kies: ___ brief op tafel is belangrijk.",
        "questions": [],
        "answer": "Deze brief op tafel is belangrijk."
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
        "title": "Geen bij legitimatie",
        "prompt": "Maak negatief: Ik heb legitimatie.",
        "questions": [],
        "answer": "Ik heb geen legitimatie."
      },
      {
        "title": "Geen bij contant geld",
        "prompt": "Maak negatief: Zij heeft contant geld.",
        "questions": [],
        "answer": "Zij heeft geen contant geld."
      },
      {
        "title": "Geen bij parkeerplek",
        "prompt": "Maak negatief: Wij vinden een parkeerplek.",
        "questions": [],
        "answer": "Wij vinden geen parkeerplek."
      },
      {
        "title": "Niet bij tijd",
        "prompt": "Maak negatief: Ik kom om acht uur.",
        "questions": [],
        "answer": "Ik kom niet om acht uur."
      },
      {
        "title": "Niet bij moeilijk",
        "prompt": "Maak negatief: Deze brief is moeilijk.",
        "questions": [],
        "answer": "Deze brief is niet moeilijk."
      },
      {
        "title": "Niet bij begrijpen",
        "prompt": "Maak negatief: Ik begrijp de vraag.",
        "questions": [],
        "answer": "Ik begrijp de vraag niet."
      },
      {
        "title": "Voorzetsel bij dorp",
        "prompt": "Vul in: Violetta woont ___ Sterksel.",
        "questions": [],
        "answer": "Violetta woont in Sterksel."
      },
      {
        "title": "Voorzetsel op datum",
        "prompt": "Vul in: De afspraak is ___ vrijdag.",
        "questions": [],
        "answer": "De afspraak is op vrijdag."
      },
      {
        "title": "Voorzetsel naar zwembad",
        "prompt": "Vul in: Ik fiets ___ het zwembad.",
        "questions": [],
        "answer": "Ik fiets naar het zwembad."
      },
      {
        "title": "Voorzetsel met podcast",
        "prompt": "Vul in: Ik wandel ___ een podcast.",
        "questions": [],
        "answer": "Ik wandel met een podcast."
      },
      {
        "title": "Voorzetsel voor polis",
        "prompt": "Vul in: Ik betaal premie ___ mijn zorgpolis.",
        "questions": [],
        "answer": "Ik betaal premie voor mijn zorgpolis."
      },
      {
        "title": "Voorzetsel na school",
        "prompt": "Vul in: ___ school gaat mijn dochter naar huis.",
        "questions": [],
        "answer": "Na school gaat mijn dochter naar huis."
      },
      {
        "title": "Maar met keuze",
        "prompt": "Maak een zin: Ik wil de trein nemen. De bus is sneller.",
        "questions": [],
        "answer": "Ik wil de trein nemen, maar de bus is sneller."
      },
      {
        "title": "Want-zin met vraag",
        "prompt": "Maak een zin: Ik bel de gemeente. Ik heb een vraag.",
        "questions": [],
        "answer": "Ik bel de gemeente, want ik heb een vraag."
      },
      {
        "title": "Dus met oplossing",
        "prompt": "Maak een zin: Het regent hard. Ik neem een paraplu mee.",
        "questions": [],
        "answer": "Het regent hard, dus ik neem een paraplu mee."
      },
      {
        "title": "Omdat met reden achteraan",
        "prompt": "Maak een zin: Wij blijven thuis. De monteur komt.",
        "questions": [],
        "answer": "Wij blijven thuis omdat de monteur komt."
      },
      {
        "title": "Als met voorwaarde",
        "prompt": "Maak af: Ik betaal online als de rekening duidelijk ___.",
        "questions": [],
        "answer": "Ik betaal online als de rekening duidelijk is."
      },
      {
        "title": "Dat met informatie",
        "prompt": "Maak af: De assistente zegt dat de afspraak om tien uur ___.",
        "questions": [],
        "answer": "De assistente zegt dat de afspraak om tien uur begint."
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
  const key = `v006-writing-answer-${index}-${exercise.title}`;
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
