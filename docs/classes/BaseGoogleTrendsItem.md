**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BaseGoogleTrendsItem

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

### new BaseGoogleTrendsItem(data)

> **new BaseGoogleTrendsItem**(`data`?): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Parameters

• **data?**: [`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md)

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Source

main.ts:21063

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:21061

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21073

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21109

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Source

main.ts:21082
