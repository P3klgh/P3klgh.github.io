'use client';

import { Icon } from '@iconify/react';
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator 
          orientation="vertical" 
          className="mr-2 data-[orientation=vertical]:h-4" 
          />

        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Main Portfolio Content */}
          {/* Hero Section */}
          <section id="billboard" className="jarallax bg-secondary">
            <div className="container-lg">
              <div className="row align-items-end">
                <div className="col-lg-6" data-aos="zoom-in-up">
                  <div className="banner-content">
                    <div className="banner-header">
                      <h2 className="display-1">Kenneth Lee<br />Full Stack Developer</h2>
                      <p className="fs-5">
                        I am a dedicated full-stack developer with a robust background in computer science and mechatronics engineering. My expertise spans programming languages like C#, C++, Python, JavaScript, and TypeScript, alongside modern technologies such as React, Node.js, PostgreSQL, and DevOps tools including Docker and AWS. Through projects like Project Gamma and a low-latency Minecraft AWS server, I've honed my ability to deliver scalable, secure solutions. My leadership in the WorldSkills Singapore robotics team, where I engineered advanced motor control and computer vision systems, reflects my passion for innovation and problem-solving. With strong teamwork and communication skills forged through national service and extracurriculars, combined with a solid academic foundation at Queensland University of Technology, I am eager to drive impact in technology-driven teams.
                      </p>
                      <a href="#contact" className="btn btn-primary btn-large">Get in touch</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="zoom-in-up">
                  <img src="/images/banner-pic.png" alt="P3klgh" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about-me" className="padding-large">
            <div className="container-lg">
              <div className="row">
                <div className="col-md-4 mb-5 mb-lg-0">
                  <div className="info-box" data-aos="zoom-in-up" data-aos-delay="300">
                    <div className="icon"><Icon icon="la:edit" /></div>
                    <h3>Full-Stack Development</h3>
                    <p>
                      Building robust, scalable web applications using React, Node.js, TypeScript, and PostgreSQL, with a focus on modular architecture, security, and performance optimization.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-5 mb-lg-0">
                  <div className="info-box" data-aos="zoom-in-up" data-aos-delay="600">
                    <div className="icon"><Icon icon="la:gitter" /></div>
                    <h3>DevOps & Cloud</h3>
                    <p>
                      Streamlining development workflows with Docker, AWS, and CI/CD pipelines via GitHub Actions, ensuring consistent, efficient, and reliable deployments.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-5 mb-lg-0">
                  <div className="info-box" data-aos="zoom-in-up" data-aos-delay="900">
                    <div className="icon"><Icon icon="la:jira" /></div>
                    <h3>Robotics & IoT</h3>
                    <p>
                      Designing and programming embedded systems with Raspberry Pi and Arduino, integrating computer vision and sensor technologies for real-time applications.
                    </p>
                  </div>
                </div>
              </div>
               <div className="col-md-4 mb-5 mb-lg-0">
                <div className="info-box" data-aos="zoom-in-up" data-aos-delay="1200">
                  <div className="icon"><Icon icon="la:gitter" /></div>
                   <h3>Leadership & Project Management</h3>
                     <p>
                        Leading high-performance teams and managing complex projects using Agile and Waterfall methodologies, as demonstrated in WorldSkills Singapore and National Service roles.
                    </p>
                </div>
              </div>
            </div>
          </section>

          {/* Achievement Section */}
          <section id="achievement" className="padding-large pt-0">
            <div className="container-lg">
              <div className="row">
                <div className="section-header align-center mb-5">
                  <span className="text-primary">Awards and Recognition</span>
                  <h2 className="display-5 m-0">Achievement</h2>
                </div>
              </div>
            </div>

            <div className="container-lg">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4" data-aos="zoom-in-up" data-aos-delay="400">
                    <div className="card-body">
                      <span className="card-subtitle mb-2 text-primary">2023-Present</span>
                      <h4 className="card-title text-capitalize">Academic Excellence</h4>
                      <p className="card-text">Maintained a GPA of 6.25 in the Bachelor of Computer Science at Queensland University of Technology, demonstrating strong performance in programming and algorithms.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4" data-aos="zoom-in-up" data-aos-delay="0">
                    <div className="card-body">
                      <span className="card-subtitle mb-2 text-primary">2016</span>
                      <h4 className="card-title text-capitalize">WorldSkills Singapore Robotics Lead</h4>
                      <p className="card-text">Led the inaugural robotics team at ITE West to a successful debut in WorldSkills Singapore, showcasing advanced motor control and computer vision systems.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4" data-aos="zoom-in-up" data-aos-delay="200">
                    <div className="card-body">
                      <span className="card-subtitle mb-2 text-primary">2015-2017</span>
                      <h4 className="card-title text-capitalize">Director's List</h4>
                      <p className="card-text">Recognized in the top 10% of the Higher Nitec Certification cohort at the Institute of Technical Education for outstanding academic and technical performance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="overflow-hidden padding-large">
            <div className="container-lg" data-aos="zoom-in-up" data-aos-delay="300">
              <div className="row">
                <div className="col-md-8">
                  <div className="section-header d-flex flex-wrap justify-content-center justify-content-md-start align-items-center mb-2 mb-md-5">
                    <h2 className="display-5 m-0">Recent Projects</h2>
                    <a href="#portfolio" className="btn-link ms-0 ms-md-5 text-dark text-decoration-none">View all Projects</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="portfolio-carousel swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <figure className="portfolio-item">
                          <a href="https://github.com/P3klgh/ProjectGamma"><img src="/images/Picture1.png" className="portfolio-image" alt="Project 1" /></a>
                          <figcaption className="portfolio-title my-3">
                            <span className="text-primary text-uppercase fs-6">Personal Project</span>
                            <h3 className="fs-4 fw-bold">Project Gamma</h3>
                            <p className="fs-6">Working with React 18 and TypeScript, I embarked on a journey to architect scalable frontends that truly resonated with my growing expertise. I made it a point to craft reusable components, which not only streamlined my development process but also deepened my appreciation for modularity. 
                              Embracing TypeScript’s strong typing became a personal milestone, as it allowed me to prevent runtime errors and instil a sense of consistency across the user interface—a challenge I initially underestimated. One of the most rewarding discoveries was the power of the Context API, which I implemented to manage authentication state globally. This experience taught me how to elegantly wrap protected views, giving me a profound sense of accomplishment as I ensured the UI seamlessly adapted to shifts in authentication state. Reflecting on this, I recognize how these practices have shaped my approach, blending technical skill with a thoughtful understanding of user experience and security.
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="swiper-slide">
                        <figure className="portfolio-item">
                          <a href="https://drive.google.com/file/d/1YLerWn2xKWmHct70oK_98CqARqWV7qMs/view?usp=sharing"><img src="/images/Picture2.png" className="portfolio-image" alt="Project 2" /></a>
                          <figcaption className="portfolio-title my-3">
                            <span className="text-primary text-uppercase fs-6">Project in a University unit</span>
                            <h3 className="fs-4 fw-bold">Security Camera App</h3>
                            <p className="fs-6">
                              As part of an introductory computer systems project in QUT, I developed a real-time security camera system using a Raspberry Pi and YOLOv5 for object detection. The system uses a USB webcam connected to the Raspberry Pi to monitor a designated area for human or vehicle presence—deemed common security threats. For image recognition, I employed the YOLOv5-nano variant from Ultralytics (https://github.com/ultralytics/yolov5/releases) due to its optimized size and performance for resource-constrained devices. The software identifies objects in the camera feed and labels them with confidence scores, focusing on "person" and "car" classes (Class 0 and Class 3).
                            </p>
                          </figcaption>
                        </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure className="portfolio-item">
                            <a href="https://docs.google.com/document/d/14eIYmkjpOa0BCv5CplPUg-S_bTrYx3Gq/edit?usp=sharing&ouid=105796539456882712330&rtpof=true&sd=true"><img src="/images/Picture3.png" className="portfolio-image" alt="WorldSkills Robotics" /></a>
                            <figcaption className="portfolio-title my-3">
                              <span className="text-primary text-uppercase fs-6">Robotics Competition</span>
                              <h3 className="fs-4 fw-bold">WorldSkills Singapore Robotics</h3>
                              <p className="fs-6">
                                As team lead for ITE West’s inaugural robotics team at WorldSkills Singapore 2016, I spearheaded the design and programming of a competitive mobile robotics system. Using NI MyRio controllers, LabVIEW, and C++, I developed advanced motor control systems with precise PID tuning for mecanum wheels and integrated computer vision using NI Vision for real-time object detection. I engineered a custom LabVIEW interface for live PID monitoring and implemented IR GP2Y sensors for wall detection, enhancing navigation. This project, executed over two years using a hybrid Waterfall-Agile methodology, showcased my expertise in hardware-software integration and leadership in a high-stakes competition.
                              </p>
                            </figcaption>
                          </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="padding-large bg-grey">
            <div className="container-lg">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header align-center mb-5">
                    <span className="text-primary">Get In Touch</span>
                    <h2 className="display-5 m-0">Contact Me</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="contact-info text-center">
                    <p className="mb-4">I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!</p>
                    <div className="d-flex justify-content-center gap-4">
                      <a href="mailto:kenneth.gh.lee@gmail.com" className="btn btn-primary">Email Me</a>
                      <a href="https://github.com/P3klgh" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-dark text-white py-4">
            <div className="container-lg">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="m-0">&copy; 2025 P3klgh. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
