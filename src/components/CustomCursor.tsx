/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useEffect, useState } from 'react'

const CustomCursor = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [deviceType, setDeviceType] = useState("mouse");
    const [isClicking, setIsClicking] = useState(false);
    // check if it is a touch device
    const isTouchDevice = () => {
        try {
            document.createEvent('TouchEvent');
            setDeviceType('touch');
            return true;
        } catch (e) {
            setDeviceType('mouse');
            return false;
        }
    };
    const move = (e: { touches: any[]; clientX: any; clientY: any; }) => {
        const touchEvent = e.touches ? e.touches[0] : null;
        const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
        const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;
        const element = document.elementFromPoint(x, y);

        setCursorX(x);
        setCursorY(y);

        // Set the cursor border's position directly
        const cursorBorder = document.getElementById('cursor-border');
        if (cursorBorder) {
            cursorBorder.style.left = `${x}px`;
            cursorBorder.style.top = `${y}px`;
            if (element?.tagName == 'A' || element.closest('A') || element?.tagName == 'BUTTON' || element.closest('BUTTON')) {
                cursorBorder.style.height = `70px`;
                cursorBorder.style.width = `70px`;
            }
            else {
                cursorBorder.style.height = `50px`;
                cursorBorder.style.width = `50px`;
            }
        }
    };

    const handleMouseDown = () => {
        setIsClicking(true);
    };

    const handleMouseUp = () => {
        setIsClicking(false);
    };


    useEffect(() => {
        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    return (
        <>
            <style>
                {`
                    #cursor {
                        position: absolute;
                        background-color: ${isClicking ? 'crimson' : '#fff'};
                        height: 10px;
                        width: 10px;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        pointer-events: none;
                        transition: background-color 0.2s ease;
                        z-index:1000;
                    }
                    #cursor-border{
                        transition: all 0.4s ease-out;
                        height: ${isClicking ? '70px !important' : '50px'};
                        width: ${isClicking ? '70px !important' : '50px'};
                    }

                `}
            </style>
            <div
                id="cursor"
                style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
            >
            </div>
            <div id="cursor-border"></div>
        </>
    )
}

export default CustomCursor
