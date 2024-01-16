import React, { useState, useEffect, useRef } from 'react';

const ChessArrow = () => {
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = useState({ x: 0, y: 0 });
  const [showArrow, setShowArrow] = useState(false);
  const boardRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (e.button === 2) { // Check for right mouse button (button code 2)
        e.preventDefault();
        setStartPoint({ x: e.clientX, y: e.clientY });
        setShowArrow(false);
        document.body.style.cursor = 'crosshair'; // Change cursor on right-click start
      }
    };

    const handleMouseMove = (e) => {
      if (startPoint.x !== 0 && startPoint.y !== 0 && e.buttons === 2) {
        setEndPoint({ x: e.clientX, y: e.clientY });
        setShowArrow(true);
      }
    };

    const handleMouseUp = (e) => {
      if (e.button === 2) { // Check for right mouse button (button code 2)
        setStartPoint({ x: 0, y: 0 });
        setShowArrow(false);
        document.body.style.cursor = 'auto'; // Reset cursor on right-click release
        // Calculate distance between startPoint and endPoint here
        const distance = Math.sqrt(
          Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)
        );
        console.log(`Shortest distance: ${distance}`);
      }
    };

    const boardElement = boardRef.current;
    if (boardElement) {
      boardElement.addEventListener('mousedown', handleMouseDown);
      boardElement.addEventListener('mousemove', handleMouseMove);
      boardElement.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (boardElement) {
        boardElement.removeEventListener('mousedown', handleMouseDown);
        boardElement.removeEventListener('mousemove', handleMouseMove);
        boardElement.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [startPoint, endPoint]);

  return (
    <div
      ref={boardRef}
      style={{
        width: '50%', /* Adjust this value as needed */
        height: '50%', /* Adjust this value as needed */
        position: 'relative',
      }}
    >
      {showArrow && (
        <svg
          style={{
            position: 'absolute',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
            </marker>
          </defs>
          <line
            x1={startPoint.x}
            y1={startPoint.y}
            x2={endPoint.x}
            y2={endPoint.y}
            style={{
              stroke: '#f00',
              strokeWidth: 2,
              markerEnd: 'url(#arrow)',
            }}
          />
        </svg>
      )}
    </div>
  );
};

export default ChessArrow;
