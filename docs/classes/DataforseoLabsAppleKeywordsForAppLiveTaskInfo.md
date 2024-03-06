[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleKeywordsForAppLiveTaskInfo

# Class: DataforseoLabsAppleKeywordsForAppLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsAppleKeywordsForAppLiveTaskInfo`**

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveTaskInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#cost)
- [data](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#data)
- [id](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#id)
- [path](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#path)
- [result](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#status_message)
- [time](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleKeywordsForAppLiveTaskInfo**(`data?`): [`DataforseoLabsAppleKeywordsForAppLiveTaskInfo`](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleKeywordsForAppLiveTaskInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveTaskInfo`](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:111000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111000)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#cost)

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

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#data)

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

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#result)

#### Defined in

[main.ts:110996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110996)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#result_count)

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

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#status_code)

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

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveTaskInfo.md#time)

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

[main.ts:111004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111004)

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

[main.ts:111026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111026)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveTaskInfo`](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveTaskInfo`](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:111019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111019)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")