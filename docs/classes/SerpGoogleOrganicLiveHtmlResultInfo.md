**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveHtmlResultInfo

# Class: SerpGoogleOrganicLiveHtmlResultInfo

## Implements

- [`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveHtmlResultInfo(data)

> **new SerpGoogleOrganicLiveHtmlResultInfo**(`data`?): [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Source

main.ts:39340

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#datetime)

#### Source

main.ts:39332

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#items)

#### Source

main.ts:39336

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#items_count)

#### Source

main.ts:39334

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#keyword)

#### Source

main.ts:39319

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#language_code)

#### Source

main.ts:39327

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#location_code)

#### Source

main.ts:39325

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#se_domain)

#### Source

main.ts:39323

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#type)

#### Source

main.ts:39321

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:39349

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:39377

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Source

main.ts:39370
