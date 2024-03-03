[Documentation](../README.md) / [Exports](../modules.md) / OnPageLighthouseAuditsResultInfo

# Class: OnPageLighthouseAuditsResultInfo

## Implements

- [`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseAuditsResultInfo.md#constructor)

### Properties

- [audits](OnPageLighthouseAuditsResultInfo.md#audits)

### Methods

- [init](OnPageLighthouseAuditsResultInfo.md#init)
- [toJSON](OnPageLighthouseAuditsResultInfo.md#tojson)
- [fromJS](OnPageLighthouseAuditsResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseAuditsResultInfo**(`data?`): [`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md) |

#### Returns

[`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

#### Defined in

main.ts:153827

## Properties

### audits

• `Optional` **audits**: `string`[]

the list of available lighthouse audits
an array containing the titles of available audits
Note: the titles can change depending on if the audit passed or failed and may contain markdown code

#### Implementation of

[IOnPageLighthouseAuditsResultInfo](../interfaces/IOnPageLighthouseAuditsResultInfo.md).[audits](../interfaces/IOnPageLighthouseAuditsResultInfo.md#audits)

#### Defined in

main.ts:153823

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

main.ts:153836

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

main.ts:153857

___

### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

#### Defined in

main.ts:153850
