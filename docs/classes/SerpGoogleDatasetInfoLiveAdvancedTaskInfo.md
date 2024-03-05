[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoLiveAdvancedTaskInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleDatasetInfoLiveAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#cost)
- [data](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#data)
- [id](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#id)
- [path](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#path)
- [result](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoLiveAdvancedTaskInfo**(`data?`): [`SerpGoogleDatasetInfoLiveAdvancedTaskInfo`](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedTaskInfo`](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:53014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53014)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#cost)

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

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#data)

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

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:53010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53010)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedTaskInfo.md#time)

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

[main.ts:53018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53018)

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

[main.ts:53040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53040)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedTaskInfo`](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedTaskInfo`](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:53033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53033)
