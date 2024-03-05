[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingDomainIntersectionLiveResultInfo

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

[main.ts:103807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103807)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:103805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103805)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:103801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103801)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:103799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103799)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Defined in

[main.ts:103793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103793)

___

### target1

• `Optional` **target1**: `string`

target specified in a POST array

#### Defined in

[main.ts:103795](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103795)

___

### target2

• `Optional` **target2**: `string`

target specified in a POST array

#### Defined in

[main.ts:103797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103797)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:103803](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103803)
