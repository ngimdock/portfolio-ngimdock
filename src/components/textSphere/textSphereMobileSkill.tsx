import React, { useEffect } from "react";

import TagCloud from "TagCloud";
import { options, texts } from "./config";

const tagcloud = ".tagcloudMobileSkill";

const TextShpereMobileSkill = () => {
  useEffect(() => {
    return () => {
      TagCloud(tagcloud, texts, { ...options, radius: 190 });
    };
  }, []);

  return (
    <div className="xs:hidden">
      <span className="tagcloudMobileSkill"></span>
    </div>
  );
};

export default TextShpereMobileSkill;
