[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:96616](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96616)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#result)

#### Defined in

[main.ts:96612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96612)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md#time)

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

[main.ts:96620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96620)

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

[main.ts:96642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96642)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:96635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96635)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")