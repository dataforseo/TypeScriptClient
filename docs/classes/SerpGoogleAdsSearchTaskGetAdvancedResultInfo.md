[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTaskGetAdvancedResultInfo

# Class: SerpGoogleAdsSearchTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTaskGetAdvancedResultInfo()

> **new SerpGoogleAdsSearchTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleAdsSearchTaskGetAdvancedResultInfo`](SerpGoogleAdsSearchTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleAdsSearchTaskGetAdvancedResultInfo`](SerpGoogleAdsSearchTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:62566

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
in this case, equals null

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:62541

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:62546

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
ads_search

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:62556

***

### items?

> `optional` **items**: [`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:62562

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:62560

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:62530

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:62538

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:62536

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:62551

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:62534

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:62558

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:62549

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:62532

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:62575

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:62612

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTaskGetAdvancedResultInfo`](SerpGoogleAdsSearchTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTaskGetAdvancedResultInfo`](SerpGoogleAdsSearchTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:62605
