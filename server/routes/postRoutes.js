import express from 'express';
import { Router } from 'express';
import { getposts, post } from '../controllers/postController.js';
import { requireSignin } from '../middlewares/UserAuth.js';
const router = Router();
router.post('/create-post',requireSignin,post);
router.get('/get-posts',getposts);
export default router;