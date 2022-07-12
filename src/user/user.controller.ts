import { Controller,Get } from '@nestjs/common';

@Controller({
    path:'user',
    version:'1'
})
export class UserController {
    @Get()
    getHello():string{
        return "<div style='color: aqua'>Hello,世界</div>";
    }
}
