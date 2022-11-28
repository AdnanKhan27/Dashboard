/* ❕ Used pdfviewer -> https://www.pdftron.com/documentation/web/get-started/react/ */

import { React, useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

const ExamplePDFViewer = () => {
  const viewerDiv = useRef(null);

  useEffect(() => {
    WebViewer(
      { path: "lib", initialDoc: "https://arxiv.org/pdf/quant-ph/0410100.pdf" },
      viewerDiv.current
    ).then((instance) => {
    //   const { documentViewer } = instance.Core;
    });
  }, []);

  return (
    <div className="m-2 md:mx-10 sm:mt-24 lg:mt-2 p-2 md:p-4 bg-white rounded-3xl h-[80vh] md:h-[90vh]">
      <div className="h-full rounded-lg" ref={viewerDiv}></div>
    </div>
  );
};

export default ExamplePDFViewer;
