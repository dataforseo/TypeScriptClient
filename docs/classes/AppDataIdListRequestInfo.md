[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataIdListRequestInfo

# Class: AppDataIdListRequestInfo

## Implements

- [`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](AppDataIdListRequestInfo.md#datetime_from)
- [datetime\_to](AppDataIdListRequestInfo.md#datetime_to)
- [include\_metadata](AppDataIdListRequestInfo.md#include_metadata)
- [limit](AppDataIdListRequestInfo.md#limit)
- [offset](AppDataIdListRequestInfo.md#offset)
- [sort](AppDataIdListRequestInfo.md#sort)

### Methods

- [init](AppDataIdListRequestInfo.md#init)
- [toJSON](AppDataIdListRequestInfo.md#tojson)
- [fromJS](AppDataIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataIdListRequestInfo**(`data?`): [`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md) |

#### Returns

[`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

#### Defined in

[main.ts:176314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176314)

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

[IAppDataIdListRequestInfo](../interfaces/IAppDataIdListRequestInfo.md).[datetime_from](../interfaces/IAppDataIdListRequestInfo.md#datetime_from)

#### Defined in

[main.ts:176284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176284)

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

[IAppDataIdListRequestInfo](../interfaces/IAppDataIdListRequestInfo.md).[datetime_to](../interfaces/IAppDataIdListRequestInfo.md#datetime_to)

#### Defined in

[main.ts:176291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176291)

___


### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[IAppDataIdListRequestInfo](../interfaces/IAppDataIdListRequestInfo.md).[include_metadata](../interfaces/IAppDataIdListRequestInfo.md#include_metadata)

#### Defined in

[main.ts:176310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176310)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IAppDataIdListRequestInfo](../interfaces/IAppDataIdListRequestInfo.md).[limit](../interfaces/IAppDataIdListRequestInfo.md#limit)

#### Defined in

[main.ts:176296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176296)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[IAppDataIdListRequestInfo](../interfaces/IAppDataIdListRequestInfo.md).[offset](../interfaces/IAppDataIdListRequestInfo.md#offset)

#### Defined in

[main.ts:176301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176301)

___


### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[IAppDataIdListRequestInfo](../interfaces/IAppDataIdListRequestInfo.md).[sort](../interfaces/IAppDataIdListRequestInfo.md#sort)

#### Defined in

[main.ts:176306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176306)

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

[main.ts:176323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176323)

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

[main.ts:176345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176345)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

#### Defined in

[main.ts:176338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176338)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")