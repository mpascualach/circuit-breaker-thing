import { useEffect } from "react"
import { Chart } from "chart.js";
import { tvlData } from "../data/tvlData"; 

function Example() {
  useEffect(() => { // at start of application..
    var ctx = document.getElementById('myChart').getContext('2d');

    console.log(tvlData);

    // we're grouping by asset
    const groupedData = tvlData.reduce((acc, { date, asset, TVL }) => {
      if (!acc[asset]) { // if asset not found in accumulator
        acc[asset] = [{ date, TVL}];
      } else {
        acc[asset].push({ date, TVL });
      }
      return acc;
    }, {}) // start accumulator as empty object

    const datasets = Object.keys(groupedData).map((asset, index) => {
      const color = `hsl(${360 * index / Object.keys(groupedData).length}, 100%, 50%)`; // HSL = Hue, Saturation, Lightness
      return {
        label: asset,
        data: groupedData[asset].map((data) => data.TVL),
        fill: false,
        borderColor: color,
        backgroundColor: color
      }
    })

    const labels = groupedData[Object.keys(groupedData)[0]].map(({ date }) => date);
    
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">TVL over time</h1>
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