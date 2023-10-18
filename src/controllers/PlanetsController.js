
import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";



export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
    }

    async createPlanet(request, response, next) {
        try {
            const planetData = request.body
            const userInfo = request.userInfo
            planetData.creatorId = userInfo.id
            const planet = await planetsService.createPlanet(planetData)
            response.send(planet)
        } catch (error) {
            next(error)
        }
    }
}