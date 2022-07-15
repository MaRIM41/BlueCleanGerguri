import Head from "next/head";
import Link from "next/link";

import styles from "../styles/ImpressumDatenschutz.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ImpressumDatenschutz() {
  return (
    <>
      <Head>
        <title>BlueClean Gerguri | Impressum</title>
        <meta
          name="description"
          content="BlueClean Gerguri - Ihr Partner für Reinigungen aller Art."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.lnANDdp}>
        <h1 className={styles.heading}>Impressum und Datenschutz</h1>

        <div>
          <h3>Kontakt-Adresse</h3>
          <p>BlueClean Gerguri</p>
          <p>Hohenrainstrasse 26A</p>
          <p>4133 Pratteln</p>
          <p>Schweiz</p>
          <p>
            <strong>E-Mail: </strong>mg@blueclean.ch
          </p>
        </div>
        <div>
          <h3>Vertretungsberechtigte Person(en)</h3>
           <p>Muharrem Gerguri</p>
        </div>
        <div>
          <h3>Handelsregister-Eintrag</h3>
          <p>Eingetragener Firmenname: BLUE CLEAN GERGURI</p>
          <p>Handelsregister Nr: CHE-285.759.063</p>
        </div>
        <div>
          <h3>Haftungsausschluss</h3>
          <p>
            Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
            Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
            Vollständigkeit der Informationen.
          </p>
          <p>
            Haftungsansprüche gegen den Autor wegen Schäden materieller oder
            immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw.
            Nichtnutzung der veröffentlichten Informationen, durch Missbrauch
            der Verbindung oder durch technische Störungen entstanden sind,
            werden ausgeschlossen.
          </p>
          <p>
            Alle Angebote sind unverbindlich. Der Autor behält es sich
            ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
            besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die
            Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>
        </div>
        <div>
          <h3>Haftungsausschluss für Links</h3>
          <p>
            Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
            Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
            Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
            erfolgen auf eigene Gefahr des jeweiligen Nutzers.
          </p>
        </div>
        <div>
          <h3>Urheberrechte</h3>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
            oder anderen Dateien auf dieser Website, gehören ausschliesslich{" "}
            <strong>der Firma BlueClean Gerguri</strong> oder den speziell genannten
            Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die
            schriftliche Zustimmung des Urheberrechtsträgers im Voraus
            einzuholen.
          </p>
        </div>
        <div>
          Quelle:{" "}
          <a href="https://www.swissanwalt.ch" target="_blank" rel="noreferrer">
            SwissAnwalt
          </a>
        </div>
        <div>
          <h2>Datenschutzerklärung</h2>
          <p>
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere
            der EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <br />
          <p>BLUECLEAN Gerguri</p>
          <p>Muharrem Gerguri</p>
          <p>Hohenrainstrasse 26A</p>
          <p>4133 Pratteln</p>
          <p>
            <strong>Telefon:</strong> +41 76 307 40 01 
          </p>
          <p>
            <strong>E-Mail:</strong> mg@blueclean.ch
          </p>
          <p>
            <strong>WebSite:</strong>{" "}
            <a href="http://blueclean.ch/">http://blueclean.ch/</a>{" "}
          </p>
          <br />
        </div>
        <div>
          <h2>Allgemeiner Hinweis</h2>
          <p>
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den
            datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz,
            DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie
            auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber
            dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
          <p>
            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die
            Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten,
            Missbrauch oder vor Fälschung zu schützen.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>
          <p>
            Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung,
            Verarbeitung und Nutzung von Daten gemäss der nachfolgenden
            Beschreibung einverstanden. Diese Website kann grundsätzlich ohne
            Registrierung besucht werden. Dabei werden Daten wie beispielsweise
            aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und
            Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne
            dass diese Daten unmittelbar auf Ihre Person bezogen werden.
            Personenbezogene Daten, insbesondere Name, Adresse oder
            E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben.
            Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Cookies</h2>
          <p>
            Diese Website verwendet Cookies. Das sind kleine Textdateien, die es
            möglich machen, auf dem Endgerät des Nutzers spezifische, auf den
            Nutzer bezogene Informationen zu speichern, während er die Website
            nutzt. Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und
            Nutzeranzahl der Seiten zu ermitteln, Verhaltensweisen der
            Seitennutzung zu analysieren, aber auch unser Angebot
            kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer
            Browser-Sitzung gespeichert und können bei einem erneuten
            Seitenbesuch wieder aufgerufen werden. Wenn Sie das nicht wünschen,
            sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme
            von Cookies verweigert.
          </p>
          <p>
            Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des
            Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der
            Dienste, vor allem im Fall des Trackings, über die US-amerikanische
            Seite{" "}
            <a
              href="http://www.aboutads.info/choices/"
              target="_blank"
              rel="noreferrer"
            >
              http://www.aboutads.info/choices/
            </a>{" "}
            oder die EU-Seite{" "}
            <a
              href="http://www.youronlinechoices.com/"
              target="_blank"
              rel="noreferrer"
            >
              http://www.youronlinechoices.com/
            </a>{" "}
            erklärt werden. Des Weiteren kann die Speicherung von Cookies
            mittels deren Abschaltung in den Einstellungen des Browsers erreicht
            werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle
            Funktionen dieses Onlineangebotes genutzt werden können.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der
            Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen,
            die Sie an uns als Seitenbetreiber senden, eine
            SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
            Sie daran, dass die Adresszeile des Browsers von &#39http://&#39 auf
            &#39https://&#39 wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </p>
          <p>
            Wenn die SSL bzw. TLS Verschlüsselung aktiviert ist, können die
            Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
            werden.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Server-Log-Files</h2>
          <p>
            Der Provider dieser Website erhebt und speichert automatisch
            Informationen in so genannten Server-Log Files, die Ihr Browser
            automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            {" "}
            <li>Browsertyp und Browserversion</li>{" "}
            <li>verwendetes Betriebssystem</li> <li>Referrer URL</li>{" "}
            <li>Hostname des zugreifenden Rechners</li>{" "}
            <li>Uhrzeit der Serveranfrage</li>{" "}
          </ul>
          <p>
            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
            Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen. Wir behalten uns vor, diese Daten nachträglich
            zuprüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige
            Nutzung bekannt werden.
          </p>
        </div>
        <div>
          <h2>Dienste von Dritten</h2>
          <p>
            Diese Website verwenden allenfalls Google Maps für das Einbetten von
            Karten, Google Invisible reCAPTCHA für den Schutz gegen Bots und
            Spam sowie YouTube für das Einbetten von Videos.
          </p>
          <p>
            Diese Dienste der amerikanischen Google LLC verwenden unter anderem
            Cookies und infolgedessen werden Daten an Google in den USA
            übertragen, wobei wir davon ausgehen, dass in diesem Rahmen kein
            personenbezogenes Tracking allein durch die Nutzung unserer Website
            stattfindet.
          </p>
          <p>
            Google hat sich verpflichtet, einen angemessenen Datenschutz gemäss
            dem amerikanisch-europäischen und dem amerikanisch-schweizerischen
            Privacy Shield zu gewährleisten.
          </p>
          <p>
            Weitere Informationen finden sich in der{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noreferrer"
            >
              Datenschutzerklärung von Google
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Newsletterdaten</h2>
          <p>
            Wenn Sie den auf dieser Website angebotenen Newsletter beziehen
            möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
            Informationen, welche uns die Überprüfung gestatten, dass Sie der
            Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des
            Newsletters einverstanden sind. Weitere Daten werden nicht erhoben.
            Diese Daten verwenden wir ausschliesslich für den Versand der
            angeforderten Informationen und geben sie nicht an Dritte weiter.
          </p>
          <p>
            Die erteilte Einwilligung zur Speicherung der Daten, der
            E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters
            können Sie jederzeit widerrufen, etwa über den «Austragen-Link» im
            Newsletter.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Kommentarfunktion auf dieser Website</h2>
          <p>
            Für die Kommentarfunktion auf dieser Website werden neben Ihrem
            Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars,
            Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen
            gewählte Nutzername gespeichert.
          </p>
          <p>
            <i>Speicherung der IP Adresse</i>
          </p>
          <p>
            Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die
            Kommentare verfassen. Da wir Kommentare auf unserer Seite nicht vor
            der Freischaltung prüfen, benötigen wir diese Daten, um im Falle von
            Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den
            Verfasser vorgehen zu können.
          </p>
          <p>
            <i>Abonnieren von Kommentaren</i>
          </p>
          <p>
            Als Nutzer der Seite können Sie nach einer Anmeldung Kommentare
            abonnieren. Sie erhalten eine Bestätigungsemail, um zu prüfen, ob
            Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können
            diese Funktion jederzeit über einen Link in den Info-Mails
            abbestellen.
          </p>
        </div>
        <div>
          <h2>Rechte betroffener Personen</h2>
          <p>
            <strong>Recht auf Bestätigung</strong>
          </p>
          <p>
            Jede betroffene Person hat das Recht, vom Betreiber der Website eine
            Bestätigung darüber zu verlangen, ob betroffene Personen
            betreffende, personenbezogene Daten verarbeitet werden. Möchten Sie
            dieses Bestätigungsrecht in Anspruch nehmen, können Sie sich hierzu
            jederzeit an den Datenschutzbeauftragten wenden.
          </p>
          <br />
          <p>
            <strong>Recht auf Auskunft</strong>
          </p>
          <p>
            Jede von der Verarbeitung betroffene Person mit personenbezogenen
            Daten hat das Recht, jederzeit vom Betreiber dieser Website
            unentgeltliche Auskunft über die zu seiner Person gespeicherten
            personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten.
            Ferner kann gegebenenfalls über folgende Informationen Auskunft
            gegeben werden:
          </p>
          <ul>
            {" "}
            <li>die Verarbeitungszwecke</li>{" "}
            <li>
              die Kategorien personenbezogener Daten, die verarbeitet werden
            </li>{" "}
            <li>
              die Empfänger, gegenüber denen die personenbezogenen Daten
              offengelegt worden sind oder noch offengelegt werden
            </li>{" "}
            <li>
              falls möglich, die geplante Dauer, für die die personenbezogenen
              Daten gespeichert werden, oder, falls dies nicht möglich ist, die
              Kriterien für die Festlegung dieser Dauer
            </li>{" "}
            <li>
              das Bestehen eines Rechts auf Berichtigung oder Löschung der sie
              betreffenden personenbezogenen Daten oder auf Einschränkung der
              Verarbeitung durch den Verantwortlichen oder eines
              Widerspruchsrechts gegen diese Verarbeitung
            </li>{" "}
            <li>
              das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde
            </li>{" "}
            <li>
              wenn die personenbezogenen Daten nicht bei der betroffenen Person
              erhoben werden: Alle verfügbaren Informationen über die Herkunft
              der Daten
            </li>{" "}
          </ul>
          <p>
            Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu,
            ob personenbezogene Daten an ein Drittland oder an eine
            internationale Organisation übermittelt wurden. Sofern dies der Fall
            ist, so steht der betroffenen Person im übrigen das Recht zu,
            Auskunft über die geeigneten Garantien im Zusammenhang mit der
            übermittlung zu erhalten.
          </p>
          <p>
            Möchten Sie dieses Auskunftsrecht in Anspruch nehmen, können Sie
            sich hierzu jederzeit an unseren Datenschutzbeauftragten wenden.
          </p>
          <br />
          <p>
            <strong>Recht auf Berichtigung</strong>
          </p>
          <p>
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das Recht, die unverzügliche Berichtigung sie betreffender
            unrichtiger personenbezogener Daten zu verlangen. Ferner steht der
            betroffenen Person das Recht zu, unter Berücksichtigung der Zwecke
            der Verarbeitung, die Vervollständigung unvollständiger
            personenbezogener Daten - auch mittels einer ergänzenden Erklärung -
            zu verlangen.
          </p>
          <p>
            Möchten Sie dieses Berichtigungsrecht in Anspruch nehmen, können Sie
            sich hierzu jederzeit an unseren Datenschutzbeauftragten wenden.
          </p>
          <br />
          <p>
            <strong>Recht auf Löschung (Recht auf Vergessen werden)</strong>
          </p>
          <p>
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das Recht, von dem Verantwortlichen dieser Website zu verlangen,
            dass die sie betreffenden personenbezogenen Daten unverzüglich
            gelöscht werden, sofern einer der folgenden Gründe zutrifft und
            soweit die Verarbeitung nicht erforderlich ist:
          </p>
          <ul>
            {" "}
            <li>
              Die personenbezogenen Daten wurden für solche Zwecke erhoben oder
              auf sonstige Weise verarbeitet, für welche sie nicht mehr
              notwendig sind
            </li>{" "}
            <li>
              Die betroffene Person widerruft ihre Einwilligung, auf die sich
              die Verarbeitung stützte, und es fehlt an einer anderweitigen
              Rechtsgrundlage für die Verarbeitung
            </li>{" "}
            <li>
              Die betroffene Person legt aus Gründen, die sich aus ihrer
              besonderen Situation ergeben, Widerspruch gegen die Verarbeitung
              ein und es liegen keine vorrangigen berechtigten Gründe für die
              Verarbeitung vor, oder die betroffene Person legt im Falle von
              Direktwerbung und damit verbundenem Profiling Widerspruch gegen
              die Verarbeitung ein
            </li>{" "}
            <li>
              Die personenbezogenen Daten wurden unrechtmässig verarbeitet
            </li>{" "}
            <li>
              Die Löschung der personenbezogenen Daten ist zur Erfüllung einer
              rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der
              Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt
            </li>{" "}
            <li>
              Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste
              der Informationsgesellschaft, die einem Kind direkt gemacht
              wurden, erhoben
            </li>{" "}
          </ul>
          <p>
            Sofern einer der oben genannten Gründe zutrifft und Sie die Löschung
            von personenbezogenen Daten, die beimBetreiber dieser Website
            gespeichert sind, veranlassen möchten, können Sie sich hierzu
            jederzeit an unseren Datenschutzbeauftragten wenden. Der
            Datenschutzbeauftragte dieser Website wird veranlassen, dass dem
            Löschverlangen unverzüglich nachgekommen wird.
          </p>
          <br />
          <p>
            <strong>Recht auf Einschränkung der Verarbeitung</strong>
          </p>
          <p>
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das Recht, von dem Verantwortlichen dieser Website die
            Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden
            Voraussetzungen gegeben ist:
          </p>
          <ul>
            {" "}
            <li>
              Die Richtigkeit der personenbezogenen Daten wird von der
              betroffenen Person bestritten, und zwar für eine Dauer, die es dem
              Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen
              Daten zu überprüfen
            </li>{" "}
            <li>
              Die Verarbeitung ist unrechtmässig, die betroffene Person lehnt
              die Löschung der personenbezogenen Daten ab und verlangt
              stattdessen die Einschränkung der Nutzung der personenbezogenen
              Daten
            </li>{" "}
            <li>
              Der Verantwortliche benötigt die personenbezogenen Daten für die
              Zwecke der Verarbeitung nicht länger, die betroffene Person
              benötigt sie jedoch zur Geltendmachung, Ausübung oder Verteidigung
              von Rechtsansprüchen
            </li>{" "}
            <li>
              Die betroffene Person hat aus Gründen, die sich aus ihrer
              besonderen Situation ergeben, Widerspruch gegen die Verarbeitung
              eingelegt und es steht noch nicht fest, ob die berechtigten Gründe
              des Verantwortlichen gegenüber denen der betroffenen Person
              überwiegen
            </li>{" "}
          </ul>
          <p>
            Sofern eine der oben genannten Voraussetzungen gegeben ist Sie die
            Einschränkung von personenbezogenen Daten, die beim Betreiber dieser
            Website gespeichert sind, verlangen möchten, können Sie sich hierzu
            jederzeit an unseren Datenschutzbeauftragten wenden. Der
            Datenschutzbeauftragte dieser Website wird die Einschränkung der
            Verarbeitung veranlassen.
          </p>
          <br />
          <p>
            <strong>Recht auf Datenübertragbarkeit</strong>
          </p>
          <p>
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das Recht, die sie betreffenden personenbezogenen Daten in einem
            strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
            Sie hat ausserdem das Recht, dass diese Daten bei Vorliegen der
            gesetzlichen Voraussetzungen einem anderen Verantwortlichen
            übermittelt werden.
          </p>
          <p>
            Ferner hat die betroffene Person das Recht, zu erwirken, dass die
            personenbezogenen Daten direkt von einem Verantwortlichen an einen
            anderen Verantwortlichen übermittelt werden, soweit dies technisch
            machbar ist und sofern hiervon nicht die Rechte und Freiheiten
            anderer Personen beeinträchtigt werden.
          </p>
          <p>
            Zur Geltendmachung des Rechts auf Datenübertragbarkeit können Sie
            sich jederzeit an den vom Betreiber dieser Website bestellten
            Datenschutzbeauftragten wenden.
          </p>
          <br />
          <p>
            <strong>Recht auf Widerspruch</strong>
          </p>
          <p>
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das Recht, aus Gründen, die sich aus ihrer besonderen Situation
            ergeben, jederzeit gegen die Verarbeitung sie betreffender
            personenbezogener Daten, Widerspruch einzulegen.
          </p>
          <p>
            Der Betreiber dieser Website verarbeitet die personenbezogenen Daten
            im Falle des Widerspruchs nicht mehr, es sei denn, wir können
            zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die
            den Interessen, Rechten und Freiheiten der betroffenen Person
            überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung
            oder Verteidigung von Rechtsansprüchen dient.
          </p>
          <p>
            Zur Ausübung des Rechts auf Widerspruch können Sie sich direkt an
            den Datenschutzbeauftragten dieser Website wenden.
          </p>
          <br />
          <p>
            <strong>
              Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
            </strong>
          </p>
          <p>
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das Recht, eine abgegebene Einwilligung zur Verarbeitung
            personenbezogener Daten jederzeit zu widerrufen.
          </p>
          <p>
            Möchten Sie Ihr Recht auf Widerruf einer Einwilligung geltend
            machen, können Sie sich hierzu jederzeit an unseren
            Datenschutzbeauftragten wenden.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Widerspruch Werbe-Mails</h2>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien wird hiermit widersprochen. Die
            Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
            im Falle der unverlangten Zusendung von Werbeinformationen, etwa
            durch Spam-E-Mails, vor.
          </p>
        </div>
        <div>
          <h2>Kostenpflichtige Leistungen</h2>
          <p>
            Zur Erbringung kostenpflichtiger Leistungen werden von uns
            zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre
            Bestellung resp. Ihren Auftrag ausführen zu können. Wir speichern
            diese Daten in unseren Systemen, bis die gesetzlichen
            Aufbewahrungsfristen abgelaufen sind.
          </p>
        </div>
        <div>
          <h2>Verwendung von Google Maps</h2>
          <p>
            Diese Website nutzt das Angebot von Google Maps. Dadurch können wir
            Ihnen interaktive Karten direkt in der Website anzeigen und
            ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion. Durch
            den Besuch auf der Website erhält Google die Information, dass Sie
            die entsprechende Unterseite unserer Website aufgerufen haben. Dies
            erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt,
            über das Sie eingeloggt sind, oder ob kein Nutzerkonto besteht. Wenn
            Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto
            zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei Google nicht
            wünschen, müssen Sie sich vor Aktivierung des Buttons ausloggen.
            Google speichert Ihre Daten als Nutzungsprofile und nutzt sie für
            Zwecke der Werbung, Marktforschung und/oder bedarfsgerechten
            Gestaltung seiner Website. Eine solche Auswertung erfolgt
            insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung
            von bedarfsgerechter Werbung und um andere Nutzer des sozialen
            Netzwerks über Ihre Aktivitäten auf unserer Website zu informieren.
            Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser
            Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google richten
            müssen. Weitere Informationen zu Zweck und Umfang der Datenerhebung
            und ihrer Verarbeitung durch Google erhalten Sie neben weiteren
            Informationen zu Ihren diesbezüglichen Rechten und
            Einstellungsmöglichkeiten zum Schutze Ihrer Privatsphäre unter:{" "}
            <a
              href="http://www.google.de/intl/de/policies/privacy"
              target="_blank"
              rel="noreferrer"
            >
              www.google.de/intl/de/policies/privacy
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Google Ads</h2>
          <p>
            Diese Website nutzt das Google Conversion-Tracking. Sind Sie über
            eine von Google geschaltete Anzeige auf unsere WebSite gelangt, wird
            von Google Ads ein Cookie auf Ihrem Rechner gesetzt. Das Cookie für
            Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von
            Google geschaltete Anzeige klickt. Diese Cookies verlieren nach 30
            Tagen ihre Gültigkeit und dienen nicht der persönlichen
            Identifizierung. Besucht der Nutzer bestimmte Seiten unserer Website
            und das Cookie ist noch nicht abgelaufen, können wir und Google
            erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser
            Seite weitergeleitet wurde. Jeder Google Ads-Kunde erhält ein
            anderes Cookie. Cookies können somit nicht über die Websites von
            Ads-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies
            eingeholten Informationen dienen dazu, Conversion-Statistiken für
            Ads-Kunden zu erstellen, die sich für Conversion-Tracking
            entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer,
            die auf ihre Anzeige geklickt haben und zu einer mit einem
            Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie
            erhalten jedoch keine Informationen, mit denen sich Nutzer
            persönlich identifizieren lassen.
          </p>
          <p>
            Möchten Sie nicht am Tracking teilnehmen, können Sie das hierfür
            erforderliche Setzen eines Cookies ablehnen – etwa per
            Browser-Einstellung, die das automatische Setzen von Cookies
            generell deaktiviert oder Ihren Browser so einstellen, dass Cookies
            von der Domain «googleleadservices.com» blockiert werden.
          </p>
          <p>
            Bitte beachten Sie, dass Sie die Opt-out-Cookies nicht löschen
            dürfen, solange Sie keine Aufzeichnung von Messdaten wünschen. Haben
            Sie alle Ihre Cookies im Browser gelöscht, müssen Sie das jeweilige
            Opt-out Cookie erneut setzen.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Google Analytics</h2>
          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der
            Google Ireland Limited. Wenn der Verantwortliche für die
            Datenverarbeitung auf dieser Website ausserhalb des Europäischen
            Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google
            Analytics Datenverarbeitung durch Google LLC. Google LLC und Google
            Ireland Limited werden nachfolgend «Google» genannt.
          </p>
          <p>
            Über die gewonnenen Statistiken können wir unser Angebot verbessern
            und für Sie als Nutzer interessanter ausgestalten. Diese Website
            verwendet Google Analytics zudem für eine geräteübergreifende
            Analyse von Besucherströmen, die über eine User-ID durchgeführt
            wird. Sofern Sie über ein Google-Benutzerkonto verfügen, können Sie
            in den dortigen Einstellungen unter «Meine Daten», «persönliche
            Daten» die geräteübergreifende Analyse Ihrer Nutzung deaktivieren.
          </p>
          <p>
            Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs.
            1 S. 1 lit. f DS-GVO. Die im Rahmen von Google Analytics von Ihrem
            Browser übermittelte IP-Adresse wird nicht mit anderen Daten von
            Google zusammengeführt. Wir weisen Sie darauf hin, dass auf dieser
            Website Google Analytics um den Code «_anonymizeIp();» erweitert
            wurde, um eine anonymisierte Erfassung von IP-Adressen zu
            gewährleisten. Dadurch werden IP-Adressen gekürzt weiterverarbeitet,
            eine Personenbeziehbarkeit kann damit ausgeschlossen werden. Soweit
            den über Sie erhobenen Daten ein Personenbezug zukommt, wird dieser
            also sofort ausgeschlossen und die personenbezogenen Daten damit
            umgehend gelöscht.
          </p>
          <p>
            Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
            Google in den USA übertragen und dort gekürzt. Im Auftrag des
            Betreibers dieser Website wird Google diese Informationen benutzen,
            um Ihre Nutzung der Website auszuwerten, um Reports über die
            Websitenaktivitäten zusammenzustellen und um weitere mit der
            Websitennutzung und der Internetnutzung verbundene Dienstleistungen
            gegenüber dem Websitenbetreiber zu erbringen. Für die Ausnahmefälle,
            in denen personenbezogene Daten in die USA übertragen werden, hat
            sich Google dem EU-US Privacy Shield unterworfen,{" "}
            <a
              href="https://www.privacyshield.gov/EU-US-Framework"
              target="_blank"
              rel="noreferrer"
            >
              https://www.privacyshield.gov/EU-US-Framework
            </a>
            .
          </p>
          <p>
            Google Analytics verwendet Cookies. Die durch den Cookie erzeugten
            Informationen über Ihre Benutzung dieser Website werden in der Regel
            an einen Server von Google in den USA übertragen und dort
            gespeichert. Sie können die Speicherung der Cookies durch eine
            entsprechende Einstellung Ihrer Browser-Software verhindern; wir
            weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
            nicht sämtliche Funktionen dieser Website vollumfänglich werden
            nutzen können. Sie können darüber hinaus die Erfassung der durch das
            Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten
            (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser
            Daten durch Google verhindern, indem sie das unter dem folgenden
            Link verfügbare Browser-Plugin herunterladen und installieren:{" "}
            <a
              href="https://www.swissanwalt.ch/de/gaoptout.aspx"
              target="_blank"
              rel="noreferrer"
            >
              Google Analytics deaktivieren
            </a>
            .
          </p>
          <p>
            Ausserdem können Sie die Nutzung von Google Analytics auch
            verhindern, indem sie auf diesen Link klicken:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noreferrer"
            >
              Google Analytics deaktivieren
            </a>
            . Hierdurch wird ein sog. opt-out Cookie auf ihrem Datenträger
            gespeichert, der die Verarbeitung personenbezogener Daten durch
            Google Analytics verhindert. Bitte beachten Sie, dass bei einem
            Löschen sämtlicher Cookies auf Ihrem Endgerät auch diese
            Opt-out-Cookies gelöscht werden, d.h., dass Sie erneut die
            Opt-out-Cookies setzen müssen, wenn Sie weiterhin diese Form der
            Datenerhebung verhindern wollen. Die Opt-out-Cookies sind pro
            Browser und Rechner/Endgerät gesetzt und müssen daher für jeden
            Browser, Rechner oder anderes Endgerät gesondert aktiviert werden.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für die Nutzung von Google Web Fonts</h2>
          <p>
            Diese Website nutzt zur einheitlichen Darstellung von Schriftarten
            so genannte Web Fonts, die von Google bereitgestellt werden. Beim
            Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
            ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
            Standardschrift von Ihrem Computer genutzt.
          </p>
          <p>
            Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noreferrer"
            >
              https://developers.google.com/fonts/faq
            </a>{" "}
            und in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.google.com/policies/privacy/
            </a>
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Facebook</h2>
          <p>
            Diese Website verwendet Funktionen von Facebook Inc., 1601 S.
            California Ave, Palo Alto, CA 94304, USA . Bei Aufruf unserer Seiten
            mit Facebook-Plug-Ins wird eine Verbindung zwischen Ihrem Browser
            und den Servern von Facebook aufgebaut. Dabei werden bereits Daten
            an Facebook übertragen. Besitzen Sie einen Facebook-Account, können
            diese Daten damit verknüpft werden. Wenn Sie keine Zuordnung dieser
            Daten zu Ihrem Facebook-Account wünschen, loggen Sie sich bitte vor
            dem Besuch unserer Seite bei Facebook aus. Interaktionen,
            insbesondere das Nutzen einer Kommentarfunktion oder das Anklicken
            eines „Like“- oder „Teilen“-Buttons werden ebenfalls an Facebook
            weitergegeben. Mehr erfahren Sie unter{" "}
            <a
              href="https://de-de.facebook.com/about/privacy"
              target="_blank"
              rel="noreferrer"
            >
              https://de-de.facebook.com/about/privacy
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Twitter</h2>
          <p>
            Diese Website verwendet Funktionen von Twitter, Inc., 1355 Market
            St, Suite 900, San Francisco, CA 94103, USA. Bei Aufruf unserer
            Seiten mit Twitter-Plug-Ins wird eine Verbindung zwischen Ihrem
            Browser und den Servern von Twitter aufgebaut. Dabei werden bereits
            Daten an Twitter übertragen. Besitzen Sie einen Twitter-Account,
            können diese Daten damit verknüpft werden. Wenn Sie keine Zuordnung
            dieser Daten zu Ihrem Twitter-Account wünschen, loggen Sie sich
            bitte vor dem Besuch unserer Seite bei Twitter aus. Interaktionen,
            insbesondere das Anklicken eines „Re-Tweet“-Buttons werden ebenfalls
            an Twitter weitergegeben. Mehr erfahren Sie unter{" "}
            <a
              href="https://twitter.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              https://twitter.com/privacy
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Instagram</h2>
          <p>
            Auf unserer Website sind Funktionen des Dienstes Instagram
            eingebunden. Diese Funktionen werden angeboten durch die Instagram
            Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA integriert. Wenn
            Sie in Ihrem Instagram-Account eingeloggt sind können Sie durch
            Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem
            Instagram-Profil verlinken. Dadurch kann Instagram den Besuch
            unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin,
            dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
            übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
          </p>
          <p>
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
            von Instagram:{" "}
            <a
              href="https://instagram.com/about/legal/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              http://instagram.com/about/legal/privacy/
            </a>
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für LinkedIn</h2>
          <p>
            Wir setzen innerhalb unseres Onlineangebotes die Marketing-Dienste
            des sozialen Netzwerks LinkedIn der LinkedIn Ireland Unlimited
            Company, Wilton Plaza, Wilton Place, Dublin 2, Ireland («LinkedIn»)
            ein.
          </p>
          <p>
            Diese verwenden Cookies, also Textdateien, die auf Ihrem Computer
            gespeichert werden. Dies ermöglicht uns eine Analyse der Benutzung
            der Internetseite durch Sie. So können wir beispielsweise den Erfolg
            unserer Anzeigen messen und Nutzern Produkte anzeigen, für die sie
            sich zuvor interessiert haben.
          </p>
          <p>
            Erfasst werden dadurch z.B. Informationen zum Betriebssystem, zum
            Browser, die von Ihnen zuvor aufgerufene Internetseite
            (Referrer-URL), welche Webseiten der Nutzer aufgesucht, welche
            Angebote der Nutzer angeklickt hat, und Datum und Uhrzeit Ihres
            Besuchs auf unserer Internetseite.
          </p>
          <p>
            Die durch das Cookie erzeugten Informationen über Ihre Benutzung
            dieser Internetseite werden pseudonymisiert an einen Server von
            LinkedIn in den USA übertragen und dort gespeichert. LinkedIn
            speichert also nicht den Namen oder die E-Mailadresse des jeweiligen
            Nutzers. Die oben genannten Daten werden vielmehr nur demjenigen
            zugeordnet, bei dem das Cookie erzeugt wurde. Dies gilt nicht,
            sofern der Nutzer LinkedIn eine Verarbeitung ohne Pseudonymisierung
            erlaubt hat oder ein LinkedIn-Konto hat.
          </p>
          <p>
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall möglicherweise nicht sämtliche
            Funktionen dieser Internetseite vollumfänglich werden nutzen können.
            Der Nutzung Ihrer Daten können sie auch direkt bei LinkedIn
            widersprechen:{" "}
            <a
              href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
            </a>
            .
          </p>
          <p>
            Wir nutzen LinkedIn Analytics, um die Nutzung unserer Website
            analysieren und regelmässig verbessern zu können. Über die
            gewonnenen Statistiken können wir unser Angebot verbessern und für
            Sie als Nutzer interessanter ausgestalten. Alle LinkedIn Unternehmen
            haben die Standardvertragsklauseln angenommen, um zu gewährleisten,
            dass der für die Entwicklung, Durchführung und Erhaltung der Dienste
            notwendige Datenverkehr in die USA und Singapur auf rechtmässige
            Weise stattfindet. Sofern wir die Nutzer um eine Einwilligung
            bitten, ist die Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1
            lit. a DSGVO. Ansonsten ist Rechtsgrundlage für die Nutzung von
            LinkedIn Analytics Art. 6 Abs. 1 S. 1 lit. f DSGVO.
          </p>
          <p>
            Informationen des Drittanbieters: LinkedIn Ireland Unlimited Company
            Wilton Place, Dublin 2 Ireland;{" "}
            <a
              href="https://www.linkedin.com/legal/user-agreement?_l=de_DE"
              target="_blank"
              rel="noreferrer"
            >
              Nutzervereinbarung
            </a>{" "}
            und{" "}
            <a
              href="https://www.linkedin.com/legal/privacy-policy?_l=de_DE"
              target="_blank"
              rel="noreferrer"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Pinterest</h2>
          <p>
            Auf dieser Website verwenden wir Social Plugins des sozialen
            Netzwerkes Pinterest, das von der Pinterest Inc., 808 Brannan Street
            San Francisco, CA 94103-490, USA (&#39Pinterest&#39) betrieben wird.
            Wenn Sie eine Seite aufrufen, die ein solches Plugin enthält, stellt
            Ihr Browser eine direkte Verbindung zu den Servern von Pinterest
            her. Das Plugin übermittelt dabei Protokolldaten an den Server von
            Pinterest in die USA. Diese Protokolldaten enthalten möglicherweise
            Ihre IP-Adresse, die Adresse der besuchten Websites, die ebenfalls
            Pinterest- Funktionen enthalten, Art und Einstellungen des Browsers,
            Datum und Zeitpunkt der Anfrage, Ihre Verwendungsweise von Pinterest
            sowie Cookies.
          </p>
          <p>
            Weitere Informationen zu Zweck, Umfang und weiterer Verarbeitung und
            Nutzung der Daten durch Pinterest sowie Ihre diesbezüglichen Rechte
            und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den
            den Datenschutzhinweisen von Pinterest:{" "}
            <a
              href="https://about.pinterest.com/de/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              https://about.pinterest.com/de/privacy-policy
            </a>
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für SoundCloud</h2>
          <p>
            Auf dieser Website können Plugins des sozialen Netzwerks SoundCloud
            (SoundCloud Limited, Berners House, 47-48 Berners Street, London W1T
            3NF, Großbritannien.) integriert sein. Die SoundCloud-Plugins
            erkennen Sie an dem SoundCloud-Logo auf den betroffenen Seiten.
          </p>
          <p>
            Wenn Sie unsere Seiten besuchen, wird nach Aktivierung des Plugin
            eine direkte Verbindung zwischen Ihrem Browser und dem
            SoundCloud-Server hergestellt. SoundCloud erhält dadurch die
            Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht
            haben. Wenn Sie den &#39Like-Button&#39 oder &#39Share- Button&#39
            anklicken während Sie in Ihrem SoundCloud- Benutzerkonto eingeloggt
            sind, können Sie die Inhalte unserer Seiten mit Ihrem
            SoundCloud-Profil verlinken und/oder teilen. Dadurch kann SoundCloud
            Ihrem Benutzerkonto den Besuch unserer Seiten zuordnen. Wir weisen
            darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom
            Inhalt der übermittelten Daten sowie deren Nutzung durch SoundCloud
            erhalten. Weitere Informationen hierzu finden Sie in der
            Datenschutzerklärung von SoundCloud unter:{" "}
            <a
              href="https://soundcloud.com/pages/privacy"
              target="_blank"
              rel="noreferrer"
            >
              https://soundcloud.com/pages/privacy
            </a>
          </p>
          <p>
            Wenn Sie nicht wünschen, dass Soundcloud den Besuch unserer Seiten
            Ihrem SoundCloud- Benutzerkonto zuordnet, loggen Sie sich bitte aus
            Ihrem SoundCloud-Benutzerkonto aus bevor Sie Inhalte des
            SoundCloud-Plugins aktivieren.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für Tumblr</h2>
          <p>
            Diese Website nutzen Schaltflächen des Dienstes Tumblr. Anbieter ist
            die Tumblr, Inc., 35 East 21st St, 10th Floor, New York, NY 10010,
            USA. Diese Schaltflächen ermöglichen es Ihnen, einen Beitrag oder
            eine Seite bei Tumblr zu teilen oder dem Anbieter bei Tumblr zu
            folgen. Wenn Sie eine unserer Websiten mit Tumblr-Button aufrufen,
            baut der Browser eine direkte Verbindung mit den Servern von Tumblr
            auf. Wir haben keinen Einfluss auf den Umfang der Daten, die Tumblr
            mit Hilfe dieses Plugins erhebt und übermittelt. Nach aktuellem
            Stand werden die IP-Adresse des Nutzers sowie die URL der jeweiligen
            Website übermittelt.
          </p>
          <p>
            Weitere Informationen hierzu finden sich in der Datenschutzerklärung
            von Tumblr unter:{" "}
            <a
              href="http://www.tumblr.com/policy/de/privacy"
              target="_blank"
              rel="noreferrer"
            >
              https://www.tumblr.com/policy/de/privacy
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Newsletter per WhatsApp</h2>
          <p>
            Unseren kostenlosen Newsletter können Sie auch über den
            Instant-Messaging-Dienst WhatsApp beziehen. WhatsApp ist ein Dienst
            der WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal
            Harbour, Dublin 2, Irland, einem Tochterunternehmen der WhatsApp
            Inc., 1601 Willow Road, Menlo Park, California 94025, USA, beide
            nachfolgend nur «WhatsApp» genannt. Teilweise erfolgt die
            Verarbeitung der Nutzerdaten auf Servern von WhatsApp in den USA.
          </p>
          <p>
            Durch die Zertifizierung nach dem EU-US-Datenschutzschild{" "}
            <a
              href="https://www.privacyshield.gov/participant?id=a2zt0000000TSnwAAG&amp;status=Active"
              target="_blank"
              rel="noreferrer"
            >
              «EU-US Privacy Shield»
            </a>{" "}
            garantiert WhatsApp aber, dass die Datenschutzvorgaben der EU auch
            bei der Verarbeitung von Daten in den USA eingehalten werden. Zudem
            bietet WhatsApp weitere{" "}
            <a
              href="https://www.whatsapp.com/legal/#privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Datenschutzinformationen
            </a>{" "}
            an.
          </p>
          <p>
            Um unseren Newsletter per WhatsApp empfangen zu können, benötigen
            Sie ein WhatsApp Nutzerkonto. Einzelheiten darüber, welche Daten
            WhatsApp bei der Registrierung erhebt, können Sie den vorgenannten
            Datenschutzinformationen von WhatsApp entnehmen.
          </p>
          <p>
            Falls Sie sich dann zu unserem Newsletter-Versand per WhatsApp
            anmelden, wird die von Ihnen während des Anmeldevorgangs eingegebene
            Handy-Nummer durch WhatsApp verarbeitet. Zudem werden Ihre
            IP-Adresse sowie das Datum Ihrer Anmeldung nebst Uhrzeit
            gespeichert. Im Rahmen des weiteren Anmeldevorgangs wird Ihre
            Einwilligung in die übersendung des Newsletters eingeholt, der
            Inhalt konkret beschrieben und auf diese Datenschutzerklärung
            verwiesen.
          </p>
          <p>
            Rechtsgrundlage für den Versand des Newsletters und die Analyse ist
            Art. 6 Abs. 1 lit. a. DSGVO.
          </p>
          <p>
            Die Einwilligung in den Newsletter-Versand können Sie gemäss Art. 7
            Abs. 3 DSGVO jederzeit mit sofortiger Wirkung widerrufen. Hierzu
            müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen.
            Ebenfalls können Sie den Newsletterempfang durch eine Einstellung in
            der WhatsApp-Software auf Ihrem Endgerät blockieren.
          </p>
        </div>
        <div>
          <h2>Verwendung von Adobe Fonts</h2>
          <p>
            Wir setzen Adobe Fonts zur visuellen Gestaltung unserer Website ein.
            Adobe Fonts ist ein Dienst der Adobe Systems Incorporated, 345 Park
            Avenue, San Jose, CA 95110-2704, USA (Adobe), der uns den Zugriff
            auf eine Schriftartenbibliothek gewährt. Zur Einbindung der von uns
            benutzten Schriftarten, muss Ihr Browser eine Verbindung zu einem
            Server von Adobe in den USA aufbauen und die für unsere Website
            benötigte Schriftart herunterladen. Adobe erhält hierdurch die
            Information, dass von Ihrer IP-Adresse unsere Website aufgerufen
            wurde. Weitere Informationen zu Adobe Fonts, finden Sie in den
            Datenschutzhinweisen von Adobe, die Sie hier abrufen können:{" "}
            <a
              href="https://www.adobe.com/de/privacy/policies/adobe-fonts.html"
              target="_blank"
              rel="noreferrer"
            >
              Adobe Fonts
            </a>
          </p>
        </div>
        <div>
          <h2>Nutzung von Fonts.com</h2>
          <p>
            Diese Website nutzt Fonts.com, ein von Monotype Imaging Holdings
            Inc. bereitgestellter Service zur Visualisierung von Schriftarten,
            mit dem diese Website entsprechende Inhalte auf ihren Seiten
            einbinden kann. Erhobene personenbezogene Daten: Nutzungsdaten und
            verschiedene Datenarten, wie in der Datenschutzerklärung des
            Dienstes beschrieben. Verarbeitungsort: Vereinigte Staaten von
            Amerika (USA);{" "}
            <a
              href="http://www.monotype.com/legal/privacy-policy"
              rel="noreferrer"
              target="_blank"
            >
              Datenschutzerklärung
            </a>
          </p>
        </div>
        <div>
          <h2>Audio- und Video-Konferenzen</h2>
          <p>
            Wir verwenden Dienste für Audio- und Video-Konferenzen, um mit
            unseren Nutzern sowie sonstigen Personen kommunizieren zu können.
            Wir können damit insbesondere Audio- und Video-Konferenzen,
            virtuelle Besprechungen sowie Schulungen wie beispielsweise Webinare
            durchführen.
          </p>
          <p>
            Wir verwenden nur Dienste, bei denen ein angemessener Datenschutz
            gewährleistet ist. Es gelten ergänzend zu dieser
            Datenschutzerklärung jeweils auch allfällige Bedingungen der
            verwendeten Dienste wie beispielsweise Nutzungsbedingungen oder
            Datenschutzerklärungen.
          </p>
          <p>
            Wir verwenden insbesondere <strong>Zoom</strong>, einen Dienst der
            amerikanischen Zoom Video Communications Inc. Die Rechte gemäss der
            europäischen Datenschutz-Grundverordnung (DSGVO) gewährt Zoom auch
            gegenüber Nutzerinnen und Nutzern in der Schweiz. Weitere Angaben
            über Art, Umfang und Zweck der Datenbearbeitung finden sich in den{" "}
            <a
              href="https://zoom.us/de-de/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzrichtlinien
            </a>{" "}
            sowie auf der{" "}
            <a
              href="https://zoom.us/docs/de-de/privacy-and-legal.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seite «Rechtliche Bestimmungen und Datenschutz»
            </a>{" "}
            jeweils von Zoom.
          </p>
        </div>
        <div>
          <h2>Datenschutzerklärung für YouTube</h2>
          <p>
            Auf dieser Website sind Funktionen des Dienstes «YouTube»
            eingebunden. «YouTube» gehört der Google Ireland Limited, einer nach
            irischem Recht eingetragenen und betriebenen Gesellschaft mit Sitz
            in Gordon House, Barrow Street, Dublin 4, Irland, welche die Dienste
            im Europäischen Wirtschaftsraum und der Schweiz betreibt.
          </p>
          <p>
            Ihre rechtliche Vereinbarung mit «YouTube» besteht aus den unter
            folgendem Link zu entnehmenden Bestimmungen und Bedingungen:{" "}
            <a
              href="https://www.youtube.com/static?gl=DE&amp;template=terms&amp;hl=de"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/static?gl=de&amp;template=terms&amp;hl=de
            </a>
            . Diese Bestimmungen bilden eine rechtlich bindende Vereinbarung
            zwischen Ihnen und «YouTube» bezüglich der Nutzung der Dienste. In
            der Datenschutzerklärung von Google wird erläutert, wie «YouTube»
            mit Ihren personenbezogenen Daten verfährt und Ihre Daten schützt,
            wenn Sie den Dienst nutzen.
          </p>
        </div>
        <div>
          <h2>Vertragliche Leistungen</h2>
          <p>
            Wir verarbeiten die Daten unserer Vertragspartner und Interessenten
            sowie anderer Auftraggeber, Kunden, Mandanten, Klienten oder
            Vertragspartner (einheitlich bezeichnet als «Vertragspartner») gem.
            den datenschutzrechtlichen Bestimmungen des Bundes
            (Datenschutzgesetz, DSG) und der EU-DSGVO entsprechend Art. 6 Abs. 1
            lit. b. DSGVO, um ihnen gegenüber unsere vertraglichen oder
            vorvertraglichen Leistungen zu erbringen. Die hierbei verarbeiteten
            Daten, die Art, der Umfang und der Zweck und die Erforderlichkeit
            ihrer Verarbeitung, bestimmen sich nach dem zugrundeliegenden
            Vertragsverhältnis.
          </p>
          <p>
            Zu den verarbeiteten Daten gehören die Stammdaten unserer
            Vertragspartner (z.B. Namen und Adressen), Kontaktdaten (z.B.
            E-Mailadressen und Telefonnummern) sowie Vertragsdaten (z.B. in
            Anspruch genommene Leistungen, Vertragsinhalte, vertragliche
            Kommunikation, Namen von Kontaktpersonen) und Zahlungsdaten (z.B.
            Bankverbindungen, Zahlungshistorie).
          </p>
          <p>
            Besondere Kategorien personenbezogener Daten verarbeiten wir
            grundsätzlich nicht, ausser wenn diese Bestandteile einer
            beauftragten oder vertragsgemässen Verarbeitung sind.
          </p>
          <p>
            Wir verarbeiten Daten, die zur Begründung und Erfüllung der
            vertraglichen Leistungen erforderlich sind und weisen auf die
            Erforderlichkeit ihrer Angabe, sofern diese für die Vertragspartner
            nicht evident ist, hin. Eine Offenlegung an externe Personen oder
            Unternehmen erfolgt nur, wenn sie im Rahmen eines Vertrags
            erforderlich ist. Bei der Verarbeitung der uns im Rahmen eines
            Auftrags überlassenen Daten, handeln wir entsprechend den Weisungen
            der Auftraggeber sowie der gesetzlichen Vorgaben.
          </p>
          <p>
            Im Rahmen der Inanspruchnahme unserer Onlinedienste, können wir die
            IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung
            speichern. Die Speicherung erfolgt auf Grundlage unserer
            berechtigten Interessen, als auch der Interessen der Nutzer am
            Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine
            Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht,
            ausser sie ist zur Verfolgung unserer Ansprüche gem. Art. 6 Abs. 1
            lit. f. DSGVO erforderlich oder es besteht hierzu eine gesetzliche
            Verpflichtung gem. Art. 6 Abs. 1 lit. c. DSGVO.
          </p>
          <p>
            Die Löschung der Daten erfolgt, wenn die Daten zur Erfüllung
            vertraglicher oder gesetzlicher Fürsorgepflichten sowie für den
            Umgang mit etwaigen Gewährleistungs- und vergleichbaren Pflichten
            nicht mehr erforderlich sind, wobei die Erforderlichkeit der
            Aufbewahrung der Daten in unregelmässigen Abständen überprüft wird.
            Im Übrigen gelten die gesetzlichen Aufbewahrungspflichten.
          </p>
        </div>
        <div>
          <h2>
            Administration, Finanzbuchhaltung, Büroorganisation,
            Kontaktverwaltung
          </h2>
          <p>
            Wir verarbeiten Daten gem. den datenschutzrechtlichen Bestimmungen
            des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO im Rahmen von
            Verwaltungsaufgaben sowie Organisation unseres Betriebs,
            Finanzbuchhaltung und Befolgung der gesetzlichen Pflichten, wie z.B.
            der Archivierung. Hierbei verarbeiten wir dieselben Daten, die wir
            im Rahmen der Erbringung unserer vertraglichen Leistungen
            verarbeiten. Die Verarbeitungsgrundlagen sind Art. 6 Abs. 1 lit. c.
            DSGVO, Art. 6 Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind
            Kunden, Interessenten, Geschäftspartner und Websitebesucher
            betroffen. Der Zweck und unser Interesse an der Verarbeitung liegt
            in der Administration, Finanzbuchhaltung, Büroorganisation,
            Archivierung von Daten, also Aufgaben die der Aufrechterhaltung
            unserer Geschäftstätigkeiten, Wahrnehmung unserer Aufgaben und
            Erbringung unserer Leistungen dienen. Die Löschung der Daten im
            Hinblick auf vertragliche Leistungen und die vertragliche
            Kommunikation entspricht den, bei diesen Verarbeitungstätigkeiten
            genannten Angaben.
          </p>
          <p>
            Wir offenbaren oder übermitteln hierbei Daten an die
            Finanzverwaltung, Berater, wie z.B., Steuerberater oder
            Wirtschaftsprüfer sowie weitere Gebührenstellen und
            Zahlungsdienstleister.
          </p>
          <p>
            Ferner speichern wir auf Grundlage unserer betriebswirtschaftlichen
            Interessen Angaben zu Lieferanten, Veranstaltern und sonstigen
            Geschäftspartnern, z.B. zwecks späterer Kontaktaufnahme. Diese
            mehrheitlich unternehmensbezogenen Daten, speichern wir
            grundsätzlich dauerhaft.
          </p>
        </div>
        <div>
          <h2>Erbringung unserer Leistungen nach Statuten</h2>
          <p>
            Wir verarbeiten die Daten unserer Mitglieder, Unterstützer,
            Interessenten, Kunden oder sonstiger Personen gem. den
            datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz,
            DSG) und der EU-DSGVO entsprechend Art. 6 Abs. 1 lit. b. DSGVO,
            sofern wir ihnen gegenüber vertragliche Leistungen anbieten oder im
            Rahmen bestehender geschäftlicher Beziehung, z.B. gegenüber
            Mitgliedern, tätig werden oder selbst Empfänger von Leistungen und
            Zuwendungen sind. Im Übrigen verarbeiten wir die Daten betroffener
            Personen gem. Art. 6 Abs. 1 lit. f. DSGVO auf Grundlage unserer
            berechtigten Interessen, z.B. wenn es sich um administrative
            Aufgaben oder Öffentlichkeitsarbeit handelt.
          </p>
          <p>
            Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck
            und die Erforderlichkeit ihrer Verarbeitung bestimmen sich nach dem
            zugrundeliegenden Vertragsverhältnis. Dazu gehören grundsätzlich
            Bestands- und Stammdaten der Personen (z.B., Name, Adresse, etc.),
            als auch die Kontaktdaten (z.B., E-Mailadresse, Telefon, etc.), die
            Vertragsdaten (z.B., in Anspruch genommene Leistungen, mitgeteilte
            Inhalte und Informationen, Namen von Kontaktpersonen) und sofern wir
            zahlungspflichtige Leistungen oder Produkte anbieten, Zahlungsdaten
            (z.B., Bankverbindung, Zahlungshistorie, etc.).
          </p>
          <p>
            Wir löschen Daten, die zur Erbringung der statutarischen Zwecke
            nicht mehr erforderlich sind. Dies bestimmt sich entsprechend der
            jeweiligen Aufgaben und vertraglichen Beziehungen. Im Fall
            geschäftlicher Verarbeitung bewahren wir die Daten so lange auf, wie
            sie zur Geschäftsabwicklung, als auch im Hinblick auf etwaige
            Gewährleistungs- oder Haftungspflichten relevant sein können. Die
            Erforderlichkeit der Aufbewahrung der Daten wird in unregelmässigen
            Abständen überprüft. Im Übrigen gelten die gesetzlichen
            Aufbewahrungspflichten.
          </p>
        </div>
        <div>
          <h2>Urheberrechte</h2>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
            oder anderen Dateien auf der Website, gehören ausschliesslich dem
            Betreiber dieser Website oder den speziell genannten Rechteinhabern.
            Für die Reproduktion von sämtlichen Dateien, ist die schriftliche
            Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
          </p>
          <p>
            Wer ohne Einwilligung des jeweiligen Rechteinhabers eine
            Urheberrechtsverletzung begeht, kann sich strafbar und allenfalls
            schadenersatzpflichtig machen.
          </p>
        </div>
        <div>
          <h2>Allgemeiner Haftungsausschluss</h2>
          <p>
            Alle Angaben unseres Internetangebotes wurden sorgfältig geprüft.
            Wir bemühen uns, unser Informationsangebot aktuell, inhaltlich
            richtig und vollständig anzubieten. Trotzdem kann das Auftreten von
            Fehlern nicht völlig ausgeschlossen werden, womit wir keine Garantie
            für Vollständigkeit, Richtigkeit und Aktualität von Informationen
            auch journalistisch-redaktioneller Art übernehmen können.
            Haftungsansprüche aus Schäden materieller oder ideeller Art, die
            durch die Nutzung der angebotenen Informationen verursacht wurden,
            sind ausgeschlossen, sofern kein nachweislich vorsätzliches oder
            grob fahrlässiges Verschulden vorliegt.
          </p>
          <p>
            Der Herausgeber kann nach eigenem Ermessen und ohne Ankündigung
            Texte verändern oder löschen und ist nicht verpflichtet, Inhalte
            dieser Website zu aktualisieren. Die Benutzung bzw. der Zugang zu
            dieser Website geschieht auf eigene Gefahr des Besuchers. Der
            Herausgeber, seine Auftraggeber oder Partner sind nicht
            verantwortlich für Schäden, wie direkte, indirekte, zufällige, vorab
            konkret zu bestimmende oder Folgeschäden, die angeblich durch den
            Besuch dieser Website entstanden sind und übernehmen hierfür
            folglich keine Haftung.
          </p>
          <p>
            Der Herausgeber übernimmt ebenfalls keine Verantwortung und Haftung
            für die Inhalte und die Verfügbarkeit von Website Dritter, die über
            externe Links dieser Website erreichbar sind. Für den Inhalt der
            verlinkten Seiten sind ausschliesslich deren Betreiber
            verantwortlich. Der Herausgeber distanziert sich damit ausdrücklich
            von allen Inhalten Dritter, die möglicherweise straf- oder
            haftungsrechtlich relevant sind oder gegen die guten Sitten
            verstossen.
          </p>
        </div>
        <div>
          <h2>Änderungen</h2>
          <p>
            Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung
            anpassen. Es gilt die jeweils aktuelle, auf unserer Website
            publizierte Fassung. Soweit die Datenschutzerklärung Teil einer
            Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer
            Aktualisierung über die Änderung per E-Mail oder auf andere
            geeignete Weise informieren.
          </p>
        </div>
        <div>
          <h2>Fragen an den Datenschutzbeauftragten</h2>
          <p>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
            E-Mail oder wenden Sie sich direkt an die für den Datenschutz zu
            Beginn der Datenschutzerklärung aufgeführten, verantwortlichen
            Person in unserer Organisation.
          </p>
        </div>
        <p>
          Pratteln, 15.07.2022
          <br />
          Quelle:{" "}
          <a href="https://www.swissanwalt.ch" target="_blank" rel="noreferrer">
            SwissAnwalt
          </a>
        </p>
      </div>
      <Link href="/">
        <a>
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className={styles.backToHome}
          />
        </a>
      </Link>
    </>
  );
} // end ImpressumDatenschutz
