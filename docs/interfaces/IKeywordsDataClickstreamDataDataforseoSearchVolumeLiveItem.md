[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem

# Interface: IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword provided in the POST array

#### Defined in

main.ts:139009

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly search volume rates
array of objects with search volume rates in a certain month of a year

#### Defined in

main.ts:139017

***

### search\_volume?

> `optional` **search\_volume**: `number`

current search volume rate of a keyword

#### Defined in

main.ts:139014

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

indicates if the use_clickstream parameter is active
possible values: true, false

#### Defined in

main.ts:139012
