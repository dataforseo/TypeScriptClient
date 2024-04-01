[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo

# Class: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#cost)
- [data](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#data)
- [id](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#id)
- [path](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#path)
- [result](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#result)
- [result\_count](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#result_count)
- [status\_code](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#status_message)
- [time](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#time)

### Methods

- [init](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo**(`data?`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:77331

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:23121

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[data](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:23127

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[id](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[path](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[result](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#result)

#### Defined in

main.ts:77327

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[result_count](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:23123

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:23114

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:23119

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

main.ts:77335

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

main.ts:77357

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:77350
