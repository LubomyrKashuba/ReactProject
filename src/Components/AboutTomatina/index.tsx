import React from "react";
import "../AboutTomatina/AboutTomatina.scss";

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="head">
        <h1>Про</h1> <h1 className="head__tom">Томатіну</h1>
      </div>
      <div className="AboutUs__content">
        <div className="content__text">
          <h1>TOMATINA</h1>
          <p>
            Ресторан здорового харчування Tomatina - це не лише свіжі ідеї від
            наших бренд-кухарів, а й ситні, корисні та вітамінні страви, які ви
            маєте змогу створити особисто. І не важливо чи ви надаєте перевагу
            веганській, вегетаріанській чи м’ясній кухні - у нашому меню ви
            завжди знайдете ідеальний для себе варіант. І головне - всі наші
            страви готуються виключно зі свіжих фермерських продуктів та за
            принципами здорового харчування.
          </p>
        </div>
        <div className="content__img">
          <img src="https://www.tomatina.ua/wp-content/uploads/2021/02/vivsyanka-z-lonom-ta-brynzoyu-pid-sousom-golandez-350x350.png" alt="IMG" />
        </div>
      </div>

      <div className="AboutUs__content">
        <div className="content__img">



          <img src="https://www.tomatina.ua/wp-content/uploads/2021/02/yajczya-benedykt-z-hrustkym-bekonom-ta-buryachkovym-ajoli-350x350.png" alt="IMG" />
        </div>

        <div className="content__text">
          <h1>Створи свій авторський салат</h1>
          <p>
            Окрім супів, сендвічів, десертів чи оригінальних напоїв ми
            пропонуємо наші основні хіти - це салат-паста та конструктор. Це
            значить, що у нашому гастробарі можна обрати як вже готовий мікс від
            шеф-кухаря так і створити особисто, виходячи з власних уподобань, і
            витратити на це не більше як 5 хвилин часу. Салат-бар Tomatina
            нараховує близько 50 компонентів та понад 15 соусів, з яких
            створюються індивідуальні страви на будь-який смак. Ви просто
            обираєте улюблені інгредієнти і за кілька кліків ваш авторський
            варіант готовий. І якщо ви ще не куштували салат-пасту, рекомендуємо
            обов’язково спробувати цю нашу фірмову страву з італійським
            характером.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
