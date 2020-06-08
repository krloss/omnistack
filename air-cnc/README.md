sudo vim /etc/sysctl.conf 
sudo sysctl -p

mkdir backend
cd backend/
npm init -y
code .
npm run dev

npx create-react-app frontend
code frontend
npm start

npm i expo-cli
npx expo init mobile
cp /opt/VSCode/bin/code mobile/expo
vim mobile/expo 
vim mobile/package.json
code mobile
npm start
