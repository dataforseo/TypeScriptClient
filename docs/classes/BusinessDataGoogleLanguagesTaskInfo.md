[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleLanguagesTaskInfo

# Class: BusinessDataGoogleLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataGoogleLanguagesTaskInfo`**

## Implements

- [`IBusinessDataGoogleLanguagesTaskInfo`](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleLanguagesTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleLanguagesTaskInfo.md#cost)
- [data](BusinessDataGoogleLanguagesTaskInfo.md#data)
- [id](BusinessDataGoogleLanguagesTaskInfo.md#id)
- [path](BusinessDataGoogleLanguagesTaskInfo.md#path)
- [result](BusinessDataGoogleLanguagesTaskInfo.md#result)
- [result\_count](BusinessDataGoogleLanguagesTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleLanguagesTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleLanguagesTaskInfo.md#status_message)
- [time](BusinessDataGoogleLanguagesTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleLanguagesTaskInfo.md#init)
- [toJSON](BusinessDataGoogleLanguagesTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleLanguagesTaskInfo**(`data?`): [`BusinessDataGoogleLanguagesTaskInfo`](BusinessDataGoogleLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleLanguagesTaskInfo`](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md) |

#### Returns

[`BusinessDataGoogleLanguagesTaskInfo`](BusinessDataGoogleLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:190614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190614)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#cost)

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

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[data](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#data)

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

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[id](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[path](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataGoogleLanguagesResultInfo`](BusinessDataGoogleLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[result](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:190610](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190610)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#result_count)

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

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#status_code)

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

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleLanguagesTaskInfo](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md).[time](../interfaces/IBusinessDataGoogleLanguagesTaskInfo.md#time)

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

[main.ts:190618](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190618)

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

[main.ts:190640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190640)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleLanguagesTaskInfo`](BusinessDataGoogleLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleLanguagesTaskInfo`](BusinessDataGoogleLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:190633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190633)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")