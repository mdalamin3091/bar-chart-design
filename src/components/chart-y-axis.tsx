import React, { FC } from 'react'

// internal import
import { YAxisDataType } from '@/types';
import { formatNumber } from '@/utils/utils';

interface PropsType {
    yAxis: YAxisDataType
}

const ChartYAxis: FC<PropsType> = ({ yAxis }) => {
    const { min, max, diff } = yAxis;
    const row = (max - min) / diff;
    return (
        <div className="text-sm text-gray-400 flex flex-col gap-6 h-full justify-center items-end">
            {
                Array.from({ length: row }).map((_, idx) => (
                    <div key={idx}>{formatNumber((idx + 1) * diff)}</div>
                )).reverse()
            }
            <div>${min}</div>
        </div>
    )
}

export default ChartYAxis