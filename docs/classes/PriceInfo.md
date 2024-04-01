[Documentation](../README.md) / [Exports](../modules.md) / PriceInfo

# Class: PriceInfo

## Implements

- [`IPriceInfo`](../interfaces/IPriceInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PriceInfo.md#constructor)

### Properties

- [currency](PriceInfo.md#currency)
- [current](PriceInfo.md#current)
- [displayed\_price](PriceInfo.md#displayed_price)
- [is\_price\_range](PriceInfo.md#is_price_range)
- [max\_value](PriceInfo.md#max_value)
- [regular](PriceInfo.md#regular)

### Methods

- [init](PriceInfo.md#init)
- [toJSON](PriceInfo.md#tojson)
- [fromJS](PriceInfo.md#fromjs)

## Constructors

### constructor

• **new PriceInfo**(`data?`): [`PriceInfo`](PriceInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPriceInfo`](../interfaces/IPriceInfo.md) |

#### Returns

[`PriceInfo`](PriceInfo.md)

#### Defined in

main.ts:21992

## Properties

### currency

• `Optional` **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[currency](../interfaces/IPriceInfo.md#currency)

#### Defined in

main.ts:21982

___

### current

• `Optional` **current**: `number`

current price
indicates the current price of the product or service featured in the result

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[current](../interfaces/IPriceInfo.md#current)

#### Defined in

main.ts:21973

___

### displayed\_price

• `Optional` **displayed\_price**: `string`

price string in the result
raw price string as provided in the result

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[displayed_price](../interfaces/IPriceInfo.md#displayed_price)

#### Defined in

main.ts:21988

___

### is\_price\_range

• `Optional` **is\_price\_range**: `boolean`

price is provided as a range
indicates whether a price is provided in a range

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[is_price_range](../interfaces/IPriceInfo.md#is_price_range)

#### Defined in

main.ts:21985

___

### max\_value

• `Optional` **max\_value**: `number`

the maximum price
the maximum price of the product or service as indicated in the result

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[max_value](../interfaces/IPriceInfo.md#max_value)

#### Defined in

main.ts:21979

___

### regular

• `Optional` **regular**: `number`

regular price
indicates the regular price of the product or service with no discounts applied

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[regular](../interfaces/IPriceInfo.md#regular)

#### Defined in

main.ts:21976

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

main.ts:22001

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

main.ts:22023

___

### fromJS

▸ **fromJS**(`data`): [`PriceInfo`](PriceInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PriceInfo`](PriceInfo.md)

#### Defined in

main.ts:22016
