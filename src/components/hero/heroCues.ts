export interface HeroCue {
  id: 'frame' | 'here' | 'name' | 'enter';
  time: number;
}

/**
 * Single source of truth for hero animation timing in seconds.
 * Timing changes must be one-line edits in this array.
 */
export const heroCues: HeroCue[] = [
  { id: 'frame', time: 1.4 },
  { id: 'here', time: 3.6 },
  { id: 'name', time: 5.4 },
  { id: 'enter', time: 6.4 },
];

export const getCueTime = (id: HeroCue['id']): number => {
  const cue = heroCues.find((c) => c.id === id);
  return cue ? cue.time : 0;
};

export default heroCues;
