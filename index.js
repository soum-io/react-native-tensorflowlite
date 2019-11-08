import { NativeModules, Image } from 'react-native';

const { RNReactNativeTensorflowlite } = NativeModules;

class Tflite {
  loadModel(args, callback) {
    RNReactNativeTensorflowlite.loadModel(
      args['modelPath'],
      args['labelsPath'] || '',
      (error, response) => {
        callback && callback(error, response);
      });
  }

  runModelOnImage(args, callback) {
    RNReactNativeTensorflowlite.runModelOnImage(
      args['path'],
      args['numResults'] || 5,
      args['threshold'] != null ? args['threshold'] : 0.1,
      (error, response) => {
        callback && callback(error, response);
      });
  }


  close() {
    RNReactNativeTensorflowlite.close();
  }
}

export default Tflite;