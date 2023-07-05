'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DarkMode(){
    const [mode, setMode] = useState("light");
    const router = useRouter();

    useEffect(() => {
        let cookieResult = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
        if (cookieResult === "") {
            document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
        } else {
        setMode(cookieResult);
        }
    }, []);

    return (
        <span style={{ cursor: "pointer" }} onClick={()=>{
            const newMode = mode === "light" ? "dark" : "light";
            document.cookie = "mode=" + newMode + "; max-age=" + 3600 * 24 * 400;
            setMode(newMode);
            router.refresh();
        }}>
        {mode === "light" ? "☀️" : "🌙"}
        </span>
    );
} 