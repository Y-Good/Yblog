import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const page = parseInt(request.query.page, 10) || 0;
    const pageSize = parseInt(request.query.pageSize, 10) || undefined;
    return { page, pageSize };
  },
);
