[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAppDataAppStoreSearchOrganicSerpElementItem

# Interface: IAppDataAppStoreSearchOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app

#### Defined in

main.ts:117368

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:117374

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:117380

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:117366

***

### price?

> `optional` **price**: [`Price`](../classes/Price.md)

price of the app

#### Defined in

main.ts:117382

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:117362

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:117359

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

main.ts:117378

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Defined in

main.ts:117376

***

### title?

> `optional` **title**: `string`

title of the app

#### Defined in

main.ts:117370

***

### url?

> `optional` **url**: `string`

URL to the app page on App Store

#### Defined in

main.ts:117372
