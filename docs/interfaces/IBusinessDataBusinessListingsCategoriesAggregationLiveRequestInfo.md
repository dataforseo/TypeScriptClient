[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo

# Interface: IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo

## Implemented by

- [`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../classes/BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#categories)
- [description](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#description)
- [initial\_dataset\_filters](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#initial_dataset_filters)
- [internal\_list\_limit](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#internal_list_limit)
- [is\_claimed](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#is_claimed)
- [limit](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#limit)
- [location\_coordinate](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#location_coordinate)
- [offset](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#offset)
- [tag](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#tag)
- [title](IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#title)

## Properties

### categories

• `Optional` **categories**: `string`[]

business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories

#### Defined in

main.ts:195154

___

### description

• `Optional` **description**: `string`

description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 symbols

#### Defined in

main.ts:195159

___

### initial\_dataset\_filters

• `Optional` **initial\_dataset\_filters**: `any`[]

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

main.ts:195187

___

### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the aggregated categories
default value: 10

#### Defined in

main.ts:195192

___

### is\_claimed

• `Optional` **is\_claimed**: `boolean`

indicates whether the business is verified by its owner on Google Maps
optional field

#### Defined in

main.ts:195167

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:195197

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

main.ts:195176

___

### offset

• `Optional` **offset**: `number`

the maximum number of returned businesses
optional field

#### Defined in

main.ts:195200

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:195206

___

### title

• `Optional` **title**: `string`

title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 symbols

#### Defined in

main.ts:195164
