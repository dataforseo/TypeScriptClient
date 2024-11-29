[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesLiveAdvancedResultInfo

# Class: SerpGoogleImagesLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesLiveAdvancedResultInfo()

> **new SerpGoogleImagesLiveAdvancedResultInfo**(`data`?): [`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Defined in

main.ts:51823

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:51798

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:51803

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:51813

***

### items?

> `optional` **items**: [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:51819

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:51817

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:51787

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:51795

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:51793

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:51808

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:51791

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:51815

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:51806

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:51789

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:51832

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:51869

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Defined in

main.ts:51862
