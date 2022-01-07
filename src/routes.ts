import { Request, Router } from 'express';
import { captureScreenshot, captureScreenshotExec } from './controller/ffmpeg';

const router = Router();
//Capture screenshot by using fluent-ffmpeg package
router.get('/ffmpeg/image', captureScreenshot);
//Capture screenshot without any 3rd party package
router.get('/ffmpeg/image/v2', captureScreenshotExec);

export default router;
