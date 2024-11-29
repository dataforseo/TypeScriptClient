[**Documentation**](../README.md)

***

[Documentation](../README.md) / RedditReviews

# Class: RedditReviews

## Implements

- [`IRedditReviews`](../interfaces/IRedditReviews.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RedditReviews()

> **new RedditReviews**(`data`?): [`RedditReviews`](RedditReviews.md)

#### Parameters

##### data?

[`IRedditReviews`](../interfaces/IRedditReviews.md)

#### Returns

[`RedditReviews`](RedditReviews.md)

#### Defined in

main.ts:230181

## Properties

### author\_name?

> `optional` **author\_name**: `string`

nickname of the author
nicknname of the user who published the post in the subreddit and shared the URL

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`author_name`](../interfaces/IRedditReviews.md#author_name)

#### Defined in

main.ts:230171

***

### permalink?

> `optional` **permalink**: `string`

URL to the subreddit post

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`permalink`](../interfaces/IRedditReviews.md#permalink)

#### Defined in

main.ts:230175

***

### subreddit?

> `optional` **subreddit**: `string`

the name of the subreddit

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`subreddit`](../interfaces/IRedditReviews.md#subreddit)

#### Defined in

main.ts:230168

***

### subreddit\_members?

> `optional` **subreddit\_members**: `number`

number of subreddit members

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`subreddit_members`](../interfaces/IRedditReviews.md#subreddit_members)

#### Defined in

main.ts:230177

***

### title?

> `optional` **title**: `string`

title of the subreddit post

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`title`](../interfaces/IRedditReviews.md#title)

#### Defined in

main.ts:230173

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:230190

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:230211

***

### fromJS()

> `static` **fromJS**(`data`): [`RedditReviews`](RedditReviews.md)

#### Parameters

##### data

`any`

#### Returns

[`RedditReviews`](RedditReviews.md)

#### Defined in

main.ts:230204
