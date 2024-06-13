**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksPageIntersectionLiveRequestInfo

# Class: BacklinksPageIntersectionLiveRequestInfo

## Implements

- [`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageIntersectionLiveRequestInfo(data)

> **new BacklinksPageIntersectionLiveRequestInfo**(`data`?): [`BacklinksPageIntersectionLiveRequestInfo`](BacklinksPageIntersectionLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md)

#### Returns

[`BacklinksPageIntersectionLiveRequestInfo`](BacklinksPageIntersectionLiveRequestInfo.md)

#### Source

main.ts:144399

## Properties

### backlinks\_status\_type?

> **`optional`** **backlinks\_status\_type**: `string`

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your targets;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`backlinks_status_type`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#backlinks_status_type)

#### Source

main.ts:144321

***

### exclude\_targets?

> **`optional`** **exclude\_targets**: `string`[]

domains, subdomains or webpages you want to exclude
optional field
you can set up to 10 domains, subdomains or webpages
if you use this array, results will contain the referring pages that link to targets but don’t link to exclude_targets
example:
"exclude_targets": [
"bbc.com",
"https://www.apple.com/iphone/*",
"https://dataforseo.com/apis/*"]

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`exclude_targets`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#exclude_targets)

#### Source

main.ts:144312

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
["1.rank",">`","80"]
[["2.page_from_rank",">","55"],
"and",
["1.original","=","true"]]
[["1.first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["1.acnhor","like","%seo%"],"or",["1.text_pre","not_like","%seo%"]]]
The full list of possible filters is available here.

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`filters`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#filters)

#### Source

main.ts:144338

***

### include\_indirect\_links?

> **`optional`** **include\_indirect\_links**: `boolean`

indicates if indirect links to the targets will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to a target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`include_indirect_links`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#include_indirect_links)

#### Source

main.ts:144381

***

### include\_subdomains?

> **`optional`** **include\_subdomains**: `boolean`

indicates if the subdomains of the targets will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#include_subdomains)

#### Source

main.ts:144375

***

### internal\_list\_limit?

> **`optional`** **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
attributes
domain_from_platform_type
default value: 10
maximum value: 1000

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#internal_list_limit)

#### Source

main.ts:144370

***

### intersection\_mode?

> **`optional`** **intersection\_mode**: `string`

indicates whether to intersect backlinks
optional field
use this field to intersect or merge results for the specified URLs
possible values: all, partial
all – results are based on all backlinks;
partial – results are based on the intersecting backlinks only;
default value: all

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`intersection_mode`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#intersection_mode)

#### Source

main.ts:144389

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned backlinks
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`limit`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#limit)

#### Source

main.ts:144362

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of the returned backlinks
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`offset`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#offset)

#### Source

main.ts:144357

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

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`order_by`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#order_by)

#### Source

main.ts:144352

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#tag)

#### Source

main.ts:144395

***

### targets?

> **`optional`** **targets**: `Object`

domains, subdomains or webpages to get links for
required field
you can set up to 20 domains, subdomains or webpages
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)
example:
"targets": \{
"1": "http://planet.postgresql.org/",
"2": "http://gborg.postgresql.org/"
\}

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageIntersectionLiveRequestInfo`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksPageIntersectionLiveRequestInfo.md#targets)

#### Source

main.ts:144302

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:144408

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:144454

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksPageIntersectionLiveRequestInfo`](BacklinksPageIntersectionLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksPageIntersectionLiveRequestInfo`](BacklinksPageIntersectionLiveRequestInfo.md)

#### Source

main.ts:144447
