import React, { useEffect } from "react";
import TagCloud from "TagCloud";

import TagCloudSkill from "TagCloud";
import { options, texts } from "./config";

const tagcloud = ".tagcloudskill";

const TextShpereSkill = () => {
  useEffect(() => {
    return () => {
      TagCloud(tagcloud, texts, options);
    };
  }, []);

  return (
    <div className="text-shpere hidden xs:block">
      <span className="tagcloudskill"></span>
    </div>
  );
};

export default TextShpereSkill;
