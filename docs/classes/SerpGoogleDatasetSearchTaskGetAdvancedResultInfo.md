[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTaskGetAdvancedResultInfo

# Class: SerpGoogleDatasetSearchTaskGetAdvancedResultInfo

Defined in: main.ts:58122

## Implements

- [`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTaskGetAdvancedResultInfo()

> **new SerpGoogleDatasetSearchTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

Defined in: main.ts:58156

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:58132

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:58137

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:58146

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)[]

Defined in: main.ts:58152

items of the element

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:58150

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:58125

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:58129

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#language_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:58142

search refinement chips

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:58127

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:58148

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:58140

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#spell)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:58165

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:58200

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

Defined in: main.ts:58193

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)
