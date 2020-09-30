set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
echo 'alexzhou0605.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:zhoudl0605/vuepress-blog.git master:gh-pages

cd -
rm -rf public
