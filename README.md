# SIS
Repositorio que contiene la aplicación web del proyecto de AYD2

# Convencion de branches
Actualmente se encuentran los branch
  * `master`
  * `develop`

Para contribuir en el proyecto tienens que generar un nuevo branch de `develop`

Para ello deverias de muevete al branch `develop` y ahora si puedes crear un nuevo branch con el nombre de `develop-[tu_nombre]-[caracteristica]`

ej.
  * `develop-herberth-horarios`

# Pasos necesarios para contribuir
Clonar el repo con

`$ git clone https://github.com/javib94usac/AnalisisPensumApp.git`

Para obtener los branch que exiten remotamente es con
 * `$ git pull`
 * Para verlos `$ git branch -r`
 * Para ver los locales `$ git branch -l`


Para hacer esto tienes que ejecutar
 * `$ git checkout develop`
 * `$ git branch develop-javier-horarios`

Ahora para cambiarte de rama usa

 * `$ git checkout develop-herberth-horarios`

Realiza todos los cambios y commits necesarios. Al finalizar haz un `$ git push origin <branch>`

Ahora ingresa la página de gitlab (https://github.com/magicluis/AYD2_G3AppDesktop)
  * hacer un `marge request` a el branch `develop`
  * Esperar a que los cambios se acepten
  * Al aceptar los cambios puedes borrar la rama y crear otra con otra feature
  * Para borrar la rama local, tienes que moverte de la rama primero porque supongo que estas en la rama para saberlo hacer `$ git branch`
  * Muevete con `$ git checkout develop`
  * Sincroniza `$ git pull`
  * Ahora si `$ git branch -d develop-herberth-horarios`
  * Y vuelve a hacer todos los pasos para volver a agregar otra caracteristica desde "Pasos necesarios para contribuir"