[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpIdListResultInfo

# Class: SerpIdListResultInfo

## Implements

- [`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpIdListResultInfo.md#constructor)

### Properties

- [cost](SerpIdListResultInfo.md#cost)
- [datetime\_done](SerpIdListResultInfo.md#datetime_done)
- [datetime\_posted](SerpIdListResultInfo.md#datetime_posted)
- [id](SerpIdListResultInfo.md#id)
- [metadata](SerpIdListResultInfo.md#metadata)
- [status](SerpIdListResultInfo.md#status)
- [url](SerpIdListResultInfo.md#url)

### Methods

- [init](SerpIdListResultInfo.md#init)
- [toJSON](SerpIdListResultInfo.md#tojson)
- [fromJS](SerpIdListResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpIdListResultInfo**(`data?`): [`SerpIdListResultInfo`](SerpIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md) |

#### Returns

[`SerpIdListResultInfo`](SerpIdListResultInfo.md)

#### Defined in

[main.ts:22858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22858)

## Properties

### cost

• `Optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[ISerpIdListResultInfo](../interfaces/ISerpIdListResultInfo.md).[cost](../interfaces/ISerpIdListResultInfo.md#cost)

#### Defined in

[main.ts:22852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22852)

___


### datetime\_done

• `Optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[ISerpIdListResultInfo](../interfaces/ISerpIdListResultInfo.md).[datetime_done](../interfaces/ISerpIdListResultInfo.md#datetime_done)

#### Defined in

[main.ts:22847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22847)

___


### datetime\_posted

• `Optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[ISerpIdListResultInfo](../interfaces/ISerpIdListResultInfo.md).[datetime_posted](../interfaces/ISerpIdListResultInfo.md#datetime_posted)

#### Defined in

[main.ts:22842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22842)

___


### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[ISerpIdListResultInfo](../interfaces/ISerpIdListResultInfo.md).[id](../interfaces/ISerpIdListResultInfo.md#id)

#### Defined in

[main.ts:22834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22834)

___


### metadata

• `Optional` **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[ISerpIdListResultInfo](../interfaces/ISerpIdListResultInfo.md).[metadata](../interfaces/ISerpIdListResultInfo.md#metadata)

#### Defined in

[main.ts:22854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22854)

___


### status

• `Optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[ISerpIdListResultInfo](../interfaces/ISerpIdListResultInfo.md).[status](../interfaces/ISerpIdListResultInfo.md#status)

#### Defined in

[main.ts:22850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22850)

___


### url

• `Optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[ISerpIdListResultInfo](../interfaces/ISerpIdListResultInfo.md).[url](../interfaces/ISerpIdListResultInfo.md#url)

#### Defined in

[main.ts:22837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22837)

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

[main.ts:22867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22867)

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

[main.ts:22896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22896)

___


### fromJS

▸ **fromJS**(`data`): [`SerpIdListResultInfo`](SerpIdListResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpIdListResultInfo`](SerpIdListResultInfo.md)

#### Defined in

[main.ts:22889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22889)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")