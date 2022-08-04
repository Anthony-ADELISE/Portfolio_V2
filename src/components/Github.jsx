import React from "react";

// import calendar
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <section className="container mx-auto mt-20">
      <div>
        {/* text */}
        <h1
          className="text-center text-4xl font-bold"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <span className="spans">Coding </span>Day
        </h1>
      </div>
      <div
        className="flex items-center justify-center pt-14 font-grotesk font-bold"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        <GitHubCalendar
          username="Anthony-ADELISE"
          color="#b936f5"
          blockSize={15}
          fontSize={16}
        />
      </div>
    </section>
  );
};

export default Github;
