import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>

      <Navbar />

      <div className="flex px-5 gap-8 ">

        <div className="flex flex-col ">
          <img className="h-60  rounded-3xl drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://www.letemsvetemapplem.eu/wp-content/uploads/2025/02/iPhone-17-Pro-1-2048x1536.jpeg" alt="" />
          <h1 className="text-xl font-mono font-bold justify-center">Iphone 17 pro Max</h1>
        </div>
        <div className="flex-col pl-2">
          <img className="h-60  rounded-4xl drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://tse1.explicit.bing.net/th/id/OIP.YlkPnyrR-5lmOuoMvTEGtQHaJh?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <h1 className="text-xl font-mono font-bold justify-center">Iphone 17 pro max</h1>
        </div>
        <div className="flex flex-col pl-2 ">
          <img className="h-60  rounded-4xl drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://www.unitelle.com/wp-content/uploads/2022/12/1-8.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold justify-center">Iphone 14 Pro</h1>
        </div>
        <div className="flex flex-col pl-2 ">
          <img className="h-60  rounded-4xl drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://ir.ozone.ru/s3/multimedia-w/6844911800.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold justify-center">Iphone 15 Pro </h1>
        </div>
      </div>

      <div className="font-bold font-mono text-2xl bg-pink-200 ">
        <h1>
          📱 iPhone 14 seriyasi (2022)

          Apple iPhone 14 — Apple’ning 2022-yilgi avlod telefonidir.

          🔹 Asosiy xususiyatlar

          Chip: Apple A15 Bionic

          Ekran: 6.1″ OLED

          Kamera: 12 MP (main + ultrawide)

          Batareya: kundalik foydalanish uchun yaxshi

          Dynamic Island dizayni

          USB-C ⚡

          iOS qo‘llab-quvvatlashi davom etmoqda

          👉 14 Pro va Pro Max modellari ham mavjud — ular yanada kuchli chip, ProMotion 120 Hz ekrani va ilg‘or kameralar bilan farqlanadi.

          👍 Afzalliklar: o‘z funksiyalarini ishonchli bajaradi, iPhone tajribasining klassik versiyasi.
          👎 Kamchiliklari: 120 Hz ekrani yo‘q (bazaviy modellarda) va protsessor yaqinda eski hisoblanadi.

          📱 iPhone 15 seriyasi (2023)

          Apple iPhone 15 — 2023-yilda chiqarilgan iPhone.

          🔹 Asosiy o‘zgarishlar 14 ga nisbatan

          Chip: Apple A16 Bionic

          USB-C ulanishi (yangilangan)

          Dynamic Island va ilg‘or kamera tizimi

          Engilroq dizayn

          👍 Afzalliklar: tez ishlash, kameralar, yangi port.
          👎 Kamchiliklari: 120 Hz ekrani faqat Pro modellarda bo‘ladi.

          Xulosa: iPhone 15 — 14 ga nisbatan sezilarli tezlik o‘sishi va kichik yangilanishlar bilan yaxshiroq variant.

          📱 iPhone 17 seriyasi (2025)

          Apple 2025-yilda to‘liq yangi lineup chiqardi — bu iPhone 17 liniyasi.

          📊 Qaysi modellar bor?

          iPhone 17 — standart model

          iPhone 17 Air — eng yupqa va engil model

          iPhone 17 Pro — kuchli imkoniyatlar

          iPhone 17 Pro Max — eng kattasi va eng kuchlisi

          🔹 Umumiy yangi funksiyalar

          Chip: Apple A19 (Pro modellarda A19 Pro) — oldingi chiplardan ancha kuchli

          Ekran: 120 Hz ProMotion har bir modelda (bazida ekran o‘lchami farq qiladi)

          Kameralar: yuqori darajadagi kameralarga yangilangan sensörlar

          Yorqin va katta OLED displeylar

          iOS 26 bilan Apple Intelligence kabi yangi AI imkoniyatlari (ba’zi modellarda)

          📍 iPhone 17 Air — engil, yupqa va premium ko‘rinish;
          📍 iPhone 17 Pro — yuqori kamera va kuchli chip;
          📍 iPhone 17 Pro Max — eng katta ekran, eng kuchli chip va eng professional kamera.

          📊 Qisqa taqqoslash
          Model	Chip	Ekran	Kamera	Kimlarga mos
          iPhone 14	A15	60 Hz bazaviy	12 MP	Oddiy foydalanuvchi
          iPhone 15	A16	60/120 Hz (Pro)	Yaxshilangan	Oddiy+
          iPhone 17	A19	120 Hz ProMotion	48 MP yangilangan	Ko‘p funksiyalar
          iPhone 17 Pro	A19 Pro	120 Hz Pro	Pro foto/video	Kuchli ishlash
          iPhone 17 Pro Max	A19 Pro	120 Hz kattaroq	Premium kamera	Eng kuchli va katta

          👉 Umuman: iPhone 17 seriyasi — Apple’ning 2025-yilgi flagman liniyasi, 14 va 15 ga qaraganda sezilarli tezlik, kamera va ekran yangilanishlarini taklif qiladi.

          📍 Qaysi birini tanlash kerak?

          ✔️ Agar sizga eng arzon va hali yaxshi ishlaydigan Apple telefoni kerak bo‘lsa → iPhone 14 yoki 15 yaxshi.
          ✔️ Agar siz yangilangan, kuchli chip va ilg‘or kamera istasangiz → iPhone 17 yoki 17 Pro/Max eng zo‘ri.
        </h1>
      </div>

    </div>

  );
}