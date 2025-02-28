[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo

# Interface: IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo

Defined in: main.ts:212467

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:212473

business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:212478

description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 characters

***

### initial\_dataset\_filters?

> `optional` **initial\_dataset\_filters**: `any`[]

Defined in: main.ts:212506

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rating.value",">",3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/business_data/business_listings/available_filters

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:212511

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the aggregated categories
default value: 10

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:212486

indicates whether the business is verified by its owner on Google Maps
optional field

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:212516

the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:212495

GPS coordinates of a location
optional field
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 1
the maximum value for “radius”: 100000
example:
53.476225,-2.243572,200

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:212519

the maximum number of returned businesses
optional field

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:212525

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:212483

title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 characters
