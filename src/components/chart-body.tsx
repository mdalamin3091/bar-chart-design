import { FC } from 'react'

// internal import
import { YAxisDataType, chartDataType } from '@/types'
import { calculateHeight } from '@/utils/utils'
import HoveredCard from './hovered-card'

interface PropsType {
    chartData: chartDataType[],
    yAxis: YAxisDataType
}

const ChartBody: FC<PropsType> = ({ chartData, yAxis }) => {
    return (
        <div className="flex items-center gap-1 md:gap-2 justify-between mb-4">
            {chartData.map((data, idx) => (
                <div
                    className="h-[200px] hover:bg-gray-100 w-5 md:w-10 rounded-sm flex flex-col gap-[1px] p-1 md:p-2 transition-all ease-in duration-100 justify-end group/item relative"
                    key={idx}
                >
                    {data.item.map((dt, index, array) => (
                        <div
                            style={{
                                height: `${calculateHeight(dt.value, yAxis.max)}%`,
                                backgroundColor: dt.color
                            }}
                            className={`w-[65%] md:w-full h-10 ${index === 0 && "rounded-t animated-bar overflow-hidden"
                                } ${index === array.length - 1 && "rounded-b"
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
                        {/* hover card  */}
                        <HoveredCard duration={data.duration} item={data.item} />

                    </div>
                </div>
            ))}
        </div>

    )
}

export default ChartBody