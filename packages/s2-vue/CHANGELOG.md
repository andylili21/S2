# [@antv/s2-vue-v2.0.2](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.1...@antv/s2-vue-v2.0.2) (2024-12-13)


### Bug Fixes

* 构建产物编译到 es2015 close [#3025](https://github.com/antvis/S2/issues/3025) ([#3026](https://github.com/antvis/S2/issues/3026)) ([0a7977c](https://github.com/antvis/S2/commit/0a7977c1793a8171b14b07a22847b4dd9ed85d5f))

# [@antv/s2-vue-v2.0.1](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0...@antv/s2-vue-v2.0.1) (2024-11-29)


### Bug Fixes

* 修复 react, vue component 层的 svg 问题 close [#2990](https://github.com/antvis/S2/issues/2990) ([#2999](https://github.com/antvis/S2/issues/2999)) ([b626986](https://github.com/antvis/S2/commit/b626986827a4cd6439d06bdd2e9fb8aa6e19fdc4))
* 修改包 peerDependencies 版本和样式依赖问题 ([11df5d5](https://github.com/antvis/S2/commit/11df5d511515817047b09d6e3dd37000f7b189f2))

# [@antv/s2-vue-v2.0.0](#) (2024-11-21)

* 2.0 正式版已发布，请查看 [升级指南](https://s2.antv.antgroup.com/manual/migration-v2)

# [@antv/s2-vue-v2.0.0-next.16](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.15...@antv/s2-vue-v2.0.0-next.16) (2024-11-01)


### Features

* 增加不同类型单元格的选中事件 & 支持识别事件来源 ([#2956](https://github.com/antvis/S2/issues/2956)) ([69f6479](https://github.com/antvis/S2/commit/69f6479b43055c12d0295a7c77709b990a069ee3))
* 增加对自定义行列头总计、小计节点和组内排序的支持，修复明细表自定义列头 icon 问题 icon closes [#2898](https://github.com/antvis/S2/issues/2898) [#2893](https://github.com/antvis/S2/issues/2893) ([#2934](https://github.com/antvis/S2/issues/2934)) ([a4ae432](https://github.com/antvis/S2/commit/a4ae432d2ddff8a3b44fdfb7abd96d6a2369c81b))

# [@antv/s2-vue-v2.0.0-next.15](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.14...@antv/s2-vue-v2.0.0-next.15) (2024-06-21)


### Features

* **components:** 组件层更新时增加 loading 效果 close [#1790](https://github.com/antvis/S2/issues/1790) ([#2762](https://github.com/antvis/S2/issues/2762)) ([0ca8413](https://github.com/antvis/S2/commit/0ca841362bb4bbb3b81ca1046f5b4dcd7236b91e))

# [@antv/s2-vue-v2.0.0-next.14](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.13...@antv/s2-vue-v2.0.0-next.14) (2024-05-24)


### Performance Improvements

* 优化开启多行文本时的布局性能 ([#2734](https://github.com/antvis/S2/issues/2734)) ([388157c](https://github.com/antvis/S2/commit/388157c0ecb82c45f8a0277b649e891366dc2f1c))

# [@antv/s2-vue-v2.0.0-next.13](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.12...@antv/s2-vue-v2.0.0-next.13) (2024-04-30)


### Bug Fixes

* 修复分页配置无法透传 ([#2666](https://github.com/antvis/S2/issues/2666)) ([323f14d](https://github.com/antvis/S2/commit/323f14d7d77d71852dba3d5982623b7ab8709609))


### Features

* canvas 支持挂载 s2 实例 ([#2645](https://github.com/antvis/S2/issues/2645)) ([ed21dcb](https://github.com/antvis/S2/commit/ed21dcb82ea4cb434587a4ffa4819f2a619ca1aa))

# [@antv/s2-vue-v2.0.0-next.12](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.11...@antv/s2-vue-v2.0.0-next.12) (2024-03-29)


### Bug Fixes

* 调整 peerDependencies 命中规则 ([#2633](https://github.com/antvis/S2/issues/2633)) ([73378c7](https://github.com/antvis/S2/commit/73378c70339c1d5536be33cdf3cece5404d1f5c9))

# [@antv/s2-vue-v2.0.0-next.11](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.10...@antv/s2-vue-v2.0.0-next.11) (2024-03-04)


### Features

* 移除已废弃的方法和逻辑 & 优化文档 ([#2566](https://github.com/antvis/S2/issues/2566)) ([de7c97b](https://github.com/antvis/S2/commit/de7c97b862e5b467fd335dd65f9dac5a95e4b621))

# [@antv/s2-vue-v2.0.0-next.10](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.9...@antv/s2-vue-v2.0.0-next.10) (2024-02-05)


### Bug Fixes

* **interaction:** 修复隐藏列头配置更新时未覆盖上一次的配置 close [#2495](https://github.com/antvis/S2/issues/2495) ([#2527](https://github.com/antvis/S2/issues/2527)) ([ddc1283](https://github.com/antvis/S2/commit/ddc12830fa32f001ff7009a2bee8ce8624a1a187))


### Features

* 合并 master 到 next ([#2493](https://github.com/antvis/S2/issues/2493)) ([6da530d](https://github.com/antvis/S2/commit/6da530d0c5f53d283ddfaa4b3e510ca11c9bf83e)), closes [#2186](https://github.com/antvis/S2/issues/2186) [#2204](https://github.com/antvis/S2/issues/2204) [#2191](https://github.com/antvis/S2/issues/2191)

# [@antv/s2-vue-v2.0.0-next.9](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.8...@antv/s2-vue-v2.0.0-next.9) (2023-12-12)

### Features

* 支持在单元格内渲染 G2 图表 ([#2437](https://github.com/antvis/S2/issues/2437)) ([497f941](https://github.com/antvis/S2/commit/497f9414b89fce01b60db9b6c2eb4292ffe69c1d))

# [@antv/s2-vue-v2.0.0-next.8](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.7...@antv/s2-vue-v2.0.0-next.8) (2023-11-22)

### Features

* 支持 antd v5 ([#2413](https://github.com/antvis/S2/issues/2413)) ([299c7bf](https://github.com/antvis/S2/commit/299c7bfe2e86838153273c92dd6d2b72917cfdea))
* 支持 React 18 （兼容 React 16/17) ([#2373](https://github.com/antvis/S2/issues/2373)) ([25ce9b0](https://github.com/antvis/S2/commit/25ce9b0ccc3e609d8add09b3209f6f981dc1dc4e))

### BREAKING CHANGES

* antd v5, 组件层级样式升级

* feat: 更新操作项菜单类型和文档

* chore: 修复 s2-vue 类型

* chore: ci

* test: 单测修复

* test: 单测修复

* feat: 兼容暗黑模式

* feat: 兼容暗黑模式
* 支持 React 18

* fix: 修复 lint 和 test

* fix: 修复打包问题

* chore: pnpm v8

* chore: autoInstallPeers pnpm v8

* test: 修复 swc/jest 导致的单测问题

* fix: 修复打包问题

* test: 更新 react 快照

* feat: 兼容 React 16/17

* test: 更新 react 快照

* test: 更新 react 快照

* test: 更新 react 快照

# [@antv/s2-vue-v2.0.0-next.7](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.6...@antv/s2-vue-v2.0.0-next.7) (2023-07-17)

# [@antv/s2-vue-v2.0.0-next.6](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.5...@antv/s2-vue-v2.0.0-next.6) (2023-04-23)

### Bug Fixes

* 修复 vue playground 启动失败 ([#2104](https://github.com/antvis/S2/issues/2104)) ([a62974d](https://github.com/antvis/S2/commit/a62974d88e1e3f6d3dcc16daf936a95236e9d6d3))

# [@antv/s2-vue-v2.0.0-next.5](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.4...@antv/s2-vue-v2.0.0-next.5) (2023-02-22)

# [@antv/s2-vue-v1.5.0](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.4.0...@antv/s2-vue-v1.5.0) (2022-12-09)

### Bug Fixes

* **tooltip:** 修复自定义操作菜单传入自定义 ReactNode 不显示 ([#1969](https://github.com/antvis/S2/issues/1969)) ([3eff993](https://github.com/antvis/S2/commit/3eff9932438cc95093686c03510b57648ff44391))

### Features

* 暴露 afterRealCellRender，这样能够更灵活的使用 datacell ([#1970](https://github.com/antvis/S2/issues/1970)) ([66c5ab9](https://github.com/antvis/S2/commit/66c5ab9992c51b475be8acaf9a198d49f3114a49))

# [@antv/s2-vue-v2.0.0-next.3](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.2...@antv/s2-vue-v2.0.0-next.3) (2022-12-16)

### Bug Fixes

* 解决 S2.0next 版本 Vue 报错 bug ([#1988](https://github.com/antvis/S2/issues/1988)) ([3aa0758](https://github.com/antvis/S2/commit/3aa07581629251c98ca61f39484b27e86f2f0d9a))

# [@antv/s2-vue-v2.0.0-next.2](https://github.com/antvis/S2/compare/@antv/s2-vue-v2.0.0-next.1...@antv/s2-vue-v2.0.0-next.2) (2022-12-07)

### Bug Fixes

* **tooltip:** 修复自定义操作菜单传入自定义 ReactNode 不显示 ([#1969](https://github.com/antvis/S2/issues/1969)) ([3eff993](https://github.com/antvis/S2/commit/3eff9932438cc95093686c03510b57648ff44391))

# [@antv/s2-vue-v2.0.0-next.1](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.4.0...@antv/s2-vue-v2.0.0-next.1) (2022-11-25)

* feat!: 2.0 next 预览版发布 ([de5a406](https://github.com/antvis/S2/commit/de5a406f4fd5e0db23eea46c8e7185589215c195))
* feat!: 2.0 预览版发布 ([9abb76d](https://github.com/antvis/S2/commit/9abb76dd40c65ed2a6a122b6f2b20a9b963c8a58))

### Features

* 2.0 break ([a4ba788](https://github.com/antvis/S2/commit/a4ba788580788909f4fcfee98f3d7387dd883c4a))
* 2.0.0 next ([fe0aca3](https://github.com/antvis/S2/commit/fe0aca341f9c37e3a85e622a6eb30c9da5e02a96))
* **layout:** 自定义行列头 ([#1719](https://github.com/antvis/S2/issues/1719)) ([2e0746d](https://github.com/antvis/S2/commit/2e0746dc9ca4ec45d50b35a9408b8827252c1bfa))
* version break ([064c0de](https://github.com/antvis/S2/commit/064c0de861f2e87814acf394cbdf6305397d476d))
* 移动端组件适配 ([#1833](https://github.com/antvis/S2/issues/1833)) ([bd2e71e](https://github.com/antvis/S2/commit/bd2e71e0d1d55057af77d435a10730b7ac929324))

# [@antv/s2-vue-v1.4.0](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.3.0...@antv/s2-vue-v1.4.0) (2022-10-24)

# [@antv/s2-vue-v1.4.0](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.3.0...@antv/s2-vue-v1.4.0) (2022-10-24)

### Features

* 组件层新增 onMounted 事件 ([#1830](https://github.com/antvis/S2/issues/1830)) ([0758160](https://github.com/antvis/S2/commit/0758160833c6be06c96dc851cab4605dd709e8ad))

### Reverts

* Revert "chore(release): 🔖@antv/s2@1.32.0 @antv/s2-react@1.29.0 @antv/s2-vue@1…" (#1846) ([7b0bcea](https://github.com/antvis/S2/commit/7b0bceab42acf8dae4a437f86148207848502c8b)), closes [#1846](https://github.com/antvis/S2/issues/1846) [#1844](https://github.com/antvis/S2/issues/1844)

# [@antv/s2-vue-v1.3.0](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.2.2...@antv/s2-vue-v1.3.0) (2022-09-05)

### Bug Fixes

* **types:** 修复严格模式下 S2Options 类型报错 ([#1723](https://github.com/antvis/S2/issues/1723)) ([ef55f55](https://github.com/antvis/S2/commit/ef55f559f940614b19f76fbc5c941e114f220461))

### Features

* 导出组件层 CustomTooltip 类 ([#1726](https://github.com/antvis/S2/issues/1726)) ([46270ab](https://github.com/antvis/S2/commit/46270ab0ae6e42cf92dcf77c0a35a70e07b9b10c))

# [@antv/s2-vue-v1.2.2](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.2.1...@antv/s2-vue-v1.2.2) (2022-08-29)

### Bug Fixes

* **pagination:** 透传组件分页参数 & 修复国际化不生效 close [#1697](https://github.com/antvis/S2/issues/1697) ([#1698](https://github.com/antvis/S2/issues/1698)) ([be334fc](https://github.com/antvis/S2/commit/be334fcef6a11d08358f007eba805cbd380560d5))

# [@antv/s2-vue-v1.2.1](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.2.0...@antv/s2-vue-v1.2.1) (2022-08-05)

### Bug Fixes

* 修复 pivot 模式 cell 点击事件无法触发 BUG ([#1623](https://github.com/antvis/S2/issues/1623)) ([a9172a0](https://github.com/antvis/S2/commit/a9172a04c32d8b02a258e2ac2650970ea3f241e5))

# [@antv/s2-vue-v1.2.0](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.1.0...@antv/s2-vue-v1.2.0) (2022-07-22)

### Bug Fixes

* s2-vue 保持和 react 组件一致的 tooltip summary 渲染逻辑 ([#1576](https://github.com/antvis/S2/issues/1576)) ([32135f7](https://github.com/antvis/S2/commit/32135f7f5a3cb2be8183d313bccdfaef2d3ceebd))
* **s2-vue:** 修复表头排序交互不起作用的问题 ([#1559](https://github.com/antvis/S2/issues/1559)) ([4008894](https://github.com/antvis/S2/commit/40088947f3dd959e6d09e052076b2071653d5710))
* 去除 vue prop warning 信息 ([#1555](https://github.com/antvis/S2/issues/1555)) ([d703737](https://github.com/antvis/S2/commit/d7037377ff1c47ad858fe7225c2229344c8b7092))

### Features

* 增加允许/禁用指标在行列维度中相互切换的能力 ([#1558](https://github.com/antvis/S2/issues/1558)) ([39f0f89](https://github.com/antvis/S2/commit/39f0f89cc999313d55077c06f72da13dab1f1316))

# [@antv/s2-vue-v1.1.0](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.0.2...@antv/s2-vue-v1.1.0) (2022-06-24)

### Bug Fixes

* **strategysheet:** 修复趋势分析表多列头切换为单列头后，隐藏列头功能失效 ([#1470](https://github.com/antvis/S2/issues/1470)) ([b39742e](https://github.com/antvis/S2/commit/b39742e3a7276836c504f2a0d5343ff201a65bba))

### Features

* **interaction:** 增加行头单元格和全局单元格滚动事件及文档 ([#1483](https://github.com/antvis/S2/issues/1483)) ([329aaa6](https://github.com/antvis/S2/commit/329aaa6c9f9ae926f392e3e8f676af1ec201cce2))
* **interaction:** 添加 onDataCellSelectMove 事件 ([#1468](https://github.com/antvis/S2/issues/1468)) ([da2a78e](https://github.com/antvis/S2/commit/da2a78ec511a85380824fa2b7147854e857df7f3))
* s2-vue 添加下钻组件 ([#1471](https://github.com/antvis/S2/issues/1471)) ([7f42b82](https://github.com/antvis/S2/commit/7f42b82264230f4b914adc39277e8ca6fbcf0cd3))

# [@antv/s2-vue-v1.0.2](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.0.1...@antv/s2-vue-v1.0.2) (2022-06-17)

### Bug Fixes

* 修复打包 core 层源码中样式文件错误问题 ([#1408](https://github.com/antvis/S2/issues/1408)) ([d2c0894](https://github.com/antvis/S2/commit/d2c08949d22dc61dbc73e01a779756e1d7a78fb6))

# [@antv/s2-vue-v1.0.1](https://github.com/antvis/S2/compare/@antv/s2-vue-v1.0.0...@antv/s2-vue-v1.0.1) (2022-06-02)

### Bug Fixes

* **locale:** 修复国际化配置不生效 close [#1394](https://github.com/antvis/S2/issues/1394) ([#1397](https://github.com/antvis/S2/issues/1397)) ([cfd5dbe](https://github.com/antvis/S2/commit/cfd5dbe0344afbb6f3929bece1778c02f9bbc00b))
* **vue:** 统一表组件变量名保持和 react 版本一致 Sheet => SheetComponent ([#1389](https://github.com/antvis/S2/issues/1389)) ([0bee476](https://github.com/antvis/S2/commit/0bee4767ecfbe9b87c71f4f52b5569f13bb58686))

# @antv/s2-vue-v1.0.0 (2022-05-30)

### Features

* Vue 1.0 ([#1290](https://github.com/antvis/S2/issues/1290)) ([0745836](https://github.com/antvis/S2/commit/07458368d7eafd3ddee168d5b2adca463374ab5a))

### Reverts

* Revert "chore(release): @antv/s2@1.18.0 @antv/s2-react@1.16.0 @antv/s2-vue@1.0.0 (#1384)" (#1386) ([60cdf6a](https://github.com/antvis/S2/commit/60cdf6abe7fb3b44f831051bd55622587a0f5bf8)), closes [#1384](https://github.com/antvis/S2/issues/1384) [#1386](https://github.com/antvis/S2/issues/1386)
