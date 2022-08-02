import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/img/cv.pdf";

// import icon
import { AiOutlineDownload } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const ResumePdf = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      className="mt-6 "
      data-aos="flip-left"
      data-aos-duration="2000"
      data-aos-delay="500"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <a
          href={pdf}
          download="cv anthony pdf"
          className="flex items-center mb-6 btn font-bold text-white"
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>
        <Document file={pdf}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
        <a
          href={pdf}
          download="cv anthony pdf"
          className="flex items-center mt-6 mb-7 btn font-bold text-white"
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>
      </div>
    </div>
  );
};

export default ResumePdf;
