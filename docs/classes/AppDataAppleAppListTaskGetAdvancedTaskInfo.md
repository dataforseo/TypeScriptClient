[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppListTaskGetAdvancedTaskInfo

# Class: AppDataAppleAppListTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataAppleAppListTaskGetAdvancedTaskInfo`**

## Implements

- [`IAppDataAppleAppListTaskGetAdvancedTaskInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#cost)
- [data](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#data)
- [id](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#id)
- [path](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#path)
- [result](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#result)
- [result\_count](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#status_message)
- [time](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#init)
- [toJSON](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppListTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListTaskGetAdvancedTaskInfo**(`data?`): [`AppDataAppleAppListTaskGetAdvancedTaskInfo`](AppDataAppleAppListTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListTaskGetAdvancedTaskInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md) |

#### Returns

[`AppDataAppleAppListTaskGetAdvancedTaskInfo`](AppDataAppleAppListTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:185548](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185548)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#cost)

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

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[data](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#data)

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

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[id](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[path](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[result](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:185544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185544)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#result_count)

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

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#status_code)

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

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedTaskInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md).[time](../interfaces/IAppDataAppleAppListTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:185552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185552)

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

[main.ts:185574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185574)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListTaskGetAdvancedTaskInfo`](AppDataAppleAppListTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListTaskGetAdvancedTaskInfo`](AppDataAppleAppListTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:185567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185567)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")