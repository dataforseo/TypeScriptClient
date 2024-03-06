[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskPostTaskInfo

# Class: SerpBaiduOrganicTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBaiduOrganicTaskPostTaskInfo`**

## Implements

- [`ISerpBaiduOrganicTaskPostTaskInfo`](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpBaiduOrganicTaskPostTaskInfo.md#cost)
- [data](SerpBaiduOrganicTaskPostTaskInfo.md#data)
- [id](SerpBaiduOrganicTaskPostTaskInfo.md#id)
- [path](SerpBaiduOrganicTaskPostTaskInfo.md#path)
- [result](SerpBaiduOrganicTaskPostTaskInfo.md#result)
- [result\_count](SerpBaiduOrganicTaskPostTaskInfo.md#result_count)
- [status\_code](SerpBaiduOrganicTaskPostTaskInfo.md#status_code)
- [status\_message](SerpBaiduOrganicTaskPostTaskInfo.md#status_message)
- [time](SerpBaiduOrganicTaskPostTaskInfo.md#time)

### Methods

- [init](SerpBaiduOrganicTaskPostTaskInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskPostTaskInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskPostTaskInfo**(`data?`): [`SerpBaiduOrganicTaskPostTaskInfo`](SerpBaiduOrganicTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskPostTaskInfo`](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskPostTaskInfo`](SerpBaiduOrganicTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:66071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66071)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[cost](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#cost)

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

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[data](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#data)

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

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[id](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[path](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#path)

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

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[result](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:66067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66067)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[result_count](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#result_count)

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

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[status_code](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#status_code)

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

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[status_message](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBaiduOrganicTaskPostTaskInfo](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md).[time](../interfaces/ISerpBaiduOrganicTaskPostTaskInfo.md#time)

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

[main.ts:66075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66075)

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

[main.ts:66093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66093)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskPostTaskInfo`](SerpBaiduOrganicTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskPostTaskInfo`](SerpBaiduOrganicTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:66086](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66086)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")