[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo

# Class: SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#data)
- [id](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#id)
- [path](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#path)
- [result](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo**(`data?`): [`SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo`](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo`](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:52646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52646)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#data)

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

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:52642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52642)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:52650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52650)

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

[main.ts:52672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52672)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo`](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo`](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:52665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52665)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")