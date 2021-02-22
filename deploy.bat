::作用：以管理员身份安装Apache
call npm run build
cd %~dp0docs\.vuepress\dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:chuangli1/chuangli1.github.io.git master
cd ../../../