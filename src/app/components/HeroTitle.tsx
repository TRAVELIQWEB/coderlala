import React from 'react'

export default function HeroTitle({ title1, title2 }: { title1: string, title2: string }) {
    return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-blue-500">
                {title1}
            </span>
            <span className="block text-[#ff6900] bg-clip-text bg-orange-500">
                {title2}
            </span>
        </h1>
    )
}
export function HeroTitle2({ title1, title2 }: { title1: string, title2: string }) {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-blue-500 inline md:mr-4 mr-2">
                    {title1}
                </span>
                <span className="text-[#ff6900] bg-clip-text bg-orange-500 inline">
                    {title2}
                </span>
            </h1>
        </>
    )
}
