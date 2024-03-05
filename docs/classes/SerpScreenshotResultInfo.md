[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpScreenshotResultInfo

# Class: SerpScreenshotResultInfo

## Implements

- [`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpScreenshotResultInfo.md#constructor)

### Properties

- [items](SerpScreenshotResultInfo.md#items)
- [items\_count](SerpScreenshotResultInfo.md#items_count)

### Methods

- [init](SerpScreenshotResultInfo.md#init)
- [toJSON](SerpScreenshotResultInfo.md#tojson)
- [fromJS](SerpScreenshotResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpScreenshotResultInfo**(`data?`): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md) |

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Defined in

[main.ts:23560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23560)

## Properties

### items

• `Optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

items array

#### Implementation of

[ISerpScreenshotResultInfo](../interfaces/ISerpScreenshotResultInfo.md).[items](../interfaces/ISerpScreenshotResultInfo.md#items)

#### Defined in

[main.ts:23556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23556)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[ISerpScreenshotResultInfo](../interfaces/ISerpScreenshotResultInfo.md).[items_count](../interfaces/ISerpScreenshotResultInfo.md#items_count)

#### Defined in

[main.ts:23554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23554)

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

[main.ts:23569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23569)

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

[main.ts:23591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23591)

___

### fromJS

▸ **fromJS**(`data`): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Defined in

[main.ts:23584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23584)
