**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchLiveAdvancedResultInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchLiveAdvancedResultInfo(data)

> **new SerpGoogleDatasetSearchLiveAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Source

main.ts:55897

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#check_url)

#### Source

main.ts:55875

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#datetime)

#### Source

main.ts:55880

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#item_types)

#### Source

main.ts:55887

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items)

#### Source

main.ts:55893

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items_count)

#### Source

main.ts:55891

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#keyword)

#### Source

main.ts:55868

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#language_code)

#### Source

main.ts:55872

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_domain)

#### Source

main.ts:55870

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:55889

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#spell)

#### Source

main.ts:55883

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:55906

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:55940

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Source

main.ts:55933
