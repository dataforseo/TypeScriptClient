**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTaskGetHtmlResultInfo

# Class: SerpGoogleLocalFinderTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTaskGetHtmlResultInfo(data)

> **new SerpGoogleLocalFinderTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Source

main.ts:42603

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:42595

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:42599

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:42597

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#keyword)

#### Source

main.ts:42582

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:42590

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:42588

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:42586

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:42584

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:42612

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:42640

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Source

main.ts:42633
