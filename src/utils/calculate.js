export const calculate = (cards, level, type, data) => {
  const filterType = data.heroType[type]; // определяем по какому типу смотрим стату

  let nextLevelReq = filterType[level + 1];
  let needCards = nextLevelReq.cards;
  let ostatok = cards;
  let potentialLevel = Number(ostatok) >= needCards ? level + 1 : level;

  for (let l = potentialLevel; l < 20; l++) {
    if (ostatok - needCards < 0) break;
    if (l < 20) {
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
    needs: filterType[potentialLevel + 1].cards - ostatok,
  };
};
