[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITrendsMapDataInfo

# Interface: ITrendsMapDataInfo

Defined in: main.ts:134477

## Indexable

\[`key`: `string`\]: `any`

## Properties

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:134482

Google Trends location identifier
you can use this field for matching obtained results with location parameters specified in the request
example:
US-NY

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:134485

Google Trends location name
you can use this field for matching obtained results with location parameters specified in the request

***

### max\_value\_index?

> `optional` **max\_value\_index**: `number`

Defined in: main.ts:134496

max value among comparable terms
represents the maximum value if you specified more than two keywords in a POST array
if you specified only one keyword, the value will be null

***

### values?

> `optional` **values**: `any`[]

Defined in: main.ts:134492

relative keyword popularity rate in a given location
represents the location-specific keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term
