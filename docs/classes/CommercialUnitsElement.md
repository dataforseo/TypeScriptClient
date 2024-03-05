[dataforseo-client](../README.md) / [Exports](../modules.md) / CommercialUnitsElement

# Class: CommercialUnitsElement

## Implements

- [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CommercialUnitsElement.md#constructor)

### Properties

- [domain](CommercialUnitsElement.md#domain)
- [price](CommercialUnitsElement.md#price)
- [rating](CommercialUnitsElement.md#rating)
- [source](CommercialUnitsElement.md#source)
- [title](CommercialUnitsElement.md#title)
- [type](CommercialUnitsElement.md#type)
- [url](CommercialUnitsElement.md#url)

### Methods

- [init](CommercialUnitsElement.md#init)
- [toJSON](CommercialUnitsElement.md#tojson)
- [fromJS](CommercialUnitsElement.md#fromjs)

## Constructors

### constructor

• **new CommercialUnitsElement**(`data?`): [`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md) |

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Defined in

[main.ts:33404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33404)

## Properties

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[domain](../interfaces/ICommercialUnitsElement.md#domain)

#### Defined in

[main.ts:33392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33392)

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of booking a place for the specified dates of stay

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[price](../interfaces/ICommercialUnitsElement.md#price)

#### Defined in

[main.ts:33394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33394)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[rating](../interfaces/ICommercialUnitsElement.md#rating)

#### Defined in

[main.ts:33400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33400)

___

### source

• `Optional` **source**: `string`

web source of the hotel booking element
indicates the source of information included in the element

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[source](../interfaces/ICommercialUnitsElement.md#source)

#### Defined in

[main.ts:33397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33397)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[title](../interfaces/ICommercialUnitsElement.md#title)

#### Defined in

[main.ts:33388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33388)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[type](../interfaces/ICommercialUnitsElement.md#type)

#### Defined in

[main.ts:33386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33386)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[url](../interfaces/ICommercialUnitsElement.md#url)

#### Defined in

[main.ts:33390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33390)

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

[main.ts:33413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33413)

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

[main.ts:33436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33436)

___

### fromJS

▸ **fromJS**(`data`): [`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Defined in

[main.ts:33429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33429)
