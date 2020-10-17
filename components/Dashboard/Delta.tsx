import React from "react";

type Props = {
  delta: number;
  titleAppendix?: string;
};

function Delta(props: Props) {
  if (props.delta === 0) {
    return <div />;
  }

  const colors =
    props.delta > 0 ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900";

  const title =
    props.delta > 0
      ? `Increase ${props.titleAppendix}`
      : `Decrease ${props.titleAppendix}`;

  return (
    <div className={`${colors} p-1 text-sm rounded`} title={title}>
      {props.delta > 0 ? "+" : "-"}
      {props.delta}%
    </div>
  );
}

export default Delta;
