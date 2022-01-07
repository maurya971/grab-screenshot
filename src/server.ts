import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
    dotenv.config({ path: '.env.default' });
}

import app from './app';

const PORT = process.env.PORT || 3000;

const serve = () => app.listen(PORT, () => {
    console.log(`Express server started at http://localhost:${PORT}`);
});

serve();

