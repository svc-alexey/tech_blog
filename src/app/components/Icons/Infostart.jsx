"use client"
import React, { useContext } from "react";
import { ThemeContext } from '@/context/ThemeContext';

function InfostartIcon(props) {

    const { theme } = useContext(ThemeContext);
    let color;

    // Здесь вы можете установить цвета для разных тем
    if (theme === 'light') {
        color = '#000'; // Цвет для светлой темы
    } else if (theme === 'dark') {
        color = '#fff'; // Цвет для темной темы
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            version="1.1"
            viewBox="0 0 292 293"
            style={{
                fill: `var(--color, ${color})`,
                transition: "fill 200ms linear",
                transition: "stroke 200ms linear"
            }}
        >
            <g
                fill="currentColor"
                fillOpacity="1"
                stroke="currentColor"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                transform="translate(0 -4)"
            >
                <path
                    style={{
                        lineHeight: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantPosition: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantAlternates: "normal",
                        fontFeatureSettings: "normal",
                        WebkitTextIndent: "0",
                        textIndent: "0",
                        WebkitTextAlign: "start",
                        textAlign: "start",
                        WebkitTextDecorationLine: "none",
                        textDecorationLine: "none",
                        WebkitTextDecorationStyle: "solid",
                        textDecorationStyle: "solid",
                        WebkitTextDecorationColor: "#000000",
                        textDecorationColor: "#000000",
                        WebkitTextTransform: "none",
                        textTransform: "none",
                        WebkitTextOrientation: "mixed",
                        textOrientation: "mixed",
                        whiteSpace: "normal",
                        shapePadding: "0",
                        isolation: "auto",
                        mixBlendMode: "normal",
                        solidColor: "#000000",
                        solidOpacity: "1",
                    }}
                    fillRule="nonzero"
                    strokeDasharray="none"
                    strokeDashoffset="0"
                    strokeMiterlimit="4"
                    strokeWidth="3"
                    d="M75.658 4.11l-11.799.675c-1.203.07-6.785.622-14.19 2.893-7.379 2.263-16.465 6.236-24.306 13.177-3.864 2.89-10.073 9.926-12.45 13.207C4.432 45.766 2.722 53.663.39 63.87l-.946 4.133-.002 82.379-.002 82.316.016.106c2.627 18.455 11.226 38.78 32.55 52.588.002 0 .002 0 .003.002 8.921 5.925 19.355 9.792 30.172 11.19.279.035.454.034.826.046.372.012.867.022 1.484.033 1.235.022 2.959.044 5.131.063 4.344.038 10.475.07 18.012.095 15.073.051 35.77.074 59.015.059l81.754-.055.112-.017c13.588-2.058 22.244-4.981 33.406-12.893l.004-.002.002-.002c17.546-12.564 25.588-27.708 29.133-45.197l.008-.035 1.088-4.784.101-82.984.1-82.978-1.793-8.262-.004-.018c-5.303-21.896-18.184-37.712-37.245-47.789l-.03-.015-.032-.016c-8.375-3.934-15.54-6.594-26.729-7.521l-.06-.006-79.955-.098zm.084 3l70.764.097 79.8.098c10.792.898 17.402 3.36 25.628 7.222 18.403 9.736 30.591 24.692 35.71 45.828v.002l1.711 7.893-.097 82.656-.1 82.649-1.025 4.51-.004.017c-3.435 16.979-10.958 31.223-27.947 43.389-10.828 7.673-18.719 10.331-32.022 12.353l-81.514.055c-23.242.015-43.934-.008-59.002-.059-7.533-.025-13.661-.057-17.996-.095-2.167-.02-3.885-.041-5.103-.063-.61-.01-1.095-.022-1.442-.033-.345-.011-.626-.035-.537-.023h-.002c-10.362-1.339-20.372-5.053-28.896-10.715l-.008-.004-.008-.006C13.165 269.62 5 250.307 2.442 232.465l.001-82.084.002-82.041.87-3.803C5.651 54.307 7.12 47.17 15.341 35.822c2.083-2.875 8.679-10.227 11.832-12.58l.05-.039.05-.043c7.419-6.593 16.153-10.43 23.275-12.615C57.67 8.36 63.283 7.824 64.029 7.78z"
                    baselineShift="baseline"
                    clipRule="nonzero"
                    color="currentColor"
                    colorInterpolation="sRGB"
                    colorInterpolationFilters="linearRGB"
                    colorRendering="auto"
                    direction="ltr"
                    display="inline"
                    dominantBaseline="auto"
                    enableBackground="accumulate"
                    fontFamily="sans-serif"
                    fontSize="medium"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                    imageRendering="auto"
                    letterSpacing="normal"
                    opacity="1"
                    overflow="visible"
                    shapeRendering="auto"
                    textAnchor="start"
                    textDecoration="none"
                    textRendering="auto"
                    vectorEffect="none"
                    visibility="visible"
                    wordSpacing="normal"
                    writingMode="lr-tb"
                ></path>
                <path
                    strokeWidth="0.265"
                    d="M168.53 50.699l48.906 61.915c-8.143.91-22.33-.724-28.79 5.669-1.486 1.663-3.282 3.512-4.048 6.037-12.181 40.153-12.341 61.73-20.52 80.936-6.302 14.797-16.09 26.088-31.41 33.746-14.345 7.172-33.378 10.86-58.039 12.674 3.352-2.285 8.215-5.4 9.889-7.053C96.902 232.012 106.202 218.9 110.433 203c7.826-30.551 16.932-60.923 18.981-76.698.68-5.226-.594-5.907-1.38-8.37-6.203-5.746-18.145-3.722-27.161-5.48z"
                ></path>
            </g>
        </svg>
    );
}

export default InfostartIcon;
