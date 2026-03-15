const service = require("../services/articleService");
const { schema } = require("../validators/articleValidator");

//liat
async function lihatBerita(req, res, next) {

  try {

    const data = await service.lihatSemuaBerita();

    res.json({
      success: true,
      data
    });

  } catch (error) {
    next(error);
  }

}

//nambah
async function tambahBerita(req, res, next) {

  try {

    const validatedData = schema.parse(req.body);

    let thumbnail = null;

    if (req.file) {
      thumbnail = req.file.path;
    }

    const berita = await service.buatBeritaBaru({
      ...validatedData,
      thumbnail
    });

    res.status(201).json({
      success: true,
      data: berita
    });

  } catch (error) {
    next(error);
  }

}

//edit
async function editBerita(req, res, next) {

  try {

    const id = req.params.id;

    const validatedData = schema.parse(req.body);

    const data = await service.editBerita(id, validatedData);

    res.json({
      success: true,
      data
    });

  } catch (error) {
    next(error);
  }

}

//hapus
async function hapusBerita(req, res, next) {

  try {

    const id = req.params.id;

    await service.deleteBerita(id);

    res.json({
      success: true,
      message: "Artikel berhasil dihapus"
    });

  } catch (error) {
    next(error);
  }

}

//publish
async function publishBerita(req, res, next) {

  try {

    const id = req.params.id;

    const data = await service.publishBerita(id);

    res.json({
      success: true,
      data
    });

  } catch (error) {
    next(error);
  }

}

//nyari
async function searchBerita(req, res, next) {

  try {

    const keyword = req.query.q;

    if (!keyword) {
      return res.status(400).json({
        success: false,
        message: "Query q wajib diisi"
      });
    }

    const data = await service.searchBerita(keyword);

    res.json({
      success: true,
      data
    });

  } catch (error) {
    next(error);
  }

}

module.exports = {
  lihatBerita,
  tambahBerita,
  editBerita,
  hapusBerita,
  publishBerita,
  searchBerita
};