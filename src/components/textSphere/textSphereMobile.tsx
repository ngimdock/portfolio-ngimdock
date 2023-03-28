import React, { useEffect } from "react";

import TagCloud from "TagCloud";
import { options, texts } from "./config";

const tagcloud = ".tagcloudMobile";

const TextShpereMobile = () => {
  useEffect(() => {
    return () => {
      TagCloud(tagcloud, texts, { ...options, radius: 190 });
    };
  }, []);

  return (
    <div className="xs:hidden">
      <span className="tagcloudMobile"></span>
    </div>
  );
};

export default TextShpereMobile;
