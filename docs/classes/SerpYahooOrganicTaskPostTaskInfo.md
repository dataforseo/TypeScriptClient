[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskPostTaskInfo

# Class: SerpYahooOrganicTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpYahooOrganicTaskPostTaskInfo`**

## Implements

- [`ISerpYahooOrganicTaskPostTaskInfo`](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTaskPostTaskInfo.md#cost)
- [data](SerpYahooOrganicTaskPostTaskInfo.md#data)
- [id](SerpYahooOrganicTaskPostTaskInfo.md#id)
- [path](SerpYahooOrganicTaskPostTaskInfo.md#path)
- [result](SerpYahooOrganicTaskPostTaskInfo.md#result)
- [result\_count](SerpYahooOrganicTaskPostTaskInfo.md#result_count)
- [status\_code](SerpYahooOrganicTaskPostTaskInfo.md#status_code)
- [status\_message](SerpYahooOrganicTaskPostTaskInfo.md#status_message)
- [time](SerpYahooOrganicTaskPostTaskInfo.md#time)

### Methods

- [init](SerpYahooOrganicTaskPostTaskInfo.md#init)
- [toJSON](SerpYahooOrganicTaskPostTaskInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskPostTaskInfo**(`data?`): [`SerpYahooOrganicTaskPostTaskInfo`](SerpYahooOrganicTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskPostTaskInfo`](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md) |

#### Returns

[`SerpYahooOrganicTaskPostTaskInfo`](SerpYahooOrganicTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:63201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63201)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[cost](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#cost)

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

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[data](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#data)

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

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[id](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[path](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#path)

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

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[result](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:63197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63197)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[result_count](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#result_count)

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

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[status_code](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#status_code)

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

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[status_message](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYahooOrganicTaskPostTaskInfo](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md).[time](../interfaces/ISerpYahooOrganicTaskPostTaskInfo.md#time)

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

[main.ts:63205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63205)

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

[main.ts:63223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63223)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskPostTaskInfo`](SerpYahooOrganicTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskPostTaskInfo`](SerpYahooOrganicTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:63216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63216)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")