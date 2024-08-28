[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataAppStoreSearchOrganicSerpElementItem

# Class: AppDataAppStoreSearchOrganicSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppStoreSearchOrganicSerpElementItem()

> **new AppDataAppStoreSearchOrganicSerpElementItem**(`data`?): [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md)

#### Returns

[`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Defined in

main.ts:117301

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21701

***

### app\_id?

> `optional` **app\_id**: `string`

id of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#app_id)

#### Defined in

main.ts:117283

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#icon)

#### Defined in

main.ts:117289

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#is_free)

#### Defined in

main.ts:117295

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#position)

#### Defined in

main.ts:117281

***

### price?

> `optional` **price**: [`Price`](Price.md)

price of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#price)

#### Defined in

main.ts:117297

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:117277

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_group)

#### Defined in

main.ts:117274

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rating)

#### Defined in

main.ts:117293

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#reviews_count)

#### Defined in

main.ts:117291

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#title)

#### Defined in

main.ts:117285

***

### url?

> `optional` **url**: `string`

URL to the app page on App Store

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#url)

#### Defined in

main.ts:117287

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

#### Defined in

main.ts:117306

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

#### Defined in

main.ts:117334

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:117327
