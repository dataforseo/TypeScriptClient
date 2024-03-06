[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo**(`data?`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:118897](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118897)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#result)

#### Defined in

[main.ts:118893](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118893)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md#time)

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

[main.ts:118901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118901)

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

[main.ts:118923](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118923)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:118916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118916)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")