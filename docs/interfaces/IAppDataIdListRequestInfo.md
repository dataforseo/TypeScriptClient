[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataIdListRequestInfo

# Interface: IAppDataIdListRequestInfo

## Implemented by

- [`AppDataIdListRequestInfo`](../classes/AppDataIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime\_from](IAppDataIdListRequestInfo.md#datetime_from)
- [datetime\_to](IAppDataIdListRequestInfo.md#datetime_to)
- [include\_metadata](IAppDataIdListRequestInfo.md#include_metadata)
- [limit](IAppDataIdListRequestInfo.md#limit)
- [offset](IAppDataIdListRequestInfo.md#offset)
- [sort](IAppDataIdListRequestInfo.md#sort)

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

#### Defined in

[main.ts:176369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176369)

___


### datetime\_to

• `Optional` **datetime\_to**: `string`

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Defined in

[main.ts:176376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176376)

___


### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Defined in

[main.ts:176395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176395)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Defined in

[main.ts:176381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176381)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Defined in

[main.ts:176386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176386)

___


### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Defined in

[main.ts:176391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176391)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")