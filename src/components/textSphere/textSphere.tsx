import React, { useEffect } from "react";

import TagCloud from "TagCloud";
import { options, texts } from "./config";

const tagcloud = ".tagcloud";

const TextShpere = () => {
  useEffect(() => {
    return () => {
      TagCloud(tagcloud, texts, options);
    };
  }, []);

  return (
    <div className="text-shpere hidden xs:block">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextShpere;
