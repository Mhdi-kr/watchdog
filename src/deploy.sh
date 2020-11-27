cd ../../emergency-storage/
screen -XS frontend quit
screen -XS backend quit
git pull
(
    screen -S frontend
    cd Backend
    npm install
    npm start
)
(
    screen -S backend
    cd Frontend
    npm install
    npm run build
    npm start
)