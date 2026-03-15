const express = require("express");
const router = express.Router();

const controller = require("../controllers/articleController");
const upload = require("../middleware/upload");

router.get("/articles", controller.lihatBerita);

router.post(
  "/articles",
  upload.single("thumbnail"),
  controller.tambahBerita
);

router.put(
  "/articles/:id",
  upload.single("thumbnail"),
  controller.editBerita
);

router.delete("/articles/:id", controller.hapusBerita);

router.patch("/articles/:id/publish", controller.publishBerita);

router.get("/articles/search", controller.searchBerita);

module.exports = router;