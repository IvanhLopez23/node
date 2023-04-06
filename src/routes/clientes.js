import { Router } from 'express'
//import { getServicios } from '../servicios/servicios.js'

const router = Router()

router.get('/', (req,res) => res.send('Hola Mundo bienvenido a inicio'))

router.get('/clientes', (req,res) => res.send('Hola clientes'))

export default router