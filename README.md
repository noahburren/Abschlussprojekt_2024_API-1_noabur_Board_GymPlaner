# Abschlussprojekt_2024_API-1_noabur_Board_GymPlaner

## Dokumentbeschreibung
Diese Anwendung, die ich entwickelt habe, bietet Benutzern eine intuitive Plattform zur Verwaltung ihrer Übungspläne und deren Anzeige in einem Wochenkalender. Sie basiert auf React für die Frontend-Oberfläche und nutzt Axios für HTTP-Anfragen an unseren Backend-Server, der nahtlos mit einer SQL-Datenbank integriert ist.
### Login und Registrierung:
Neue Benutzer können sich einfach registrieren, indem sie ihren Namen, ihre E-Mail und ein Passwort eingeben. Die Registrierung führt Validierungen durch, um die Eingaben zu überprüfen, und speichert die Daten sicher in unserer SQL-Datenbank. Bestehende Benutzer können sich mit ihrer E-Mail und ihrem Passwort anmelden, wobei alle Eingaben gründlich überprüft werden, um Sicherheit und Datenintegrität zu gewährleisten.
### Wochenkalender:
Der Wochenkalender zeigt die geplanten Übungen für jeden Wochentag an. Die Daten werden dynamisch vom Backend abgerufen und benutzerfreundlich dargestellt. Diese Funktion ermöglicht es mir, meine Trainingsroutine effektiv zu organisieren und den Überblick über meine Aktivitäten zu behalten.
### Übungsverwaltung:
Die Verwaltung der Übungen erlaubt es mir, neue Übungen hinzuzufügen und diesen bestimmte Wochentage zuzuordnen. Nach der Eingabe werden die Informationen über HTTP-POST-Anfragen an unseren Server gesendet und sicher in unserer SQL-Datenbank gespeichert. Diese zentrale Verwaltung erleichtert es mir, meine Trainingspläne jederzeit zu aktualisieren und anzupassen.
### 404-Fehlerseite:
Für nicht gefundene Seiten haben wir eine spezielle 404-Fehlerseite implementiert, die es mir ermöglicht, einfach zur Login-Seite zurückzukehren, falls eine angeforderte Seite nicht verfügbar ist.
### Validierung und Sicherheit:
Die Anwendung integriert umfassende Validierungslogik für Benutzereingaben, einschliesslich der Überprüfung von E-Mail-Formaten und Passwortstärke. Dadurch stellen wir sicher, dass die Daten korrekt und sicher gespeichert werden. Unsere SQL-Datenbank bietet eine robuste Lösung für die Speicherung von Benutzerkonten und Übungsplänen, was eine skalierbare und zuverlässige Plattform gewährleistet.
