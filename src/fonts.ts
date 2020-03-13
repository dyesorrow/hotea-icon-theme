import * as svgtofont from 'svgtofont';
import * as path from 'path';

svgtofont({
    src: path.resolve(process.cwd(), 'res/svg'), // svg path
    dist: path.resolve(process.cwd(), 'res/font'), // output path
    fontName: 'hotea', // font name
    css: true, // Create CSS files.
    startNumber: 20000, // unicode start number
    svgicons2svgfont: {
        fontHeight: 1000,
        normalize: true
    },
    website: {
        version: '0.0.1',
    }
}).then(() => {
    console.log('done!');
});