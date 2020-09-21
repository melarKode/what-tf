import * as tf from '@tensorflow/tfjs';
import * as tfd from '@tensorflow/tfjs-data';

import * as ui from './ui';

const NUM_CLASSES = 4;

let webcam;

let truncatedMobileNet;
let model;

async function loadTruncatedMobileNet(){
    const mobilenet = await tf.loadLayersModel(
        'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json'
    );
    const layer = mobilenet.getLayer('conv_pw_13_relu');
    return tf.model({inputs: mobilenet.inputs, outputs: layer.output});
}

ui.setExampleHandler(async label => {
    let img = await getImage();
    
})