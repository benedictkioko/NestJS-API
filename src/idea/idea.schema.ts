import * as mongoose from 'mongoose';

export const IdeaSchema = new mongoose.Schema({
    id: String,
    idea: String,
    description: String,
    created: { type: Date, default: Date.now }
});
