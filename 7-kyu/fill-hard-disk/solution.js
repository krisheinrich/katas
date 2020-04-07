function save(fileSizes, spaceRemaining) {
  let numFilesSaved = 0;

  for (let fileSize of fileSizes) {
    if (spaceRemaining < fileSize) break;
    numFilesSaved += 1;
    spaceRemaining -= fileSize;
  }

  return numFilesSaved;
}

module.exports = save;
