// https://sf-swiss.netlify.app/

import Head from "next/head";


import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";
import Background from "../components/Background";
import Service from "../components/Service";
import Footer from "../components/Footer";
import ContactBar from "../components/ContactBar";
import Popup from "../components/Popup";

import Typewriter from "typewriter-effect";

import { useState, useEffect } from "react";

export default function Home() {
  const [bannerImagePath, setBannerImagePath] = useState("/");
  const [bannerImagePath2, setBannerImagePath2] = useState("/");
  const [bannerImagePath3, setBannerImagePath3] = useState("/");
  const [bannerImagePath4, setBannerImagePath4] = useState("/");
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentPath, setCurrentPath] = useState(
    "https://sf-swiss.netlify.app/"
  );

  useEffect(() => {
    setCurrentPath(window.location.href);

    setWindowWidth(window.innerWidth);
   
    if (windowWidth < 961) {
    setBannerImagePath("/images/zusammenarbeit_mobile.png");
    }

    if (windowWidth >= 961) {
    setBannerImagePath("/images/zusammenarbeit.png");
    }
    
    if (windowWidth < 961) {
    setBannerImagePath2("/images/schnell_mobile.png");
    }

    if (windowWidth >= 961) {
    setBannerImagePath2("/images/schnell.png");
    }
    
    if (windowWidth < 961) {
    setBannerImagePath3("/images/unsere_maschinen_mobile.png");
    }

    if (windowWidth >= 961) {
    setBannerImagePath3("/images/unsere_maschinen.png");
    }
     if (windowWidth < 961) {
    setBannerImagePath4("/images/rezensionen_mobile.png");
    }

    if (windowWidth >= 961) {
    setBannerImagePath4("/images/rezensionen.png");
    }

    // spin text carousel
    var timerId = 0;

    const textCarouselElement = document.querySelector(".spin-text-carousel");
    if (textCarouselElement) {
      const dataRotate = textCarouselElement.getAttribute("data-rotate");

      if (dataRotate) {
        let data = JSON.parse(dataRotate);
        let dataLength = data.length;
        let displayTime = 3000;
        let textCarouselElHeight = textCarouselElement.offsetHeight;

        textCarouselElement.textContent = data[0];

        let index = 1;

        let isDisplay = false;
        textCarouselElement.style.transition =
          "transform 300ms linear " + displayTime + "ms";
        textCarouselElement.style.transform = `translateY(-${textCarouselElHeight}px)`;

        const transitonEventHandler = function () {
          if (isDisplay) {
            textCarouselElement.style.transition =
              "transform 300ms linear " + displayTime + "ms";
            textCarouselElement.style.transform = `translateY(-${textCarouselElHeight}px)`;
            isDisplay = false;
          } else {
            textCarouselElement.style.opacity = "0";
            textCarouselElement.textContent = "";
            textCarouselElement.style.transition = "";
            textCarouselElement.style.transform = `translateY(${textCarouselElHeight}px)`;

            if (index < dataLength) {
              textCarouselElement.textContent = data[index];
              index++;
            } else {
              index = 0;
              textCarouselElement.textContent = data[index];
              index++;
            } // end index < dataLength if/else

            timerId = setTimeout(() => {
              textCarouselElement.style.opacity = "1";
              textCarouselElement.style.transition = "transform 300ms linear";
              textCarouselElement.style.transform = `translateY(0px)`;
              isDisplay = true;
            }, 100); // end setTimeout
          } // end if/else
        }; // end transitonEventHandler

        textCarouselElement.addEventListener(
          "transitionend",
          transitonEventHandler
        );
      } // end dataRotate if
    } // end textCarouselElement if

    const scrollEventHandler = () => {
      if (windowWidth < 1025) {
        document.querySelectorAll(".service_img").forEach((serviceImage) => {
          if (checkIfInView(serviceImage)) {
            serviceImage.style.opacity = "1";
          }
        });
      } // end if

      if (windowWidth < 769) {
        let about__pL = document.querySelector(".about__pL");
        let about__pR = document.querySelector(".about__pR");

        if (checkIfInView(about__pL)) {
          about__pL.style.visibility = "visible";
          about__pL.style.transform = "translateX(0px)";
        }

        if (checkIfInView(about__pR)) {
          about__pR.style.visibility = "visible";
          about__pR.style.transform = "translateX(0px)";
        }
      } // end if
    }; // end scrollEventHandler

    const windowResizedHandler = () => {
      setWindowWidth(window.innerWidth);
    }; // end windowResizedHandler

    window.addEventListener("resize", windowResizedHandler);
    window.addEventListener("scroll", scrollEventHandler);

    return () => {
      textCarouselElement.removeEventListener(
        "transitionend",
        transitonEventHandler
      );
      clearTimeout(timerId);
      window.removeEventListener("resize", windowResizedHandler);
      window.removeEventListener("scroll", scrollEventHandler);
    };
  }, [windowWidth]); // end useEffect

  const checkIfInView = (element) => {
    let windowHeight =
      window.innerHeight -
      document.querySelector(".contactBar").offsetHeight -
      75 -
      element.offsetHeight;

    let windowTopPosition = document.documentElement.scrollTop;
    let windowBottomPosition = windowTopPosition + windowHeight;

    let elementHeight = element.offsetHeight;
    let elementTopPos = element.offsetTop;
    let elementBottomPos = elementTopPos + elementHeight;

    if (
      elementTopPos <= windowBottomPosition &&
      elementBottomPos >= windowTopPosition
    ) {
      return true;
    } else {
      return false;
    }
  }; // end checkIfInView function

  return (
    <div>
      <Head>
        <title>BLUECLEAN Gerguri | Ihr Partner für Reinigungen aller Art.</title>
        <meta
          name="description"
          content="Ihr Partner für Reinigungen aller Art."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>
        <div className={styles.firstLook}>
          <Background />
          <div className={styles.firstLook__content}>
            <h1 className={styles.firstLook__heading}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      window.innerWidth < 769
                        ? "Ihr Partner <br/> für Reinigungen <br/> aller Art."
                        : "Ihr Partner für Reinigungen aller Art."
                    )
                    .callFunction(() => {
                      console.log("String typed out!");
                      const cursor = document.querySelector(
                        ".Typewriter__cursor"
                      );
                      if (cursor) {
                        cursor.style.display = "none";
                      }
                    })
                    .start();
                }}
              />
            </h1>
          </div>
        </div>

         <div className="services">

           <div className={styles.textCarousel}>
            <span>SOMMERAKTION - Rabatt  </span>
            <p
              className="spin-text-carousel"
              data-rotate='["5% ab 200 CHF.", "10% ab 400 CHF.", "15% ab 800 CHF.", "20% ab 1600 CHF."]'
            ></p>
          </div>

          <div className={styles.services}>
            <div className={styles.services__s1}>
              <Service
                imgURL="/images/fräsen.png"
                heading="Hauswartung"
                details="Bei unseren Hauswartungs-Dienstleistungen profitieren Sie von einem optimalen Preis-Leistungs Verhältnis. Zu unseren Tätigkeiten gehören unter anderem: Das Pflegen der Liegenschaft und Umgebung inkl. Gartenarbeiten, Treppenhausreinigung, Organisation und Durchsetzung der Hausordnung sowie einfache Tätigkeiten an der Haustechnik, Reparaturen an Türschlössern und Wasserhähnen oder der Austausch von Leuchtmitteln. Wir ermitteln anhand Ihren Ansprüchen, was, wann und wie oft ausgeführt werden soll. Sie erhalten danach von uns einen detaillierten Leistungsplan sowie eine transparente Kalkulation."
                theme="red"
              />
            </div>
            <div className={styles.services__s2}>
              <Service
                imgURL="/images/drehen.png"
                heading="Fensterreinigung"
                details="Je nach Betrieb und Fensterart des Unternehmens oder Liegenschaft, müssen Fenster beidseitig von der Verschmutzung befreit werden. Eine korrekte und saubere Fensterreinigung ohne Schlieren, ist für einen Laien relativ schwierig. Wir sind darauf spezialisiert und kümmern uns gerne um Ihre Fenster Reinigung. Dabei reinigen wir auch Fenster, die nur schwierig zu erreichen sind. Zu unseren Dienstleistungen gehören unter anderem: Standard-Fensterreinigung (inkl. Fensterläden, Storen, Fensterrahmen und Fenstersimse) oder die Reinigung von verglasten Bürowänden, Schaufenstern und Wintergärten."
                theme="white"
              />
            </div>
            <div className={styles.services__s3}>
              <Service
                imgURL="/images/montieren.png"
                heading="Unterhaltsreinigung"
                details="Sie möchten Ihre Zeit sinnvoll einsetzen und sich nicht um die Reinigung Ihrer Wohnung/Haus oder Ihres Büros kümmern? Unterhaltsreinigung ist Vertrauenssache und die regelmässige Reinigung von Ober- und Arbeitsflächen sowie sanitären Anlagen ein notwendiges Übel, um das wir uns gerne kümmern. Unser Team ist sehr diskret und zuverlässig. Die Arbeiten erfolgen nach der von Ihnen gewünschten Periodizität und Umfang. Zu unseren Dienstleistungen gehören unter anderem: Reinigung der sanitären Anlagen sowie der Küche, Staubsaugen sowie Nassreinigung von Oberflächen und Böden sowie bei Bedarf Aufräumarbeiten bspw. Ein- und Ausräumen des Geschirrspülers."
                theme="white"
              />
            </div>
            <div className={styles.services__s4}>
              <Service
                imgURL="/images/messen.png"
                heading="Umzugsreinigung"
                details="Ein Umzug ist eine stressige Angelegenheit, der viel Planung und Fleissarbeit bedarf. Unsere professionelle Umzugsreinigung inkl. Abnahmegarantie reduziert Ihren Stresslevel und vermeidet unliebsame Diskussionen mit den Immobilienverwaltungen oder Eigentümern. Ihr altes Zuhause wird pünktlich, reibungslos und sauber abgegeben. Gerne übergeben wir auch direkt den Schlüssel an die Verwaltung, so dass Sie nichts mehr mit der Wohnungsübergabe zu tun haben. Des Weiteren helfen wir Ihnen auch, wenn kleinere Reparaturen oder kleinere Ausbesserungen vorgenommen werden müssen."
                theme="red"
              />
            </div>
          </div>
        </div>
            


  
           <div className={`${styles.about} about`}>
          <h3 className={`${styles.about__heading} ${styles.gradientText}`}>
            ÜBER UNS
          </h3>
          <p className={`${styles.about__pL} about__pL`}>
            Wir sind ein junges inhabergeführtes Unternehmen aus der Region Basel.
            Zu unseren Kunden zählen Unternehmen sowie auch Privatpersonen aus der ganzen
            Nordwestschweiz.
          </p>
          <p className={`${styles.about__pR} about__pR`}>
            Unsere Arbeiten verrichten wir zuverlässig, unkompliziert und diskret.
            Die Arbeitsabläufe haben wir so optimiert, dass wir Ihnen ein ausgezeichnetes
            Preis-Leistungs Verhältnis anbieten können.
          </p>
        <img src={bannerImagePath2} alt="schnell" width="100%" />
        <img src={bannerImagePath} alt="zusammenarbeit" width="100%" />
        </div>
        
        <div className={`${styles.contactForm} contactForm`}>
          <div className={styles.contactFormLeft}>
            <h2 className={styles.contactForm__heading}>
              Kontaktieren Sie uns
            </h2>
            <p className={styles.contactForm__paragraph}>
              Möchten Sie mehr über unsere Dienstleistungen wissen oder eine
              unverbindliche Offerte einholen? Wir freuen uns Sie
              kennenzulernen.
            </p>

            <img
              className={styles.envelopeIcon}
              src="/images/contact.png"
              alt="envelope"
            />
          </div>
          <div className={styles.contactFormRight}>
            <form action="https://formsubmit.co/info@sf-swiss.ch" method="POST">
              <input
                type="text"
                name="Name"
                className={styles.contactForm__name}
                placeholder=" Name"
                required
              />
              <input
                type="phone"
                name="Telefonnummer"
                className={styles.contactForm__email}
                placeholder=" Telefonnummer"
                required
              />
              <input
                type="email"
                name="Email"
                className={styles.contactForm__email}
                placeholder=" Email"
                required
              />
              <textarea
                type="text"
                name="Nachricht"
                rows="6"
                maxLength="1000"
                className={styles.contactForm__msg}
                placeholder="Nachricht"
                required
              ></textarea>

              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Vielen Dank für das Kontaktieren !"
              />
              <input type="hidden" name="_next" value={currentPath} />

              <button type="submit" className={styles.contactForm_sendBtn}>
                Senden
              </button>
            </form>
          </div>
        </div>

        <img src={bannerImagePath4} alt="rezensionen" width="100%" />
 

        <ContactBar />
      </main>

      <Footer />

      <Popup />
    </div>
  );
} // end Home page component
