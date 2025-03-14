"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { useMemo } from "react";

const chartSetting = {
  yAxis: [],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
      fontSize: "10px !important",
      background: "red",
    },
  },
};

export default function BarsDataset({ chartData }) {
  const dataset = useMemo(() => {
    return [
      {
        saudi: chartData?.data?.totalSaudiFirstQuestionnaires,
        foreign: chartData?.data?.totalForeignFirstQuestionnaires,
        form: "Questionnair 1",
      },
      {
        saudi: chartData?.data?.totalSaudiSecondQuestionnaires,
        foreign: chartData?.data?.totalForeignSecondQuestionnaires,
        form: "Questionnair 2",
      },
    ];
  }, [chartData]);
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "form" }]}
      series={[
        { dataKey: "foreign", label: "Foreign" },
        { dataKey: "saudi", label: "Saudi" },
      ]}
      {...chartSetting}
    />
  );
}
