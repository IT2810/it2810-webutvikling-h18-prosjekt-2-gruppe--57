# Prosjekt-2-gruppe--57

## Innhold
Programmet gir brukeren tilgang til et galleri der brukeren selv kan sette opp en eller flere utstillinger.
Brukeren blir møtt av et navigasjonsfelt i toppen for å velge mellom utstillingene, 
hver utstilling har tre felt, et for figuren, et for teksten og et for valgene. 
For hver utstilling kan brukeren velge én av tre kategorier lyd, tekst og figur, valgene blir lagret
slik at brukeren kan komme tilbake til samme utstilling. 
Når en bruker velger en utstilling for første gang får han forhåndsvalgt lyd, tekst, og figur. 
Selv om designet er ment å være noen lunde pent, er hovedfokuset at applikasjonen skal være enkel å bruke og 
dermed at designet skal være selvforklarende.

### Figurer
Vi generererte figurene til programmet selv ved hjelp av Adobe Illustrator og eksporterte de som SVG.
Enhver figur blir lastet inn når brukeren utfører et valg ved hjelp av fetch() og lagret lokalt for raskere visning.

### Tekst
Tekstene er hentet fra https://www.gutenberg.org/ og lagret i JSON-formatet. På samme måte som figurene blir de
lastet inn ved hjelp av fetch() og lagret lokalt. 

### Lyd
Lydfilene er hentet fra https://freesound.org. På grunn av filstørrelsene kan vi ikke lagre disse lokalt som ved
figurene og tekstene, derfor kan man desverre oppleve en viss forsinkelse. 

## Struktur
Applikasjonen er delt inn i ulike komponenter som hver utfører sin oppgave. Main er hovedkomponenten og oppretter en 
Content. Content håndterer all interaksjon, det vil si hvilken fane og hvilke kategorier brukeren har valgt. Denne
informasjonen blir så lagret i state og sendt videre som props til View, PoeATree, og Music. Disse komponentene vil ta 
utgangspunkt i informasjonen de fikk og sjekke om filene ligger lokalt ellers henter de filene fra serveren for så 
å displaye/spille de av. 
Årsaken til at vi endte opp med denne strukturen var at vi ville skille mellom logikken for brukergrensesnittet
og logikken for å håndtere filene. Et alternativ ville vært å flytte filhåndteringen opp i systemet og dermed få 
såkalte 'stateless components'. 

## Teknologi


### Caching
Valgene til brukeren blir husket, men for at innholdet skal virke sømløst kan vi ikke hente de fra serveren 
hver gang brukeren skifter fane. Løsningen er å lagre filene lokalt på brukerens enhet. Dette gjøres ved hjelp av 
sessionStorage-objektet som er gjort tilgjengelig av nettleseren. Filene blir lagret som et nøkkel-verdi par som
gjør at vi kan enkelt sjekke om valgt fil allerede har blitt lagret. 
I motsetning til localStorage vil sessionStorage slette filene når brukeren lukker nettleseren. 

## Design
### CSS-Grid
Vi startet med en enkel grid-layout bestående av navbaren og hovedinnholdet. Deretter bestemte vi oss for å opprette 
en subgrid i hovedkomponentet slik at vi enklere kunne flytte tekst-,figur- og valgkomponentene avhengig av 
skjermstørrelse. Vi benyttet media-queries for å justere layouten til subgriden. 

### Flex 
I tillegg til å flytte på komponentene brukte vi Flexbox for å justere på selve innholdet til komponentene for mindre 
enheter. 

## Versjonskontroll
Som kravene til prosjektet spesifiserte brukte vi Github som versjonskontrollsystem. 
Dette gjorde det veldig enkelt å samarbeide. Vi brukte issues for å kateogorisere hver commit, 
men siden det ble en del individuell arbeid på på ulike deler av applikasjonen brukte vi ikke mye tid 
på dette. I et større og mer langvarig prosjekt hadde vi definitivt brukt issues mer aktivt. 
Vi brukte også bare en master-branch, i etterpåklokskapens navn var dette ikke et bra valg, 
da det førte til en del merge-konflikter. Hadde vi gjort prosjektet på nytt hadde vi valgt å bruke
en development branch og minst en features branch. 

## Testing
For å forsikre en god brukeropplevelse testet vi applikasjonen på ulike nettlesere på både
Antergos Linux(Firefox developer, Chromium) og Windows 10(Firefox developer, Edge, Chrome). 
Applikasjonen er videre testet på Huawei P20 Pro(Firefox,Chrome) og Huawei Mate 10 pro(Firefox).
Under utvikling brukte vi responsive design mode i Firefox developer for å raskt og enkelt fikse 
bugs som oppstod på mindre skjermer. 

## Kilder 
https://reactjs.org/docs/components-and-props.html
https://reactjs.org/docs/state-and-lifecycle.html
https://reactjs.org/docs/handling-events.html
https://reactjs.org/docs/forms.html
https://www.robinwieruch.de/local-storage-react/
https://codepen.io/rstrahl/pen/yyEYBx
https://www.robinwieruch.de/react-fetching-data/
