[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskGetRegularTaskInfo

# Class: SerpGoogleOrganicTaskGetRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleOrganicTaskGetRegularTaskInfo`**

## Implements

- [`ISerpGoogleOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskGetRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTaskGetRegularTaskInfo.md#cost)
- [data](SerpGoogleOrganicTaskGetRegularTaskInfo.md#data)
- [id](SerpGoogleOrganicTaskGetRegularTaskInfo.md#id)
- [path](SerpGoogleOrganicTaskGetRegularTaskInfo.md#path)
- [result](SerpGoogleOrganicTaskGetRegularTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicTaskGetRegularTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicTaskGetRegularTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTaskGetRegularTaskInfo.md#status_message)
- [time](SerpGoogleOrganicTaskGetRegularTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicTaskGetRegularTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskGetRegularTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskGetRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskGetRegularTaskInfo**(`data?`): [`SerpGoogleOrganicTaskGetRegularTaskInfo`](SerpGoogleOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskGetRegularTaskInfo`](SerpGoogleOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:26008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26008)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#result)

#### Defined in

[main.ts:26004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26004)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicTaskGetRegularTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:26012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26012)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:26034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26034)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskGetRegularTaskInfo`](SerpGoogleOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskGetRegularTaskInfo`](SerpGoogleOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:26027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26027)
