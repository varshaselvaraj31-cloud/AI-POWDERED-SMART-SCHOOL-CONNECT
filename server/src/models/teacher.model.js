import mongoose from 'mongoose';

/**
 * Teacher Profile Model – Stores professional details for a Teacher user.
 *
 * Every teacher has ONE User document (for login) and ONE Teacher document
 * (for faculty profile). The User.profileRef links to this document.
 */
const teacherSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    employeeId: {
      type: String,
      required: [true, 'Employee/Faculty ID is required'],
      unique: true,
      trim: true,
      uppercase: true,
    },
    department: {
      type: String,
      required: [true, 'Academic department is required'],
      trim: true,
    },
    subjects: {
      type: [String],
      default: [],
    },
    qualification: {
      type: String,
      default: '',
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
