import mongoose from 'mongoose';

/**
 * Parent Profile Model – Stores guardian details and links to their child.
 *
 * Every parent has ONE User document (for login) and ONE Parent document
 * (for guardian profile). The User.profileRef links to this document.
 */
const parentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    // The admission number of the student this parent is linked to.
    // Will be validated against Student collection in the auth service.
    studentAdmissionNumber: {
      type: String,
      required: [true, "Student's admission number is required to link records"],
      trim: true,
      uppercase: true,
    },
    relationship: {
      type: String,
      enum: {
        values: ['Mother', 'Father', 'Legal Guardian', 'Other Family Member'],
        message: 'Relationship must be: Mother, Father, Legal Guardian, or Other Family Member',
      },
      required: [true, 'Relationship to student is required'],
    },
    // Reference to the linked Student document (populated after student is verified)
    linkedStudent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      default: null,
    },
    occupation: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export const Parent = mongoose.model('Parent', parentSchema);
export default Parent;
