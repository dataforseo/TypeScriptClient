[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGooglePlaySearchOrganicSerpElementItem

# Class: AppDataGooglePlaySearchOrganicSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGooglePlaySearchOrganicSerpElementItem()

> **new AppDataGooglePlaySearchOrganicSerpElementItem**(`data`?): [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Parameters

##### data?

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Returns

[`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Defined in

main.ts:121486

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22886

***

### app\_id?

> `optional` **app\_id**: `string`

id of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#app_id)

#### Defined in

main.ts:121468

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer)

#### Defined in

main.ts:121480

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer_url)

#### Defined in

main.ts:121482

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#icon)

#### Defined in

main.ts:121472

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#is_free)

#### Defined in

main.ts:121476

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:22880

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#price)

#### Defined in

main.ts:121478

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22876

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22873

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:22884

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#reviews_count)

#### Defined in

main.ts:121474

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:22882

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`type`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:22870

***

### url?

> `optional` **url**: `string`

URL to the app page on Google Play

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#url)

#### Defined in

main.ts:121470

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

#### Defined in

main.ts:121491

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

#### Defined in

main.ts:121516

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:121509
