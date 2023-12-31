import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common'
import { Response, Request } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp()
    const response = context.getResponse<Response>()
    const request = context.getRequest<Request>()
    const status = exception.getStatus()
    let message = exception.message
    if(exception.getResponse() instanceof Object) {
      message = exception.getResponse()['message'];
    }

    if (request.url == '/') return;

    Logger.error(`${request.url} - ${message}`, `非正常接口请求 - ${request.method}`)

    response.status(status).json({
      code: status,
      message: message,
      // path: request.url,
      // timestamp: new Date().toISOString()
    })
  }
}
