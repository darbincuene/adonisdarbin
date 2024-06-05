 import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core';
import userService from '#services/use_service';

export default class UsuariosController {
    @inject()
    async store(ctx: HttpContext, usuario:userService) {
        const data = ctx.request.body()
        return usuario.guardarUsuario(data); //
    }
}