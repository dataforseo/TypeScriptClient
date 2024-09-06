[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMicrodataFieldsInfo

# Interface: IMicrodataFieldsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### fields?

> `optional` **fields**: [`MicrodataFieldsInfo`](../classes/MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Defined in

main.ts:160090

***

### name?

> `optional` **name**: `string`

field name
name of the data field

#### Defined in

main.ts:160078

***

### test\_results?

> `optional` **test\_results**: `any`

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

#### Defined in

main.ts:160087

***

### types?

> `optional` **types**: `any`

parent microdata types
for a full list of available types, please visit schema.org

#### Defined in

main.ts:160081

***

### value?

> `optional` **value**: `string`

microdata value
microdata value specified on a target web page

#### Defined in

main.ts:160084
