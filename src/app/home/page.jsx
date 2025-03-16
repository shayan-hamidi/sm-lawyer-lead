"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import lawPicture from "@/images/lawPic.jpg";
import lawHammer from "@/images/lawHammer.png";
import { FormProvider, useForm } from "react-hook-form";
import { MainInput } from "@/packages";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import useService from "@/hooks/useService";

export default function Servey() {
  const route = useRouter();
  const methods = useForm();
  const { loading, mutate } = useService();
  const submitForm = (data) => {
    mutate(
      "claim",
      "POST",
      { ...data },
      {},
      () => {
        route.push("/submit");
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  };
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
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            submitForm(data);
          })}
        >
          {/* Section 1 */}
          <section className="flex-col sm:flex-row w-full py-12 px-8 bg-[#f0f0f0] flex items-center gap-4">
            <div className="self-baseline">
              <h2 className="text-3xl font-semibold">خدمة تقديم شكوى</h2>
              <p className="mt-4 text-lg">
                نحن هنا لمساعدتك في تقديم بلاغات وشكاوى تتعلق بالاحتيال المالي،
                حيث نقوم بفحص وتحليل البلاغات بجدية واحترافية لحمايتك.
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
              <div className="border-[1px] rounded-[8px] pt-8">
                <h2 className="text-3xl px-4">
                  سجّل شكواك الآن لاسترداد أموالك!
                </h2>
                <p className="mt-4 px-4">
                  لضمان معالجة شكواك بكفاءة، يرجى تعبئة الاستمارة بشكل كامل
                  وإضافة أي تفاصيل قد تكون مفيدة لاسترجاع أموالك.
                </p>
                <div className="border-[1px] mt-8 flex items-center justify-end py-3 px-4 text-[#d92e25] text-sm">
                  Indicates required question *
                </div>
              </div>
            </section>
            {/* Section 3 */}
            <section className="w-full py-3 bg-white">
              <div className="border-[1px] rounded-[8px] py-8 px-4">
                <h5 className="text-1xl font-semibold px-4 mb-3">
                  الاسم الكامل: <span className="text-[#d92e25]">*</span>
                </h5>
                <Grid container>
                  <Grid item xs={12} sm={7} md={5} lg={4}>
                    <MainInput
                      name={"name"}
                      rules={{
                        required: " ",
                      }}
                      inputProps={{
                        placeholder: "إجابتك",
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </section>
            {/* Section 4 */}
            <section className="w-full py-3 bg-white">
              <div className="border-[1px] rounded-[8px] py-8 px-4">
                <h5 className="text-1xl font-semibold px-4 mb-3">
                  رقم الهاتف:
                  <span className="text-[#d92e25]">*</span>
                </h5>
                <Grid container>
                  <Grid item xs={12} sm={7} md={5} lg={4}>
                    <MainInput
                      name={"number"}
                      rules={{
                        required: " ",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "يرجى إدخال أرقام فقط",
                        },
                      }}
                      inputProps={{
                        placeholder: "إجابتك",
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </section>
            {/* Section 5 */}
            <section className="w-full py-3 bg-white">
              <div className="border-[1px] rounded-[8px] py-8 px-4">
                <h5 className="text-1xl font-semibold px-4 mb-3">
                  تفاصيل الشكوى:
                  <span className="text-[#d92e25]">*</span>
                </h5>
                <Grid container>
                  <Grid item xs={12} sm={7} md={5} lg={4}>
                    <MainInput
                      name={"description"}
                      rules={{
                        required: " ",
                      }}
                      inputProps={{
                        placeholder: "إجابتك",
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </section>
            <section className="w-full py-3">
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#1565c0 !important",
                  minWidth: 100,
                }}
                disabled={loading}
              >
                يُقدِّم
              </Button>
            </section>
          </div>
        </form>
      </FormProvider>
      <div className="bg-[#f0f0f0] w-full mt-20 py-10 text-center">
        <b className="text-[13px]">حقوق النشر © 2025 جميع الحقوق محفوظة</b>
      </div>
    </main>
  );
}
