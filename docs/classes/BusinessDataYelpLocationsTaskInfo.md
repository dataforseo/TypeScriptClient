[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpLocationsTaskInfo

# Class: BusinessDataYelpLocationsTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataYelpLocationsTaskInfo`**

## Implements

- [`IBusinessDataYelpLocationsTaskInfo`](../interfaces/IBusinessDataYelpLocationsTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpLocationsTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpLocationsTaskInfo.md#cost)
- [data](BusinessDataYelpLocationsTaskInfo.md#data)
- [id](BusinessDataYelpLocationsTaskInfo.md#id)
- [path](BusinessDataYelpLocationsTaskInfo.md#path)
- [result](BusinessDataYelpLocationsTaskInfo.md#result)
- [result\_count](BusinessDataYelpLocationsTaskInfo.md#result_count)
- [status\_code](BusinessDataYelpLocationsTaskInfo.md#status_code)
- [status\_message](BusinessDataYelpLocationsTaskInfo.md#status_message)
- [time](BusinessDataYelpLocationsTaskInfo.md#time)

### Methods

- [init](BusinessDataYelpLocationsTaskInfo.md#init)
- [toJSON](BusinessDataYelpLocationsTaskInfo.md#tojson)
- [fromJS](BusinessDataYelpLocationsTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpLocationsTaskInfo**(`data?`): [`BusinessDataYelpLocationsTaskInfo`](BusinessDataYelpLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpLocationsTaskInfo`](../interfaces/IBusinessDataYelpLocationsTaskInfo.md) |

#### Returns

[`BusinessDataYelpLocationsTaskInfo`](BusinessDataYelpLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:202872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202872)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[cost](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#cost)

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

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[data](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#data)

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

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[id](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[path](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[result](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#result)

#### Defined in

[main.ts:202868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202868)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[result_count](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#result_count)

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

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[status_code](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#status_code)

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

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[status_message](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataYelpLocationsTaskInfo](../interfaces/IBusinessDataYelpLocationsTaskInfo.md).[time](../interfaces/IBusinessDataYelpLocationsTaskInfo.md#time)

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

[main.ts:202876](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202876)

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

[main.ts:202898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202898)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpLocationsTaskInfo`](BusinessDataYelpLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpLocationsTaskInfo`](BusinessDataYelpLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:202891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202891)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")