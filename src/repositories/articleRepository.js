const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasourceUrl: "file:./dev.db"
});

async function ambilSemuaBerita() {
  return prisma.article.findMany({
    where: { published: true }
  });
}

async function tambahBerita(data) {
  return prisma.article.create({
    data: data
  });
}

async function updateBerita(id, data) {
  return prisma.article.update({
    where: { id: Number(id) },
    data: data
  });
}

async function hapusBerita(id) {
  return prisma.article.delete({
    where: { id: Number(id) }
  });
}

async function publishBerita(id) {
  return prisma.article.update({
    where: { id: Number(id) },
    data: { published: true }
  });
}

async function cariBerita(keyword) {
  return prisma.article.findMany({
    where: {
      title: {
        contains: keyword
      }
    }
  });
}

module.exports = {
  ambilSemuaBerita,
  tambahBerita,
  updateBerita,
  hapusBerita,
  publishBerita,
  cariBerita
};