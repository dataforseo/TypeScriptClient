[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem

# Interface: IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:140392

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

#### Defined in

main.ts:140399

***

### search\_volume?

> `optional` **search\_volume**: `number`

clickstream-based average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea based on clickstream
you can learn more about clickstream search volume in this Help Center article

#### Defined in

main.ts:140396
