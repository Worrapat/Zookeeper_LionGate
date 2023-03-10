import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Layout from "../Components/Layouts/Layout";

export default function DolphinPage() {
    const suspenseFallback = (
        <div className="text-center pt-10">Loading Data...</div>
    );
    return (
        <Suspense fallback={suspenseFallback}>
            <Layout></Layout>
        </Suspense>
    )
}