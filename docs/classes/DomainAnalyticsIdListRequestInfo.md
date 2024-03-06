[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsIdListRequestInfo

# Class: DomainAnalyticsIdListRequestInfo

## Implements

- [`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](DomainAnalyticsIdListRequestInfo.md#datetime_from)
- [datetime\_to](DomainAnalyticsIdListRequestInfo.md#datetime_to)
- [include\_metadata](DomainAnalyticsIdListRequestInfo.md#include_metadata)
- [limit](DomainAnalyticsIdListRequestInfo.md#limit)
- [offset](DomainAnalyticsIdListRequestInfo.md#offset)
- [sort](DomainAnalyticsIdListRequestInfo.md#sort)

### Methods

- [init](DomainAnalyticsIdListRequestInfo.md#init)
- [toJSON](DomainAnalyticsIdListRequestInfo.md#tojson)
- [fromJS](DomainAnalyticsIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsIdListRequestInfo**(`data?`): [`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md) |

#### Returns

[`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

#### Defined in

[main.ts:70900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70900)

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

[IDomainAnalyticsIdListRequestInfo](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[datetime_from](../interfaces/IDomainAnalyticsIdListRequestInfo.md#datetime_from)

#### Defined in

[main.ts:70870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70870)

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

[IDomainAnalyticsIdListRequestInfo](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[datetime_to](../interfaces/IDomainAnalyticsIdListRequestInfo.md#datetime_to)

#### Defined in

[main.ts:70877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70877)

___


### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[IDomainAnalyticsIdListRequestInfo](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[include_metadata](../interfaces/IDomainAnalyticsIdListRequestInfo.md#include_metadata)

#### Defined in

[main.ts:70896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70896)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IDomainAnalyticsIdListRequestInfo](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[limit](../interfaces/IDomainAnalyticsIdListRequestInfo.md#limit)

#### Defined in

[main.ts:70882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70882)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[IDomainAnalyticsIdListRequestInfo](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[offset](../interfaces/IDomainAnalyticsIdListRequestInfo.md#offset)

#### Defined in

[main.ts:70887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70887)

___


### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[IDomainAnalyticsIdListRequestInfo](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[sort](../interfaces/IDomainAnalyticsIdListRequestInfo.md#sort)

#### Defined in

[main.ts:70892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70892)

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

[main.ts:70909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70909)

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

[main.ts:70931](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70931)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

#### Defined in

[main.ts:70924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70924)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")