[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskPostTaskInfo

# Class: SerpGoogleOrganicTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleOrganicTaskPostTaskInfo`**

## Implements

- [`ISerpGoogleOrganicTaskPostTaskInfo`](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskPostTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTaskPostTaskInfo.md#cost)
- [data](SerpGoogleOrganicTaskPostTaskInfo.md#data)
- [id](SerpGoogleOrganicTaskPostTaskInfo.md#id)
- [path](SerpGoogleOrganicTaskPostTaskInfo.md#path)
- [result](SerpGoogleOrganicTaskPostTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicTaskPostTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicTaskPostTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTaskPostTaskInfo.md#status_message)
- [time](SerpGoogleOrganicTaskPostTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicTaskPostTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskPostTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskPostTaskInfo**(`data?`): [`SerpGoogleOrganicTaskPostTaskInfo`](SerpGoogleOrganicTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskPostTaskInfo`](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskPostTaskInfo`](SerpGoogleOrganicTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:24627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24627)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#cost)

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

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#data)

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

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#path)

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

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:24623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24623)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#result_count)

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

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#status_code)

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

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTaskPostTaskInfo](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicTaskPostTaskInfo.md#time)

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

[main.ts:24631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24631)

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

[main.ts:24649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24649)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskPostTaskInfo`](SerpGoogleOrganicTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskPostTaskInfo`](SerpGoogleOrganicTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:24642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24642)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")