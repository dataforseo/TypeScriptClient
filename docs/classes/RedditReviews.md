[dataforseo-client](../README.md) / [Exports](../modules.md) / RedditReviews

# Class: RedditReviews

## Implements

- [`IRedditReviews`](../interfaces/IRedditReviews.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RedditReviews.md#constructor)

### Properties

- [author\_name](RedditReviews.md#author_name)
- [permalink](RedditReviews.md#permalink)
- [subreddit](RedditReviews.md#subreddit)
- [subreddit\_members](RedditReviews.md#subreddit_members)
- [title](RedditReviews.md#title)

### Methods

- [init](RedditReviews.md#init)
- [toJSON](RedditReviews.md#tojson)
- [fromJS](RedditReviews.md#fromjs)

## Constructors

### constructor

• **new RedditReviews**(`data?`): [`RedditReviews`](RedditReviews.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRedditReviews`](../interfaces/IRedditReviews.md) |

#### Returns

[`RedditReviews`](RedditReviews.md)

#### Defined in

[main.ts:206237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206237)

## Properties

### author\_name

• `Optional` **author\_name**: `string`

nickname of the author
nicknname of the user who published the post in the subreddit and shared the URL

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[author_name](../interfaces/IRedditReviews.md#author_name)

#### Defined in

[main.ts:206227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206227)

___

### permalink

• `Optional` **permalink**: `string`

URL to the subreddit post

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[permalink](../interfaces/IRedditReviews.md#permalink)

#### Defined in

[main.ts:206231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206231)

___

### subreddit

• `Optional` **subreddit**: `string`

the name of the subreddit

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[subreddit](../interfaces/IRedditReviews.md#subreddit)

#### Defined in

[main.ts:206224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206224)

___

### subreddit\_members

• `Optional` **subreddit\_members**: `number`

number of subreddit members

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[subreddit_members](../interfaces/IRedditReviews.md#subreddit_members)

#### Defined in

[main.ts:206233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206233)

___

### title

• `Optional` **title**: `string`

title of the subreddit post

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[title](../interfaces/IRedditReviews.md#title)

#### Defined in

[main.ts:206229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206229)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:206246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206246)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:206267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206267)

___

### fromJS

▸ **fromJS**(`data`): [`RedditReviews`](RedditReviews.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RedditReviews`](RedditReviews.md)

#### Defined in

[main.ts:206260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206260)
