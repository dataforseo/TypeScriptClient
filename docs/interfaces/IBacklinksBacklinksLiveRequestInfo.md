[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksBacklinksLiveRequestInfo

# Interface: IBacklinksBacklinksLiveRequestInfo

Defined in: main.ts:151780

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks\_status\_type?

> `optional` **backlinks\_status\_type**: `string`

Defined in: main.ts:151876

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

***

### custom\_mode?

> `optional` **custom\_mode**: `object`

Defined in: main.ts:151800

detailed results grouping type
optional field
use this object to get a specific number of backlinks per field
if you use custom_mode, then mode will be ignored
example:
"custom_mode": {"field": "domain", "value": 100}

#### Index Signature

\[`key`: `string`\]: `any`

***

### exclude\_internal\_backlinks?

> `optional` **exclude\_internal\_backlinks**: `boolean`

Defined in: main.ts:151893

indicates if internal backlinks from subdomains to the target will be excluded from the results
optional field
if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target
if set to false, internal links will be included in the results
default value: true

***

### field?

> `optional` **field**: `string`

Defined in: main.ts:151813

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

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:151834

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
=, <>, in, not_in, like, not_like, ilike, not_ilike, regex, not_regex, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rank",">","80"]
[["page_from_rank",">","55"],
"and",
["dofollow","=",true]]
[["first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["anchor","like","%seo%"],"or",["text_pre","like","%seo%"]]]
The full list of possible filters is available here.

***

### include\_indirect\_links?

> `optional` **include\_indirect\_links**: `boolean`

Defined in: main.ts:151887

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:151881

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:151867

the maximum number of returned backlinks
optional field
default value: 100
maximum value: 1000

***

### mode?

> `optional` **mode**: `string`

Defined in: main.ts:151793

results grouping type
optional field
possible grouping types:
as_is – returns all backlinks
one_per_domain – returns one backlink per domain
one_per_anchor – returns one backlink per anchor
default value: as_is

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:151854

offset in the results array of the returned backlinks
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks;
Note: the maximum value is 20,000, use the search_after_token if you would like to offset more results

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:151848

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

***

### search\_after\_token?

> `optional` **search\_after\_token**: `string`

Defined in: main.ts:151862

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 20,000 results in a single request;
by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task ;
Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:151899

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:151785

domain, subdomain or webpage to get backlinks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:151817

number of backlinks to return per field
required field if you choose to specify custom_mode
can be set from 1 to 1000
