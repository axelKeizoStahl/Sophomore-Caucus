"use client"
import { useEffect, useState } from "react";

const PdfViewer = ({ fileName }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(`/api/pdfImage?fileName=${fileName}`)
      .then((response) => response.text())
      .then((data) => setImageUrl(data));
  }, [fileName]);

  if (!imageUrl) return null;

  return <img src={imageUrl} alt={fileName} />;
};

export default PdfViewer;

