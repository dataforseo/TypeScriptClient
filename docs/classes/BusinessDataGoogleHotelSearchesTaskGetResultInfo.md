[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTaskGetResultInfo

# Class: BusinessDataGoogleHotelSearchesTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#check_url)
- [datetime](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#datetime)
- [items](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items)
- [items\_count](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items_count)
- [keyword](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#keyword)
- [language\_code](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#language_code)
- [location\_code](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#location_code)

### Methods

- [init](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTaskGetResultInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Defined in

[main.ts:193946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193946)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:193931](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193931)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:193936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193936)

___


### items

• `Optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)[]

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[items](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items)

#### Defined in

[main.ts:193942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193942)

___


### items\_count

• `Optional` **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:193939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193939)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character);
in order to obtain accurate search results, the location name is appended to the keyword automatically

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[keyword](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:193924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193924)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:193928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193928)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:193926](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193926)

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

[main.ts:193955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193955)

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

[main.ts:193982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193982)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Defined in

[main.ts:193975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193975)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")