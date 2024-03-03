[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingPageIntersectionLiveResultInfo

# Interface: IDataforseoLabsBingPageIntersectionLiveResultInfo

## Implemented by

- [`DataforseoLabsBingPageIntersectionLiveResultInfo`](../classes/DataforseoLabsBingPageIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [exclude\_pages](IDataforseoLabsBingPageIntersectionLiveResultInfo.md#exclude_pages)
- [items](IDataforseoLabsBingPageIntersectionLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingPageIntersectionLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingPageIntersectionLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingPageIntersectionLiveResultInfo.md#location_code)
- [pages](IDataforseoLabsBingPageIntersectionLiveResultInfo.md#pages)
- [se\_type](IDataforseoLabsBingPageIntersectionLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsBingPageIntersectionLiveResultInfo.md#total_count)

## Properties

### exclude\_pages

• `Optional` **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Defined in

main.ts:104977

___

### items

• `Optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](../classes/DataforseoLabsPageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Defined in

main.ts:104987

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:104985

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:104981

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:104979

___

### pages

• `Optional` **pages**: `Object`

URLs you specified a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

main.ts:104975

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Defined in

main.ts:104973

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:104983
