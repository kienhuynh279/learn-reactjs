import { useEffect, useRef, useState } from 'react';

function randomColor(colorCurrent) {
    const COLOR_LIST = ["#CD5C5C", "#FFC0CB", "#FFA07A", "#DDA0DD", "#7CFC00", "#00FFFF"]

    const currentIndex = COLOR_LIST.indexOf(colorCurrent)
    let newIndex = currentIndex;

    while(newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() * 6)
    }

    
    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex]
}

function useMagicColor() {
    const [color, setColor] = useState('transparent')
    const colorRef = useRef('transparent')

    useEffect(() =>{
        const colorInterval = setInterval(()=> {    
            const newColor = randomColor(colorRef.current)
            setColor(newColor)

            colorRef.current = newColor
        }, 1000)

        return () => {
            clearInterval(colorInterval)
        }
    }, [])

    return color
}

export default useMagicColor;