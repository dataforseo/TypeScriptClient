[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataAppStoreSearchOrganicSerpElementItem

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

main.ts:114430

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:114434

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:114438

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`position`](IBaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:22068

***

### price?

> `optional` **price**: [`Price`](../classes/Price.md)

price of the app

#### Defined in

main.ts:114440

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_absolute`](IBaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22064

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_group`](IBaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22061

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rating`](IBaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:22072

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Defined in

main.ts:114436

***

### title?

> `optional` **title**: `string`

title of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`title`](IBaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:22070

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`type`](IBaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:22058

***

### url?

> `optional` **url**: `string`

URL to the app page on App Store

#### Defined in

main.ts:114432
