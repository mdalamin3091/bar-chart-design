{/* <h1>In the name of Allah.</h1> */ }
import { chartData, legendData } from "@/constants";
import Chart from "@/components/chart";

export default function Home() {

    const options = {
        chartData,
        legendData,
        yAxis: {
            min: 0,
            max: 2000,
            diff: 500
        },
    }

    return (
        <main className="flex items-center justify-center min-h-screen">
            <Chart options={options} />
        </main>
    );
}
