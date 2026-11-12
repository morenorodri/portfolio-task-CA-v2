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

I princip är kodstukturen mycket lika varadra och hanteras på simulär sätt samt förvänta mig få datan i `JSON`-format i slutligen. Olika meddelande uppvisas åt användare beroende på situationen vid upphämtningen. I självaste länken som sätts in i `fetch()` funktionen, inkluderar en `https://api`-benämning som visar att detta handlar om något som ligger ute på webben.  


# DOM och Händelser 

# Markup du inte skrivit för hand

# Temaväxlingen 

# När det inte går som tänkt 

# Styrkor och brister

# AI-vertyg