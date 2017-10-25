React-native app - Android & iOS.
===================

Aplicación realizada con **react-native 0.48.3**. El objetivo es evidenciar los conocimientos en el uso de dicha tecnología a través de una aplicación que consume servicios remotos con el fin de mostrar en una primera pantalla un listado preliminar de la consulta realizada y luego consumir nuevamente la api para mostrar detalladamente la información del ítem seleccionado en la pantalla original

----------
Instalación
-------------
Dentro de pantalla donde se desea realizar la instalación, ejecutar los siguientes comandos por consola:

**git clone https://github.com/HernanAA/HotelsApp.git**

**cd HotelsApp**

**npm install**

**react-native link**



> **Android:**

Para poder  utilizar **GoogleMaps** en un emulador **Genymotion** se deben habilitar los **Google Play Services** en el emulador haciendo click en la opción **GAPPS**.

![](https://github.com/HernanAA/HotelsApp/blob/master/Images/GenymotionGPS.png) 



> **iOS:**

Además, para iOS se deberán correr los siguientes comandos adicionales para poder utilizar **GoogleMaps** en dicha plataforma:

> - npm install --save react-native-maps.
> - react-native link react-native-maps
> - cd ios
> - pod install
> - cd ..
> - react-native run-ios
> - npm install --save react-native-maps.


> **Servicios Api:**
> - Los servicios api que se consumen son de público accesso a través de internet.

----------
Imágenes
-------------

![](https://github.com/HernanAA/HotelsApp/blob/master/Images/Pantalla1.1.PNG)           ![](https://github.com/HernanAA/HotelsApp/blob/master/Images/Pantalla2.PNG)


![](https://github.com/HernanAA/HotelsApp/blob/master/Images/Pantalla1.1ios.png)
![](https://github.com/HernanAA/HotelsApp/blob/master/Images/Pantalla2ios.png)











