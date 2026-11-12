# Portfolio Task v2

# Datans Väg 
För att hämta data via en api länk, tar jag hjälp av `fetch()` funktion i en `Async/Await` funktion. Vad jag får för `response` vid hämtningen, syns bland annat på `status:` eller `ok:`. Det dedikerar ifall hämtningen gick bra eller dåligt. 

Vad jag är ute efter är JSON-datan och måste då framkalla den med hjälp av `json()` funktionen. Vad jag får tillbaka är en rad egenskaper som jag kan spara i specifika variabler. De data som hämtades efter `json()`, var uppställt från de första till den senaste repository. Jag behövde vända om innehållet med hjälp av `toReversed()` så att det senaste repositories hamnade överest. 

Om datan hämtas utan någon hinder och visar `status: 200` efter `fetch()`, skickas datan vidare via en funktion som renderar de fyra senaste repositories från min `Github` på `project page` med en dröjsekund för att höja användarkänslan av att det samlas in data under väntan.

Går det fel vid hämtningen och det visas `ok: false`. Skickas felet av `throw new` `Error` och informationen sparas `error` parameten som jag kan `console.log` samt rendera information åt användare på `project page`,

Finns även med ett meddelande till användare att om jag inte har någon repositories tillgängliga.


# Två Datakällor 

# DOM och Händelser 

# Markup du inte skrivit för hand

# Temaväxlingen 

# När det inte går som tänkt 

# Styrkor och brister

# AI-vertyg