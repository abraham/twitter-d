twitter.d.ts
====

TypeScript definitions for Twitter API objects.

Carefully constructed with the data from over 400,000 Twitter API status objects. Format will match `tweet_mode="extended"` and `include_entities=true` parameters set.

_Note that the presence of field is not an indication of it being current and accurate part of the documented Twitter API._

Install
----

```
npm install --save-dev twitter-d
```

Usage
----

The main two interfaces provided are [`Status`](https://github.com/abraham/twitter-d/blob/master/types/status.d.ts) and [`User`](https://github.com/abraham/twitter-d/blob/master/types/user.d.ts) although there are a number of related interfaces like [`MediaEntity`](https://github.com/abraham/twitter-d/blob/master/types/media_entity.d.ts) and [`AdditionalMediaInfo`](https://github.com/abraham/twitter-d/blob/master/types/additional_media_info.d.ts).

```
import { Status as Tweet, User } from 'twitter-d';

function getTweet(): Tweet { /* ... */ }
function getUser(): User { /* ... */ }
```

Or if you are using [TypeScript 2.9+](https://blogs.msdn.microsoft.com/typescript/2018/05/31/announcing-typescript-2-9/#import-types) you can use `import()`.

```
function getStatus(): import('twitter-d').Status { /* ... */ }
```

Contributing
----

If you find find an inaccuracy please [open an issue](https://github.com/abraham/twitter-d/issues) and include a status or user ID that demonstrates the difference.
