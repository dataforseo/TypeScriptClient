[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsBingDomainIntersectionLiveItem

# Interface: IDataforseoLabsBingDomainIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### first\_domain\_serp\_element?

> `optional` **first\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Defined in

main.ts:107237

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](../classes/KeywordData.md)

keyword data for the returned keyword

#### Defined in

main.ts:107234

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Defined in

main.ts:107232

***

### second\_domain\_serp\_element?

> `optional` **second\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Defined in

main.ts:107240
