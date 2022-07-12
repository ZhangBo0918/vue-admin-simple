import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus, ServiceUnavailableException} from "@nestjs/common";

interface FastifyReply {
    status: any;
}

interface FastifyRequest {
    url: any;
}

@Catch()
export class AllExceptionFilter implements ExceptionFilter{
    catch(exception: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<FastifyReply>()
        const request = ctx.getRequest<FastifyRequest>()
        response.status(HttpStatus.SERVICE_UNAVAILABLE).send({
            statusCode:HttpStatus.SERVICE_UNAVAILABLE,
            timestamp:new Date().toISOString(),
            path:request.url,
            message:new ServiceUnavailableException().getResponse()
        })
    }
}