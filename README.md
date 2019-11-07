
# react-native-react-native-tensorflowlite

## Getting started

`$ npm install react-native-react-native-tensorflowlite --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-tensorflowlite`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeTensorflowlitePackage;` to the imports at the top of the file
  - Add `new RNReactNativeTensorflowlitePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-tensorflowlite'
  	project(':react-native-react-native-tensorflowlite').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-tensorflowlite/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-tensorflowlite')
  	```


## Usage
```javascript
import RNReactNativeTensorflowlite from 'react-native-react-native-tensorflowlite';

// TODO: What to do with the module?
RNReactNativeTensorflowlite;
```
  