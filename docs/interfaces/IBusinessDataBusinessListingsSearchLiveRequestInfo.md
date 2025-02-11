[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataBusinessListingsSearchLiveRequestInfo

# Interface: IBusinessDataBusinessListingsSearchLiveRequestInfo

Defined in: main.ts:211252

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:211258

business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:211263

description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 characters

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:211292

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

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:211271

indicates whether the business is verified by its owner on Google Maps
optional field

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:211310

the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:211281

GPS coordinates of a location
optional field
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the value of “radius” is specified in kilometres (km)
the minimum value for “radius”: 1
the maximum value for “radius”: 100000
example:
53.476225,-2.243572,200

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:211315

offset in the results array of returned businesses
optional field
default value: 0
if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:211323

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:211305

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["rating.value,desc"]note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["rating.value,desc","rating.votes_count,desc"]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:211329

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:211268

title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 characters
