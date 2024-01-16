// import React, { useState, useEffect } from 'react';

// const FutureMoves = () => {
//   const [startPosition, setStartPosition] = useState(null);
//   const [endPosition, setEndPosition] = useState(null);

//   useEffect(() => {
//     window.addEventListener('contextmenu', handleContextMenu);
//     return () => {
//       window.removeEventListener('contextmenu', handleContextMenu);
//     };
//   }, []);

//   const handleContextMenu = e => {
//     e.preventDefault(); // Prevent default context menu behavior

//     // Log right-click position in the console
//     console.log('Right-click position:', { x: e.clientX, y: e.clientY });

//     // You can add custom logic for handling right-click here if needed
//   };

//   return (
//     <div className="board">
//       {/* Your chessboard or game interface rendering here */}
//     </div>
//   );
// };

// export default FutureMoves;
