[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo()

> **new DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Defined in

main.ts:90308

## Properties

### filters?

> `optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
examples:
["expiration_datetime", "<", "2021-02-15 01:00:00 +00:00"]
[["expiration_datetime", "<", "2021-02-15 01:00:00 +00:00"],
 "and", 
["domain", "like", "%seo%"]]

for more information about filters, please refer to Dataforseo Labs - Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#filters)

#### Defined in

main.ts:90282

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#limit)

#### Defined in

main.ts:90262

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#offset)

#### Defined in

main.ts:90267

***

### order\_by?

> `optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc - results will be sorted in the ascending order
desc - results will be sorted in the descending order
the comma is used as a separator
example:
["metrics.organic.pos_1,desc"]
default rule:
["metrics.organic.count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["expiration_datetime,asc","metrics.organic.etv,desc","metrics.organic.pos_1,desc"]

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#order_by)

#### Defined in

main.ts:90298

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#tag)

#### Defined in

main.ts:90304

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:90317

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:90346

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Defined in

main.ts:90339
