echo "Switching to branch master" 
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server.."
scp -r build/* somu@139.59.53.235:/var/www/139.59.53.235/

echo "Done"