export function lowerKey(position: Position): Position {
  return {
    x: position.x,
    y: position.y + 1,
  };
}

export function sameRowButLower(p: Position[]): Position[] {
	return p.map(lowerKey)
}