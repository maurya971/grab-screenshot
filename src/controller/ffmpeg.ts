import { Request, Response } from 'express';
import FfmpegCommand from 'fluent-ffmpeg';
import * as fs from 'fs';
import { exec } from 'child_process';

/**
 * Capture screenshot from the given video and timestamp
 * @param req 
 * @param res 
 */
export const captureScreenshot = (req: Request, res: Response) => {
    if (!req.query.timestamp || !req.query.url) {
        res.status(401).send('Either timestamp or url is wrong');
    }
    let { url, timestamp } = req.query as any;
    FfmpegCommand.ffprobe(url, (err, metadata) => {
        if (!metadata ||
            !metadata.format ||
            !metadata.format.duration ||
            timestamp >= metadata.format.duration) {
            timestamp = 0;
        }
        FfmpegCommand(url)
            .screenshots({
                timestamps: [timestamp],
                filename: '%d.png',
                folder: 'temp/'
            }).on('end', () => {
                console.log('Screenshot taken');
                const imageAsBase64 = fs.readFileSync('temp/1.png', 'base64');
                const base64Data = imageAsBase64.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
                const img = Buffer.from(base64Data, 'base64');
                res.writeHead(200, {
                    'Content-Type': 'image/png',
                    'Content-Length': img.length
                });
                res.end(img);
            });
    });
}

/**
 * Capture screenshot from the given video and timestamp
 * @param req 
 * @param res 
 */
export const captureScreenshotExec = (req: Request, res: Response) => {
    if (!req.query.timestamp || !req.query.url) {
        res.status(401).send('Either timestamp or url is wrong');
    }
    let { url, timestamp } = req.query as any;
    exec(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${url}`, function (err, stdout, stderr) {
        if (Number(timestamp) >= Number(stdout)) {
            timestamp = 0;
        }
        exec(`ffmpeg -ss ${timestamp} -i ${url} -vframes 1 -vcodec png -an -y temp/%d.png`, function (err) {
            const imageAsBase64 = fs.readFileSync('temp/1.png', 'base64');
            const base64Data = imageAsBase64.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
            const img = Buffer.from(base64Data, 'base64');
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': img.length
            });
            res.end(img);
        });
    });
}