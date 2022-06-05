import React from "react";

import {
  SparklineComponent ,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
const SparkLine = ({ id, type, height, width, data, color, currentColor }) => {
  return (
    <SparklineComponent 
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
    >
      <Inject services={[SparklineComponent]}/>
    </SparklineComponent>
  );
};

export default SparkLine;
