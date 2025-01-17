[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleAdsAdvertisersAdsAdvertiserSerpElementItem

# Class: GoogleAdsAdvertisersAdsAdvertiserSerpElementItem

Defined in: main.ts:61127

## Extends

- [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

## Implements

- [`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleAdsAdvertisersAdsAdvertiserSerpElementItem()

> **new GoogleAdsAdvertisersAdsAdvertiserSerpElementItem**(`data`?): [`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

Defined in: main.ts:61144

#### Parameters

##### data?

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

#### Returns

[`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`constructor`](BaseGoogleAdsAdvertisersSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:60985

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`_discriminator`](BaseGoogleAdsAdvertisersSerpElementItem.md#_discriminator)

***

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

Defined in: main.ts:61132

unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`advertiser_id`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#advertiser_id)

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

Defined in: main.ts:61140

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`approx_ads_count`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#approx_ads_count)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:61134

advertiser location

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`location`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#location)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:60983

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:60980

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`rank_group`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:61129

title of the element

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`title`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:60976

type of element

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`type`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](BaseGoogleAdsAdvertisersSerpElementItem.md#type)

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:61137

verified advertiser account
equals true if advertiser account is verified by Google Ads

#### Implementation of

[`IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md).[`verified`](../interfaces/IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md#verified)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:61149

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`init`](BaseGoogleAdsAdvertisersSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:61171

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`toJSON`](BaseGoogleAdsAdvertisersSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

Defined in: main.ts:61164

#### Parameters

##### data

`any`

#### Returns

[`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`fromJS`](BaseGoogleAdsAdvertisersSerpElementItem.md#fromjs)
