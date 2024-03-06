[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppSearchesTaskPostTaskInfo

# Class: AppDataAppleAppSearchesTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataAppleAppSearchesTaskPostTaskInfo`**

## Implements

- [`IAppDataAppleAppSearchesTaskPostTaskInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppSearchesTaskPostTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppSearchesTaskPostTaskInfo.md#cost)
- [data](AppDataAppleAppSearchesTaskPostTaskInfo.md#data)
- [id](AppDataAppleAppSearchesTaskPostTaskInfo.md#id)
- [path](AppDataAppleAppSearchesTaskPostTaskInfo.md#path)
- [result](AppDataAppleAppSearchesTaskPostTaskInfo.md#result)
- [result\_count](AppDataAppleAppSearchesTaskPostTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppSearchesTaskPostTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppSearchesTaskPostTaskInfo.md#status_message)
- [time](AppDataAppleAppSearchesTaskPostTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppSearchesTaskPostTaskInfo.md#init)
- [toJSON](AppDataAppleAppSearchesTaskPostTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppSearchesTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppSearchesTaskPostTaskInfo**(`data?`): [`AppDataAppleAppSearchesTaskPostTaskInfo`](AppDataAppleAppSearchesTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppSearchesTaskPostTaskInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md) |

#### Returns

[`AppDataAppleAppSearchesTaskPostTaskInfo`](AppDataAppleAppSearchesTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:183339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183339)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[cost](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#cost)

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

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[data](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#data)

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

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[id](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[path](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#path)

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

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[result](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:183335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183335)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#result_count)

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

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#status_code)

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

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppSearchesTaskPostTaskInfo](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md).[time](../interfaces/IAppDataAppleAppSearchesTaskPostTaskInfo.md#time)

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

[main.ts:183343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183343)

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

[main.ts:183361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183361)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppSearchesTaskPostTaskInfo`](AppDataAppleAppSearchesTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppSearchesTaskPostTaskInfo`](AppDataAppleAppSearchesTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:183354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183354)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")