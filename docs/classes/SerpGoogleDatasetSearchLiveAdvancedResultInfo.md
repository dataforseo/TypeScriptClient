[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchLiveAdvancedResultInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedResultInfo

Defined in: main.ts:58570

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchLiveAdvancedResultInfo()

> **new SerpGoogleDatasetSearchLiveAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

Defined in: main.ts:58604

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:58580

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:58585

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:58594

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)[]

Defined in: main.ts:58600

items of the element

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:58598

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:58573

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:58577

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#language_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:58590

search refinement chips

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:58575

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:58596

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:58588

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#spell)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:58613

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:58648

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

Defined in: main.ts:58641

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)
