npm run build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:chuangli1/chuangli1.github.io.git master