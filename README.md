# Notification library extension

### Wat is de library?
deze library bevat functies omtrent het maken, editen, verwijderen en weergeven van notifications die opgeslagen staan in een JSON bestand. De notifications in deze library bevatten 4 waardes waarmee je de notifications kan bewerken. Dit is de 'TITEL, TEXT, IMAGE, TIJDSDUURATIE'. Dit geeft je de mogelijkheid om de 4 belangrijkste funties van een web notificatie aan te passen.

### Toepassing
Deze library is een handige set aan functies die iedereen op weg kan helpen bij het maken en veranderen van zijn webnoitifications. Als je simpelweg webnotificaties wil testen zijn er functies die voor jou de rij aan voorgschreven notificaties laat zien. Stel je wil meer doen met je notificaties en wil ze bijvoorbeeld kunnen toevoegen of verwijderen dan geeft de library jou de keuze om dit te gebruiken. Tevens zorgt de library voor een handig overzicht over alle notificaties die je al in je JSON hebt staan.

### Demo

https://i294444.hera.fhict.nl/example/

## Installatie

### 1. Download de files
Het gebruiken van de library is alleen mogelijk zodra je de bestanden download en toevoegd aan je eigen project.

### 2. Gebruik het voorbeeld of link de JS file
Er zijn 2 manieren waarop je de library kan gebruiken. De eerste manier is door gewoon alle bestanden te downloaden en gebruik te maken van de voorbeeld JSON en Index.html

De andere manier om van start te gaan is door zowel index.js en index2.js te linken in jou project. dit kan als volgt.
```javascript
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

    <div class="eigen-gemaakte-content">
        <p>Hier staat je eigen gemaakte content</p>
    </div>

</body>
<script type="text/javascript" src="../src/index.js"></script>
    <script type="text/javascript" src="../src/index2.js"></script>
</html>
```

### 2. notificatie sturen

het sturen van een normale notificatie is gelukkig een ontzettend makkelijke functie je gewoon kan aanroepen in je html file. Dit zou dan als volgende uitzien waarbij je bijvoorbeeld een button kan maken die je dan de data meegeeft die je wil zien verschijnen in je notificatie. De library is zodanig opgesteld dat je alleen maar een Title, Text en Image kan meegeven aan de functie.
```javascript
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

    <div class="eigen-gemaakte-content">
        <p>Hier staat je eigen gemaakte content</p>
    </div>
    
     <button class="button-primary" onclick="wn.send('This boi','hello little computer','../src/TestP.png')">Notification test</button>
    
</body>
<script type="text/javascript" src="../src/index.js"></script>
    <script type="text/javascript" src="../src/index2.js"></script>
</html>
```
### 3. JSON  editing

Het gebruiken en aanpassen van een JSON is een wat lastigere toepassing. Om dit in een keer te laten werken zonder dat je code hoeft aan te passen zou ik aanraden om gebruik te maken van de voorbeeld JSON. Dit aangezien de sommige functies precies afgesteld moeten worden voor de opbouw van de JSON. Het voorbeeld JSON bestand wordt in de code al automatisch opgehaald maar je kan dit natuurlijk aanpassen zodat het ook werkt met je eigen JSON. Hieronder zal ik stukken code laten zien waarbij je kan zien welke functies er beschikbaar zijn.


Voeg een testitem toe aan de JSON
```javascript
<body>

     <button class="button-primary" onclick="addarray()">Voeg item toe aan JSON</button>
    
</body>
```
Verwijder de eerste notifcatie uit de JSON
```javascript
<body>

     <button class="button-primary" onclick="removearray()">Delete notificatie</button>
    
</body>
```
Dit voegt 4 text area's en een button toe waarmee je costum data kan toevoegen aan de JSON
```javascript
<body>

      <input id="name" type="text" placeholder="Title"> <input id="speech" type="text" placeholder="text"><input id="image" type="text" placeholder="imagepath" ><input id="time" type="text" placeholder="Miliseconds"> <button class="button-primary" onclick="erbijerbij()">Add the above comment to the JSON</button></span>
 
</body>
```
Deze functie is uniek en zal proberen om je JSON bestand te visualiseren in een tabel. Bij deze tabel zijn delete knoppen ingebouwd zodat je precies kan kiezen welke notificaties je kan verwijderen.
```javascript
<body>

      <button class="button-primary" onclick="CreateTableFromJSON()">Teken JSON tabel</button>

</body>
```

### 4. Aanpassen JSON en tabel

Als je het belangrijk vind om je eigen JSON te maken en gebruiken met deze library dan moet je er goed op letten dat je het bestand goed doet inladen in de functie die de "neppe" globale variabele defineert. Deze variabele is in de huidige versie van de library waar alle functies de JSON data vandaan halen. De library is ook om te bouwen zodat de aanpassingen die je maakt aan de JSON kan doorvoeren aan de server maar dit is niet verwerkt in deze versie. Dit is iets waar ik in de toekomst naar zal kijken.

```javascript
(function (globals) {
    "use strict";
    globals.jsonfile = [];
}((1, eval)('this')));

(function loadData() {
    fetch('../src/verhaaltje.json').then(function (response) {          de path achter fetch moet je aanpassen
        return response.json();                                         zodat hij linkt naar jou JSON
    }).then(function (data) {
        jsonfile = data;
        console.log(jsonfile);
    })
})();

```

## autheur 

* **Kevin Grond**

