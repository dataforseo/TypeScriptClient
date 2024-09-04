[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ITripadvisorSearchOrganicBusinessDataSerpElementItem

# Interface: ITripadvisorSearchOrganicBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

place category

#### Defined in

main.ts:213227

***

### is\_sponsored?

> `optional` **is\_sponsored**: `boolean`

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

#### Defined in

main.ts:213223

***

### price\_rate?

> `optional` **price\_rate**: `string`

average price rate

#### Defined in

main.ts:213229

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21392

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:21390

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score of the establishment submitted by the reviewers

#### Defined in

main.ts:213231

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:213225

***

### title?

> `optional` **title**: `string`

name of the business entity

#### Defined in

main.ts:213216

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:21387

***

### url\_path?

> `optional` **url\_path**: `string`

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews

#### Defined in

main.ts:213220
