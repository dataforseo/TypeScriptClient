[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListingsSearchLiveRequestInfo

# Class: AppDataGoogleAppListingsSearchLiveRequestInfo

Defined in: main.ts:204734

## Implements

- [`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveRequestInfo()

> **new AppDataGoogleAppListingsSearchLiveRequestInfo**(`data`?): [`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)

Defined in: main.ts:204803

#### Parameters

##### data?

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:204740

app categories
optional field
the categories you specify are used to search for app listings;
you can get the full list of available app listing categories by this link
you can specify up to 10 categories

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`categories`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#categories)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:204745

keyword in the app’s description
optional field
keywords that occur in the description of the app;
can contain up to 200 characters

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`description`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#description)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:204761

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["item.rating.value",">",3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/app_data/google/app_listings/available_filters

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`filters`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#filters)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:204780

the maximum number of returned apps
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`limit`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:204785

offset in the results array of returned apps
optional field
default value: 0
if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`offset`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:204793

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`offset_token`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#offset_token)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:204775

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["item.installs_count,asc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["item.rating.value,desc","item.installs_count,asc"]

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`order_by`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:204799

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`tag`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#tag)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:204750

keyword in the app’s title
optional field
keywords that occur in the title of the app;
can contain up to 200 characters

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`title`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:204812

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:204849

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)

Defined in: main.ts:204842

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)
