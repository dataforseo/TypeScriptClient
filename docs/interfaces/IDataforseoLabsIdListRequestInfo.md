[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsIdListRequestInfo

# Interface: IDataforseoLabsIdListRequestInfo

Defined in: main.ts:90007

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:90015

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:90022

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:90041

include task metadata in the respond
optional field
default value: false

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:90027

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:90032

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:90037

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"
