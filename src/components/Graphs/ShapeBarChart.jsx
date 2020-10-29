import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ShapeBarChart = ({data}) => {
  return (
    <BarChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Codigo" />
      <YAxis />
      <Bar dataKey="Ventas" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={'#01B075'} />
          ))
        }
      </Bar>
    </BarChart>
  )
}


export default ShapeBarChart