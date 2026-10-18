import React, { useState } from "react";

// Цветовая палитра сайта
const colors = {
  success: "#f9f9f9",
  primary: "#f5f5f5",
  inline: "#f0f0f0",
  buttons: "#333333",
  inputs: "#f6f6f6",
  textMain: "#545454",
  textSecond: "#0770c0",
  textButton: "#ffffff",
};

// Объект с переводами
const translations = {
  nl: {
    subtitle: "Lekkagedetectie & badkamerreparaties",
    workingHours: "Wij zijn dagelijks in de hele stad werkzaam",
    ctaButton: "Bel een technicus",
    heroTitle: "Wij zullen een verborgen waterlek opsporen",
    heroTitleAccent: "zonder muren te slopen",
    heroDesc:
      "Wij maken gebruik van professionele warmtebeeldcamera's en akoestische diagnoseapparatuur. Wij sporen het specifieke probleem op en lossen het voor u op; daarnaast kunnen wij zorgen voor een hoogwaardige hersteloperatie of een complete, turn-key renovatie van uw badkamer.",
    features: [
      "Nauwkeurigheid van lekdetectie",
      "Officiële garantie",
      "Gratis inspectie",
    ],
    formTitle: "Heb je met spoed een bezoek van een specialist nodig?",
    formSubtitle:
      "Een specialist belt u binnen 5 minuten terug voor een consult.",
    formSuccess: "✓ Verzoek geaccepteerd!",
    inputPlaceholder: "Voer je telefoonnummer in (bijv. +31...)",
    sectionPainTitle:
      "Wanneer is het noodzakelijk om met spoed op zoek te gaan naar een verborgen lekkage?",
    pains: [
      {
        title: "Je zet je buren onder water.",
        desc: "Hun plafond wordt vochtig, maar jouw badkamer is droog. Het water verplaatst zich langs de vloer- of plafondplaten.",
      },
      {
        title: "De druk daalt",
        desc: "De druk in het verwarmingssysteem of de cv-ketel blijft dalen, terwijl er nergens zichtbare plassen liggen.",
      },
      {
        title: "Vocht en schimmel",
        desc: "Er is een aanhoudende muffe geur in de badkamer ontstaan, de voegen tussen de tegels worden zwart, of het behang achter de wand verkleurt donkerder.",
      },
      {
        title: "De meter draait",
        desc: "Alle kranen zijn dichtgedraaid, en toch blijft de watermeter langzaam oplopen.",
      },
    ],
    marketingTitle:
      "We dichten niet alleen het gat; we zorgen ervoor dat de badkamer perfect wordt.",
    marketingDesc:
      "Vaak is het voor het verhelpen van een lekkage nodig om een oude ombouw te openen of tegels te verwijderen. Dit is de uitgelezen kans om uw leidingwerk en installaties te vernieuwen en een moderne renovatie door te voeren – zonder dat u te veel betaalt!",
    calcTitle: "Wij vergoeden de kosten van het lekonderzoek",
    calcSubtitle: "Wanneer u bij ons vervolgreparaties boekt:",
    calcFeatures: [
      "De kosten voor lekdetectie worden in mindering gebracht op de offerte",
      "Je ontvangt een vaste korting op afwerkingswerkzaamheden",
      "Wij zullen alle materialen bij onze partners inkopen met een korting van maximaal 20%.",
    ],
    calcFormTitle: "Bereken de korting voor de badkamerrenovatie:",
    calcQuestion: "Wat ben je van plan om te renoveren?",
    rooms: {
      bathroom: "Badkamer",
      toilet: "Toilet",
      combined: "Gecombineerd",
    },
    calcDiscountLabel: "Uw gegarandeerde korting:",
    calcSuccess: "✓ Korting veiliggesteld! We nemen contact met je op.",
    calcInputPlaceholder: "Je telefoonnummer",
    calcSubmitButton: "Stel de korting veilig",

    galleryTitle: "Onze Resultaten: Voor & Na",
    galleryDesc:
      "Blader door onze afgeronde projecten. Sleep de schuifregelaar op elke foto om het resultaat te zien.",
    labelBefore: "Voor",
    labelAfter: "Na",

    footerDesc:
      "Opsporing van verborgen lekken in waterleiding- en verwarmingssystemen, inclusief volledige reparatieservice.",
    rights: "Alle rechten voorbehouden.",
  },
  en: {
    subtitle: "Leak detection & bathroom repairs",
    workingHours: "We operate daily throughout the entire city",
    ctaButton: "Call a technician",
    heroTitle: "We will detect a hidden water leak",
    heroTitleAccent: "without demolishing walls",
    heroDesc:
      "We use professional thermal imaging cameras and acoustic diagnostic equipment. We trace the specific problem and solve it for you; additionally, we can provide high-quality restoration or a complete, turn-key renovation of your bathroom.",
    features: [
      "Leak detection accuracy",
      "Official guarantee",
      "Free inspection",
    ],
    formTitle: "Do you urgently need a specialist to visit?",
    formSubtitle:
      "A specialist will call you back within 5 minutes for a consultation.",
    formSuccess: "✓ Request accepted!",
    inputPlaceholder: "Enter your phone number (e.g. +31...)",
    sectionPainTitle: "When is it urgent to search for a hidden leak?",
    pains: [
      {
        title: "You are flooding your neighbors.",
        desc: "Their ceiling gets damp, but your bathroom is dry. Water travels along the floor or ceiling slabs.",
      },
      {
        title: "Pressure drops",
        desc: "The pressure in the heating system or boiler keeps dropping, while there are no visible puddles anywhere.",
      },
      {
        title: "Moisture and mold",
        desc: "A persistent musty smell has developed in the bathroom, tile joints turn black, or the wallpaper behind the wall darkens.",
      },
      {
        title: "The meter is ticking",
        desc: "All taps are turned off, yet the water meter continues to run slowly.",
      },
    ],
    marketingTitle:
      "We don't just patch up the leak; we make sure the bathroom becomes perfect.",
    marketingDesc:
      "Fixing a leak often requires opening an old casing or removing tiles. This is the perfect opportunity to renew your piping and installations and carry out a modern renovation – without overpaying!",
    calcTitle: "We reimburse the costs of the leak investigation",
    calcSubtitle: "When you book follow-up repairs with us:",
    calcFeatures: [
      "The leak detection costs will be deducted from the quotation",
      "You will receive a fixed discount on finishing works",
      "We will purchase all materials from our partners with a discount of up to 20%.",
    ],
    calcFormTitle: "Calculate the discount for the bathroom renovation:",
    calcQuestion: "What do you plan to renovate?",
    rooms: {
      bathroom: "Bathroom",
      toilet: "Toilet",
      combined: "Combined",
    },
    calcDiscountLabel: "Your guaranteed discount:",
    calcSuccess: "✓ Discount secured! We will contact you.",
    calcInputPlaceholder: "Your phone number",
    calcSubmitButton: "Secure the discount",

    galleryTitle: "Our Results: Before & After",
    galleryDesc:
      "Browse through our completed projects. Drag the slider on any photo to see the result.",
    labelBefore: "Before",
    labelAfter: "After",

    footerDesc:
      "Detection of hidden leaks in water supply and heating systems, including full repair service.",
    rights: "All rights reserved.",
  },
};

export default function App() {
  const [lang, setLang] = useState("nl");
  const t = translations[lang];

  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [roomType, setRoomType] = useState("bathroom");
  const [calcPhone, setCalcPhone] = useState("");
  const [isCalcSubmitted, setIsCalcSubmitted] = useState(false);

  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  // Массив ваших проектов (кейсов)
  const repairCases = [
    {
      id: 1,
      before:
        "https://avatars.mds.yandex.net/get-altay/10285614/2a0000018ff17c36acd2ade033bc6160724c/L_height",
      after:
        "https://santamebel.ru/upload/iblock/c57/7asqexp4wrbvm9ho0nkna02j4st34v98.png",
    },
    {
      id: 2,
      before:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQOqGub_u7ceRGWZ31kzcK6JrNuytL4m2umRwP5LvsRaWXA0JwPogc-c&s=10",
      after:
        "https://laparet.ru/upload/iblock/555/CHto_takoe_santekhnika_7.jpeg",
    },
    {
      id: 3,
      before:
        "https://aqualiga.ru/upload/medialibrary/ecb/n53espm0jqyy4hs90l50uqfazrg6v2se.jpg",
      after:
        "https://www.santehmag.ru/content/home-page/category-icon/mixers.webp",
    },
  ];

  // Функции переключения слайдов (сбрасывают ползунок на середину при смене проекта)
  const nextCase = () => {
    setSliderPos(50);
    setActiveCaseIdx((prev) => (prev + 1) % repairCases.length);
  };

  const prevCase = () => {
    setSliderPos(50);
    setActiveCaseIdx(
      (prev) => (prev - 1 + repairCases.length) % repairCases.length,
    );
  };

  const getDiscount = () => {
    if (roomType === "bathroom") return "5 EUR.";
    if (roomType === "toilet") return "10 EUR.";
    return "20 EUR.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim().length > 5) {
      setIsSubmitted(true);
      setPhone("");
    }
  };

  const handleCalcSubmit = (e) => {
    e.preventDefault();
    if (calcPhone.trim().length > 5) {
      setIsCalcSubmitted(true);
      setCalcPhone("");
    }
  };

  const handleSliderMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches.clientX : e.clientX;
    const x = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(percentage);
  };

  const containerStyle = {
    fontFamily: "Century Gothic Paneuropean, sans-serif",
    backgroundColor: colors.primary,
    lineHeight: "1.5",
    margin: 0,
    padding: 0,
  };

  // Демо-картинки для слайдера (замени на свои)
  const IMG_BEFORE = "https://cs.pikabu.ru/img_n/2011-10_1/c53.jpg";
  const IMG_AFTER =
    "https://santamebel.ru/upload/iblock/c57/7asqexp4wrbvm9ho0nkna02j4st34v98.png";

  return (
    <div style={containerStyle}>
      {/* ШАПКА */}
      <header
        style={{
          backgroundColor: colors.inline,
          borderBottom: "1px solid black",
          padding: "15px 20px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: colors.textMain,
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              AQUA-DOCTOR
            </div>
            <div style={{ fontSize: "12px", color: colors.textSecond }}>
              {t.subtitle}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* ЯЗЫКОВОЙ ПЕРЕКЛЮЧАТЕЛЬ */}
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: colors.primary,
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              <button
                onClick={() => setLang("nl")}
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  backgroundColor:
                    lang === "nl" ? colors.buttons : "transparent",
                  color: lang === "nl" ? colors.textButton : colors.textMain,
                }}
              >
                NL
              </button>
              <button
                onClick={() => setLang("en")}
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  backgroundColor:
                    lang === "en" ? colors.buttons : "transparent",
                  color: lang === "en" ? colors.textButton : colors.textMain,
                }}
              >
                EN
              </button>
            </div>

            <div style={{ textAlign: "right" }}>
              <a
                href="tel:+3123456789"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: colors.textMain,
                  textDecoration: "none",
                }}
              >
                +31 (0) 23 456 789
              </a>
              <div style={{ fontSize: "12px", color: colors.textSecond }}>
                {t.workingHours}
              </div>
            </div>

            <a
              href="#callback"
              style={{
                backgroundColor: colors.buttons,
                color: colors.textButton,
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </header>

      {/* ГЛАВНЫЙ ЭКРАН */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: colors.textMain,
              marginTop: "20px",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            {t.heroTitle}{" "}
            <span style={{ color: colors.textSecond }}>
              {t.heroTitleAccent}
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: colors.textMain,
              marginBottom: "30px",
            }}
          >
            {t.heroDesc}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginBottom: "40px",
            }}
          >
            {t.features.map((text, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: colors.inline,
                  color: colors.textSecond,
                  padding: "15px",
                  borderRadius: "8px",
                }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* Форма захвата */}
          <div
            id="callback"
            style={{
              backgroundColor: colors.inline,
              padding: "30px",
              borderRadius: "12px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <h3
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                margin: 0,
                marginBottom: "10px",
                color: colors.textMain,
              }}
            >
              {t.formTitle}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: colors.textSecond,
                marginBottom: "20px",
              }}
            >
              {t.formSubtitle}
            </p>

            {isSubmitted ? (
              <div
                style={{
                  backgroundColor: colors.buttons,
                  color: colors.success,
                  padding: "15px",
                  borderRadius: "6px",
                  fontWeight: "500",
                }}
              >
                {t.formSuccess}
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <input
                  type="tel"
                  placeholder={t.inputPlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  style={{
                    color: colors.textMain,
                    backgroundColor: colors.inputs,
                    padding: "12px",
                    borderRadius: "6px",
                    border: "none",
                    fontSize: "16px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: colors.buttons,
                    color: colors.textButton,
                    padding: "14px",
                    borderRadius: "6px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {t.ctaButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* БЛОК БОЛЕЙ */}
      <section
        style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
            color: colors.textMain,
          }}
        >
          {t.sectionPainTitle}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {t.pains.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: colors.inline,
              }}
            >
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: colors.textMain,
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: "14px", color: colors.textSecond }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* МАРКЕТИНГОВЫЙ МОСТИК + КАЛЬКУЛЯТОР */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              style={{
                color: colors.textMain,
                fontSize: "32px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              {t.marketingTitle}
            </h2>
            <p
              style={{
                color: colors.textSecond,
                maxWidth: "800px",
                margin: "15px auto 0",
              }}
            >
              {t.marketingDesc}
            </p>
          </div>

          {/* КАЛЬКУЛЯТОР */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              backgroundColor: colors.inline,
              padding: "30px",
              borderRadius: "16px",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  color: colors.textMain,
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                {t.calcTitle}
              </h3>
              <p
                style={{
                  color: colors.textSecond,
                  fontSize: "15px",
                  marginBottom: "20px",
                }}
              >
                {t.calcSubtitle}
              </p>
              <ul
                style={{
                  color: colors.textSecond,
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                {t.calcFeatures.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>

            {/* Форма калькулятора */}
            <div
              style={{
                backgroundColor: colors.primary,
                color: colors.textMain,
                padding: "25px",
                borderRadius: "12px",
              }}
            >
              <h4
                style={{
                  color: colors.textMain,
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                {t.calcFormTitle}
              </h4>

              <div style={{ marginBottom: "20px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "8px",
                    color: colors.textSecond,
                  }}
                >
                  {t.calcQuestion}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "8px",
                  }}
                >
                  {[
                    { id: "bathroom", label: t.rooms.bathroom },
                    { id: "toilet", label: t.rooms.toilet },
                    { id: "combined", label: t.rooms.combined },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      onClick={() => setRoomType(btn.id)}
                      style={{
                        padding: "8px",
                        fontSize: "13px",
                        fontWeight: "500",
                        borderRadius: "6px",
                        border: `1px solid ${colors.inline}`,
                        backgroundColor:
                          roomType === btn.id ? colors.inline : colors.primary,
                        color:
                          roomType === btn.id
                            ? colors.textSecond
                            : colors.textMain,
                        cursor: "pointer",
                      }}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: colors.inline,
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "14px", color: colors.textMain }}>
                  {t.calcDiscountLabel}
                </span>
                <div
                  style={{
                    color: colors.textSecond,
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {getDiscount()}
                </div>
              </div>

              {isCalcSubmitted ? (
                <div
                  style={{
                    backgroundColor: colors.buttons,
                    color: colors.success,
                    padding: "12px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {t.calcSuccess}
                </div>
              ) : (
                <form
                  onSubmit={handleCalcSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <input
                    type="tel"
                    placeholder={t.calcInputPlaceholder}
                    value={calcPhone}
                    onChange={(e) => setCalcPhone(e.target.value)}
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "6px",
                      border: "none",
                      fontSize: "15px",
                      color: colors.textMain,
                      backgroundColor: colors.inputs,
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: colors.buttons,
                      color: colors.textButton,
                      padding: "12px",
                      borderRadius: "6px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {t.calcSubmitButton}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ: КАРУСЕЛЬ КЕЙСОВ ДО / ПОСЛЕ */}
      <section
        style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: colors.textMain,
            }}
          >
            {t.galleryTitle}
          </h2>
          <p
            style={{
              color: colors.textSecond,
              maxWidth: "600px",
              margin: "10px auto 0",
              fontSize: "15px",
            }}
          >
            {t.galleryDesc}
          </p>
        </div>

        {/* Главный контейнер с кнопками-стрелками по бокам */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          {/* Стрелка влево */}
          <button
            onClick={prevCase}
            style={{
              backgroundColor: colors.inline,
              border: `1px solid ${colors.buttons}`,
              color: colors.textMain,
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              transition: "background-color 0.2s",
            }}
          >
            ‹
          </button>

          {/* Контейнер интерактивного слайдера */}
          <div
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              height: "450px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              cursor: "ew-resize",
              userSelect: "none",
              backgroundColor: "#eee",
            }}
          >
            {/* Изображение ПОСЛЕ (Фон) */}
            <img
              src={repairCases[activeCaseIdx].after}
              alt="After repair"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                padding: "4px 12px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "bold",
                zIndex: 10,
              }}
            >
              {t.labelAfter}
            </div>

            {/* Изображение ДО (Слой поверх с динамической шириной) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${sliderPos}%`,
                height: "100%",
                overflow: "hidden",
                borderRight: "2px solid #ffffff",
              }}
            >
              <img
                src={repairCases[activeCaseIdx].before}
                alt="Before repair"
                style={{
                  width: "800px", // Должно точно совпадать с maxWidth контейнера
                  height: "450px",
                  objectFit: "cover",
                  maxWidth: "none",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "15px",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                {t.labelBefore}
              </div>
            </div>

            {/* Линия разделителя и ползунок-кружок */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                width: "2px",
                backgroundColor: "#ffffff",
                transform: "translateX(-50%)",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "40px",
                  height: "40px",
                  backgroundColor: colors.buttons,
                  border: "3px solid #ffffff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  ↔
                </span>
              </div>
            </div>
          </div>

          {/* Стрелка вправо */}
          <button
            onClick={nextCase}
            style={{
              backgroundColor: colors.inline,
              border: `1px solid ${colors.buttons}`,
              color: colors.textMain,
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              transition: "background-color 0.2s",
            }}
          >
            ›
          </button>
        </div>

        {/* Индикаторы (точки) под слайдером, чтобы видно было сколько всего кейсов */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {repairCases.map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSliderPos(50);
                setActiveCaseIdx(idx);
              }}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor:
                  idx === activeCaseIdx ? colors.textSecond : colors.inline,
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </div>
      </section>

      {/* ПОДВАЛ */}
      <footer
        style={{
          backgroundColor: colors.inline,
          color: colors.textMain,
          padding: "30px 20px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <span>
            © {new Date().getFullYear()} AQUA-DOCTOR. {t.rights}
          </span>
          <span>{t.footerDesc}</span>
        </div>
      </footer>
    </div>
  );
}
