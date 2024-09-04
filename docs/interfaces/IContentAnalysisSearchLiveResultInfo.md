[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentAnalysisSearchLiveResultInfo

# Interface: IContentAnalysisSearchLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`ContentAnalysisSearchLiveItem`](../classes/ContentAnalysisSearchLiveItem.md)[]

contains citations and related data

#### Defined in

main.ts:170657

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:170655

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

main.ts:170651

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:170653
