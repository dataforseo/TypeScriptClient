[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / YoutubeCommentSerpElementItem

# Class: YoutubeCommentSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`YoutubeCommentSerpElementItem`**

## Implements

- [`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](YoutubeCommentSerpElementItem.md#constructor)

### Properties

- [\_discriminator](YoutubeCommentSerpElementItem.md#_discriminator)
- [author\_name](YoutubeCommentSerpElementItem.md#author_name)
- [author\_thumbnail](YoutubeCommentSerpElementItem.md#author_thumbnail)
- [author\_url](YoutubeCommentSerpElementItem.md#author_url)
- [likes\_count](YoutubeCommentSerpElementItem.md#likes_count)
- [publication\_date](YoutubeCommentSerpElementItem.md#publication_date)
- [rank\_absolute](YoutubeCommentSerpElementItem.md#rank_absolute)
- [rank\_group](YoutubeCommentSerpElementItem.md#rank_group)
- [reply\_count](YoutubeCommentSerpElementItem.md#reply_count)
- [text](YoutubeCommentSerpElementItem.md#text)
- [timestamp](YoutubeCommentSerpElementItem.md#timestamp)

### Methods

- [init](YoutubeCommentSerpElementItem.md#init)
- [toJSON](YoutubeCommentSerpElementItem.md#tojson)
- [fromJS](YoutubeCommentSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new YoutubeCommentSerpElementItem**(`data?`): [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md) |

#### Returns

[`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:61854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61854)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### author\_name

• `Optional` **author\_name**: `string`

name of the author of the comment

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[author_name](../interfaces/IYoutubeCommentSerpElementItem.md#author_name)

#### Defined in

[main.ts:61833](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61833)

___


### author\_thumbnail

• `Optional` **author\_thumbnail**: `string`

the URL of the page where the author’s channel logo is hosted

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[author_thumbnail](../interfaces/IYoutubeCommentSerpElementItem.md#author_thumbnail)

#### Defined in

[main.ts:61835](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61835)

___


### author\_url

• `Optional` **author\_url**: `string`

URL of the author’s channel

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[author_url](../interfaces/IYoutubeCommentSerpElementItem.md#author_url)

#### Defined in

[main.ts:61837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61837)

___


### likes\_count

• `Optional` **likes\_count**: `number`

number of likes on the comment

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[likes_count](../interfaces/IYoutubeCommentSerpElementItem.md#likes_count)

#### Defined in

[main.ts:61848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61848)

___


### publication\_date

• `Optional` **publication\_date**: `string`

displayed publication date

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[publication_date](../interfaces/IYoutubeCommentSerpElementItem.md#publication_date)

#### Defined in

[main.ts:61841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61841)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[rank_absolute](../interfaces/IYoutubeCommentSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:61831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61831)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[rank_group](../interfaces/IYoutubeCommentSerpElementItem.md#rank_group)

#### Defined in

[main.ts:61828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61828)

___


### reply\_count

• `Optional` **reply\_count**: `number`

number of replies on the comment

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[reply_count](../interfaces/IYoutubeCommentSerpElementItem.md#reply_count)

#### Defined in

[main.ts:61850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61850)

___


### text

• `Optional` **text**: `string`

text of the comment

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[text](../interfaces/IYoutubeCommentSerpElementItem.md#text)

#### Defined in

[main.ts:61839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61839)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Implementation of

[IYoutubeCommentSerpElementItem](../interfaces/IYoutubeCommentSerpElementItem.md).[timestamp](../interfaces/IYoutubeCommentSerpElementItem.md#timestamp)

#### Defined in

[main.ts:61846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61846)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:61859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61859)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:61886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61886)

___


### fromJS

▸ **fromJS**(`data`): [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:61879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61879)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")