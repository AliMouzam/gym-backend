import {Router} from 'express';
import userController from '../controllers/userController';
import userValidator from '../middlewares/validators/userValidator';
const router = Router();
router.post('/sign-up', userValidator.signUp, userController.signUp);
export default router;
