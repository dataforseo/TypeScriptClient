[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / HotelPriceItemInfo

# Class: HotelPriceItemInfo

## Implements

- [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelPriceItemInfo.md#constructor)

### Properties

- [currency](HotelPriceItemInfo.md#currency)
- [domain](HotelPriceItemInfo.md#domain)
- [free\_cancellation\_until](HotelPriceItemInfo.md#free_cancellation_until)
- [is\_paid](HotelPriceItemInfo.md#is_paid)
- [offers](HotelPriceItemInfo.md#offers)
- [price](HotelPriceItemInfo.md#price)
- [title](HotelPriceItemInfo.md#title)
- [type](HotelPriceItemInfo.md#type)
- [url](HotelPriceItemInfo.md#url)

### Methods

- [init](HotelPriceItemInfo.md#init)
- [toJSON](HotelPriceItemInfo.md#tojson)
- [fromJS](HotelPriceItemInfo.md#fromjs)

## Constructors

### constructor

• **new HotelPriceItemInfo**(`data?`): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelPriceItemInfo`](../interfaces/IHotelPriceItemInfo.md) |

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Defined in

[main.ts:193595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193595)

## Properties

### currency

• `Optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[currency](../interfaces/IHotelPriceItemInfo.md#currency)

#### Defined in

[main.ts:193575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193575)

___


### domain

• `Optional` **domain**: `string`

third-party domain
domain of the third-party website page with pricing information

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[domain](../interfaces/IHotelPriceItemInfo.md#domain)

#### Defined in

[main.ts:193581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193581)

___


### free\_cancellation\_until

• `Optional` **free\_cancellation\_until**: `string`

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[free_cancellation_until](../interfaces/IHotelPriceItemInfo.md#free_cancellation_until)

#### Defined in

[main.ts:193589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193589)

___


### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[is_paid](../interfaces/IHotelPriceItemInfo.md#is_paid)

#### Defined in

[main.ts:193585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193585)

___


### offers

• `Optional` **offers**: [`HotelInfoPriceOffer`](HotelInfoPriceOffer.md)[]

featured price offers

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[offers](../interfaces/IHotelPriceItemInfo.md#offers)

#### Defined in

[main.ts:193591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193591)

___


### price

• `Optional` **price**: `number`

price per night

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[price](../interfaces/IHotelPriceItemInfo.md#price)

#### Defined in

[main.ts:193572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193572)

___


### title

• `Optional` **title**: `string`

title of the hotel

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[title](../interfaces/IHotelPriceItemInfo.md#title)

#### Defined in

[main.ts:193570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193570)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[type](../interfaces/IHotelPriceItemInfo.md#type)

#### Defined in

[main.ts:193568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193568)

___


### url

• `Optional` **url**: `string`

third-party page url
URL to the third-party website page with pricing information

#### Implementation of

[IHotelPriceItemInfo](../interfaces/IHotelPriceItemInfo.md).[url](../interfaces/IHotelPriceItemInfo.md#url)

#### Defined in

[main.ts:193578](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193578)

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

[main.ts:193604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193604)

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

[main.ts:193633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193633)

___


### fromJS

▸ **fromJS**(`data`): [`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelPriceItemInfo`](HotelPriceItemInfo.md)

#### Defined in

[main.ts:193626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193626)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")