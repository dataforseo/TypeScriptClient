[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordsForAppLiveTaskInfo

# Class: DataforseoLabsGoogleKeywordsForAppLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleKeywordsForAppLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordsForAppLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleKeywordsForAppLiveTaskInfo`](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveTaskInfo`](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:108868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108868)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#result)

#### Defined in

[main.ts:108864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108864)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md#time)

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

[main.ts:108872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108872)

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

[main.ts:108894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108894)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveTaskInfo`](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveTaskInfo`](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:108887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108887)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")