const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

//--------------signup--------------------
exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      throw new Error("provide email or password");
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    cookieToken(user, res);
  } catch (err) {
    throw new Error(err);
  }
};

//--------------signIn--------------------
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("provide email or password");
    }

    //find a user by email
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    //if no user is found
    if (!user) {
      throw new Error("user not found");
    }
    //if password doesnot match
    if (user.password !== password) {
      throw new Error("password is incorrect");
    }

    cookieToken(user, res);
  } catch (err) {
    throw new Error(err);
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ success: true });
  } catch (err) {
    throw new Error(err);
  }
};
