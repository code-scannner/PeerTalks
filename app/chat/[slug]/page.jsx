"use client"
import { useParams } from "next/navigation"

export default function Messages(){
    const router = useParams();
    console.log(router);
    return <>
        This is the slug
    </>
}