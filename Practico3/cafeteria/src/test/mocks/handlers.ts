import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost/api/menu', (req, res, ctx) => {
    let request = req
    request = request
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          titulo: 'Mocca',
          precio: 2000,
          imagen: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mocca.jpg',
        },
      ])
    );
  }),
];