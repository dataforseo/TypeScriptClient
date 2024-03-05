[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologiesTaskInfo

# Class: DomainAnalyticsTechnologiesTechnologiesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DomainAnalyticsTechnologiesTechnologiesTaskInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#cost)
- [data](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#data)
- [id](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#id)
- [path](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#path)
- [result](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#result)
- [result\_count](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#status_message)
- [time](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologiesTaskInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologiesTaskInfo`](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologiesTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesTaskInfo`](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:72324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72324)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#cost)

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

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[data](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#data)

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

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[id](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[path](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DomainAnalyticsTechnologiesTechnologiesResultInfo`](DomainAnalyticsTechnologiesTechnologiesResultInfo.md)[]

array of results

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[result](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#result)

#### Defined in

[main.ts:72320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72320)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#result_count)

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

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesTaskInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesTechnologiesTaskInfo.md#time)

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

[main.ts:72328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72328)

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

[main.ts:72350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72350)

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesTaskInfo`](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesTaskInfo`](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:72343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L72343)
