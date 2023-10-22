/**
 * translates format from http://www.keyboard-layout-editor.com/#/ to this app format
 * @param input
 */
export function parseKleLayout(content: any[][]): KeyboardLayoutWithLabels {
  let x = 0;
  let y = 0;

  if (!Array.isArray(content)) {
    throw new Error("should be an array");
  }
  const labels: string[] = [];
  const positions: Position[] = [];

  const commandStack = [];
  for (const row of content) {
    for (const keyOrCommand of row) {
      const position: Position = {
        x: x,
        y: y,
      };
      //console.log(keyOrCommand);

      if (typeof keyOrCommand === "string") {
        if (commandStack.length > 0) {
          //if have a command that will apply to the current position, apply it
          const command = commandStack.pop();
          if (command.h) {
            position.h = command.h;
          }
          if (command.w) {
            position.w = command.w;
            //move the next position by the key width
            x += command.w - 1;
          }
        }
        positions.push(position);
        labels.push(keyOrCommand);
        if (keyOrCommand == "↓") {
          //console.log('here: ',position)
        }
        x++;
      } else if (typeof keyOrCommand === "object") {
        const command = keyOrCommand;
        //move key by x command
        if (command.x || command.y) {
          x += command.x || 0;
          y += command.y || 0;
        }

        //when found a command that will be applied to the next position
        commandStack.push(keyOrCommand);
      }
    }
    x = 0;
    y++;
  }

  const layers: Layer[] = [
    {
      legends: labels,
      name: "layer1",
      order: 1,
    },
  ];
  return {
    physicalLayout: {
      name: "custom",
      spacing: 1.5,
      keySize: 1.5,

      positions,
    },
    layers,
  };
}
