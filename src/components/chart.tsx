import { FC } from "react";
import { YAxisDataType, chartDataType, legendDataType } from "@/types";
import { calculateHeight } from "@/utils/utils";
import HoveredCard from "./hovered-card";
import ChartHeader from "./chart-header";
import ChartYAxis from "./chart-y-axis";
import ChartXAxis from "./chart-x-axis";

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
        <div className="flex items-center justify-center max-w-[700px] ">
            <div className="bg-white shadow-xl h-[400px] w-[500px] px-5 rounded-xl border border-gray-200 p-5">
                {legendData && <ChartHeader legendData={legendData} />}
                <div className="flex gap-3 mt-5 items-end h-[75%]">
                    <ChartYAxis yAxis={yAxis} />
                    <div className="flex-1">
                        <div className="flex items-center gap-2 justify-between mb-4">
                            {chartData.map((data, idx) => (
                                <div
                                    className="h-[200px] hover:bg-gray-100 w-10 rounded-sm flex flex-col gap-[1px] p-2 transition-all ease-in duration-100 justify-end group/item relative"
                                    key={idx}
                                >
                                    {data.item.map((dt, index, array) => (
                                        <div
                                            style={{
                                                height: `${calculateHeight(dt.value, yAxis.max)}%`,
                                            }}
                                            className={`${dt.color} w-full h-10 ${index === 0 && "rounded-tl rounded-tr"
                                                } ${index === array.length - 1 && "rounded-bl rounded-br"
                                                }`}
                                            key={dt.id}
                                        />
                                    ))}
                                    <div
                                        className={`w-[230px] rounded-md min-h-44 bg-white absolute shadow-xl border border-gray-200 bottom-0 p-4 opacity-0 hidden group-hover/item:opacity-100 group-hover/item:block z-10 ${idx < 4
                                            ? "left-[calc(100%+8px)]"
                                            : "right-[calc(100%+8px)]"
                                            }`}
                                    >
                                        <HoveredCard duration={data.duration} item={data.item} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ChartXAxis />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
