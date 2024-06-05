// import type { HttpContext } from '@adonisjs/core/http'
import Aprendiz from "#models/aprendiz";
import AprendizService from "#services/aprendiz_service";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import hash from "@adonisjs/core/services/hash";


export default class AprendizsController {
    @inject()
    async store(ctx:HttpContext, estudiant: AprendizService) {
        const data = ctx.request.body()
        return estudiant.guardaraprendiz(data)
    }

    @inject()
    async index(ctx: HttpContext, estudiant: AprendizService) {
        const data = await estudiant.getAllUsuarios();
        return data
    }

    async Singin({ request, response }: HttpContext) {
       
        const { email, password } = request.only(['email', 'password'])

        // Buscar el usuario por email
        const usuario = await Aprendiz.findBy('email', email)
        if (!usuario) {
            response.abort('invalido no existe')
        } else {
            await hash.verify(usuario.password, password)
            response.accepted("sigin aceptada" + usuario)
            console.log(usuario)
            
        }
    }


        
    }
