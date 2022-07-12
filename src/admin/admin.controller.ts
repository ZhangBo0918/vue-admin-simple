import {Controller, Get, Version, VERSION_NEUTRAL} from '@nestjs/common';

@Controller('admin')
export class AdminController {
    @Get()
    @Version([VERSION_NEUTRAL,'1'])
    getWeiwei(){
        return `<div>当你孤独你会想起谁，你想不想找个人来陪</div>`
    }

    @Get()
    @Version('2')
    getWei(){
        return `
            <div>
                <header>Hello,world</header>
                <main>世界变化不停，人潮川流不息</main>
                <footer>没关系至少有这首歌，我在唱给你听</footer>
            </div>
        `
    }
}
