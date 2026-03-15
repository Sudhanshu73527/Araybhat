import Notice from "../models/Notice.js";


// ADD NOTICE
export const addNotice = async (req, res) => {

  try {

    const notice = new Notice(req.body);

    await notice.save();

    res.json({
      message: "Notice Added",
      notice
    });

  } catch (error) {

    res.status(500).json({ message: "Server Error" });

  }

};


// GET ALL NOTICES
export const getNotices = async (req, res) => {

  try {

    const notices = await Notice.find().sort({ createdAt: -1 });

    res.json(notices);

  } catch (error) {

    res.status(500).json({ message: "Error fetching notices" });

  }

};


// DELETE NOTICE
export const deleteNotice = async (req, res) => {

  try {

    await Notice.findByIdAndDelete(req.params.id);

    res.json({ message: "Notice Deleted" });

  } catch (error) {

    res.status(500).json({ message: "Delete Failed" });

  }

};


// UPDATE NOTICE
export const updateNotice = async (req, res) => {

  try {

    const notice = await Notice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(notice);

  } catch (error) {

    res.status(500).json({ message: "Update Failed" });

  }

};