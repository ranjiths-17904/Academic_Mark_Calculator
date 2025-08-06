import { useState } from 'react';
import Tesseract from 'tesseract.js';

const OCRUploader = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const extractText = () => {
    if (image) {
      Tesseract.recognize(image, 'eng', {
        logger: m => console.log(m),
      }).then(({ data: { text } }) => {
        setText(text);
      });
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-dark rounded shadow">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={extractText} className="mt-2 px-4 py-2 bg-primary text-white rounded">Extract Text</button>
      <pre className="mt-4">{text}</pre>
    </div>
  );
};

export default OCRUploader;
