[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsSearchLiveRequestInfo

# Class: BusinessDataBusinessListingsSearchLiveRequestInfo

Defined in: main.ts:210588

## Implements

- [`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsSearchLiveRequestInfo()

> **new BusinessDataBusinessListingsSearchLiveRequestInfo**(`data`?): [`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)

Defined in: main.ts:210669

#### Parameters

##### data?

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md)

#### Returns

[`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:210594

business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`categories`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#categories)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:210599

description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 characters

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`description`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#description)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:210628

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rating.value",">",3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/business_data/business_listings/available_filters

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`filters`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#filters)

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:210607

indicates whether the business is verified by its owner on Google Maps
optional field

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`is_claimed`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#is_claimed)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:210646

the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`limit`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#limit)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:210617

GPS coordinates of a location
optional field
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the value of “radius” is specified in kilometres (km)
the minimum value for “radius”: 1
the maximum value for “radius”: 100000
example:
53.476225,-2.243572,200

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#location_coordinate)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:210651

offset in the results array of returned businesses
optional field
default value: 0
if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:210659

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`offset_token`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#offset_token)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:210641

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

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`order_by`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:210665

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#tag)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:210604

title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 characters

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[`title`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:210678

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:210717

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)

Defined in: main.ts:210710

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)
