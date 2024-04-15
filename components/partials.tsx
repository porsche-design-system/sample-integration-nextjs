"use client";
import {useServerInsertedHTML} from "next/navigation";
import {getFontFaceStylesheet, getInitialStyles} from "@porsche-design-system/components-react/partials";

export const Partials = () => {
    useServerInsertedHTML(() => {
        return <>
            {/* **necessary for SSR support**, injects stylesheet which defines visibility of pre-hydrated PDS components */}
            {getInitialStyles({format: 'jsx'})}
            {/* injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT) */}
            {getFontFaceStylesheet({format: 'jsx'})}
        </>
    });

    return null;
}
