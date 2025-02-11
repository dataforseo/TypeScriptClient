[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleAdsAdvertisersSerpElementItem

# Class: BaseGoogleAdsAdvertisersSerpElementItem

Defined in: main.ts:60996

## Extended by

- [`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)
- [`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)
- [`GoogleAdsAdvertisersAdsDomainSerpElementItem`](GoogleAdsAdvertisersAdsDomainSerpElementItem.md)

## Implements

- [`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md)

## Constructors

### new BaseGoogleAdsAdvertisersSerpElementItem()

> **new BaseGoogleAdsAdvertisersSerpElementItem**(`data`?): [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

Defined in: main.ts:61009

#### Parameters

##### data?

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md)

#### Returns

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:61007

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:61005

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:61002

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:60998

type of element

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:61019

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:61049

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

Defined in: main.ts:61027

#### Parameters

##### data

`any`

#### Returns

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)
