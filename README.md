1 yarn add webpack webpack-cli --dev  安装webpack和命令行  执行用：npx webpack
2 yarn add node-sass sass-loader --dev  安装sass相关工具
3 yarn add style-loader css-loader --dev 安装样式文件配置工具
4 yarn add postcss-loader postcss-cssnext --dev 安装样式前缀自动添加，且增加postcss.config.js配置文件。个人认为不是很有必要。
5 yarn add @babel/cli" @babel/core @babel/preset-env babel-loader --dev 安装babel四件套，且添加.babelrc配置文件

当然，有了package.json这个的东西，直接yarn install
是不是很简单呢？ 一定要原封不动来弄，否则很容易出问题，因为每个插件的作者都不一样。





