**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo(data)

> **new BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo**(`data`?): [`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

#### Source

main.ts:198998

## Properties

### categories?

> **`optional`** **categories**: `string`[]

business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`categories`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#categories)

#### Source

main.ts:198942

***

### description?

> **`optional`** **description**: `string`

description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 symbols

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`description`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#description)

#### Source

main.ts:198947

***

### initial\_dataset\_filters?

> **`optional`** **initial\_dataset\_filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, `<=, >`, >=, =, `<>`, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rating.value",">`",3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/business_data/business_listings/available_filters

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`initial_dataset_filters`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#initial_dataset_filters)

#### Source

main.ts:198975

***

### internal\_list\_limit?

> **`optional`** **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the aggregated categories
default value: 10

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#internal_list_limit)

#### Source

main.ts:198980

***

### is\_claimed?

> **`optional`** **is\_claimed**: `boolean`

indicates whether the business is verified by its owner on Google Maps
optional field

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`is_claimed`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#is_claimed)

#### Source

main.ts:198955

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`limit`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#limit)

#### Source

main.ts:198985

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

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

#### Source

main.ts:198964

***

### offset?

> **`optional`** **offset**: `number`

the maximum number of returned businesses
optional field

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#offset)

#### Source

main.ts:198988

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#tag)

#### Source

main.ts:198994

***

### title?

> **`optional`** **title**: `string`

title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 symbols

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md).[`title`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md#title)

#### Source

main.ts:198952

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:199007

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:199041

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)

#### Source

main.ts:199034
