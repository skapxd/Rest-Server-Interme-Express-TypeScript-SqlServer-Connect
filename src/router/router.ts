import { Router } from 'express'
import { getRoot, postForm } from '../controller/controller';

const router = Router();

router.get(
    /* Nombre de ruta -->*/ '/', 
    [ /* Array de middlewares*/ ],  
    /* Controller -->*/ getRoot 
);

router.post(
    /* Nombre de ruta -->*/ '/api/form', 
    [ /* Array de middlewares*/ ],  
    /* Controller -->*/ postForm
);

export default router;