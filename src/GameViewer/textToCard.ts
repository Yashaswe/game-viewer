let shapeMapper = {
  S: { shape: '}', color: 'black' },
  D: { shape: '[', color: 'red' },
  C: { shape: ']', color: 'black' },
  H: { shape: '{', color: 'red' },
};

export function textToCard(cardText: string) {
  const cardInfo = cardText.split('');
  const cardNum = cardInfo[0] === '1' ? 'A' : cardInfo[0];
  return {
    card: cardNum + (shapeMapper[cardInfo[1]].shape || cardInfo[1]),
    color: shapeMapper[cardInfo[1]].color,
  };
}
