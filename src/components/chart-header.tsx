import { FC } from 'react';

// internal imports
import { legendDataType } from '@/types'

interface PropsType {
    legendData: legendDataType[]
}

const ChartHeader: FC<PropsType> = ({ legendData }) => {
    return (
        <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
            {legendData.map((dt) => (
                <div
                    key={dt.id}
                    className="px-3 py-2 border border-gray-100 rounded-lg basis-[40%] md:basis-auto"
                >
                    <div className="flex items-center justify-start gap-2 w-full">
                        <span style={{ backgroundColor: dt.color }} className="w-3 h-1 rounded-md"></span>
                        <p className="text-sm">{dt.title}</p>
                    </div>
                    <p className="text-xs">{dt.amount}</p>
                </div>
            ))}
        </div>
    )
}

export default ChartHeader