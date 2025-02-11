// src/pages/Gallery.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/gallery.module.css";

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/getImages");
        const data = await res.json();

        console.log("data", data);

        if (Array.isArray(data)) {
          // Randomize image order
          setImages(data.sort(() => Math.random() - 0.5));
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setImageSize(null); // Reset size so we don't show an outdated one

    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
    };
  };

  return (
    <>
      <div className="main-content">
        <h1>Snaps</h1>
        <br />
        <p>
          A person&apos;s essence is really hard to capture with words alone. So
          here are some fun pictures!
        </p>
      </div>
      <div className={styles.galleryContainer}>
        <div className={styles.imageGrid}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.imageWrapper}
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {selectedImage && imageSize && (
          <div
            className={styles.overlay}
            onClick={() => setSelectedImage(null)}
          >
            <div className={styles.fullImageContainer}>
              <Image
                src={selectedImage}
                alt="Expanded View"
                layout="intrinsic"
                width={imageSize.width}
                height={imageSize.height}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
