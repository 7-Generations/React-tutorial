import React from 'react';

type SquareProps = {
  value: string | null;
  onClick: () => void;
};

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;


// .square {
//   background: #fff;
//   border: 1px solid #999;
//   float: left;
//   font-size: 24px;
//   font-weight: bold;
//   line-height: 34px;
//   height: 34px;
//   margin-right: -1px;
//   margin-top: -1px;
//   padding: 0;
//   text-align: center;
//   width: 34px;
// }

// .square:focus {
//   outline: none;
// }