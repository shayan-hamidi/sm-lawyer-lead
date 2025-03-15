"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import lawPicture from "@/images/lawPic.jpg";
import lawHammer from "@/images/lawHammer.png";
import { FormProvider, useForm } from "react-hook-form";
import { MainInput } from "@/packages";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function SubmitPage() {
  const route = useRouter();
  const methods = useForm();

  return (
    <main className="relative flex flex-col items-center">
      {/* Image background */}
      <div className="relative w-full h-screen">
        <Image
          src={lawPicture}
          alt="lawPicture"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 flex justify-center items-center z-10 text-center px-4 py-2 flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fff2cc]">
            مرحباً بكم في للمحاماة
          </h1>
          <p className="mt-10 text-lg md:text-xl text-[#ded8be]">
            في شركة نؤمن بأن العدالة ليست مجرد فكرة، بل هي جوهر عملنا اليومي.
            تتجاوز خدماتنا حدود المحامالتقليدية، حيث نضع بين أيدي عملائنا خبرة
            قانونية تمتد عبر مختلف القطاعات والميادين. تميزنا ينبع من التزامنا
            بالاحترافية والتفاني في تقديم استشارات قانونية مبتكرة وحلول عملية
            تناسب احتياجات عملائنا
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <section className="flex-col sm:flex-row w-full py-12 px-8 bg-[#f0f0f0] flex items-center gap-4">
        <div className="self-baseline">
          <h2 className="text-3xl font-semibold">خدمة تقديم شكوى</h2>
          <p className="mt-4 text-lg">
            نحن هنا لمساعدتك في تقديم بلاغات وشكاوى تتعلق بالاحتيال المالي، حيث
            نقوم بفحص وتحليل البلاغات بجدية واحترافية لحمايتك.
          </p>
        </div>
        <div>
          <Image src={lawHammer} alt="lawHammer" width={150} />
        </div>
      </section>
      <div className="mx-8">
        {/* Section 2 */}
        <section className="w-full pt-12 bg-white relative">
          <div className="bg-[#505050] rounded-tl-[8px] rounded-tr-[8px] absolute left-0 right-0 h-3" />
          <div className="border-[1px] rounded-[8px] py-8">
            <h2 className="text-3xl px-4">سجّل شكواك الآن لاسترداد أموالك!</h2>
            <p className="mt-4 px-4">تم تسجيل الشكوى بنجاح</p>
            <p className="mt-4 px-4 mb-5">
              سوف يقوم خبراؤنا بالتواصل معك خلال 24 ساعة. يرجى أن تكون متواجداً
              وجاهزاً لإحضار الفاتورة وجميع المستندات اللازمة التي قد تطلب منك
              لمتابعة شكواك حتى نتمكن من مساعدتك بأفضل طريقة.
            </p>
            <Link href={"/"} className="text-lg px-4 text-[#1a73e8] underline hover:text-black">
              إرسال رد آخر
            </Link>
          </div>
        </section>
      </div>
      <div className="bg-[#f0f0f0] w-full mt-20 py-10 text-center">
        <b className="text-[13px]">حقوق النشر © 2025 جميع الحقوق محفوظة</b>
      </div>
    </main>
  );
}
