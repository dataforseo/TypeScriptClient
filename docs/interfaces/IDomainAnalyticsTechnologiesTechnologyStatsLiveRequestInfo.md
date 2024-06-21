**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

# Interface: IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
minimum value 2022-10-31
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2023-06-01"

#### Source

main.ts:77440

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2023-01-15"

#### Source

main.ts:77447

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:77453

***

### technology?

> **`optional`** **technology**: `string`

target technology
required field
you can find the full list of technologies you can specify here on this page
example:
"Salesforce"

#### Source

main.ts:77432
