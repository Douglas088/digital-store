import React, { useState } from "react";
import { Galleria } from "primereact/galleria";
import TenisWhite from "../assets/white-sneakers.png";
import TenisBlue from "../assets/blue-sneakrs.png";
import TenisBlack from "../assets/black-sneakrs.png";
import styled from "styled-components";

export default function HoverEventDemo() {
  const initialImages = [
    { itemImageSrc: TenisWhite, alt: "White Sneakers" },
    { itemImageSrc: TenisBlue, alt: "Blue Sneakers" },
    { itemImageSrc: TenisBlack, alt: "Black Sneakers" },
  ];

  const [images] = useState(initialImages);

  const itemTemplate = (item) => {
    return (
      <div className="gallery-item">
        <div className="card-text">
          <span>Melhores ofertas personalizadas</span>
          <h1>Queima de <br />stoque Nike 🔥</h1>
          <p>
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
        </div>
        <img src={item.itemImageSrc} alt={item.alt} className="gallery-image" />
      </div>
    );
  };

  return (
    <HomeContainer>
      <div className="hero">
        <div className="card">
          <Galleria
            value={images}
            style={{ maxWidth: "1000px" }}
            changeItemOnIndicatorHover
            showThumbnails={false}
            showIndicators
            item={itemTemplate}
          />
        </div>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  .hero {
    background-color: var(--light-gray-3);
    height: 681px;
    display: flex;
    justify-content: center;

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .p-galleria {
        display: flex;
        justify-content: center;
        position: relative;
      }

      .p-galleria-content {
        display: flex;
        justify-content: center;
      }

      .gallery-item {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .card-text {
        display: flex;
        flex-direction: column;
        width: 500px;
        gap: 20px;
        z-index: 1000;


        span {
          font-size: 16px;
          font-weight: bold;
          color: var(--warning);
        }

        h1 {
          font-size: 64px;
          font-weight: 800;
          line-height: 66px;
        }
      }

      .gallery-image {
        height: 600px;
        width: 600px;
        object-fit: contain;
      }

      .p-galleria-indicators {
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 08px;
        height: 12px;
        width: 12px;
        gap: 10px;
        width: 100%;
      }
    }
  }
`;
