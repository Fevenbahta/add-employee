import React from 'react';

export const ProfileImage = ({ src, alt }) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-full rounded-lg p-3 bg-white">
        <img
            src={src}
            alt={alt}
            className="w-full aspect-square object-cover rounded-sm shadow-sm"
        />
    </div>
);

export const TagSection = ({ title, items }) => (
    <div>
        <h3 className="text-3xl font-bold mb-6 text-[#1D3752]">{title}</h3>
        <div className="flex flex-wrap gap-5">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-[#1D3752] text-white px-8 py-2.5 rounded-full font-[500] text-lg">
                    {item}
                </div>
            ))}
        </div>
    </div>
);

export const ProfileForm = ({ children }) => (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-5">
        {children}
    </form>
);