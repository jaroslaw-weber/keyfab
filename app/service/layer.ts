/** get empty layer that can be used when changing layer count */
export function getEmptyLayer(keyCount:number): Layer {
	//create new array with 'keyCount' empty strings
	const legends = Array(keyCount).fill("");
  return {
    order: 0,
    name: "layer",
    legends,
  };
}

/** make sure that 'layers' length is same as 'layerCount'. if not, add empty layers */
export function fixLayers(p:{layers: Layer[], layerCount: number, keyCount:number}): void {
	const { layers, layerCount, keyCount } = p;
  for (let i = 0; i < layerCount; i++) {
    const layer = layers[i];
    if (!layer?.legends?.length) {
      //if there are no legends for this layer, just create new empty layer
      const empty = getEmptyLayer(keyCount);
      layers[i] = empty;
    }
  }
}
