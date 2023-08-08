@echo on

echo Build

cmd /c npm i
echo Production Build started
ng build --prod
