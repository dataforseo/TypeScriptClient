[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRelatedKeywordsLiveTaskInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsBingRelatedKeywordsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#data)
- [id](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#id)
- [path](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#path)
- [result](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRelatedKeywordsLiveTaskInfo**(`data?`): [`DataforseoLabsBingRelatedKeywordsLiveTaskInfo`](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveTaskInfo`](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:106130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106130)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#cost)

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

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#data)

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

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#result)

#### Defined in

[main.ts:106126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106126)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveTaskInfo.md#time)

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

[main.ts:106134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106134)

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

[main.ts:106156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106156)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveTaskInfo`](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveTaskInfo`](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:106149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106149)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")