export interface KeyboardLayoutSchema {
  id: string;
  name: string;
  public: boolean;
  hardware: string;
  created_by: string;
  positions: string;
  layers: Layer[];
}
