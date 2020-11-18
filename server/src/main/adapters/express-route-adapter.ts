import { Request, Response } from 'express'
import { Controller } from '../../presentation/protocols/controller'
import { HttpRequest } from '../../presentation/protocols/http'

export function adaptRoute (controller: Controller) {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }

    const httpResponse = await controller.handle(httpRequest)

    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
