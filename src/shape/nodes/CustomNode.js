import React from "react";
import { RegisterNode } from "gg-editor";

class CustomNode extends React.Component {
  render() {
    const config = {
      draw(item) {
        const keyShape = this.drawKeyShape(item);
        const size = this.getSize(item).map(v => v / 1);

        // draw icon
        const group = item.getGraphicGroup();
        const model = item.getModel();

        console.log("this", this);
        console.log("group", group);
        console.log("size", size, "model", model);

        const margin = 5;
        const padding = 8;
        const svgWidth = 15, svgHeight = 15;

        group.addShape("image", {
          attrs: {
            x: -size[0] / 2 + padding,
            y: -size[1] / 2 + padding,
            width: svgWidth,
            height: svgHeight,
            img: model.icon
          }
        });

        // draw label
        // this.drawLabel(item);
        group.addShape('text', {
          attrs: {
            x: -size[0] / 2 + padding * 2 + svgWidth,
            y: -size[1] / 2 + padding + 3,
            fill: 'gray',
            text: model.label,
            textBaseline: 'top'
          }
        });

        // add line
        group.addShape('rect', {
          attrs: {
            x: -size[0] / 2,
            y: -size[1] / 2 + padding + margin + svgHeight,
            width: size[0],
            height: 1,
            fill: 'none',
            stroke: 'gray',
            radius: 0,
            cursor: 'pointer'
          }
        });

        // add Less text
        group.addShape('text', {
          attrs: {
            x: size[0] / 2 - padding * 4,
            y: -size[1] / 2 + padding + 3,
            fill: 'gray',
            text: 'Less',
            textBaseline: 'top'
          }
        });

        // add Information
        for(let i = 0 ; i < model.data.info.value.length; i ++) {
          group.addShape('text', {
            attrs: {
              x: -size[0] / 2 + padding,
              y: -size[1] / 2 + padding + svgHeight * (1 + i) + margin * (2 + i),
              fill: 'gray',
              text: `${model.data.info.key[i]}: ${model.data.info.value[i]}`,
              textBaseline: 'top'
            }
          });
        }

        return keyShape;
      },

      // anchor: [
      //   [0.5, 0], // top mid point
      //   [0.5, 1] // bottom edge mid point
      // ]
    };

    return (
      <RegisterNode name="custom-node" config={config} extend={"flow-rect"} />
    );
  }
}

export default CustomNode;
