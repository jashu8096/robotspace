const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
