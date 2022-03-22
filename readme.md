# twitter.d.ts

[![Version Status](https://img.shields.io/npm/v/twitter-d.svg?style=flat&label=version&colorB=4bc524)](https://npmjs.com/package/twitter-d)
[![Build Status](https://img.shields.io/travis/abraham/twitter-d.svg?style=flat&label=build)](https://travis-ci.org/abraham/twitter-d)
[![Dependency Status](https://david-dm.org/abraham/twitter-d.svg?style=flat)](https://david-dm.org/abraham/twitter-d)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/twitter-d.svg?style=flat&colorB=4bc524)](https://bundlephobia.com/result?p=twitter-d)

TypeScript definitions for Twitter API objects.

Carefully constructed with the data from over 400,000 Twitter API status objects. Format will match [`tweet_mode=extended`](https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/overview/intro-to-tweet-json#extendedtweet) and [`include_entities=true`](https://developer.twitter.com/en/docs/twitter-api/v1/data-dictionary/overview/extended-entities-object) parameters set.

_Note that the presence of field is not an indication of it being current and accurate part of the documented Twitter API._

## Install

```bash
npm install --save-dev twitter-d
```

## Usage

The main two interfaces provided are [`Status`](https://github.com/abraham/twitter-d/blob/master/types/status.d.ts) and [`User`](https://github.com/abraham/twitter-d/blob/master/types/user.d.ts) although there are a number of related interfaces like [`MediaEntity`](https://github.com/abraham/twitter-d/blob/master/types/media_entity.d.ts) and [`AdditionalMediaInfo`](https://github.com/abraham/twitter-d/blob/master/types/additional_media_info.d.ts).

```typescript
import type { Status as Tweet, User } from 'twitter-d';

function getTweet(): Tweet {
  /* ... */
}
function getUser(): User {
  /* ... */
}
```

Or if you are using [TypeScript 2.9+](https://blogs.msdn.microsoft.com/typescript/2018/05/31/announcing-typescript-2-9/#import-types) you can use `import()`.

```typescript
function getStatus(): import('twitter-d').Status {
  /* ... */
}
```

## User

In some contexts, using `trim_user=true` on [GET statuses/mentions_timeline](https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-mentions_timeline), you might get a user object that only includes `id` and `id_str`. To test if a `User` value is a `FullUser` you can use the `isFullUser` helper function.

```typescript
import type { isFullUser, User } from 'twitter-d';

function logUser(user: User) {
  if (isFullUser(user)) {
    console.log(user.name);
  } else {
    throw new Error('User is not type FullUser');
  }
}
```

## Contributing

If you find find an inaccuracy please [open an issue](https://github.com/abraham/twitter-d/issues) and include a status or user ID that demonstrates the difference.
