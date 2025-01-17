[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTaskGetAdvancedResultInfo

# Class: SerpGoogleDatasetInfoTaskGetAdvancedResultInfo

Defined in: main.ts:59550

## Implements

- [`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTaskGetAdvancedResultInfo()

> **new SerpGoogleDatasetInfoTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:59584

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:59560

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:59565

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:59574

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)[]

Defined in: main.ts:59580

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:59578

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:59553

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:59557

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#language_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:59570

search refinement chips

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:59555

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:59576

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:59568

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#spell)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59593

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:59628

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:59621

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)
