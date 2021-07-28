import "./Vacancy.scss";
import VacancyCard from "./VacancyCard/VacancyCard";

function Vacancy() {
  return (
    <div className="Vacancy">
      <div>
        Приєднуйся до команди <span>tomatina</span>
      </div>
      <div className="VacancyPosition">
        <VacancyCard
          src="https://www.tomatina.ua/wp-content/uploads/2021/05/viber_image_2021-05-20_11-24-01-614x370.jpg"
          position="АДМІНІСТРАТОР"
        ></VacancyCard>
        <VacancyCard
          src="https://www.tomatina.ua/wp-content/uploads/2021/05/viber_image_2021-05-21_10-42-23-614x370.jpg"
          position="КАСИР РЕСТОРАНУ"
        ></VacancyCard>
        <VacancyCard
          src="https://www.tomatina.ua/wp-content/uploads/2021/01/photo5467710779508765129-614x370.jpg"
          position="САЛАТЬЄ"
        ></VacancyCard>
        <VacancyCard
          src="https://www.tomatina.ua/wp-content/uploads/2021/01/img_6476-1-scaled-614x370.jpg"
          position="КУХАР ЛІНІЇ ВИДАЧІ"
        ></VacancyCard>
        <VacancyCard
          src="https://www.tomatina.ua/wp-content/uploads/2021/01/img_6539-scaled-614x370.jpg"
          position="КУХАР ВОК"
        ></VacancyCard>
        <VacancyCard
          src="https://www.tomatina.ua/wp-content/uploads/2020/10/delivery-2-623x419-1-614x370.jpg"
          position="МОТО ТА ВЕЛО КУР’ЄР"
        ></VacancyCard>
      </div>
    </div>
  );
}

export default Vacancy;
