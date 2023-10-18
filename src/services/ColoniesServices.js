import { dbContext } from "../db/DbContext.js"

class ColoniesService {
    async createColony(colonyData) {
        const colony = await dbContext.Colonies.create(colonyData)
        await colony.populate('colony')
        await colony.populate('planet')
        return colony
    }

}

export const coloniesService = new ColoniesService()