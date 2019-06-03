# utility-js

# use
npm i git://github.com:SailHe/utility-js.git

# dev
1. 切至dev分支
```shell
git checkout -q dev
```
2. 参考开发流程

## 开发流程
1. 安装依赖
```shell
npm i
```
2. 修改src中的文件
3. ES6 构建 -> ES5
```shell
npm run build
```
3. 发布: 向master分支提交PR
4. Merge: 将lib中的文件并入主分支即可
```shell
git checkout master
git merge --no-ff dev
git push origin master
```
5. 注意, 此种方式模块貌似不能使用npm的版本控制
