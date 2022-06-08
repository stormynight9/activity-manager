import { useState } from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

const Range = () => {
    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(10);

    return (
        <>
            <MultiRangeSlider
                min={1}
                max={100}
                onChange={({ min, max }) => { setMinValue(min); setMaxValue(max) }}
            />
            <p>De {minValue} à {maxValue} personnes</p>
        </>
    )
}

export default Range