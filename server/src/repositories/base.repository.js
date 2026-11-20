/**
 * Base Repository providing common database operations for Mongoose models.
 * Implements the Repository pattern to decouple business services from database queries.
 */
export class BaseRepository {
  /**
   * @param {import('mongoose').Model} model - Mongoose Model instance
   */
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return this.model.create(data);
  }

  async findById(id, projection = null, options = {}) {
    return this.model.findById(id, projection, options);
  }

  async findOne(filter, projection = null, options = {}) {
    return this.model.findOne(filter, projection, options);
  }

  async find(filter = {}, projection = null, options = {}) {
    return this.model.find(filter, projection, options);
  }

  async updateById(id, updateData, options = { new: true }) {
    return this.model.findByIdAndUpdate(id, updateData, options);
  }

  async deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  async count(filter = {}) {
    return this.model.countDocuments(filter);
  }
}

export default BaseRepository;
