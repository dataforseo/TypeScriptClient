[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem

# Interface: IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem

## Extends

- [`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint

#### Defined in

main.ts:61192

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

#### Defined in

main.ts:61200

***

### location?

> `optional` **location**: `string`

advertiser location

#### Defined in

main.ts:61194

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:61046

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

#### Defined in

main.ts:61043

***

### title?

> `optional` **title**: `string`

title of the element

#### Defined in

main.ts:61189

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](IBaseGoogleAdsAdvertisersSerpElementItem.md#type)

#### Defined in

main.ts:61039

***

### verified?

> `optional` **verified**: `boolean`

verified advertiser account
equals true if advertiser account is verified by Google Ads

#### Defined in

main.ts:61197
