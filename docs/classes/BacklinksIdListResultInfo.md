[Documentation](../README.md) / [Exports](../modules.md) / BacklinksIdListResultInfo

# Class: BacklinksIdListResultInfo

## Implements

- [`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksIdListResultInfo.md#constructor)

### Properties

- [cost](BacklinksIdListResultInfo.md#cost)
- [datetime\_done](BacklinksIdListResultInfo.md#datetime_done)
- [datetime\_posted](BacklinksIdListResultInfo.md#datetime_posted)
- [id](BacklinksIdListResultInfo.md#id)
- [metadata](BacklinksIdListResultInfo.md#metadata)
- [status](BacklinksIdListResultInfo.md#status)
- [url](BacklinksIdListResultInfo.md#url)

### Methods

- [init](BacklinksIdListResultInfo.md#init)
- [toJSON](BacklinksIdListResultInfo.md#tojson)
- [fromJS](BacklinksIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksIdListResultInfo**(`data?`): [`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md) |

#### Returns

[`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

#### Defined in

main.ts:128233

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[IBacklinksIdListResultInfo](../interfaces/IBacklinksIdListResultInfo.md).[cost](../interfaces/IBacklinksIdListResultInfo.md#cost)

#### Defined in

main.ts:128227

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IBacklinksIdListResultInfo](../interfaces/IBacklinksIdListResultInfo.md).[datetime_done](../interfaces/IBacklinksIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:128222

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IBacklinksIdListResultInfo](../interfaces/IBacklinksIdListResultInfo.md).[datetime_posted](../interfaces/IBacklinksIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:128217

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IBacklinksIdListResultInfo](../interfaces/IBacklinksIdListResultInfo.md).[id](../interfaces/IBacklinksIdListResultInfo.md#id)

#### Defined in

main.ts:128209

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IBacklinksIdListResultInfo](../interfaces/IBacklinksIdListResultInfo.md).[metadata](../interfaces/IBacklinksIdListResultInfo.md#metadata)

#### Defined in

main.ts:128229

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IBacklinksIdListResultInfo](../interfaces/IBacklinksIdListResultInfo.md).[status](../interfaces/IBacklinksIdListResultInfo.md#status)

#### Defined in

main.ts:128225

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[IBacklinksIdListResultInfo](../interfaces/IBacklinksIdListResultInfo.md).[url](../interfaces/IBacklinksIdListResultInfo.md#url)

#### Defined in

main.ts:128212

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

main.ts:128242

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

main.ts:128271

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

#### Defined in

main.ts:128264
