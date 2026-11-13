# Portfolio Task v2

# Datans Väg 
För att hämta data via en api länk, tar jag hjälp av `fetch()` funktion i en `Async/Await` funktion. Vad jag får för `response` vid hämtningen, syns bland annat på `status:` eller `ok:`. Det dedikerar ifall hämtningen gick bra eller dåligt. 

Vad jag är ute efter är JSON-datan och måste då framkalla den med hjälp av `json()` funktionen. Vad jag får tillbaka är en rad egenskaper som jag kan spara i specifika variabler. De data som hämtades efter `json()`, var uppställt från de första till den senaste repository. Jag behövde vända om innehållet med hjälp av `toReversed()` så att det senaste repositories hamnade överest. 

Om datan hämtas utan någon hinder och visar `status: 200` efter `fetch()`, skickas datan vidare via en funktion som renderar de fyra senaste repositories från min `Github` på `project` sidan med en dröjsekund för att höja användarkänslan av att det samlas in data under väntan.

Går det fel vid hämtningen och det visas `ok: false`. Skickas felet av `throw new` `Error` och informationen sparas `error` parameten som jag kan `console.log` samt rendera informationen åt användaren på `project` sidan,

Finns även med ett meddelande till användare att om jag inte har någon repositories tillgängliga.


# Två Datakällor 
På `about` sidan uppvisas data som är sparade intern i ett `JSON`-fil som jag själv skapat och kan hantera filen vid behov. 

Medan på `project` sidan hämtas data från ett extern databas `API` och jag har mindre kontroll att hantera ändringar.

I princip är kodstukturen mycket lika varadra och hanteras på simulär sätt samt förväntar mig få datan i `JSON`-format i slutändan. Detta struktur fungerar bra och jag behöver inte använda av annat sätt att hantera datahämtningen. 

Det rendera fram olika meddelande åt användare beroende på situationen vid upphämtningen. I självaste länken som sätts in i `fetch()` funktionen, inkluderar en `https://api`-benämning i det ena. Det visar tydligt att det handlar om en upphämtningen från nätet.  


# DOM och Händelser 
När specifik data är hämtad och sparade. Skickas den data vidare till en renderare via ett `function` där datan lagras i dess parameter. Tanken är att visa datan åt användaren och skapa ett/flera elementer. 

För att få fram specifika innehåll från funktionens parameter. Går parameten igenom en `forEach()` funktion som radar upp de innehåll som finns i och hämtar varje egenskap en gång åt gången.

Innnanför `forEach()` funktionen kan jag skapa ett element med hjälp av `createElement("li")`. På `li`-elementet skriver jag själv ett `HTML`-innehåll som skapar fram ett större element och i den placeras det särskilda data-egenskaper som kommer ur parametern som i verkligheten är en `object` och behöver skala ner innanför ett `${..}` för nå rätt egenskap.

När de `li`-elementerna med rätt objekt-egenskaper är klara. Behövs hitta rätt anhängare åt `li`-elementer. Jag lyssnar in efter en speciellt `lu`-element i `DOM:en` och sparar den som "förälder"-variabel åt `li`-elementerna som är sparade i ett "barn"-variabel.

Dessa två variablar behöver jag sättas ihop med hjälp av `append()` så att användaren på `about` och `project` sidan se data-innehållet.

Tycker om att skriva fram HTML-strukturen. Det är smidigt att skapa fram "barnet" och fiska fram "föräldern". Jag har lätt översikt på HTML-innehållet och läsbarheten är tydligt.

# Markup du inte skrivit för hand
Bortsett att skriva självaste `HTML` strukturen för tydlig översikt och enklare förståelse för vad varje element har för syfte. Har jag också använt byggblockar som bildar ett element, sparat i ett variabel. Den element sparat i variabeln använder jag för att lägga till olika attributer som den annars skulle haft i ett skrivet element.

För `project` sidan har jag skapa fram olika `p`-element med hjälp av `createElement()` för varje situation som uppstår vid upphämtning av data. Dessa elementer får framförallt olika attribute `role` typer och olika `class` namn men bär på likadana färger på text vid uppvisning på surfsidan. 

För att skifta mellan samma element utifrån utgångspunkt med olika syfte, valde jag använda att `DOM`-skapa dessa element. I detta fall är dessa elementer korta och enkla tagg element.


# Temaväxlingen 
I tidigare U01 hade jag tema växling med hjälp av metoden `input:checked`. Jag behövde använda `visibility: hidden` för att dölja `input` för användaren. Koppla den till en `label` med `type: button` för att temaväxla genom att kolla in om checkboxen var sann. Om det var sann så las det till en `dark theme` på `body` i `DOM`. 

Nu i U02 valde jag ändra `label`-knappen till en tillämplig `button`-knapp för rätt semantik och tillgänglighet. Tema växlingen sker nu efter tillståndet på attributes värde i `aria-pressed`. Om värde är `true` ändras det till `dark theme`. 

Jag föredrar att använda `button` då temaväxlingen kan ändras geonom ett `enter` knapptryck när användaren tabb-navigerar sidan. Den första tema lösningen var för att utmana mig, lägga till något extra och bara ser 'hur sidan hade sett ut med ett tema växling', byggt med enbart HTML och CSS.


# När det inte går som tänkt 
Eftersom jag använder en `API` länk för att hämta data från ett extern databas. Kan svaret retuneras olika ut och den nås genom att använda `console.log()` på den variabel där jag lagrar responsen i. Men hur kan jag göra så att användaren får den information. Jag manipulerar `DOM` och renderar fram en tydlig meddelande åt användaren om vad som uppstått.

Om användaren behöver vänta på att hemsidan ska uppdateras, möts användaren av texten som informerar att laddning pågår med en laddnings icon. Text elementet har olika `role` och `class`-namn beroende på vad tillståndet är. Exempelvis har jag skapat för `laddning` för väntetiden, `error` då datan inte kunde hämtas rätt och `empty` när min repositories är tom på GitHub.

Det är trevligare användarupplevelse om användaren blir upplyst om processen. Det visar att besökaren är en viktig klient och kan därmed välja besöka hemsidan återigen för att kolla in läget.


# Styrkor och brister

# AI-vertyg