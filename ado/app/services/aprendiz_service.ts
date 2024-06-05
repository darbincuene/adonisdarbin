import Aprendiz from '#models/aprendiz'

export default class AprendizService{
    async guardaraprendiz(/**parametros* */ aprendiz:any) {
        //contenido 
        let aprendizmodel = new Aprendiz()
        aprendizmodel.nombre = aprendiz.nombre;
        aprendizmodel.ficha = aprendiz.ficha;
        aprendizmodel.email = aprendiz.email;
        aprendizmodel.password = aprendiz.password;
        await aprendizmodel.save();

    }
    async getAllUsuarios() {
        return await Aprendiz.all()
    }
    async getidAprendiz(id: number) {
        return await Aprendiz.all();
        
    }
}