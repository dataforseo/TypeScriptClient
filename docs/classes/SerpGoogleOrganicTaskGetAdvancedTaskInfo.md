[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskGetAdvancedTaskInfo

# Class: SerpGoogleOrganicTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleOrganicTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleOrganicTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#data)
- [id](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#id)
- [path](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#path)
- [result](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskGetAdvancedTaskInfo**(`data?`): [`SerpGoogleOrganicTaskGetAdvancedTaskInfo`](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedTaskInfo`](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:36176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36176)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#data)

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

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:36172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36172)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:36180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36180)

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

[main.ts:36202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36202)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskGetAdvancedTaskInfo`](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedTaskInfo`](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:36195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36195)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")