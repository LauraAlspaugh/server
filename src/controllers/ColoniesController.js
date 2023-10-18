import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { coloniesService } from "../services/ColoniesServices.js";



export class ColoniesController extends BaseController {
    constructor() {
        super('api/colonies')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createColony)
    }
    async createColony(request, response, next) {
        const colonyData = request.body
        const userInfo = request.userInfo
        colonyData.speciesId = userInfo.id
        const colony = await coloniesService.createColony(colonyData)
        return response.send(colony)
    }
}