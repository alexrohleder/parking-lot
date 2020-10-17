import React from "react";
import Delta from "./Delta";

type Props = {
  title: string;
  description: string;
  value: number | string;
  delta?: number;
  deltaTitleAppendix?: string;
};

function Card(props: Props) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold">{props.value}</div>
        {props.delta && (
          <Delta delta={props.delta} titleAppendix={props.deltaTitleAppendix} />
        )}
      </div>
      <div className="text-lg mt-2">{props.title}</div>
      <div className="text-gray-600">{props.description}</div>
    </div>
  );
}

export default Card;
