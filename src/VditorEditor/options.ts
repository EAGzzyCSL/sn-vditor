import pkgJson from '../../package.json'

const SELF_CDN = 'vditor-cdn-self'

const createVditorOptions = (o: IOptions): IOptions => o

export default createVditorOptions({
  icon: 'material',
  placeholder: `type here to start new note\nversion: ${pkgJson.version}`,
  width: '100%',
  height: '100%',
  toolbarConfig: {
    pin: true,
  },
  cache: {
    enable: false,
  },
  preview: {
    delay: 100,
    hljs: {
      lineNumber: true,
    },
    theme: {
      // 照搬 vditor/src/ts/constants 下的定义
      current: 'light',
      list: {
        'ant-design': 'Ant Design',
        dark: 'Dark',
        light: 'Light',
        wechat: 'WeChat',
      },
      path: `${SELF_CDN}/dist/css/content-theme`,
    },
  },
  toolbar: [
    'outline',
    '|',
    'headings',
    'bold',
    'italic',
    'strike',
    '|',
    'list',
    'ordered-list',
    'check',
    'line',
    'link',
    'quote',
    'code',
    'inline-code',
    'table',
    '|',
    'insert-after',
    'insert-before',
    'undo',
    'redo',
    '|',
    'edit-mode',
    'code-theme',
    'content-theme',
    'preview',
  ] as string[],
  /**
   * vditor 会动态加载 jsdelivr CDN 的内容
   * 其实就是它 npm 包的 dist
   * 这里直接把它软链接了，打包的时候再手动copy进去就好了
   * https://www.npmjs.com/package/vditor
   */
  cdn: SELF_CDN,
})
