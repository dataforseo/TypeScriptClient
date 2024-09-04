[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGooglePlaySearchOrganicSerpElementItem

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

• **data?**: [`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Returns

[`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Defined in

main.ts:115001

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

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#app_id)

#### Defined in

main.ts:114979

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer)

#### Defined in

main.ts:114995

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer_url)

#### Defined in

main.ts:114997

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#icon)

#### Defined in

main.ts:114985

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#is_free)

#### Defined in

main.ts:114991

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#position)

#### Defined in

main.ts:114977

***

### price?

> `optional` **price**: [`Price`](Price.md)

price of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#price)

#### Defined in

main.ts:114993

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:114973

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_group)

#### Defined in

main.ts:114970

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rating)

#### Defined in

main.ts:114989

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#reviews_count)

#### Defined in

main.ts:114987

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#title)

#### Defined in

main.ts:114981

***

### url?

> `optional` **url**: `string`

URL to the app page on Google Play

#### Implementation of

[`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#url)

#### Defined in

main.ts:114983

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

main.ts:115006

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

main.ts:115036

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:115029
