[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMicrodataFieldsInfo

# Interface: IMicrodataFieldsInfo

## Implemented by

- [`MicrodataFieldsInfo`](../classes/MicrodataFieldsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [fields](IMicrodataFieldsInfo.md#fields)
- [name](IMicrodataFieldsInfo.md#name)
- [test\_results](IMicrodataFieldsInfo.md#test_results)
- [types](IMicrodataFieldsInfo.md#types)
- [value](IMicrodataFieldsInfo.md#value)

## Properties

### fields

• `Optional` **fields**: [`MicrodataFieldsInfo`](../classes/MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Defined in

[main.ts:150802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150802)

___


### name

• `Optional` **name**: `string`

field name
name of the data field

#### Defined in

[main.ts:150790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150790)

___


### test\_results

• `Optional` **test\_results**: [`MicrodataTestResultsInfo`](../classes/MicrodataTestResultsInfo.md)

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

#### Defined in

[main.ts:150799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150799)

___


### types

• `Optional` **types**: `string`[]

parent microdata types
for a full list of available types, please visit schema.org

#### Defined in

[main.ts:150793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150793)

___


### value

• `Optional` **value**: `string`

microdata value
microdata value specified on a target web page

#### Defined in

[main.ts:150796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150796)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")