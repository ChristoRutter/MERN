import React from 'react';

const Display = (props) => {

    const {box} = props
    return(
        <div className = "Display">
            {box.map((current, index) => (
                <div 
                key={index}
                style={{
                    width: current.width,
                    height: current.height,
                    backgroundColor: current.color
                }}
                >
                    

                </div>

            ))}

        </div>

    )
}

export default Display