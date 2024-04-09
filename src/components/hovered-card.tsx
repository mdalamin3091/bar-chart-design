import React from 'react'

const HoveredCard = ({ item, duration }: any) => {

    const grandTotal = item.reduce((total: number, currentItem: any) => {
        return total + currentItem.value;
    }, 0);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-3">
                <p>{duration}</p>
                <p>${grandTotal}</p>
            </div>
            {
                item.map((itm: any) => (
                    <div className="flex items-center justify-between" key={itm.id}>
                        <div className="flex items-center justify-start gap-2">
                            <span className={`block w-2 h-1 ${itm.color} rounded-md`}></span>
                            <p className="text-sm">{itm.title}</p>
                        </div>
                        <p className="text-sm text-gray-500">${itm.value}</p>
                    </div>
                ))
            }

            {/* <div className="flex items-center justify-between mt-4  border-t border-gray-200 pt-3">
                <div className="flex items-center justify-start gap-2">
                    <span className="block w-2 h-1 bg-gray-300 rounded-md"></span>
                    <p className="text-sm">Savings</p>
                </div>
                <p className="text-sm text-gray-500">$800</p>
            </div> */}
        </div>
    )
}

export default HoveredCard