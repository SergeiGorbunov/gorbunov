/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Студия Сергея Горбунова</i> занимается профессиональной разработкой веб решений для вашего бизнеса",
        "Используем современные технологии и актуальные подходы",
        "Создаем качественные и эффективные продукты, нацеленные на результат для бизнеса",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      backDelay: 2000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
};

export default TypedText;
