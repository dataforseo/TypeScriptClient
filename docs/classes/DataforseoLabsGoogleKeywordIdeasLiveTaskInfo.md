[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordIdeasLiveTaskInfo

# Class: DataforseoLabsGoogleKeywordIdeasLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleKeywordIdeasLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordIdeasLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleKeywordIdeasLiveTaskInfo`](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveTaskInfo`](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:81632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81632)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#result)

#### Defined in

[main.ts:81628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81628)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md#time)

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

[main.ts:81636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81636)

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

[main.ts:81658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81658)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordIdeasLiveTaskInfo`](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveTaskInfo`](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:81651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81651)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")