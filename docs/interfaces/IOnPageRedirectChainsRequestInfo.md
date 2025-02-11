[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRedirectChainsRequestInfo

# Interface: IOnPageRedirectChainsRequestInfo

Defined in: main.ts:170131

## Indexable

\[`key`: `string`\]: `any`

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:170163

array of results filtering parameters
optional field
you can use only one filtering parameter with this endpoint
the following filtering parameter is supported:
is_redirect_loop
the following operators are supported:
regex, not_regex, =, <>
examples:
["is_redirect_loop","=","true"]
["is_redirect_loop","<>","false"]

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:170137

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:170147

the maximum number of returned redirect chains
optional field
default value: 100
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:170152

offset in the results array of returned redirect chains
optional field
default value: 0
if you specify the 10 value, the first ten redirect chains in the results array will be omitted and the data will be provided for the successive redirect chains

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:170169

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:170142

page URL
optional field
absolute URL of the target page
if you use this field, the API response will return only redirect chains which contain the specified URL
