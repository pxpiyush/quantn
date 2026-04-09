const KEY = "reazn-momentum";

export function getMomentum(): number {
  return parseInt(localStorage.getItem(KEY) || "0", 10);
}

export function incrementMomentum(): number {
  const next = getMomentum() + 1;
  localStorage.setItem(KEY, String(next));
  return next;
}
