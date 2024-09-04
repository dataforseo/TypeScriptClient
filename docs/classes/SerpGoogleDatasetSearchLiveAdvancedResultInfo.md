[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleDatasetSearchLiveAdvancedResultInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetSearchLiveAdvancedResultInfo()

> **new SerpGoogleDatasetSearchLiveAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Defined in

main.ts:54900

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:54878

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:54883

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:54890

***

### items?

> `optional` **items**: [`SerpGoogleDatasetAdvancedItem`](SerpGoogleDatasetAdvancedItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:54896

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:54894

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:54871

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:54875

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:54873

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:54892

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:54886

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:54909

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:54943

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Defined in

main.ts:54936
