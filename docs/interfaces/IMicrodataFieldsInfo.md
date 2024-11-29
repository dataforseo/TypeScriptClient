[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMicrodataFieldsInfo

# Interface: IMicrodataFieldsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### fields?

> `optional` **fields**: [`MicrodataFieldsInfo`](../classes/MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Defined in

main.ts:171733

***

### name?

> `optional` **name**: `string`

field name
name of the data field

#### Defined in

main.ts:171721

***

### test\_results?

> `optional` **test\_results**: [`Test_results`](../classes/Test_results.md)

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

#### Defined in

main.ts:171730

***

### types?

> `optional` **types**: `string`[]

parent microdata types
for a full list of available types, please visit schema.org

#### Defined in

main.ts:171724

***

### value?

> `optional` **value**: `string`

microdata value
microdata value specified on a target web page

#### Defined in

main.ts:171727
