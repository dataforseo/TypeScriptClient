[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageIdListResultInfo

# Class: OnPageIdListResultInfo

## Implements

- [`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageIdListResultInfo.md#constructor)

### Properties

- [cost](OnPageIdListResultInfo.md#cost)
- [datetime\_done](OnPageIdListResultInfo.md#datetime_done)
- [datetime\_posted](OnPageIdListResultInfo.md#datetime_posted)
- [id](OnPageIdListResultInfo.md#id)
- [metadata](OnPageIdListResultInfo.md#metadata)
- [status](OnPageIdListResultInfo.md#status)
- [url](OnPageIdListResultInfo.md#url)

### Methods

- [init](OnPageIdListResultInfo.md#init)
- [toJSON](OnPageIdListResultInfo.md#tojson)
- [fromJS](OnPageIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageIdListResultInfo**(`data?`): [`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md) |

#### Returns

[`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Defined in

[main.ts:141585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141585)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[IOnPageIdListResultInfo](../interfaces/IOnPageIdListResultInfo.md).[cost](../interfaces/IOnPageIdListResultInfo.md#cost)

#### Defined in

[main.ts:141579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141579)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IOnPageIdListResultInfo](../interfaces/IOnPageIdListResultInfo.md).[datetime_done](../interfaces/IOnPageIdListResultInfo.md#datetime_done)

#### Defined in

[main.ts:141574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141574)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IOnPageIdListResultInfo](../interfaces/IOnPageIdListResultInfo.md).[datetime_posted](../interfaces/IOnPageIdListResultInfo.md#datetime_posted)

#### Defined in

[main.ts:141569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141569)

___


### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IOnPageIdListResultInfo](../interfaces/IOnPageIdListResultInfo.md).[id](../interfaces/IOnPageIdListResultInfo.md#id)

#### Defined in

[main.ts:141561](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141561)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IOnPageIdListResultInfo](../interfaces/IOnPageIdListResultInfo.md).[metadata](../interfaces/IOnPageIdListResultInfo.md#metadata)

#### Defined in

[main.ts:141581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141581)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IOnPageIdListResultInfo](../interfaces/IOnPageIdListResultInfo.md).[status](../interfaces/IOnPageIdListResultInfo.md#status)

#### Defined in

[main.ts:141577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141577)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[IOnPageIdListResultInfo](../interfaces/IOnPageIdListResultInfo.md).[url](../interfaces/IOnPageIdListResultInfo.md#url)

#### Defined in

[main.ts:141564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141564)

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

[main.ts:141594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141594)

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

[main.ts:141623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141623)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Defined in

[main.ts:141616](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141616)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")