[Documentation](../README.md) / [Exports](../modules.md) / IMicrodataFieldsInfo

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

main.ts:150946

___

### name

• `Optional` **name**: `string`

field name
name of the data field

#### Defined in

main.ts:150934

___

### test\_results

• `Optional` **test\_results**: [`MicrodataTestResultsInfo`](../classes/MicrodataTestResultsInfo.md)

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

#### Defined in

main.ts:150943

___

### types

• `Optional` **types**: `string`[]

parent microdata types
for a full list of available types, please visit schema.org

#### Defined in

main.ts:150937

___

### value

• `Optional` **value**: `string`

microdata value
microdata value specified on a target web page

#### Defined in

main.ts:150940
