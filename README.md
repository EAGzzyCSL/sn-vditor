# sn-editor-template

用于 StandardNotes 笔记的 Editor extension 模板。

- 基于 react-app-rewired，开箱即用的 react 项目。
- 集成`sn-editor-kit`，处理了与 StandardNotes 保存/加载笔记的逻辑。
- 预置打包、调试、发布相关逻辑。
- 只需置入一个新的富文本编辑器即可快速实现一个 StandardNotes 的 Editor extension。

![效果图](./public/thumbnail.jpg)

[在线查看](https://eagzzycsl.github.io/sn-editor-template/hosted/index.html)

## 安装链接

```plain
https://eagzzycsl.github.io/sn-editor-template/install.json
```

## 模板使用

1. 修改`package.json`中的 name 字段。
2. 修改`scripts/gen-install.js`中的`GITHUB_ID`、`MD_EDITOR_NAME`、`DISPLAY_NAME`。
3. 执行`npm run build:install-dev`更新`public/dev-install.json`。
4. 执行`npm run setup`完成依赖安装。
5. 执行`npm run dev`开始预览。
6. 开发完毕后修改 README 中对应信息。

## 开发与调试

- 开发中调试：安装`http://localhost:9999/dev-install.json`
- 本地构建测试包：`npm run build:install-local`
- mac 下 StandardNotes Extension 安装位置：`cd ~/Library/Application\ Support/Standard\ Notes/Extensions`

## 构建与发布

- 构建：`npm run build`。
- 发布：修改版本号后推送至 master 后自动发布至 gh-pages（需配置`ACCESS_TOKEN`）。
