import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className=" h-99 bg-green-600">

      <Navbar/>

    

      <div className=" items-center justify-center bg-red-200 ">

        <div className="flex items-center justify-center rounded-4xl ">
        <img className="h-122 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl " src="https://static.tildacdn.com/tild6365-6365-4932-a434-636463373636/bg.png" alt="rasm" />
        <img className="h-100 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://remlab.by/wp-content/uploads/2022/05/macbook-retina-12-2016-9.jpeg" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center">


          
        </div>

        <h1 className=" flex drop-shadow-2xl drop-shadow-blue-600 rounded-4xl   text-3xl p-22 font-normal ">Apple Inc. haqida ma’lumot

          Apple Inc. — dunyodagi eng yirik va mashhur texnologiya kompaniyalaridan biri. U elektron qurilmalar, dasturiy ta’minot va onlayn xizmatlar ishlab chiqaradi.

          📅 Tashkil topishi

          Asos solingan: 1976-yil 1-aprel

          Asoschilari:

          Steve Jobs

          Steve Wozniak

          Ronald Wayne

          Bosh ofisi: Cupertino, California, United States

          📱 Mashhur mahsulotlari

          iPhone — smartfon

          iPad — planshet

          MacBook — noutbuk

          iMac — stol kompyuteri

          Apple Watch — aqlli soat

          AirPods — simsiz quloqchin

          💻 Dasturiy tizimlari

          iOS — iPhone uchun

          macOS — Mac kompyuterlari uchun

          watchOS — Apple Watch uchun

          iPadOS — iPad uchun

          🌍 Xizmatlari

          App Store

          Apple Music

          iCloud

          Apple TV+

          ⭐ Qiziqarli faktlar

          Apple dunyodagi eng qimmat kompaniyalardan biri.

          Logotipi — tishlangan olma.

          Kompaniya innovatsiya va dizaynga katta e’tibor beradi.
        </h1>

      </div>



    </div>

  );
}