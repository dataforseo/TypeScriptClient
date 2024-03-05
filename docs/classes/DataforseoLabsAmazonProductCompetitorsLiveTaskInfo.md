[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductCompetitorsLiveTaskInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsAmazonProductCompetitorsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#cost)
- [data](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#data)
- [id](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#id)
- [path](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#path)
- [result](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductCompetitorsLiveTaskInfo**(`data?`): [`DataforseoLabsAmazonProductCompetitorsLiveTaskInfo`](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveTaskInfo`](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:101416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101416)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#cost)

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

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#data)

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

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#result)

#### Defined in

[main.ts:101412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101412)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md#time)

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

[main.ts:101420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101420)

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

[main.ts:101442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101442)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveTaskInfo`](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveTaskInfo`](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:101435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101435)
