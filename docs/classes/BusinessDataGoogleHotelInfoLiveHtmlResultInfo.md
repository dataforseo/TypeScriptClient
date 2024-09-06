[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleHotelInfoLiveHtmlResultInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveHtmlResultInfo()

> **new BusinessDataGoogleHotelInfoLiveHtmlResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Defined in

main.ts:207860

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:207852

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:207856

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:207854

***

### keyword?

> `optional` **keyword**: `string`

unique hotel identifier specified as "hotel_id:$"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:207839

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:207847

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:207845

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:207843

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:207841

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:207869

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:207897

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Defined in

main.ts:207890
