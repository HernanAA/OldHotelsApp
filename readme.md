En ambiente de desarrollo:
Dentro de la carpeta donde se desee realizar la instalacion, ejectuar:
git clone https://github.com/HernanAA/HotelsApp.git
cd HotelsApp
npm install
react-native link

--------------------
Componente Maps
--------------------
npm install --save react-native-maps
react-native link react-native-maps
cd ios
pod install
cd ..
react-native run-ios
