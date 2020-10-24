#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build 
git clone https://github.com/gavin103/gavin103.github.io.git

cp -fr public/* gavin103.github.io/
cd gavin103.github.io

echo >> README.md
echo $(date +%Y-%m-%d_%H:%M:%S) >> README.md
echo "======>更新完成<======" >> README.md

git add .
git commit -m $(date +%Y-%m-%d_%H:%M:%S)
git push

echo "================"
echo "上传完成~"

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 如果发布到 https://<USERNAME>.github.io
# https://github.com/gavin103/gavin103.github.io.git
# git push -f https://github.com/gavin103/gavin103.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/gavin103/handbooks.git master:gh-pages

cd -

rm -fr gavin103.github.io
rm -fr public

git add .
git commit -m $(date +%Y-%m-%d_%H:%M:%S)
git pull
git push
