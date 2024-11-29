[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTaskGetAdvancedResultInfo

# Class: SerpGoogleDatasetInfoTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTaskGetAdvancedResultInfo()

> **new SerpGoogleDatasetInfoTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:59584

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:59560

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:59565

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:59574

***

### items?

> `optional` **items**: [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:59580

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:59578

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:59553

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:59557

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:59570

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:59555

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:59576

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:59568

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:59593

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:59628

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:59621
