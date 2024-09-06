[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ITrendsMapDataInfo

# Interface: ITrendsMapDataInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### geo\_id?

> `optional` **geo\_id**: `string`

Google Trends location identifier
you can use this field for matching obtained results with location parameters specified in the request
example:
US-NY

#### Defined in

main.ts:124025

***

### geo\_name?

> `optional` **geo\_name**: `string`

Google Trends location name
you can use this field for matching obtained results with location parameters specified in the request

#### Defined in

main.ts:124028

***

### max\_value\_index?

> `optional` **max\_value\_index**: `number`

max value among comparable terms
represents the maximum value if you specified more than two keywords in a POST array
if you specified only one keyword, the value will be null

#### Defined in

main.ts:124039

***

### values?

> `optional` **values**: `any`[]

relative keyword popularity rate in a given location
represents the location-specific keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Defined in

main.ts:124035
