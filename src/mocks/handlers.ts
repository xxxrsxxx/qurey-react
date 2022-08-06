import { rest } from "msw";

const arrayDummy = [1, 2, 3, 4];

export const handlers = [
  rest.get("mock", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        key: "key",
        arrayDummy,
        list: [
          {
            id: 0,
            label: "label",
          },
        ],
      })
    );
  }),

  rest.patch("patch", (req, res, ctx) => {
    const { num }: any = req.body;
    arrayDummy.push(arrayDummy.length + num);
    return res(ctx.status(200));
  }),
];
