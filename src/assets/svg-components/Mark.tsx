import * as React from "react";
import { SvgXml } from "react-native-svg";

const getXmlString = (width: number, height: number): string => {
    return `
    <svg width=${width} height=${height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="#0B7A6D"/>
    <path d="M5.29757 9L3 6.60232L4.04704 5.50965L5.29757 6.81853L8.95296 3L10 4.09266L5.29757 9Z" fill="white"/>
    </svg>
  `;
};

export default ({ width, height }: any) => (
    <SvgXml xml={getXmlString(width, height)} />
);
