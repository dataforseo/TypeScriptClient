[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataBusinessListingsSearchLiveRequestInfo

# Interface: IBusinessDataBusinessListingsSearchLiveRequestInfo

## Implemented by

- [`BusinessDataBusinessListingsSearchLiveRequestInfo`](../classes/BusinessDataBusinessListingsSearchLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#categories)
- [description](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#description)
- [filters](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#filters)
- [is\_claimed](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#is_claimed)
- [limit](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#limit)
- [location\_coordinate](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#location_coordinate)
- [offset](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#offset)
- [offset\_token](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#offset_token)
- [order\_by](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#order_by)
- [tag](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#tag)
- [title](IBusinessDataBusinessListingsSearchLiveRequestInfo.md#title)

## Properties

### categories

• `Optional` **categories**: `string`[]

business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories

#### Defined in

[main.ts:188519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188519)

___


### description

• `Optional` **description**: `string`

description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 symbols

#### Defined in

[main.ts:188524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188524)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rating.value",">",3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/business_data/business_listings/available_filters

#### Defined in

[main.ts:188552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188552)

___


### is\_claimed

• `Optional` **is\_claimed**: `boolean`

indicates whether the business is verified by its owner on Google Maps
optional field

#### Defined in

[main.ts:188532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188532)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:188570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188570)

___


### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
optional field
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 1
the maximum value for “radius”: 100000
example:
53.476225,-2.243572,200

#### Defined in

[main.ts:188541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188541)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned businesses
optional field
default value: 0
if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities

#### Defined in

[main.ts:188575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188575)

___


### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

#### Defined in

[main.ts:188583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188583)

___


### order\_by

• `Optional` **order\_by**: `string`[]

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

#### Defined in

[main.ts:188565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188565)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:188589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188589)

___


### title

• `Optional` **title**: `string`

title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 symbols

#### Defined in

[main.ts:188529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188529)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")