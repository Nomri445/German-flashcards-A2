const sentences = [
  {
    english: "I have to go to work tomorrow.",
    german: "Ich muss morgen zur Arbeit gehen."
  },
  {
    english: "She is reading an interesting book.",
    german: "Sie liest ein interessantes Buch."
  },
  {
    english: "We are cooking dinner together.",
    german: "Wir kochen zusammen das Abendessen."
  },
  {
    english: "Can you help me with my homework?",
    german: "Kannst du mir bei meinen Hausaufgaben helfen?"
  },
  {
    english: "I forgot my keys at home.",
    german: "Ich habe meine Schlüssel zu Hause vergessen."
  },
  {
    english: "The train arrives in ten minutes.",
    german: "Der Zug kommt in zehn Minuten an."
  },
  {
    english: "My brother works in a hospital.",
    german: "Mein Bruder arbeitet in einem Krankenhaus."
  },
  {
    english: "We want to visit Berlin next year.",
    german: "Wir wollen nächstes Jahr Berlin besuchen."
  },
  {
    english: "She always drinks coffee in the morning.",
    german: "Sie trinkt morgens immer Kaffee."
  },
  {
    english: "I am learning German every day.",
    german: "Ich lerne jeden Tag Deutsch."
  },
  {
    english: "They are waiting for the bus.",
    german: "Sie warten auf den Bus."
  },
  {
    english: "Please close the window.",
    german: "Bitte schließe das Fenster."
  },
  {
    english: "We bought fresh vegetables at the market.",
    german: "Wir haben frisches Gemüse auf dem Markt gekauft."
  },
  {
    english: "He is looking for his mobile phone.",
    german: "Er sucht sein Handy."
  },
  {
    english: "I usually get up at seven o'clock.",
    german: "Ich stehe normalerweise um sieben Uhr auf."
  },
  {
    english: "The weather is nice today.",
    german: "Das Wetter ist heute schön."
  },
  {
    english: "She has lived here for three years.",
    german: "Sie wohnt seit drei Jahren hier."
  },
  {
    english: "We are watching a movie tonight.",
    german: "Wir schauen heute Abend einen Film."
  },
  {
    english: "He cannot come because he is sick.",
    german: "Er kann nicht kommen, weil er krank ist."
  },
  {
    english: "I need to buy a new backpack.",
    german: "Ich muss einen neuen Rucksack kaufen."
  },
  {
    english: "The children are playing in the garden.",
    german: "Die Kinder spielen im Garten."
  },
  {
    english: "I like listening to music while studying.",
    german: "Ich höre gern Musik, während ich lerne."
  },
  {
    english: "She speaks German very well.",
    german: "Sie spricht sehr gut Deutsch."
  },
  {
    english: "We met our friends at the café.",
    german: "Wir haben unsere Freunde im Café getroffen."
  },
  {
    english: "What time does the lesson start?",
    german: "Um wie viel Uhr beginnt der Unterricht?"
  },
{
    english: "I usually have breakfast at seven o'clock.",
    german: "Ich frühstücke normalerweise um sieben Uhr."
},
{
    english: "My parents are watching television.",
    german: "Meine Eltern sehen fern."
},
{
    english: "We are planning our holiday together.",
    german: "Wir planen unseren Urlaub zusammen."
},
{
    english: "The supermarket is closed today.",
    german: "Der Supermarkt ist heute geschlossen."
},
{
    english: "I forgot to call my friend yesterday.",
    german: "Ich habe gestern vergessen, meinen Freund anzurufen."
},
{
    english: "She is wearing a beautiful dress.",
    german: "Sie trägt ein schönes Kleid."
},
{
    english: "He cleans his room every Saturday.",
    german: "Er putzt jeden Samstag sein Zimmer."
},
{
    english: "Can I sit here?",
    german: "Kann ich hier sitzen?"
},
{
    english: "We need more time.",
    german: "Wir brauchen mehr Zeit."
},
{
    english: "I have already finished my homework.",
    german: "Ich habe meine Hausaufgaben schon gemacht."
},
{
    english: "The baby is sleeping.",
    german: "Das Baby schläft."
},
{
    english: "Please speak more slowly.",
    german: "Bitte sprich langsamer."
},
{
    english: "She bought a new bicycle last week.",
    german: "Sie hat letzte Woche ein neues Fahrrad gekauft."
},
{
    english: "I like spending time with my family.",
    german: "Ich verbringe gern Zeit mit meiner Familie."
},
{
    english: "The restaurant is very expensive.",
    german: "Das Restaurant ist sehr teuer."
},
{
    english: "We have to leave now.",
    german: "Wir müssen jetzt gehen."
},
{
    english: "He is waiting in front of the station.",
    german: "Er wartet vor dem Bahnhof."
},
{
    english: "I don't understand this question.",
    german: "Ich verstehe diese Frage nicht."
},
{
    english: "The teacher explained the lesson well.",
    german: "Der Lehrer hat den Unterricht gut erklärt."
},
{
    english: "Tomorrow I will visit my grandmother.",
    german: "Morgen werde ich meine Großmutter besuchen."
},
{
    english: "My sister likes to bake cakes.",
    german: "Meine Schwester backt gern Kuchen."
},
{
    english: "We often go for a walk in the evening.",
    german: "Wir gehen abends oft spazieren."
},
{
    english: "He forgot his wallet at home.",
    german: "Er hat seine Geldbörse zu Hause vergessen."
},
{
    english: "They live near the city center.",
    german: "Sie wohnen in der Nähe des Stadtzentrums."
},
{
    english: "What would you like to drink?",
    german: "Was möchtest du trinken?"
},

{
    english: "I need to send an email today.",
    german: "Ich muss heute eine E-Mail schicken."
},
{
    english: "We are meeting our friends this afternoon.",
    german: "Wir treffen heute Nachmittag unsere Freunde."
},
{
    english: "She always arrives on time.",
    german: "Sie kommt immer pünktlich."
},
{
    english: "He is repairing his bicycle.",
    german: "Er repariert sein Fahrrad."
},
{
    english: "I forgot my umbrella at school.",
    german: "Ich habe meinen Regenschirm in der Schule vergessen."
},
{
    english: "The museum is open until six o'clock.",
    german: "Das Museum ist bis sechs Uhr geöffnet."
},
{
    english: "Can you repeat that, please?",
    german: "Kannst du das bitte wiederholen?"
},
{
    english: "My grandparents live in a small village.",
    german: "Meine Großeltern wohnen in einem kleinen Dorf."
},
{
    english: "We are looking for a good restaurant.",
    german: "Wir suchen ein gutes Restaurant."
},
{
    english: "She is learning to drive.",
    german: "Sie lernt Auto zu fahren."
},
{
    english: "I often read before going to bed.",
    german: "Ich lese oft vor dem Schlafengehen."
},
{
    english: "The children are doing their homework.",
    german: "Die Kinder machen ihre Hausaufgaben."
},
{
    english: "He forgot his password.",
    german: "Er hat sein Passwort vergessen."
},
{
    english: "I would like a cup of tea.",
    german: "Ich möchte eine Tasse Tee."
},
{
    english: "We spent the weekend at home.",
    german: "Wir haben das Wochenende zu Hause verbracht."
},
{
    english: "She is talking to her teacher.",
    german: "Sie spricht mit ihrer Lehrerin."
},
{
    english: "The train was ten minutes late.",
    german: "Der Zug hatte zehn Minuten Verspätung."
},
{
    english: "I enjoy taking photos while traveling.",
    german: "Ich fotografiere gern auf Reisen."
},
{
    english: "He is writing a letter to his friend.",
    german: "Er schreibt einen Brief an seinen Freund."
},
{
    english: "Please turn off the lights.",
    german: "Bitte mach das Licht aus."
},
{
    english: "We have to buy some fruit.",
    german: "Wir müssen etwas Obst kaufen."
},
{
    english: "She forgot to bring her notebook.",
    german: "Sie hat vergessen, ihr Heft mitzubringen."
},
{
    english: "I feel better today.",
    german: "Ich fühle mich heute besser."
},
{
    english: "They are celebrating her birthday.",
    german: "Sie feiern ihren Geburtstag."
},
{
    english: "What are you doing this weekend?",
    german: "Was machst du dieses Wochenende?"
},
{
    english: "I have to finish this project today.",
    german: "Ich muss dieses Projekt heute fertig machen."
},
{
    english: "She is waiting for her brother.",
    german: "Sie wartet auf ihren Bruder."
},
{
    english: "We always eat dinner together.",
    german: "Wir essen immer zusammen zu Abend."
},
{
    english: "He is interested in learning German.",
    german: "Er interessiert sich für Deutsch."
},
{
    english: "I cannot find my glasses.",
    german: "Ich kann meine Brille nicht finden."
},
{
    english: "The doctor is very friendly.",
    german: "Der Arzt ist sehr freundlich."
},
{
    english: "Please open the door.",
    german: "Bitte öffne die Tür."
},
{
    english: "My cousin studies at the university.",
    german: "Mein Cousin studiert an der Universität."
},
{
    english: "We enjoyed the concert very much.",
    german: "Das Konzert hat uns sehr gut gefallen."
},
{
    english: "She is making breakfast.",
    german: "Sie bereitet das Frühstück zu."
},
{
    english: "I would like to improve my German.",
    german: "Ich möchte mein Deutsch verbessern."
},
{
    english: "The shop opens at nine o'clock.",
    german: "Das Geschäft öffnet um neun Uhr."
},
{
    english: "He is carrying a heavy bag.",
    german: "Er trägt eine schwere Tasche."
},
{
    english: "We are going shopping after work.",
    german: "Wir gehen nach der Arbeit einkaufen."
},
{
    english: "She writes in her diary every evening.",
    german: "Sie schreibt jeden Abend in ihr Tagebuch."
},
{
    english: "I forgot to bring my ID card.",
    german: "Ich habe vergessen, meinen Ausweis mitzubringen."
},
{
    english: "The hotel is close to the beach.",
    german: "Das Hotel liegt in der Nähe des Strandes."
},
{
    english: "Can you explain this word?",
    german: "Kannst du dieses Wort erklären?"
},
{
    english: "My father is cooking dinner.",
    german: "Mein Vater kocht das Abendessen."
},
{
    english: "We have a meeting tomorrow morning.",
    german: "Wir haben morgen früh eine Besprechung."
},
{
    english: "She usually walks to school.",
    german: "Sie geht normalerweise zu Fuß zur Schule."
},
{
    english: "I need a little more time.",
    german: "Ich brauche etwas mehr Zeit."
},
{
    english: "The park is full of flowers.",
    german: "Der Park ist voller Blumen."
},
{
    english: "He is talking on the phone.",
    german: "Er telefoniert."
},
{
    english: "We are happy to see you again.",
    german: "Wir freuen uns, dich wiederzusehen."
},
{
    english: "I make my bed every morning.",
    german: "Ich mache jeden Morgen mein Bett."
},
{
    english: "She waters the plants every evening.",
    german: "Sie gießt jeden Abend die Pflanzen."
},
{
    english: "We clean the kitchen after dinner.",
    german: "Wir putzen die Küche nach dem Abendessen."
},
{
    english: "He takes the dog for a walk every afternoon.",
    german: "Er geht jeden Nachmittag mit dem Hund spazieren."
},
{
    english: "I usually take a shower before breakfast.",
    german: "Ich dusche normalerweise vor dem Frühstück."
},
{
    english: "She is setting the table.",
    german: "Sie deckt den Tisch."
},
{
    english: "We often eat lunch together.",
    german: "Wir essen oft zusammen zu Mittag."
},
{
    english: "He is washing the dishes.",
    german: "Er spült das Geschirr."
},
{
    english: "I open the windows every morning.",
    german: "Ich öffne jeden Morgen die Fenster."
},
{
    english: "My sister is folding the clothes.",
    german: "Meine Schwester faltet die Kleidung."
},
{
    english: "The coffee smells very good.",
    german: "Der Kaffee riecht sehr gut."
},
{
    english: "Please put your shoes by the door.",
    german: "Bitte stell deine Schuhe an die Tür."
},
{
    english: "We are having soup for dinner.",
    german: "Wir essen heute Suppe zum Abendessen."
},
{
    english: "He forgot to lock the door.",
    german: "Er hat vergessen, die Tür abzuschließen."
},
{
    english: "I need to wash my clothes today.",
    german: "Ich muss heute meine Kleidung waschen."
},
{
    english: "She is preparing lunch for the family.",
    german: "Sie bereitet das Mittagessen für die Familie zu."
},
{
    english: "We always eat fresh fruit.",
    german: "Wir essen immer frisches Obst."
},
{
    english: "The room is clean and tidy.",
    german: "Das Zimmer ist sauber und ordentlich."
},
{
    english: "I drink a glass of water every morning.",
    german: "Ich trinke jeden Morgen ein Glas Wasser."
},
{
    english: "He is making a cup of coffee.",
    german: "Er macht eine Tasse Kaffee."
},
{
    english: "My mother is baking bread.",
    german: "Meine Mutter backt Brot."
},
{
    english: "The children are brushing their teeth.",
    german: "Die Kinder putzen sich die Zähne."
},
{
    english: "We usually watch the news in the evening.",
    german: "Wir schauen abends normalerweise die Nachrichten."
},
{
    english: "I like keeping my room organized.",
    german: "Ich halte mein Zimmer gern ordentlich."
},
{
    english: "She is putting the books on the shelf.",
    german: "Sie stellt die Bücher ins Regal."
}
];

let currentIndex = 0;

function loadCard() {

    document.getElementById("englishSentence").textContent =
        sentences[currentIndex].english;

    document.getElementById("germanSentence").textContent =
        sentences[currentIndex].german;

    document.getElementById("answer").style.display = "none";

    document.querySelector(".progress").textContent =
        `${currentIndex + 1} / ${sentences.length}`;
}


document.getElementById("showAnswerBtn").addEventListener("click", function () {

    document.getElementById("answer").style.display = "block";

});


document.getElementById("nextBtn").addEventListener("click", function () {

    if (currentIndex < sentences.length - 1) {
        currentIndex++;
        loadCard();
    }

});


document.getElementById("prevBtn").addEventListener("click", function () {

    if (currentIndex > 0) {
        currentIndex--;
        loadCard();
    }

});


loadCard();