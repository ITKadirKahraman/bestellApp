# 🍔 BestellApp

Eine moderne und responsive Bestellplattform, entwickelt mit **HTML**, **CSS** und **Vanilla JavaScript**.  
Benutzer können verschiedene Gerichte durchsuchen, Produkte in den Warenkorb legen, Mengen anpassen und den Gesamtpreis inklusive Lieferkosten berechnen. Der Warenkorb wird zusätzlich im **LocalStorage** gespeichert, sodass Bestellungen beim erneuten Öffnen der Seite erhalten bleiben.

---

## 🚀 Features

- 🍔 Dynamisches Rendern der Gerichte
- 🍕 Kategorien für Burger, Pizza und Salate
- 🛒 Interaktiver Warenkorb
- ➕ Artikel hinzufügen
- ➖ Menge erhöhen und verringern
- 🗑️ Produkte automatisch entfernen, wenn die Menge 0 erreicht
- 💰 Automatische Berechnung von:
  - Zwischensumme
  - Lieferkosten
  - Gesamtpreis
- 💾 Speicherung des Warenkorbs im LocalStorage
- 📱 Responsive Design für Desktop, Tablet und Smartphone
- 📦 Bestellbestätigung über Dialogfenster

---

## 🛠️ Verwendete Technologien

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage API
- Flexbox
- Responsive Webdesign
- Node.js Test Runner (`node:test`)

---

## 📸 Vorschau

![BestellApp Preview](assets/img/header.png)

---

## 📂 Projektstruktur

```text
BestellApp/
│
├── assets/
│   ├── icons/
│   └── img/
│
├── scripts/
│   ├── db.js
│   ├── templates.js
│   └── ...
│
├── styles/
│   ├── root.css
│   ├── standard.css
│   ├── assets.css
│   └── queryMedia.css
│
├── script.js
├── styles.css
├── index.html
└── package.json
```

---

## ⚙️ Installation

Repository klonen

```bash
git clone https://github.com/ITKadirKahraman/bestellApp.git
```

In den Projektordner wechseln

```bash
cd bestellApp
```

Projekt starten

```bash
index.html
```

oder mit Live Server öffnen.

---

## 🧪 Unit Tests

Für die Kernfunktionen der Anwendung wurden Unit Tests mit dem nativen **Node.js Test Runner** erstellt.

### Getestete Funktionen

- ✅ Berechnung des Gesamtpreises
- ✅ Berechnung der Artikelmenge
- ✅ Hinzufügen von Produkten zum Warenkorb
- ✅ Prüfung von Produktobjekten
- ✅ Überprüfung von Array-Strukturen

### Test-Framework

- Node.js (`node:test`)
- assert/strict

### Tests starten

```bash
npm test
```

Beispiel:

```javascript
test("berechnet den Gesamtpreis", () => {
    const basket = [
        {
            name: "Pizza",
            price: 15,
            amount: 2
        }
    ];

    assert.equal(berechneGesamtpreis(basket), 30);
});
```

---

## 📱 Responsive Design

Die Anwendung wurde für verschiedene Bildschirmgrößen optimiert.

Unterstützt werden:

- 💻 Desktop
- 📱 Smartphone
- 📲 Tablet

Auf kleineren Geräten wird der Warenkorb als seitliches Overlay dargestellt.

---

## 🧠 Was ich in diesem Projekt gelernt habe

Während der Entwicklung konnte ich meine Kenntnisse in folgenden Bereichen vertiefen:

- Dynamisches Rendern mit JavaScript
- DOM-Manipulation
- Arbeiten mit Arrays und Objekten
- Event Handling
- LocalStorage
- Responsive Webdesign
- Komponentenbasierter Aufbau
- Berechnungen mit JavaScript
- Schreiben von Unit Tests
- Strukturierung größerer Projekte

---

## 🔮 Geplante Erweiterungen

- 🔍 Suchfunktion für Gerichte
- ❤️ Favoriten speichern
- 👤 Benutzerkonto
- 💳 Zahlungsintegration
- 🌙 Dark Mode
- 🌐 Mehrsprachigkeit
- 🔗 Backend-Anbindung
- 📦 Bestellhistorie

---

## 👨‍💻 Entwickler

**Kadir Kahraman**

GitHub:
https://github.com/ITKadirKahraman

---

## 📄 Lizenz

Dieses Projekt wurde zu Lern- und Übungszwecken entwickelt.