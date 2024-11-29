[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleAdsAdvertisersAdsDomainSerpElementItem

# Class: GoogleAdsAdvertisersAdsDomainSerpElementItem

## Extends

- [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

## Implements

- [`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleAdsAdvertisersAdsDomainSerpElementItem()

> **new GoogleAdsAdvertisersAdsDomainSerpElementItem**(`data`?): [`GoogleAdsAdvertisersAdsDomainSerpElementItem`](GoogleAdsAdvertisersAdsDomainSerpElementItem.md)

#### Parameters

##### data?

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md)

#### Returns

[`GoogleAdsAdvertisersAdsDomainSerpElementItem`](GoogleAdsAdvertisersAdsDomainSerpElementItem.md)

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`constructor`](BaseGoogleAdsAdvertisersSerpElementItem.md#constructors)

#### Defined in

main.ts:61211

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`_discriminator`](BaseGoogleAdsAdvertisersSerpElementItem.md#_discriminator)

#### Defined in

main.ts:60985

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md).[`domain`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md#domain)

#### Defined in

main.ts:61207

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:60983

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md).[`rank_group`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

#### Defined in

main.ts:60980

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md).[`type`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](BaseGoogleAdsAdvertisersSerpElementItem.md#type)

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

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`init`](BaseGoogleAdsAdvertisersSerpElementItem.md#init)

#### Defined in

main.ts:61216

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`toJSON`](BaseGoogleAdsAdvertisersSerpElementItem.md#tojson)

#### Defined in

main.ts:61234

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleAdsAdvertisersAdsDomainSerpElementItem`](GoogleAdsAdvertisersAdsDomainSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleAdsAdvertisersAdsDomainSerpElementItem`](GoogleAdsAdvertisersAdsDomainSerpElementItem.md)

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`fromJS`](BaseGoogleAdsAdvertisersSerpElementItem.md#fromjs)

#### Defined in

main.ts:61227
