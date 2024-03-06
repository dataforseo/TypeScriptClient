[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo

# Class: DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:82110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82110)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#result)

#### Defined in

[main.ts:82106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82106)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md#time)

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

[main.ts:82114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82114)

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

[main.ts:82136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82136)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:82129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82129)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")