[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataAppleAppListingsSearchLiveRequestInfo

# Interface: IAppDataAppleAppListingsSearchLiveRequestInfo

## Implemented by

- [`AppDataAppleAppListingsSearchLiveRequestInfo`](../classes/AppDataAppleAppListingsSearchLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IAppDataAppleAppListingsSearchLiveRequestInfo.md#categories)
- [description](IAppDataAppleAppListingsSearchLiveRequestInfo.md#description)
- [filters](IAppDataAppleAppListingsSearchLiveRequestInfo.md#filters)
- [limit](IAppDataAppleAppListingsSearchLiveRequestInfo.md#limit)
- [offset](IAppDataAppleAppListingsSearchLiveRequestInfo.md#offset)
- [offset\_token](IAppDataAppleAppListingsSearchLiveRequestInfo.md#offset_token)
- [order\_by](IAppDataAppleAppListingsSearchLiveRequestInfo.md#order_by)
- [tag](IAppDataAppleAppListingsSearchLiveRequestInfo.md#tag)
- [title](IAppDataAppleAppListingsSearchLiveRequestInfo.md#title)

## Properties

### categories

• `Optional` **categories**: `string`[]

app categories
optional field
the categories you specify are used to search for app listings;
you can get the full list of available app listing categories by this link
you can specify up to 10 categories

#### Defined in

[main.ts:186884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186884)

___


### description

• `Optional` **description**: `string`

keyword in the app’s description
optional field
keywords that occur in the description of the app;
can contain up to 200 symbols

#### Defined in

[main.ts:186889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186889)

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
you can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/app_data/apple/app_listings/available_filters

#### Defined in

[main.ts:186905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186905)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned apps
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:186924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186924)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned apps
optional field
default value: 0
if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities

#### Defined in

[main.ts:186929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186929)

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

[main.ts:186937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186937)

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
["item.rating.value,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["item.rating.value,desc","item.rating.value,desc"]

#### Defined in

[main.ts:186919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186919)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:186943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186943)

___


### title

• `Optional` **title**: `string`

keyword in the app’s title
optional field
keywords that occur in the title of the app;
can contain up to 200 symbols

#### Defined in

[main.ts:186894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186894)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")