[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseGoogleTrendsItem

# Class: BaseGoogleTrendsItem

## Extended by

- [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)
- [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)
- [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)
- [`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

## Implements

- [`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseGoogleTrendsItem()

> **new BaseGoogleTrendsItem**(`data`?): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Parameters

• **data?**: [`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md)

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Defined in

main.ts:21572

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21570

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21582

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21618

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Defined in

main.ts:21591
