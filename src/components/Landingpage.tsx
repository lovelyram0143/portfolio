"use client";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import PureCounter from "@srexi/purecounterjs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebookSquare,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { GrServices } from "react-icons/gr";
import { IoMdArrowDropright } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdOutlineContactMail, MdOutlineMenu } from "react-icons/md";
import Typed from "typed.js";

const features = [
  {
    // Icon: FileTextIcon,
    name: "Biodata for Marriage",
    description:
      "Looking for cool biodata for marriage templates? Look no further, explore the collection of Biodata Maker templates!",
    href: "https://biodataformarriage.net/",
    cta: "Learn more",
    background: (
      <img className="absolute opacity-60" src="/biodataformarriage.jpg" />
    ),
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 h-[300px] lg:col-end-3",
  },
  {
    // Icon: InputIcon,
    name: "RandomGenerator.AI",
    description:
      "Welcome to RandomGenerator.AI, your one-stop source for all kinds of random data. We make it easy and fun to find random info for any purpose!",
    href: "https://randomgenerator.ai/",
    cta: "Learn more",
    background: (
      <img className="absolute opacity-60" src="/randomgenerator.jpg" />
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 h-[300px] lg:row-end-3",
  },
  {
    // Icon: GlobeIcon,
    name: "Dyuti AI - Tools for students to help in their pursuit of dreams",
    description:
      "Embark on a transformative journey with Dyuti AI as we strive to revolutionize the way students navigate through college admissions and counseling processes.",
    href: "https://dyuti.ai/",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="/dyuti.jpg" />,
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 h-[300px] lg:row-end-4",
  },
  {
    // Icon: CalendarIcon,
    name: "5reels",
    description: `At 5Reels.com, we celebrate the magic of storytelling. Our goal is to connect Telugu movie lovers everywhere with their cultural roots through cinema.`,
    href: "https://www.5reels.com/",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="/5reels.jpg" />,
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-1 h-[300px] lg:row-end-2",
  },
];

const Landingpage = () => {
  const [activeSection, setActiveSection] = useState("hero_section");
  const typedRef = useRef(null);
  const hero_section = useRef(null);
  const about_section = useRef(null);
  const project_section = useRef(null);
  const service_section = useRef(null);
//   const contact_section = useRef(null);
//   const menuRef = useRef(null);

  const calculateAge = (dateString: string): number => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  console.log(calculateAge("2001-06-15"));

  const scrollto = (section: any) => {
    section.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed (0.5 means 50% of section needs to be visible)
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    // // Call the function on load to highlight the correct link
    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /**
     * Pure Counter
     */
    new PureCounter();
    AOS.init({ duration: 1000, delay: 100 });
    // Initialize Typed.js for typing effect
    const typed = new Typed(typedRef.current, {
      strings: ["Designer", "Developer", "Freelancer", "Full Stack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  console.log(activeSection);
  const isBrowser = typeof self !== "undefined";
  if (isBrowser) {
    return (
      <>
        <div className="flex flex-row caret-transparent ">
          <div className="hidden sm:flex bi-list mobile-nav-toggle">
            <MdOutlineMenu />
          </div>
          <header id="header" className="flex flex-col justify-center ">
            <nav id="navbar" className="flex navbar sm:hidden nav-menu">
              <ul>
                <li>
                  <a
                    onClick={() => scrollto(hero_section)}
                    className={`nav-link scrollto  ${
                      activeSection === "hero" ? "active" : ""
                    }`}
                  >
                    <FaHome className="size-6" /> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollto(about_section)}
                    className={`nav-link scrollto  ${
                      activeSection === "about" ? "active" : ""
                    }`}
                  >
                    <IoPerson className="size-6" />
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollto(project_section)}
                    className={`nav-link scrollto  ${
                      activeSection === "project" ? "active" : ""
                    }`}
                  >
                    <GoProject /> <span>Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollto(service_section)}
                    className={`nav-link scrollto  ${
                      activeSection === "services" ? "active" : ""
                    }`}
                  >
                    <GrServices /> <span>Services</span>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        {/* <!-- ======= Hero Section ======= --> */}

        <section
          ref={hero_section}
          id="hero"
          className="flex flex-col justify-center w-full caret-transparent"
        >
          <div className="container " data-aos="zoom-in">
            <h1>Ramesh Bojanapu</h1>
            <p>
              I'm <span ref={typedRef}></span>
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/ramesh.bojanapu.1011"
                className="facebook"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/ramesh_bojanapu/"
                className="instagram"
              >
                <FaInstagramSquare />
              </a>
              <a href="mailto:bramesh1011@gmail.com" className="google-plus">
                <MdOutlineContactMail />
              </a>
              <a
                href="https://www.linkedin.com/in/ramesh-bojanapu-a5674819a/"
                className="linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>

        {/*   About section */}
        <section
          ref={about_section}
          id="about"
          className="flex flex-col justify-center caret-transparent "
        >
          <div className="w-[80%] about mx-auto " data-aos="fade-up">
            <div className="content">
              <div className="section-title">
                <h2>About</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div className="flex flex-wrap -mx-3 -mt-0 md:flex-row md:flex">
                <div className="flex justify-center w-1/3 md:w-full md:m-auto ">
                  <div className="p-2 bg-slate-500 shadow-lg rounded-[20px]">
                    <img
                      src="/hero.jpg"
                      className="img-fluid h-[400px] rounded-[20px] shadow-lg hover:translate-y-2 "
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col w-2/3 p-5 pt-0 md:w-full content">
                  <div className="flex flex-col md:pt-5">
                    <h3>UI/UX Designer &amp; Web Developer.</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                  <div className="flex flex-wrap mt-3 -mx-3">
                    <div className="flex-none w-[50%] sm:w-full">
                      <ul>
                        <li>
                          <IoMdArrowDropright />
                          <strong>Birthday:</strong> <span>15 june 2001</span>
                        </li>

                        <li>
                          <IoMdArrowDropright />
                          <strong>Phone:</strong> <span>+91 9603398030</span>
                        </li>
                        <li>
                          <IoMdArrowDropright />
                          <strong>City:</strong> <span>Rayachoty</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-[50%] sm:w-full">
                      <ul>
                        <li>
                          <IoMdArrowDropright /> <strong>Age:</strong>
                          <span>{calculateAge("2001-06-15")}</span>
                        </li>
                        <li>
                          <IoMdArrowDropright />
                          <strong>Degree:</strong> <span>Btech</span>
                        </li>
                        <li>
                          <IoMdArrowDropright />
                          <strong>Email</strong>
                          <span>bramesh1011@gmailcom</span>
                        </li>
                        <li>
                          <IoMdArrowDropright />
                          <strong>Freelance:</strong> <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Officiis eligendi itaque labore et dolorum mollitia officiis
                    optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                    accusantium dolor incidunt officia tempore. Et eius omnis.
                    Cupiditate ut dicta maxime officiis quidem quia. Sed et
                    consectetur qui quia repellendus itaque neque. Aliquid amet
                    quidem ut quaerat cupiditate. Ab et eum qui repellendus
                    omnis culpa magni laudantium dolores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*   Resume section */}
        <section
          id="project"
          ref={project_section}
          className="flex flex-row flex-wrap items-center w-screen h-full "
        >
          <div className="flex h-fit">
            {/* <motion.div
            initial={{ opacity: 0, y: 0, x: -100 }}
            whileInView={{ opacity: 1, y: 0, x: 30 }}
            transition={{ duration: 1 }}
            className="m-[50px] p-[20px]"
          > */}
            <BentoGrid className="flex flex-wrap justify-center gap-4 ">
              {features.map((feature , index) => (
                <div key={index} className="flex w-[400px]" data-aos="zoom-in">
                  <BentoCard key={feature.name} {...feature} />
                </div>
              ))}
            </BentoGrid>
            {/* </motion.div> */}
          </div>
        </section>

        {/* Service section */}
        <section
          id="services"
          ref={service_section}
          className="flex flex-col justify-center h-screen"
        >
          <div className="container" data-aos="zoom-in">
            <div className="flex items-center justify-center h-screen ">
              <BentoGrid children={undefined}/>
            </div>
          </div>
        </section>
        <div id="preloader"></div>
      </>
    );
  }
  
};

export default Landingpage;
