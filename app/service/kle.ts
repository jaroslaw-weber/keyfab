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
        x++;
      } else if (typeof keyOrCommand === "object") {
        const command = keyOrCommand;
        //move key by x command
        if (command.x) {
          position.x += command.x;
        }
        //move key by y command
        if (command.y) {
          position.y += command.y;
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
      spacing: 2.4,
      keySize: 2.2,

      positions,
    },
    layers,
  };
}
