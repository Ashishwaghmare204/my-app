"use client";
import React, { useState } from "react";
import Image from "next/image";

function ImageSearch() {
  const [itemName, setItemName] = useState("");
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    if (!itemName) return;

    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${itemName}&per_page=1`,
        {
          headers: {
            Authorization:
              "Client-ID oLUUa-kW3Xb1ucu1k4UpHyyJY6ABtP6qhYG5OUo786Y",
          },
        },
      );

      const data = await res.json();

      console.log("Unsplash API Response 👉", data); // ✅ logs full response

      setImages(data.results || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Search Image</h2>

      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <button onClick={fetchImages}>Search</button>

      <div style={{ marginTop: "20px" }}>
        {images.length > 0 && (
          <Image
            src={images[0].urls.small}
            alt={images[0].alt_description || "Unsplash image"}
            width={400}
            height={400}
            style={{ width: "200px", height: "auto", margin: "10px" }}
          />
        )}
      </div>
    </div>
  );
}

export default ImageSearch;
