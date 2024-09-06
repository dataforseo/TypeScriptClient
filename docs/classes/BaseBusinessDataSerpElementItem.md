[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseBusinessDataSerpElementItem

# Class: BaseBusinessDataSerpElementItem

## Extended by

- [`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)
- [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)
- [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)
- [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)
- [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)
- [`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)
- [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)
- [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

## Implements

- [`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md)

## Constructors

### new BaseBusinessDataSerpElementItem()

> **new BaseBusinessDataSerpElementItem**(`data`?): [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md)

#### Returns

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Defined in

main.ts:21315

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21313

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21311

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IBaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:21309

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md).[`type`](../interfaces/IBaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:21306

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21325

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21380

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Defined in

main.ts:21333
