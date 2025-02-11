[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem

# Interface: IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem

Defined in: main.ts:61209

## Extends

- [`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

Defined in: main.ts:61214

unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

Defined in: main.ts:61222

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:61216

advertiser location

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:61068

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:61065

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:61211

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:61061

type of element

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](IBaseGoogleAdsAdvertisersSerpElementItem.md#type)

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:61219

verified advertiser account
equals true if advertiser account is verified by Google Ads
