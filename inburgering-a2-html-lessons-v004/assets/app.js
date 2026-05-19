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
      "Nieuwe opgaven"
    ],
    "exercises": [
      {
        "title": "Bericht van de gemeente",
        "prompt": "De gemeente Heeze-Leende komt vrijdag de groene container legen. Zet de container voor 07.30 uur aan de straat. Zet geen plastic zakken naast de container.",
        "questions": [
          "Wanneer komt de gemeente de groene container legen?",
          "Hoe laat moet de container aan de straat staan?",
          "Wat mag u niet naast de container zetten?"
        ],
        "answer": "De gemeente komt vrijdag de groene container legen. De container moet voor 07.30 uur aan de straat staan. U mag geen plastic zakken naast de container zetten."
      },
      {
        "title": "Huisartsportaal",
        "prompt": "Uw afspraak voor de bloeddrukcontrole is op woensdag 27 mei om 11.10 uur. Kom vijf minuten eerder. Neem uw medicijnlijst mee.",
        "questions": [
          "Voor welk document of welke controle is de afspraak?",
          "Op welke dag en tijd is de afspraak?",
          "Welke spullen moet u meenemen?"
        ],
        "answer": "De afspraak is voor de bloeddrukcontrole. De afspraak is op woensdag 27 mei om 11.10 uur. U moet uw medicijnlijst meenemen."
      },
      {
        "title": "Schoolapp",
        "prompt": "Morgen is er sportdag op school. De kinderen komen om 08.45 uur naar school in sportkleding. Geef uw kind een fles water en een lunch mee.",
        "questions": [
          "Wat is er morgen op school?",
          "Welke kleding moeten de kinderen dragen?",
          "Wat moet uw kind meenemen?"
        ],
        "answer": "Morgen is er sportdag. De kinderen moeten sportkleding dragen. Uw kind moet een fles water en een lunch meenemen."
      },
      {
        "title": "Onderhoud woning",
        "prompt": "De monteur komt maandag tussen 13.00 en 15.00 uur voor controle van de verwarming. Zorg dat iemand thuis is. De afspraak duurt ongeveer 30 minuten.",
        "questions": [
          "Op welke dag komt de monteur langs?",
          "Waarom komt de monteur?",
          "Hoe lang duurt de afspraak ongeveer?"
        ],
        "answer": "De monteur komt maandag tussen 13.00 en 15.00 uur. Hij komt voor controle van de verwarming. De afspraak duurt ongeveer 30 minuten."
      },
      {
        "title": "Supermarkt folder",
        "prompt": "Deze week krijgt u 20 procent korting op tomaten, paprika en kipfilet. De korting geldt alleen met de klantenkaart en loopt tot en met zondag.",
        "questions": [
          "Welke producten hebben korting?",
          "Wat heeft u nodig voor de korting?",
          "Tot wanneer geldt de korting?"
        ],
        "answer": "Tomaten, paprika en kipfilet hebben korting. U heeft de klantenkaart nodig. De korting geldt tot en met zondag."
      },
      {
        "title": "Busbericht",
        "prompt": "Door werkzaamheden rijdt bus 318 vandaag niet door de Dorpsstraat. De tijdelijke halte is bij de kerk. De bus rijdt elke 30 minuten.",
        "questions": [
          "Waarom rijdt bus 318 anders?",
          "Waar is de tijdelijke halte?",
          "Hoe vaak rijdt de bus?"
        ],
        "answer": "Bus 318 rijdt anders door werkzaamheden. De tijdelijke halte is bij de kerk. De bus rijdt elke 30 minuten."
      },
      {
        "title": "Bibliotheek hulp",
        "prompt": "Elke dinsdag helpt de bibliotheek met DigiD en online formulieren. De hulp is gratis. U moet wel eerst telefonisch een afspraak maken.",
        "questions": [
          "Waarmee helpt de bibliotheek?",
          "Is de hulp gratis?",
          "Wat moet u eerst doen?"
        ],
        "answer": "De bibliotheek helpt met DigiD en online formulieren. De hulp is gratis. U moet eerst telefonisch een afspraak maken."
      },
      {
        "title": "Zorgverzekering",
        "prompt": "Uw nieuwe zorgpas is onderweg. U ontvangt de pas binnen vijf werkdagen. Tot die tijd kunt u uw oude pas blijven gebruiken.",
        "questions": [
          "Wat is onderweg?",
          "Wanneer ontvangt u de pas?",
          "Welke pas kunt u nu gebruiken?"
        ],
        "answer": "De nieuwe zorgpas is onderweg. U ontvangt de pas binnen vijf werkdagen. U kunt uw oude pas blijven gebruiken."
      },
      {
        "title": "Paspoort afspraak",
        "prompt": "Voor een nieuw paspoort komt u naar het gemeentehuis. Neem uw oude paspoort en een pasfoto mee. U betaalt bij de balie.",
        "questions": [
          "Waar gaat u heen voor een nieuw paspoort?",
          "Welke spullen moet u meenemen?",
          "Waar betaalt u?"
        ],
        "answer": "U gaat naar het gemeentehuis. U moet uw oude paspoort en een pasfoto meenemen. U betaalt bij de balie."
      },
      {
        "title": "Briefje van de buren",
        "prompt": "Beste buren, zaterdag werken wij in de tuin. Er kan tussen 10.00 en 12.00 uur wat lawaai zijn. Sorry voor het ongemak.",
        "questions": [
          "Wanneer werken de buren in de tuin?",
          "Hoe laat kan er lawaai zijn?",
          "Waarvoor zeggen de buren sorry?"
        ],
        "answer": "De buren werken zaterdag in de tuin. Er kan tussen 10.00 en 12.00 uur lawaai zijn. Zij zeggen sorry voor het ongemak."
      },
      {
        "title": "Sportschool rooster",
        "prompt": "De les rustige yoga is op maandag om 19.30 uur. De les duurt 45 minuten. U moet een eigen handdoek meenemen.",
        "questions": [
          "Welke les is er op maandag?",
          "Hoe laat begint de les?",
          "Welke spullen moet u meenemen?"
        ],
        "answer": "Er is rustige yoga op maandag. De les begint om 19.30 uur. U moet een eigen handdoek meenemen."
      },
      {
        "title": "Herhaalrecept",
        "prompt": "U kunt uw herhaalrecept online aanvragen. Doe dit minimaal twee werkdagen voordat uw medicijnen op zijn.",
        "questions": [
          "Waar kunt u uw herhaalrecept aanvragen?",
          "Wanneer moet u dit doen?",
          "Waarvoor is een herhaalrecept?"
        ],
        "answer": "U kunt uw herhaalrecept online aanvragen. U moet dit minimaal twee werkdagen van tevoren doen. Het is voor medicijnen die u opnieuw nodig heeft."
      },
      {
        "title": "Tandartsrekening",
        "prompt": "U ontvangt de rekening van de tandarts per e-mail. Betaal de rekening binnen 14 dagen. Heeft u vragen? Bel dan de administratie.",
        "questions": [
          "Hoe ontvangt u de rekening?",
          "Binnen hoeveel dagen moet u betalen?",
          "Wie kunt u bellen bij vragen?"
        ],
        "answer": "U ontvangt de rekening per e-mail. U moet binnen 14 dagen betalen. U kunt de administratie bellen."
      },
      {
        "title": "Zwembad vakantie",
        "prompt": "In de meivakantie is het zwembad open van 09.00 tot 17.00 uur. Op Koningsdag is het zwembad gesloten.",
        "questions": [
          "Hoe laat is het zwembad open in de meivakantie?",
          "Wanneer is het zwembad gesloten?",
          "Gaat de tekst over school of zwembad?"
        ],
        "answer": "Het zwembad is open van 09.00 tot 17.00 uur. Op Koningsdag is het zwembad gesloten. De tekst gaat over het zwembad."
      },
      {
        "title": "Pakketpunt",
        "prompt": "Uw pakket ligt bij het pakketpunt in de supermarkt. U kunt het ophalen tot vrijdag 20.00 uur. Neem de afhaalcode mee.",
        "questions": [
          "Waar ligt het pakket?",
          "Tot wanneer kunt u het pakket ophalen?",
          "Welke spullen moet u meenemen?"
        ],
        "answer": "Het pakket ligt bij het pakketpunt in de supermarkt. U kunt het ophalen tot vrijdag 20.00 uur. U moet de afhaalcode meenemen."
      },
      {
        "title": "Werkruimte reserveren",
        "prompt": "De stiltewerkplek in de bibliotheek kunt u gratis reserveren voor twee uur. U mag bellen, maar alleen in de hal.",
        "questions": [
          "Waar is de stiltewerkplek?",
          "Hoelang kunt u de plek reserveren?",
          "Waar mag u bellen?"
        ],
        "answer": "De stiltewerkplek is in de bibliotheek. U kunt de plek twee uur reserveren. U mag alleen in de hal bellen."
      },
      {
        "title": "Reizen met betaalpas",
        "prompt": "U kunt in de bus inchecken met uw betaalpas. Check ook uit met dezelfde pas. Controleer later uw reiskosten online.",
        "questions": [
          "Waarmee kunt u inchecken?",
          "Waarmee moet u uitchecken?",
          "Waar kunt u uw reiskosten controleren?"
        ],
        "answer": "U kunt inchecken met uw betaalpas. U moet uitchecken met dezelfde pas. U kunt de reiskosten online controleren."
      },
      {
        "title": "Mini-examen parkeren",
        "prompt": "Bewoners kunnen online een parkeervergunning aanvragen. De vergunning is alleen geldig in uw eigen wijk.",
        "questions": [
          "Kies het goede antwoord: A. De vergunning is geldig in heel Nederland. B. U kunt de vergunning online aanvragen. C. U krijgt de vergunning bij de huisarts."
        ],
        "answer": "B. U kunt de vergunning online aanvragen."
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
        "title": "Formulier huisarts",
        "prompt": "Vul een formulier in voor de huisarts. Schrijf uw naam, geboortedatum, klacht en wanneer u kunt komen.",
        "answer": "Naam: Violetta Bonenkamp\nGeboortedatum: 12 maart 1982\nKlacht: Ik heb pijn in mijn rug.\nIk kan maandag of dinsdag komen."
      },
      {
        "title": "E-mail aan school",
        "prompt": "Uw dochter kan niet meedoen met sportdag, omdat zij ziek is. Schrijf een korte e-mail aan school.",
        "answer": "Beste juf,\n\nMijn dochter kan morgen niet meedoen met sportdag. Zij is ziek en blijft thuis. Ik hoop dat zij snel beter is.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Bericht aan de buren",
        "prompt": "U gaat zaterdag in de tuin werken. Schrijf een vriendelijk bericht aan de buren. Zeg wanneer er lawaai kan zijn.",
        "answer": "Beste buren,\n\nZaterdag werken wij in de tuin. Er kan tussen 10.00 en 12.00 uur wat lawaai zijn. Sorry voor het ongemak.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Afspraak gemeente verplaatsen",
        "prompt": "U heeft een afspraak bij de gemeente, maar u kunt niet komen. Vraag om een nieuwe afspraak in de ochtend.",
        "answer": "Beste meneer/mevrouw,\n\nIk heb donderdag een afspraak bij de gemeente, maar ik kan helaas niet komen. Kan ik een nieuwe afspraak maken in de ochtend?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Klacht over pakket",
        "prompt": "Uw pakket is niet aangekomen. Schrijf een korte klacht aan de webwinkel.",
        "answer": "Beste meneer/mevrouw,\n\nMijn pakket is nog niet aangekomen. De bezorgdatum was gisteren. Kunt u controleren waar mijn pakket is?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Vraag aan zorgverzekering",
        "prompt": "U begrijpt een rekening van de zorgverzekering niet. Vraag om uitleg.",
        "answer": "Beste meneer/mevrouw,\n\nIk heb een rekening van mijn zorgverzekering gekregen. Ik begrijp de rekening niet goed. Kunt u mij uitleggen waarvoor ik moet betalen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Aanmelden taalcafe",
        "prompt": "Schrijf een e-mail aan de bibliotheek. U wilt naar het taalcafe. Vraag naar de dag, tijd en kosten.",
        "answer": "Beste meneer/mevrouw,\n\nIk wil graag naar het taalcafe komen. Op welke dag en hoe laat is het taalcafe? Kost het geld?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Zwemles afmelden",
        "prompt": "U kunt vandaag niet naar zwemles. Schrijf een kort bericht aan de zwemschool.",
        "answer": "Beste meneer/mevrouw,\n\nIk kan vandaag niet naar zwemles komen. Ik ben ziek. Volgende week kom ik weer.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Uitnodiging voor verjaardag",
        "prompt": "Een vriendin nodigt u uit voor een verjaardag. U kunt wel komen. Schrijf een vriendelijk antwoord.",
        "answer": "Hoi,\n\nBedankt voor de uitnodiging. Ik kom graag zaterdag naar je verjaardag. Zal ik iets meenemen?\n\nGroetjes,\nVioletta"
      },
      {
        "title": "E-mail aan fietsenmaker",
        "prompt": "Uw fietslamp is kapot. Vraag aan de fietsenmaker of hij de lamp kan maken en wanneer u kunt komen.",
        "answer": "Beste meneer/mevrouw,\n\nMijn fietslamp is kapot. Kunt u de lamp maken? Wanneer kan ik met mijn fiets langskomen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Werkafspraak thuis",
        "prompt": "U werkt thuis en heeft online overleg. Schrijf een bericht aan een collega: u bent 10 minuten later.",
        "answer": "Hoi,\n\nIk ben vandaag 10 minuten later bij het online overleg. Mijn andere afspraak duurt langer. Sorry daarvoor.\n\nGroeten,\nVioletta"
      },
      {
        "title": "Sollicitatiebericht",
        "prompt": "U ziet vrijwilligerswerk bij de bibliotheek. Schrijf dat u interesse heeft en vraag om meer informatie.",
        "answer": "Beste meneer/mevrouw,\n\nIk heb gezien dat u vrijwilligers zoekt. Ik heb interesse in vrijwilligerswerk bij de bibliotheek. Kunt u mij meer informatie sturen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "OV-kaart kwijt",
        "prompt": "U bent uw OV-kaart kwijt. Schrijf een bericht aan de klantenservice.",
        "answer": "Beste klantenservice,\n\nIk ben mijn OV-kaart kwijt. Kunt u de kaart blokkeren? Ik wil ook graag weten hoe ik een nieuwe kaart kan aanvragen.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Computerhulp bibliotheek",
        "prompt": "Vraag aan de bibliotheek of iemand u kan helpen met een online formulier.",
        "answer": "Beste meneer/mevrouw,\n\nIk moet een online formulier invullen, maar ik heb hulp nodig. Kan iemand van de bibliotheek mij helpen?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Bedankbericht",
        "prompt": "Uw buurvrouw heeft een pakket voor u aangenomen. Schrijf een kort bedankbericht.",
        "answer": "Beste buurvrouw,\n\nBedankt dat u mijn pakket heeft aangenomen. Ik haal het pakket vanavond bij u op.\n\nGroetjes,\nVioletta"
      },
      {
        "title": "Korte tekst gezond leven",
        "prompt": "Schrijf vijf korte zinnen over gezond leven.",
        "answer": "Ik probeer gezond te leven. Ik zwem en fiets graag. Ik wandel vaak met een podcast. Ik kook vaak vlees met groenten. Ik drink genoeg water."
      },
      {
        "title": "Vraag over tandartsrekening",
        "prompt": "U heeft een rekening van de tandarts gekregen. Vraag of u in twee delen mag betalen.",
        "answer": "Beste meneer/mevrouw,\n\nIk heb een rekening van de tandarts gekregen. Mag ik de rekening in twee delen betalen? Kunt u mij hierover informeren?\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
      },
      {
        "title": "Verzoek aan woningcorporatie",
        "prompt": "De verwarming werkt niet goed. Schrijf een bericht aan de woningcorporatie en vraag om een afspraak.",
        "answer": "Beste meneer/mevrouw,\n\nDe verwarming in mijn woning werkt niet goed. Kunt u een monteur sturen? Ik wil graag een afspraak maken.\n\nMet vriendelijke groet,\nVioletta Bonenkamp"
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
      "Hardop oefenen",
      "Persoonlijk"
    ],
    "exercises": [
      {
        "title": "AI-spreekprompt",
        "prompt": "Kopieer deze tekst naar een spraaktool voordat u oefent.",
        "answer": "U bent mijn Nederlandse A2-examinator. Stel steeds een korte vraag in langzaam Nederlands. Wacht op mijn antwoord. Corrigeer kort en geef daarna een goed A2-modelantwoord."
      },
      {
        "title": "Persoonlijke gegevens",
        "questions": [
          "Hoe heet u?",
          "Uit welk land komt u oorspronkelijk?",
          "In welke plaats woont u nu?"
        ],
        "answer": "Ik heet Violetta Bonenkamp.\nIk kom uit Rusland.\nIk woon in Sterksel, in Noord-Brabant."
      },
      {
        "title": "Wonen",
        "questions": [
          "Woont u in een dorp of in een stad?",
          "Wat vindt u fijn aan Sterksel?"
        ],
        "answer": "Ik woon in een dorp. Sterksel is rustig en groen. Ik kan daar goed wandelen en fietsen."
      },
      {
        "title": "Gezin",
        "questions": [
          "Bent u met een Nederlandse man getrouwd?",
          "Hoeveel dochters heeft u?",
          "Wat doet u graag met uw gezin?"
        ],
        "answer": "Ja, ik ben getrouwd met een Nederlandse man. Ik heb twee dochters. Wij wandelen, reizen en eten graag samen."
      },
      {
        "title": "Werk",
        "questions": [
          "Wat is uw beroep?",
          "Waar werkt u meestal?",
          "Gebruikt u de computer vaak?"
        ],
        "answer": "Ik ben ondernemer en startup founder. Ik werk meestal thuis. Ik gebruik de computer elke dag voor mijn werk."
      },
      {
        "title": "Dagindeling",
        "questions": [
          "Hoe begint uw ochtend meestal?",
          "Wanneer werkt u meestal?",
          "Wat doet u na het werk?"
        ],
        "answer": "In de ochtend drink ik koffie en lees ik berichten. Daarna werk ik thuis. Na het werk wandel ik soms met een podcast."
      },
      {
        "title": "Vrije tijd",
        "questions": [
          "Welke activiteiten doet u graag na het werk?",
          "Luistert u graag naar podcasts?"
        ],
        "answer": "Ik zwem, fiets en wandel graag. Ja, ik luister graag naar podcasts tijdens het wandelen."
      },
      {
        "title": "Gezond eten",
        "questions": [
          "Maakt u graag eten thuis?",
          "Wat kookt u vaak?",
          "Wat vindt u gezond?"
        ],
        "answer": "Ja, ik kook graag. Ik kook vaak vlees met groenten. Groenten, fruit en water vind ik gezond."
      },
      {
        "title": "Technologie",
        "questions": [
          "Houdt u van technologie?",
          "Gebruikt u AI?",
          "Waarvoor gebruikt u AI?"
        ],
        "answer": "Ja, ik houd van technologie. Ik gebruik AI voor mijn werk. Ik gebruik AI om ideeen te maken en teksten te schrijven."
      },
      {
        "title": "Huisarts bellen",
        "prompt": "U bent ziek en wilt een afspraak maken. Wat zegt u?",
        "answer": "Goedemorgen, ik ben ziek en ik wil graag een afspraak maken met de huisarts."
      },
      {
        "title": "Apotheek",
        "prompt": "U wilt weten of uw medicijnen klaar zijn. Wat zegt u?",
        "answer": "Goedemiddag, zijn mijn medicijnen al klaar? Wanneer kan ik ze ophalen?"
      },
      {
        "title": "Gemeente",
        "prompt": "U begrijpt een brief van de gemeente niet. Wat zegt u?",
        "answer": "Goedemorgen, ik heb een brief gekregen, maar ik begrijp de brief niet. Kunt u mij helpen?"
      },
      {
        "title": "Buren",
        "prompt": "Uw buren maken veel lawaai. Wat zegt u vriendelijk?",
        "answer": "Hallo, het geluid is erg hard. Kunt u alstublieft iets zachter doen?"
      },
      {
        "title": "Openbaar vervoer",
        "prompt": "U weet niet waar de bus stopt. Wat vraagt u?",
        "answer": "Pardon, waar stopt bus 318 naar Eindhoven?"
      },
      {
        "title": "Afspraak afzeggen",
        "prompt": "U kunt niet naar een afspraak komen. Wat zegt u?",
        "answer": "Sorry, ik kan vandaag niet komen. Kan ik een nieuwe afspraak maken?"
      },
      {
        "title": "Mening Nederlands",
        "questions": [
          "Is Nederlands leren soms moeilijk voor u?",
          "Hoe oefent u?",
          "Wat wilt u beter kunnen?"
        ],
        "answer": "Ja, soms vind ik Nederlands moeilijk. Ik oefen met korte zinnen, audio en lessen. Ik wil beter spreken."
      },
      {
        "title": "Reizen",
        "questions": [
          "Houdt u van reizen?",
          "Waar gaat u graag naartoe?",
          "Waarom?"
        ],
        "answer": "Ja, ik houd van reizen. Ik ga graag naar nieuwe plaatsen. Ik vind andere culturen interessant."
      },
      {
        "title": "Zwemmen",
        "questions": [
          "Zwemt u graag?",
          "Waarom vindt u zwemmen fijn?"
        ],
        "answer": "Ja, ik zwem graag. Zwemmen is goed voor mijn lichaam en geeft mij energie."
      },
      {
        "title": "Fietsen",
        "questions": [
          "Gebruikt u vaak de fiets?",
          "Waar fietst u meestal?",
          "Fietst u in het donker?"
        ],
        "answer": "Ja, ik fiets graag. Ik fiets meestal in de buurt van Sterksel. In het donker gebruik ik fietsverlichting."
      },
      {
        "title": "Afbeelding: maaltijd voorbereiden",
        "image": "images/speaking/v004-speaking-cooking-vegetables-azure15.png",
        "prompt": "Kijk naar de afbeelding en geef antwoord in eenvoudige Nederlandse zinnen.",
        "questions": [
          "Wat ziet u?",
          "Welke activiteit ziet u?",
          "Wat kookt u graag?"
        ],
        "answer": "Ik zie een keuken. De vrouw kookt eten. Ik kook graag vlees met groenten."
      },
      {
        "title": "Afbeelding: fietsen naar sport",
        "image": "images/speaking/v004-speaking-cycling-brabant-azure15.png",
        "prompt": "Kijk naar de afbeelding en geef antwoord in eenvoudige Nederlandse zinnen.",
        "questions": [
          "In welke omgeving is de vrouw?",
          "Wat doet zij?",
          "Fietst u graag buiten?"
        ],
        "answer": "De vrouw is op een fietspad in een dorp. Zij fietst. Ja, ik fiets graag buiten."
      },
      {
        "title": "Afbeelding: huisartsbalie",
        "image": "images/speaking/v004-speaking-huisarts-receptie-azure15.png",
        "prompt": "Kijk naar de afbeelding en geef antwoord in eenvoudige Nederlandse zinnen.",
        "questions": [
          "Waar is deze persoon?",
          "Waarom gaat iemand naar de huisarts?",
          "Wat neemt u mee?"
        ],
        "answer": "Deze persoon is bij de huisarts. Iemand gaat naar de huisarts als hij ziek is. Ik neem mijn identiteitsbewijs en medicijnlijst mee."
      },
      {
        "title": "Afbeelding: schoolplein in de ochtend",
        "image": "images/speaking/v004-speaking-school-morning-azure15.png",
        "prompt": "Kijk naar de afbeelding en geef antwoord in eenvoudige Nederlandse zinnen.",
        "questions": [
          "Wat ziet u?",
          "Wie zijn er bij de school?",
          "Wat zegt u als uw kind ziek is?"
        ],
        "answer": "Ik zie een school. Er zijn ouders en kinderen bij de school. Ik zeg: mijn dochter is ziek en komt vandaag niet."
      },
      {
        "title": "Afbeelding: online werken thuis",
        "image": "images/speaking/v004-speaking-home-office-ai-azure15.png",
        "prompt": "Kijk naar de afbeelding en geef antwoord in eenvoudige Nederlandse zinnen.",
        "questions": [
          "Wat ziet u?",
          "Welke activiteit ziet u?",
          "Waar werkt u meestal?"
        ],
        "answer": "Ik zie een werkplek thuis. De vrouw werkt op een laptop. Ja, ik werk meestal thuis."
      },
      {
        "title": "Afbeelding: gezonde boodschappen",
        "image": "images/speaking/v004-speaking-supermarket-healthy-azure15.png",
        "prompt": "Kijk naar de afbeelding en geef antwoord in eenvoudige Nederlandse zinnen.",
        "questions": [
          "In welke omgeving is de vrouw?",
          "Welke producten liggen in de mand?",
          "Welke boodschappen koopt u meestal?"
        ],
        "answer": "De vrouw is in de supermarkt. Zij koopt groenten en vlees. Ik koop vaak groenten, vlees, fruit en koffie."
      },
      {
        "title": "Sterksel beschrijven",
        "questions": [
          "Hoe is Sterksel?",
          "Wat kunt u daar doen?"
        ],
        "answer": "Sterksel is rustig en groen. Ik kan daar wandelen, fietsen en thuis werken."
      },
      {
        "title": "Hulp vragen",
        "prompt": "U begrijpt een formulier niet. Wat zegt u?",
        "answer": "Sorry, ik begrijp dit formulier niet. Kunt u mij helpen?"
      },
      {
        "title": "Artikel schrijven",
        "questions": [
          "Schrijft u graag artikelen?",
          "Waarover schrijft u soms?"
        ],
        "answer": "Ja, ik schrijf graag artikelen. Ik schrijf soms over startups, technologie en AI."
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
      "Computerexamen",
      "Nieuwe MP3-audio",
      "Eerst luisteren"
    ],
    "exercises": [
      {
        "title": "AI-luisterprompt",
        "prompt": "Kopieer deze tekst naar een spraaktool voordat u oefent.",
        "answer": "U bent mijn Nederlandse A2-luistercoach. Lees een korte tekst langzaam voor. Laat de tekst niet zien. Stel daarna drie vragen in eenvoudig Nederlands."
      },
      {
        "title": "Gemeente balie",
        "audio": "audio/listening-01-gemeente-balie.mp3",
        "prompt": "Goedemorgen mevrouw Bonenkamp. Uw afspraak voor het paspoort is morgen om tien uur. Meld u bij balie twee. Neem uw oude paspoort en een pasfoto mee.",
        "questions": [
          "Voor welk document of welke controle is de afspraak?",
          "Op welk tijdstip is de afspraak?",
          "Welke spullen neemt mevrouw Bonenkamp mee?"
        ],
        "answer": "De afspraak is voor het paspoort. De afspraak is morgen om 10.00 uur. Zij moet haar oude paspoort en een pasfoto meenemen."
      },
      {
        "title": "Huisartsassistente",
        "audio": "audio/listening-02-huisarts-bloedonderzoek.mp3",
        "prompt": "Huisartsenpraktijk De Linde, goedemiddag. Uw bloedonderzoek is goed. U hoeft deze week niet naar de praktijk te komen. Als u nog klachten heeft, kunt u ons bellen.",
        "questions": [
          "Hoe is het bloedonderzoek?",
          "Moet mevrouw Bonenkamp naar de praktijk komen?",
          "Wat kan zij doen als zij nog klachten heeft?"
        ],
        "answer": "Het bloedonderzoek is goed. Zij hoeft deze week niet naar de praktijk te komen. Als zij nog klachten heeft, kan zij bellen."
      },
      {
        "title": "School voicemail",
        "audio": "audio/listening-03-school-ouderavond.mp3",
        "prompt": "Beste ouders, de ouderavond is donderdag om zeven uur in lokaal drie. Neem het rapport van uw kind mee. De avond duurt ongeveer een uur.",
        "questions": [
          "Wanneer is de ouderavond?",
          "Waar is de ouderavond?",
          "Wat moeten ouders meenemen?"
        ],
        "answer": "De ouderavond is donderdag om 19.00 uur. De ouderavond is in lokaal drie. Ouders moeten het rapport van hun kind meenemen."
      },
      {
        "title": "Supermarktbericht",
        "audio": "audio/listening-04-supermarkt-korting.mp3",
        "prompt": "Beste klanten, vandaag krijgt u korting op paprika, tomaten en kip. De korting geldt tot acht uur vanavond. Vergeet uw klantenkaart niet.",
        "questions": [
          "Welke producten hebben korting?",
          "Tot hoe laat geldt de korting?",
          "Wat moeten klanten niet vergeten?"
        ],
        "answer": "Paprika, tomaten en kip hebben korting. De korting geldt tot 20.00 uur. Klanten moeten hun klantenkaart niet vergeten."
      },
      {
        "title": "Bus omleiding",
        "audio": "audio/listening-05-bus-omleiding.mp3",
        "prompt": "Let op, bus 318 rijdt vandaag niet door de Dorpsstraat. U kunt instappen bij de tijdelijke halte naast de kerk. De bus heeft ongeveer vijf minuten vertraging.",
        "questions": [
          "Welke bus rijdt anders?",
          "Waar is de tijdelijke halte?",
          "Hoeveel vertraging heeft de bus ongeveer?"
        ],
        "answer": "Bus 318 rijdt anders. De tijdelijke halte is naast de kerk. De bus heeft ongeveer vijf minuten vertraging."
      },
      {
        "title": "Bibliotheek DigiD-hulp",
        "audio": "audio/listening-06-bibliotheek-digid.mp3",
        "prompt": "Welkom bij de bibliotheek. Op dinsdagmiddag helpen wij met DigiD en online formulieren. De hulp is gratis, maar u moet wel een afspraak maken.",
        "questions": [
          "Waarmee helpt de bibliotheek?",
          "Wanneer is de hulp?",
          "Moet u een afspraak maken?"
        ],
        "answer": "De bibliotheek helpt met DigiD en online formulieren. De hulp is op dinsdagmiddag. Ja, u moet een afspraak maken."
      },
      {
        "title": "Zorgverzekering",
        "audio": "audio/listening-07-zorgverzekering-rekening.mp3",
        "prompt": "U spreekt met uw zorgverzekering. Wij hebben uw vraag over de rekening ontvangen. U krijgt binnen drie werkdagen antwoord per e-mail.",
        "questions": [
          "Waarover gaat de vraag?",
          "Wanneer krijgt mevrouw Bonenkamp antwoord?",
          "Hoe krijgt zij antwoord?"
        ],
        "answer": "De vraag gaat over de rekening. Zij krijgt binnen drie werkdagen antwoord. Zij krijgt antwoord per e-mail."
      },
      {
        "title": "Fietslamp vervangen",
        "audio": "audio/listening-08-fietslamp.mp3",
        "prompt": "Goedemiddag, uw fietslamp is vervangen. De fiets is klaar. U kunt de fiets vandaag ophalen tot half zes. De reparatie kost achttien euro.",
        "questions": [
          "Wat is vervangen?",
          "Tot hoe laat kan de fiets worden opgehaald?",
          "Hoeveel moet mevrouw Bonenkamp betalen?"
        ],
        "answer": "De fietslamp is vervangen. De fiets kan vandaag tot 17.30 uur worden opgehaald. De reparatie kost 18 euro."
      },
      {
        "title": "Zwembad",
        "audio": "audio/listening-09-zwembad-banen.mp3",
        "prompt": "Beste bezoekers, banenzwemmen begint vandaag om half tien. Het recreatiebad is open vanaf elf uur. U kunt kaartjes kopen bij de kassa.",
        "questions": [
          "Hoe laat begint banenzwemmen?",
          "Wanneer gaat het recreatiebad open?",
          "Waar kunt u kaartjes kopen?"
        ],
        "answer": "Banenzwemmen begint om 09.30 uur. Het recreatiebad gaat om 11.00 uur open. U kunt kaartjes kopen bij de kassa."
      },
      {
        "title": "Buurvrouw",
        "audio": "audio/listening-10-buurvrouw-pakket.mp3",
        "prompt": "Hoi Violetta, ik heb je pakket aangenomen. Ik ben vanavond thuis na zeven uur. Je kunt dan aanbellen. Tot straks.",
        "questions": [
          "Wat heeft de buurvrouw aangenomen?",
          "Wanneer is de buurvrouw thuis?",
          "Wat kan Violetta doen?"
        ],
        "answer": "De buurvrouw heeft het pakket aangenomen. Zij is vanavond na 19.00 uur thuis. Violetta kan aanbellen."
      },
      {
        "title": "Apotheek",
        "audio": "audio/listening-11-apotheek-recept.mp3",
        "prompt": "Goedemiddag, uw herhaalrecept ligt klaar bij de apotheek. U kunt de medicijnen ophalen vanaf drie uur. Neem uw zorgpas mee.",
        "questions": [
          "Wat ligt klaar?",
          "Wanneer kan mevrouw Bonenkamp de medicijnen ophalen?",
          "Welke pas moet zij meenemen?"
        ],
        "answer": "Het herhaalrecept ligt klaar. Zij kan de medicijnen vanaf 15.00 uur ophalen. Zij moet haar zorgpas meenemen."
      },
      {
        "title": "Treinbericht",
        "audio": "audio/listening-12-trein-spoor.mp3",
        "prompt": "Dames en heren, de trein naar Eindhoven vertrekt vandaag van spoor vier. De trein stopt extra in Geldrop. Excuses voor de wijziging.",
        "questions": [
          "Naar welke stad rijdt de trein?",
          "Vanaf welk spoor vertrekt de trein?",
          "Waar stopt de trein extra?"
        ],
        "answer": "De trein gaat naar Eindhoven. De trein vertrekt van spoor vier. De trein stopt extra in Geldrop."
      },
      {
        "title": "Sportles",
        "audio": "audio/listening-13-sportles-tijd.mp3",
        "prompt": "Let op, de fitnessles van morgen begint niet om tien uur, maar om kwart over elf. De trainer is later. U hoeft zich niet opnieuw aan te melden.",
        "questions": [
          "Welke les verandert?",
          "Hoe laat begint de les morgen?",
          "Moet u zich opnieuw aanmelden?"
        ],
        "answer": "De fitnessles verandert. De les begint morgen om 11.15 uur. Nee, u hoeft zich niet opnieuw aan te melden."
      },
      {
        "title": "Tandarts",
        "audio": "audio/listening-14-tandarts-verplaatst.mp3",
        "prompt": "Goedemorgen mevrouw Bonenkamp. Uw afspraak bij de tandarts is verplaatst naar vrijdag om half twaalf. Als dit niet kan, bel ons dan vandaag terug.",
        "questions": [
          "Welke afspraak is verplaatst?",
          "Wanneer is de nieuwe afspraak?",
          "Wat moet mevrouw Bonenkamp doen als dit niet kan?"
        ],
        "answer": "De afspraak bij de tandarts is verplaatst. De nieuwe afspraak is vrijdag om 11.30 uur. Zij moet vandaag terugbellen."
      },
      {
        "title": "Woningcorporatie",
        "audio": "audio/listening-15-woning-verwarming.mp3",
        "prompt": "De monteur komt maandagmiddag voor de verwarming. Hij komt tussen een en drie uur. Zorg dat iemand thuis is.",
        "questions": [
          "Wie komt er maandagmiddag?",
          "Waarvoor komt de monteur?",
          "Tussen welke tijden komt hij?"
        ],
        "answer": "De monteur komt maandagmiddag. Hij komt voor de verwarming. Hij komt tussen 13.00 en 15.00 uur."
      },
      {
        "title": "Taalcafe",
        "audio": "audio/listening-16-taalcafe-werk.mp3",
        "prompt": "Vandaag praten we in het taalcafe over werk en inkomen. De les begint om tien uur. Na de les drinken we samen koffie.",
        "questions": [
          "Waarover praten de mensen vandaag?",
          "Hoe laat begint de les?",
          "Wat doen de mensen na de les?"
        ],
        "answer": "De mensen praten over werk en inkomen. De les begint om 10.00 uur. Na de les drinken zij samen koffie."
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
      "Computerexamen",
      "Kies A, B of C",
      "Nieuwe thema's"
    ],
    "exercises": [
      {
        "title": "Gemeente",
        "prompt": "Waar vraagt u meestal een nieuw paspoort aan?",
        "questions": [
          "A. Bij de gemeente",
          "B. Bij de supermarkt",
          "C. Bij de huisarts"
        ],
        "answer": "A. Bij de gemeente."
      },
      {
        "title": "DigiD",
        "prompt": "Waarvoor gebruikt u DigiD?",
        "questions": [
          "A. Om brood te kopen",
          "B. Om veilig in te loggen bij de overheid",
          "C. Om de fiets te openen"
        ],
        "answer": "B. Om veilig in te loggen bij de overheid."
      },
      {
        "title": "Huisarts",
        "prompt": "U bent ziek, maar het is geen spoed. Wie belt u meestal eerst?",
        "questions": [
          "A. De brandweer",
          "B. De burgemeester",
          "C. De huisarts"
        ],
        "answer": "C. De huisarts."
      },
      {
        "title": "112",
        "prompt": "Wanneer belt u 112?",
        "questions": [
          "A. Bij direct gevaar of spoed",
          "B. Voor een afspraak bij school",
          "C. Voor een bibliotheekpas"
        ],
        "answer": "A. Bij direct gevaar of spoed."
      },
      {
        "title": "Zorgverzekering",
        "prompt": "Is een basiszorgverzekering verplicht voor volwassenen in Nederland?",
        "questions": [
          "A. Nee",
          "B. Ja",
          "C. Alleen als u werkt"
        ],
        "answer": "B. Ja."
      },
      {
        "title": "Leerplicht",
        "prompt": "Kinderen moeten naar school. Hoe heet dit?",
        "questions": [
          "A. Zorgtoeslag",
          "B. Parkeervergunning",
          "C. Leerplicht"
        ],
        "answer": "C. Leerplicht."
      },
      {
        "title": "School ziekmelden",
        "prompt": "Uw kind is ziek en kan niet naar school. Wat doet u?",
        "questions": [
          "A. U meldt uw kind ziek bij school",
          "B. U belt de supermarkt",
          "C. U doet niets"
        ],
        "answer": "A. U meldt uw kind ziek bij school."
      },
      {
        "title": "Werk zoeken",
        "prompt": "Waarvoor gebruikt u een cv?",
        "questions": [
          "A. Om met de bus te reizen",
          "B. Om werkervaring en opleiding te laten zien",
          "C. Om medicijnen te halen"
        ],
        "answer": "B. Om werkervaring en opleiding te laten zien."
      },
      {
        "title": "Belasting",
        "prompt": "Waarom betalen mensen belasting?",
        "questions": [
          "A. Voor gratis vakantie",
          "B. Voor korting in de winkel",
          "C. Voor voorzieningen zoals wegen, zorg en onderwijs"
        ],
        "answer": "C. Voor voorzieningen zoals wegen, zorg en onderwijs."
      },
      {
        "title": "Arbeidscontract",
        "prompt": "Wat staat er meestal in een arbeidscontract?",
        "questions": [
          "A. Afspraken over werk, loon en uren",
          "B. Recepten voor eten",
          "C. Het weerbericht"
        ],
        "answer": "A. Afspraken over werk, loon en uren."
      },
      {
        "title": "Huurcontract",
        "prompt": "Waarom leest u een huurcontract goed?",
        "questions": [
          "A. Daarin staat wanneer de bus rijdt",
          "B. Daarin staan afspraken over de woning",
          "C. Daarin staan schoolcijfers"
        ],
        "answer": "B. Daarin staan afspraken over de woning."
      },
      {
        "title": "Woningonderhoud",
        "prompt": "De verwarming in een huurwoning is kapot. Wie informeert u meestal?",
        "questions": [
          "A. De bakker",
          "B. De tandarts",
          "C. De verhuurder of woningcorporatie"
        ],
        "answer": "C. De verhuurder of woningcorporatie."
      },
      {
        "title": "Afval scheiden",
        "prompt": "Waarom scheiden mensen afval?",
        "questions": [
          "A. Dat is beter voor het milieu",
          "B. Dan krijgt iedereen een paspoort",
          "C. Dan hoeft niemand te werken"
        ],
        "answer": "A. Dat is beter voor het milieu."
      },
      {
        "title": "Verkeer",
        "prompt": "U fietst in het donker. Wat heeft u nodig?",
        "questions": [
          "A. Een bibliotheekboek",
          "B. Werkende fietsverlichting",
          "C. Een zorgpas"
        ],
        "answer": "B. Werkende fietsverlichting."
      },
      {
        "title": "Openbaar vervoer",
        "prompt": "Waarmee kunt u inchecken in bus of trein?",
        "questions": [
          "A. Met een pasfoto",
          "B. Met een medicijnlijst",
          "C. Met een OV-chipkaart of betaalpas"
        ],
        "answer": "C. Met een OV-chipkaart of betaalpas."
      },
      {
        "title": "Stemmen",
        "prompt": "Wat kunt u doen bij verkiezingen als u stemrecht heeft?",
        "questions": [
          "A. Stemmen",
          "B. Een recept aanvragen",
          "C. Een fiets repareren"
        ],
        "answer": "A. Stemmen."
      },
      {
        "title": "Gemeenteraad",
        "prompt": "Wie neemt besluiten over veel lokale zaken in de gemeente?",
        "questions": [
          "A. De supermarkt",
          "B. De gemeenteraad",
          "C. De schoolarts"
        ],
        "answer": "B. De gemeenteraad."
      },
      {
        "title": "Gelijkheid",
        "prompt": "Mannen en vrouwen hebben in Nederland dezelfde rechten. Wat betekent dit?",
        "questions": [
          "A. Alleen mannen mogen werken",
          "B. Alleen vrouwen mogen stemmen",
          "C. Zij mogen zelf keuzes maken over werk en leven"
        ],
        "answer": "C. Zij mogen zelf keuzes maken over werk en leven."
      },
      {
        "title": "Discriminatie",
        "prompt": "Mag een werkgever iemand weigeren alleen door afkomst of geloof?",
        "questions": [
          "A. Nee, discriminatie mag niet",
          "B. Ja, altijd",
          "C. Alleen op maandag"
        ],
        "answer": "A. Nee, discriminatie mag niet."
      },
      {
        "title": "Privacy",
        "prompt": "Waarom moet een organisatie voorzichtig zijn met uw persoonsgegevens?",
        "questions": [
          "A. Omdat uw gegevens altijd openbaar zijn",
          "B. Omdat uw privacy belangrijk is",
          "C. Omdat gegevens niets betekenen"
        ],
        "answer": "B. Omdat uw privacy belangrijk is."
      },
      {
        "title": "Politie zonder spoed",
        "prompt": "Er is geen direct gevaar, maar u wilt de politie spreken. Wat doet u?",
        "questions": [
          "A. U belt altijd 112",
          "B. U belt de bibliotheek",
          "C. U belt het nummer voor politie zonder spoed"
        ],
        "answer": "C. U belt het nummer voor politie zonder spoed."
      },
      {
        "title": "Vrijwilligerswerk",
        "prompt": "Wat is vrijwilligerswerk?",
        "questions": [
          "A. Werk dat u vrijwillig doet, vaak zonder loon",
          "B. Werk dat altijd verplicht is",
          "C. Werk bij de tandarts"
        ],
        "answer": "A. Werk dat u vrijwillig doet, vaak zonder loon."
      },
      {
        "title": "Kinderopvang",
        "prompt": "Waar kunnen jonge kinderen heen als ouders werken?",
        "questions": [
          "A. Naar het politiebureau",
          "B. Naar de kinderopvang",
          "C. Naar de gemeenteraad"
        ],
        "answer": "B. Naar de kinderopvang."
      },
      {
        "title": "Zorgtoeslag",
        "prompt": "Waarvoor is zorgtoeslag bedoeld?",
        "questions": [
          "A. Hulp bij het kopen van schoenen",
          "B. Hulp bij vakantie",
          "C. Hulp bij de kosten van de zorgverzekering"
        ],
        "answer": "C. Hulp bij de kosten van de zorgverzekering."
      },
      {
        "title": "Identiteitsbewijs",
        "prompt": "Waarom neemt u een identiteitsbewijs mee naar een examen?",
        "questions": [
          "A. Om te laten zien wie u bent",
          "B. Om antwoord te geven",
          "C. Om koffie te halen"
        ],
        "answer": "A. Om te laten zien wie u bent."
      },
      {
        "title": "Bibliotheek",
        "prompt": "Waarvoor kunt u naar de bibliotheek gaan?",
        "questions": [
          "A. Een rijbewijs halen",
          "B. Boeken lenen en soms taal oefenen",
          "C. Belasting betalen"
        ],
        "answer": "B. Boeken lenen en soms taal oefenen."
      },
      {
        "title": "Huiselijk geweld",
        "prompt": "Iemand voelt zich thuis niet veilig. Wat is verstandig?",
        "questions": [
          "A. Altijd stil blijven",
          "B. Alleen meer werken",
          "C. Hulp zoeken bij een betrouwbare instantie of de politie"
        ],
        "answer": "C. Hulp zoeken bij een betrouwbare instantie of de politie."
      },
      {
        "title": "Vrijheid van mening",
        "prompt": "Wat betekent vrijheid van mening?",
        "questions": [
          "A. U mag altijd iemand bedreigen",
          "B. U mag uw mening geven binnen de wet",
          "C. U mag nooit iets zeggen"
        ],
        "answer": "B. U mag uw mening geven binnen de wet."
      }
    ]
  },
  {
    "id": "word-order",
    "number": "06",
    "category": "Grammatica",
    "title": "Woordvolgorde en vragen",
    "goal": "Maak duidelijke Nederlandse zinnen en vragen met goede woordvolgorde.",
    "meta": [
      "Werkwoord op plaats 2",
      "Vragen",
      "Omdat / als / dat"
    ],
    "exercises": [
      {
        "title": "Gewone zin",
        "prompt": "Zet in de goede volgorde: woon / ik / in Sterksel",
        "answer": "Ik woon in Sterksel."
      },
      {
        "title": "Zinsvolgorde met tijd",
        "prompt": "Zet in de goede volgorde: ik / thuis / vandaag / werk",
        "answer": "Vandaag werk ik thuis."
      },
      {
        "title": "Zinsvolgorde met plaats",
        "prompt": "Zet in de goede volgorde: ik / koffie / in de ochtend / drink",
        "answer": "In de ochtend drink ik koffie."
      },
      {
        "title": "Vraag maken",
        "prompt": "Maak een vraag: U woont in Sterksel.",
        "answer": "Woont u in Sterksel?"
      },
      {
        "title": "Vraagwoord waar",
        "prompt": "Vraag waar iemand woont.",
        "answer": "In welke plaats woont u nu?"
      },
      {
        "title": "Vraagwoord wanneer",
        "prompt": "Vraag wanneer de afspraak is.",
        "answer": "Op welke dag en tijd is de afspraak?"
      },
      {
        "title": "Vraagwoord hoe laat",
        "prompt": "Vraag hoe laat de bus komt.",
        "answer": "Hoe laat komt de bus?"
      },
      {
        "title": "Met twee werkwoorden",
        "prompt": "Maak de zin af: Ik wil Nederlands beter ___.",
        "answer": "Ik wil Nederlands beter spreken."
      },
      {
        "title": "Met moeten",
        "prompt": "Zet in de goede volgorde: mijn paspoort / meenemen / ik / moet",
        "answer": "Ik moet mijn paspoort meenemen."
      },
      {
        "title": "Omdat",
        "prompt": "Maak de zin af: Ik blijf thuis omdat mijn dochter ziek ___.",
        "answer": "Ik blijf thuis omdat mijn dochter ziek is."
      },
      {
        "title": "Omdat met werk",
        "prompt": "Maak de zin af: Ik leer Nederlands omdat ik in Nederland ___.",
        "answer": "Ik leer Nederlands omdat ik in Nederland woon."
      },
      {
        "title": "Als",
        "prompt": "Maak de zin af: Ik bel de school als mijn dochter ziek ___.",
        "answer": "Ik bel de school als mijn dochter ziek is."
      },
      {
        "title": "Dat",
        "prompt": "Maak de zin af: Ik denk dat de afspraak morgen ___.",
        "answer": "Ik denk dat de afspraak morgen is."
      },
      {
        "title": "Want",
        "prompt": "Maak een zin met want: Ik kom niet. Ik ben ziek.",
        "answer": "Ik kom niet, want ik ben ziek."
      },
      {
        "title": "Dus",
        "prompt": "Maak een zin met dus: De bus is laat. Ik bel school.",
        "answer": "De bus is laat, dus ik bel school."
      },
      {
        "title": "En",
        "prompt": "Maak een zin met en: Ik werk thuis. Ik schrijf artikelen.",
        "answer": "Ik werk thuis en ik schrijf artikelen."
      },
      {
        "title": "Volgorde met morgen",
        "prompt": "Zet in de goede volgorde: ik / zwemmen / morgen / ga",
        "answer": "Morgen ga ik zwemmen."
      },
      {
        "title": "Korte e-mailzin",
        "prompt": "Zet in de goede volgorde: kan / ik / vrijdag / komen",
        "answer": "Ik kan vrijdag komen."
      }
    ]
  },
  {
    "id": "verbs",
    "number": "07",
    "category": "Grammatica",
    "title": "Werkwoorden: nu, verleden en toekomst",
    "goal": "Oefen veelgebruikte werkwoorden voor dagelijkse situaties.",
    "meta": [
      "Tegenwoordige tijd",
      "Voltooid verleden",
      "Toekomst"
    ],
    "exercises": [
      {
        "title": "Wonen",
        "prompt": "Kies: Ik ___ in Sterksel. (woon / woont)",
        "answer": "Ik woon in Sterksel."
      },
      {
        "title": "Werken",
        "prompt": "Kies: Zij ___ thuis. (werk / werkt)",
        "answer": "Zij werkt thuis."
      },
      {
        "title": "Hebben",
        "prompt": "Vul in: Wij ___ twee dochters.",
        "answer": "Wij hebben twee dochters."
      },
      {
        "title": "Zijn",
        "prompt": "Vul in: Ik ___ ondernemer.",
        "answer": "Ik ben ondernemer."
      },
      {
        "title": "Gaan",
        "prompt": "Vul in: Mijn dochter ___ naar school.",
        "answer": "Mijn dochter gaat naar school."
      },
      {
        "title": "Komen",
        "prompt": "Vul in: De monteur ___ maandag.",
        "answer": "De monteur komt maandag."
      },
      {
        "title": "Bellen",
        "prompt": "Maak de zin: Ik / de huisarts / bellen.",
        "answer": "Ik bel de huisarts."
      },
      {
        "title": "Koken",
        "prompt": "Maak de zin: Wij / groenten / koken.",
        "answer": "Wij koken groenten."
      },
      {
        "title": "Voltooid met hebben",
        "prompt": "Maak de zin: Ik / gisteren / gewerkt.",
        "answer": "Ik heb gisteren gewerkt."
      },
      {
        "title": "Voltooid met hebben",
        "prompt": "Maak de zin: Wij / gisteren / gekookt.",
        "answer": "Wij hebben gisteren gekookt."
      },
      {
        "title": "Voltooid met zijn",
        "prompt": "Maak de zin: Ik / naar de winkel / gegaan.",
        "answer": "Ik ben naar de winkel gegaan."
      },
      {
        "title": "Voltooid met zijn",
        "prompt": "Maak de zin: Zij / thuis / gebleven.",
        "answer": "Zij is thuis gebleven."
      },
      {
        "title": "Toekomst met gaan",
        "prompt": "Maak de zin: Morgen / ik / zwemmen.",
        "answer": "Morgen ga ik zwemmen."
      },
      {
        "title": "Toekomst met gaan",
        "prompt": "Maak de zin: Vanavond / wij / thuis eten.",
        "answer": "Vanavond gaan wij thuis eten."
      },
      {
        "title": "Willen",
        "prompt": "Maak de zin af: Ik wil beter Nederlands ___.",
        "answer": "Ik wil beter Nederlands spreken."
      },
      {
        "title": "Kunnen",
        "prompt": "Maak de zin af: Ik kan maandag niet ___.",
        "answer": "Ik kan maandag niet komen."
      },
      {
        "title": "Moeten",
        "prompt": "Maak de zin af: Ik moet mijn paspoort ___.",
        "answer": "Ik moet mijn paspoort meenemen."
      },
      {
        "title": "Zullen als voorstel",
        "prompt": "Maak een vraag: Zullen wij morgen bellen?",
        "answer": "Zullen wij morgen bellen?"
      }
    ]
  },
  {
    "id": "modal",
    "number": "08",
    "category": "Grammatica",
    "title": "Modale, scheidbare en wederkerende werkwoorden",
    "goal": "Oefen moeten, kunnen, willen, mogen en werkwoorden zoals ophalen, invullen en zich aanmelden.",
    "meta": [
      "Moeten / kunnen",
      "Scheidbaar",
      "Wederkerend"
    ],
    "exercises": [
      {
        "title": "Moeten",
        "prompt": "Maak de zin af: Ik moet de school ___.",
        "answer": "Ik moet de school bellen."
      },
      {
        "title": "Kunnen",
        "prompt": "Maak de zin af: Ik kan morgen niet ___.",
        "answer": "Ik kan morgen niet komen."
      },
      {
        "title": "Willen",
        "prompt": "Maak de zin af: Ik wil graag een afspraak ___.",
        "answer": "Ik wil graag een afspraak maken."
      },
      {
        "title": "Mogen",
        "prompt": "Maak een vraag: Mag ik hier parkeren?",
        "answer": "Mag ik hier parkeren?"
      },
      {
        "title": "Tweede werkwoord einde",
        "prompt": "Zet in de goede volgorde: het formulier / invullen / ik / moet",
        "answer": "Ik moet het formulier invullen."
      },
      {
        "title": "Ophalen",
        "prompt": "Maak de zin: Ik / het pakket / ophalen.",
        "answer": "Ik haal het pakket op."
      },
      {
        "title": "Ophalen met moeten",
        "prompt": "Maak de zin: Ik moet / het pakket / ophalen.",
        "answer": "Ik moet het pakket ophalen."
      },
      {
        "title": "Afzeggen",
        "prompt": "Maak de zin: Ik / de afspraak / afzeggen.",
        "answer": "Ik zeg de afspraak af."
      },
      {
        "title": "Afzeggen verleden",
        "prompt": "Maak de zin: Ik / de afspraak / afgezegd.",
        "answer": "Ik heb de afspraak afgezegd."
      },
      {
        "title": "Meenemen",
        "prompt": "Maak de zin: Ik / mijn identiteitsbewijs / meenemen.",
        "answer": "Ik neem mijn identiteitsbewijs mee."
      },
      {
        "title": "Meenemen met moeten",
        "prompt": "Maak de zin: Ik moet / mijn medicijnlijst / meenemen.",
        "answer": "Ik moet mijn medicijnlijst meenemen."
      },
      {
        "title": "Invullen",
        "prompt": "Maak de zin: Ik / het formulier / invullen.",
        "answer": "Ik vul het formulier in."
      },
      {
        "title": "Aanmelden",
        "prompt": "Maak de zin: Ik / mij / aanmelden / voor het taalcafe.",
        "answer": "Ik meld me aan voor het taalcafe."
      },
      {
        "title": "Zich inschrijven",
        "prompt": "Maak de zin: Ik moet / me / inschrijven / voor de cursus.",
        "answer": "Ik moet me inschrijven voor de cursus."
      },
      {
        "title": "Zich voelen",
        "prompt": "Vul in: Ik voel ___ niet goed.",
        "answer": "Ik voel me niet goed."
      },
      {
        "title": "Zich melden",
        "prompt": "Vul in: U moet ___ melden bij de balie.",
        "answer": "U moet zich melden bij de balie."
      },
      {
        "title": "Zich wassen",
        "prompt": "Maak de zin: Mijn dochter / zich / wassen.",
        "answer": "Mijn dochter wast zich."
      },
      {
        "title": "Praktische vraag",
        "prompt": "Vraag beleefd of u de afspraak mag verplaatsen.",
        "answer": "Mag ik de afspraak verplaatsen?"
      }
    ]
  },
  {
    "id": "nouns",
    "number": "09",
    "category": "Grammatica",
    "title": "Zelfstandige naamwoorden, lidwoorden en voornaamwoorden",
    "goal": "Oefen de, het, een, meervoud, bijvoeglijke naamwoorden en voornaamwoorden.",
    "meta": [
      "De / het",
      "Meervoud",
      "Mijn / haar / ons"
    ],
    "exercises": [
      {
        "title": "De of het",
        "prompt": "Kies: ___ afspraak",
        "answer": "de afspraak"
      },
      {
        "title": "De of het",
        "prompt": "Kies: ___ formulier",
        "answer": "het formulier"
      },
      {
        "title": "De of het",
        "prompt": "Kies: ___ paspoort",
        "answer": "het paspoort"
      },
      {
        "title": "De of het",
        "prompt": "Kies: ___ gemeente",
        "answer": "de gemeente"
      },
      {
        "title": "Een en de",
        "prompt": "Maak de zin: Ik heb een brief. ___ brief is belangrijk.",
        "answer": "Ik heb een brief. De brief is belangrijk."
      },
      {
        "title": "Meervoud",
        "prompt": "Maak meervoud: afspraak",
        "answer": "afspraken"
      },
      {
        "title": "Meervoud",
        "prompt": "Maak meervoud: kind",
        "answer": "kinderen"
      },
      {
        "title": "Meervoud",
        "prompt": "Maak meervoud: brief",
        "answer": "brieven"
      },
      {
        "title": "Meervoud",
        "prompt": "Maak meervoud: vrouw",
        "answer": "vrouwen"
      },
      {
        "title": "Bijvoeglijk naamwoord",
        "prompt": "Kies: een ___ afspraak (nieuw / nieuwe)",
        "answer": "een nieuwe afspraak"
      },
      {
        "title": "Bijvoeglijk naamwoord",
        "prompt": "Kies: het ___ paspoort (oud / oude)",
        "answer": "het oude paspoort"
      },
      {
        "title": "Bijvoeglijk naamwoord",
        "prompt": "Kies: een ___ huis (mooi / mooie)",
        "answer": "een mooi huis"
      },
      {
        "title": "Mijn",
        "prompt": "Maak de zin: Dit is ___ paspoort.",
        "answer": "Dit is mijn paspoort."
      },
      {
        "title": "Haar",
        "prompt": "Maak de zin: Mijn dochter heeft ___ tas.",
        "answer": "Mijn dochter heeft haar tas."
      },
      {
        "title": "Ons",
        "prompt": "Maak de zin: ___ huis is in Sterksel.",
        "answer": "Ons huis is in Sterksel."
      },
      {
        "title": "Mij",
        "prompt": "Maak de zin: Kunt u ___ helpen?",
        "answer": "Kunt u mij helpen?"
      },
      {
        "title": "U",
        "prompt": "Maak de zin beleefd: Kan ik ___ iets vragen?",
        "answer": "Kan ik u iets vragen?"
      },
      {
        "title": "Deze of die",
        "prompt": "Kies: ___ brief hier is van school.",
        "answer": "Deze brief hier is van school."
      }
    ]
  },
  {
    "id": "negation",
    "number": "10",
    "category": "Grammatica",
    "title": "Ontkenning, voorzetsels en verbindingswoorden",
    "goal": "Oefen niet, geen, voorzetsels en verbindingswoorden voor korte A2-zinnen.",
    "meta": [
      "Niet / geen",
      "In / op / naar",
      "Maar / want / omdat"
    ],
    "exercises": [
      {
        "title": "Geen",
        "prompt": "Maak de zin af: Ik heb vandaag ___ afspraak.",
        "answer": "Ik heb vandaag geen afspraak."
      },
      {
        "title": "Geen",
        "prompt": "Maak de zin af: Wij hebben ___ auto.",
        "answer": "Wij hebben geen auto."
      },
      {
        "title": "Geen",
        "prompt": "Maak de zin af: Er is ___ probleem.",
        "answer": "Er is geen probleem."
      },
      {
        "title": "Niet",
        "prompt": "Maak de zin af: Ik kom morgen ___.",
        "answer": "Ik kom morgen niet."
      },
      {
        "title": "Niet",
        "prompt": "Maak de zin af: De afspraak gaat ___ door.",
        "answer": "De afspraak gaat niet door."
      },
      {
        "title": "Niet",
        "prompt": "Maak de zin af: Ik begrijp de brief ___.",
        "answer": "Ik begrijp de brief niet."
      },
      {
        "title": "In",
        "prompt": "Maak de zin af: Ik woon ___ Sterksel.",
        "answer": "Ik woon in Sterksel."
      },
      {
        "title": "Op",
        "prompt": "Maak de zin af: De afspraak is ___ maandag.",
        "answer": "De afspraak is op maandag."
      },
      {
        "title": "Naar",
        "prompt": "Maak de zin af: Ik ga ___ de huisarts.",
        "answer": "Ik ga naar de huisarts."
      },
      {
        "title": "Met",
        "prompt": "Maak de zin af: Ik fiets ___ mijn gezin.",
        "answer": "Ik fiets met mijn gezin."
      },
      {
        "title": "Voor",
        "prompt": "Maak de zin af: Ik heb een afspraak ___ mijn paspoort.",
        "answer": "Ik heb een afspraak voor mijn paspoort."
      },
      {
        "title": "Na",
        "prompt": "Maak de zin af: Na het werk ga ik wandelen.",
        "answer": "Na het werk ga ik wandelen."
      },
      {
        "title": "Maar",
        "prompt": "Maak een zin: Ik wil zwemmen. Het zwembad is gesloten.",
        "answer": "Ik wil zwemmen, maar het zwembad is gesloten."
      },
      {
        "title": "Want",
        "prompt": "Maak een zin: Ik blijf thuis. Mijn dochter is ziek.",
        "answer": "Ik blijf thuis, want mijn dochter is ziek."
      },
      {
        "title": "Dus",
        "prompt": "Maak een zin: De trein is laat. Ik bel school.",
        "answer": "De trein is laat, dus ik bel school."
      },
      {
        "title": "Omdat",
        "prompt": "Maak een zin: Ik kan niet komen. Ik ben ziek.",
        "answer": "Ik kan niet komen omdat ik ziek ben."
      },
      {
        "title": "Als",
        "prompt": "Maak de zin af: Ik bel u als ik later ___.",
        "answer": "Ik bel u als ik later kom."
      },
      {
        "title": "Dat",
        "prompt": "Maak de zin af: Ik denk dat de les morgen ___.",
        "answer": "Ik denk dat de les morgen begint."
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
  const key = `v4-writing-answer-${index}-${exercise.title}`;
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
