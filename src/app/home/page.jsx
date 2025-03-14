"use client";
import { useRouter } from "next/navigation";

export default function Servey() {
  const route = useRouter();
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-22 h-22 flex justify-center items-center w-full px-3">
        <div className="flex flex-col gap-4 w-full justify-center max-w-[650px]">
          <div className="mx-auto text-center my-5">
            <div className="flex items-center text-[30px] text-[#24356e] font-bold">
              <span>تتوقع أنك قاعد تستثمر فلوسك صح&nbsp; ؟ </span>
            </div>
          </div>
          <div className="mx-auto text-center text-[23px] font-[600]">
            <p className="text-[#24356e]">
              جاوب علی <span className="text-[#dc356b]">7 أسئلة سريعة</span>{" "}
              واعرف إذا الاســتثمار يناسبك وملائم لإحتياجاتك
            </p>
          </div>
          <div>
            <button
              className="bg-[#d1564d] text-white mt-6 w-full rounded-[30px] text-[19px] mx-auto cursor-pointer min-h-[50px] font-bold"
              onClick={() => route.push("survey/steps")}
            >
              ابدأ الآن
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
