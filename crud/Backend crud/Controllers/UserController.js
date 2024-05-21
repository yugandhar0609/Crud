import UserDB from "../Models/UserModels.js";

export const userPost = async (req, res) => {
  try {
    const { userName, age, course, DOJ } = req.body;
    const userDataPost = new UserDB({ userName, age, course, DOJ });
    await userDataPost.save();
    res
      .status(200)
      .json({ data: userDataPost, message: "Post successfully...." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error in postMethod" });
  }
};

export const getUserData = async (req, res) => {
  try {
    const studGetData = await UserDB.find();
    res.status(201).json({
      success: true,
      message: "Get The data ",
      data: studGetData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get user",
      success: false,
      error: error.message,
    });
  }
};

export const userGet = async (req, res) => {
  try {
    const objectId = req.params.id;
    const userGetData = await UserDB.findById(objectId);
    res
      .status(200)
      .json({ data: userGetData, message: "Data get successfully..." });
  } catch (error) {
    console.log(error);
  }
};

export const userUpdate = async (req, res) => {
  try {
    const { userName, age, course, DOJ } = req.body;
    const objectId = req.params.id;

    const updateUserData = await UserDB.findByIdAndUpdate(
      objectId,
      { userName, age, course, DOJ },
      { new: true }
    );

    res
      .status(200)
      .json({ data: updateUserData, message: "Data updated successfully..." });
  } catch (error) {
    console.error("Error in update method:", error);
    res.status(400).json({ message: "Error in update method" });
  }
};

export const userDelete = async (req, res) => {
  try {
    const objectId = req.params.id;
    const userDeleteData = await UserDB.findByIdAndDelete(objectId);
    res.json({
      data: userDeleteData,
      message: "Data deleted successfully...",
    });
  } catch (error) {
    console.log(error);
  }
};
