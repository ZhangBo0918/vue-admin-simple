import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,

} from "@nestjs/common";

interface FastifyReply {
    status: any;
}

interface FastifyRequest {
    url: any;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<FastifyReply>()
        const request = ctx.getRequest<FastifyRequest>()
        const status = exception.getStatus()
        response.status(status).send({
            statusCode:status,
            timestamp:new Date().toISOString(),
            path:request.url,
            message:exception.getResponse()
        })
    }
}