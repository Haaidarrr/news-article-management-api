const service = require("../services/articleService");

async function lihatBerita(req, res) {
  const data = await service.lihatSemuaBerita();
  res.json(data);
}

async function tambahBerita(req, res) {

  const { title, content, author } = req.body;

  let thumbnail = null;

  if (req.file) {
    thumbnail = req.file.path;
  }

  const berita = await service.buatBeritaBaru({
    title,
    content,
    author,
    thumbnail
  });

  res.json(berita);
}

async function editBerita(req, res) {

  const id = req.params.id;

  const data = await service.editBerita(id, req.body);

  res.json(data);
}

async function hapusBerita(req, res) {

  const id = req.params.id;

  await service.deleteBerita(id);

  res.json({
    message: "berita berhasil dihapus"
  });
}

async function publishBerita(req, res) {

  const id = req.params.id;

  const data = await service.publishBerita(id);

  res.json(data);
}

async function searchBerita(req, res) {

  const keyword = req.query.q;

  const data = await service.searchBerita(keyword);

  res.json(data);
}

module.exports = {
  lihatBerita,
  tambahBerita,
  editBerita,
  hapusBerita,
  publishBerita,
  searchBerita
};