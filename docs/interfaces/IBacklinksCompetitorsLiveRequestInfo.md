[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksCompetitorsLiveRequestInfo

# Interface: IBacklinksCompetitorsLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### exclude\_internal\_backlinks?

> `optional` **exclude\_internal\_backlinks**: `boolean`

indicates if internal backlinks from subdomains to the target will be excluded from the results
optional field
if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target
if set to false, internal links will be included in the results
default value: true

#### Defined in

main.ts:148851

***

### exclude\_large\_domains?

> `optional` **exclude\_large\_domains**: `boolean`

indicates whether large domain will appear in results
optional field
if set to true, the results from the large domain (google.com, amazon.com, etc.) will be omitted;
default value: true

#### Defined in

main.ts:148845

***

### filters?

> `optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rank",">","100"]
[["target","like","%forbes%"],
"and",
[["rank",">","100"],"or",["intersections",">","5"]]]
The full list of possible filters is available here.

#### Defined in

main.ts:148821

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:148802

***

### main\_domain?

> `optional` **main\_domain**: `boolean`

indicates if only main domain of the target will be included in the search
optional field
if set to true, only the main domain will be included in search;
default value: true

#### Defined in

main.ts:148840

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

main.ts:148807

***

### order\_by?

> `optional` **order\_by**: `string`[]

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

#### Defined in

main.ts:148835

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:148857

***

### target?

> `optional` **target**: `string`

domain, subdomain or webpage to get competitor domains for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Defined in

main.ts:148797
