[Documentation](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

# Interface: IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

## Implemented by

- [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../classes/DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_from)
- [date\_to](IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_to)
- [tag](IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#tag)
- [technology](IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#technology)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
minimum value 2022-10-31
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2023-06-01"

#### Defined in

main.ts:75955

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2023-01-15"

#### Defined in

main.ts:75962

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:75968

___

### technology

• `Optional` **technology**: `string`

target technology
required field
you can find the full list of technologies you can specify here on this page
example:
"Salesforce"

#### Defined in

main.ts:75947
