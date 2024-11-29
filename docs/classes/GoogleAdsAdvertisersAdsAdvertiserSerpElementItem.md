[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleAdsAdvertisersAdsAdvertiserSerpElementItem

# Class: GoogleAdsAdvertisersAdsAdvertiserSerpElementItem

## Extends

- [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

## Implements

- [`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleAdsAdvertisersAdsAdvertiserSerpElementItem()

> **new GoogleAdsAdvertisersAdsAdvertiserSerpElementItem**(`data`?): [`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

#### Parameters

##### data?

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

#### Returns

[`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`constructor`](BaseGoogleAdsAdvertisersSerpElementItem.md#constructors)

#### Defined in

main.ts:61144

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`_discriminator`](BaseGoogleAdsAdvertisersSerpElementItem.md#_discriminator)

#### Defined in

main.ts:60985

***

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`advertiser_id`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#advertiser_id)

#### Defined in

main.ts:61132

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`approx_ads_count`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#approx_ads_count)

#### Defined in

main.ts:61140

***

### location?

> `optional` **location**: `string`

advertiser location

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`location`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#location)

#### Defined in

main.ts:61134

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#rank_absolute)

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

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`rank_group`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

#### Defined in

main.ts:60980

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`title`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#title)

#### Defined in

main.ts:61129

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`type`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](BaseGoogleAdsAdvertisersSerpElementItem.md#type)

#### Defined in

main.ts:60976

***

### verified?

> `optional` **verified**: `boolean`

verified advertiser account
equals true if advertiser account is verified by Google Ads

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`verified`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#verified)

#### Defined in

main.ts:61137

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

main.ts:61149

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

main.ts:61171

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`fromJS`](BaseGoogleAdsAdvertisersSerpElementItem.md#fromjs)

#### Defined in

main.ts:61164
