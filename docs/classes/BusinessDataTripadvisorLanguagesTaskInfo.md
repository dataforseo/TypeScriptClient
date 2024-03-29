[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorLanguagesTaskInfo

# Class: BusinessDataTripadvisorLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataTripadvisorLanguagesTaskInfo`**

## Implements

- [`IBusinessDataTripadvisorLanguagesTaskInfo`](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorLanguagesTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorLanguagesTaskInfo.md#cost)
- [data](BusinessDataTripadvisorLanguagesTaskInfo.md#data)
- [id](BusinessDataTripadvisorLanguagesTaskInfo.md#id)
- [path](BusinessDataTripadvisorLanguagesTaskInfo.md#path)
- [result](BusinessDataTripadvisorLanguagesTaskInfo.md#result)
- [result\_count](BusinessDataTripadvisorLanguagesTaskInfo.md#result_count)
- [status\_code](BusinessDataTripadvisorLanguagesTaskInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorLanguagesTaskInfo.md#status_message)
- [time](BusinessDataTripadvisorLanguagesTaskInfo.md#time)

### Methods

- [init](BusinessDataTripadvisorLanguagesTaskInfo.md#init)
- [toJSON](BusinessDataTripadvisorLanguagesTaskInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorLanguagesTaskInfo**(`data?`): [`BusinessDataTripadvisorLanguagesTaskInfo`](BusinessDataTripadvisorLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorLanguagesTaskInfo`](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md) |

#### Returns

[`BusinessDataTripadvisorLanguagesTaskInfo`](BusinessDataTripadvisorLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:200790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200790)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[cost](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#cost)

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

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[data](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#data)

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

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[id](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[path](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataTripadvisorLanguagesResultInfo`](BusinessDataTripadvisorLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[result](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:200786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200786)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[result_count](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#result_count)

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

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#status_code)

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

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorLanguagesTaskInfo](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md).[time](../interfaces/IBusinessDataTripadvisorLanguagesTaskInfo.md#time)

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

[main.ts:200794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200794)

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

[main.ts:200816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200816)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorLanguagesTaskInfo`](BusinessDataTripadvisorLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorLanguagesTaskInfo`](BusinessDataTripadvisorLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:200809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200809)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")