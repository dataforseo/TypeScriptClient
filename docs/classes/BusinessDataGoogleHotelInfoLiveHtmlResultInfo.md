**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveHtmlResultInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveHtmlResultInfo(data)

> **new BusinessDataGoogleHotelInfoLiveHtmlResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Source

main.ts:203175

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#datetime)

#### Source

main.ts:203167

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items)

#### Source

main.ts:203171

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items_count)

#### Source

main.ts:203169

***

### keyword?

> **`optional`** **keyword**: `string`

unique hotel identifier specified as "hotel_id:$"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#keyword)

#### Source

main.ts:203154

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#language_code)

#### Source

main.ts:203162

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#location_code)

#### Source

main.ts:203160

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#se_domain)

#### Source

main.ts:203158

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#type)

#### Source

main.ts:203156

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:203184

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:203212

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Source

main.ts:203205
