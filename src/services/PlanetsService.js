import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    async getPlanetsByGalaxyId(galaxyIdFromParameters) {
        const planets = await dbContext.Planets.find({ galaxyId: galaxyIdFromParameters })
        return planets
    }
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        await planet.populate('galaxy')
        return planet

    }
}

export const planetsService = new PlanetsService()