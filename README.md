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

Running the above commands results in

**Application** running at `http://localhost:3000/ffmpeg/image?timestamp=5&url=http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
### Or
**Application** running at `http://localhost:3000/ffmpeg/image?timestamp=1&url=https://public-anios-dev.s3.ap-southeast-1.amazonaws.com/jungle_3s.mp4`
#### Changing timestamp parameter will grap at that timestamps screenshot.

## II. Run with docker
```
$ docker build -t pixcap .
$ docker run -t -i -p 3000:3000 api-server
```

### Directory Structure

```
├── Dockerfile
├── README.md
├── Video
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
