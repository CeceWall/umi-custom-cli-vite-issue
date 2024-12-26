process.env.FRAMEWORK_NAME = 'custom';

const { run } = require('umi');

run().catch((e) => {
    console.error(e);
    process.exit(1);
});
