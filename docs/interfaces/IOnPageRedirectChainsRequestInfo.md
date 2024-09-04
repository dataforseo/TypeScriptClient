[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageRedirectChainsRequestInfo

# Interface: IOnPageRedirectChainsRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### filters?

> `optional` **filters**: `any`[]

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

#### Defined in

main.ts:158263

***

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

main.ts:158237

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned redirect chains
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:158247

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned redirect chains
optional field
default value: 0
if you specify the 10 value, the first ten redirect chains in the results array will be omitted and the data will be provided for the successive redirect chains

#### Defined in

main.ts:158252

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:158269

***

### url?

> `optional` **url**: `string`

page URL
optional field
absolute URL of the target page
if you use this field, the API response will return only redirect chains which contain the specified URL

#### Defined in

main.ts:158242
