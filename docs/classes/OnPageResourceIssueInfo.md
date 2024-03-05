[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageResourceIssueInfo

# Class: OnPageResourceIssueInfo

resource errors and warnings

## Implements

- [`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageResourceIssueInfo.md#constructor)

### Properties

- [errors](OnPageResourceIssueInfo.md#errors)
- [warnings](OnPageResourceIssueInfo.md#warnings)

### Methods

- [init](OnPageResourceIssueInfo.md#init)
- [toJSON](OnPageResourceIssueInfo.md#tojson)
- [fromJS](OnPageResourceIssueInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageResourceIssueInfo**(`data?`): [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md) |

#### Returns

[`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Defined in

[main.ts:144672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144672)

## Properties

### errors

• `Optional` **errors**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

resource errors

#### Implementation of

[IOnPageResourceIssueInfo](../interfaces/IOnPageResourceIssueInfo.md).[errors](../interfaces/IOnPageResourceIssueInfo.md#errors)

#### Defined in

[main.ts:144666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144666)

___

### warnings

• `Optional` **warnings**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

resource warnings

#### Implementation of

[IOnPageResourceIssueInfo](../interfaces/IOnPageResourceIssueInfo.md).[warnings](../interfaces/IOnPageResourceIssueInfo.md#warnings)

#### Defined in

[main.ts:144668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144668)

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

[main.ts:144681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144681)

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

[main.ts:144707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144707)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Defined in

[main.ts:144700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144700)
