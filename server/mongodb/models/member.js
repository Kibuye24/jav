import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  skills: { type: Array, required: false },
  availability: { type: String, required: false },
  emergencyContact: { type: String, required: false },
});

const Member = mongoose.model("Member", MemberSchema);

export default Member;
