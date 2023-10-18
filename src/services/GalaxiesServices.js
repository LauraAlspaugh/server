import { dbContext } from "../db/DbContext.js";



class GalaxiesService {
    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find().populate('creator')
        return galaxies
    }
    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        await galaxy.populate('creator')
        return galaxy
    }

}

export const galaxiesServices = new GalaxiesService()