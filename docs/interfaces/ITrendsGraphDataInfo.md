[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITrendsGraphDataInfo

# Interface: ITrendsGraphDataInfo

Defined in: main.ts:133997

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:134000

start date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:134003

end date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

***

### missing\_data?

> `optional` **missing\_data**: `boolean`

Defined in: main.ts:134008

indicates whether the data is unavailable
if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: main.ts:134005

a point in time in the Unix time format

***

### values?

> `optional` **values**: `number`[]

Defined in: main.ts:134013

relative keyword popularity rate at a specific timestamp
represents the keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term
