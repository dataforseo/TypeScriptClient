[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsLocationsAndLanguagesTaskInfo

# Class: DataforseoLabsLocationsAndLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsLocationsAndLanguagesTaskInfo`**

## Implements

- [`IDataforseoLabsLocationsAndLanguagesTaskInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsLocationsAndLanguagesTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsLocationsAndLanguagesTaskInfo.md#cost)
- [data](DataforseoLabsLocationsAndLanguagesTaskInfo.md#data)
- [id](DataforseoLabsLocationsAndLanguagesTaskInfo.md#id)
- [path](DataforseoLabsLocationsAndLanguagesTaskInfo.md#path)
- [result](DataforseoLabsLocationsAndLanguagesTaskInfo.md#result)
- [result\_count](DataforseoLabsLocationsAndLanguagesTaskInfo.md#result_count)
- [status\_code](DataforseoLabsLocationsAndLanguagesTaskInfo.md#status_code)
- [status\_message](DataforseoLabsLocationsAndLanguagesTaskInfo.md#status_message)
- [time](DataforseoLabsLocationsAndLanguagesTaskInfo.md#time)

### Methods

- [init](DataforseoLabsLocationsAndLanguagesTaskInfo.md#init)
- [toJSON](DataforseoLabsLocationsAndLanguagesTaskInfo.md#tojson)
- [fromJS](DataforseoLabsLocationsAndLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsLocationsAndLanguagesTaskInfo**(`data?`): [`DataforseoLabsLocationsAndLanguagesTaskInfo`](DataforseoLabsLocationsAndLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsLocationsAndLanguagesTaskInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md) |

#### Returns

[`DataforseoLabsLocationsAndLanguagesTaskInfo`](DataforseoLabsLocationsAndLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:78028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78028)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[cost](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#cost)

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

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[data](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#data)

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

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[id](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[path](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[result](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:78024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78024)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[result_count](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#result_count)

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

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[status_code](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#status_code)

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

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[status_message](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsLocationsAndLanguagesTaskInfo](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md).[time](../interfaces/IDataforseoLabsLocationsAndLanguagesTaskInfo.md#time)

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

[main.ts:78032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78032)

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

[main.ts:78054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78054)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsLocationsAndLanguagesTaskInfo`](DataforseoLabsLocationsAndLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsLocationsAndLanguagesTaskInfo`](DataforseoLabsLocationsAndLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:78047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78047)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")