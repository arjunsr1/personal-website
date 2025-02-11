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

  const imageCaptions: Record<string, string> = {
    "/images/gallery/edinburgh.jpg":
      "Me amidst some flowers in Edinburgh, April 2024. Gorgeous city with a lot of charm.",
    "/images/gallery/dinner.jpg":
      "What an average home cooked dinner looks like for me. The art of plating is frankly a bit lost on me, but I consider this one a good attempt!",
    "/images/gallery/cote.jpg":
      "Cote Korean BBQ in New York City. This was the Butcher's Feast, a pre fixe option.",
    "/images/gallery/trafalgar.jpg":
      "Me in full tourism mode at Trafalgar Square, April 2024. Fun people watching spot!",
    "/images/gallery/tahquamenon.JPG":
      "A friend of mine and I at Tahquamenon falls in the upper peninsula of Michigan, July 4th weekend, 2024.",
    "/images/gallery/usopen.jpg": "My family at the US open, September 2024!",
    "/images/gallery/breakfast.jpg":
      "What an average home cooked breakfast / lunch looks like. Light and simple, but truly delicious.",
    "/images/gallery/jokulsarlon.jpg":
      "On the Jokulsarlon Glacier Lagoon in Iceland during my solo visit in October 2023. Was awestruck by the gorgeous blue icebergs.",
    "/images/gallery/kauai.jpg":
      "A gorgeous shot of some fields and taro paddies in Kauai, December 2022.",
    "/images/gallery/kerid.jpg":
      "Selfie at Kerid crater in Iceland, October 2023.",
    "/images/gallery/uofm.JPG":
      "Myself and some dear friends from college in our last few months in Ann Arbor, April 2020.",
    "/images/gallery/geneva.JPG":
      "Posing with statues in Geneva, Switzerland in December 2022.",
    "/images/gallery/boys.jpg":
      "Myself and two dear friends at the Sycamore in the Mission district, October 2024.",
    "/images/gallery/doubleblack.jpg":
      "Hiking up to do my first double black diamond run at Arapahoe Basin in Colorado, February 2025. Adrenaline levels were at an all time high.",
    "/images/gallery/hawkhill.jpg":
      "A beautiful sunrise at Hawk Hill past the Golden Gate Bridge, January 2025.",
    "/images/gallery/ethiopian.JPG":
      "The epic dinner platter and injera bread from of one of my favorite low key spots, Cafe Ethiopia in San Francisco's Mission district. Delicious!",
    "/images/gallery/steakandrice.jpg":
      "One of my favorite meals I had in Kauai in December 2022-- steak, rice and veggies.",
    "/images/gallery/alnico.jpg":
      "Chicken congee and Ube hotcakes from Alnico in San Francisco's Mission District- Love the purple color and presentation here.",
  };

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
          Usually, I find that a person&apos;s essence is really hard to capture
          with words alone, so here are some fun pictures from the last few
          years. Click them to get a bit more context into the memories behind
          them!
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
                height={300}
                objectFit="cover"
                loading="lazy"
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
              {imageSize && (
                <div className={styles.captionBox}>
                  {imageCaptions[selectedImage]}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
