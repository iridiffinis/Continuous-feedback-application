# Continuous feedback application
Aplicație web cu arhitectură de tip Single Page Application care are ca funționalitate principală acordarea de feedback continuu.

## Structură
- Aplicația permite înregistrarea ca **student** sau **profesor**.
- Utilizatorii în calitate de **profesor** au posibilitatea de a definii o activitate la o anumită dată, cu o descriere și un cod unic de acces la activitate.
- **Profesorii** acordă acces la activitatea definită pentru o perioadă de timp prestabilită.
- Utilizatorii în calitate de **student** au posibilitatea să acceseze o activitate pe baza codului furnizat de către **profesor**, cod valabil pe toată durata activității.
- În cadrul unei activități, **studenții** au acces la o interfață cu patru emoticoane (:smiley: - smiley face, :frowning_face: - frowny face, :astonished: - surprised face, :confused: - confused face) pentru a oferi feedback activității. Se pot adăuga un număr nelimitat de instanțe de feedback, acesta fiind _anonim_.
- **Profesorii** pot vedea feedback-ul continuu cu momentele de timp asociate, atât în timpul activității, cât și ulterior.
