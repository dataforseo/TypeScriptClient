[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisIdListResultInfo

# Class: ContentAnalysisIdListResultInfo

## Implements

- [`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisIdListResultInfo.md#constructor)

### Properties

- [cost](ContentAnalysisIdListResultInfo.md#cost)
- [datetime\_done](ContentAnalysisIdListResultInfo.md#datetime_done)
- [datetime\_posted](ContentAnalysisIdListResultInfo.md#datetime_posted)
- [id](ContentAnalysisIdListResultInfo.md#id)
- [metadata](ContentAnalysisIdListResultInfo.md#metadata)
- [status](ContentAnalysisIdListResultInfo.md#status)
- [url](ContentAnalysisIdListResultInfo.md#url)

### Methods

- [init](ContentAnalysisIdListResultInfo.md#init)
- [toJSON](ContentAnalysisIdListResultInfo.md#tojson)
- [fromJS](ContentAnalysisIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisIdListResultInfo**(`data?`): [`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md) |

#### Returns

[`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Defined in

main.ts:155299

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[IContentAnalysisIdListResultInfo](../interfaces/IContentAnalysisIdListResultInfo.md).[cost](../interfaces/IContentAnalysisIdListResultInfo.md#cost)

#### Defined in

main.ts:155293

___

### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IContentAnalysisIdListResultInfo](../interfaces/IContentAnalysisIdListResultInfo.md).[datetime_done](../interfaces/IContentAnalysisIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:155288

___

### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IContentAnalysisIdListResultInfo](../interfaces/IContentAnalysisIdListResultInfo.md).[datetime_posted](../interfaces/IContentAnalysisIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:155283

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IContentAnalysisIdListResultInfo](../interfaces/IContentAnalysisIdListResultInfo.md).[id](../interfaces/IContentAnalysisIdListResultInfo.md#id)

#### Defined in

main.ts:155275

___

### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IContentAnalysisIdListResultInfo](../interfaces/IContentAnalysisIdListResultInfo.md).[metadata](../interfaces/IContentAnalysisIdListResultInfo.md#metadata)

#### Defined in

main.ts:155295

___

### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IContentAnalysisIdListResultInfo](../interfaces/IContentAnalysisIdListResultInfo.md).[status](../interfaces/IContentAnalysisIdListResultInfo.md#status)

#### Defined in

main.ts:155291

___

### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[IContentAnalysisIdListResultInfo](../interfaces/IContentAnalysisIdListResultInfo.md).[url](../interfaces/IContentAnalysisIdListResultInfo.md#url)

#### Defined in

main.ts:155278

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

main.ts:155308

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

main.ts:155337

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Defined in

main.ts:155330
