import { FC } from 'react';
import { legendDataType } from '@/types'

interface PropsType {
    legendData: legendDataType[]
}

const ChartHeader: FC<PropsType> = ({ legendData }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            {legendData.map((dt) => (
                <div
                    key={dt.id}
                    className="px-3 py-2 border border-gray-100 rounded-lg"
                >
                    <div className="flex items-center justify-start gap-2">
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