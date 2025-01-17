[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoLiveAdvancedResultInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedResultInfo

Defined in: main.ts:59924

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoLiveAdvancedResultInfo()

> **new SerpGoogleDatasetInfoLiveAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

Defined in: main.ts:59958

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:59934

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:59939

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:59948

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)[]

Defined in: main.ts:59954

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:59952

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:59927

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:59931

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#language_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:59944

search refinement chips

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:59929

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:59950

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:59942

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#spell)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59967

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:60002

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

Defined in: main.ts:59995

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)
