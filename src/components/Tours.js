import Title from "./Title";
import { ToursData } from "./Data";

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours " />

      <div className="section-center featured-center">
        {ToursData.map((tour) => {
          const { id, img, date, title, country, time, price, text } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {country}
                  </p>
                  <p>{time}</p>
                  <p>from{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
