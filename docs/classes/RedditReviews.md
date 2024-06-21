**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RedditReviews

# Class: RedditReviews

## Implements

- [`IRedditReviews`](../interfaces/IRedditReviews.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RedditReviews(data)

> **new RedditReviews**(`data`?): [`RedditReviews`](RedditReviews.md)

#### Parameters

• **data?**: [`IRedditReviews`](../interfaces/IRedditReviews.md)

#### Returns

[`RedditReviews`](RedditReviews.md)

#### Source

main.ts:214610

## Properties

### author\_name?

> **`optional`** **author\_name**: `string`

nickname of the author
nicknname of the user who published the post in the subreddit and shared the URL

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`author_name`](../interfaces/IRedditReviews.md#author_name)

#### Source

main.ts:214600

***

### permalink?

> **`optional`** **permalink**: `string`

URL to the subreddit post

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`permalink`](../interfaces/IRedditReviews.md#permalink)

#### Source

main.ts:214604

***

### subreddit?

> **`optional`** **subreddit**: `string`

the name of the subreddit

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`subreddit`](../interfaces/IRedditReviews.md#subreddit)

#### Source

main.ts:214597

***

### subreddit\_members?

> **`optional`** **subreddit\_members**: `number`

number of subreddit members

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`subreddit_members`](../interfaces/IRedditReviews.md#subreddit_members)

#### Source

main.ts:214606

***

### title?

> **`optional`** **title**: `string`

title of the subreddit post

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`title`](../interfaces/IRedditReviews.md#title)

#### Source

main.ts:214602

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:214619

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:214640

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RedditReviews`](RedditReviews.md)

#### Parameters

• **data**: `any`

#### Returns

[`RedditReviews`](RedditReviews.md)

#### Source

main.ts:214633
