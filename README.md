# Capture an image at a given timestamp for a given video
## I. Installation
#### 1. Clone this repo
```
$ git clone git@github.com:maurya971/grab-screenshot.git your-app-name
$ cd your-app-name
```
#### 2. Install dependencies

```
$ npm i
```
#### 3. Build applicaiton
```
$ npm run build
```
#### 4. Run applicaiotn
```
$ npm run start
```

### Note- Implemented two version of application
#### 1- Screen capture by using node-fluent-ffmpeg package
```
http://localhost:3000/ffmpeg/image?timestamp=5&url=http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
```
#### 2- Screen capture without using any 3rd party package
```
http://localhost:3000/ffmpeg/image/v2?timestamp=2&url=https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4
```
#### Changing timestamp parameter will grap at that timestamps screenshot.

## II. Run with docker
```
$ docker build -t pixcap .
$ docker run -t -i -p 3000:3000 api-server
```
```
http://localhost:3000/ffmpeg/image?timestamp=5&url=http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
```
```
http://localhost:3000/ffmpeg/image/v2?timestamp=2&url=https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4
```

### Directory Structure

```
├── Dockerfile
├── README.md
├── __tests
│   └── app.test.ts
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── controller
│   │   └── ffmpeg.ts
│   ├── routes.ts
│   └── server.ts
└── tsconfig.json
```
