import { FC } from "react";

// internal import
import { YAxisDataType, chartDataType, legendDataType } from "@/types";
import ChartHeader from "./chart-header";
import ChartYAxis from "./chart-y-axis";
import ChartXAxis from "./chart-x-axis";
import ChartBody from "./chart-body";

interface PropsType {
    options: {
        chartData: chartDataType[],
        legendData?: legendDataType[],
        yAxis: YAxisDataType
    }
}

const Chart: FC<PropsType> = ({ options }) => {
    const { chartData, legendData, yAxis } = options;
    return (
        <div className="flex items-center justify-center max-w-[700px] px-3 md:px-6 w-auto">
            <div className="bg-white shadow-xl h-[400px] max-w-[400px] md:max-w-[500px] w-auto px-3 md:px-5 rounded-xl border border-gray-200 p-5 overflow-hidden">
                {/* chart header */}
                {legendData && <ChartHeader legendData={legendData} />}
                <div className="flex gap-3 mt-5 items-end h-[75%]">
                    {/* chart Y axis */}
                    <ChartYAxis yAxis={yAxis} />
                    {/* chart body */}
                    <div className="flex-1">
                        <ChartBody chartData={chartData} yAxis={yAxis} />
                        {/* chart X axis */}
                        <ChartXAxis />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
