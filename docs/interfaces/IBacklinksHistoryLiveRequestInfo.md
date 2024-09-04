[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksHistoryLiveRequestInfo

# Interface: IBacklinksHistoryLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
minimum value 2019-01-01
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:139518

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:139525

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:139531

***

### target?

> `optional` **target**: `string`

domain
required field
a domain should be specified without https:// and www.

#### Defined in

main.ts:139510
