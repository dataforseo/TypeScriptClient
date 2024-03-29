[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ITripadvisorSearchOrganicBusinessDataSerpElementItem

# Interface: ITripadvisorSearchOrganicBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)
  
  ↳ **`ITripadvisorSearchOrganicBusinessDataSerpElementItem`**

## Implemented by

- [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](../classes/TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#category)
- [is\_sponsored](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#is_sponsored)
- [price\_rate](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#price_rate)
- [rank\_absolute](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_group)
- [rating](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rating)
- [reviews\_count](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#reviews_count)
- [title](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#title)
- [url\_path](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#url_path)

## Properties

### category

• `Optional` **category**: `string`

place category

#### Defined in

[main.ts:201463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201463)

___


### is\_sponsored

• `Optional` **is\_sponsored**: `boolean`

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

#### Defined in

[main.ts:201459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201459)

___


### price\_rate

• `Optional` **price\_rate**: `string`

average price rate

#### Defined in

[main.ts:201465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201465)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Defined in

[main.ts:201450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201450)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:201447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201447)

___


### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by the reviewers

#### Defined in

[main.ts:201467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201467)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

[main.ts:201461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201461)

___


### title

• `Optional` **title**: `string`

name of the business entity

#### Defined in

[main.ts:201452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201452)

___


### url\_path

• `Optional` **url\_path**: `string`

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews

#### Defined in

[main.ts:201456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201456)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")