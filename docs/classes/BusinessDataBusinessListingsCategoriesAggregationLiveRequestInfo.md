[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo

Defined in: main.ts:211832

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo()

> **new BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo**(`data`?): [`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

Defined in: main.ts:211894

#### Parameters

##### data?

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:211838

business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`categories`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#categories)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:211843

description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 characters

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`description`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#description)

***

### initial\_dataset\_filters?

> `optional` **initial\_dataset\_filters**: `any`[]

Defined in: main.ts:211871

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

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`initial_dataset_filters`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#initial_dataset_filters)

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:211876

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the aggregated categories
default value: 10

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#internal_list_limit)

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:211851

indicates whether the business is verified by its owner on Google Maps
optional field

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`is_claimed`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#is_claimed)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:211881

the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`limit`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#limit)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:211860

GPS coordinates of a location
optional field
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 1
the maximum value for “radius”: 100000
example:
53.476225,-2.243572,200

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#location_coordinate)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:211884

the maximum number of returned businesses
optional field

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#offset)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:211890

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#tag)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:211848

title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 characters

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`title`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211903

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:211937

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

Defined in: main.ts:211930

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)
