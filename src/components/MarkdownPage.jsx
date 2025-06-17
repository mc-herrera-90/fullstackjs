import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default ({ file })  => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [file]);

  return (
    <div style={{ padding: "1rem", lineHeight: 1.6 }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
