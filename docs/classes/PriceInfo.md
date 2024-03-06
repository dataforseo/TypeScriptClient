[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / PriceInfo

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

[main.ts:21473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21473)

## Properties

### currency

• `Optional` **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[currency](../interfaces/IPriceInfo.md#currency)

#### Defined in

[main.ts:21463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21463)

___


### current

• `Optional` **current**: `number`

current price
indicates the current price of the product or service featured in the result

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[current](../interfaces/IPriceInfo.md#current)

#### Defined in

[main.ts:21454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21454)

___


### displayed\_price

• `Optional` **displayed\_price**: `string`

price string in the result
raw price string as provided in the result

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[displayed_price](../interfaces/IPriceInfo.md#displayed_price)

#### Defined in

[main.ts:21469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21469)

___


### is\_price\_range

• `Optional` **is\_price\_range**: `boolean`

price is provided as a range
indicates whether a price is provided in a range

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[is_price_range](../interfaces/IPriceInfo.md#is_price_range)

#### Defined in

[main.ts:21466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21466)

___


### max\_value

• `Optional` **max\_value**: `number`

the maximum price
the maximum price of the product or service as indicated in the result

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[max_value](../interfaces/IPriceInfo.md#max_value)

#### Defined in

[main.ts:21460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21460)

___


### regular

• `Optional` **regular**: `number`

regular price
indicates the regular price of the product or service with no discounts applied

#### Implementation of

[IPriceInfo](../interfaces/IPriceInfo.md).[regular](../interfaces/IPriceInfo.md#regular)

#### Defined in

[main.ts:21457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21457)

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

[main.ts:21482](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21482)

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

[main.ts:21504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21504)

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

[main.ts:21497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21497)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")