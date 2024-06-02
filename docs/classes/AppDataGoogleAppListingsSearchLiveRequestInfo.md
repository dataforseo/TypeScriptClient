**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppListingsSearchLiveRequestInfo

# Class: AppDataGoogleAppListingsSearchLiveRequestInfo

## Implements

- [`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveRequestInfo(data)

> **new AppDataGoogleAppListingsSearchLiveRequestInfo**(`data`?): [`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)

#### Source

main.ts:189901

## Properties

### categories?

> **`optional`** **categories**: `string`[]

app categories
optional field
the categories you specify are used to search for app listings;
you can get the full list of available app listing categories by this link
you can specify up to 10 categories

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`categories`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#categories)

#### Source

main.ts:189838

***

### description?

> **`optional`** **description**: `string`

keyword in the app’s description
optional field
keywords that occur in the description of the app;
can contain up to 200 symbols

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`description`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#description)

#### Source

main.ts:189843

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, `<=, >`, >=, =, `<>`, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["item.rating.value",">`",3]
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/app_data/google/app_listings/available_filters

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`filters`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#filters)

#### Source

main.ts:189859

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned apps
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`limit`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#limit)

#### Source

main.ts:189878

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned apps
optional field
default value: 0
if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`offset`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#offset)

#### Source

main.ts:189883

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`offset_token`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#offset_token)

#### Source

main.ts:189891

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

#### Source

main.ts:189873

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`tag`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#tag)

#### Source

main.ts:189897

***

### title?

> **`optional`** **title**: `string`

keyword in the app’s title
optional field
keywords that occur in the title of the app;
can contain up to 200 symbols

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveRequestInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md).[`title`](../interfaces/IAppDataGoogleAppListingsSearchLiveRequestInfo.md#title)

#### Source

main.ts:189848

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:189910

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:189947

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)

#### Source

main.ts:189940
