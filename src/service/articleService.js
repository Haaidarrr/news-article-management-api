const repo = require("../repositories/articleRepository");

async function lihatSemuaBerita() {
  return repo.ambilSemuaBerita();
}

async function buatBeritaBaru(data) {
  return repo.tambahBerita(data);
}

async function editBerita(id, data) {
  return repo.updateBerita(id, data);
}

async function deleteBerita(id) {
  return repo.hapusBerita(id);
}

async function publishBerita(id) {
  return repo.publishBerita(id);
}

async function searchBerita(keyword) {
  return repo.cariBerita(keyword);
}

module.exports = {
  lihatSemuaBerita,
  buatBeritaBaru,
  editBerita,
  deleteBerita,
  publishBerita,
  searchBerita
};