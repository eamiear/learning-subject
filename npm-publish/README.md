npm publish
===========
> publish a node module to npm packages

# 添加`package.json`
# 本地测试
- Link Packages
> `npm link`用于安装开发`package`包并实时观察配置文件变化。（需要通过`re-link`或`npm rebuild -g`重新编译包）
1. 打开测试工程，打开命令行工具并执行`npm link eslint-config-ura`.
2. 在`package.json`中添加配置
```json
"eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "ura"
    ],
    ...
}
```
3. 启动程序
4. 修改`eslint-config-ura`配置文件后，重新执行`npm link eslint-config-ura`

# 首次发布
- registry a npm account
> https://www.npmjs.com/

- npm adduser
```bash
> npm adduser
Username: your username
Password: your password
Email: (this IS public) xxx@163.com
Logged in as eamiear on https://registry.npmjs.org/.
```

- npm publish
```bash
npm notice
npm notice package: ura-npm-publish@1.0.0
npm notice === Tarball Contents ===
npm notice 211B package.json
npm notice 92B  index.js
npm notice === Tarball Details ===
npm notice name:          ura-npm-publish
npm notice version:       1.0.0
npm notice package size:  348 B
npm notice unpacked size: 303 B
npm notice shasum:        f4f6d05c6a6d5eabf5b3e1d5cfb7308590c83
npm notice integrity:     sha512-JDpR2cgaCJMQ5[...]GXvgdQsp1w==
npm notice total files:   2
npm notice
+ ura-npm-publish@1.0.0
```
# 重大修改，发布新版本
- npm version

```bash
- npm version <update_type>
```
update_type: patch, major, or minor

- npm publish

# Reference
- [creating-node-js-modules](https://docs.npmjs.com/creating-node-js-modules)