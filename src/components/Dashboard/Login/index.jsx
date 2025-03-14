"use client";
import useService from "@/hooks/useService";
import { MainInput } from "@/packages";
import { Card, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
export default function Login() {
  const { loading, mutate } = useService();
  const methods = useForm();
  const router = useRouter();
  const submit = (data) => {
    mutate(
      `token`,
      "POST",
      {
        ...data,
      },
      { "Content-Type": "application/x-www-form-urlencoded" },
      ({ access_token, refresh_token }) => {
        window.localStorage.setItem("token", access_token);
        window.localStorage.setItem("refresh-token", refresh_token);
        router.push("/dashboard/admin");
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  };
  return (
    <>
      <div className="login-background" lang="en" />
      <main className="h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 relative w-full md:max-w-[500px]">
          <Card className="p-5 rounded-lg shadow-lg py-7 bg-opacity-60 backdrop-blur-lg">
            <h3 className="text-center font-bold text-3xl mb-5">Login</h3>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit((data) => {
                  submit(data);
                })}
              >
                <div className="flex flex-col gap-5">
                  <MainInput
                    name={"username"}
                    rules={{
                      required: " ",
                      validate: (value) => {
                        return (
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                            value
                          ) || " "
                        );
                      },
                    }}
                    inputProps={{
                      placeholder: "Email",
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                      },
                    }}
                    prePendIcon={<AccountCircleIcon />}
                  />
                  <MainInput
                    name={"password"}
                    rules={{
                      required: " ",
                    }}
                    inputProps={{
                      placeholder: "Password",
                      type: "password",
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                      },
                    }}
                    prePendIcon={<PasswordIcon />}
                  />
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    className="bg-[#1b3352] border border-1 border-[#50aede] text-white w-full rounded-[30px] text-lg py-2 font-bold transition duration-300 hover:bg-[#0d1d33]"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress
                        sx={{ color: "white" }}
                        size={24}
                        thickness={4}
                      />
                    ) : (
                      "Log in"
                    )}
                  </button>
                </div>
              </form>
            </FormProvider>
          </Card>
        </div>
      </main>
    </>
  );
}
