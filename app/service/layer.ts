/** get empty layer that can be used when changing layer count */
export function getEmptyLayer(): Layer {
  return {
    order: 0,
    name: "layer",
    legends: [],
  };
}

/** make sure that 'layers' length is same as 'layerCount'. if not, add empty layers */
export function fixLayers(layers: Layer[], layerCount: number): void {
  for (let i = 0; i < layerCount; i++) {
    const layer = layers[i];
    if (!layer?.legends?.length) {
      //if there are no legends for this layer, just create new empty layer
      const empty = getEmptyLayer();
      layers[i] = empty;
    }
  }
}
