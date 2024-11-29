[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTaskGetAdvancedResultInfo

# Class: SerpGoogleImagesTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTaskGetAdvancedResultInfo()

> **new SerpGoogleImagesTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:51085

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:51060

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:51065

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:51075

***

### items?

> `optional` **items**: [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:51081

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:51079

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:51049

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:51057

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:51055

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:51070

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:51053

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:51077

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:51068

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:51051

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:51094

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:51131

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:51124
