**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsBingDomainIntersectionLiveItem

# Interface: IDataforseoLabsBingDomainIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### first\_domain\_serp\_element?

> **`optional`** **first\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Source

main.ts:107147

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](../classes/KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Source

main.ts:107144

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Source

main.ts:107142

***

### second\_domain\_serp\_element?

> **`optional`** **second\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Source

main.ts:107150
