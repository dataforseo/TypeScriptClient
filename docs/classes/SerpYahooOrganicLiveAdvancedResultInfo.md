**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveAdvancedResultInfo

# Class: SerpYahooOrganicLiveAdvancedResultInfo

## Implements

- [`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveAdvancedResultInfo(data)

> **new SerpYahooOrganicLiveAdvancedResultInfo**(`data`?): [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md)

#### Returns

[`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Source

main.ts:67155

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#check_url)

#### Source

main.ts:67131

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#datetime)

#### Source

main.ts:67136

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#item_types)

#### Source

main.ts:67144

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#items)

#### Source

main.ts:67151

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#items_count)

#### Source

main.ts:67148

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#keyword)

#### Source

main.ts:67120

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#language_code)

#### Source

main.ts:67128

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#location_code)

#### Source

main.ts:67126

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#se_domain)

#### Source

main.ts:67124

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:67146

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#spell)

#### Source

main.ts:67139

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#type)

#### Source

main.ts:67122

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:67164

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:67200

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Source

main.ts:67193
