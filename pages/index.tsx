import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  // console.log(services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        I am Rashidul Islam. I am a front-end web developer. I take my job as a
        web developer seriously and that means I always make sure my skills are
        kept up to date in this fast-changing industry. I feel comfortable with
        HTML, CSS, JavaScript. I use ReactJs to create the user interface. I
        have basic knowledge about Node JS and Expressjs. I use MongoDB as the
        database. I enjoy web development a lot. I like to do projects. I enjoy
        learning new things every day in web development. I like to do a lot of
        photography as well as web development.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h3 className="my-3 text-xl font-semibold tracking-wide">Services</h3>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-md dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
