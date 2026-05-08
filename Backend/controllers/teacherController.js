import Teacher from "../models/Teacher.js";


// ======================
// Add Teacher
// ======================
export const addTeacher = async (req, res) => {
  try {
    const { name, subject, experience, image } = req.body;

    if (!name || !subject || !experience || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const teacher = await Teacher.create({
      name,
      subject,
      experience,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Teacher Added Successfully",
      teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ======================
// Get All Teachers
// ======================
export const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      teachers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ======================
// Delete Teacher
// ======================
export const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    await teacher.deleteOne();

    res.status(200).json({
      success: true,
      message: "Teacher Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};