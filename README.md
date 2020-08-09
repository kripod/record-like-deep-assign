# Record-like deep assign

Recursively assigns enumerable own properties of the given sources to a target object.

- API inspired by [`Object.assign`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), with source objects applied from left to right:

  ```js
  import deepAssign from "record-like-deep-assign"

  deepAssign(target, ...sources) // Returns `target`
  ```

- Plain objects are merged deeply:

  ```js
  // Result: { x: { a: 1, b: 2 } }
  deepAssign({ x: { a: 1 } }, { x: { b: 2 } })
  ```

- Arrays and constructor-instantiated objects are treated like primitives. They aren't merged but replaced in their entirely:

  ```js
  // Result: { arr: ["c"] }
  deepAssign({ arr: ["a", "b"] }, { arr: ["c"] })

  // Result: { x: Date 1997-11-21 }
  deepAssign({ x: new Date("1996-12-03") }, { x: new Date("1997-11-21") })
  ```

- Nullish sources are ignored:

  ```js
  // Result: { a: 1, b: 2 }
  deepAssign({ a: 1 }, null, undefined, { b: 2 })
  ```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kripod"><img src="https://avatars3.githubusercontent.com/u/14854048?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kristóf Poduszló</b></sub></a><br /><a href="#maintenance-kripod" title="Maintenance">🚧</a> <a href="https://github.com/kripod/record-like-deep-assign/commits?author=kripod" title="Code">💻</a> <a href="https://github.com/kripod/record-like-deep-assign/commits?author=kripod" title="Documentation">📖</a> <a href="https://github.com/kripod/record-like-deep-assign/commits?author=kripod" title="Tests">⚠️</a> <a href="#ideas-kripod" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-kripod" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://gitter.im/millsp"><img src="https://avatars1.githubusercontent.com/u/18401805?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pierre-Antoine Mills</b></sub></a><br /><a href="#ideas-millsp" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
