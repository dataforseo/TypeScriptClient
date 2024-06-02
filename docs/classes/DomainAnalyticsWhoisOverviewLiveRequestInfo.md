**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsWhoisOverviewLiveRequestInfo

# Class: DomainAnalyticsWhoisOverviewLiveRequestInfo

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveRequestInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsWhoisOverviewLiveRequestInfo(data)

> **new DomainAnalyticsWhoisOverviewLiveRequestInfo**(`data`?): [`DomainAnalyticsWhoisOverviewLiveRequestInfo`](DomainAnalyticsWhoisOverviewLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsWhoisOverviewLiveRequestInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md)

#### Returns

[`DomainAnalyticsWhoisOverviewLiveRequestInfo`](DomainAnalyticsWhoisOverviewLiveRequestInfo.md)

#### Source

main.ts:79149

## Properties

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, `<=, >`, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
examples:
["expiration_datetime", "<", "2021-02-15 01:00:00 +00:00"]
[["expiration_datetime", "<", "2021-02-15 01:00:00 +00:00"],
 "and", 
["domain", "like", "%seo%"]]

for more information about filters, please refer to Filters Page or this help center guide

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveRequestInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md).[`filters`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md#filters)

#### Source

main.ts:79123

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveRequestInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md).[`limit`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md#limit)

#### Source

main.ts:79103

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveRequestInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md).[`offset`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md#offset)

#### Source

main.ts:79108

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

[`IDomainAnalyticsWhoisOverviewLiveRequestInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md).[`order_by`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md#order_by)

#### Source

main.ts:79139

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveRequestInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDomainAnalyticsWhoisOverviewLiveRequestInfo.md#tag)

#### Source

main.ts:79145

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:79158

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:79187

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveRequestInfo`](DomainAnalyticsWhoisOverviewLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsWhoisOverviewLiveRequestInfo`](DomainAnalyticsWhoisOverviewLiveRequestInfo.md)

#### Source

main.ts:79180
