// import supertest from "supertest";
// import app from "../server.js";

// describe("User endpoints", () => {
//   it("should return 400 for invalid request", async () => {
//     // 400 Bad Request
//     await supertest(app)
//       .get("/api/user?invalid=true")
//       .query({ a: 3, b: 5 })
//       .expect(400)
//       .expect("Content-Type", /json/);
//   });
//   it("should get all users", async () => {
//     // Positive test case
//     await supertest(app)
//       .get("/api/user?invalid=true")
//       .query({ a: 5, b: 3 })
//       .expect(200)
//       .expect("Content-Type", /json/);
//   });
// });

// backend/testing/user.test.js
// backend/testing/user.test.js
import request from "supertest";
import { app, server } from "../server.js";

describe("User API", () => {
  afterAll((done) => {
    server.close(done); // Close the server after all tests finish
  });
  it("GET /api/user - success", async () => {
    const response = await request(app).get("/api/user");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: "John Doe" });
  });

  it("POST /api/user - success", async () => {
    const response = await request(app)
      .post("/api/user")
      .send({ name: "Jane Doe" });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: 2, name: "Jane Doe" });
  });

  it("POST /api/user - validation failure", async () => {
    const response = await request(app).post("/api/user").send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Name is required" });
  });
});
