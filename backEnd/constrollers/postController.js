const { Timestamp } = require("mongodb");
const prisma = require("../prisma/index");

const timestamp = () => {
  return Date.now().toString();
};

exports.createPost = async (req, res, next) => {
  try {
    //slug , title,discription , TimeStamp,category,npmStackPart,author,authorId
    const TimeStampCreated = timestamp();
    const { slug, title, discription, category, npmStackPart, authorId } =
      req.body;
    const result = await prisma.fileTracker.create({
      data: {
        slug: slug,
        title: title,
        TimeStampCreated: TimeStampCreated,
        discription: discription,
        category: category,
        npmStackPart: npmStackPart,
        author: { connect: { id: authorId } },
      },
    });
    //this is my extension
    if (!result) {
      throw new Error("cannot create the new post");
    }

    res.json(result);
  } catch (err) {
    throw new Error(err);
  }
};

exports.updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, discription, category, npmStackPart } = req.body;
  //console.log(req.body);
  //console.log(id);
  const TimeStampUpdated = timestamp();
  try {
    const result = await prisma.fileTracker.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        discription: discription,
        category: category,
        TimeStampUpdated: TimeStampUpdated,
        npmStackPart: npmStackPart,
      },
    });

    res.json(result);
  } catch (err) {
    res.json({ error: `Post with ${id} got the err : ${err}` });
    //throw new Error(err);
  }
};

exports.deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await prisma.fileTracker.delete({
      where: { id: id },
    });
    res.json(result);
  } catch (err) {
    res.json({ error: `Post with ${id} does not exist` });
  }
};
exports.getPosts = async (req, res, next) => {
  try {
    const result = await prisma.fileTracker.findMany();
    res.json(result);
  } catch (err) {
    res.json({ error: `No Post was found` });
  }
};
