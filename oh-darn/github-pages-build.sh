ng build --configuration production --base-href ./
cd docs
cp index.html 404.html
echo 'yourcustomdomain.com' >CNAME