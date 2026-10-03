# 🌱 Template Modern Multi-Pagină pentru Asociații Studențești

Un model de site prietenos, cald, cu forme rotunjite și structură clară, conceput special pentru comunități și asociații de studenți.

---

## 📁 Structura Paginilor

Proiectul conține pagini separate, dedicate fiecărei secțiuni cheie:

1. **`index.html`** — **Pagina Principală (Acasă)**:
   - Hero primitor cu apel la recrutare
   - Panou de cifre și statistici cheie (ani de activitate, membri, evenimente, parteneri)
   - Teaser „Cine suntem”
   - Teaser departamente și evenimente viitoare
2. **`despre.html`** — **Despre Noi**:
   - Povestea și istoricul asociației
   - Misiune, viziune și piloni
   - Echipa de conducere (Consiliul Director) cu roluri și date de contact
   - Transparență și link descărcare statut / regulamente
3. **`departamente.html`** — **Departamente & Echipe**:
   - Detalierea celor 6 departamente cheie: PR & Media, IT & Web, HR, Evenimente & Logistică, Fundraising, Proiecte Sociale
   - Competențe dobândite și roluri deschise pentru voluntari
4. **`proiecte.html`** — **Proiecte & Evenimente**:
   - Filtrare pe categorii (Carieră, Social, Caritabil)
   - Carduri pentru congrese, balul bobocilor, workshop-uri, teambuilding-uri
   - Invitație deschisă pentru idei de proiecte noi
5. **`noutati.html`** — **Noutăți & Articole**:
   - Ghidul bobocului, comunicate oficiale, oportunități de internship, burse și cazare
   - Formular de abonare la newsletter
6. **`contact.html`** — **Contact & Înscriere Voluntari**:
   - Formular complet de aplicare în asociație cu feedback instant
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
