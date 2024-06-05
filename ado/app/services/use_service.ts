import Usuario from "#models/usuario";


export default class userService{
    

    async guardarUsuario(data: any) {
        let user = new Usuario();

        user.name = data.name;
        user.categoria = data.categoria;

        await user.save();
    }
    
}
    