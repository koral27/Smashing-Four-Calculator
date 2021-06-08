const MAX_LEVEL = 20;
const MIN_LEVEL = 9;

export const calculate = (cards, level, type, data) => {
  const filterType = data.heroType[type]; // определяем по какому типу смотрим стату

  if (level >= MAX_LEVEL) {
    return {
      potentialLevel: MAX_LEVEL,
      needs: 0,
    };
  }

  // TODO: Доработать это условие
  if (level < MIN_LEVEL) {
    return {
      potentialLevel: MIN_LEVEL,
      needs: filterType[MIN_LEVEL + 1].cards - cards,
    };
  }

  let nextLevelReq = filterType[level + 1];
  let needCards = nextLevelReq.cards;
  let ostatok = cards;
  let potentialLevel = Number(ostatok) >= needCards ? level + 1 : level;

  for (let l = potentialLevel; l < MAX_LEVEL; l++) {
    if (ostatok - needCards < 0) break;
    if (l < MAX_LEVEL) {
      nextLevelReq = filterType[potentialLevel];
      needCards = nextLevelReq.cards;
      ostatok = ostatok - needCards;
    }
    if (ostatok - filterType[l + 1].cards >= 0) {
      potentialLevel++;
    } else {
      break;
    }
  }

  return {
    potentialLevel,
    needs:
      potentialLevel + 1 > MAX_LEVEL
        ? 0
        : filterType[potentialLevel + 1].cards - ostatok,
  };
};
