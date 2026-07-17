export function berechneGesamtpreis(artikel) {
    let summe = 0;
    for(const a of artikel) {
        summe = summe + (a.price * a.amount);
    }

    return summe;
}