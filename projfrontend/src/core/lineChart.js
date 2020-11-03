import React, { useState, Component } from "react";
import LineChart, { parseFlatArray } from "react-linechart";
// import '../node_modules/react-linechart/dist/styles.css';

export default class Line extends Component {
  render() {
    const gsmData = [
      {
        Year: 1880,
        Glob: -19,
        NHem: -33,
        SHem: -5,
      },
      {
        Year: 1881,
        Glob: -10,
        NHem: -18,
        SHem: -2,
      },
      {
        Year: 1882,
        Glob: -15,
        NHem: -12,
        SHem: -4,
      },
    ];
    const gsmFlat = parseFlatArray(gsmData, "Year", ["Glob", "NHem", "SHem"]);

    return (
      <div className="lineChart-container">
        <form className="lineChart">
          <div className="App">
            <h1>Data Statistics</h1>
            <LineChart
              width={950}
              height={400}
              showLegends
              legendPosition="bottom-right"
              onPointHover={(obj) => `x: ${obj.x}<br />y: ${obj.y}`}
              data={gsmFlat}
            />
          </div>
        </form>
      </div>
    );
  }
}
