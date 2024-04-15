**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveRegularResultInfo

# Class: SerpYahooOrganicLiveRegularResultInfo

## Implements

- [`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveRegularResultInfo(data)

> **new SerpYahooOrganicLiveRegularResultInfo**(`data`?): [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md)

#### Returns

[`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Source

main.ts:66895

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
You can use it to make sure that we provided exact results

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#check_url)

#### Source

main.ts:66873

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#datetime)

#### Source

main.ts:66878

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
Possible item types: organic

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#item_types)

#### Source

main.ts:66885

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#items)

#### Source

main.ts:66891

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#items_count)

#### Source

main.ts:66889

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#keyword)

#### Source

main.ts:66862

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#language_code)

#### Source

main.ts:66870

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#location_code)

#### Source

main.ts:66868

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#se_domain)

#### Source

main.ts:66866

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#se_results_count)

#### Source

main.ts:66887

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#spell)

#### Source

main.ts:66881

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#type)

#### Source

main.ts:66864

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:66904

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:66940

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Source

main.ts:66933
