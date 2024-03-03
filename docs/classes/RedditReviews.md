[Documentation](../README.md) / [Exports](../modules.md) / RedditReviews

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

main.ts:206357

## Properties

### author\_name

• `Optional` **author\_name**: `string`

nickname of the author
nicknname of the user who published the post in the subreddit and shared the URL

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[author_name](../interfaces/IRedditReviews.md#author_name)

#### Defined in

main.ts:206347

___

### permalink

• `Optional` **permalink**: `string`

URL to the subreddit post

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[permalink](../interfaces/IRedditReviews.md#permalink)

#### Defined in

main.ts:206351

___

### subreddit

• `Optional` **subreddit**: `string`

the name of the subreddit

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[subreddit](../interfaces/IRedditReviews.md#subreddit)

#### Defined in

main.ts:206344

___

### subreddit\_members

• `Optional` **subreddit\_members**: `number`

number of subreddit members

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[subreddit_members](../interfaces/IRedditReviews.md#subreddit_members)

#### Defined in

main.ts:206353

___

### title

• `Optional` **title**: `string`

title of the subreddit post

#### Implementation of

[IRedditReviews](../interfaces/IRedditReviews.md).[title](../interfaces/IRedditReviews.md#title)

#### Defined in

main.ts:206349

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

main.ts:206366

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

main.ts:206387

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

main.ts:206380
