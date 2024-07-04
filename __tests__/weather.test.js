import request from 'supertest';
import app from '../app';

describe('Weather API Tests', () => {

  it('GET /v1/weather/location', async () => {
    const response = await request(app).get('/v1/weather/location');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('city');
    expect(response.body).toHaveProperty('countryCode');
  });

  it('GET /v1/weather/current/:city', async () => {
    const response = await request(app).get('/v1/weather/current?city=London');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('weather');
    expect(response.body.weather.length).toBeGreaterThan(0);
  });

  it('GET /v1/weather/forecast/:city', async () => {
    const response = await request(app).get('/v1/weather/forecast?city=London');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('list');
    expect(response.body.list.length).toBeGreaterThan(0);
  });

  it('GET /v1/weather/current should return current weather for Buenos Aires', async () => {
    const response = await request(app).get('/v1/weather/current');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('weather');
    expect(response.body.weather.length).toBeGreaterThan(0);
  });

  it('GET /v1/weather/forecast should return current forecast for Buenos Aires', async () => {
    const response = await request(app).get('/v1/weather/forecast');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('list');
    expect(response.body.list.length).toBeGreaterThan(0);
  });
});