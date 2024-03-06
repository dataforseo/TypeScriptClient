[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorLocationsCountryTaskInfo

# Class: BusinessDataTripadvisorLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataTripadvisorLocationsCountryTaskInfo`**

## Implements

- [`IBusinessDataTripadvisorLocationsCountryTaskInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorLocationsCountryTaskInfo.md#cost)
- [data](BusinessDataTripadvisorLocationsCountryTaskInfo.md#data)
- [id](BusinessDataTripadvisorLocationsCountryTaskInfo.md#id)
- [path](BusinessDataTripadvisorLocationsCountryTaskInfo.md#path)
- [result](BusinessDataTripadvisorLocationsCountryTaskInfo.md#result)
- [result\_count](BusinessDataTripadvisorLocationsCountryTaskInfo.md#result_count)
- [status\_code](BusinessDataTripadvisorLocationsCountryTaskInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorLocationsCountryTaskInfo.md#status_message)
- [time](BusinessDataTripadvisorLocationsCountryTaskInfo.md#time)

### Methods

- [init](BusinessDataTripadvisorLocationsCountryTaskInfo.md#init)
- [toJSON](BusinessDataTripadvisorLocationsCountryTaskInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorLocationsCountryTaskInfo**(`data?`): [`BusinessDataTripadvisorLocationsCountryTaskInfo`](BusinessDataTripadvisorLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorLocationsCountryTaskInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md) |

#### Returns

[`BusinessDataTripadvisorLocationsCountryTaskInfo`](BusinessDataTripadvisorLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:200624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200624)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[cost](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#cost)

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

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[data](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#data)

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

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[id](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[path](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[result](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:200620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200620)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[result_count](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#result_count)

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

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#status_code)

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

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md).[time](../interfaces/IBusinessDataTripadvisorLocationsCountryTaskInfo.md#time)

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

[main.ts:200628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200628)

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

[main.ts:200650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200650)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorLocationsCountryTaskInfo`](BusinessDataTripadvisorLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorLocationsCountryTaskInfo`](BusinessDataTripadvisorLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:200643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200643)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")