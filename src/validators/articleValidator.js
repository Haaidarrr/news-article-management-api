const { z } = require("zod");

const schema = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string(),
  thumbnail: z.string(),
  published: z.boolean()
});

module.exports = {
  schema
};