# 🌱 Template Modern Multi-Pagină pentru Asociații Studențești

Un model de site prietenos, cald, cu forme rotunjite și structură clară, conceput special pentru comunități și asociații de studenți.

---

## 📁 Structura Paginilor

Proiectul conține pagini separate, dedicate fiecărei secțiuni cheie:

1. **`index.html`** — **Pagina Principală (Acasă)**:
   - Hero primitor și prezentare generală ASMO
   - Panou de cifre și statistici cheie (ani de activitate, membri, evenimente, beneficiari)
   - Teaser „Cine suntem”
   - Teaser departamente și evenimente viitoare
2. **`despre.html`** — **Despre Noi**:
   - Povestea și istoricul asociației
   - Misiune, viziune și piloni
   - Echipa de conducere completă (Consiliul Director, Comitete, Divizii) cu fotografii și roluri
   - Filtrare pe categorii de conducere
3. **`departamente.html`** — **Departamente & Comitete**:
   - Detalierea comitetelor SCOPH, SCOME, SCORA, SCORP, Schimburi Clinice și PR
   - Coordonatori cu fotografii și atribuții
   - Diviziile de suport (Capacity Building, IT, Entertainment, HR, PR, Fundraising)
4. **`proiecte.html`** — **Proiecte & Evenimente**:
   - Filtrare pe categorii (Sănătate Publică, Educație Medicală, Integrare & Social)
   - Carduri pentru congrese, simularea admiterii, workshop-uri, campanii de donare de sânge
5. **`noutati.html`** — **Noutăți & Articole**:
   - Ghidul bobocului, comunicate oficiale, ateliere clinice, mobilități TransMed
6. **`contact.html`** — **Contact & Sediu**:
   - Formular direct de contact cu feedback instant
   - Adresă campus, birou asociație, program și canale de social media
   - Secțiune interactivă de Întrebări Frecvente (FAQ)

---

## 🎨 Cum personalizezi template-ul în 3 pași simpli

1. **Schimbă culorile de brand**:
   - Deschide `style.css` — chiar la început găsești `:root`:
   ```css
   --brand-primary: #15803d; /* Schimbă cu nuanța asociației tale (albastru, vișiniu, etc.) */
   ```
2. **Schimbă numele și textele**:
   - Caută în fișiere marcajele `[Nume Asociație]`, `[Acronim]`, `[Universitate / Facultate]` și înlocuiește-le cu datele voastre.
3. **Schimbă datele de contact**:
   - Înlocuiește adresa de email (`contact@asociatie.ro`), numărul de telefon și link-urile către conturile de Instagram/TikTok/LinkedIn din header și footer.

---

## 🌐 Cum se modifică site-ul după ce este publicat pe un domeniu?

Este **foarte simplu și rapid**:
* Dacă site-ul este găzduit pe **GitHub Pages**, **Vercel** sau **Netlify**:
  - Orice modificare făcută în fișierele HTML/CSS se sincronizează automat pe domeniu în 10–30 de secunde (printr-un simplu `git push` sau editare directă pe GitHub).
* Dacă site-ul este găzduit pe un **hosting clasic cu cPanel/FTP**:
  - Pur și simplu încarci fișierul modificat prin FileZilla sau File Manager, iar modificarea este vizibilă instant la refresh.
