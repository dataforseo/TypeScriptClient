**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBacklinksLiveRequestInfo

# Class: BacklinksBacklinksLiveRequestInfo

## Implements

- [`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBacklinksLiveRequestInfo(data)

> **new BacklinksBacklinksLiveRequestInfo**(`data`?): [`BacklinksBacklinksLiveRequestInfo`](BacklinksBacklinksLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md)

#### Returns

[`BacklinksBacklinksLiveRequestInfo`](BacklinksBacklinksLiveRequestInfo.md)

#### Source

main.ts:138714

## Properties

### backlinks\_status\_type?

> **`optional`** **backlinks\_status\_type**: `string`

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`backlinks_status_type`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#backlinks_status_type)

#### Source

main.ts:138693

***

### custom\_mode?

> **`optional`** **custom\_mode**: `Object`

detailed results grouping type
optional field
use this object to get a specific number of backlinks per field
if you use custom_mode, then mode will be ignored
example:
"custom_mode": \{"field": "domain", "value": 100\}

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`custom_mode`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#custom_mode)

#### Source

main.ts:138617

***

### field?

> **`optional`** **field**: `string`

response field
required field if you choose to specify custom_mode
possible values:
anchor
domain_from
domain_from_country
tld_from
page_from_encoding
page_from_language
item_type
page_from_status_code
semantic_location

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`field`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#field)

#### Source

main.ts:138630

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, =, `<>`, in, not_in, like, not_like, ilike, not_ilike, regex, not_regex
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rank",">`","80"]
[["page_from_rank",">","55"],
"and",
["dofollow","=",true]]
[["first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["anchor","like","%seo%"],"or",["text_pre","like","%seo%"]]]
The full list of possible filters is available here.

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`filters`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#filters)

#### Source

main.ts:138651

***

### include\_indirect\_links?

> **`optional`** **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`include_indirect_links`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#include_indirect_links)

#### Source

main.ts:138704

***

### include\_subdomains?

> **`optional`** **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#include_subdomains)

#### Source

main.ts:138698

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned backlinks
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`limit`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#limit)

#### Source

main.ts:138684

***

### mode?

> **`optional`** **mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns all backlinks
one_per_domain – returns one backlink per domain
one_per_anchor – returns one backlink per anchor
default value: as_is

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`mode`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#mode)

#### Source

main.ts:138610

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of the returned backlinks
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks;
Note: the maximum value is 20,000, use the search_after_token if you would like to offset more results

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`offset`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#offset)

#### Source

main.ts:138671

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
["domain_from_rank,desc","page_from_rank,asc"]

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`order_by`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#order_by)

#### Source

main.ts:138665

***

### search\_after\_token?

> **`optional`** **search\_after\_token**: `string`

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task
Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`search_after_token`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#search_after_token)

#### Source

main.ts:138679

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#tag)

#### Source

main.ts:138710

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage to get backlinks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`target`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#target)

#### Source

main.ts:138602

***

### value?

> **`optional`** **value**: `number`

number of backlinks to return per field
required field if you choose to specify custom_mode
can be set from 1 to 1000

#### Implementation of

[`IBacklinksBacklinksLiveRequestInfo`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md).[`value`](../interfaces/IBacklinksBacklinksLiveRequestInfo.md#value)

#### Source

main.ts:138634

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:138723

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:138767

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBacklinksLiveRequestInfo`](BacklinksBacklinksLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBacklinksLiveRequestInfo`](BacklinksBacklinksLiveRequestInfo.md)

#### Source

main.ts:138760
