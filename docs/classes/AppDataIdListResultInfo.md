[Documentation](../README.md) / [Exports](../modules.md) / AppDataIdListResultInfo

# Class: AppDataIdListResultInfo

## Implements

- [`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataIdListResultInfo.md#constructor)

### Properties

- [cost](AppDataIdListResultInfo.md#cost)
- [datetime\_done](AppDataIdListResultInfo.md#datetime_done)
- [datetime\_posted](AppDataIdListResultInfo.md#datetime_posted)
- [id](AppDataIdListResultInfo.md#id)
- [metadata](AppDataIdListResultInfo.md#metadata)
- [status](AppDataIdListResultInfo.md#status)
- [url](AppDataIdListResultInfo.md#url)

### Methods

- [init](AppDataIdListResultInfo.md#init)
- [toJSON](AppDataIdListResultInfo.md#tojson)
- [fromJS](AppDataIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataIdListResultInfo**(`data?`): [`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md) |

#### Returns

[`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Defined in

main.ts:181879

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[IAppDataIdListResultInfo](../interfaces/IAppDataIdListResultInfo.md).[cost](../interfaces/IAppDataIdListResultInfo.md#cost)

#### Defined in

main.ts:181873

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IAppDataIdListResultInfo](../interfaces/IAppDataIdListResultInfo.md).[datetime_done](../interfaces/IAppDataIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:181868

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IAppDataIdListResultInfo](../interfaces/IAppDataIdListResultInfo.md).[datetime_posted](../interfaces/IAppDataIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:181863

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IAppDataIdListResultInfo](../interfaces/IAppDataIdListResultInfo.md).[id](../interfaces/IAppDataIdListResultInfo.md#id)

#### Defined in

main.ts:181855

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IAppDataIdListResultInfo](../interfaces/IAppDataIdListResultInfo.md).[metadata](../interfaces/IAppDataIdListResultInfo.md#metadata)

#### Defined in

main.ts:181875

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IAppDataIdListResultInfo](../interfaces/IAppDataIdListResultInfo.md).[status](../interfaces/IAppDataIdListResultInfo.md#status)

#### Defined in

main.ts:181871

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[IAppDataIdListResultInfo](../interfaces/IAppDataIdListResultInfo.md).[url](../interfaces/IAppDataIdListResultInfo.md#url)

#### Defined in

main.ts:181858

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

main.ts:181888

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

main.ts:181917

___

### fromJS

▸ **fromJS**(`data`): [`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Defined in

main.ts:181910
