
# react-native-tflite-classification

## Getting started

`$ npm install react-native-tflite-classification --save`

### Mostly automatic installation

`$ react-native link react-native-tflite-classification`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrarynativetensorflowlite.RNReactNativeTensorflowlitePackage;` to the imports at the top of the file
  - Add `new RNReactNativeTensorflowlitePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-tflite-classification'
  	project(':react-native-tflite-classification').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-tflite-classification/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-tflite-classification')
  	```


## Usage
```javascript
import Tflite from 'react-native-tflite-classification';

// TODO: What to do with the module?
Tflite;
```
