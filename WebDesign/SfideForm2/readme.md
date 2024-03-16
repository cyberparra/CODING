1) crea HTML con gli *input name* che ti servono + CSS (vedi es. **index.html** e **style.css** nel progetto
2) crea un file js come **googleSheet.js**
3) crea foglio google
4) dai un nome al tab dove si salveranno i dati inseriti (es form dati)
5) aggiungi estensione Apps script e dai lo stesso nome del tab. Copia/incolla il codice **appScript.js**
6) salva ed esegui lo scrpit (autorizza)
7) fai il deploy, imposta nella configurazione il tipo Web App (autorizza)
8) prendi il link del deploy e mettilo nel campo *action* nell'index.html (<form method="post" action=)
9) lo stesso link va nella variabile *scriptURL* del **googleSheet.js**
10) impposta le intestazioni delle colonne del tuo sheet con quelle degli input name nell'HTML

