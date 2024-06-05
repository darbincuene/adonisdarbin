/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import AprendizsController from '#controllers/aprendizs_controller'
import router from '@adonisjs/core/services/router'
const controllers = () => import('#controllers/usuarios_controller')


router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.post('usuarios', [controllers, 'store'])
router.post('aprendiz', [AprendizsController, 'store'])
router.get('aprendiz',[AprendizsController,'index'])
router.post('pass', [AprendizsController,'Singin'])