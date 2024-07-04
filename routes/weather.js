import { Router } from "express";
import { getLocation, getCurrentWeather, getForecastWeather } from "../controllers/weather.js";

const router = Router();

router
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
  .options("*", function (req, res) {
    res.end();
  });

router.route("/location").get(getLocation);
router.route("/current/:city?").get(getCurrentWeather);
router.route("/forecast/:city?").get(getForecastWeather);

export default router;
