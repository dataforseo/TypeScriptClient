**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetHtmlResultInfo

# Class: SerpBaiduOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetHtmlResultInfo(data)

> **new SerpBaiduOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Source

main.ts:71130

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:71122

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:71126

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:71124

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#keyword)

#### Source

main.ts:71109

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:71117

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:71115

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:71113

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:71111

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:71139

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:71167

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Source

main.ts:71160
