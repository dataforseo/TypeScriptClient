[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

# Class: GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

## Extends

- [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

## Implements

- [`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem()

> **new GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem**(`data`?): [`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)

#### Parameters

##### data?

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)

#### Returns

[`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`constructor`](BaseGoogleAdsAdvertisersSerpElementItem.md#constructors)

#### Defined in

main.ts:61063

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`_discriminator`](BaseGoogleAdsAdvertisersSerpElementItem.md#_discriminator)

#### Defined in

main.ts:60985

***

### advertisers?

> `optional` **advertisers**: [`Advertiser`](Advertiser.md)[]

associated advertiser accounts
contains objects with data on associated advertiser accounts

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`advertisers`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#advertisers)

#### Defined in

main.ts:61059

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`approx_ads_count`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#approx_ads_count)

#### Defined in

main.ts:61056

***

### location?

> `optional` **location**: `string`

advertiser location

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`location`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#location)

#### Defined in

main.ts:61053

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#rank_absolute)

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

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`rank_group`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

#### Defined in

main.ts:60980

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`title`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#title)

#### Defined in

main.ts:61051

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`type`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#type)

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

main.ts:61068

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

main.ts:61093

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`fromJS`](BaseGoogleAdsAdvertisersSerpElementItem.md#fromjs)

#### Defined in

main.ts:61086
