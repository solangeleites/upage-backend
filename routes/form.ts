import { Router } from "express";

import { getForm } from "../controllers/form";

const router = Router();

router.post('/', getForm);

export default router;