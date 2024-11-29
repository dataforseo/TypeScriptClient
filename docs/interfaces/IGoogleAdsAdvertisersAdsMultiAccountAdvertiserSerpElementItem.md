[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

# Interface: IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

## Extends

- [`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### advertisers?

> `optional` **advertisers**: [`Advertiser`](../classes/Advertiser.md)[]

associated advertiser accounts
contains objects with data on associated advertiser accounts

#### Defined in

main.ts:61122

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

#### Defined in

main.ts:61119

***

### location?

> `optional` **location**: `string`

advertiser location

#### Defined in

main.ts:61116

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

main.ts:61114

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](IBaseGoogleAdsAdvertisersSerpElementItem.md#type)

#### Defined in

main.ts:61039
