import { Schema } from "mongoose";


export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxLength: 50 },
    biome: { type: String, required: true },
    atmosphere: { type: Boolean, required: true },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
    {
        timestamps: true,
        toJSON: { virtuals: true }

    }
)
PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
})