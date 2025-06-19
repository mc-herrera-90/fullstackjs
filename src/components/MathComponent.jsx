import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['input/tex', 'output/chtml'] },
};

export default function MathComponent({ formula }) {
  return (
    <MathJaxContext config={config}>
      <MathJax inline dynamic style={{display: "block", fontSize: "2.2rem", textAlign: "center", margin: "1.5rem 0"}}>
        {`\\(${formula}\\)`}
      </MathJax>
    </MathJaxContext>
  );
}