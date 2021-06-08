# Awesome Hooks Fetch Data 👏
A React Hooks HOC For Awesome Fetch Data. 

## Todo

 - 目前是基于业务使用，可以把内部的 fetch 换成其他请求库，比如： Axios。

 - 后续可以只封装逻辑层，业务层可以像 swr 一样，封装成参数 fetcher。

 - hooks 内部使用了一个偏 hack 的方法，`JSON.stringify()`，后面可以考虑优化这里，比如使用 `fast-json-stringify`等思路来优化性能。

 - 类似 Suspense 的短时间 loading 不展示，比如 200ms 以内返回的数据就不展示 loading 了。