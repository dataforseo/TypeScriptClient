[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleDatasetInfoLiveAdvancedResultInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoLiveAdvancedResultInfo()

> **new SerpGoogleDatasetInfoLiveAdvancedResultInfo**(`data`?): [`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:57767

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:57745

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:57750

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:57757

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:57763

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:57761

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:57738

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:57742

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:57740

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:57759

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:57753

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:57776

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:57810

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:57803
