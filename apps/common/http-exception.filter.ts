import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const unfilteredResponse: any = exception.getResponse();

    switch (unfilteredResponse.type) {
      case "app":
        return response.status(status).json({
          status,
          timestamp: new Date().toISOString(),
          path: request.url,
          uncaughtError: false,
          description: unfilteredResponse.description,
          detailedDescription: unfilteredResponse,
        });

      case "guard":
        return response.status(401).json({
          status,
          timestamp: new Date().toISOString(),
          path: request.url,
          uncaughtError: false,
          description: unfilteredResponse.description,
          detailedDescription: unfilteredResponse,
        });

      default:
        return response.status(status).json({
          status,
          timestamp: new Date().toISOString(),
          path: request.url,
          uncaughtError: true,
          description: unfilteredResponse,
          detailedDescription: unfilteredResponse,
        });
    }
  }
}
