[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

# Interface: IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

Defined in: main.ts:61112

## Extends

- [`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### advertisers?

> `optional` **advertisers**: [`Advertiser`](../classes/Advertiser.md)[]

Defined in: main.ts:61122

associated advertiser accounts
contains objects with data on associated advertiser accounts

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

Defined in: main.ts:61119

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:61116

advertiser location

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:61046

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:61043

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:61114

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:61039

type of element

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](IBaseGoogleAdsAdvertisersSerpElementItem.md#type)
