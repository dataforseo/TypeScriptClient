[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTaskGetAdvancedTaskInfo

# Class: SerpGoogleEventsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleEventsTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleEventsTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#data)
- [id](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#id)
- [path](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#path)
- [result](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleEventsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTaskGetAdvancedTaskInfo**(`data?`): [`SerpGoogleEventsTaskGetAdvancedTaskInfo`](SerpGoogleEventsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleEventsTaskGetAdvancedTaskInfo`](SerpGoogleEventsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:44956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44956)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#data)

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

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:44952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44952)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleEventsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:44960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44960)

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

[main.ts:44982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44982)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTaskGetAdvancedTaskInfo`](SerpGoogleEventsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTaskGetAdvancedTaskInfo`](SerpGoogleEventsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:44975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44975)
