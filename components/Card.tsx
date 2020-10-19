import React from "react";

type Props = {
  title: string;
  value: string;
};

function Card(props: Props) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow ease-in-out duration-150">
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg">{props.title}</div>
      </div>
      <div className="text-3xl font-bold">{props.value}</div>
    </div>
  );
}

export default Card;
