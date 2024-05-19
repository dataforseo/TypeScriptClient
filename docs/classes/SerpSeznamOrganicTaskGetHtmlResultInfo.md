**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskGetHtmlResultInfo

# Class: SerpSeznamOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetHtmlResultInfo(data)

> **new SerpSeznamOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Source

main.ts:74133

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:74125

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:74129

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:74127

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#keyword)

#### Source

main.ts:74112

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:74120

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:74118

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:74116

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:74114

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:74142

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:74170

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Source

main.ts:74163
