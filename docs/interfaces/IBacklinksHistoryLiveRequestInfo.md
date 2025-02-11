[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksHistoryLiveRequestInfo

# Interface: IBacklinksHistoryLiveRequestInfo

Defined in: main.ts:150976

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:150988

starting date of the time range
optional field
minimum value 2019-01-01
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:150995

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:151001

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:150980

domain
required field
a domain should be specified without https:// and www.
