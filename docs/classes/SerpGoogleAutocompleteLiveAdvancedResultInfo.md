**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteLiveAdvancedResultInfo

# Class: SerpGoogleAutocompleteLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteLiveAdvancedResultInfo(data)

> **new SerpGoogleAutocompleteLiveAdvancedResultInfo**(`data`?): [`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Source

main.ts:51920

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#check_url)

#### Source

main.ts:51897

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#datetime)

#### Source

main.ts:51902

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#item_types)

#### Source

main.ts:51910

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#items)

#### Source

main.ts:51916

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#items_count)

#### Source

main.ts:51914

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#keyword)

#### Source

main.ts:51886

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#language_code)

#### Source

main.ts:51894

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#location_code)

#### Source

main.ts:51892

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_domain)

#### Source

main.ts:51890

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:51912

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#spell)

#### Source

main.ts:51905

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#type)

#### Source

main.ts:51888

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:51929

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:51965

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Source

main.ts:51958
