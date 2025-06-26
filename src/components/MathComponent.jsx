import { MathJax, MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ['input/tex', 'output/chtml'] },
};

export default function MathComponent({ formula }) {
  return (
    <MathJaxContext config={config}>
      <div style={{ overflowX: 'auto', width: '100%' }}>
        <MathJax inline dynamic className="math">
          {`\\(${formula}\\)`}
        </MathJax>
      </div>
    </MathJaxContext>
  );
}