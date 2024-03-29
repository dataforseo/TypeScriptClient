[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTaskPostTaskInfo

# Class: SerpGoogleDatasetInfoTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleDatasetInfoTaskPostTaskInfo`**

## Implements

- [`ISerpGoogleDatasetInfoTaskPostTaskInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetInfoTaskPostTaskInfo.md#cost)
- [data](SerpGoogleDatasetInfoTaskPostTaskInfo.md#data)
- [id](SerpGoogleDatasetInfoTaskPostTaskInfo.md#id)
- [path](SerpGoogleDatasetInfoTaskPostTaskInfo.md#path)
- [result](SerpGoogleDatasetInfoTaskPostTaskInfo.md#result)
- [result\_count](SerpGoogleDatasetInfoTaskPostTaskInfo.md#result_count)
- [status\_code](SerpGoogleDatasetInfoTaskPostTaskInfo.md#status_code)
- [status\_message](SerpGoogleDatasetInfoTaskPostTaskInfo.md#status_message)
- [time](SerpGoogleDatasetInfoTaskPostTaskInfo.md#time)

### Methods

- [init](SerpGoogleDatasetInfoTaskPostTaskInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTaskPostTaskInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTaskPostTaskInfo**(`data?`): [`SerpGoogleDatasetInfoTaskPostTaskInfo`](SerpGoogleDatasetInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTaskPostTaskInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTaskPostTaskInfo`](SerpGoogleDatasetInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:51983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51983)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[cost](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#cost)

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

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[data](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#data)

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

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[id](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[path](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[result](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:51979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51979)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[result_count](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#result_count)

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

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[status_code](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#status_code)

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

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[status_message](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostTaskInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md).[time](../interfaces/ISerpGoogleDatasetInfoTaskPostTaskInfo.md#time)

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

[main.ts:51987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51987)

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

[main.ts:52005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52005)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskPostTaskInfo`](SerpGoogleDatasetInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTaskPostTaskInfo`](SerpGoogleDatasetInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:51998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51998)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")