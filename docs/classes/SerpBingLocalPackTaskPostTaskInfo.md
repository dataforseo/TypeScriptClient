[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTaskPostTaskInfo

# Class: SerpBingLocalPackTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingLocalPackTaskPostTaskInfo`**

## Implements

- [`ISerpBingLocalPackTaskPostTaskInfo`](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTaskPostTaskInfo.md#cost)
- [data](SerpBingLocalPackTaskPostTaskInfo.md#data)
- [id](SerpBingLocalPackTaskPostTaskInfo.md#id)
- [path](SerpBingLocalPackTaskPostTaskInfo.md#path)
- [result](SerpBingLocalPackTaskPostTaskInfo.md#result)
- [result\_count](SerpBingLocalPackTaskPostTaskInfo.md#result_count)
- [status\_code](SerpBingLocalPackTaskPostTaskInfo.md#status_code)
- [status\_message](SerpBingLocalPackTaskPostTaskInfo.md#status_message)
- [time](SerpBingLocalPackTaskPostTaskInfo.md#time)

### Methods

- [init](SerpBingLocalPackTaskPostTaskInfo.md#init)
- [toJSON](SerpBingLocalPackTaskPostTaskInfo.md#tojson)
- [fromJS](SerpBingLocalPackTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTaskPostTaskInfo**(`data?`): [`SerpBingLocalPackTaskPostTaskInfo`](SerpBingLocalPackTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTaskPostTaskInfo`](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md) |

#### Returns

[`SerpBingLocalPackTaskPostTaskInfo`](SerpBingLocalPackTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:55693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55693)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[cost](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#cost)

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

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[data](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#data)

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

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[id](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[path](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#path)

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

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[result](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:55689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55689)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[result_count](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#result_count)

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

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[status_code](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#status_code)

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

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[status_message](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingLocalPackTaskPostTaskInfo](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md).[time](../interfaces/ISerpBingLocalPackTaskPostTaskInfo.md#time)

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

[main.ts:55697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55697)

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

[main.ts:55715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55715)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTaskPostTaskInfo`](SerpBingLocalPackTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTaskPostTaskInfo`](SerpBingLocalPackTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:55708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55708)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")