[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsCategoriesTaskInfo

# Class: DataforseoLabsCategoriesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsCategoriesTaskInfo`**

## Implements

- [`IDataforseoLabsCategoriesTaskInfo`](../interfaces/IDataforseoLabsCategoriesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsCategoriesTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsCategoriesTaskInfo.md#cost)
- [data](DataforseoLabsCategoriesTaskInfo.md#data)
- [id](DataforseoLabsCategoriesTaskInfo.md#id)
- [path](DataforseoLabsCategoriesTaskInfo.md#path)
- [result](DataforseoLabsCategoriesTaskInfo.md#result)
- [result\_count](DataforseoLabsCategoriesTaskInfo.md#result_count)
- [status\_code](DataforseoLabsCategoriesTaskInfo.md#status_code)
- [status\_message](DataforseoLabsCategoriesTaskInfo.md#status_message)
- [time](DataforseoLabsCategoriesTaskInfo.md#time)

### Methods

- [init](DataforseoLabsCategoriesTaskInfo.md#init)
- [toJSON](DataforseoLabsCategoriesTaskInfo.md#tojson)
- [fromJS](DataforseoLabsCategoriesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsCategoriesTaskInfo**(`data?`): [`DataforseoLabsCategoriesTaskInfo`](DataforseoLabsCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsCategoriesTaskInfo`](../interfaces/IDataforseoLabsCategoriesTaskInfo.md) |

#### Returns

[`DataforseoLabsCategoriesTaskInfo`](DataforseoLabsCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:78218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78218)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[cost](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#cost)

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

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[data](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#data)

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

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[id](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[path](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[result](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#result)

#### Defined in

[main.ts:78214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78214)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[result_count](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#result_count)

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

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[status_code](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#status_code)

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

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[status_message](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsCategoriesTaskInfo](../interfaces/IDataforseoLabsCategoriesTaskInfo.md).[time](../interfaces/IDataforseoLabsCategoriesTaskInfo.md#time)

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

[main.ts:78222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78222)

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

[main.ts:78244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78244)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsCategoriesTaskInfo`](DataforseoLabsCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsCategoriesTaskInfo`](DataforseoLabsCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:78237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78237)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")