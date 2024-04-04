**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMicrodataFieldsInfo

# Interface: IMicrodataFieldsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### fields?

> **`optional`** **fields**: [`MicrodataFieldsInfo`](../classes/MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Source

main.ts:156237

***

### name?

> **`optional`** **name**: `string`

field name
name of the data field

#### Source

main.ts:156225

***

### test\_results?

> **`optional`** **test\_results**: [`MicrodataTestResultsInfo`](../classes/MicrodataTestResultsInfo.md)

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

#### Source

main.ts:156234

***

### types?

> **`optional`** **types**: `string`[]

parent microdata types
for a full list of available types, please visit schema.org

#### Source

main.ts:156228

***

### value?

> **`optional`** **value**: `string`

microdata value
microdata value specified on a target web page

#### Source

main.ts:156231
