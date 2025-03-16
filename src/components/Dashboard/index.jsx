"use client";
import React, { useEffect } from "react";
import Table from "./Table";
import useService from "@/hooks/useService";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Card, CircularProgress, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { handleValue } from "./handleValue";
import BarChart from "./BarChart";

const DashboardPanel = () => {
  const { mutate: chartMutate, data: chartData } = useService();
  const { mutate: logoutMutate, loading: logoutLoading } = useService();
  const { mutate: Q1ExcellMutate, loading: Q1ExcellLoading } = useService();
  const router = useRouter();
  // const columns = [
  //   {
  //     field: "fullName",
  //     headerName: "الاسم الكامل",
  //     sortable: false,
  //     disableColumnMenu: true,
  //     headerAlign: "right",
  //     align: "right",
  //   },
  //   {
  //     field: "phoneNumber",
  //     headerName: "رقم التليفون",
  //     width: 150,
  //     sortable: false,
  //     disableColumnMenu: true,
  //     headerAlign: "right",
  //     align: "right",
  //   },
  // ];
  // useEffect(() => {
  //   chartMutate(
  //     "getQuestionnariesChartData",
  //     "GET",
  //     {},
  //     {
  //       Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //     }
  //   );
  // }, []);
  const logoutHandler = () => {
    logoutMutate(
      "logout",
      "POST",
      {},
      {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("refresh-token");
        router.push("/dashboard/login");
      },
      () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("refresh-token");
        router.push("/dashboard/login");
      }
    );
  };
  const getExcel = () => {
    Q1ExcellMutate(
      `export`,
      "GET",
      {},
      {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      (res) => {
        const t = new Blob([res], {
          type: "application/octet-stream",
        });
        const link = URL.createObjectURL(t);
        const a = document.createElement("a");
        a.href = link;
        a.download = "claims_output.xlsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    );
  };
  return (
    <div
      className="dashboard-background !font-serif"
      style={{ direction: "ltr" }}
      lang="en"
    >
      <AppBar sx={{ background: "#031d4d" }} position="static">
        <Toolbar>
          <Button
            className="px-3 py-2 bg-slate-500"
            variant="contained"
            color="primary"
            disabled={logoutLoading}
            onClick={logoutHandler}
          >
            {logoutLoading ? (
              <CircularProgress
                sx={{ color: "white" }}
                size={"30px"}
                thickness={7}
              />
            ) : (
              "Logout"
            )}
          </Button>
        </Toolbar>
      </AppBar>
      <div className="flex flex-col justify-center px-3 md:px-9 py-5">
        <div className="flex gap-3 flex-wrap justify-between">
          <Card className="w-full xl:w-[48%] mt-9 mx-auto flex flex-col justify-center p-4 shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              {/* <h3 className="font-bold text-[20px]">Table</h3> */}
              <Button
                className="px-3 py-2 bg-blue-600"
                variant="contained"
                onClick={getExcel}
                endIcon={<FileDownloadIcon />}
                disabled={Q1ExcellLoading}
              >
                {Q1ExcellLoading ? (
                  <CircularProgress
                    sx={{ color: "white" }}
                    size={"30px"}
                    thickness={7}
                  />
                ) : (
                  "Excel"
                )}
              </Button>
            </div>
            {/* <div lang="fa" className="flex gap-1 flex-wrap justify-between">
              <Table url={"getAllFirstQuestionnaries"} columns={columns} />
            </div> */}
          </Card>
        </div>
        {/* <Card className="w-max mt-9 mx-auto min-w-full md:min-w-[500px] flex flex-col justify-center p-4 shadow-lg">
          <div className="mb-5">
            <h3 className="font-bold text-[20px]">Registration statistics</h3>
            <Divider orientation="horizontal" flexItem className="my-4" />
          </div>
          <div className="max-w-[500px]">
            <BarChart chartData={chartData} />
          </div>
        </Card> */}
      </div>
    </div>
  );
};

export default DashboardPanel;
