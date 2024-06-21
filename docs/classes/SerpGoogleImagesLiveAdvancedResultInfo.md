**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleImagesLiveAdvancedResultInfo

# Class: SerpGoogleImagesLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesLiveAdvancedResultInfo(data)

> **new SerpGoogleImagesLiveAdvancedResultInfo**(`data`?): [`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Source

main.ts:48831

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#check_url)

#### Source

main.ts:48808

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#datetime)

#### Source

main.ts:48813

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#item_types)

#### Source

main.ts:48821

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

contains keywords and images related to the specified search term

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#items)

#### Source

main.ts:48827

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#items_count)

#### Source

main.ts:48825

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#keyword)

#### Source

main.ts:48797

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#language_code)

#### Source

main.ts:48805

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#location_code)

#### Source

main.ts:48803

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#se_domain)

#### Source

main.ts:48801

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:48823

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#spell)

#### Source

main.ts:48816

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#type)

#### Source

main.ts:48799

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:48840

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:48876

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Source

main.ts:48869
