import express from 'express'
import {userPost,getUserData,userGet,userUpdate,userDelete} from '../Controllers/UserController.js'

const router = express.Router();

router.post('/post',userPost);
router.get('/getin',getUserData);

router.get('/get/:id',userGet);
router.put('/update/:id',userUpdate);
router.delete('/delete/:id',userDelete);

export default router;
