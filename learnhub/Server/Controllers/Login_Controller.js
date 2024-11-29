const User = require("../Schema/User_Credentials");

const login = {
  user_login: async (request, response) => {
    const rollno = request.body.rollno;
    const Password = request.body.Password;

    try {
      const user = await User.findOne({ rollno });
      if (!user) {
        return response.status(400).send("User does no exist");
      }

      if (user.Password !== Password) {
        return response.status(404).send("Invalid password");
      }

      return response.status(200).send("Login success");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = login;
