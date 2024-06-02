**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksCompetitorsLiveRequestInfo

# Class: BacklinksCompetitorsLiveRequestInfo

## Implements

- [`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksCompetitorsLiveRequestInfo(data)

> **new BacklinksCompetitorsLiveRequestInfo**(`data`?): [`BacklinksCompetitorsLiveRequestInfo`](BacklinksCompetitorsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md)

#### Returns

[`BacklinksCompetitorsLiveRequestInfo`](BacklinksCompetitorsLiveRequestInfo.md)

#### Source

main.ts:142660

## Properties

### exclude\_large\_domains?

> **`optional`** **exclude\_large\_domains**: `boolean`

indicates whether large domain will appear in results
optional field
if set to true, the results from the large domain (google.com, amazon.com, etc.) will be omitted;
default value: true

#### Implementation of

[`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md).[`exclude_large_domains`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md#exclude_large_domains)

#### Source

main.ts:142650

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, `<>`, in, not_in, like, not_like, ilike, not_ilike
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rank",">`","100"]
[["target","like","%forbes%"],
"and",
[["rank",">","100"],"or",["intersections",">","5"]]]
The full list of possible filters is available here.

#### Implementation of

[`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md).[`filters`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md#filters)

#### Source

main.ts:142626

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md).[`limit`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md#limit)

#### Source

main.ts:142607

***

### main\_domain?

> **`optional`** **main\_domain**: `boolean`

indicates if only main domain of the target will be included in the search
optional field
if set to true, only the main domain will be included in search;
default value: true

#### Implementation of

[`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md).[`main_domain`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md#main_domain)

#### Source

main.ts:142645

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md).[`offset`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md#offset)

#### Source

main.ts:142612

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["rank,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["intersections,desc","rank,asc"]

#### Implementation of

[`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md).[`order_by`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md#order_by)

#### Source

main.ts:142640

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md#tag)

#### Source

main.ts:142656

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage to get competitor domains for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[`IBacklinksCompetitorsLiveRequestInfo`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md).[`target`](../interfaces/IBacklinksCompetitorsLiveRequestInfo.md#target)

#### Source

main.ts:142602

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:142669

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:142701

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksCompetitorsLiveRequestInfo`](BacklinksCompetitorsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksCompetitorsLiveRequestInfo`](BacklinksCompetitorsLiveRequestInfo.md)

#### Source

main.ts:142694
