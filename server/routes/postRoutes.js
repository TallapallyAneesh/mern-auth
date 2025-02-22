import express from 'express';
import { Router } from 'express';
import { post } from '../controllers/postController.js';
import { requireSignin } from '../middlewares/UserAuth.js';
const router = Router();
router.post('/post',requireSignin,post);
export default router;