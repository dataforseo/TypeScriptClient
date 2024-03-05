[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

# Class: BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#datetime)
- [items](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items)
- [items\_count](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items_count)
- [keyword](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#keyword)
- [language\_code](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#language_code)
- [location\_code](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#se_domain)
- [type](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#type)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:196337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196337)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:196327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196327)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[items](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:196331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196331)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[items_count](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:196329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196329)

___

### keyword

• `Optional` **keyword**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[keyword](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:196318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196318)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:196322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196322)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:196320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196320)

___

### se\_domain

• `Optional` **se\_domain**: `string`

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:196333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196333)

___

### type

• `Optional` **type**: `string`

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[type](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:196332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196332)

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

[main.ts:196346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196346)

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

[main.ts:196374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196374)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:196367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196367)
