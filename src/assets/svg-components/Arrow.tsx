import * as React from "react";
import { SvgXml } from "react-native-svg";

const getXmlString = (width: number, height: number): string => {
    return `
    <svg width=${width} height=${height} viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.999999 1.42058L5.59317 6.01375C6.13561 6.55619 6.13561 7.44383 5.59317 7.98627L1 12.5794" stroke="#0BAB5C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
};

export default ({ width, height }: any) => (
    <SvgXml xml={getXmlString(width, height)} />
);
