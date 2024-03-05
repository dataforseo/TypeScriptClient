[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingDomainRankOverviewLiveResultInfo

# Interface: IDataforseoLabsBingDomainRankOverviewLiveResultInfo

## Implemented by

- [`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](../classes/DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#se_type)
- [target](IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](../classes/DataforseoLabsDomainRankOverviewLiveItem.md)[]

contains ranking and traffic data

#### Defined in

[main.ts:104189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104189)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:104187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104187)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:104183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104183)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:104181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104181)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:104177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104177)

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

[main.ts:104179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104179)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:104185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104185)
