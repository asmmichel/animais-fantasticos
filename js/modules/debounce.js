export default function debounce(callback, delay) {
  let t;
  return (...args) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      callback(...args);
      t = null;
    }, delay);
  };
}
