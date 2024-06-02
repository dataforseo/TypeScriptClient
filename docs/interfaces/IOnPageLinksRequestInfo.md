**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageLinksRequestInfo

# Interface: IOnPageLinksRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["direction","=","external"]
[["domain_to","<>","example.com"],
"and",
["link_from","not_like","%example.com/blog%"]]
[["direction","=","external"],
"and",
[["link_from","like","%example.com/blog%"],"or",["link_from","like","%example.com/help%"]]]
The full list of possible filters is available by this link.

#### Source

main.ts:155320

***

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Source

main.ts:155283

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned links
optional field
default value: 100
maximum value: 1000

#### Source

main.ts:155298

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned links
optional field
default value: 0
if you specify the 10 value, the first ten links in the results array will be omitted and the data will be provided for the successive links

#### Source

main.ts:155303

***

### page\_from?

> **`optional`** **page\_from**: `string`

relative page URL
optional field
if you use this field, the API response will contain only links from the specified page
note that in this field you can specify relative URLs only

#### Source

main.ts:155288

***

### page\_to?

> **`optional`** **page\_to**: `string`

relative page URL
optional field
if you use this field, the API response will contain only internal links pointing to the specified page
note that in this field you can specify relative URLs only

#### Source

main.ts:155293

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:155326
