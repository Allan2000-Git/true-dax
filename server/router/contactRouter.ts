import { Router } from 'express';
import { contactController } from '../controller/contactController';

const router = Router();

router.post("/contact", contactController);

module.exports = router;