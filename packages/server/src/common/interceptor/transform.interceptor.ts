import { CallHandler, ExecutionContext, HttpException, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { map, Observable } from 'rxjs';

interface Response<T> {
  data: T
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> |Promise<Observable<any>>{
    const request = context.switchToHttp().getRequest<Request>()
    Logger.log(request.url, `正常接口请求 - ${request.method}`);
    return next.handle().pipe(
      map(result => {
        return {
          result: result,
          code: 200,
          message: '请求成功'
        }
      })
    )
  }
}
