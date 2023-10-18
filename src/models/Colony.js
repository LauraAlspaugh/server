import { Schema } from "mongoose";


export const ColonySchema = new Schema({
    name: { type: String, required: true, maxLength: 50 },
    population: { type: Number, required: true },
    planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
    speciesId: { type: Schema.Types.ObjectId, required: true, ref: 'Colony' }
},
    {
        timestamps: true,
        toJSON: { virtuals: true }

    }
)
ColonySchema.virtual('planet', {
    localField: 'planetId',
    ref: 'Planet',
    foreignField: '_id',
    justOne: true
})
ColonySchema.virtual('colony', {
    localField: 'colonyId',
    ref: 'Colony',
    foreignField: '_id',
    justOne: true
})