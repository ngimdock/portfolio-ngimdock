import React, { useEffect } from "react";

import TagCloud from "TagCloud";
import { options, texts } from "./config";

const tagcloud = ".tagcloud";

const TextShpere = () => {
  useEffect(() => {
    return () => {
      TagCloud(tagcloud, texts, options); // j'ai commenté une partie du code de TagCloud dans le nodemodule
    };
  }, []);

  return (
    <div className="text-shpere hidden xs:block">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextShpere;
