[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAmazonKeywordInfo

# Interface: IAmazonKeywordInfo

## Implemented by

- [`AmazonKeywordInfo`](../classes/AmazonKeywordInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [last\_updated\_time](IAmazonKeywordInfo.md#last_updated_time)
- [se\_type](IAmazonKeywordInfo.md#se_type)
- [search\_volume](IAmazonKeywordInfo.md#search_volume)

## Properties

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:    '2019-11-15 12:57:46 +00:00'

#### Defined in

[main.ts:21443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21443)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:21439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21439)

___


### search\_volume

• `Optional` **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the provided keyword idea on Amazon

#### Defined in

[main.ts:21446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21446)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")