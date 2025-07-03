import React, { useState } from "react";


interface ImageGalleryProps {
    images: string[];
    alt: string;
    className?: string;
}

function ImageGallery({ images, alt, className = "" }: ImageGalleryProps) {
    const [selectImgInd, setSelectImgInd] = useState(0);

    if(!images || images.length === 0) { return null }

    const imageCount = images.length;

    const nextImage = () => {
        if (selectImgInd < imageCount - 1) { setSelectImgInd(() => selectImgInd + 1) }
    }

    const prevImage = () => {
        if(selectImgInd > 0) { setSelectImgInd(() => selectImgInd - 1) }
    }

    const handleImageError = (evt: React.SyntheticEvent<HTMLImageElement>) => {
        evt.currentTarget.style.display = "none";
    }

    return (
        <div className={`image-section ${className}`}>
            {imageCount === 1 ? (
                // Одна картинка - просто показываем
                <div className="single">
                    <img
                        src={images[0]}
                        alt={alt}
                        className='single__image'
                        onError={handleImageError}
                    />
                </div>
            ) : (
                // 2+ картинок - всегда галерея с переключением
                <div className="gallery">
                    {/* Кнопки навигации */}
                    <div className="gallery-controls">
                        <button
                            onClick={prevImage}
                            disabled={selectImgInd === 0}
                            className="gallery-controls__btn"
                        >
                            ←
                        </button>
                        <span className="image-counter">
                                {selectImgInd + 1} / {imageCount}
                            </span>
                        <button
                            onClick={nextImage}
                            disabled={selectImgInd === imageCount - 1}
                            className="gallery-controls__btn"
                        >
                            →
                        </button>
                    </div>
                    <div className="gallery__container">
                        <img
                            src={images[selectImgInd]}
                            alt={`${alt} - картинка ${selectImgInd + 1}`}
                            className="main-image"
                            onError={handleImageError}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageGallery