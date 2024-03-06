[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesLocationsTaskInfo

# Class: DomainAnalyticsTechnologiesLocationsTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DomainAnalyticsTechnologiesLocationsTaskInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesLocationsTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesLocationsTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesLocationsTaskInfo.md#cost)
- [data](DomainAnalyticsTechnologiesLocationsTaskInfo.md#data)
- [id](DomainAnalyticsTechnologiesLocationsTaskInfo.md#id)
- [path](DomainAnalyticsTechnologiesLocationsTaskInfo.md#path)
- [result](DomainAnalyticsTechnologiesLocationsTaskInfo.md#result)
- [result\_count](DomainAnalyticsTechnologiesLocationsTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsTechnologiesLocationsTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesLocationsTaskInfo.md#status_message)
- [time](DomainAnalyticsTechnologiesLocationsTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsTechnologiesLocationsTaskInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesLocationsTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesLocationsTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesLocationsTaskInfo**(`data?`): [`DomainAnalyticsTechnologiesLocationsTaskInfo`](DomainAnalyticsTechnologiesLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesLocationsTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesLocationsTaskInfo`](DomainAnalyticsTechnologiesLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:71828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71828)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#cost)

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

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[data](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#data)

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

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[id](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[path](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DomainAnalyticsTechnologiesLocationsResultInfo`](DomainAnalyticsTechnologiesLocationsResultInfo.md)[]

array of results

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[result](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#result)

#### Defined in

[main.ts:71824](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71824)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#result_count)

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

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesLocationsTaskInfo](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesLocationsTaskInfo.md#time)

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

[main.ts:71832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71832)

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

[main.ts:71854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71854)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesLocationsTaskInfo`](DomainAnalyticsTechnologiesLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesLocationsTaskInfo`](DomainAnalyticsTechnologiesLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:71847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71847)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")