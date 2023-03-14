import Member from "../mongodb/models/member.js";

const getMembers = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const query = {};
  try {
    const members = await Member.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const count = await Member.countDocuments(query);

    res.header("X-total-count", count);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");

    res.status(200).json(members);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const createMember = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    skills,
    availability,
    emergencyContact,
  } = req.body;

  try {
    const member = await Member.create({
      firstName,
      lastName,
      email,
      phone,
      city,
      skills,
      availability,
      emergencyContact,
    });

    res
      .status(201)
      .json({ message: "Member created successfully", members: member });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createMember, getMembers };
