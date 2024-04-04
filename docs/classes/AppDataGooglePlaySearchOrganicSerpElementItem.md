**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new AppDataGooglePlaySearchOrganicSerpElementItem(data)

> **new AppDataGooglePlaySearchOrganicSerpElementItem**(`data`?): [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Returns

[`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Source

main.ts:110899

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20969

***

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#app_id)

#### Source

main.ts:110877

***

### developer?

> **`optional`** **developer**: `string`

name of the app developer

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer)

#### Source

main.ts:110893

***

### developer\_url?

> **`optional`** **developer\_url**: `string`

URL to the developer page on Google Play

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer_url)

#### Source

main.ts:110895

***

### icon?

> **`optional`** **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#icon)

#### Source

main.ts:110883

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#is_free)

#### Source

main.ts:110889

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#position)

#### Source

main.ts:110875

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#price)

#### Source

main.ts:110891

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_absolute)

#### Source

main.ts:110871

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_group)

#### Source

main.ts:110868

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rating)

#### Source

main.ts:110887

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#reviews_count)

#### Source

main.ts:110885

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#title)

#### Source

main.ts:110879

***

### url?

> **`optional`** **url**: `string`

URL to the app page on Google Play

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#url)

#### Source

main.ts:110881

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

#### Source

main.ts:110904

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

#### Source

main.ts:110934

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Source

main.ts:110927
