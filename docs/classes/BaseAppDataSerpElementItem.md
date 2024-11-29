[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseAppDataSerpElementItem

# Class: BaseAppDataSerpElementItem

## Extended by

- [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)
- [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)
- [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)
- [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)
- [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)
- [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

## Implements

- [`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md)

## Constructors

### new BaseAppDataSerpElementItem()

> **new BaseAppDataSerpElementItem**(`data`?): [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Parameters

##### data?

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md)

#### Returns

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Defined in

main.ts:22888

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:22886

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`position`](../interfaces/IBaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:22880

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22876

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`rank_group`](../interfaces/IBaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22873

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`rating`](../interfaces/IBaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:22884

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`title`](../interfaces/IBaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:22882

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md).[`type`](../interfaces/IBaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:22870

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:22898

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:22946

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Defined in

main.ts:22909
