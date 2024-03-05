[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoLiveHtmlResultInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#datetime)
- [items](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items)
- [items\_count](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items_count)
- [keyword](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#keyword)
- [language\_code](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#language_code)
- [location\_code](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#location_code)
- [se\_domain](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#se_domain)
- [type](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#type)

### Methods

- [init](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoLiveHtmlResultInfo**(`data?`): [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Defined in

[main.ts:197564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197564)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:197556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197556)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[items](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items)

#### Defined in

[main.ts:197560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197560)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[items_count](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:197558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197558)

___

### keyword

• `Optional` **keyword**: `string`

unique hotel identifier specified as "hotel_id:$"

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[keyword](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:197543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197543)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:197551](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197551)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:197549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197549)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[se_domain](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:197547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197547)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[type](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#type)

#### Defined in

[main.ts:197545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197545)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:197573](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197573)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:197601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197601)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Defined in

[main.ts:197594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197594)
