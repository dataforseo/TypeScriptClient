[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTaskGetAdvancedResultInfo

# Class: SerpGoogleDatasetSearchTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchTaskGetAdvancedResultInfo()

> **new SerpGoogleDatasetSearchTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:58140

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:58116

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:58121

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:58130

***

### items?

> `optional` **items**: [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:58136

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:58134

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:58109

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:58113

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:58126

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:58111

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:58132

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:58124

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:58149

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:58184

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:58177
