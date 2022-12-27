export const timeoutCardData = {
  players: ['bot-0', 'bot-1', 'bot-2', '111'],
  ranks: null,
  rounds: [
    {
      dealer: 1,
      cards: [
        ['KS', 'TS', '1H', '9H', '8H', '7H', '1C', 'KC', '8C', '5C', 'JD', '7D', '3D'],
        ['1S', 'QS', '5S', 'KH', 'QH', '5H', '2H', '7C', '6C', '3C', 'KD', '5D', '2D'],
        ['9S', '7S', '6S', '2S', 'JH', '6H', '4H', '3H', '9C', '1D', 'QD', '6D', '4D'],
        ['JS', '8S', '4S', '3S', 'TH', 'QC', 'JC', 'TC', '4C', '2C', 'TD', '9D', '8D'],
      ],
      bids: [3, 3, 3, 3],
      actions: [
        {
          started: 2,
          cards: ['6H', 'TH', '1H', '2H'],
          ended: 0,
        },
        {
          started: 0,
          cards: ['7D', 'KD', '1D', '8D'],
          ended: 2,
        },
        {
          started: 2,
          cards: ['QD', '9D', '3D', '2D'],
          ended: 2,
        },
        {
          started: 2,
          cards: ['4H', 'JS', '9H', '5H'],
          ended: 3,
        },
        {
          started: 3,
          cards: ['8S', 'TS', 'QS', '2S'],
          ended: 1,
        },
        {
          started: 1,
          cards: ['3C', '9C', 'TC', '1C'],
          ended: 0,
        },
        {
          started: 0,
          cards: ['KC', '7C', '7S', '2C'],
          ended: 2,
        },
        {
          started: 2,
          cards: ['JH', '4S', '8H', 'KH'],
          ended: 3,
        },
        {
          started: 3,
          cards: ['3S', 'KS', '1S', '6S'],
          ended: 1,
        },
        {
          started: 1,
          cards: ['5D', '6D', 'TD', 'JD'],
          ended: 0,
        },
        {
          started: 0,
          cards: ['5C', '6C', '9S', 'JC'],
          ended: 2,
        },
        {
          started: 2,
          cards: ['4D', 'QC', '7H', '5S'],
          ended: 1,
        },
        {
          started: 1,
          cards: ['QH', '3H', '4C', '8C'],
          ended: 1,
        },
      ],
      scores: [3, 3.1, 3.1, -3],
      responseTime: 200,
    },
    {
      dealer: 2,
      cards: [
        ['QS', '9S', '8S', 'JH', 'TH', '9H', '8H', '7H', '3H', '3C', '1D', 'QD', '5D'],
        ['KS', '4S', '3S', 'KH', '6H', '4H', 'KC', '7C', '4C', 'JD', '9D', '8D', '2D'],
        ['1S', 'JS', 'TS', '7S', '2S', '5H', 'JC', 'TC', '8C', '6C', '7D', '6D', '4D'],
        ['6S', '5S', '1H', 'QH', '2H', '1C', 'QC', '9C', '5C', '2C', 'KD', 'TD', '3D'],
      ],
      bids: [2, 2, 4, 3],
      errors: {
        '3': [
          {
            turn: 2,
            type: 'TIMEOUT',
          },
        ],
      },
      actions: [
        {
          started: 3,
          cards: ['6S', '9S', 'KS', '1S'],
          ended: 2,
        },
        {
          started: 2,
          cards: ['6C', '9C', '3C', 'KC'],
          ended: 1,
        },
        {
          started: 1,
          cards: ['2D', '7D', 'TD', 'QD'],
          ended: 0,
        },
        {
          started: 0,
          cards: ['JH', 'KH', null, null],
          ended: null,
        },
      ],
    },
  ],
};
