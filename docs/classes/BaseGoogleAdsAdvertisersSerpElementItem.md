[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleAdsAdvertisersSerpElementItem

# Class: BaseGoogleAdsAdvertisersSerpElementItem

## Extended by

- [`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)
- [`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)
- [`GoogleAdsAdvertisersAdsDomainSerpElementItem`](GoogleAdsAdvertisersAdsDomainSerpElementItem.md)

## Implements

- [`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md)

## Constructors

### new BaseGoogleAdsAdvertisersSerpElementItem()

> **new BaseGoogleAdsAdvertisersSerpElementItem**(`data`?): [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

#### Parameters

##### data?

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md)

#### Returns

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

#### Defined in

main.ts:60987

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:60985

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:60983

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

#### Defined in

main.ts:60980

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#type)

#### Defined in

main.ts:60976

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:60997

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:61027

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

#### Defined in

main.ts:61005
