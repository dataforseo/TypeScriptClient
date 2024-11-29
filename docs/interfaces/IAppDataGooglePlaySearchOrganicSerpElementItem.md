[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGooglePlaySearchOrganicSerpElementItem

# Interface: IAppDataGooglePlaySearchOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app

#### Defined in

main.ts:121537

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Defined in

main.ts:121549

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Defined in

main.ts:121551

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:121541

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:121545

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`position`](IBaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:22971

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Defined in

main.ts:121547

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_absolute`](IBaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22967

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_group`](IBaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22964

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rating`](IBaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:22975

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Defined in

main.ts:121543

***

### title?

> `optional` **title**: `string`

title of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`title`](IBaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:22973

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`type`](IBaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:22961

***

### url?

> `optional` **url**: `string`

URL to the app page on Google Play

#### Defined in

main.ts:121539
