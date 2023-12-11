import { rest } from "msw";

const baseURL = "https://proclimbers-backend-d69c858b50d1.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}api/products/`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          "_id": 1,
          "reviews": [
              {
                  "_id": 1,
                  "name": "John",
                  "rating": 4,
                  "createdAt": "2023-12-09T15:00:32.326522Z",
                  "comment": "cool!",
                  "product": 1,
                  "user": 1
              }
          ],
          "name": "Cannon EOS 80D DSLR Camera",
          "price": "450.00",
          "image": "/images/camera.jpg",
          "brand": null,
          "category": null,
          "countInStock": 0,
          "description": "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design.",
          "rating": "4.00",
          "numReviews": 1,
          "createdAt": "2023-12-01T17:36:11.133106Z",
          "user": 1
      },
      {
        "_id": 2,
        "reviews": [
            {
                "_id": 3,
                "name": "Dan",
                "rating": 4,
                "createdAt": "2023-12-09T15:00:32.326522Z",
                "comment": "cool!",
                "product": 2,
                "user": 1
            }
        ],
        "name": "Cannon EOS 80D DSLR Camera",
        "price": "450.00",
        "image": "/images/camera.jpg",
        "brand": null,
        "category": null,
        "countInStock": 0,
        "description": "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design.",
        "rating": "4.00",
        "numReviews": 1,
        "createdAt": "2023-12-01T17:36:11.133106Z",
        "user": 1
    },
    {
      "_id": 3,
      "reviews": [
          {
              "_id": 3,
              "name": "Dan",
              "rating": 4,
              "createdAt": "2023-12-09T15:00:32.326522Z",
              "comment": "cool!",
              "product": 2,
              "user": 1
          }
      ],
      "name": "Cannon EOS 80D DSLR Camera",
      "price": "450.00",
      "image": "/images/camera.jpg",
      "brand": null,
      "category": null,
      "countInStock": 0,
      "description": "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design.",
      "rating": "4.00",
      "numReviews": 1,
      "createdAt": "2023-12-01T17:36:11.133106Z",
      "user": 1
  }
      ])
    );
  }),
  // check logout
  rest.post(`${baseURL}api/users/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
];