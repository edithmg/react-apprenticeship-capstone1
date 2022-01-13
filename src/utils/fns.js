function random(limit) {
  return Math.floor(Math.random() * limit);
}

function truncateString(str, n) {
  if (str.length > n) {
    return str.substring(0, n) + '...';
  } else {
    return str;
  }
}

export { random, truncateString };
