[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingSerpCompetitorsLiveTaskInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsBingSerpCompetitorsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#data)
- [id](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#id)
- [path](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#path)
- [result](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingSerpCompetitorsLiveTaskInfo**(`data?`): [`DataforseoLabsBingSerpCompetitorsLiveTaskInfo`](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingSerpCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveTaskInfo`](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:107168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107168)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#cost)

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

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#data)

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

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#result)

#### Defined in

[main.ts:107164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107164)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveTaskInfo.md#time)

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

[main.ts:107172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107172)

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

[main.ts:107194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107194)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveTaskInfo`](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveTaskInfo`](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:107187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107187)
