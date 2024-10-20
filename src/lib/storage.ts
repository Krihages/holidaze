const storage = {
  save: (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value)),
  get: (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};

export default storage;
