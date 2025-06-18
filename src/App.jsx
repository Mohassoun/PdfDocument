import PdfDocument from './PdfDocument';

export default function App() {
  return (
    <div>
      <h1>PDF Viewer Example</h1>
      <PdfDocument file="sample.pdf" />
    </div>
  );
}
