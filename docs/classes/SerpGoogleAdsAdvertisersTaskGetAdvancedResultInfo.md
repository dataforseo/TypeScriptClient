[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo

# Class: SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo()

> **new SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:61292

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:61267

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:61272

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
ads_muti_account_advertiser, ads_advertiser, ads_domain

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:61282

***

### items?

> `optional` **items**: [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:61288

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:61286

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:61256

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:61264

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:61262

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:61277

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:61260

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:61284

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:61275

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:61258

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:61301

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:61338

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:61331
