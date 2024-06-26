import { FC } from "react";

// internal imports
import { chartDataItemType } from "@/types";

interface PropsType {
    item: chartDataItemType[],
    duration: string;
}

const HoveredCard: FC<PropsType> = ({ item, duration }) => {

    const grandTotal = item.reduce((total: number, currentItem: chartDataItemType) => {
        return total + currentItem.value;
    }, 0);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-3">
                <p>{duration}</p>
                <p>${grandTotal}</p>
            </div>
            {
                item.map((itm: chartDataItemType) => (
                    <div className="flex items-center justify-between" key={itm.id}>
                        <div className="flex items-center justify-start gap-2">
                            <span style={{ backgroundColor: itm.color }} className="block w-2 h-1 rounded-md"></span>
                            <p className="text-sm">{itm.title}</p>
                        </div>
                        <p className="text-sm text-gray-500">${itm.value}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default HoveredCard