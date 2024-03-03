[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingDomainIntersectionLiveResultInfo

# Interface: IDataforseoLabsBingDomainIntersectionLiveResultInfo

## Implemented by

- [`DataforseoLabsBingDomainIntersectionLiveResultInfo`](../classes/DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#se_type)
- [target1](IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target1)
- [target2](IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target2)
- [total\_count](IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsDomainIntersectionLiveItem`](../classes/DataforseoLabsDomainIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Defined in

main.ts:103951

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:103949

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:103945

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:103943

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Defined in

main.ts:103937

___

### target1

• `Optional` **target1**: `string`

target specified in a POST array

#### Defined in

main.ts:103939

___

### target2

• `Optional` **target2**: `string`

target specified in a POST array

#### Defined in

main.ts:103941

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:103947
