import React from "react";
import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" span="services" />

      <div className="section-center services-center">
        {services.map(service => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
