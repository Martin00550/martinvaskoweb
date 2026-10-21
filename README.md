# Webové štúdio

Jednoduchá responzívna stránka v slovenčine pre predaj tvorby webových stránok. HTML, CSS a JavaScript bez balíčkov a externých zdrojov.

## Lokálne spustenie

```sh
cd /workspace/martinvaskoweb
python3 -m http.server 3000 --bind 0.0.0.0
```

Statické súbory možno nasadiť na hosting s HTTPS bez buildu.

## Nasadenie na Vercel

1. Vo Vercel zvoliť **Add New → Project** a importovať `Martin00550/martinvaskoweb`.
2. Vybrať produkčnú vetvu `main`, framework **Other** a koreňový adresár repozitára.
3. Build Command a Install Command ponechať prázdne; Output Directory ponechať `.` (koreň projektu).
4. Nie sú potrebné žiadne premenné prostredia. Kliknúť **Deploy**.
5. Po nasadení skontrolovať hlavnú stránku, kontakt, ochranu súkromia a zobrazenie na mobile. V nastaveniach projektu možno pripojiť vlastnú doménu.

`vercel.json` nastavuje statický projekt a základné bezpečnostné HTTP hlavičky. Ďalší push do `main` spustí nové produkčné nasadenie po prepojení repozitára s Vercel.

## Pred zverejnením

- Skontrolovať aktuálnosť firemných údajov. Poskytol ich vlastník zo svojho profilu Transparex; profil nebolo možné nezávisle načítať.
- Skontrolovať pravidlá súkromia podľa reálneho hostingu, poskytovateľov a skutočnej doby uchovávania dopytov.
- V Meta Business použiť presne zhodné obchodné meno, adresu a ďalšie údaje s dokladmi. Dokončiť overenie vlastníctva domény podľa pokynov Meta; overovací kód nevymýšľať.
- Ukážka webu v úvode je ilustračná, nie referencia klienta. Web nesľubuje schválenie Meta ani výsledky kampaní.

Žiadne cookies, analytika, Meta Pixel ani kontaktný formulár nie sú implementované. Pri ich pridaní treba aktualizovať informácie o súkromí a prípadne súhlasy.
