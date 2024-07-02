**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new AppDataAppStoreSearchOrganicSerpElementItem(data)

> **new AppDataAppStoreSearchOrganicSerpElementItem**(`data`?): [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md)

#### Returns

[`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Source

main.ts:115654

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Source

main.ts:21192

***

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#app_id)

#### Source

main.ts:115636

***

### icon?

> **`optional`** **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#icon)

#### Source

main.ts:115642

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#is_free)

#### Source

main.ts:115648

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#position)

#### Source

main.ts:115634

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#price)

#### Source

main.ts:115650

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_absolute)

#### Source

main.ts:115630

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_group)

#### Source

main.ts:115627

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rating)

#### Source

main.ts:115646

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#reviews_count)

#### Source

main.ts:115644

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#title)

#### Source

main.ts:115638

***

### url?

> **`optional`** **url**: `string`

URL to the app page on App Store

#### Implementation of

[`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#url)

#### Source

main.ts:115640

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

main.ts:115659

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

main.ts:115687

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Source

main.ts:115680
