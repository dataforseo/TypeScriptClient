[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataIdListResultInfo

# Class: BusinessDataIdListResultInfo

## Implements

- [`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataIdListResultInfo.md#constructor)

### Properties

- [cost](BusinessDataIdListResultInfo.md#cost)
- [datetime\_done](BusinessDataIdListResultInfo.md#datetime_done)
- [datetime\_posted](BusinessDataIdListResultInfo.md#datetime_posted)
- [id](BusinessDataIdListResultInfo.md#id)
- [metadata](BusinessDataIdListResultInfo.md#metadata)
- [status](BusinessDataIdListResultInfo.md#status)
- [url](BusinessDataIdListResultInfo.md#url)

### Methods

- [init](BusinessDataIdListResultInfo.md#init)
- [toJSON](BusinessDataIdListResultInfo.md#tojson)
- [fromJS](BusinessDataIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataIdListResultInfo**(`data?`): [`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md) |

#### Returns

[`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Defined in

main.ts:192745

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[IBusinessDataIdListResultInfo](../interfaces/IBusinessDataIdListResultInfo.md).[cost](../interfaces/IBusinessDataIdListResultInfo.md#cost)

#### Defined in

main.ts:192739

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataIdListResultInfo](../interfaces/IBusinessDataIdListResultInfo.md).[datetime_done](../interfaces/IBusinessDataIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:192734

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataIdListResultInfo](../interfaces/IBusinessDataIdListResultInfo.md).[datetime_posted](../interfaces/IBusinessDataIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:192729

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IBusinessDataIdListResultInfo](../interfaces/IBusinessDataIdListResultInfo.md).[id](../interfaces/IBusinessDataIdListResultInfo.md#id)

#### Defined in

main.ts:192721

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IBusinessDataIdListResultInfo](../interfaces/IBusinessDataIdListResultInfo.md).[metadata](../interfaces/IBusinessDataIdListResultInfo.md#metadata)

#### Defined in

main.ts:192741

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IBusinessDataIdListResultInfo](../interfaces/IBusinessDataIdListResultInfo.md).[status](../interfaces/IBusinessDataIdListResultInfo.md#status)

#### Defined in

main.ts:192737

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[IBusinessDataIdListResultInfo](../interfaces/IBusinessDataIdListResultInfo.md).[url](../interfaces/IBusinessDataIdListResultInfo.md#url)

#### Defined in

main.ts:192724

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

main.ts:192754

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

main.ts:192783

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Defined in

main.ts:192776
