import {Router} from 'express';
import { teacherDashboardPage } from './index.js';

const router = Router();

router.get('/', teacherDashboardPage);


export default router;