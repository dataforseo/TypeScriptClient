[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo

# Class: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo

Defined in: main.ts:88152

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo()

> **new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo**(`data`?): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

Defined in: main.ts:88233

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:88192

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["domain","like","%seo%"]
[["country_iso_code","=","US"],
"and",
["domain_rank",">",100]]
[["domain_rank",">",100],
"and",
[["country_iso_code","=","US"],"or",["country_iso_code","=","CA"]]]
for more information about filters, please refer to Domain Analytics Technologies API – Filters

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[`filters`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#filters)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:88168

target keywords in the domain’s title, description or meta keywords
optional field
UTF-8 encoding
maximum number of keywords you can specify: 10
example:
["seo","software"]
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[`keywords`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#keywords)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:88214

the maximum number of returned domains
optional field
default value: 100
maximum value: 10000

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[`limit`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#limit)

***

### mode?

> `optional` **mode**: `string`

Defined in: main.ts:88175

search mode
optional field
possible search mode types:
strict_entry – search for results exactly matching the order, intervals and separators in the specified search terms
entry – search for results ignoring the order, intervals and separators in the specified search terms
default value: entry

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[`mode`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#mode)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:88221

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains;
Note: the maximum value is 9999, the sum of limit and offset must not exceed 10000;
use the offset_token if you would like to offset more results

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[`offset`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:88229

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[`offset_token`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#offset_token)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:88209

results sorting rules
optional field
available fields:
domain_rank, domain, last_visited, country_iso_code, language_code, content_language_code
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["last_visited,desc"]
default rule:
["domain_rank,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["last_visited,desc","domain_rank,desc"]

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[`order_by`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#order_by)

***

### search\_terms?

> `optional` **search\_terms**: `string`[]

Defined in: main.ts:88160

target search terms
required field
specify target HTML elements, tags, attributes, their content or all of the above
if you specify more than one search term, you will receive only the domains containing all of the specified terms in the HTML code of their homepage
maximum number of search terms you can specify: 10
example:
["data-attrid"]

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[`search_terms`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#search_terms)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88242

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88282

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

Defined in: main.ts:88275

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)
