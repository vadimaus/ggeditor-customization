import React from 'react';
import logo from './logo.svg';
import './App.css';
import workflowData from "./assets/WorkflowData";
// import { grap } from "./MetorLines"

import GGEditor, { Flow } from 'gg-editor';
import CustomNode from './shape/nodes/CustomNode';

const data = {
  nodes: [
    {
      type: "node",
      size: "140*85",
      shape: "custom-node",
      style: {
        fill: 'white',
        stroke: 'gray'
      },
      label: workflowData[0].label,
      labelOffsetY: 20,
      icon: "//img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg",
      data: workflowData[0],
      x: 100,
      y: 100,
      id: "ea1184e8",
      index: 0
    },
    {
      type: "node",
      size: "140*85",
      shape: "custom-node",
      style: {
        fill: 'white',
        stroke: 'gray'
      },
      label: workflowData[1].label,
      labelOffsetY: 20,
      icon: "//img.alicdn.com/tfs/TB1OzAmyyLaK1RjSZFxXXamPFXa-200-200.svg",
      data: workflowData[1],
      x: 100,
      y: 300,
      id: "481fbb1a",
      index: 2
    }
  ],
  edges: [
    {
      source: "ea1184e8",
      sourceAnchor: 2,
      target: "481fbb1a",
      targetAnchor: 0,
      id: "7989ac70",
      index: 1
    }
  ]
};

function App() {
  return (
    <div className="App">
      <GGEditor className="editor">
        <Flow className="flow" data={data} />
        
        <CustomNode />
      </GGEditor>
    </div>
  );
}

export default App;
