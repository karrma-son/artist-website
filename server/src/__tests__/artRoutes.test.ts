import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import express from "express";
import artRoutes from "../routes/art";
import Art from "../models/art.model";

const app = express();
app.use(express.json());
app.use("/api/art", artRoutes);

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);

  // seed test data
  await Art.create({
    title: "Test Painting",
    category: "painting",
    image: "/test.jpg",
    medium: "Acrylic on Canvas",
    price: 500,
    clickCount: 0,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Art Routes (Mongo Memory)", () => {
  it("GET /api/art returns artwork list", async () => {
    const res = await request(app).get("/api/art");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].title).toBe("Test Painting");
  });

  it("PATCH /api/art/:id/click increments clickCount", async () => {
    const art = await Art.findOne();
    const res = await request(app).patch(`/api/art/${art!._id}/click`);
    expect(res.status).toBe(200);
    expect(res.body.clickCount).toBe(1);
  });
});
