[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskPostTaskInfo

# Class: SerpNaverOrganicTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpNaverOrganicTaskPostTaskInfo`**

## Implements

- [`ISerpNaverOrganicTaskPostTaskInfo`](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTaskPostTaskInfo.md#cost)
- [data](SerpNaverOrganicTaskPostTaskInfo.md#data)
- [id](SerpNaverOrganicTaskPostTaskInfo.md#id)
- [path](SerpNaverOrganicTaskPostTaskInfo.md#path)
- [result](SerpNaverOrganicTaskPostTaskInfo.md#result)
- [result\_count](SerpNaverOrganicTaskPostTaskInfo.md#result_count)
- [status\_code](SerpNaverOrganicTaskPostTaskInfo.md#status_code)
- [status\_message](SerpNaverOrganicTaskPostTaskInfo.md#status_message)
- [time](SerpNaverOrganicTaskPostTaskInfo.md#time)

### Methods

- [init](SerpNaverOrganicTaskPostTaskInfo.md#init)
- [toJSON](SerpNaverOrganicTaskPostTaskInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskPostTaskInfo**(`data?`): [`SerpNaverOrganicTaskPostTaskInfo`](SerpNaverOrganicTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskPostTaskInfo`](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md) |

#### Returns

[`SerpNaverOrganicTaskPostTaskInfo`](SerpNaverOrganicTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:67485](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67485)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[cost](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#cost)

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

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[data](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#data)

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

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[id](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[path](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#path)

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

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[result](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:67481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67481)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[result_count](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#result_count)

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

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[status_code](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#status_code)

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

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[status_message](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpNaverOrganicTaskPostTaskInfo](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md).[time](../interfaces/ISerpNaverOrganicTaskPostTaskInfo.md#time)

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

[main.ts:67489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67489)

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

[main.ts:67507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67507)

___


### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskPostTaskInfo`](SerpNaverOrganicTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskPostTaskInfo`](SerpNaverOrganicTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:67500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67500)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")