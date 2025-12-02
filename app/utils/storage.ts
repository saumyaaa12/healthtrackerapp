export interface Entry {
  date: string;
  time: string;
  data: Record<string, number | string>;
}

// Save a new entry to localStorage
// Save a new entry under a key
export function saveEntry(key: string, entry: any) {
  const history = loadAllEntries(key);
  history.push({ ...entry, date: new Date().toLocaleString() });
  localStorage.setItem(key, JSON.stringify(history));
}

// Load all entries for a key
export function loadAllEntries(key: string) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// Load the latest entry
export function loadLatestEntry(key: string) {
  const history = loadAllEntries(key);
  return history.length > 0 ? history[history.length - 1] : null;
}
