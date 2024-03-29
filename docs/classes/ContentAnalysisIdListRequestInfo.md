[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisIdListRequestInfo

# Class: ContentAnalysisIdListRequestInfo

## Implements

- [`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](ContentAnalysisIdListRequestInfo.md#datetime_from)
- [datetime\_to](ContentAnalysisIdListRequestInfo.md#datetime_to)
- [include\_metadata](ContentAnalysisIdListRequestInfo.md#include_metadata)
- [limit](ContentAnalysisIdListRequestInfo.md#limit)
- [offset](ContentAnalysisIdListRequestInfo.md#offset)
- [sort](ContentAnalysisIdListRequestInfo.md#sort)

### Methods

- [init](ContentAnalysisIdListRequestInfo.md#init)
- [toJSON](ContentAnalysisIdListRequestInfo.md#tojson)
- [fromJS](ContentAnalysisIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisIdListRequestInfo**(`data?`): [`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md) |

#### Returns

[`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

#### Defined in

[main.ts:155043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155043)

## Properties

### datetime\_from

• `Optional` **datetime\_from**: `string`

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[IContentAnalysisIdListRequestInfo](../interfaces/IContentAnalysisIdListRequestInfo.md).[datetime_from](../interfaces/IContentAnalysisIdListRequestInfo.md#datetime_from)

#### Defined in

[main.ts:155013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155013)

___


### datetime\_to

• `Optional` **datetime\_to**: `string`

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[IContentAnalysisIdListRequestInfo](../interfaces/IContentAnalysisIdListRequestInfo.md).[datetime_to](../interfaces/IContentAnalysisIdListRequestInfo.md#datetime_to)

#### Defined in

[main.ts:155020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155020)

___


### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[IContentAnalysisIdListRequestInfo](../interfaces/IContentAnalysisIdListRequestInfo.md).[include_metadata](../interfaces/IContentAnalysisIdListRequestInfo.md#include_metadata)

#### Defined in

[main.ts:155039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155039)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IContentAnalysisIdListRequestInfo](../interfaces/IContentAnalysisIdListRequestInfo.md).[limit](../interfaces/IContentAnalysisIdListRequestInfo.md#limit)

#### Defined in

[main.ts:155025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155025)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[IContentAnalysisIdListRequestInfo](../interfaces/IContentAnalysisIdListRequestInfo.md).[offset](../interfaces/IContentAnalysisIdListRequestInfo.md#offset)

#### Defined in

[main.ts:155030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155030)

___


### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[IContentAnalysisIdListRequestInfo](../interfaces/IContentAnalysisIdListRequestInfo.md).[sort](../interfaces/IContentAnalysisIdListRequestInfo.md#sort)

#### Defined in

[main.ts:155035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155035)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:155052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155052)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:155074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155074)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

#### Defined in

[main.ts:155067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155067)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")