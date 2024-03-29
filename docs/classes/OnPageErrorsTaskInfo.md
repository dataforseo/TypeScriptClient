[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageErrorsTaskInfo

# Class: OnPageErrorsTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`OnPageErrorsTaskInfo`**

## Implements

- [`IOnPageErrorsTaskInfo`](../interfaces/IOnPageErrorsTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageErrorsTaskInfo.md#constructor)

### Properties

- [cost](OnPageErrorsTaskInfo.md#cost)
- [data](OnPageErrorsTaskInfo.md#data)
- [id](OnPageErrorsTaskInfo.md#id)
- [path](OnPageErrorsTaskInfo.md#path)
- [result](OnPageErrorsTaskInfo.md#result)
- [result\_count](OnPageErrorsTaskInfo.md#result_count)
- [status\_code](OnPageErrorsTaskInfo.md#status_code)
- [status\_message](OnPageErrorsTaskInfo.md#status_message)
- [time](OnPageErrorsTaskInfo.md#time)

### Methods

- [init](OnPageErrorsTaskInfo.md#init)
- [toJSON](OnPageErrorsTaskInfo.md#tojson)
- [fromJS](OnPageErrorsTaskInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageErrorsTaskInfo**(`data?`): [`OnPageErrorsTaskInfo`](OnPageErrorsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageErrorsTaskInfo`](../interfaces/IOnPageErrorsTaskInfo.md) |

#### Returns

[`OnPageErrorsTaskInfo`](OnPageErrorsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:142021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142021)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[cost](../interfaces/IOnPageErrorsTaskInfo.md#cost)

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

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[data](../interfaces/IOnPageErrorsTaskInfo.md#data)

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

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[id](../interfaces/IOnPageErrorsTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[path](../interfaces/IOnPageErrorsTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)[]

array of results

#### Implementation of

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[result](../interfaces/IOnPageErrorsTaskInfo.md#result)

#### Defined in

[main.ts:142017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142017)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[result_count](../interfaces/IOnPageErrorsTaskInfo.md#result_count)

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

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[status_code](../interfaces/IOnPageErrorsTaskInfo.md#status_code)

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

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[status_message](../interfaces/IOnPageErrorsTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IOnPageErrorsTaskInfo](../interfaces/IOnPageErrorsTaskInfo.md).[time](../interfaces/IOnPageErrorsTaskInfo.md#time)

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

[main.ts:142025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142025)

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

[main.ts:142047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142047)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageErrorsTaskInfo`](OnPageErrorsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageErrorsTaskInfo`](OnPageErrorsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:142040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142040)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")