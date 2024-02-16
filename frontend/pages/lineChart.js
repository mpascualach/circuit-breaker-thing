import { useEffect } from "react"
import { Chart } from "chart.js";
import { tvlData } from "../data/tvlData"; 

function Example() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');

    const dates = tvlData.map((data) => data.date);
    const tvlValues = tvlData.map((data) => data.TVL); 

    
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: "Total Value Locked",
          data: tvlValues,
          fill: false,
        }]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">line Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default Example;

//TODO: dynamic selection
//TODO: filtering