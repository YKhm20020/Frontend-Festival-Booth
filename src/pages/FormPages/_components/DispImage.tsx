import type React from "react";

type DispImageProps = {
	src: string;
	alt?: string;
};

export const DispImage: React.FC<DispImageProps> = ({ src, alt }) => {
	return (
		<img 
            src={src}
            className='object-cover object-center mt-1 h-60 md:w-72 lg:w-80 focus:shadow-outline hover:ring-4 hover:ring-blue-600'
            alt={alt}
            width={300}
            height={300} 
        />
	);
};
