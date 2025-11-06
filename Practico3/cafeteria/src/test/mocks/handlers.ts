import { rest } from 'msw';

export const handlers = [
  // Mock del menú
  rest.get('http://localhost:3000/api/menu', (req, res, ctx) => {
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

  rest.post('http://localhost:3000/api/orders', async (req, res, ctx) => {
    const body = await req.json().catch(() => ({}));
    console.log('MSW - pedido recibido:', body);

    return res(
      ctx.status(201),
      ctx.json({
        success: true,
        message: 'Pedido confirmado',
        orderId: 'mock-order-123',
      })
    );
  }),
];