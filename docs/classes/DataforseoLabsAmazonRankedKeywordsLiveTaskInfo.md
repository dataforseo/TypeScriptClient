[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRankedKeywordsLiveTaskInfo

# Class: DataforseoLabsAmazonRankedKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsAmazonRankedKeywordsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#cost)
- [data](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#data)
- [id](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#id)
- [path](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#path)
- [result](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRankedKeywordsLiveTaskInfo**(`data?`): [`DataforseoLabsAmazonRankedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:100316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100316)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#cost)

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

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#data)

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

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#result)

#### Defined in

[main.ts:100312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100312)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md#time)

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

[main.ts:100320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100320)

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

[main.ts:100342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100342)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:100335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100335)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")