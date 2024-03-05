[dataforseo-client](../README.md) / [Exports](../modules.md) / TestSummary

# Class: TestSummary

## Implements

- [`ITestSummary`](../interfaces/ITestSummary.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TestSummary.md#constructor)

### Properties

- [error](TestSummary.md#error)
- [fatal](TestSummary.md#fatal)
- [info](TestSummary.md#info)
- [warning](TestSummary.md#warning)

### Methods

- [init](TestSummary.md#init)
- [toJSON](TestSummary.md#tojson)
- [fromJS](TestSummary.md#fromjs)

## Constructors

### constructor

• **new TestSummary**(`data?`): [`TestSummary`](TestSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITestSummary`](../interfaces/ITestSummary.md) |

#### Returns

[`TestSummary`](TestSummary.md)

#### Defined in

[main.ts:150591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150591)

## Properties

### error

• `Optional` **error**: `number`

number of serious microdata errors

#### Implementation of

[ITestSummary](../interfaces/ITestSummary.md).[error](../interfaces/ITestSummary.md#error)

#### Defined in

[main.ts:150583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150583)

___

### fatal

• `Optional` **fatal**: `number`

number of fatal microdata errors

#### Implementation of

[ITestSummary](../interfaces/ITestSummary.md).[fatal](../interfaces/ITestSummary.md#fatal)

#### Defined in

[main.ts:150581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150581)

___

### info

• `Optional` **info**: `number`

number of microdata information flags

#### Implementation of

[ITestSummary](../interfaces/ITestSummary.md).[info](../interfaces/ITestSummary.md#info)

#### Defined in

[main.ts:150587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150587)

___

### warning

• `Optional` **warning**: `number`

number of microdata warnings

#### Implementation of

[ITestSummary](../interfaces/ITestSummary.md).[warning](../interfaces/ITestSummary.md#warning)

#### Defined in

[main.ts:150585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150585)

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

[main.ts:150600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150600)

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

[main.ts:150620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150620)

___

### fromJS

▸ **fromJS**(`data`): [`TestSummary`](TestSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TestSummary`](TestSummary.md)

#### Defined in

[main.ts:150613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150613)
