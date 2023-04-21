import Image from "next/image";

const ImageBox = ({ src, alt, description }) => (
    <div className="flex flex-col items-center">
        <div className="relative mb-4">
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="grayscale-[80%] object-cover rounded-md h-36 w-36"
            />
        </div>
        <div className="">{description}</div>
    </div>
);

const ImageList = ({ images }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
            <ImageBox key={index} src={image.src} alt={image.alt} description={image.description} />
        ))}
    </div>
);

export default ImageList;
