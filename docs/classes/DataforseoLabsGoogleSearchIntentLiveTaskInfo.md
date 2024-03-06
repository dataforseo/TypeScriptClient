[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSearchIntentLiveTaskInfo

# Class: DataforseoLabsGoogleSearchIntentLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleSearchIntentLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSearchIntentLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleSearchIntentLiveTaskInfo`](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSearchIntentLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveTaskInfo`](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:83000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83000)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#result)

#### Defined in

[main.ts:82996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82996)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleSearchIntentLiveTaskInfo.md#time)

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

[main.ts:83004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83004)

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

[main.ts:83026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83026)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveTaskInfo`](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveTaskInfo`](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:83019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83019)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")