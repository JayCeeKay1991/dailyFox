"use strict";

// Daily Fox

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");

const containerApp = document.querySelector(".app");
const containerImage = document.getElementById("foxImage");
const foxText = document.querySelector(".foxText");
const foxTextTitle = document.querySelector(".foxTextTitle");
const remix = document.querySelector(".btn--remix");

const login = document.querySelector(".login");
const btnLogin = document.querySelector(".login__btn");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const footer = document.querySelector(".footer");

// Data
const accountDetails = {
  userName: "1",
  pin: "1",
};

// Functions

const findImage = function () {
  const imageNumber = Math.floor(Math.random() * 122) + 1;
  containerImage.src = `https:\/\/randomfox.ca\/images\/${imageNumber}.jpg`;
};

const findFact = function () {
  const factNumber = Math.floor(Math.random() * foxFacts.length);
  foxTextTitle.textContent = `Fox fact #${factNumber + 1}`;
  foxText.textContent = `${foxFacts[factNumber]}`;
};

const updateDate = function () {
  const date = new Date();
  labelDate.textContent = Intl.DateTimeFormat("en-GB").format(date);
};

const init = function() {
  findImage();
  findFact();
  updateDate();
}

// Login

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  // check if the credentials are correct
  if (
    accountDetails?.pin === inputLoginPin.value &&
    accountDetails?.userName === inputLoginUsername.value
  ) {
    labelWelcome.textContent = "Dein täglicher Fuchscontent.";
    containerApp.style.opacity = 100;
  }

  init();

  // Hide login, show text, show button
  login.classList.add('hidden');
  containerApp.classList.remove('hidden')
  footer.classList.remove('hidden')

});

// Remix

document.querySelector(".btn--remix").addEventListener("click", function () {
  init();
});

const foxFacts = [
  "Füchse sind hervorragende Nachtjäger. Ihre Augen sind speziell angepasst, um im Dunkeln sehen zu können. Hinter den lichtempfindlichen Zellen liegt eine weitere Schicht, das Tapetum lucidum, die das Licht durch das Auge zurückreflektiert. Dadurch verdoppelt sich die Intensität des Lichts das der Fuchs sehen kann, was ihn zu einem ausgezeichneten Beutegreifer macht",

  "Füchse gelten als Einzelgänger. Im Gegensatz zu anderen Mitgliedern der Hundefamilie sind Füchse keine Rudeltiere. Füchse neigen dazu, allein oder in kleinen Familiengruppen zu leben, die typischerweise die Fuchsmutter, die sogenannte Fähe, und etwa 6 Junge umfassen.",

  "Füchse nutzen das Magnetfeld der Erde, um zu jagen. Forscher haben herausgefunden, dass Füchse die ersten Tiere der Welt sind, die das Erdmagnetfeld nutzen, um die Entfernung und Richtung ihrer Beute zu bestimmen. Sie können dies zu ihrem Vorteil nutzen, wenn sie auf der Jagd nach kleinen Tieren im hohen Gras sind.",

  "Früher hatten die Menschen Angst vor Füchsen, aber eigentlich gelten sie als freundliche Tiere. Die meisten Fuchsarten sind dafür bekannt, dass sie freundlich, neugierig und verspielt sind, wenn sie mit anderen Füchsen und Tieren zusammen sind. Es gibt auch zahlreiche Beispiele dafür, dass Füchse mit Menschen spielen und sich mit ihnen anfreunden. Es ist bekannt, dass Füchse mit Bällen spielen und sie oft von Golfplätzen und Gärten mitnehmen",

  "Füchse pflanzen sich nur einmal im Jahr fort, und die Paarung findet normalerweise im Januar oder Anfang Februar statt. Die Füchsin bleibt dann etwa 60 Tage lang trächtig und bringt im März oder April einen typischen Wurf von 4 bis 6 Jungen zur Welt",

  "Junge Füchse können bei ihrer Geburt weder sehen noch laufen oder sich thermoregulieren. Die Mütter säugen ihre Jungen normalerweise in den ersten zwei Lebensmonaten, bis sie diese Funktionen entwickeln. In der Zwischenzeit geht der männliche Fuchs auf die Jagd für die Familie. Die Mutter bleibt mit den Jungen etwa drei Wochen lang im Bau, bevor die Jungen sich zum ersten Mal mit ihrer Mutter hinauswagen.",

  "Füchse leben nicht nur in ländlichen Gebieten, sondern auch in Städten. Das liegt daran, dass es in den Städten ein großes Angebot an Nahrung und Unterschlupf gibt. Stadtfüchse graben ihre Baue in der Regel in der Erde unter Büschen oder Gartenhäuschen. Einige graben auch unter Baumwurzeln und Bahndämmen",

  "Füchse haben eine sehr abwechslungsreiche Ernährung. Sie sind erfahrene Jäger, die Kaninchen, Nagetiere, Vögel, Frösche und Regenwürmer erbeuten. Aber sie sind keine Fleischfresser - sie sind eigentlich Allesfresser, da sie auch Beeren und Früchte fressen. Wenn Sie Ihre Füchse im Garten füttern möchten, gibt es spezielles Fuchs- und Dachsfutter das so zusammengestellt wird, dass es alle Nährstoffe enthält, die ein Fuchs braucht.",

  "Füchse haben ein ausgezeichnetes Gehör. Forscher fanden heraus, dass Füchse ein exzellentes Gehör für niedrige Frequenzen haben. Sie können das Ticken einer Uhr aus 36 Metern Entfernung hören und sogar Nagetiere, die unter der Erde graben!",

  "Das Lied What Does The Fox Say? ist eines der beliebtesten Fuchslieder. Der Song wurde erstmals 2013 von dem Künstler Ylvis veröffentlicht und stieg schnell zum Top-Trending-Video des Jahres 2013 auf YouTube auf. Der Song erreichte außerdem drei Wochen lang den sechsten Platz der Billboard Hot 100 in den Vereinigten Staaten. Aufgrund seiner Popularität wurde der Song auch zu einem beliebten Meme in der modernen Popkultur.",

  "Polarfüchse frieren in kalten Klimazonen nicht. Diese Füchse sind an den extremsten kalten Orten der Erde zu finden. Polarfüchse lassen sich von kalten Temperaturen bis zu -70 Grad Celsius nicht stören.  Der Polarfuchs ist auch die einzige Fuchsart, deren Pfotenballen mit Fell bedeckt sind.",

  "Füchse und Katzen haben viele Gemeinsamkeiten. Obwohl sie mit Hunden und Wölfen verwandt sind, haben Füchse viele Gemeinsamkeiten mit einer typischen Katze. Wie viele Katzen sind Füchse am aktivsten, wenn die Sonne untergeht, und sie haben auch empfindliche Schnurrhaare. Außerdem haben sie Widerhaken auf der Zunge, die ihnen helfen, sich und ihre Jungen zu putzen. Sie sind zudem die einzigen Mitglieder der Hundefamilie, die sich so anmutig und wendig wie eine Katze bewegen können.",

  "Der neunschwänzige Fuchs ist in vielen ostasiatischen Kulturen ein weit verbreitetes mythologisches Wesen. Es wird allgemein angenommen, dass er die Gestalt einer schönen Frau annimmt, um Männer zu verführen und ihre Körper zu verzehren. Einige Geschichten besagen jedoch, dass Fuchsgeister als gutes Omen gelten.",

  "Der Kanadische Marmorfuchs stammt aus der Familie der Hunde und gilt als eine der seltensten Fuchsarten. Diese Füchse entstehen durch genetische Mutationen und können auch als Farbphasen bezeichnet werden. Diese Füchse haben in der Regel ein weißes Fell mit schwarzen Flecken über Augen, Gesicht und Ohren. In den Vereinigten Staaten ist es in einigen Bundesstaaten erlaubt, sie als Haustiere zu halten und zu trainieren",

  'Es gibt eine Sternenkonstellation, die als "Der Fuchs" bekannt ist. Vulpecula ist der lateinische Name und bedeutet "Kleiner Fuchs". Dieses Sternbild zeigt einen Fuchs, der eine Gans in seinem Maul trägt. Es wurde im Jahr 1687 von dem polnischen Astronomen Johannes Hevelius eingeführt. Die Vulpecula befindet sich in der Mitte des Sommerdreiecks, mit angrenzenden Sternbildern wie Cygnus, Lyra, Hercules, Sagitta, Delphinus und Pegasus.',

  "Füchse können über 40 verschiedene Laute von sich geben. Wenn Sie jemals diese schreiähnlichen Heullaute gehört haben, wissen Sie wahrscheinlich, von welcher Art von Lauten wir sprechen. Füchse können eine Vielzahl von Schreien, Bellen und Heulen erzeugen, die von hohen Tönen bis hin zu tieferen Tönen reichen können, um verschiedene Dinge zu kommunizieren.",
];
