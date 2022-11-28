/* ❕ Used pdfviewer -> https://www.pdftron.com/documentation/web/get-started/react/ */

import { React, useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

import { useStateContext } from "../contexts/ContextProvider";

const ExamplePDFViewer = () => {
    

  const viewerDiv = useRef(null);

  useEffect(() => {
    WebViewer(
      { path: "lib", initialDoc: "https://arxiv.org/pdf/quant-ph/0410100.pdf" },
      viewerDiv.current
    ).then((instance) => {
    //   const { documentViewer } = instance.Core;
    const theme = instance.UI.Theme;
    instance.UI.setTheme(theme.DARK);
    });
  }, []);

  return (
    <div className="m-2 md:mx-10 mt-16 md:mt-2 lg:mt-2 p-2 bg-white rounded-3xl h-[80vh] md:h-[90vh]">
      <div className="h-full rounded-2xl sh" ref={viewerDiv}></div>
    </div>
  );
};

export default ExamplePDFViewer;
