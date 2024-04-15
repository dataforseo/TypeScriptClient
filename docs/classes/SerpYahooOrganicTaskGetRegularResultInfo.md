**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetRegularResultInfo

# Class: SerpYahooOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetRegularResultInfo(data)

> **new SerpYahooOrganicTaskGetRegularResultInfo**(`data`?): [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Source

main.ts:66155

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#check_url)

#### Source

main.ts:66131

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#datetime)

#### Source

main.ts:66136

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
organic
note that this array contains all types of search results found in the returned SERP;

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#item_types)

#### Source

main.ts:66145

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#items)

#### Source

main.ts:66151

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#items_count)

#### Source

main.ts:66149

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#keyword)

#### Source

main.ts:66120

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#language_code)

#### Source

main.ts:66128

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#location_code)

#### Source

main.ts:66126

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#se_domain)

#### Source

main.ts:66124

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Source

main.ts:66147

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#spell)

#### Source

main.ts:66139

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#type)

#### Source

main.ts:66122

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:66164

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:66200

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Source

main.ts:66193
