import React, { useState } from 'react'
import './grids.css'

function Grids() {

    const [gutterSize, setGutterSize] = useState(20)

    const gutterStyle = {
        gridColumnGap: `${gutterSize}px`,
        gridRowGap: `${gutterSize}px`,
    }

    const gridContainer = (size) => {
        let rows = []
        for (let i = 1; i <= size; i++) {
            rows.push(<div className="item1">{`Column ${i}`}</div>)
        }
        return rows
    }

    return (
        <React.Fragment>
            <div className="container">
                <h3>12 Columns Grid</h3>
                <div className="gridContainer">
                    {gridContainer(12)}
                </div>
            </div>
            <div className="container">
                <h3>Different column sizes and Offsets</h3>
                <div className="gridContainer1">
                    {gridContainer(4)}
                </div>

                <div className="gridContainer2">
                    {gridContainer(2)}
                </div>

                <div className="gridContainer3">
                    {gridContainer(2)}
                </div>

                <div className="gridContainer4">
                    {gridContainer(4)}
                </div>
            </div>
            <div className="container">
                <h3>Adjustable gutter</h3>
                <input defaultValue={gutterSize} type="range" className="gutterRange" onChange={(e) => setGutterSize(e.target.value)}></input>
                <div className="gridContainer5" style={{ ...gutterStyle }}>
                    {gridContainer(6)}
                </div>
            </div>
        </React.Fragment>
    )

}

export default Grids