[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IYoutubeCommentSerpElementItem

# Interface: IYoutubeCommentSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IYoutubeCommentSerpElementItem`**

## Implemented by

- [`YoutubeCommentSerpElementItem`](../classes/YoutubeCommentSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [author\_name](IYoutubeCommentSerpElementItem.md#author_name)
- [author\_thumbnail](IYoutubeCommentSerpElementItem.md#author_thumbnail)
- [author\_url](IYoutubeCommentSerpElementItem.md#author_url)
- [likes\_count](IYoutubeCommentSerpElementItem.md#likes_count)
- [publication\_date](IYoutubeCommentSerpElementItem.md#publication_date)
- [rank\_absolute](IYoutubeCommentSerpElementItem.md#rank_absolute)
- [rank\_group](IYoutubeCommentSerpElementItem.md#rank_group)
- [reply\_count](IYoutubeCommentSerpElementItem.md#reply_count)
- [text](IYoutubeCommentSerpElementItem.md#text)
- [timestamp](IYoutubeCommentSerpElementItem.md#timestamp)

## Properties

### author\_name

• `Optional` **author\_name**: `string`

name of the author of the comment

#### Defined in

[main.ts:61916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61916)

___


### author\_thumbnail

• `Optional` **author\_thumbnail**: `string`

the URL of the page where the author’s channel logo is hosted

#### Defined in

[main.ts:61918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61918)

___


### author\_url

• `Optional` **author\_url**: `string`

URL of the author’s channel

#### Defined in

[main.ts:61920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61920)

___


### likes\_count

• `Optional` **likes\_count**: `number`

number of likes on the comment

#### Defined in

[main.ts:61931](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61931)

___


### publication\_date

• `Optional` **publication\_date**: `string`

displayed publication date

#### Defined in

[main.ts:61924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61924)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

[main.ts:61914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61914)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:61911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61911)

___


### reply\_count

• `Optional` **reply\_count**: `number`

number of replies on the comment

#### Defined in

[main.ts:61933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61933)

___


### text

• `Optional` **text**: `string`

text of the comment

#### Defined in

[main.ts:61922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61922)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Defined in

[main.ts:61929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61929)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")