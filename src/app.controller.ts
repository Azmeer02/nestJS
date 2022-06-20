import { Controller, Get } from "@nestjs/common";

@Controller('/route')
export class AppController{
    @Get()
    getRootRoute(){
        return 'hi there!'
    }
    @Get('/bye')
    getByeRoute(){
        return 'bye there!'
    }
}