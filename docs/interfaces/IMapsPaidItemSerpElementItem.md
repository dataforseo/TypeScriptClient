[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMapsPaidItemSerpElementItem

# Interface: IMapsPaidItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IMapsPaidItemSerpElementItem`**

## Implemented by

- [`MapsPaidItemSerpElementItem`](../classes/MapsPaidItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](IMapsPaidItemSerpElementItem.md#domain)
- [rank\_absolute](IMapsPaidItemSerpElementItem.md#rank_absolute)
- [rank\_group](IMapsPaidItemSerpElementItem.md#rank_group)
- [rating](IMapsPaidItemSerpElementItem.md#rating)
- [rating\_distribution](IMapsPaidItemSerpElementItem.md#rating_distribution)
- [title](IMapsPaidItemSerpElementItem.md#title)
- [url](IMapsPaidItemSerpElementItem.md#url)

## Properties

### domain

• `Optional` **domain**: `string`

domain in the SERP element

#### Defined in

[main.ts:38799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38799)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:38797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38797)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:38794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38794)

___


### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:38806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38806)

___


### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:38809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38809)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:38801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38801)

___


### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Defined in

[main.ts:38803](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38803)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")