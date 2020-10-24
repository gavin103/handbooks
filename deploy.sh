#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -fr public 
# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin https://github.com/gavin103/gavin103.github.io.git
git push -u origin main
# 如果发布到 https://<USERNAME>.github.io
# https://github.com/gavin103/gavin103.github.io.git
# git push -f https://github.com/gavin103/gavin103.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/gavin103/handbooks.git master:gh-pages

cd -