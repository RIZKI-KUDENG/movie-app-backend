const { user } = require("../models");
const { comparePassword } = require("../utils/bcrypt");

class authController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res
          .status(400)
          .json({ message: "Username dan password wajib diisi" });
      }
      console.log("📦 req.body:", req.body);
      const data = await user.create({
        username,
        password_hash: password,
      });

      res.status(201).json({
        message: "User berhasil dibuat",
        data: {
          id: data.id,
          username: data.username,
        },
      });
    } catch (err) {
      res.status(500).json({
        message: "Gagal register",
        error: err.message,
      });
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const loginSuccess = await user.findOne({
        where: {
          username: username,
        },
      });
      if (!loginSuccess) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      const isPasswordMatch = await comparePassword(
        password,
        loginSuccess.password_hash
      );
      if (!isPasswordMatch) {
        return res.status(401).json({
          message: "Password is incorrect",
        });
      }
      res.status(200).json({
        message: "Login success",
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
module.exports = authController;
