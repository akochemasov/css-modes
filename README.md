# Стилизация компонетов

TODO: 
- попробовать анимации

## Запуск

```shell script
npm start
```

## Обычный css

### Плюсы
- 

### Минусы
- следить за уникальностью названий классов

## Css modules
https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/  

### Плюсы
- если в css ошибки, проект не соберется

### Минусы
- ...

## StyledComponent
https://styled-components.com/  
https://habr.com/ru/post/417707/  

### Плюсы
- 

## Минусы
- если в css ошибки, то проект соберется и попадут в стили
- программа может упасть из-за стилей
- нечитабельные стили - исправляется
    - добавлением `babel-plugin-macros.config.js`
    - и `import 'styled-components/macro'`

## Emotion

### Плюсы
- ...

### Минусы
- добавились вложенные компоненты
![Screenshot](./data/emotion-minus-1.png)
- нечитабельные стили
- если в css ошибки, то проект соберется, но не попадут в css
