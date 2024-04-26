**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITrendsGraphDataInfo

# Interface: ITrendsGraphDataInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

start date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Source

main.ts:123132

***

### date\_to?

> **`optional`** **date\_to**: `string`

end date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Source

main.ts:123135

***

### missing\_data?

> **`optional`** **missing\_data**: `boolean`

indicates whether the data is unavailable
if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line

#### Source

main.ts:123140

***

### timestamp?

> **`optional`** **timestamp**: `number`

a point in time in the Unix time format

#### Source

main.ts:123137

***

### values?

> **`optional`** **values**: `number`[]

relative keyword popularity rate at a specific timestamp
represents the keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term

#### Source

main.ts:123145
