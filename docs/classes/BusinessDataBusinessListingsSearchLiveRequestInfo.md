[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsSearchLiveRequestInfo

# Class: BusinessDataBusinessListingsSearchLiveRequestInfo

## Implements

- [`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsSearchLiveRequestInfo.md#constructor)

### Properties

- [categories](BusinessDataBusinessListingsSearchLiveRequestInfo.md#categories)
- [description](BusinessDataBusinessListingsSearchLiveRequestInfo.md#description)
- [filters](BusinessDataBusinessListingsSearchLiveRequestInfo.md#filters)
- [is\_claimed](BusinessDataBusinessListingsSearchLiveRequestInfo.md#is_claimed)
- [limit](BusinessDataBusinessListingsSearchLiveRequestInfo.md#limit)
- [location\_coordinate](BusinessDataBusinessListingsSearchLiveRequestInfo.md#location_coordinate)
- [offset](BusinessDataBusinessListingsSearchLiveRequestInfo.md#offset)
- [offset\_token](BusinessDataBusinessListingsSearchLiveRequestInfo.md#offset_token)
- [order\_by](BusinessDataBusinessListingsSearchLiveRequestInfo.md#order_by)
- [tag](BusinessDataBusinessListingsSearchLiveRequestInfo.md#tag)
- [title](BusinessDataBusinessListingsSearchLiveRequestInfo.md#title)

### Methods

- [init](BusinessDataBusinessListingsSearchLiveRequestInfo.md#init)
- [toJSON](BusinessDataBusinessListingsSearchLiveRequestInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsSearchLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsSearchLiveRequestInfo**(`data?`): [`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsSearchLiveRequestInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md) |

#### Returns

[`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)

#### Defined in

[main.ts:188432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188432)

## Properties

### categories

• `Optional` **categories**: `string`[]

business categories
optional field
the categories you specify are used to search for business listings;
if you don’t use this field, we will return business listings found in the specified location;
you can specify up to 10 categories

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[categories](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#categories)

#### Defined in

[main.ts:188358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188358)

___


### description

• `Optional` **description**: `string`

description of the element in SERP
optional field
the description of the business entity for which the results are collected;
can contain up to 200 symbols

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[description](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#description)

#### Defined in

[main.ts:188363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188363)

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

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[filters](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#filters)

#### Defined in

[main.ts:188391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188391)

___


### is\_claimed

• `Optional` **is\_claimed**: `boolean`

indicates whether the business is verified by its owner on Google Maps
optional field

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[is_claimed](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#is_claimed)

#### Defined in

[main.ts:188371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188371)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned businesses
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[limit](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#limit)

#### Defined in

[main.ts:188409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188409)

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

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[location_coordinate](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:188380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188380)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned businesses
optional field
default value: 0
if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[offset](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#offset)

#### Defined in

[main.ts:188414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188414)

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

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[offset_token](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#offset_token)

#### Defined in

[main.ts:188422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188422)

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

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[order_by](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:188404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188404)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[tag](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#tag)

#### Defined in

[main.ts:188428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188428)

___


### title

• `Optional` **title**: `string`

title of the element in SERP
optional field
the name of the business entity for which the results are collected;
can contain up to 200 symbols

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveRequestInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md).[title](../interfaces/IBusinessDataBusinessListingsSearchLiveRequestInfo.md#title)

#### Defined in

[main.ts:188368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188368)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:188441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188441)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:188480](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188480)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)

#### Defined in

[main.ts:188473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188473)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")