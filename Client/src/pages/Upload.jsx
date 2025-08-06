import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Marksheet</h2>
      <input
        type="file"
        accept=".png, .jpg, .jpeg, .pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      {file && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
          <p className="text-sm">File Selected: {file.name}</p>
        </div>
      )}
      <button className="mt-4 bg-primary text-black px-4 py-2 rounded hover:bg-yellow-400">
        Upload & Process
      </button>
    </div>
  );
}
    