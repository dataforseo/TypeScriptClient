[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisCategoriesTaskInfo

# Class: ContentAnalysisCategoriesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`ContentAnalysisCategoriesTaskInfo`**

## Implements

- [`IContentAnalysisCategoriesTaskInfo`](../interfaces/IContentAnalysisCategoriesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisCategoriesTaskInfo.md#constructor)

### Properties

- [cost](ContentAnalysisCategoriesTaskInfo.md#cost)
- [data](ContentAnalysisCategoriesTaskInfo.md#data)
- [id](ContentAnalysisCategoriesTaskInfo.md#id)
- [path](ContentAnalysisCategoriesTaskInfo.md#path)
- [result](ContentAnalysisCategoriesTaskInfo.md#result)
- [result\_count](ContentAnalysisCategoriesTaskInfo.md#result_count)
- [status\_code](ContentAnalysisCategoriesTaskInfo.md#status_code)
- [status\_message](ContentAnalysisCategoriesTaskInfo.md#status_message)
- [time](ContentAnalysisCategoriesTaskInfo.md#time)

### Methods

- [init](ContentAnalysisCategoriesTaskInfo.md#init)
- [toJSON](ContentAnalysisCategoriesTaskInfo.md#tojson)
- [fromJS](ContentAnalysisCategoriesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisCategoriesTaskInfo**(`data?`): [`ContentAnalysisCategoriesTaskInfo`](ContentAnalysisCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisCategoriesTaskInfo`](../interfaces/IContentAnalysisCategoriesTaskInfo.md) |

#### Returns

[`ContentAnalysisCategoriesTaskInfo`](ContentAnalysisCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:155935](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155935)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[cost](../interfaces/IContentAnalysisCategoriesTaskInfo.md#cost)

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

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[data](../interfaces/IContentAnalysisCategoriesTaskInfo.md#data)

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

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[id](../interfaces/IContentAnalysisCategoriesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[path](../interfaces/IContentAnalysisCategoriesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)[]

array of results

#### Implementation of

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[result](../interfaces/IContentAnalysisCategoriesTaskInfo.md#result)

#### Defined in

[main.ts:155931](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155931)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[result_count](../interfaces/IContentAnalysisCategoriesTaskInfo.md#result_count)

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

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[status_code](../interfaces/IContentAnalysisCategoriesTaskInfo.md#status_code)

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

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[status_message](../interfaces/IContentAnalysisCategoriesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentAnalysisCategoriesTaskInfo](../interfaces/IContentAnalysisCategoriesTaskInfo.md).[time](../interfaces/IContentAnalysisCategoriesTaskInfo.md#time)

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

[main.ts:155939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155939)

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

[main.ts:155961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155961)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisCategoriesTaskInfo`](ContentAnalysisCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisCategoriesTaskInfo`](ContentAnalysisCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:155954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155954)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")