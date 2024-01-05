import Title from "./Title";
import { ServicesInfo } from "./Data";

export default function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {ServicesInfo.map((info) => {
          const { key, icon, heading, text } = info;
          return (
            <article className="service" key={key}>
              <span className="service-icon">
                <i className={`fas fa-${icon} fa-fw`}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{heading}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
