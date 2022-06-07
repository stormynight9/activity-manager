import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

const Range = () => {
    return (
        <MultiRangeSlider
            min={1}
            max={100}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
    )
}

export default Range