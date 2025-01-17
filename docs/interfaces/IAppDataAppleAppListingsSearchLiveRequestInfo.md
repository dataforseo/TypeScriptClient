[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppListingsSearchLiveRequestInfo

# Interface: IAppDataAppleAppListingsSearchLiveRequestInfo

Defined in: main.ts:209020

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:209026

app categories
optional field
the categories you specify are used to search for app listings;
you can get the full list of available app listing categories by this link
you can specify up to 10 categories

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:209031

keyword in the app’s description
optional field
keywords that occur in the description of the app;
can contain up to 200 characters

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:209047

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rating.value",">",3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/app_data/apple/app_listings/available_filters

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:209066

the maximum number of returned apps
optional field
default value: 100
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:209071

offset in the results array of returned apps
optional field
default value: 0
if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:209079

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

Defined in: main.ts:209061

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["item.rating.value,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["item.rating.value,desc","item.rating.value,desc"]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:209085

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:209036

keyword in the app’s title
optional field
keywords that occur in the title of the app;
can contain up to 200 characters
