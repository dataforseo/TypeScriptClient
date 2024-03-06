[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskGetAdvancedTaskInfo

# Class: SerpYahooOrganicTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYahooOrganicTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpYahooOrganicTaskGetAdvancedTaskInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#data)
- [id](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#id)
- [path](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#path)
- [result](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskGetAdvancedTaskInfo**(`data?`): [`SerpYahooOrganicTaskGetAdvancedTaskInfo`](SerpYahooOrganicTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskGetAdvancedTaskInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpYahooOrganicTaskGetAdvancedTaskInfo`](SerpYahooOrganicTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:64142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64142)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#data)

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

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:64138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64138)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedTaskInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpYahooOrganicTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:64146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64146)

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

[main.ts:64168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64168)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskGetAdvancedTaskInfo`](SerpYahooOrganicTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskGetAdvancedTaskInfo`](SerpYahooOrganicTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:64161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64161)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")