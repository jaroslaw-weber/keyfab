export interface KeyboardLayoutSchema {
  id?: string;
  name: string;
  description: string;
  public: boolean;
  hardware: string;
  created_by: string;
  positions: Position[];
  layers: Layer[];
  spacing?: number;
  key_size?: number;
  layer_count: number;
  offset_x?: number;
  offset_y?: number;
}
export interface HardwareSchema {
  name: string;
  default_layout: string;
}
